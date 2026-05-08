import { Gift, FileText, Zap } from "lucide-react";

const bonuses = [
  {
    icon: Gift,
    title: "BONUS 1: Mega Pack de Prompts Multi-IA",
    description: "50 prompts adicionales exclusivos para nichos específicos, compatibles con ChatGPT, Gemini, Claude y Copilot.",
    value: "$47",
  },
  {
    icon: FileText,
    title: "BONUS 2: Guía de Prompt Engineering Universal",
    description: "Aprende a crear tus propios prompts que funcionen perfectamente en cualquier IA generativa, desde cero.",
    value: "$27",
  },
  {
    icon: Zap,
    title: "BONUS 3: Cheat Sheet Multi-IA",
    description: "Resumen rápido con los mejores prompts para cada IA: ChatGPT, Gemini, Claude y más. Siempre a mano.",
    value: "$23",
  },
];

export const BonusSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Bonos <span className="text-gradient">Exclusivos</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
            Además del eBook, recibirás estos bonos GRATIS valorados en $97 — listos para usar en cualquier IA
          </p>
        </div>

        <div className="space-y-4 sm:space-y-6 max-w-3xl mx-auto">
          {bonuses.map((bonus, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 p-4 sm:p-6 bg-gradient-card border border-border rounded-xl sm:rounded-2xl hover:border-primary/50 transition-colors group"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                <bonus.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-base sm:text-xl font-semibold mb-0.5 sm:mb-1">{bonus.title}</h3>
                <p className="text-muted-foreground text-sm sm:text-base">{bonus.description}</p>
              </div>
              <div className="bg-primary/10 text-primary font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm">
                Valor: {bonus.value}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <div className="inline-block bg-card border border-primary/30 rounded-xl sm:rounded-2xl p-5 sm:p-8">
            <p className="text-muted-foreground text-sm sm:text-base mb-1 sm:mb-2">Valor Total</p>
            <p className="text-2xl sm:text-4xl font-black line-through text-muted-foreground/50 mb-0.5 sm:mb-1">$194</p>
            <p className="text-4xl sm:text-6xl font-black text-gradient">$10</p>
            <p className="text-primary font-semibold text-sm sm:text-base mt-1 sm:mt-2">¡Ahorra $184 HOY!</p>
          </div>
        </div>
      </div>
    </section>
  );
};
