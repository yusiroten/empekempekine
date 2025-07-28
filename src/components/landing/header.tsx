import { Fish } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="py-3 px-4 md:px-6 lg:px-8 bg-background/80 backdrop-blur-sm sticky top-0 z-50 border-b">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Fish className="w-8 h-8 text-primary" />
          <h1 className="text-2xl font-bold text-foreground font-headline">EmpekEmpekGo</h1>
        </div>
        <nav className="hidden md:flex items-center gap-2">
          <Button variant="ghost" asChild>
            <Link href="/#showcase">Showcase</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/#resep-ai">Resep AI</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/#lokasi">Lokasi</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/#kontak">Kontak</Link>
          </Button>
        </nav>
        <Button>Pesan Sekarang</Button>
      </div>
    </header>
  );
}