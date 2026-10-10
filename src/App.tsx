import { AboutPage } from './pages/AboutPage';
import { EventsPage } from './pages/EventsPage';
import { HomePage } from './pages/HomePage';
import { RegistrationPage } from './pages/RegistrationPage';

export function App() {
  const currentPath = window.location.pathname.replace(/\/+$/, '') || '/';

  if (currentPath === '/events') {
    return <EventsPage />;
  }

  if (currentPath === '/about') {
    return <AboutPage />;
  }

  if (currentPath === '/register') {
    return <RegistrationPage />;
  }

  return <HomePage />;
}
