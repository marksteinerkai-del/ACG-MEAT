import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { useTranslations } from '../lib/i18n';

// ─── BILDER ERSETZEN ────────────────────────────────────────────────────────
// Lade deine Bilder in den Ordner: public/images/
// Dann ersetze die Dateinamen hier unten.
const IMGS = {
  hero:   '/images/booth-hero.jpg',  // Hauptbild oben (Querformat, groß)
  photo1: '/images/booth-1.jpg',     // Archiv-Foto 1
  photo2: '/images/booth-2.jpg',     // Archiv-Foto 2
  photo3: '/images/booth-3.jpg',     // Archiv-Foto 3
};
// ────────────────────────────────────────────────────────────────────────────

export default function VocalBooth() {
  const { locale } = useRouter();
  const t = useTranslations(locale || 'en');
  const b = t.booth;
  return (
    <>
      <Head><title>Vocal Booth — ACG Meat</title></Head>
      <Nav t={t.nav} />
      <div className="page-wrapper" style={{ paddingTop: '5rem' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={IMGS.hero} alt="Vocal Booth installed" className="work-hero-img" />
        <div style={{ padding: '2rem 2.5rem 0.5rem', borderBottom: '1px solid var(--border)' }}>
          <div className="section-label">{b.label}</div>
        </div>
        <div className="work-body">
          <div className="work-intro">
            <div className="work-year">{b.year}</div>
            <h1>{b.headline}</h1>
            <div className="work-subtitle">{b.subtitle}</div>
            <p className="work-description">{b.description}</p>
          </div>
          <div className="work-specs">
            <table className="specs-table"><tbody>
              <tr><td>{b.specsApproach}</td><td>{b.specsValues.approach}</td></tr>
              <tr><td>{b.specsGeo}</td><td>{b.specsValues.geo}</td></tr>
              <tr><td>{b.specsShell}</td><td>{b.specsValues.shell}</td></tr>
              <tr><td>{b.specsInt}</td><td>{b.specsValues.interior}</td></tr>
              <tr><td>{b.specsEd}</td><td>{b.specsValues.ed}</td></tr>
            </tbody></table>
          </div>
          <div className="work-pricing">
            <div className="pricing-label">{b.pricingLabel}</div>
            <div className="pricing-amount">{b.price}</div>
            <p className="pricing-text">{b.pricingText}</p>
            <a href="mailto:marksteinerkai@gmail.com?subject=Unicate%20commission" className="btn-pink">{b.requestBtn}</a>
          </div>
          <div className="work-disclaimer"><p>{b.disclaimer}</p></div>
        </div>
        <div className="photo-grid" style={{ borderTop: '1px solid var(--border)' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={IMGS.photo1} alt="Vocal Booth — Foto 1" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={IMGS.photo2} alt="Vocal Booth — Foto 2" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={IMGS.photo3} alt="Vocal Booth — Foto 3" />
        </div>
        <Link href="/lamp" className="next-link">{b.nextLabel} &nbsp; topsix →</Link>
        <Footer t={t.footer} />
      </div>
    </>
  );
}
