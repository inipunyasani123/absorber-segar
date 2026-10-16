import Link from 'next/link';
import PosterHead from '@/components/PosterHead';

export const metadata = {
  title: { absolute: 'Halaman nggak ketemu — EthyleneAbsorber' },
  robots: { index: false, follow: true },
};

/* 404 gaya poster pasar: lapaknya sudah pindah. */
export default function NotFound() {
  return (
    <>
      <PosterHead stiker="404" title="Lapak ini sudah pindah." lead="Alamatnya mungkin salah ketik. Coba mulai lagi dari salah satu di bawah ini." />
      <section className="bg-cream py-12 md:py-16">
        <ul className="mx-auto flex max-w-3xl flex-wrap justify-center gap-3 px-6">
          {[
            ['Beranda', '/'],
            ['Kamus Buah', '/kamus-buah'],
            ['Hitung Sachet', '/hitung'],
            ['Minta Sample Gratis', '/kontak'],
          ].map(([label, href]) => (
            <li key={href}>
              <Link href={href} className="inline-flex rounded-full bg-zest px-6 py-3 text-sm font-extrabold text-rind transition-transform duration-200 hover:-translate-y-0.5">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
