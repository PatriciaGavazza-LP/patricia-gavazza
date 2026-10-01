import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Hero } from '../components/Hero';
import { BackToTop } from '../components/Shared';
import { Situations, Manifesto, TherapyJourney, Methodology } from '../components/CoreSections';
import { About } from '../components/ProfileSections';
import { FAQ } from '../components/FAQ';
import { Contact } from '../components/Layout';

export const Home = () => {
  useEffect(() => {
    if (window.location.hash) {
      const element = document.querySelector(window.location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  // Schema Markup for LocalBusiness/Organization
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Patrícia Gavazza | Psicóloga Clínica",
    "image": "https://www.patriciagavazzapsicologa.com.br/imagem-home1.PNG",
    "url": "https://www.patriciagavazzapsicologa.com.br/",
    "telephone": "+5521997089664",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Rio de Janeiro",
      "addressRegion": "RJ",
      "addressCountry": "BR"
    },
    "description": "Psicóloga Clínica oferecendo psicoterapia online e presencial. Abordagem focada em autoconhecimento, autonomia e sentido existencial.",
    "sameAs": []
  };

  return (
    <>
      <Helmet>
        <title>Patrícia Gavazza | Psicóloga Clínica - Terapia e Autonomia</title>
        <meta name="description" content="Descubra como deixar de ser refém das próprias emoções. Agende sua terapia online com Patrícia Gavazza, Psicóloga Clínica no Rio de Janeiro." />
        <link rel="canonical" href="https://www.patriciagavazzapsicologa.com.br/" />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>
      <main>
        <Hero />
        <Situations />
        <Manifesto />
        <TherapyJourney />
        <Methodology />
        <About />
        <Contact />
        <FAQ />
      </main>
      <BackToTop />
    </>
  );
};
