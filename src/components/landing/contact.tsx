import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { WhatsappIcon } from '@/components/ui/whatsapp-icon';
import Link from 'next/link';

export default function Contact() {
  const whatsappNumber = "6281234567890"; // Ganti dengan nomor WhatsApp Anda
  const whatsappMessage = "Halo, saya tertarik dengan produk EmpekEmpekGo.";
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="bg-card py-12 md:py-24" id="kontak">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="max-w-2xl mx-auto border-2 border-primary/20 shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl md:text-4xl font-headline">Hubungi Kami</CardTitle>
            <CardDescription className="text-lg">
              Punya pertanyaan atau pesanan khusus? Kami siap membantu!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nama</Label>
                    <Input id="name" placeholder="Nama Anda" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Email Anda" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Pesan</Label>
                  <Textarea id="message" placeholder="Tulis pesan Anda di sini..." rows={5} />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Kirim Pesan
                </Button>
              </form>
              <div className="relative flex items-center justify-center my-2">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">
                    Atau
                  </span>
                </div>
              </div>
              <Button asChild variant="outline" className="w-full" size="lg">
                <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <WhatsappIcon className="w-6 h-6 mr-2" />
                  Chat via WhatsApp
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}