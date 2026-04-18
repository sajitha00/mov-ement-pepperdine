import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { PageBanner, PartnerSection, GuideBand } from '@/components/PageComponents';

export default function AboutPage() {


  const testimonials = [
    { name: 'James M.', role: 'Senior, Computer Science', quote: 'I save $40–60 every single week using The Movement. The deals near campus are incredible.', img: 'https://i.pravatar.cc/150?u=James' },
    { name: 'Sarah R.', role: 'Owner, Riverside Café', quote: 'Our student foot traffic doubled in two months. Effortless onboarding and amazing ROI.', img: 'https://i.pravatar.cc/150?u=Sarah' },
    { name: 'Amara L.', role: 'Junior, Marketing', quote: 'Every Wave needs The Movement. New deals pop up constantly — love it.', img: 'https://i.pravatar.cc/150?u=Amara' },
    { name: 'Marcus K.', role: 'Owner, Wave Cuts', quote: 'Students who come through The Movement are loyal. Best decision I made all year.', img: 'https://i.pravatar.cc/150?u=Marcus' },
  ];

  return (
    <>
      <Navbar />

      <PageBanner title="What is The Movement" breadcrumb="About" />

      {/* ─── About Us ─── */}
      <div className="section">
        <div className="hero-container">
          <div className="d-flex flex-column flex-xl-row gspace-5">
            <div className="about-img-layout">
              <div className="image-container about-img">
                <img src="https://images.unsplash.com/photo-1630312022342-b803b7064bd0?auto=format&fit=crop&w=600&q=80" alt="The Movement Pepperdine" className="img-fluid " data-gsap="fade-up" />
                <div className="about-layout">
                  <div className="d-flex flex-column">
                    <div className="card-about-wrapper">
                      <div className="card card-about " data-gsap="fade-up">
                        <div className="d-flex flex-row align-items-center">
                          <span style={{ fontSize: '2.5rem', fontWeight: 800 }}>3</span>
                          <span className="counter-detail">+</span>
                        </div>
                        <h6>Years Connecting Pepperdine Students with Malibu Businesses</h6>
                      </div>
                    </div>
                    <div className="about-spacer"></div>
                  </div>
                  <div className="about-spacer"></div>
                </div>
              </div>
            </div>
            <div className="about-title">
              <div className="d-flex flex-column gspace-2">
                <div className="sub-heading " data-gsap="fade-right">
                  <i className="fa-regular fa-circle-dot"></i>
                  <span>About The Movement Pepperdine</span>
                </div>
                <h2 className="title-heading " data-gsap="fade-right">
                  Who We Are &amp; What Drives Us
                </h2>
                <p>The Movement Pepperdine is a community-first platform connecting Pepperdine&apos;s nearly 10,000 students — across campuses in Malibu, West LA, Calabasas, and Irvine — with the best local businesses in the Malibu area. With 3,553 undergraduates living on or near the Malibu campus and thousands more graduate students across Southern California, Pepperdine is one of the most concentrated and engaged college communities in California.</p>
                <p>We believe students deserve access to real savings, and local businesses deserve a direct line to the campus community. The Movement makes both possible — for free.</p>
                <div className="d-flex flex-column flex-md-row gspace-1 gspace-md-5">
                  <div className="about-list">
                    <ul className="check-list">
                      <li><Link href="/students">Free Student Access</Link></li>
                      <li><Link href="/merchants">Free Merchant Listing</Link></li>
                      <li><Link href="/happening">100+ Local Deals</Link></li>
                    </ul>
                  </div>
                  <div className="about-list">
                    <ul className="check-list">
                      <li><Link href="/malibu">Pepperdine Campus Focus</Link></li>
                      <li><Link href="/merchants">Merchant Dashboard</Link></li>
                      <li><Link href="/happening">Weekly New Deals</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PartnerSection
        heading="Trusted by Local Malibu Businesses"
        desc="From neighborhood restaurants to gyms and boutiques — merchants across Malibu trust The Movement to connect them with Pepperdine students."
      />

      {/* ─── Core Values ─── */}
      <div className="section">
        <div className="hero-container">
          <div className="row row-cols-xl-2 row-cols-1 grid-spacer-5">
            <div className="col order-md-1 order-2">
              <div className="d-flex flex-column gspace-2">
                {[
                  { icon: '/Icon-2.png', title: 'Community First', desc: 'Every decision we make starts with the question: does this benefit Pepperdine students and local Malibu businesses?' },
                  { icon: '/icon-1.png', title: 'Radical Accessibility', desc: 'Free for every Pepperdine student. Free to list for every local merchant. Access to The Movement is never behind a paywall.' },
                  { icon: '/Icon-3.png', title: 'Real Results', desc: 'We measure success by foot traffic generated, deals redeemed, and dollars saved — not vanity metrics.' },
                ].map((v, i) => (
                  <div key={i} className={`card card-chooseus animate-box animated animate__animated ${i === 0 ? 'fast' : i === 2 ? 'slow' : ''}`} data-animate="animate__fadeInLeft">
                    <div className="chooseus-icon-wrapper">
                      <div className="chooseus-spacer above"></div>
                      <div className="chooseus-icon-layout">
                        <div className="chooseus-icon">
                          <img src={v.icon} alt={v.title} className="img-fluid" />
                        </div>
                      </div>
                      <div className="chooseus-spacer below"></div>
                    </div>
                    <div className="chooseus-content">
                      <h4 className="chooseus-title">{v.title}</h4>
                      <p>{v.desc}</p>
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
                    <span>Our Core Values</span>
                  </div>
                  <h2 className="title-heading " data-gsap="fade-up">
                    The Principles That Define Us
                  </h2>
                  <p className="mb-0 " data-gsap="fade-up">
                    The Movement exists to create a thriving local economy around Pepperdine—where students win with savings and merchants win with loyal, recurring customers from campus.
                  </p>
                </div>
                <div className="image-container">
                  <img src="https://images.unsplash.com/photo-1450125531260-73927b22d6f3?auto=format&fit=crop&w=600&q=80" alt="The Movement Values" className="chooseus-img" />
                  <div className="card-chooseus-cta-layout">
                    <div className="chooseus-cta-spacer"></div>
                    <div className="d-flex flex-column align-items-end">
                      <div className="chooseus-cta-spacer"></div>
                      <div className="card-chooseus-cta-wrapper">
                        <div className="card card-chooseus-cta " data-gsap="fade-up">
                          <h5>Join The Movement &amp; be part of the Malibu community.</h5>
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

      <GuideBand
        title="Join The Movement Today!"
        desc="Whether you're a Pepperdine student who wants to save or a local business ready to grow — The Movement is your platform. Join free and be part of something real."
        linkLabel="Get Started Free"
        linkHref="/students"
      />


      {/* ─── Testimonials ─── */}
      <div className="section">
        <div className="hero-container">
          <div className="d-flex flex-column gspace-5">
            <div className="row row-cols-xl-2 row-cols-1 grid-spacer-5">
              <div className="col col-xl-4">
                <div className="testimonial-header-wrapper " data-gsap="fade-up">
                  <div className="card card-testimonial-reviewer">
                    <div className="d-flex flex-column flex-md-row flex-xl-column justify-content-between gspace-3">
                      <div className="testimonial-reviewer">
                        <div className="avatar-container">
                          {[1,2,3,4].map(n => <img key={n} src={`https://i.pravatar.cc/150?img=${n+10}`} alt="Reviewer" className="avatar" />)}
                        </div>
                        <div className="detail">
                          <h6>~10K</h6><h6>Pepperdine Students</h6>
                        </div>
                      </div>
                      <div className="testimonial-rating-container">
                        <div className="d-flex flex-column justify-content-center align-items-center gspace-1">
                          <div className="d-flex flex-row align-items-center">
                            <span style={{ fontSize: '2rem', fontWeight: 800 }}>100</span><span className="counter-detail">+</span>
                          </div>
                          <p>Local Deals</p>
                        </div>
                        <div className="underline-vertical"></div>
                        <div className="d-flex flex-column justify-content-center align-items-center gspace-1">
                          <div className="d-flex flex-row align-items-center">
                            <span style={{ fontSize: '2rem', fontWeight: 800 }}>2</span><span className="counter-detail">x</span>
                          </div>
                          <p>Avg Traffic Boost</p>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-column flex-md-row flex-xl-column justify-content-center gspace-2">
                      <div className="testimonial-header-link-wrapper">
                        <i className="fa-regular fa-circle-check accent-color"></i>
                        <a href="#">Student Savings</a>
                      </div>
                      <div className="testimonial-header-link-wrapper">
                        <i className="fa-regular fa-circle-check accent-color"></i>
                        <a href="#">Merchant Growth</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col col-xl-8">
                <div className="testimonial-header-wrapper-title " data-gsap="fade-right">
                  <div className="card-testimonial-header-title">
                    <div className="sub-heading">
                      <i className="fa-regular fa-circle-dot"></i>
                      <span>What the Community Says</span>
                    </div>
                    <h2 className="title-heading">Real Stories from Students &amp; Merchants</h2>
                    <p>Discover how Pepperdine Waves and local Malibu businesses are thriving together.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex flex-column">
              <div className="overflow-hidden">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))', gap: 20 }}>
                  {testimonials.map(t => (
                    <div key={t.name} className="card card-testimonial " data-gsap="fade-up">
                      <div className="stars">{[1,2,3,4,5].map(s => <i key={s} className="fa-solid fa-star"></i>)}</div>
                      <div className="d-flex flex-row align-items-center justify-content-between">
                        <div className="d-flex flex-row gspace-2">
                          <div className="testimonial-image">
                            <img src={t.img} alt={t.name} className="img-fluid" />
                          </div>
                          <div className="d-flex flex-column">
                            <span className="profile-name">{t.name}</span>
                            <p className="profile-info">{t.role}</p>
                          </div>
                        </div>
                        <i className="fa-solid fa-3x fa-quote-right accent-color"></i>
                      </div>
                      <p className="testimonial-description">&ldquo;{t.quote}&rdquo;</p>
                    </div>
                  ))}
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
