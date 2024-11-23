import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';
import RoutesIndex from '@/routes';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  const [footerData, setFooterData] = useState(null);
  const [services, setServices] = useState(null);

  useEffect(() => {
    fetch('/footer.json')
      .then((res) => res.json())
      .then(setFooterData);

      fetch('/services.json')
        .then((res) => res.json())
        .then(setServices);
  }, []);

  if (!footerData) return <div>Loading...</div>;

  const router = createBrowserRouter(
    [
      {
        path: '/*',
        element: <RoutesIndex />,
      },
    ],
    {
      future: {
        v7_relativeSplatPath: true, // Enable future flag
        v7_startTransition: true, // Start transition flag (if required)
        v7_fetcherPersist: true,
        v7_normalizeFormMethod:true,
        v7_partialHydration:true,
        v7_skipActionErrorRevalidation:true,
        
      },
    }
  );

  return (
    <>
      <Header/>
      <RouterProvider router={router} />
      <Footer data={footerData} services={services.services} />
    </>
  );
}

export default App;
