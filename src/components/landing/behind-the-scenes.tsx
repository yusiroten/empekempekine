import Image from 'next/image';

const images = [
  {
    src: 'https://placehold.co/600x400.png',
    alt: 'Proses pembuatan adonan empek-empek',
    hint: 'making dough',
  },
  {
    src: 'https://placehold.co/600x400.png',
    alt: 'Ikan tenggiri segar sebagai bahan utama',
    hint: 'fresh fish',
  },
  {
    src: 'https://placehold.co/600x400.png',
    alt: 'Empek-empek sedang direbus hingga matang',
    hint: 'boiling food',
  },
  {
    src: 'https://placehold.co/600x400.png',
    alt: 'Cuko kental yang sedang diracik',
    hint: 'making sauce',
  },
];

export default function BehindTheScenes() {
  return (
    <section className="py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground">
            Dapur Kami, Jaminan Kualitas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Lihat bagaimana kami mengubah bahan-bahan segar pilihan menjadi Empek-Empek lezat yang siap Anda nikmati.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {images.map((image, index) => (
            <div key={index} className="relative aspect-[3/2] overflow-hidden rounded-lg shadow-lg group">
              <Image
                src={image.src}
                alt={image.alt}
                data-ai-hint={image.hint}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white font-semibold">{image.alt}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
