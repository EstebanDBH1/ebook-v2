import { HeroSection } from "@/components/landing/HeroSection";
import { ContentSection } from "@/components/landing/ContentSection";
import { BenefitsSection } from "@/components/landing/BenefitsSection";
import { BonusSection } from "@/components/landing/BonusSection";
import { GuaranteeSection } from "@/components/landing/GuaranteeSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { FinalCTASection } from "@/components/landing/FinalCTASection";

const HOTMART_CHECKOUT_URL = "https://pay.hotmart.com/K99381988U?checkoutMode=10";

const Index = () => {
  const handleBuyNow = () => {
    window.open(HOTMART_CHECKOUT_URL, '_blank');
  };

  return (
    <main className="min-h-screen bg-background">
      <HeroSection onBuyNow={handleBuyNow} />
      <ContentSection />
      <BenefitsSection />
      <BonusSection />
      <GuaranteeSection />
      <FAQSection />
      <FinalCTASection onBuyNow={handleBuyNow} />

      {/* Footer */}
      <footer className="py-6 sm:py-8 border-t border-border bg-card">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <p className="text-muted-foreground text-xs sm:text-sm">
            © {new Date().getFullYear()} alpacka.ai. Todos los derechos reservados.
          </p>
          <p className="text-muted-foreground text-[10px] sm:text-xs mt-1 sm:mt-2">
            Los resultados pueden variar. ChatGPT es una marca registrada de OpenAI.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
