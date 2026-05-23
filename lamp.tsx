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
  hero:     '/images/lamp-hero.jpg',  // Hauptbild oben (Querformat, groß)
  photo1:   '/images/lamp-1.jpg',     // Archiv-Foto 1
  photo2:   '/images/lamp-2.jpg',     // Archiv-Foto 2
  photo3:   '/images/lamp-3.jpg',     // Archiv-Foto 3
  photo4:   '/images/lamp-4.jpg',     // Archiv-Foto 4
};
// ────────────────────────────────────────────────────────────────────────────

export default function Lamp() {
  const { locale } = useRouter();
  const t = useTranslations(locale || 'en');
  const l = t.lamp;
  return (
    <>
      <Head><title>topsix — ACG Meat</title></Head>
      <Nav t={t.nav} />
      <div className="page-wrapper" style={{ paddingTop: '5rem' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={IMGS.hero} alt="topsix installed" className="work-hero-img" />
        <div style={{ padding: '2rem 2.5rem 0.5rem', borderBottom: '1px solid var(--border)' }}>
          <div className="section-label">{l.label}</div>
        </div>
        <div className="work-body">
          <div className="work-intro">
            <div className="work-year">{l.year}</div>
            <h1>{l.headline}</h1>
            <div className="work-subtitle">{l.subtitle}</div>
            <p className="work-description">{l.description}</p>
          </div>
          <div className="work-specs">
            <table className="specs-table"><tbody>
              <tr><td>{l.specsName}</td><td>{l.specsValues.name}</td></tr>
              <tr><td>{l.specsArt}</td><td>{l.specsValues.art}</td></tr>
              <tr><td>{l.specsDim}</td><td>{l.specsValues.dim}</td></tr>
              <tr><td>{l.specsMat}</td><td>{l.specsValues.mat}</td></tr>
              <tr><td>{l.specsLight}</td><td>{l.specsValues.light}</td></tr>
              <tr><td>{l.specsFinish}</td><td>{l.specsValues.finish}</td></tr>
              <tr><td>{l.specsEd}</td><td>{l.specsValues.ed}</td></tr>
            </tbody></table>
          </div>
          <div className="work-pricing">
            <div className="pricing-label">{l.pricingLabel}</div>
            <div className="pricing-amount">{l.price}</div>
            <p className="pricing-text">{l.pricingText}</p>
            <a href="mailto:marksteinerkai@gmail.com?subject=Unicate%20commission" className="btn-pink">{l.requestBtn}</a>
          </div>
          <div className="work-disclaimer"><p>{l.disclaimer}</p></div>
        </div>
        <div style={{ borderTop: '1px solid var(--border)' }}>
          <div className="archive-section">
            <div className="section-label">{l.archiveLabel}<span>{l.archiveCount}</span></div>
          </div>
          <div className="photo-grid">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={IMGS.photo1} alt="topsix — Foto 1" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={IMGS.photo2} alt="topsix — Foto 2" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={IMGS.photo3} alt="topsix — Foto 3" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={IMGS.photo4} alt="topsix — Foto 4" />
          </div>
        </div>
        <Link href="/vocal-booth" className="next-link">{l.nextLabel} &nbsp; Vocal Booth →</Link>
        <Footer t={t.footer} />
      </div>
    </>
  );
}
