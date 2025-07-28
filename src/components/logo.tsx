import type { SVGProps } from 'react';

export default function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <div className="flex items-center gap-2">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="32" 
        height="32" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="text-primary"
        {...props}
      >
        <path d="M12.5 5.5C12.5 5.5 16 3 21 3C21 3 21.5 8.5 17.5 12C13.5 15.5 12.5 15.5 12.5 15.5" />
        <path d="M11.5 5.5C11.5 5.5 8 3 3 3C3 3 2.5 8.5 6.5 12C10.5 15.5 11.5 15.5 11.5 15.5" />
        <path d="M12 15.5C12 15.5 11 17 12 21C13 17 12 15.5 12 15.5Z" />
        <path d="M8 8C8.5 8 9 7.5 9 7C9 6.5 8.5 6 8 6C7.5 6 7 6.5 7 7C7 7.5 7.5 8 8 8Z" />
      </svg>
      <span className="font-headline text-2xl font-bold text-primary">Empek-Empek Ine</span>
    </div>
  );
}
