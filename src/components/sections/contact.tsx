import { Button } from '@/components/ui/button';
import { Phone, Mail, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">Hubungi Kami</h2>
          <p className="font-body text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Siap untuk memesan atau ada pertanyaan? Kami siap membantu!
          </p>
        </div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 text-center">
            <div className="bg-card p-8 rounded-2xl shadow-lg">
                <h3 className="font-headline text-2xl text-primary mb-4">Informasi Kontak</h3>
                <div className="space-y-4 font-body text-lg">
                    <div className="flex items-center justify-center gap-3">
                        <Phone className="h-6 w-6 text-accent"/>
                        <a href="tel:+621234567890" className="hover:text-primary transition-colors">+62 123 456 7890</a>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                        <Mail className="h-6 w-6 text-accent"/>
                        <a href="mailto:info@empekempekine.com" className="hover:text-primary transition-colors">info@empekempekine.com</a>
                    </div>
                </div>
            </div>
            <div className="bg-card p-8 rounded-2xl shadow-lg flex flex-col justify-center items-center">
                <h3 className="font-headline text-2xl text-primary mb-4">Pesan Melalui WhatsApp</h3>
                <p className="font-body text-muted-foreground mb-4">Klik tombol di bawah untuk memesan langsung melalui WhatsApp.</p>
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-8 py-6 rounded-full shadow-lg transition-transform transform hover:scale-105">
                    <Link href="https://wa.me/621234567890" target="_blank">
                        <MessageCircle className="mr-2 h-6 w-6" /> Pesan di WhatsApp
                    </Link>
                </Button>
            </div>
        </div>
      </div>
    </section>
  );
}
