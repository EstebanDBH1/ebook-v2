import { Button } from "@/components/ui/button";
import { Check, Zap, Loader2 } from "lucide-react";

interface HeroSectionProps {
  onBuyNow: () => void;
}

export const HeroSection = ({ onBuyNow }: HeroSectionProps) => {
  const benefits = [
    "Funciona con ChatGPT, Gemini, Claude, Copilot y más",
    "Más de 200 prompts universales y categorizados",
    "Actualizaciones gratuitas de por vida",
    "Garantía de satisfacción 30 días",
  ];

  return (
    <section className="relative min-h-screen bg-gradient-hero py-12 sm:py-16 lg:py-24 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] sm:w-[400px] lg:w-[600px] h-[300px] sm:h-[400px] lg:h-[600px] bg-primary/20 rounded-full blur-[100px] sm:blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left animate-fade-up">
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6 border border-primary/20">
              🚀 El recurso #1 para dominar todas las IAs generativas
            </span>
            
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight mb-4 sm:mb-6">
              El <span className="text-gradient">Único eBook</span> de Prompts para{" "}
              <span className="text-gradient">Todas las IAs</span> que Realmente Necesitas
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0">
             Domina ChatGPT, Gemini, Claude, Copilot y cualquier IA generativa con los mejores prompts. Un solo recurso para multiplicar tu productividad, sin importar qué herramienta uses.
            </p>

            <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-foreground/90 justify-center lg:justify-start">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            {/* Price section */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6 max-w-md mx-auto lg:mx-0">
              <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-4 mb-2 sm:mb-4">
                <span className="text-muted-foreground line-through text-lg sm:text-2xl">$97</span>
                <span className="text-4xl sm:text-5xl font-black text-gradient">$10</span>
                <span className="bg-primary text-primary-foreground text-xs sm:text-sm font-bold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">
                  -90%
                </span>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">
                ⏰ Oferta por tiempo limitado - El precio subirá pronto
              </p>
            </div>

            <Button
              variant="hero"
              size="xl"
              onClick={onBuyNow}
              className="w-full sm:w-auto animate-pulse-glow text-sm sm:text-lg px-6 sm:px-10 h-12 sm:h-14"
            >
              <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
              COMPRAR AHORA - $10
            </Button>

            <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-muted-foreground">
              🔒 Pago 100% seguro • Descarga instantánea
            </p>
          </div>

          {/* Right content - Ebook mockup */}
          <div className="flex-1 flex justify-center animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/30 blur-[60px] sm:blur-[100px] rounded-full" />
              <img
                src="/ebook.png"
                alt="eBook de Prompts para todas las IAs generativas"
                className="relative w-full max-w-[200px] sm:max-w-[280px] md:max-w-md drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
