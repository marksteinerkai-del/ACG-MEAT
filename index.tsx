import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { useTranslations } from '../lib/i18n';

export default function Home() {
  const { locale } = useRouter();
  const t = useTranslations(locale || 'en');

  return (
    <>
      <Head>
        <title>ACG Meat — Every object tells a story</title>
        <meta name="description" content="A personal studio for objects with a story. Hand-built, made as unicates." />
      </Head>
      <Nav t={t.nav} />
      <section className="hero">
        {/* BILD ERSETZEN: public/images/hero.jpg */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/hero.jpg" alt="ACG Meat — hero" className="hero-img" />
        <div className="hero-content">
          <h1 className="hero-tagline">{t.home.tagline}</h1>
        </div>
        <div className="hero-scroll">{t.home.scroll}</div>
      </section>
      <section className="work-section">
        <div className="section-label">
          {t.home.indexLabel}<span>02 / {t.home.ongoing}</span>
        </div>
        <ul className="work-list">
          <li>
            <Link href="/lamp" className="work-item">
              <span className="work-num">01</span>
              <span className="work-name">topsix</span>
              <span className="work-meta">White Oak · 2024</span>
              <span className="work-arrow">→</span>
            </Link>
          </li>
          <li>
            <Link href="/vocal-booth" className="work-item">
              <span className="work-num">02</span>
              <span className="work-name">Vocal Booth</span>
              <span className="work-meta">Birch · Felt · 2025</span>
              <span className="work-arrow">→</span>
            </Link>
          </li>
        </ul>
      </section>
      <div className="studio-line">
        <Link href="/about" className="studio-link">{t.home.aboutLink}</Link>
        <span className="studio-made">{t.home.madeIn}</span>
      </div>
      <Footer t={t.footer} />
    </>
  );
}
