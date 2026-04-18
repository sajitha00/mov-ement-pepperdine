import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

/* ── Reusable inner-page banner ── */
export function PageBanner({ title, breadcrumb }: { title: string; breadcrumb: string }) {
  return (
    <div className="section-banner">
      <div className="banner-layout-wrapper">
        <div className="banner-layout">
          <div className="d-flex flex-column text-center align-items-center gspace-2">
            <h2 className="title-heading animate-box animated animate__animated" data-animate="animate__fadeInRight">
              {title}
            </h2>
            <nav className="breadcrumb">
              <Link href="/" className="gspace-2">Home</Link>
              <span className="separator-link">/</span>
              <p className="current-page">{breadcrumb}</p>
            </nav>
          </div>
          <div className="spacer"></div>
        </div>
      </div>
    </div>
  );
}

/* ── Partner ticker (reused on every page) ── */
export function PartnerSection({ heading, desc }: { heading: string; desc: string }) {
  const clients = ['Client-1.png','Client-2.png','Client-3.png','Client-4.png','Client-5.png','Client-6.png','Client-7.png','Client-8.png'];
  return (
    <div className="section-partner">
      <div className="hero-container">
        <div className="card card-partner animate-box animated animate__animated" data-animate="animate__fadeInRight">
          <div className="partner-spacer"></div>
          <div className="row row-cols-xl-2 row-cols-1 align-items-center px-5 position-relative z-2">
            <div className="col">
              <div className="d-flex flex-column justify-content-start pe-xl-3 pe-0">
                <h3 className="title-heading">{heading}</h3>
              </div>
            </div>
            <div className="col">
              <div className="d-flex flex-column ps-xl-3 ps-0"><p>{desc}</p></div>
            </div>
          </div>
          <div className="swiperPartner-layout">
            <div className="swiperPartner-overlay"><div className="spacer"></div></div>
            <div className="swiperPartner-container">
              <div style={{ display: 'flex', gap: 40, padding: '20px 0', overflowX: 'hidden' }}>
                {[...clients, ...clients].map((c, i) => (
                  <div key={i} className="partner-slide" style={{ flexShrink: 0 }}>
                    <img src={`/${c}`} alt="Partner" className="img-fluid" style={{ height: 46, opacity: 0.55, filter: 'grayscale(1)' }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Guide band (dark CTA) ── */
export function GuideBand({ title, desc, linkLabel, linkHref }: { title: string; desc: string; linkLabel: string; linkHref: string }) {
  return (
    <div className="section-guide">
      <div className="guide-banner">
        <div className="hero-container">
          <div className="guide-content animate-box animated animate__animated" data-animate="animate__fadeInUp">
            <div className="guide-video-container" style={{ display: 'none' }}>
            </div>
            <div className="d-flex flex-column gspace-2">
              <h3 className="title-heading">{title}</h3>
              <p>{desc}</p>
              <div className="link-wrapper">
                <Link href={linkHref}>{linkLabel}</Link>
                <i className="fa-solid fa-circle-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Navbar, Footer };
