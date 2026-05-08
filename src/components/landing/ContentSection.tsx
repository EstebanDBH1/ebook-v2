import { 
  Zap, 
  UserCheck, 
  PenTool, 
  BarChart3, 
  GraduationCap, 
  Code2, 
  Target, 
  Cpu, 
  Rocket, 
  Copy, 
  ShieldCheck, 
  Infinity 
} from "lucide-react";

const contents = [
  {
    icon: Zap,
    title: "200+ Prompts Optimizados",
    description: "Prompts probados para obtener resultados inmediatos y de alta calidad.",
  },
  {
    icon: UserCheck,
    title: "Productividad Total",
    description: "Optimiza tu flujo de trabajo tanto en el ámbito personal como profesional.",
  },
  {
    icon: PenTool,
    title: "Contenido y Copywriting",
    description: "Crea textos persuasivos y contenido creativo en segundos.",
  },
  {
    icon: BarChart3,
    title: "Análisis y Reportes",
    description: "Prompts especializados para procesar datos y generar informes detallados.",
  },
  {
    icon: GraduationCap,
    title: "Aprendizaje y Educación",
    description: "Acelera tu formación con prompts diseñados para el estudio y la enseñanza.",
  },
  {
    icon: Code2,
    title: "Programación y Desarrollo",
    description: "Asistencia avanzada para escribir código, depurar y desarrollar software.",
  },
  {
    icon: Target,
    title: "Marketing y Ventas",
    description: "Estrategias y copys enfocados en la conversión y el crecimiento.",
  },
  {
    icon: Cpu,
    title: "Prompt Engineering Multi-IA",
    description: "Domína técnicas avanzadas para comunicarte con ChatGPT, Gemini, Claude y cualquier modelo como un experto.",
  },
  {
    icon: Rocket,
    title: "Implementación Real",
    description: "Ejemplos prácticos de cómo aplicar cada prompt en casos de uso reales.",
  },
  {
    icon: Copy,
    title: "Plantillas Listas para Usar",
    description: "Formularios prediseñados para simplemente copiar, pegar y ejecutar.",
  },
  {
    icon: ShieldCheck,
    title: "Guía de Buenas Prácticas",
    description: "Aprende a evitar errores comunes y maximizar el potencial de la IA.",
  },
  {
    icon: Infinity,
    title: "Actualizaciones de por Vida",
    description: "Acceso permanente a nuevos prompts y mejoras sin costo adicional.",
  },
];
export const ContentSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-32 bg-background relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            ¿Qué Encontrarás en el <span className="text-gradient">eBook</span>?
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
            Más de 200 prompts listos para usar en <strong className="text-foreground">cualquier IA generativa</strong>, organizados por categoría y caso de uso real
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {contents.map((content, index) => (
            <div
              key={index}
              className="group bg-gradient-card border border-border rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors">
                <content.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg sm:text-xl font-semibold mb-1 sm:mb-2">{content.title}</h3>
              <p className="text-muted-foreground text-sm sm:text-base">{content.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
