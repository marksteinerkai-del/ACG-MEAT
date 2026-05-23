import Link from 'next/link';

interface FooterProps {
  t: { copy: string; location: string; imprint: string };
}

export default function Footer({ t }: FooterProps) {
  return (
    <footer>
      <ul className="foot-links">
        <li><Link href="/lamp">topsix</Link></li>
        <li><Link href="/vocal-booth">Vocal Booth</Link></li>
        <li><Link href="/imprint">{t.imprint}</Link></li>
      </ul>
      <span className="foot-copy">{t.copy}</span>
      <span className="foot-location">{t.location}</span>
    </footer>
  );
}
