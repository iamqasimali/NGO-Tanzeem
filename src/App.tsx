import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import WhatsAppFloat from './components/common/WhatsAppFloat';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Programs = lazy(() => import('./pages/Programs'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Contact = lazy(() => import('./pages/Contact'));
const Donate = lazy(() => import('./pages/Donate'));
const Privacy = lazy(() => import('./pages/Privacy'));

function PageFallback() {
  return (
    <div
      className="flex min-h-[40vh] items-center justify-center bg-gray-50"
      role="status"
      aria-live="polite"
      aria-label="Loading page"
    >
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-primary-500 border-t-transparent" />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </Suspense>
        <WhatsAppFloat />
      </Layout>
    </Router>
  );
}

export default App;
