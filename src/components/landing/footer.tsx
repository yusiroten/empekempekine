import { Fish, Twitter, Instagram, Facebook } from 'lucide-react';
import Link from 'next/link';
import { WhatsappIcon } from '../ui/whatsapp-icon';

export default function Footer() {
  const whatsappNumber = "6281234567890"; // Ganti dengan nomor WhatsApp Anda
  const whatsappMessage = "Halo, saya tertarik dengan produk EmpekEmpekGo.";
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(whatsappMessage)}`;
  
  return (
    <footer className="bg-secondary py-6">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-secondary-foreground">
          <Fish className="w-6 h-6 text-primary" />
          <span className="font-bold font-headline">EmpekEmpekGo</span>
        </div>
        <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} EmpekEmpekGo. All rights reserved.</p>
        <div className="flex items-center gap-4 text-secondary-foreground">
          <Link href={whatsappUrl} aria-label="WhatsApp" className="hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
            <WhatsappIcon className="w-5 h-5" />
          </Link>
          <a href="#" aria-label="Twitter" className="hover:text-primary transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-primary transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#" aria-label="Facebook" className="hover:text-primary transition-colors">
            <Facebook className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
