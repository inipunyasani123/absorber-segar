import Image from 'next/image';
import Link from 'next/link';

const steps = [
  ['1', 'Masukkan', 'Taruh sachet di dalam kemasan, peti, atau kontainer bersama buahnya.'],
  ['2', 'Sachet menyerap', 'Gas etilen yang bikin buah cepat matang ditarik dari udara sekitar.'],
  ['3', 'Diubah permanen', 'Kalium permanganat mengubahnya jadi karbon dioksida dan air — tidak balik lagi.'],
  ['4', 'Buah santai', 'Pematangan melambat. Rasa, aroma, dan teksturnya tidak berubah sedikit pun.'],
];

const sectors = [
  { title: 'Kirim ke luar pulau', image: '/images/buahsegar1.webp', desc: 'Pelayaran 3–4 minggu tertutup satu sachet, tanpa ganti di tengah jalan.' },
  { title: 'Toko & rak pajang', image: '/images/buahsegar2.webp', desc: 'Buah tetap menggoda sampai toko tutup, tanpa sortir berulang.' },
  { title: 'Jus & olahan segar', image: '/images/minuman1.webp', desc: 'Bahan baku yang tidak lewat matang bikin rasa lebih konsisten.' },
];

export default function Features() {
  return (
    <>
      {/* Cara pakai */}
      <section id="cara-kerja" className="relative overflow-hidden bg-rind py-16 text-cream md:py-28">
        <div aria-hidden="true" className="speckle absolute inset-0 text-zest" />

        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <div className="mb-10 max-w-2xl md:mb-14">
            <p className="sticker mb-6 bg-zest px-5 py-2.5 text-xs text-rind uppercase">
              Gampang banget
            </p>
            <h2 className="text-[2.2rem] leading-[1.05] font-extrabold text-cream md:text-[3rem]">
              Empat langkah, tanpa alat apa pun
            </h2>
          </div>

          <ol className="grid grid-cols-2 gap-3 sm:gap-8 lg:grid-cols-4">
            {steps.map(([no, title, desc]) => (
              <li key={no} className="rounded-3xl bg-cream/10 p-5 sm:p-7">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-zest text-base font-extrabold text-rind sm:h-12 sm:w-12 sm:text-lg">
                  {no}
                </span>
                <h3 className="mt-4 text-base font-extrabold text-cream sm:mt-5 sm:text-lg">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream">{desc}</p>
              </li>
            ))}
          </ol>

          <p className="mt-8 rounded-3xl border-2 border-cream/20 px-6 py-5 text-sm sm:mt-10 sm:px-7 sm:py-6 leading-relaxed text-cream">
            <strong className="font-extrabold text-zest">Perlu diingat.</strong> Reaksinya searah —
            gas yang sudah diserap tidak akan lepas lagi meski suhu berubah selama perjalanan.{' '}
            <Link href="/faq" className="font-extrabold text-zest underline-offset-4 hover:underline">
              Pertanyaan lain →
            </Link>
          </p>
        </div>
      </section>

      {/* Dipakai di mana */}
      <section id="penerapan" className="relative overflow-hidden bg-cream py-16 md:py-28">
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <div className="mb-10 text-center md:mb-12">
            <p className="sticker-r sticker mb-6 bg-citrus px-5 py-2.5 text-xs text-rind uppercase">
              Cocok untuk
            </p>
            <h2 className="text-[2.2rem] leading-[1.05] font-extrabold text-rind md:text-[3rem]">
              Di mana saja buah harus menunggu
            </h2>
          </div>

          {/* Ponsel: kartu jadi baris (foto bulat kecil + teks) supaya tiga foto besar
              tidak memakan tiga layar; mulai sm kembali menjadi kartu berfoto. */}
          <div className="grid gap-3 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
            {sectors.map((s) => (
              <article key={s.title} className="group flex items-center overflow-hidden rounded-[2rem] bg-cream-2/50 sm:block">
                <div className="relative m-3 aspect-square w-24 shrink-0 overflow-hidden rounded-[1.4rem] sm:m-0 sm:aspect-[4/3] sm:w-full sm:rounded-none">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(min-width: 1024px) 32vw, (min-width: 640px) 48vw, 96px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="py-4 pr-5 sm:p-7">
                  <h3 className="text-lg font-extrabold text-rind">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-rind/80">{s.desc}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-10 text-center md:mt-12">
            <Link href="/kamus-buah" className="sticker inline-block bg-zest px-6 py-3 text-sm text-rind">
              Cek 12 buah di Kamus Buah →
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
