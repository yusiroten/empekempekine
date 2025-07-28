import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const testimonials = [
  {
    name: 'Rina W.',
    avatar: 'RW',
    text: 'Empek-empeknya juara! Rasa ikannya berasa banget, cukonya juga pas. Pasti order lagi!',
    rating: 5,
  },
  {
    name: 'Budi S.',
    avatar: 'BS',
    text: 'Pengiriman cepat dan packing rapi. Kapal selamnya favorit saya, isinya full!',
    rating: 5,
  },
  {
    name: 'Citra A.',
    avatar: 'CA',
    text: 'Baru pertama kali coba dan langsung suka. Tekstur empek-empeknya pas, gak alot. Recommended!',
    rating: 4,
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">Testimoni Pelanggan</h2>
          <p className="font-body text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Apa kata mereka yang sudah merasakan kelezatan Empek-Empek Ine.
          </p>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card p-6 shadow-xl rounded-2xl transform hover:-translate-y-2 transition-transform duration-300">
              <CardContent className="flex flex-col items-center text-center p-0">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted'}`}
                    />
                  ))}
                </div>
                <p className="font-body text-foreground/80 italic mb-6">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={`https://placehold.co/48x48.png?text=${testimonial.avatar}`} />
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-headline text-lg font-semibold text-primary">{testimonial.name}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
