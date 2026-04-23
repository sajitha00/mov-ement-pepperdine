'use client';
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { PageBanner, PartnerSection, GuideBand } from '@/components/PageComponents';
import { useTheme } from '@/components/ThemeProvider';

export default function MerchantsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const benefits = [
    { icon: '/Icon-7.png', title: 'Zero Cost to List', desc: 'Listing is completely free. No setup fee, no monthly charge, no commissions.' },
    { icon: '/Icon-8.png', title: 'Nearly 10,000-Student Audience', desc: 'Reach Pepperdine\'s entire student community — 3,553 undergrads on the Malibu campus plus thousands more.' },
    { icon: '/Icon-5.png', title: 'Loyal, Recurring Customers', desc: 'Students who discover your business come back — and they bring their friends.' },
    { icon: '/Icon-6.png', title: 'Simple Merchant Dashboard', desc: 'Update your deal, add photos, and track redemptions from a clean, mobile-friendly dashboard.' },
    { icon: '/Icon-4.png', title: 'Verified Student Traffic', desc: 'Only verified Pepperdine students can redeem deals. No bots, no coupon abuse.' },
    { icon: '/icon-1.png', title: 'We Handle the Marketing', desc: 'We promote your deal through social media, campus outreach, and newsletters.' },
  ];

  const steps = [
    { n: '01', icon: '/digital-marketing-icons-N952ZWA.png', title: 'Schedule a Free Call', desc: 'Book a 20-minute onboarding call with our team. We confirm fit, answer questions, and walk you through our process.' },
    { n: '02', icon: '/Icon-11.png', title: 'Create Your Profile', desc: 'We set up your merchant profile — photos, description, location, and your exclusive student discount offer.' },
    { n: '03', icon: '/Icon-10.png', title: 'Go Live & Get Discovered', desc: 'Your business goes live on The Movement. Students browsing deals near campus will find and visit you.' },
    { n: '04', icon: '/Icon-12.png', title: 'Track & Grow', desc: 'Watch your foot traffic grow and refine your offer anytime from your dashboard.' },
  ];

  const faqs = [
    { q: 'How much does it cost to list my business?', a: 'Listing is 100% free. We also offer optional premium placement for businesses that want to appear at the top of student searches.' },
    { q: 'What type of businesses can join?', a: 'Any local business within the Malibu/Pepperdine area — restaurants, cafés, gyms, retail, beauty, entertainment, and professional services.' },
    { q: 'How do students prove they\'re verified?', a: 'Students register with their Pepperdine .edu email and get a digital Movement pass on their phone to show at your business.' },
    { q: 'Can I change my deal offer after going live?', a: 'Absolutely. You can update your deal, percentage, or offer terms at any time from your merchant dashboard.' },
    { q: 'How quickly can I get listed?', a: 'After your onboarding call, we typically have your profile live within 24–48 business hours.' },
    { q: 'Is there a long-term contract?', a: 'No contracts, no commitments. You can pause or remove your listing at any time, no questions asked.' },
  ];

  return (
    <>
      <Navbar />
      <PageBanner title="For Merchants" breadcrumb="Merchants" />

      {/* ─── Full Hero Video Section (same layout as homepage) ─── */}
      <div className="section-banner">
        <div className="banner-video-container" data-gsap="fade-up">
          <div style={{
            position: 'absolute', inset: 0, zIndex: 0,
            background: isDark
              ? 'linear-gradient(135deg, #0B0014 0%, #1a004d 50%, #0B0014 100%)'
              : 'linear-gradient(135deg, #f0f0fb 0%, #e8e8f8 50%, #f0f0fb 100%)',
            transition: 'background 0.4s ease',
          }}></div>

          <div className="hero-container position-relative" style={{ zIndex: 2 }}>
            <div className="hero-split-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '48px', alignItems: 'center', minHeight: 520, padding: '60px 0 40px' }}>

              {/* ── LEFT: Text + CTA ── */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                <h1 className="title-heading" data-gsap="hero" style={{
                  margin: 0,
                  fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                  fontWeight: 900,
                  lineHeight: 1.12,
                  letterSpacing: '-0.03em',
                }}>
                  Grow Your Business with Pepperdine Students
                </h1>

                <p data-gsap="fade-up"
                  style={{ color: isDark ? 'rgba(255,255,255,0.85)' : 'rgba(0,0,0,0.65)', fontSize: '1.15rem', lineHeight: 1.75, margin: 0 }}>
                  Join Malibu&apos;s fastest-growing student marketplace. List your business for free and connect with nearly 10,000 Pepperdine students.
                </p>

                <div data-gsap="fade-up" style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
                  <Link href="#contact" className="btn btn-accent">
                    <div className="btn-title"><span>🏪 List Your Business</span></div>
                    <div className="icon-circle"><i className="fa-solid fa-arrow-right"></i></div>
                  </Link>
                  <Link href="/students" className="btn btn-outline" style={{
                    borderRadius: 999, padding: '12px 24px', fontWeight: 600,
                    border: `2px solid ${isDark ? 'rgba(255,255,255,0.2)' : 'rgba(139,18,223,0.25)'}`,
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                  }}>
                    Learn More
                  </Link>
                </div>

                {/* Trust bar */}
                <div data-gsap="fade-up" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ display: 'flex' }}>
                    {['store1','store2','store3','store4'].map(u => (
                      <img key={u} src={`https://i.pravatar.cc/150?u=${u}`} alt="Merchant"
                        style={{ width: 34, height: 34, borderRadius: '50%', border: `2px solid ${isDark ? '#0B0014' : '#f0f0fb'}`, marginLeft: -8 }} />
                    ))}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: isDark ? '#fff' : '#0f0f1a', fontSize: '0.95rem' }}>Local Malibu Businesses</div>
                    <div style={{ color: isDark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.5)', fontSize: '0.85rem' }}>Free to join • No contracts • No commissions</div>
                  </div>
                </div>
              </div>

              {/* ── RIGHT: Hero Video ── */}
              <div className="hero-image-col" data-gsap="fade-right" style={{ position: 'relative' }}>
                <div style={{
                  borderRadius: 24, overflow: 'hidden', position: 'relative',
                  boxShadow: isDark
                    ? '0 24px 80px rgba(139,18,223,0.35), 0 0 0 1px rgba(255,255,255,0.08)'
                    : '0 24px 60px rgba(139,18,223,0.2), 0 0 0 1px rgba(139,18,223,0.12)',
                }}>
                  <video
                    autoPlay muted loop playsInline
                    style={{ width: '100%', aspectRatio: '1/1', maxHeight: 520, objectFit: 'cover', display: 'block' }}
                  >
                    <source src="/merc.mp4" type="video/mp4" />
                  </video>
                  {/* Brand gradient overlay */}
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: isDark
                      ? 'linear-gradient(135deg, rgba(139,18,223,0.2) 0%, rgba(255,16,69,0.1) 100%)'
                      : 'linear-gradient(135deg, rgba(139,18,223,0.08) 0%, rgba(255,98,0,0.06) 100%)',
                    pointerEvents: 'none',
                  }} />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* ─── Expertise section (what we offer) ─── */}
      <div className="section">
        <div className="hero-container">
          <div className="d-flex flex-column flex-xl-row gspace-5">
            <div className="expertise-img-layout">
              <div className="image-container expertise-img" style={{ borderRadius: '24px', overflow: 'hidden' }}>
                <img src="https://images.unsplash.com/photo-1621788959150-f4a9955e65e8?auto=format&fit=crop&w=1200&q=85" alt="Malibu merchants" className="img-fluid" data-gsap="fade-up" />
                <div className="expertise-layout">
                  <div className="d-flex flex-column">
                    <div className="card-expertise-wrapper">
                      <div className="card card-expertise " data-gsap="fade-up">
                        <h4>Ready to Reach Nearly 10,000 Pepperdine Students?</h4>
                        <p>Your deal goes live within 48 hours — reaching 3,500+ undergrads on the Malibu campus and nearly 10,000 students across all Pepperdine locations. Completely free.</p>
                        <div className="d-flex align-items-center flex-row gspace-2 expertise-link">
                          <Link href="#contact">Schedule Free Onboarding</Link>
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
                <span>Why Join The Movement</span>
              </div>
              <h2 className="title-heading " data-gsap="fade-right">
                Grow Your Business with the Pepperdine Student Community
              </h2>
              <p>Connect your business to nearly 10,000 Pepperdine students — with 3,553 undergrads right on the Malibu campus. No advertising spend needed.</p>
              <div className="d-flex flex-column flex-md-row gspace-2">
                <div className="expertise-list">
                  <h5>What You Get</h5>
                  <ul className="check-list">
                    <li><a href="#">Free merchant profile listing</a></li>
                    <li><a href="#">Verified student redemption system</a></li>
                    <li><a href="#">Social + campus marketing for your deal</a></li>
                    <li><a href="#">Merchant performance dashboard</a></li>
                    <li><a href="#">Dedicated onboarding support</a></li>
                    <li><a href="#">No contracts or long-term commitment</a></li>
                  </ul>
                </div>
                <div className="card card-expertise card-expertise-counter " data-gsap="fade-up">
                  <div className="d-flex flex-row gspace-2 align-items-center">
                    <div className="d-flex flex-row align-items-center">
                      <span style={{ fontSize: '2.5rem', fontWeight: 800 }}>100</span>
                      <span className="counter-detail">+</span>
                    </div>
                    <h6>Local Businesses Currently Listed on The Movement</h6>
                  </div>
                  <p>Join a growing network of Malibu businesses that are actively growing through student-driven foot traffic.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Benefits (service cards) ─── */}
      <div className="section">
        <div className="hero-container">
          <div className="d-flex flex-column justify-content-center text-center gspace-5">
            <div className="d-flex flex-column justify-content-center text-center gspace-2">
              <div className="sub-heading align-self-center " data-gsap="fade-up">
                <i className="fa-regular fa-circle-dot"></i>
                <span>Merchant Benefits</span>
              </div>
              <h2 className="title-heading heading-container heading-container-medium " data-gsap="fade-up">
                Everything You Need to Reach Pepperdine Students
              </h2>
            </div>
            <div className="card-service-wrapper">
              <div className="row row-cols-xl-3 row-cols-md-2 row-cols-1 grid-spacer-2">
                {benefits.map((b, i) => (
                  <div className="col" key={b.title}>
                    <div className={`card card-service h-100 d-flex flex-column animate-box animated animate__animated ${i % 3 === 0 ? 'slow' : i % 3 === 2 ? 'fast' : ''}`} data-animate="animate__fadeInLeft">
                      <div className="d-flex flex-row justify-content-between gspace-2 gspace-md-3 align-items-center">
                        <div>
                          <div className="service-icon-wrapper">
                            <div className="service-icon">
                              <img src={b.icon} alt={b.title} className="img-fluid" onError={e => (e.currentTarget.style.display='none')} />
                            </div>
                          </div>
                        </div>
                        <div className="service-title"><h4>{b.title}</h4></div>
                      </div>
                      <p>{b.desc}</p>
                      <Link href="#contact" className="btn btn-accent mt-auto">
                        <div className="btn-title"><span>Get Listed Free</span></div>
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
        title="Ready to Grow with The Movement?"
        desc="Be among the first Malibu businesses to reach the Pepperdine student community. Schedule a free 20-minute onboarding call today."
        linkLabel="Schedule Free Call"
        linkHref="#contact"
      />

      {/* ─── How It Works ─── */}
      <div className="section-wrapper-digital-process">
        <div className="section digital-process-banner">
          <div className="hero-container">
            <div className="digital-process-content">
              <div className="row row-cols-xl-2 row-cols-1 grid-spacer-5">
                <div className="col">
                  <div className="d-flex flex-column gspace-2 " data-gsap="fade-up">
                    <div className="sub-heading">
                      <i className="fa-regular fa-circle-dot"></i>
                      <span>How It Works</span>
                    </div>
                    <h2 className="title-heading">Simple Steps to Reach Pepperdine Students</h2>
                  </div>
                </div>
                <div className="col">
                  <div className="d-flex flex-column gspace-2 justify-content-end h-100 " data-gsap="fade-up">
                    <p>Our streamlined onboarding gets your business listed and in front of students within 48 hours — no technical skills needed.</p>
                    <div className="link-wrapper">
                      <Link href="#contact">Get Started Now</Link>
                      <i className="fa-solid fa-arrow-circle-right"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="digital-process-steps-wrapper">
                <div className="digital-process-steps">
                  <div className="row row-cols-xl-4 row-cols-md-2 row-cols-1">
                    {steps.map((step, i) => (
                      <div className="col" key={step.n}>
                        <div className={`d-flex flex-md-row flex-column gspace-2 animate-box animated animate__animated`} data-animate={i % 2 === 0 ? 'animate__fadeInUp' : 'animate__fadeInDown'}>
                          {i > 0 && <div className="step-spacer"></div>}
                          <div className="digital-process-step">
                            <div className="d-flex justify-content-between">
                              <div><img src={step.icon} alt="Process Icon" className="process-icon" onError={e => (e.currentTarget.style.display='none')} /></div>
                              <span>{step.n}</span>
                            </div>
                            <div className="d-flex flex-column gspace-2">
                              <h5>{step.title}</h5>
                              <p>{step.desc}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="spacer"></div>
      </div>

      {/* ─── CSR: Host a Fundraiser ─── */}
      <div className="section">
        <div className="hero-container">
          <div className="card" style={{
            padding: '48px 40px',
            borderRadius: 24,
            background: 'linear-gradient(135deg, rgba(255,98,0,0.08) 0%, rgba(139,18,223,0.12) 100%)',
            border: '1px solid rgba(139,18,223,0.2)',
            backdropFilter: 'blur(20px)',
          }}>
            <div className="d-flex flex-column flex-xl-row gspace-5 align-items-center">
              <div style={{ flex: 1 }}>
                <div className="sub-heading" style={{ marginBottom: 16 }}>
                  <i className="fa-regular fa-circle-dot"></i>
                  <span>Community Initiative</span>
                </div>
                <h3 className="title-heading" style={{ marginBottom: 16 }}>
                  Do Good. Drive Business. Host a Fundraiser Night.
                </h3>
                <p style={{ lineHeight: 1.8 }}>
                  Partner with The Movement and Change the Cycle Inc. to host a student fundraiser night at your business. Great for your brand, great for foot traffic, and life-changing for girls around the world who need access to education.
                </p>
                <Link href="#contact" className="btn btn-accent" style={{ marginTop: 8 }}>
                  <div className="btn-title"><span>Get Involved — Contact Us About Hosting</span></div>
                  <div className="icon-circle"><i className="fa-solid fa-arrow-right"></i></div>
                </Link>
              </div>
              <div style={{ flexShrink: 0, fontSize: '6rem', opacity: 0.15, lineHeight: 1 }}>🤝</div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── FAQ ─── */}
      <div className="section">
        <div className="hero-container">
          <div className="d-flex flex-column justify-content-center text-center gspace-5">
            <div className="d-flex flex-column gspace-2 " data-gsap="fade-up">
              <div className="sub-heading align-self-center">
                <i className="fa-regular fa-circle-dot"></i>
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="title-heading heading-container heading-container-short">Got Questions? We&apos;ve Got Answers.</h2>
            </div>
            <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'left' }}>
              {faqs.map((faq, idx) => (
                <div key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    style={{ width: '100%', textAlign: 'left', padding: '18px 0', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'inherit', fontWeight: 600, fontSize: '1.1rem', color: isDark ? '#fff' : '#0f0f1a' }}>
                    <span>{faq.q}</span>
                    <i className={`fa-solid ${openFaq === idx ? 'fa-minus accent-color' : 'fa-plus'}`} style={{ fontSize: '.85rem', flexShrink: 0, marginLeft: 12 }}></i>
                  </button>
                  {openFaq === idx && (
                    <div style={{ paddingBottom: 16 }}>
                      <p style={{ margin: 0, color: isDark ? 'rgba(255,255,255,0.85)' : 'rgba(0,0,0,0.65)', lineHeight: 1.7, fontSize: '1.05rem' }}>{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ─── Contact / CTA form ─── */}
      <div className="section" id="contact">
        <div className="hero-container">
          <div className="newsletter-wrapper">
            <div className="newsletter-layout">
              <div className="spacer"></div>
              <div className="d-flex flex-column gspace-5 position-relative z-2">
                <div className="d-flex flex-column gspace-2">
                  <h3 className="title-heading">Schedule Your Free Onboarding Call</h3>
                  <p>Fill out the form below and a member of our team will contact you within 24 hours to schedule your onboarding and get your deal live.</p>
                </div>
                <form onSubmit={e => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <div style={{ position: 'relative' }}>
                    <i className="fa-solid fa-store" style={{ position: 'absolute', left: 18, top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.3)', fontSize: '0.9rem' }}></i>
                    <input type="text" placeholder="Your Business Name" required style={{
                      width: '100%', padding: '16px 18px 16px 46px',
                      background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)',
                      borderRadius: 14, color: '#fff', fontSize: '0.95rem',
                      outline: 'none', transition: 'border-color 0.3s, box-shadow 0.3s', fontFamily: 'inherit',
                    }} onFocus={e => { e.target.style.borderColor = 'rgba(224,16,110,0.5)'; e.target.style.boxShadow = '0 0 20px rgba(224,16,110,0.12)'; }}
                       onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.12)'; e.target.style.boxShadow = 'none'; }} />
                  </div>
                  <div style={{ position: 'relative' }}>
                    <i className="fa-solid fa-envelope" style={{ position: 'absolute', left: 18, top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.3)', fontSize: '0.9rem' }}></i>
                    <input type="email" placeholder="Your Email Address" required style={{
                      width: '100%', padding: '16px 18px 16px 46px',
                      background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)',
                      borderRadius: 14, color: '#fff', fontSize: '0.95rem',
                      outline: 'none', transition: 'border-color 0.3s, box-shadow 0.3s', fontFamily: 'inherit',
                    }} onFocus={e => { e.target.style.borderColor = 'rgba(224,16,110,0.5)'; e.target.style.boxShadow = '0 0 20px rgba(224,16,110,0.12)'; }}
                       onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.12)'; e.target.style.boxShadow = 'none'; }} />
                  </div>
                  <button className="btn btn-accent" type="submit">
                    <span className="btn-title"><span>Request Onboarding Call</span></span>
                    <span className="icon-circle"><i className="fa-solid fa-arrow-right"></i></span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
