import React, { useState, useEffect } from 'react';
import { ShoppingCart, ArrowRight } from 'lucide-react';

const StickyHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Efecto para detectar el scroll y cambiar la apariencia si es necesario
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePurchase = () => {
    // Enlace directo a la página de pago de Hotmart
    window.location.href = 'https://pay.hotmart.com/K99381988U?checkoutMode=10';
  };

  return (
    <nav
      className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-4 py-3 ${isScrolled
          ? 'backdrop-blur-md shadow-lg'
          : 'bg-transparent'
        }`}
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between">
        {/* Logo o Nombre del Producto */}
        <div className="flex items-center gap-2">

        </div>

        {/* Botón de Adquirir en Rojo Intenso */}
        <button
          onClick={handlePurchase}
          className="group relative inline-flex items-center justify-center px-6 py-2.5 font-bold text-white transition-all duration-200 bg-red-600 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600 shadow-xl hover:bg-red-700 active:scale-95 overflow-hidden"
        >
          {/* Brillo de animación al pasar el mouse */}
          <div className="absolute inset-0 w-full h-full transition-all duration-300 scale-0 group-hover:scale-100 group-hover:bg-white/20 rounded-xl"></div>

          <div className="relative flex items-center gap-2">
            <span className="uppercase tracking-widest text-sm font-black">Comprar</span>
          </div>

          {/* Animación de pulso sutil en rojo */}
          {!isScrolled && (
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
          )}
        </button>
      </div>
    </nav>
  );
};

export default StickyHeader;