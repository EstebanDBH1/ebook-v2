import { Clock, Shield, Sparkles, Target } from "lucide-react";

const benefits = [
  {
    icon: Target,
    title: "Prompts Universales",
    description: "Cada prompt funciona en ChatGPT, Gemini, Claude, Copilot y cualquier IA. Testados en todas las plataformas.",
  },
  {
    icon: Sparkles,
    title: "Estructura Sinérgica",
    description: "Aprende el framework secreto que hace que cualquier IA entienda exactamente lo que necesitas y entregue resultados profesionales.",
  },
  {
    icon: Clock,
    title: "Ahorra Tiempo en Cada IA",
    description: "Deja de experimentar herramienta por herramienta. Obtiene resultados de calidad en segundos con cualquier modelo.",
  },
  {
    icon: Shield,
    title: "Compatible con el Futuro",
    description: "Acceso de por vida: a medida que salgan nuevas IAs, añadimos prompts adaptados sin costo adicional.",
  },
];

export const BenefitsSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-32 bg-card relative overflow-hidden">
      <div className="absolute top-0 right-0 w-48 sm:w-96 h-48 sm:h-96 bg-primary/10 rounded-full blur-[100px] sm:blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            ¿Por Qué Este <span className="text-gradient">eBook</span>?
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
            No es solo una lista de prompts. Es un sistema universal para dominar <strong className="text-foreground">cualquier IA generativa</strong> — hoy y en el futuro.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex gap-3 sm:gap-4 p-4 sm:p-6 bg-background/50 rounded-xl sm:rounded-2xl border border-border hover:border-primary/30 transition-colors"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                <benefit.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display text-lg sm:text-xl font-semibold mb-1 sm:mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm sm:text-base">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
