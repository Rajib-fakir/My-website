import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async'; // HelmetProvider ইম্পোর্ট করো
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider> {/* এখানে HelmetProvider দিয়ে র‍্যাপ করো */}
      <App />
    </HelmetProvider>
  </StrictMode>,
);
