# Proyek Empek-Empek Ine (Kode Sumber & Panduan Setup)

Selamat! Ini adalah panduan lengkap Anda untuk mengambil kode dari Firebase Studio dan menyiapkannya di komputer lokal Anda. Ikuti setiap langkah dengan teliti.

---

## Bagian 1: Membuat Ulang Proyek di Komputer Anda

Tujuan dari bagian ini adalah menyalin seluruh kode proyek dari sini ke komputer Anda.

### Langkah 1: Buat Folder Proyek
- Di komputer Anda (misalnya di Desktop atau folder Dokumen), buat sebuah folder baru.
- Beri nama folder tersebut: `empek-empek-ine`

### Langkah 2: Buka Folder dengan Editor Kode
- Buka aplikasi editor kode Anda (sangat disarankan menggunakan [Visual Studio Code](https://code.visualstudio.com/)).
- Dari menu editor, pilih `File > Open Folder...` dan buka folder `empek-empek-ine` yang baru saja Anda buat.

### Langkah 3: Buat Struktur Folder & File (Sesuai Cetak Biru di Bawah)
- Sekarang, Anda akan membuat setiap file dan folder persis seperti yang tercantum di bawah. 
- **Prosesnya**:
    1.  Lihat nama file di bawah (contoh: `package.json`).
    2.  Buat file dengan nama yang sama persis di dalam folder `empek-empek-ine` di editor kode Anda.
    3.  Salin (copy) seluruh blok kode yang ada di bawah nama file tersebut.
    4.  Tempel (paste) kode tersebut ke dalam file yang baru Anda buat.
    5.  Simpan file.
    6.  Ulangi untuk SEMUA file yang ada dalam daftar di bawah ini.

- **Untuk folder**: Jika Anda melihat path seperti `src/app/page.tsx`, Anda harus membuat folder `src` terlebih dahulu, lalu di dalamnya buat folder `app`, dan barulah buat file `page.tsx` di sana.

---

## Bagian 2: Daftar File dan Konten (Cetak Biru Proyek)

Mulai dari sini, salin setiap konten ke dalam file dengan nama dan path yang sesuai di komputer Anda.

### `package.json`
```json
{
  "name": "empek-empek-ine",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "genkit:dev": "genkit start -- tsx src/ai/dev.ts",
    "genkit:watch": "genkit start -- tsx --watch src/ai/dev.ts",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "@genkit-ai/googleai": "^1.14.1",
    "@genkit-ai/next": "^1.14.1",
    "@hookform/resolvers": "^4.1.3",
    "@radix-ui/react-accordion": "^1.2.3",
    "@radix-ui/react-alert-dialog": "^1.1.6",
    "@radix-ui/react-avatar": "^1.1.3",
    "@radix-ui/react-checkbox": "^1.1.4",
    "@radix-ui/react-collapsible": "^1.1.11",
    "@radix-ui/react-dialog": "^1.1.6",
    "@radix-ui/react-dropdown-menu": "^2.1.6",
    "@radix-ui/react-label": "^2.1.2",
    "@radix-ui/react-menubar": "^1.1.6",
    "@radix-ui/react-popover": "^1.1.6",
    "@radix-ui/react-progress": "^1.1.2",
    "@radix-ui/react-radio-group": "^1.2.3",
    "@radix-ui/react-scroll-area": "^1.2.3",
    "@radix-ui/react-select": "^2.1.6",
    "@radix-ui/react-separator": "^1.1.2",
    "@radix-ui/react-slider": "^1.2.3",
    "@radix-ui/react-slot": "^1.2.3",
    "@radix-ui/react-switch": "^1.1.3",
    "@radix-ui/react-tabs": "^1.1.3",
    "@radix-ui/react-toast": "^1.2.6",
    "@radix-ui/react-tooltip": "^1.1.8",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "date-fns": "^3.6.0",
    "dotenv": "^16.5.0",
    "embla-carousel-react": "^8.6.0",
    "firebase": "^11.9.1",
    "framer-motion": "^11.2.10",
    "genkit": "^1.14.1",
    "lucide-react": "^0.475.0",
    "next": "15.3.3",
    "patch-package": "^8.0.0",
    "react": "^18.3.1",
    "react-day-picker": "^8.10.1",
    "react-dom": "^18.3.1",
    "react-hook-form": "^7.54.2",
    "recharts": "^2.15.1",
    "tailwind-merge": "^3.0.1",
    "tailwindcss-animate": "^1.0.7",
    "zod": "^3.24.2"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "genkit-cli": "^1.14.1",
    "postcss": "^8",
    "tailwindcss": "^3.4.1",
    "typescript": "^5"
  }
}
```

### `next.config.ts`
```ts
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
    optimizePackageImports: ['framer-motion'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
```

### `tailwind.config.ts`
```ts
import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        body: ['Alegreya', 'serif'],
        headline: ['Belleza', 'sans-serif'],
        code: ['monospace'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
```

### `tsconfig.json`
```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

### `components.json`
```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "src/app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "iconLibrary": "lucide"
}
```

### `.env` (file ini kosong)
```
```

### `src/app/globals.css`
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 17 56% 94%; /* #F8EBE7 */
    --foreground: 12 25% 15%;
    --card: 17 50% 98%;
    --card-foreground: 12 25% 15%;
    --popover: 17 50% 98%;
    --popover-foreground: 12 25% 15%;
    --primary: 12 73% 62%; /* #E2725B */
    --primary-foreground: 17 50% 98%;
    --secondary: 17 50% 90%;
    --secondary-foreground: 12 25% 15%;
    --muted: 17 50% 90%;
    --muted-foreground: 12 25% 45%;
    --accent: 26 73% 62%; /* #E28F5B */
    --accent-foreground: 17 50% 98%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
    --border: 17 40% 88%;
    --input: 17 40% 88%;
    --ring: 12 73% 62%;
    --chart-1: 12 76% 61%;
    --chart-2: 173 58% 39%;
    --chart-3: 197 37% 24%;
    --chart-4: 43 74% 66%;
    --chart-5: 27 87% 67%;
    --radius: 0.8rem;
  }
 
  .dark {
    --background: 12 10% 10%;
    --foreground: 17 50% 94%;
    --card: 12 10% 12%;
    --card-foreground: 17 50% 94%;
    --popover: 12 10% 10%;
    --popover-foreground: 17 50% 94%;
    --primary: 12 73% 62%;
    --primary-foreground: 17 50% 98%;
    --secondary: 12 10% 20%;
    --secondary-foreground: 17 50% 94%;
    --muted: 12 10% 20%;
    --muted-foreground: 17 50% 60%;
    --accent: 26 73% 62%;
    --accent-foreground: 17 50% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 0% 98%;
    --border: 12 10% 25%;
    --input: 12 10% 25%;
    --ring: 12 73% 62%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}
```

### `src/app/layout.tsx`
```tsx
import type { Metadata } from 'next';
import { Toaster } from "@/components/ui/toaster"
import './globals.css';

export const metadata: Metadata = {
  title: 'Empek-Empek Ine',
  description: 'Penjualan Empek Empek Palembang by Ine Sartika Sari',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Belleza&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Alegreya:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
```

... (Lanjutkan proses ini untuk SEMUA file lain yang ada di daftar. Karena keterbatasan panjang, saya tidak akan menempelkan semua file lagi di sini, tapi Anda harus menyalinnya dari respons saya sebelumnya yang berjudul "Tentu, saya bisa bantu jelaskan.")

---

## Bagian 3: Menyiapkan Proyek dan Mengunggah ke GitHub

Setelah Anda selesai membuat semua file dan folder di komputer Anda...

### Langkah 4: Install Dependencies
- Buka terminal atau command prompt.
- Pastikan Anda berada di dalam direktori `empek-empek-ine` (`cd path/to/empek-empek-ine`).
- Jalankan perintah ini. Ini akan mengunduh semua "paket" kode yang dibutuhkan proyek Anda. Proses ini mungkin memakan waktu beberapa menit.
  ```bash
  npm install
  ```

### Langkah 5: Uji Coba Proyek (Opsional tapi disarankan)
- Setelah `npm install` selesai, jalankan perintah ini untuk melihat apakah proyek berjalan di komputer Anda:
  ```bash
  npm run dev
  ```
- Buka browser dan pergi ke `http://localhost:3000`. Jika Anda melihat website Empek-Empek Ine, berarti semuanya sudah benar!
- Hentikan server pengembangan di terminal dengan menekan `Ctrl + C`.

### Langkah 6: Siapkan untuk diunggah ke GitHub
- Sekarang proyek Anda sudah lengkap di komputer lokal. Anda siap untuk mengikuti instruksi "cara unggah kode ke github bagaimana?" yang saya berikan sebelumnya.
- Mulai dari `git init -b main`, `git add .`, dan seterusnya.

Semoga panduan ini sangat jelas! Jika ada langkah yang kurang dimengerti, tanyakan saja.