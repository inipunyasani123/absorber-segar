import Link from 'next/link';
import KamusBuah from '@/components/KamusBuah';
import PosterHead from '@/components/PosterHead';
import { SARAN } from '@/lib/buah';
import { meta } from '@/lib/seo';

export const metadata = meta({
  title: 'Kamus Buah',
  description:
    'Dua belas buah pasar, dari pisang sampai nanas: mana yang butuh sachet, mana yang cukup dipisah, dan mana yang aman ditaruh di mana saja.',
  path: '/kamus-buah',
});

export default function KamusBuahPage() {
  return (
    <>
      <PosterHead
        stiker="Kamus Buah"
        title="Nggak semua buah butuh sachet."
        lead="Ada yang bikin gas matang sendiri, ada yang gampang rusak kena gas tetangganya, ada yang masalahnya justru lembap. Cek dagangan kamu di sini."
      />
      <section className="bg-cream pt-16 pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <KamusBuah />

          <dl className="mt-20 grid gap-4 md:grid-cols-3">
            {(Object.keys(SARAN) as (keyof typeof SARAN)[]).map((k) => (
              <div key={k} className="rounded-[1.75rem] bg-cream-2 p-6">
                <dt className={`sticker px-4 py-2 text-xs ${SARAN[k].warna}`}>{SARAN[k].label}</dt>
                <dd className="mt-4 leading-relaxed text-rind/85">{SARAN[k].ket}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-12 text-center text-rind/85">
            Mau tahu butuh berapa sachet?{' '}
            <Link href="/hitung" className="font-extrabold text-rind underline decoration-grass decoration-4 underline-offset-4">
              Hitung di sini
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
