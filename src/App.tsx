import { useEffect } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { EventsPage } from './pages/EventsPage';
import { HomePage } from './pages/HomePage';
import { RegistrationPage } from './pages/RegistrationPage';

function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    const targetId = decodeURIComponent(hash.slice(1));
    window.requestAnimationFrame(() => {
      document.getElementById(targetId)?.scrollIntoView();
    });
  }, [hash, pathname]);

  return null;
}

export function App() {
  return (
    <>
      <ScrollToHash />
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<EventsPage />} path="/events" />
        <Route element={<AboutPage />} path="/about" />
        <Route element={<ContactPage />} path="/contact" />
        <Route element={<RegistrationPage />} path="/register" />
        <Route
          element={
            <main className="px-gutter-mobile py-space-2xl text-on-surface lg:px-gutter">
              <h1 className="font-headline-lg text-headline-lg">
                Page not found
              </h1>
              <Link className="mt-space-md inline-block text-secondary" to="/">
                Return home
              </Link>
            </main>
          }
          path="*"
        />
      </Routes>
    </>
  );
}
