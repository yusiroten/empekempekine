import Logo from '@/components/logo';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="/">
          <Logo />
        </Link>
        {/* Future nav links can go here */}
      </div>
    </header>
  );
}
