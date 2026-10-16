import HitungSachet from '@/components/HitungSachet';
import PosterHead from '@/components/PosterHead';
import { meta } from '@/lib/seo';

export const metadata = meta({
  title: 'Hitung Sachet',
  description:
    'Hitung berapa sachet EthyleneAbsorber untuk lemari stok, gudang kecil, atau kamar stok lapak kamu — satu sachet untuk 1–2 m³ ruang tertutup.',
  path: '/hitung',
});

const CONTOH = [
  ['Lemari stok', '1 m³', '1 sachet'],
  ['Gudang kecil 2×2×2 m', '8 m³', '4–8 sachet'],
  ['Kamar stok 3×3×2,5 m', '22,5 m³', '12–23 sachet'],
];

export default function HitungPage() {
  return (
    <>
      <PosterHead
        stiker="Hitung sendiri"
        title="Berapa sachet buat lapak kamu?"
        lead="Patokannya gampang: satu sachet buat 1–2 meter kubik ruang tertutup. Pilih tempatnya, hasilnya langsung keluar."
      />
      <section className="bg-cream pt-14 pb-20 md:pt-16 md:pb-24">
        <div className="mx-auto max-w-5xl px-6">
          <HitungSachet />

          <div className="mt-12 md:mt-16">
            <h2 className="text-center text-[1.8rem] leading-tight font-extrabold text-rind">Contoh cepat</h2>
            {/* Tiga kolom pendek muat di layar 360 px tanpa digeser: padding dirapatkan di ponsel. */}
            <div className="mt-8 overflow-hidden rounded-[1.75rem] border-4 border-rind/10">
              <table className="w-full text-left text-sm sm:text-base">
                <thead className="bg-cream-2">
                  <tr>
                    {['Tempat', 'Ruang', 'Butuh'].map((h) => (
                      <th key={h} scope="col" className="cap px-3 py-3.5 text-rind sm:px-5">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {CONTOH.map(([a, b, c]) => (
                    <tr key={a} className="border-t-2 border-rind/10">
                      <th scope="row" className="px-3 py-4 font-extrabold text-rind sm:px-5">{a}</th>
                      <td className="px-3 py-4 font-bold whitespace-nowrap text-rind/85 sm:px-5">{b}</td>
                      <td className="px-3 py-4 font-extrabold whitespace-nowrap text-grass-ink sm:px-5">{c}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
