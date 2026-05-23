import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { useTranslations } from '../lib/i18n';

export default function About() {
  const { locale } = useRouter();
  const t = useTranslations(locale || 'en');
  const a = t.about;

  return (
    <>
      <Head>
        <title>About — ACG Meat</title>
      </Head>
      <Nav t={t.nav} />
      <div className="page-wrapper">
        <div className="page-header">
          <div className="section-label">{a.label}</div>
          <h1 className="page-headline">{a.headline}</h1>
        </div>
        <div className="about-grid">
          <div className="about-section">
            <div className="about-num">01</div>
            <h2>{a.s1title}</h2>
            <p>{a.s1}</p>
          </div>
          <div className="about-section">
            <div className="about-num">02</div>
            <h2>{a.s2title}</h2>
            <p>{a.s2}</p>
          </div>
          <div className="about-section">
            <div className="about-num">03</div>
            <h2>{a.s3title}</h2>
            <p>{a.s3}</p>
          </div>
          <div className="about-section">
            <div className="about-num">04</div>
            <h2>{a.s4title}</h2>
            <p>{a.s4}</p>
          </div>
          <div className="about-cta">
            <a href="mailto:marksteinerkai@gmail.com?subject=Unicate%20enquiry" className="btn-pink">
              {a.writeBtn}
            </a>
          </div>
        </div>
        <div className="studio-line" style={{ borderTop: 'none' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--muted)' }}>
            {a.continueLabel}
          </span>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <Link href="/lamp" className="studio-link">topsix →</Link>
            <Link href="/vocal-booth" className="studio-link">Vocal Booth →</Link>
          </div>
        </div>
        <Footer t={t.footer} />
      </div>
    </>
  );
}
