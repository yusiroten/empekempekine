import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Budi Santoso',
    avatar: 'BS',
    image: 'https://placehold.co/100x100.png',
    hint: 'man portrait',
    quote: 'Empek-empeknya juara! Cukonya pas, ikannya terasa banget. Persis seperti di Palembang. Pasti pesan lagi!',
    rating: 5,
  },
  {
    name: 'Citra Lestari',
    avatar: 'CL',
    image: 'https://placehold.co/100x100.png',
    hint: 'woman portrait',
    quote: 'Pengirimannya cepat dan packingnya rapi. Rasa empek-empeknya otentik, apalagi yang kulit, krispi banget!',
    rating: 5,
  },
  {
    name: 'Agus Wijaya',
    avatar: 'AW',
    image: 'https://placehold.co/100x100.png',
    hint: 'person portrait',
    quote: 'Sudah coba berbagai macam empek-empek di Jakarta, tapi yang ini paling mantap. Kualitasnya premium.',
    rating: 4,
  },
  {
    name: 'Dewi Anggraini',
    avatar: 'DA',
    image: 'https://placehold.co/100x100.png',
    hint: 'woman smiling',
    quote: 'Anak-anak suka banget sama yang lenjer. Lembut dan tidak amis. Jadi langganan keluarga kami.',
    rating: 5,
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-1 text-primary">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className={`w-5 h-5 ${i < rating ? 'fill-current' : ''}`} />
    ))}
  </div>
);

export default function Testimonials() {
  return (
    <section className="py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground">
            Apa Kata Pelanggan Kami?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kami bangga dapat menyajikan kelezatan yang disukai banyak orang.
          </p>
        </div>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="h-full flex flex-col justify-between">
                    <CardContent className="p-6 flex flex-col gap-4">
                      <StarRating rating={testimonial.rating} />
                      <blockquote className="text-lg font-semibold italic text-foreground">
                        “{testimonial.quote}”
                      </blockquote>
                      <div className="flex items-center gap-4 mt-4">
                        <Avatar>
                          <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint={testimonial.hint} />
                          <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-bold">{testimonial.name}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
