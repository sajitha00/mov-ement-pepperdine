'use client';
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { PageBanner, PartnerSection, GuideBand } from '@/components/PageComponents';

export default function StudentsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const deals = [
    { icon: '/Icon-7.png', title: '30% Off at Riverside Café', desc: 'Show your Movement pass at any Riverside Café location near campus and get 30% off your entire order Monday–Friday.' },
    { icon: '/Icon-8.png', title: 'Fit Life Gym — 6 Weeks Free', desc: 'New Pepperdine student members get their first 6 weeks at Fit Life Gym completely free. No contract, cancel anytime.' },
    { icon: '/Icon-5.png', title: 'Style Local — 25% Off Everything', desc: 'Pepperdine Waves save 25% on all in-store purchases at Style Local Boutique. New arrivals every week.' },
    { icon: '/Icon-6.png', title: 'Wave Cuts — $5 Off Any Cut', desc: 'Show your student pass and save $5 on any haircut at Wave Cuts — Malibu\'s favorite student barbershop.' },
    { icon: '/Icon-4.png', title: 'Campus Eats — BOGO Lunch', desc: 'Buy one lunch, get one free at Campus Eats every Tuesday and Thursday. Perfect for study buddies.' },
    { icon: '/icon-1.png', title: 'Game Zone — 2 Hours for $1', desc: 'Pepperdine students get 2 hours of gaming for just $1 on weekday afternoons. Perfect for stress relief between classes.' },
  ];

  const steps = [
    { n: '01', icon: '/digital-marketing-icons-N952ZWA.png', title: 'Register Free', desc: 'Sign up with your Pepperdine .edu email. Verified in under 2 minutes — no credit card, no paperwork.' },
    { n: '02', icon: '/Icon-11.png', title: 'Browse 100+ Deals', desc: 'Explore exclusive deals at restaurants, gyms, retail stores, and services all near Pepperdine campus.' },
    { n: '03', icon: '/Icon-10.png', title: 'Show & Save', desc: 'Visit the merchant, show your digital Movement student pass on your phone, and save instantly.' },
    { n: '04', icon: '/Icon-12.png', title: 'Refer & Earn', desc: 'Refer fellow Waves and earn bonus credits toward even more exclusive perks and deals.' },
  ];

  const faqs = [
    { q: 'Is The Movement completely free for students?', a: 'Yes — always. Student registration is 100% free. No hidden fees, no subscription, no credit card required.' },
    { q: 'How do I verify my student status?', a: 'Simply register with your Pepperdine .edu email address. We send a verification link and your account is active within minutes.' },
    { q: 'Can I use deals at multiple businesses?', a: 'Absolutely. Your student pass works at every participating merchant — use it as often as you like.' },
    { q: 'How often are new deals added?', a: 'New deals are added every week. Subscribe to our newsletter or check the Happening page to stay up to date.' },
    { q: 'Can graduate and international students join?', a: 'Yes! Any currently enrolled Pepperdine student with a valid .edu email qualifies, regardless of program or residency status.' },
    { q: 'What if a merchant doesn\'t honor my pass?', a: 'Contact us immediately at chamil.hettiarachchi@sales.movement.college. We take merchant compliance very seriously and address every issue.' },
    { q: 'I\'m a grad student at West LA, Calabasas, or Irvine \u2014 can I join?', a: 'Yes! The Movement is open to all currently enrolled Pepperdine students across all campuses. Just sign up with your .edu email.' },
  ];

  return (
    <>
      <Navbar />
      <PageBanner title="For Students" breadcrumb="Students" />

      {/* ─── What students get ─── */}
      <div className="section">
        <div className="hero-container">
          <div className="d-flex flex-column flex-xl-row gspace-5">
            <div className="expertise-img-layout">
              <div className="image-container expertise-img" style={{ borderRadius: '24px', overflow: 'hidden' }}>
                <img src="https://images.unsplash.com/photo-1688602082765-4619f9b6f844?auto=format&fit=crop&w=600&q=80" alt="Pepperdine Students" className="img-fluid " data-gsap="fade-up" />
                <div className="expertise-layout">
                  <div className="d-flex flex-column">
                    <div className="card-expertise-wrapper">
                      <div className="card card-expertise " data-gsap="fade-up">
                        <h4>Nearly 10,000 Pepperdine Waves — Join Your Community</h4>
                        <p>Register free and start saving at local businesses near campus — open to all Pepperdine students across every campus.</p>
                        <div className="d-flex align-items-center flex-row gspace-2 expertise-link">
                          <Link href="#register">Register Free Now</Link>
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
                <span>For Pepperdine Waves</span>
              </div>
              <h2 className="title-heading " data-gsap="fade-right">
                Exclusive Deals Around Pepperdine Campus — Always Free
              </h2>
              <p>The Movement gives every Pepperdine student — whether you&apos;re an undergrad on the Malibu campus or a grad student in West LA, Calabasas, or Irvine — instant access to exclusive discounts at local businesses near campus. No cost, no catch.</p>
              <div className="d-flex flex-column flex-md-row gspace-2">
                <div className="expertise-list">
                  <h5>What You Get</h5>
                  <ul className="check-list">
                    <li><a href="#">100+ exclusive local deals</a></li>
                    <li><a href="#">New deals added weekly</a></li>
                    <li><a href="#">Digital student pass on your phone</a></li>
                    <li><a href="#">Restaurant &amp; café discounts</a></li>
                    <li><a href="#">Gym &amp; fitness deals</a></li>
                    <li><a href="#">Retail &amp; service savings</a></li>
                  </ul>
                </div>
                <div className="card card-expertise card-expertise-counter " data-gsap="fade-up">
                  <div className="d-flex flex-row gspace-2 align-items-center">
                    <div className="d-flex flex-row align-items-center">
                      <span style={{ fontSize: '2.5rem', fontWeight: 800 }}>$200</span>
                    </div>
                    <h6>Average Student Savings Per Semester Using The Movement</h6>
                  </div>
                  <p>Pepperdine students save big on food, fitness, and everyday essentials — all within walking or driving distance of campus.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Featured Deals (service cards) ─── */}
      <div className="section">
        <div className="hero-container">
          <div className="d-flex flex-column justify-content-center text-center gspace-5">
            <div className="d-flex flex-column justify-content-center text-center gspace-2">
              <div className="sub-heading align-self-center " data-gsap="fade-up">
                <i className="fa-regular fa-circle-dot"></i>
                <span>Featured Deals</span>
              </div>
              <h2 className="title-heading heading-container heading-container-medium " data-gsap="fade-up">
                Today&apos;s Best Deals for Pepperdine Waves
              </h2>
            </div>
            <div className="card-service-wrapper">
              <div className="row row-cols-xl-3 row-cols-md-2 row-cols-1 grid-spacer-2">
                {deals.map((deal, i) => (
                  <div className="col" key={deal.title}>
                    <div className={`card card-service h-100 d-flex flex-column animate-box animated animate__animated ${i % 3 === 0 ? 'slow' : i % 3 === 2 ? 'fast' : ''}`} data-animate="animate__fadeInLeft">
                      <div className="d-flex flex-row justify-content-between gspace-2 gspace-md-3 align-items-center">
                        <div>
                          <div className="service-icon-wrapper">
                            <div className="service-icon">
                              <img src={deal.icon} alt={deal.title} className="img-fluid" onError={e => (e.currentTarget.style.display='none')} />
                            </div>
                          </div>
                        </div>
                        <div className="service-title"><h4>{deal.title}</h4></div>
                      </div>
                      <p>{deal.desc}</p>
                      <Link href="#register" className="btn btn-accent mt-auto">
                        <div className="btn-title"><span>Claim This Deal</span></div>
                        <div className="icon-circle"><i className="fa-solid fa-arrow-right"></i></div>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="service-link-footer">
              <p>Seeing all deals requires a free student account. <Link href="#register">Register now — takes 2 minutes.</Link></p>
            </div>
          </div>
        </div>
      </div>

      <PartnerSection
        heading="Local Businesses Ready to Serve You"
        desc="From dining to fitness, retail to entertainment — every deal on The Movement is from a real local Malibu business that wants your business."
      />

      <GuideBand
        title="Start Saving Around Pepperdine Today!"
        desc="Register free with your Pepperdine email and unlock 100+ exclusive deals at local Malibu businesses. Takes 2 minutes. Costs nothing."
        linkLabel="Register Free Now"
        linkHref="#register"
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
                    <h2 className="title-heading">Simple Steps to Start Saving</h2>
                  </div>
                </div>
                <div className="col">
                  <div className="d-flex flex-column gspace-2 justify-content-end h-100 " data-gsap="fade-up">
                    <p>Getting started takes under 2 minutes. Register free, browse deals, and start saving today — no credit card needed.</p>
                    <div className="link-wrapper">
                      <Link href="#register">Register Now — It&apos;s Free</Link>
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
                        <div className="d-flex flex-md-row flex-column gspace-2 animate-box animated animate__animated" data-animate={i % 2 === 0 ? 'animate__fadeInUp' : 'animate__fadeInDown'}>
                          {i > 0 && <div className="step-spacer"></div>}
                          <div className="digital-process-step">
                            <div className="d-flex justify-content-between">
                              <div><img src={step.icon} alt="Step Icon" className="process-icon" onError={e => (e.currentTarget.style.display='none')} /></div>
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

      {/* ─── CSR: Give Back While You Save ─── */}
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
                  <span>Community Impact</span>
                </div>
                <h3 className="title-heading" style={{ marginBottom: 16 }}>
                  Save More. Give Back. Be the Change.
                </h3>
                <p style={{ lineHeight: 1.8 }}>
                  Every time you use The Movement, you&apos;re part of a community that believes in purpose-driven living. We partner with Change the Cycle Inc. — a nonprofit founded right here in Calabasas — to support girls and young women in underserved communities who have big dreams but limited means. Keep an eye on The Movement for upcoming student fundraiser events at local Malibu businesses. Every dollar raised goes toward STEM scholarships and career support for girls who need it most.
                </p>
                <Link href="/happening" className="btn btn-accent" style={{ marginTop: 8 }}>
                  <div className="btn-title"><span>Find Upcoming Fundraisers</span></div>
                  <div className="icon-circle"><i className="fa-solid fa-arrow-right"></i></div>
                </Link>
              </div>
              <div style={{ flexShrink: 0, fontSize: '6rem', opacity: 0.15, lineHeight: 1 }}>❤️</div>
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
                <span>Student FAQ</span>
              </div>
              <h2 className="title-heading heading-container heading-container-short">Got Questions? We&apos;ve Got Answers.</h2>
            </div>
            <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'left' }}>
              {faqs.map((faq, idx) => (
                <div key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    style={{ width: '100%', textAlign: 'left', padding: '18px 0', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'inherit', fontWeight: 600, fontSize: '1rem', color: '#fff' }}>
                    <span>{faq.q}</span>
                    <i className={`fa-solid ${openFaq === idx ? 'fa-minus accent-color' : 'fa-plus'}`} style={{ fontSize: '.85rem', flexShrink: 0, marginLeft: 12 }}></i>
                  </button>
                  {openFaq === idx && (
                    <div style={{ paddingBottom: 16 }}>
                      <p style={{ margin: 0, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ─── Registration form ─── */}
      <div className="section" id="register">
        <div className="hero-container">
          <div className="newsletter-wrapper">
            <div className="newsletter-layout">
              <div className="spacer"></div>
              <div className="d-flex flex-column gspace-5 position-relative z-2">
                <div className="d-flex flex-column gspace-2">
                  <h3 className="title-heading">Register Free — Unlock All Deals</h3>
                  <p>Enter your Pepperdine email to get instant access to 100+ exclusive local deals near campus. Free forever. No credit card, no hidden fees.</p>
                </div>
                <form onSubmit={e => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <div style={{ position: 'relative' }}>
                    <i className="fa-solid fa-user" style={{ position: 'absolute', left: 18, top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.3)', fontSize: '0.9rem' }}></i>
                    <input type="text" placeholder="Your Full Name" required style={{
                      width: '100%', padding: '16px 18px 16px 46px',
                      background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)',
                      borderRadius: 14, color: '#fff', fontSize: '0.95rem',
                      outline: 'none', transition: 'border-color 0.3s, box-shadow 0.3s', fontFamily: 'inherit',
                    }} onFocus={e => { e.target.style.borderColor = 'rgba(224,16,110,0.5)'; e.target.style.boxShadow = '0 0 20px rgba(224,16,110,0.12)'; }}
                       onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.12)'; e.target.style.boxShadow = 'none'; }} />
                  </div>
                  <div style={{ position: 'relative' }}>
                    <i className="fa-solid fa-envelope" style={{ position: 'absolute', left: 18, top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.3)', fontSize: '0.9rem' }}></i>
                    <input type="email" placeholder="Your Pepperdine Email (name@pepperdine.edu)" required style={{
                      width: '100%', padding: '16px 18px 16px 46px',
                      background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)',
                      borderRadius: 14, color: '#fff', fontSize: '0.95rem',
                      outline: 'none', transition: 'border-color 0.3s, box-shadow 0.3s', fontFamily: 'inherit',
                    }} onFocus={e => { e.target.style.borderColor = 'rgba(224,16,110,0.5)'; e.target.style.boxShadow = '0 0 20px rgba(224,16,110,0.12)'; }}
                       onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.12)'; e.target.style.boxShadow = 'none'; }} />
                  </div>
                  <button className="btn btn-accent" type="submit">
                    <span className="btn-title"><span>Create Free Account</span></span>
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
