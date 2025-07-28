'use client';
import Link from 'next/link';
import { WhatsappIcon } from '../ui/whatsapp-icon';

export default function FloatingWhatsapp() {
    const whatsappNumber = "6281234567890"; // Ganti dengan nomor WhatsApp Anda
    const whatsappMessage = "Halo, saya tertarik dengan produk EmpekEmpekGo.";
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors flex items-center justify-center">
        <WhatsappIcon className="w-8 h-8" />
    </Link>
  );
}
