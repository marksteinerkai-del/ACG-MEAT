import Link from 'next/link';
import { useRouter } from 'next/router';

// LOGO ERSETZEN: Lege dein Logo unter public/images/logo.png ab
// Empfohlene Größe: ca. 240×60px, transparenter Hintergrund (PNG)
const LOGO = '/images/logo.png';

interface NavProps {
  t: { index: string; about: string; contact: string; imprint: string };
}

export default function Nav({ t }: NavProps) {
  const router = useRouter();
  const { pathname, locale } = router;
  const otherLocale = locale === 'de' ? 'en' : 'de';

  const switchLocale = () => {
    router.push(router.asPath, router.asPath, { locale: otherLocale });
  };

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <nav>
      <Link href="/" className="nav-logo">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={LOGO} alt="ACG Meat" style={{ height: 28, width: 'auto' }} />
      </Link>
      <ul className="nav-links">
        <li><Link href="/" className={isActive('/') ? 'active' : ''}>{t.index}</Link></li>
        <li><Link href="/about" className={isActive('/about') ? 'active' : ''}>{t.about}</Link></li>
        <li><Link href="/contact" className={isActive('/contact') ? 'active' : ''}>{t.contact}</Link></li>
        <li><Link href="/imprint" className={isActive('/imprint') ? 'active' : ''}>{t.imprint}</Link></li>
      </ul>
      <div className="nav-right">
        <button className="lang-switch" onClick={switchLocale}>
          {otherLocale.toUpperCase()}
        </button>
      </div>
    </nav>
  );
}
