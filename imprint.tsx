import Head from 'next/head';
import { useRouter } from 'next/router';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { useTranslations } from '../lib/i18n';

export default function Imprint() {
  const { locale } = useRouter();
  const t = useTranslations(locale || 'en');
  const i = t.imprint;

  return (
    <>
      <Head>
        <title>{i.headline} — ACG Meat</title>
      </Head>
      <Nav t={t.nav} />
      <div className="page-wrapper">
        <div className="page-header">
          <div className="section-label">{i.label}</div>
          <h1 className="page-headline">{i.headline}</h1>
        </div>
        <div className="about-grid">
          <div className="about-section">
            <div className="about-num">01</div>
            <h2>{i.responsibleLabel}</h2>
            <p style={{ whiteSpace: 'pre-line' }}>
              {i.name}{'\n'}{i.address}
            </p>
          </div>
          <div className="about-section">
            <div className="about-num">02</div>
            <h2>{i.contactLabel}</h2>
            <p>
              <a href={`mailto:${i.email}`} style={{ color: 'var(--pink)' }}>{i.email}</a>
            </p>
          </div>
          <div className="about-section">
            <div className="about-num">03</div>
            <h2>{i.vatLabel}</h2>
            <p>{i.vatText}</p>
          </div>
          <div className="about-section">
            <div className="about-num">04</div>
            <h2>{i.liabilityLabel}</h2>
            <p>{i.liabilityText}</p>
          </div>
          <div className="about-section">
            <div className="about-num">05</div>
            <h2>{i.linksLabel}</h2>
            <p>{i.linksText}</p>
          </div>
          <div className="about-section">
            <div className="about-num">06</div>
            <h2>{i.copyrightLabel}</h2>
            <p>{i.copyrightText}</p>
          </div>
        </div>
        <Footer t={t.footer} />
      </div>
    </>
  );
}
