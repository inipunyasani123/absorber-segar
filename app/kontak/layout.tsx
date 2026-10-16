import { meta } from '@/lib/seo';

// /kontak adalah client component, jadi metadatanya dipasang di layout ini.
export const metadata = meta({
  title: 'Minta Sample Gratis',
  description:
    'Sebutkan buahnya dan ukuran tempat simpannya — kami hitung kebutuhan sachet dan kirim sample EthyleneAbsorber untuk dicoba sendiri.',
  path: '/kontak',
});

export default function KontakLayout({ children }: { children: React.ReactNode }) {
  return children;
}
