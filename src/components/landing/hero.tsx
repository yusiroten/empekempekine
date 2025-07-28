import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="container mx-auto px-4 md:px-6 py-12 md:py-24 lg:py-32">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold text-foreground tracking-tighter">
            Rasa Asli Palembang, Langsung ke Rumah Anda
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto md:mx-0">
            Nikmati kelezatan Empek-Empek premium, dibuat dari ikan segar pilihan dan resep warisan. Pesan sekarang dan rasakan bedanya!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button size="lg">
              Pesan Sekarang <ChevronRight className="ml-2" />
            </Button>
            <Button size="lg" variant="outline">
              Lihat Menu
            </Button>
          </div>
        </div>
        <div className="relative aspect-square overflow-hidden rounded-xl shadow-2xl transform transition-transform duration-500 hover:scale-105">
          <Image
            src="https://placehold.co/800x800.png"
            alt="Empek-empek hero image"
            data-ai-hint="empek empek"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
