'use client';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { PageBanner, PartnerSection, GuideBand } from '@/components/PageComponents';

export default function ArlingtonPage() {
  const categories = [
    { icon: '/Icon-7.png', title: 'Dining & Cafés', desc: 'From quick bites between classes to sit-down dinners — 30+ restaurants near Pepperdine offering exclusive Wave discounts.' },
    { icon: '/Icon-8.png', title: 'Fitness & Wellness', desc: 'Gyms, yoga studios, and wellness centers near campus giving Pepperdine students heavily discounted memberships and first-month-free deals.' },
    { icon: '/Icon-5.png', title: 'Retail & Fashion', desc: 'Local boutiques and clothing stores offering 15–30% off for Pepperdine students on everything from everyday basics to standout styles.' },
    { icon: '/Icon-6.png', title: 'Salons & Barbershops', desc: 'Look your best for less. Haircuts, color, nails, and grooming services at student-exclusive rates near campus.' },
    { icon: '/Icon-4.png', title: 'Entertainment & Fun', desc: 'Game zones, escape rooms, bowling, and movie nights — local entertainment venues where Pepperdine students always pay less.' },
    { icon: '/icon-1.png', title: 'Professional Services', desc: 'Tutoring, printing, tech repair, and more — local service providers who understand what Waves need and price accordingly.' },
  ];

  return (
    <>
      <Navbar />
      <PageBanner title="Malibu (Pepperdine Campus)" breadcrumb="Malibu" />

      {/* ─── About Malibu ─── */}
      <div className="section">
        <div className="hero-container">
          <div className="d-flex flex-column flex-xl-row gspace-5">
            <div className="expertise-img-layout">
              <div className="image-container expertise-img" style={{ borderRadius: '24px', overflow: 'hidden' }}>
                <img src="https://images.unsplash.com/photo-1558544818-be525037d55f?auto=format&fit=crop&w=600&q=80" alt="Malibu CA" className="img-fluid " data-gsap="fade-up" />
                <div className="expertise-layout">
                  <div className="d-flex flex-column">
                    <div className="card-expertise-wrapper">
                      <div className="card card-expertise " data-gsap="fade-up">
                        <h4>The Heart of The Movement</h4>
                        <p>Malibu, CA — home to Pepperdine&apos;s 3,553-strong undergraduate campus and the heart of a nearly 10,000-student university community.</p>
                        <div className="d-flex align-items-center flex-row gspace-2 expertise-link">
                          <Link href="/students">Explore All Deals</Link>
                          <i className="fa-solid fa-circle-arrow-right"></i>
                        </div>
                      </div>
                    </div>
                    <div className="expertise-spacer"></div>
                  </div>
                  <div className="expertise-spacer"></div>
                </div>
              </div>
            </div>
            <div className="expertise-title">
              <div className="sub-heading " data-gsap="fade-right">
                <i className="fa-regular fa-circle-dot"></i>
                <span>Malibu, California</span>
              </div>
              <h2 className="title-heading " data-gsap="fade-right">
                The Pepperdine Wave City
              </h2>
              <p>With 3,553 undergraduates living on Pepperdine&apos;s stunning 830-acre Malibu campus — and nearly 10,000 students enrolled across the full university — this is one of the most captive and engaged college communities in Southern California. The Movement exists to make Malibu&apos;s vibrant local business scene fully accessible to every Wave.</p>
              <p>Whether you&apos;re looking for the best lunch spot near the Engineering Building or a gym within walking distance of the Wave Activities Center, The Movement has you covered.</p>
              <div className="d-flex flex-column flex-md-row gspace-2">
                <div className="expertise-list">
                  <h5>Campus & City Facts</h5>
                  <ul className="check-list">
                    <li><a href="#">~3,553 undergrads on the Malibu campus (fall 2024)</a></li>
                    <li><a href="#">Nearly 10,000 students across all Pepperdine campuses</a></li>
                    <li><a href="#">830-acre campus overlooking the Pacific Ocean</a></li>
                    <li><a href="#">29 miles from Downtown Los Angeles</a></li>
                    <li><a href="#">61% of undergrads live on or near campus</a></li>
                    <li><a href="#">12:1 student-to-faculty ratio</a></li>
                    <li><a href="#">300+ days of sunshine per year</a></li>
                    <li><a href="#">Home of the Waves</a></li>
                  </ul>
                </div>
                <div className="card card-expertise card-expertise-counter " data-gsap="fade-up">
                  <div className="d-flex flex-row gspace-2 align-items-center">
                    <div className="d-flex flex-row align-items-center">
                      <span style={{ fontSize: '2rem', fontWeight: 800 }}>100</span>
                      <span className="counter-detail">+</span>
                    </div>
                    <h6>Local Malibu Businesses Active on The Movement Right Now</h6>
                  </div>
                  <p>Every category, every part of the city near campus — The Movement has deals wherever Waves go.</p>
                </div>
              </div>
            </div>
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

      <PartnerSection
        heading="Malibu Businesses Loving The Movement"
        desc="Local merchants across Malibu are listing their deals, reaching Pepperdine students, and watching their businesses grow — all through The Movement."
      />

      <GuideBand
        title="Discover the Best of Malibu as a Wave!"
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
                  { icon: '/Icon-2.png', title: 'Students Spend Locally', desc: 'Pepperdine Waves collectively spend millions in Malibu each year — and The Movement puts your business directly in their path.' },
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
                    Nearly 3,500 students are on the Malibu campus right now, looking for great local businesses. As part of a university community approaching 10,000 strong, Pepperdine Waves are an economically active, loyal, and word-of-mouth-driven customer base. The Movement makes sure they find your business first.
                  </p>
                </div>
                <div className="image-container" style={{ borderRadius: '24px', overflow: 'hidden' }}>
                  <img src="https://images.unsplash.com/photo-1621788959150-f4a9955e65e8?auto=format&fit=crop&w=600&q=80" alt="Malibu CA merchants" className="chooseus-img" />
                  <div className="card-chooseus-cta-layout">
                    <div className="chooseus-cta-spacer"></div>
                    <div className="d-flex flex-column align-items-end">
                      <div className="chooseus-cta-spacer"></div>
                      <div className="card-chooseus-cta-wrapper">
                        <div className="card card-chooseus-cta " data-gsap="fade-up">
                          <h5>List your Malibu business free &amp; reach every Wave on campus.</h5>
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
