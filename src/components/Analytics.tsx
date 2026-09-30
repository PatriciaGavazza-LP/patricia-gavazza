import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const Analytics = () => {
  const location = useLocation();
  const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  const adsId = import.meta.env.VITE_GOOGLE_ADS_ID;

  // Inicializa o gtag.js apenas uma vez
  useEffect(() => {
    const primaryId = gaId || adsId;
    
    if (!primaryId) return;
    if (document.getElementById('google-gtag')) return;

    // Script do Google Tag Manager (GTAG)
    const script = document.createElement('script');
    script.id = 'google-gtag';
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${primaryId}`;
    document.head.appendChild(script);

    // Configuração inicial do dataLayer e gtag
    const inlineScript = document.createElement('script');
    inlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){window.dataLayer.push(arguments);}
      gtag('js', new Date());
      ${gaId ? `gtag('config', '${gaId}', { send_page_view: false });` : ''}
      ${adsId ? `gtag('config', '${adsId}');` : ''}
    `;
    document.head.appendChild(inlineScript);
  }, [gaId, adsId]);

  // Rastreia visualizações de página ao mudar de rota
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      if (gaId) {
        (window as any).gtag('event', 'page_view', {
          page_path: location.pathname + location.search,
        });
      }
    }
  }, [location, gaId]);

  return null;
};
