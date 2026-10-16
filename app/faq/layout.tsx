import { meta } from '@/lib/seo';

// /faq adalah client component, jadi metadatanya dipasang di layout ini.
export const metadata = meta({
  title: 'Tanya Jawab',
  description:
    'Pertanyaan yang paling sering masuk soal EthyleneAbsorber: apa itu, cara pakai, berapa lama kerjanya, dan aman nggak buat makanan.',
  path: '/faq',
});

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return children;
}
