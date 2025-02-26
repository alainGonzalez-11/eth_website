import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useEffect, useState, useRef, useLayoutEffect } from "react";
import RoutesIndex from "./routes";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const [footerData, setFooterData] = useState(null);
  const [services, setServices] = useState(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef(null);

  // Fetch footer & services data + Disable context menu on images
  useEffect(() => {
    fetch("/footer.json")
      .then((res) => res.json())
      .then(setFooterData);

    fetch("/services.json")
      .then((res) => res.json())
      .then(setServices);

    // Disable right-click on images
    const preventContextMenu = (e) => e.preventDefault();
    const attachContextMenuListener = () => {
      document.querySelectorAll("img").forEach((img) => {
        if (!img.dataset.contextMenuDisabled) {
          img.addEventListener("contextmenu", preventContextMenu);
          img.dataset.contextMenuDisabled = "true"; // Mark as processed
        }
      });
    };

    attachContextMenuListener();

    // Observe DOM changes for new images
    const observer = new MutationObserver(() => attachContextMenuListener());
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.querySelectorAll("img").forEach((img) =>
        img.removeEventListener("contextmenu", preventContextMenu)
      );
      observer.disconnect();
    };
  }, []);

  // Update header height on mount & resize
  useLayoutEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      } else {
        setHeaderHeight(50);
      }
    };

    updateHeaderHeight(); // Initial height update

    window.addEventListener("resize", updateHeaderHeight);
    return () => window.removeEventListener("resize", updateHeaderHeight);
  }, [headerRef.current]);

  // Observe changes in header content & update height
  useEffect(() => {
    if (!headerRef.current) return;

    const observer = new MutationObserver(() => {
      setHeaderHeight(headerRef.current.offsetHeight);
    });

    observer.observe(headerRef.current, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    return () => observer.disconnect();
  }, [headerRef.current]);

  if (!footerData) return <div>Loading...</div>;

  const router = createBrowserRouter(
    [
      {
        path: "/*",
        element: (
          <>
            <Header ref={headerRef} />
            <div style={{ marginTop: headerHeight }}>
              <RoutesIndex />
            </div>
          </>
        ),
      },
    ],
    {
      future: {
        v7_relativeSplatPath: true,
        v7_startTransition: true,
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,
        v7_partialHydration: true,
        v7_skipActionErrorRevalidation: true,
      },
    }
  );

  return (
    <>
      <RouterProvider router={router} />
      <Footer data={footerData} services={services?.services || []} />
    </>
  );
}

export default App;
