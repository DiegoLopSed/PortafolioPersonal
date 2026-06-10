import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import { Home } from '@/pages/Home/Home';
import { About } from '@/pages/About/About';
import { Portfolio } from '@/pages/Portfolio/Portfolio';
import { Skills } from '@/pages/Skills/Skills';
import { Blog } from '@/pages/Blog/Blog';
import { Contact } from '@/pages/Contact/Contact';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname, hash]);

  return null;
}

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

const routerBasename = import.meta.env.BASE_URL.replace(/\/$/, '');

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter basename={routerBasename || undefined}>
        <div className="app-layout">
          <a href="#main-content" className="skip-link">
            Saltar al contenido principal
          </a>
          <Header />
          <main id="main-content" className="main-content" tabIndex={-1}>
            <AppRoutes />
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}
