import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const products = [
  {
    name: 'Empek-Empek Lenjer',
    description: 'Bentuk lonjong klasik dengan rasa ikan yang kuat.',
    price: 'Rp. 5.000',
    image: 'https://placehold.co/400x300.png',
    aiHint: 'food dumpling'
  },
  {
    name: 'Empek-Empek Adaan',
    description: 'Bulat gurih dengan campuran bawang dan santan.',
    price: 'Rp. 5.000',
    image: 'https://placehold.co/400x300.png',
    aiHint: 'savory pastry'
  },
  {
    name: 'Empek-Empek Kulit',
    description: 'Tekstur renyah dan rasa yang khas dari kulit ikan.',
    price: 'Rp. 5.000',
    image: 'https://placehold.co/400x300.png',
    aiHint: 'fried food'
  },
  {
    name: 'Empek-Empek Kapal Selam',
    description: 'Isi telur ayam utuh, paling favorit dan mengenyangkan.',
    price: 'Rp. 10.000',
    image: 'https://placehold.co/400x300.png',
    aiHint: 'indonesian food'
  },
];

export default function ProductsSection() {
  return (
    <section id="products" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">Produk Kami</h2>
          <p className="font-body text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Pilihan empek-empek terbaik yang dibuat setiap hari untuk menjamin kesegarannya.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border-2 border-transparent hover:border-primary flex flex-col">
              <div className="relative h-48 w-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  data-ai-hint={product.aiHint}
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-headline text-2xl text-primary">{product.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <CardDescription className="font-body text-base mb-4">{product.description}</CardDescription>
                <Badge variant="outline" className="text-lg font-bold border-accent text-accent self-start">{product.price}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
