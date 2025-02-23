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
    fetch('/footer.json')
      .then(res => res.json())
      .then(setFooterData)

    fetch('/services.json')
      .then(res => res.json())
      .then(setServices)

      const preventContextMenu = (e) => e.preventDefault();

      // Function to attach the event to all images
      const attachContextMenuListener = () => {
        const images = document.querySelectorAll('img');
        images.forEach((img) => {
          if (!img.dataset.contextMenuDisabled) {
            img.addEventListener('contextmenu', preventContextMenu);
            img.dataset.contextMenuDisabled = true; // Mark the image as processed
          }
        });
      };
    
      // Attach to existing images
      attachContextMenuListener();
    
      // Use MutationObserver to watch for new images
      const observer = new MutationObserver(() => attachContextMenuListener());
      observer.observe(document.body, { childList: true, subtree: true });
    
      return () => {
        // Cleanup: remove event listeners and observer
        const images = document.querySelectorAll('img');
        images.forEach((img) =>
          img.removeEventListener('contextmenu', preventContextMenu)
        );
        observer.disconnect();
      };
  }, [])


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
