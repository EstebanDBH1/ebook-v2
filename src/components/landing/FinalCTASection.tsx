import { Button } from "@/components/ui/button";
import { Check, Zap } from "lucide-react";

interface FinalCTASectionProps {
  onBuyNow: () => void;
}

export const FinalCTASection = ({ onBuyNow }: FinalCTASectionProps) => {
  const includes = [
    "eBook completo con +200 prompts universales",
    "BONUS 1: Mega Pack Multi-IA ($47)",
    "BONUS 2: Guía de Prompt Engineering Universal ($27)",
    "BONUS 3: Cheat Sheet Multi-IA ($23)",
    "Actualizaciones de por vida",
    "Garantía de 30 días",
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-32 bg-gradient-hero relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] lg:w-[800px] h-[400px] sm:h-[600px] lg:h-[800px] bg-primary/20 rounded-full blur-[150px] sm:blur-[200px] pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Es Hora de <span className="text-gradient">Dominar Todas las IAs</span>
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-8 sm:mb-12">
            No dejes pasar esta oportunidad. Únete a miles de usuarios que ya dominan ChatGPT, Gemini, Claude y Copilot 
            con los mismos prompts de este eBook.
          </p>

          <div className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 mb-6 sm:mb-8">
            <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4 sm:mb-6">
              <span className="text-muted-foreground line-through text-xl sm:text-3xl">$97</span>
              <span className="text-4xl sm:text-5xl lg:text-6xl font-black text-gradient">$10</span>
            </div>
            
            <p className="text-primary font-semibold text-sm sm:text-base mb-6 sm:mb-8">
              ⚡ Precio especial de lanzamiento - 90% de descuento
            </p>

            <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 max-w-md mx-auto">
              {includes.map((item, index) => (
                <li key={index} className="flex items-center gap-2 sm:gap-3 text-foreground text-sm sm:text-base">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                  <span className="text-left">{item}</span>
                </li>
              ))}
            </ul>

            <Button
              variant="hero"
              size="xl"
              onClick={onBuyNow}
              className="w-full sm:w-auto animate-pulse-glow text-sm sm:text-lg px-6 sm:px-10 h-12 sm:h-14"
            >
              <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
              SÍ, QUIERO EL EBOOK - $10
            </Button>

            <p className="mt-4 sm:mt-6 text-xs sm:text-sm text-muted-foreground">
              🔒 Pago 100% seguro con Hotmart • Descarga instantánea
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
