
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add structured data for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "IkiVibe Chōka Labs",
  "url": "https://ikivibechokalabs.com",
  "logo": "https://ikivibechokalabs.com/lovable-uploads/b04d8c9f-1545-4590-bd72-8ecdfa194d9e.png",
  "description": "Building a world where ideas survive, humans thrive, and wealth endures across generations.",
  "sameAs": [
    "https://x.com/ikivibelabs",
    "https://x.com/chokalabs",
    "https://x.com/360wealthlabs"
  ]
};

// Create a script element for the structured data
const script = document.createElement('script');
script.type = 'application/ld+json';
script.text = JSON.stringify(jsonLd);
document.head.appendChild(script);

createRoot(document.getElementById("root")!).render(<App />);
