import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const empekEmpekVariations = [
  {
    name: 'Kapal Selam',
    description: 'Empek-empek klasik dengan isian telur utuh, digoreng renyah di luar dan lembut di dalam.',
    image: 'https://placehold.co/600x400.png',
    hint: 'empek empek telur',
    tags: ['Favorit', 'Klasik'],
  },
  {
    name: 'Lenjer',
    description: 'Bentuk lonjong memanjang dengan rasa ikan yang kuat, sempurna untuk dinikmati bersama cuko.',
    image: 'https://placehold.co/600x400.png',
    hint: 'empek empek lenjer',
    tags: ['Original'],
  },
  {
    name: 'Kulit Krispi',
    description: 'Dibuat dari kulit ikan tenggiri, menghasilkan tekstur yang garing dan rasa yang gurih unik.',
    image: 'https://placehold.co/600x400.png',
    hint: 'empek empek kulit',
    tags: ['Renyah', 'Spesial'],
  },
  {
    name: 'Adaan (Bulat)',
    description: 'Adonan empek-empek yang dicampur dengan santan dan bawang, menciptakan rasa yang kaya dan wangi.',
    image: 'https://placehold.co/600x400.png',
    hint: 'empek empek adaan',
    tags: ['Gurih'],
  },
];

export default function Showcase() {
  return (
    <section id="showcase" className="bg-card py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground">
            Varian Empek-Empek Kami
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dari yang klasik hingga yang inovatif, setiap gigitan adalah sebuah perjalanan rasa ke Palembang.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {empekEmpekVariations.map((item) => (
            <Card key={item.name} className="overflow-hidden group hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="p-0">
                <div className="relative aspect-video">
                  <Image
                    src={item.image}
                    alt={item.name}
                    data-ai-hint={item.hint}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="font-headline text-2xl mb-2">{item.name}</CardTitle>
                <div className="flex gap-2 mb-4">
                  {item.tags.map((tag) => (
                    <Badge key={tag} variant={tag === 'Favorit' ? 'default' : 'secondary'} className={tag === 'Favorit' ? 'bg-primary text-primary-foreground' : 'bg-accent text-accent-foreground'}>
                      {tag}
                    </Badge>
                  ))}
                </div>
                <CardDescription>{item.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
