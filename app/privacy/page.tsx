import LegalPoster from '@/components/LegalPoster';
import { DIPERBARUI, PRIVASI } from '@/lib/legal';
import { meta } from '@/lib/seo';

export const metadata = meta({
  title: 'Kebijakan Privasi',
  description:
    'Data apa yang kami minta saat Anda meminta sample EthyleneAbsorber, untuk apa dipakai, dan berapa lama disimpan.',
  path: '/privacy',
});

export default function PrivacyPage() {
  return <LegalPoster judul="Kebijakan Privasi" updated={DIPERBARUI} intro={PRIVASI.intro} bagian={PRIVASI.bagian} />;
}
