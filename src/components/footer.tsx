import { Instagram, Facebook, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import Logo from '@/components/logo';

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/">
              <Logo />
            </Link>
            <p className="mt-2 text-sm font-body">Empek Empek Palembang Asli by Ine Sartika Sari.</p>
          </div>
          <div className="flex space-x-6">
            <Link href="#" aria-label="Instagram" className="text-secondary-foreground hover:text-primary transition-colors">
              <Instagram className="h-6 w-6" />
            </Link>
            <Link href="#" aria-label="Facebook" className="text-secondary-foreground hover:text-primary transition-colors">
              <Facebook className="h-6 w-6" />
            </Link>
            <Link href="#" aria-label="WhatsApp" className="text-secondary-foreground hover:text-primary transition-colors">
              <MessageCircle className="h-6 w-6" />
            </Link>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-6 text-center text-sm font-body text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Empek-Empek Ine. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
