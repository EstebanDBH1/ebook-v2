import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Cómo recibo el acceso después de la compra?",
    answer: "Inmediatamente después de completar tu pago, recibirás un email con el enlace de acceso directo a nuestra biblioteca privada en Notion. La entrega es instantánea.",
  },
  {
    question: "¿Funciona con ChatGPT, Gemini, Claude y otras IAs?",
    answer: "¡Sí! Los prompts están diseñados bajo principios de ingeniería del lenguaje que funcionan en cualquier IA generativa: ChatGPT (GPT-4/5), Gemini, Claude, Copilot y cualquier modelo que salga en el futuro. El contenido es 100% universal.",
  },
  {
    question: "¿Qué formato tiene el eBook?",
    answer: "Más que un simple PDF, recibirás acceso a una base de datos dinámica en Notion. Esto te permite copiar y pegar los prompts fácilmente, filtrarlos por categorías, por IA y acceder a actualizaciones en tiempo real.",
  },
  {
    question: "¿Recibiré actualizaciones cuando salgan nuevas IAs?",
    answer: "Sí, tendrás acceso de por vida a la página de Notion. A medida que aparezcan nuevos modelos y plataformas, añadiremos prompts optimizados sin costo adicional para ti.",
  },
  {
    question: "¿Cómo funciona la garantía?",
    answer: "Si no estás satisfecho con la biblioteca de prompts por cualquier razón, simplemente envíanos un email dentro de los 30 días posteriores a la compra y te reembolsaremos el 100% de tu dinero. Sin preguntas.",
  },
  {
    question: "¿Necesito experiencia previa con IAs?",
    answer: "No, la guía está diseñada tanto para principiantes como para usuarios avanzados. Incluimos instrucciones claras de cómo usar cada prompt en distintas IAs para obtener los mejores resultados.",
  },
];

export const FAQSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Preguntas <span className="text-gradient">Frecuentes</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base lg:text-lg">
            ¿Tienes dudas? Aquí te respondemos las más comunes
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg sm:rounded-xl px-4 sm:px-6 data-[state=open]:border-primary/50"
              >
                <AccordionTrigger className="text-left font-display font-semibold text-sm sm:text-base hover:no-underline hover:text-primary py-4 sm:py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm sm:text-base pb-4 sm:pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
