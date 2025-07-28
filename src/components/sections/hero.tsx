import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left animate-fade-in-up">
            <h1 className="font-headline text-4xl md:text-6xl font-bold text-primary leading-tight tracking-tighter mb-6">
              Nikmati Kelezatan Asli Empek-Empek Palembang
            </h1>
            <p className="font-body text-lg md:text-xl text-foreground mb-8 max-w-xl mx-auto md:mx-0">
              Dibuat dengan ikan segar pilihan dan resep warisan keluarga, hadirkan cita rasa otentik Palembang ke meja makan Anda.
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-8 py-6 rounded-full shadow-lg transition-transform transform hover:scale-105">
              Pesan Sekarang
            </Button>
          </div>
          <div className="relative h-80 md:h-full w-full animate-fade-in">
            <Image
              src="https://placehold.co/600x600.png"
              alt="Empek-empek disajikan dengan kuah cuko"
              fill
              data-ai-hint="indonesian food"
              className="object-cover rounded-2xl shadow-2xl transform md:hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
