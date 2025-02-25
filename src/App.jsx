import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useEffect, useState, useRef, useLayoutEffect } from 'react';
import RoutesIndex from './routes';
import Footer from './components/Footer';
import Header from './components/Header';

function App () {
  const [footerData, setFooterData] = useState(null)
  const [services, setServices] = useState(null)
  const [headerHeight, setHeaderHeight] = useState(0)
  const headerRef = useRef(null);

  useEffect(() => {
    // Fetch footer and services data
    fetch('/footer.json')
      .then((res) => res.json())
      .then(setFooterData);

    fetch('/services.json')
      .then((res) => res.json())
      .then(setServices);

    // Prevent right-click context menu on images
    const preventContextMenu = (e) => e.preventDefault();

    const attachContextMenuListener = () => {
      const images = document.querySelectorAll('img');
      images.forEach((img) => {
        if (!img.dataset.contextMenuDisabled) {
          img.addEventListener('contextmenu', preventContextMenu);
          img.dataset.contextMenuDisabled = 'true'; // Mark as processed
        }
      });
    };

    attachContextMenuListener(); // Attach to existing images

    // Observe DOM changes to prevent context menu on new images
    const observer = new MutationObserver(() => attachContextMenuListener());
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      // Cleanup: remove event listeners and observer
      document.querySelectorAll('img').forEach((img) =>
        img.removeEventListener('contextmenu', preventContextMenu)
      );
      observer.disconnect();
    };
  }, []);

  useLayoutEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }

    const handleResize = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [headerRef.current]); // Runs when headerRef.current changes



  if (!footerData) return <div>Loading...</div>

  const router = createBrowserRouter(
    [
      {
        path: '/*',
        element: (
          <>
            <Header ref={headerRef} />
            <div style={{ marginTop: headerHeight }}>
                <RoutesIndex />
            </div>
          </>
        )
      }
    ],
    {
      future: {
        v7_relativeSplatPath: true,
        v7_startTransition: true,
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,
        v7_partialHydration: true,
        v7_skipActionErrorRevalidation: true
      }
    }
  )

  return (
    <>
      <RouterProvider router={router} />
      <Footer data={footerData} services={services?.services || []} />
    </>
  )
}

export default App
