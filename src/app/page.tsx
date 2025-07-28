import Header from '@/components/header';
import HeroSection from '@/components/sections/hero';
import ProductsSection from '@/components/sections/products';
import TestimonialsSection from '@/components/sections/testimonials';
import ContactSection from '@/components/sections/contact';
import Footer from '@/components/footer';
import AiChat from '@/components/ai-chat';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ProductsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <AiChat />
    </div>
  );
}
