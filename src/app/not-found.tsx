import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <>
      <Navbar />
      <div className="section-banner">
        <div className="banner-layout-wrapper">
          <div className="banner-layout">
            <div className="d-flex flex-column text-center align-items-center gspace-2">
              <h1 className="title-heading-banner animate-box animated animate__animated" data-animate="animate__fadeInDown"
                style={{ fontSize: 'clamp(5rem, 18vw, 12rem)', lineHeight: 1, margin: 0 }}>
                404
              </h1>
              <h2 className="title-heading animate-box animated animate__animated" data-animate="animate__fadeInRight">
                Oops! Page Not Found
              </h2>
              <p className="animate-box animated animate__animated" data-animate="animate__fadeInUp"
                style={{ maxWidth: 480, color: 'rgba(255,255,255,0.65)' }}>
                We couldn&apos;t find the page you&apos;re looking for. It might have been removed, renamed, or never existed.
              </p>
              <div className="d-flex flex-md-row flex-column justify-content-center gspace-3 animate-box animated animate__animated" data-animate="animate__fadeInUp">
                <Link href="/" className="btn btn-accent">
                  <div className="btn-title"><span>Back to Home</span></div>
                  <div className="icon-circle"><i className="fa-solid fa-arrow-right"></i></div>
                </Link>
              </div>
            </div>
            <div className="spacer"></div>
          </div>
        </div>
      </div>

      {/* ─── Helpful links (service card section) ─── */}
      <div className="section">
        <div className="hero-container">
          <div className="d-flex flex-column justify-content-center text-center gspace-5">
            <div className="d-flex flex-column gspace-2">
              <div className="sub-heading align-self-center">
                <i className="fa-regular fa-circle-dot"></i>
                <span>You Might Be Looking For</span>
              </div>
              <h2 className="title-heading heading-container heading-container-medium">
                Quick Navigation
              </h2>
            </div>
            <div className="card-service-wrapper">
              <div className="row row-cols-xl-3 row-cols-md-2 row-cols-1 grid-spacer-2">
                {[
                  { icon: '/Icon-7.png', title: 'For Students', desc: 'Browse 100+ exclusive local deals around Pepperdine campus — always free for students.', href: '/students', label: 'Browse Deals' },
                  { icon: '/Icon-8.png', title: 'For Merchants', desc: 'List your Malibu business and reach nearly 10,000 Pepperdine students — free to join.', href: '/merchants', label: 'List Your Business' },
                  { icon: '/Icon-5.png', title: 'Happening Now', desc: 'See the latest deals, events, and limited-time offers near Pepperdine campus.', href: '/happening', label: 'View Happening' },
                ].map(item => (
                  <div className="col" key={item.title}>
                    <div className="card card-service h-100 d-flex flex-column animate-box animated animate__animated" data-animate="animate__fadeInLeft">
                      <div className="d-flex flex-row justify-content-between gspace-2 gspace-md-3 align-items-center">
                        <div>
                          <div className="service-icon-wrapper">
                            <div className="service-icon">
                              <img src={item.icon} alt={item.title} className="img-fluid" />
                            </div>
                          </div>
                        </div>
                        <div className="service-title"><h4>{item.title}</h4></div>
                      </div>
                      <p>{item.desc}</p>
                      <Link href={item.href} className="btn btn-accent mt-auto">
                        <div className="btn-title"><span>{item.label}</span></div>
                        <div className="icon-circle"><i className="fa-solid fa-arrow-right"></i></div>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
