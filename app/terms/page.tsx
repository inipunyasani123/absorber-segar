import LegalPoster from '@/components/LegalPoster';
import { DIPERBARUI, KETENTUAN } from '@/lib/legal';
import { meta } from '@/lib/seo';

export const metadata = meta({
  title: 'Syarat & Ketentuan',
  description:
    'Ketentuan sample gratis, perhitungan dosis, pemesanan, dan klaim mutu produk EthyleneAbsorber dan desiccant PT Dickson Synergy.',
  path: '/terms',
});

export default function TermsPage() {
  return <LegalPoster judul="Syarat & Ketentuan" updated={DIPERBARUI} intro={KETENTUAN.intro} bagian={KETENTUAN.bagian} />;
}
