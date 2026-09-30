import { motion } from 'motion/react';
import React, { ReactNode, useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  key?: React.Key;
}

export const FadeIn = ({ children, delay = 0, duration = 0.8, className = '', direction = 'up' }: FadeInProps) => {
  const directions = {
    up: { y: 25, x: 0 },
    down: { y: -25, x: 0 },
    left: { x: 25, y: 0 },
    right: { x: -25, y: 0 },
    none: { x: 0, y: 0 }
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const Button = ({
  children,
  href,
  onClick,
  className = '',
  type,
  target,
}: {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  target?: string;
}) => {
  const baseStyle =
    "inline-flex items-center justify-center px-8 py-4 bg-brand-olive-dark text-white rounded-md font-medium text-sm sm:text-base tracking-wide transition-all duration-300 hover:bg-brand-pink-dark hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-brand-pink-light focus:ring-offset-2 focus:ring-offset-brand-offwhite cursor-pointer";

  const trackClick = () => {
    // Se for um link do WhatsApp, dispara evento de conversão
    if (href && href.includes('wa.me') && typeof window !== 'undefined' && (window as any).gtag) {
      const conversionId = import.meta.env.VITE_GOOGLE_ADS_CONVERSION_ID;
      
      // GA4 event
      (window as any).gtag('event', 'generate_lead', {
        event_category: 'engagement',
        event_label: 'whatsapp_click',
        value: 1
      });

      // Google Ads Conversion tracking (if configured)
      if (conversionId) {
        (window as any).gtag('event', 'conversion', {
          'send_to': conversionId
        });
      }
    }
    
    if (onClick) onClick();
  };

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        onClick={trackClick}
        className={`${baseStyle} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={trackClick} className={`${baseStyle} ${className}`}>
      {children}
    </button>
  );
};


export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 p-3.5 rounded-full bg-brand-olive-dark text-white shadow-xl hover:bg-brand-pink-dark transition-all z-50 ${
        !isVisible ? 'pointer-events-none' : 'cursor-pointer'
      }`}
      aria-label="Voltar ao topo"
    >
      <ArrowUp size={20} />
    </motion.button>
  );
};
