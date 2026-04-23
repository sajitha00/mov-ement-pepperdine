'use client';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { PageBanner, PartnerSection, GuideBand } from '@/components/PageComponents';

export default function PepperdinePage() {
  const categories = [
    { icon: '/Icon-7.png', title: 'Dining & Cafés', desc: '30+ restaurants near Pepperdine offering exclusive student discounts on meals and drinks.' },
    { icon: '/Icon-8.png', title: 'Fitness & Wellness', desc: 'Gyms and wellness centers offering students discounted memberships and free trial periods.' },
    { icon: '/Icon-5.png', title: 'Retail & Fashion', desc: 'Local boutiques offering 15–30% off for Pepperdine students on everyday basics and standout styles.' },
    { icon: '/Icon-6.png', title: 'Salons & Barbershops', desc: 'Haircuts, nails, and grooming at student-exclusive rates near campus.' },
    { icon: '/Icon-4.png', title: 'Entertainment & Fun', desc: 'Game zones, escape rooms, and movie nights where students always pay less.' },
    { icon: '/icon-1.png', title: 'Professional Services', desc: 'Tutoring, printing, tech repair, and more at student-friendly prices.' },
  ];

  return (
    <>
      <Navbar />
      <PageBanner title="Pepperdine University" breadcrumb="Pepperdine" />

      {/* ─── Pepperdine Stats Strip ─── */}
      <div className="section" style={{ paddingBottom: 0 }}>
        <div className="hero-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 24 }}>
            {[
              { label: 'Total Enrollment', value: '~10,000', sub: 'Across 4 campuses' },
              { label: 'Malibu Undergrads', value: '3,553', sub: 'Highly engaged demographic' },
              { label: 'Student-to-Faculty', value: '12:1', sub: 'Tight-knit community' },
            ].map((stat, i) => (
              <div key={i} className="card" style={{ padding: 32, textAlign: 'center', borderRadius: 24, border: '1px solid rgba(139,18,223,0.15)' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 900, background: 'linear-gradient(135deg,#FF6200,#8B12DF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{stat.value}</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 700, margin: '8px 0' }}>{stat.label}</div>
                <div style={{ fontSize: '0.9rem', opacity: 0.7 }}>{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── Campus Cards ─── */}
      <div className="section">
        <div className="hero-container">
          <div className="d-flex flex-column justify-content-center text-center gspace-2 mb-5">
            <h2 className="title-heading">Serving All Pepperdine Campuses</h2>
            <p>The Movement connects students with local deals across all Southern California locations.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
            {['Malibu', 'West LA', 'Calabasas', 'Irvine'].map(campus => (
              <div key={campus} className="card" style={{ padding: 32, textAlign: 'center', borderRadius: 24, border: '1px solid rgba(139,18,223,0.15)' }}>
                <i className="fa-solid fa-location-dot" style={{ fontSize: '1.5rem', marginBottom: 16, color: '#FF6200' }}></i>
                <div style={{ fontSize: '1.25rem', fontWeight: 700 }}>{campus} Campus</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── Categories (service cards) ─── */}
      <div className="section">
        <div className="hero-container">
          <div className="d-flex flex-column justify-content-center text-center gspace-5">
            <div className="d-flex flex-column justify-content-center text-center gspace-2">
              <div className="sub-heading align-self-center " data-gsap="fade-up">
                <i className="fa-regular fa-circle-dot"></i>
                <span>Deal Categories</span>
              </div>
              <h2 className="title-heading heading-container heading-container-medium " data-gsap="fade-up">
                Every Category of Local Deal Near Pepperdine
              </h2>
            </div>
            <div className="card-service-wrapper">
              <div className="row row-cols-xl-3 row-cols-md-2 row-cols-1 grid-spacer-2">
                {categories.map((cat, i) => (
                  <div className="col" key={cat.title}>
                    <div className={`card card-service h-100 d-flex flex-column animate-box animated animate__animated ${i % 3 === 0 ? 'slow' : i % 3 === 2 ? 'fast' : ''}`} data-animate="animate__fadeInLeft">
                      <div className="d-flex flex-row justify-content-between gspace-2 gspace-md-3 align-items-center">
                        <div>
                          <div className="service-icon-wrapper">
                            <div className="service-icon">
                              <img src={cat.icon} alt={cat.title} className="img-fluid" />
                            </div>
                          </div>
                        </div>
                        <div className="service-title"><h4>{cat.title}</h4></div>
                      </div>
                      <p>{cat.desc}</p>
                      <Link href="/students" className="btn btn-accent mt-auto">
                        <div className="btn-title"><span>Browse Deals</span></div>
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



      <GuideBand
        title="Discover the Best of Malibu as a student!"
        desc="Register free and start exploring 100+ student-exclusive deals at local Malibu businesses near Pepperdine campus. Join The Movement today."
        linkLabel="Explore All Deals"
        linkHref="/students"
      />

      {/* ─── Why merchants join ─── */}
      <div className="section">
        <div className="hero-container">
          <div className="row row-cols-xl-2 row-cols-1 grid-spacer-5">
            <div className="col order-md-1 order-2">
              <div className="d-flex flex-column gspace-2">
                {[
                  { icon: '/Icon-2.png', title: 'Students Spend Locally', desc: 'Pepperdine students collectively spend millions in Malibu each year — and The Movement puts your business directly in their path.' },
                  { icon: '/icon-1.png', title: 'Word of Mouth is Powerful', desc: 'When a student discovers your business through The Movement, they tell their roommates, their classmates, and their whole dorm.' },
                  { icon: '/Icon-3.png', title: 'Malibu Wins Together', desc: 'When local businesses thrive, Malibu wins. The Movement is our community investment in the city that Pepperdine calls home.' },
                ].map((item, idx) => (
                  <div key={item.title} className={`card card-chooseus animate-box animated animate__animated ${idx === 0 ? 'fast' : idx === 2 ? 'slow' : ''}`} data-animate="animate__fadeInLeft">
                    <div className="chooseus-icon-wrapper">
                      <div className="chooseus-spacer above"></div>
                      <div className="chooseus-icon-layout">
                        <div className="chooseus-icon">
                          <img src={item.icon} alt={item.title} className="img-fluid" />
                        </div>
                      </div>
                      <div className="chooseus-spacer below"></div>
                    </div>
                    <div className="chooseus-content">
                      <h4 className="chooseus-title">{item.title}</h4>
                      <p>{item.desc}</p>
                      <div className="link-wrapper">
                        <Link href="/merchants">Learn More</Link>
                        <i className="fa-solid fa-arrow-circle-right accent-color"></i>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col order-md-2 order-1">
              <div className="d-flex flex-column gspace-5">
                <div className="d-flex flex-column gspace-2">
                  <div className="sub-heading " data-gsap="fade-up">
                    <i className="fa-regular fa-circle-dot"></i>
                    <span>For Malibu Merchants</span>
                  </div>
                  <h2 className="title-heading " data-gsap="fade-up">
                    Tap Into the Pepperdine Student Economy
                  </h2>
                  <p className="mb-0 " data-gsap="fade-up">
                    Nearly 3,500 students are on the Malibu campus right now. Pepperdine students are loyal, word-of-mouth-driven customers. The Movement makes sure they find your business first.
                  </p>
                </div>
                <div className="image-container" style={{ borderRadius: '24px', overflow: 'hidden' }}>
                  <img src="https://images.unsplash.com/photo-1621788959150-f4a9955e65e8?auto=format&fit=crop&w=1200&q=85" alt="Malibu CA merchants" className="chooseus-img" />
                  <div className="card-chooseus-cta-layout">
                    <div className="chooseus-cta-spacer"></div>
                    <div className="d-flex flex-column align-items-end">
                      <div className="chooseus-cta-spacer"></div>
                      <div className="card-chooseus-cta-wrapper">
                        <div className="card card-chooseus-cta " data-gsap="fade-up">
                          <h5>List your Malibu business free &amp; reach every student on campus.</h5>
                          <div className="link-wrapper">
                            <Link href="/merchants">Get Listed Free</Link>
                            <i className="fa-solid fa-circle-arrow-right"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
