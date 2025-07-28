import Image from 'next/image';

export default function Locations() {
  return (
    <section id="lokasi" className="bg-card py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground">
            Temukan Kami
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kami melayani pengiriman di seluruh area Jabodetabek. Kunjungi juga outlet kami untuk pengalaman makan di tempat yang tak terlupakan.
          </p>
        </div>
        <div className="relative aspect-video max-w-5xl mx-auto overflow-hidden rounded-xl shadow-lg border-4 border-background">
          <Image
            src="https://placehold.co/1200x675.png"
            alt="Map of delivery locations"
            data-ai-hint="map jabodetabek"
            fill
            className="object-cover"
          />
           <div className="absolute inset-0 bg-black/10"></div>
        </div>
      </div>
    </section>
  );
}
