import Head from 'next/head';
import { useRouter } from 'next/router';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { useTranslations } from '../lib/i18n';

export default function Contact() {
  const { locale } = useRouter();
  const t = useTranslations(locale || 'en');
  const c = t.contact;

  return (
    <>
      <Head>
        <title>Contact — ACG Meat</title>
      </Head>
      <Nav t={t.nav} />
      <div className="page-wrapper">
        <div className="page-header">
          <div className="section-label">{c.label}</div>
          <h1 className="page-headline">{c.headline}</h1>
        </div>
        <div className="contact-body">
          <a href="mailto:marksteinerkai@gmail.com?subject=Unicate%20enquiry" className="contact-email">
            marksteinerkai@gmail.com
          </a>
        </div>
        <Footer t={t.footer} />
      </div>
    </>
  );
}
