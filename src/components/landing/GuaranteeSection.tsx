import { Shield, Clock, RefreshCw } from "lucide-react";

export const GuaranteeSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 sm:mb-8">
            <Shield className="w-7 h-7 sm:w-10 sm:h-10 text-primary" />
          </div>
          
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Garantía de Satisfacción <span className="text-gradient">100%</span>
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto">
            Si el eBook no supera tus expectativas, te devolvemos el 100% de tu dinero. 
            Sin preguntas, sin complicaciones. Tu satisfacción es nuestra prioridad.
          </p>

          <div className="grid grid-cols-3 gap-4 sm:gap-8">
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-background flex items-center justify-center mx-auto mb-2 sm:mb-4 border border-border">
                <Clock className="w-5 h-5 sm:w-8 sm:h-8 text-primary" />
              </div>
              <p className="text-2xl sm:text-4xl font-black text-foreground mb-1 sm:mb-2">30</p>
              <p className="text-muted-foreground text-xs sm:text-base">Días de garantía</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-background flex items-center justify-center mx-auto mb-2 sm:mb-4 border border-border">
                <Shield className="w-5 h-5 sm:w-8 sm:h-8 text-primary" />
              </div>
              <p className="text-2xl sm:text-4xl font-black text-foreground mb-1 sm:mb-2">100%</p>
              <p className="text-muted-foreground text-xs sm:text-base">Reembolso garantizado</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-background flex items-center justify-center mx-auto mb-2 sm:mb-4 border border-border">
                <RefreshCw className="w-5 h-5 sm:w-8 sm:h-8 text-primary" />
              </div>
              <p className="text-2xl sm:text-4xl font-black text-foreground mb-1 sm:mb-2">0</p>
              <p className="text-muted-foreground text-xs sm:text-base">Preguntas incómodas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
