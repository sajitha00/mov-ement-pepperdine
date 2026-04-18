'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useTheme } from '@/components/ThemeProvider';

/* ─── Counter ─── */
function Counter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      obs.disconnect();

      const duration = 2200; // ms — long enough to feel weighty
      const startTime = performance.now();

      // easeOutExpo: fast start, smooth deceleration to final value
      const easeOutExpo = (t: number) =>
        t >= 1 ? 1 : 1 - Math.pow(2, -10 * t);

      const tick = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = easeOutExpo(progress);
        setCount(Math.round(eased * target));
        if (progress < 1) {
          rafRef.current = requestAnimationFrame(tick);
        }
      };

      rafRef.current = requestAnimationFrame(tick);
    }, { threshold: 0.4 });

    obs.observe(el);
    return () => {
      obs.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [target]);

  return <span ref={ref} className="counter">{count}{suffix}</span>;
}

export default function HomePage() {
  const [activePath, setActivePath] = useState<'merchant' | 'student'>('merchant');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  /* Suppress bootstrap/script.js – reinit animations via IntersectionObserver */
  useEffect(() => {
    const els = document.querySelectorAll('.animate-box');
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const anim = (e.target as HTMLElement).dataset.animate;
          if (anim) e.target.classList.add(anim);
          (e.target as HTMLElement).style.opacity = '1';
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const merchantSteps = [
    { n: '01', icon: '/Icon-4.png', title: 'Schedule a Call', desc: 'Book a free 20-min call with our team. We confirm fit, walk you through onboarding, and answer every question.' },
    { n: '02', icon: '/Icon-5.png', title: 'Create Your Profile', desc: 'We set up your merchant profile — photos, description, location, and your exclusive student discount.' },
    { n: '03', icon: '/Icon-6.png', title: 'Go Live & Get Discovered', desc: 'Your business appears on The Movement. Pepperdine students browsing nearby deals will find and visit you.' },
    { n: '04', icon: '/Icon-7.png', title: 'Track & Grow', desc: 'Watch your visibility and foot traffic grow. Refine your offer anytime from your merchant dashboard.' },
  ];

  const studentSteps = [
    { n: '01', icon: '/digital-marketing-icons-N952ZWA.png', title: 'Register Free', desc: 'Sign up with your Pepperdine email. Verified in under 2 minutes — no paperwork, no cost.' },
    { n: '02', icon: '/Icon-11.png', title: 'Browse Deals', desc: 'Explore 100+ exclusive deals at restaurants, gyms, retail stores, and services near campus.' },
    { n: '03', icon: '/Icon-10.png', title: 'Show & Save', desc: 'Visit the merchant, show your digital Movement student pass on your phone, and save instantly.' },
    { n: '04', icon: '/Icon-12.png', title: 'Share & Earn', desc: 'Refer fellow Waves and earn bonus credits toward even more deals.' },
  ];

  const steps = activePath === 'merchant' ? merchantSteps : studentSteps;

  const merchantFaqs = [
    { q: 'How much does it cost to list my business?', a: 'Listing is completely free. We also offer premium visibility tiers for businesses that want to appear higher in student searches and get featured promotions.' },
    { q: 'What type of businesses can join?', a: 'Any local business near the Pepperdine Malibu campus — restaurants, gyms, retail, salons, entertainment venues, and service providers.' },
    { q: 'How does student verification work?', a: 'Students verify their Pepperdine enrollment through their .edu email. They show their digital Movement pass on their phone to redeem discounts.' },
    { q: 'How quickly can I get listed?', a: 'After your onboarding call, we typically have your profile live within 24–48 business hours.' },
  ];

  const studentFaqs = [
    { q: 'Is The Movement free for students?', a: 'Yes — always. Student registration is 100% free. No hidden fees, no subscription, no credit card required.' },
    { q: 'How do I verify my student status?', a: 'Simply register with your Pepperdine .edu email address. We send a verification link and your account is active within minutes.' },
    { q: 'Can I use deals at multiple businesses?', a: 'Absolutely. Your student pass works at every participating merchant — use it as often as you like.' },
    { q: 'Can international students join?', a: 'Yes! Any currently enrolled Pepperdine student with a .edu email qualifies, regardless of residency status.' },
  ];

  const faqs = activePath === 'merchant' ? merchantFaqs : studentFaqs;

  return (
    <>
      <Navbar />

      {/* ═══ BANNER ═══ */}
      <div className="section-banner">
        <div className="banner-video-container" data-gsap="fade-up">
          {/* Background */}
          <div id="banner-video-background" style={{
            position: 'absolute', inset: 0, zIndex: 0,
            background: isDark
              ? 'linear-gradient(135deg, #0B0014 0%, #1a004d 50%, #0B0014 100%)'
              : 'linear-gradient(135deg, #f0f0fb 0%, #e8e8f8 50%, #f0f0fb 100%)',
            transition: 'background 0.4s ease',
          }}></div>

          <div className="hero-container position-relative" style={{ zIndex: 2 }}>
            {/* Two-column hero layout */}
            <div className="hero-split-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '48px', alignItems: 'center', minHeight: 560, padding: '60px 0 40px' }}>

              {/* ── LEFT: Text + CTA ── */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                <h1 className="title-heading" data-gsap="hero" style={{
                  margin: 0,
                  fontSize: 'clamp(2.2rem, 4.5vw, 4rem)',
                  fontWeight: 900,
                  lineHeight: 1.12,
                  letterSpacing: '-0.03em',
                }}>
                  The #1 Student Deal Platform for Pepperdine Waves
                </h1>

                <p data-gsap="fade-up"
                  style={{ color: isDark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.6)', fontSize: '1.05rem', lineHeight: 1.75, margin: 0 }}>
                  The Movement connects nearly 10,000 Pepperdine students — across Malibu, West LA, Calabasas, and Irvine — with exclusive discounts at local businesses. Free for students. Free to list for merchants.
                </p>

                <div data-gsap="fade-up" style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
                  <Link href="/students" className="btn btn-accent">
                    <div className="btn-title"><span>🎓 Join as Student</span></div>
                    <div className="icon-circle"><i className="fa-solid fa-arrow-right"></i></div>
                  </Link>
                </div>

                {/* Social proof */}
                <div data-gsap="fade-up" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ display: 'flex' }}>
                    {['12','23','34','45'].map(u => (
                      <img key={u} src={`https://i.pravatar.cc/150?u=${u}`} alt="Student"
                        style={{ width: 36, height: 36, borderRadius: '50%', border: `2px solid ${isDark ? '#0B0014' : '#f0f0fb'}`, marginLeft: -8 }} />
                    ))}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: isDark ? '#fff' : '#0f0f1a', fontSize: '0.95rem' }}>~10,000 students across 4 campuses</div>
                    <div style={{ color: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)', fontSize: '0.8rem' }}>3,553 undergrads on the Malibu campus</div>
                  </div>
                </div>
              </div>

              {/* ── RIGHT: Hero Video ── */}
              <div className="hero-image-col" data-gsap="fade-right" style={{ position: 'relative' }}>
                {/* Main video — no YouTube player, pure HTML5 */}
                <div style={{
                  borderRadius: 24, overflow: 'hidden', position: 'relative',
                  boxShadow: isDark
                    ? '0 24px 80px rgba(139,18,223,0.35), 0 0 0 1px rgba(255,255,255,0.08)'
                    : '0 24px 60px rgba(139,18,223,0.2), 0 0 0 1px rgba(139,18,223,0.12)',
                }}>
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{ width: '100%', aspectRatio: '1/1', maxHeight: 520, objectFit: 'cover', display: 'block' }}
                  >
                    <source
                      src="/per.mp4"
                      type="video/mp4"
                    />
                  </video>
                  {/* Brand gradient overlay */}
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: isDark
                      ? 'linear-gradient(135deg, rgba(139,18,223,0.25) 0%, rgba(255,16,69,0.15) 100%)'
                      : 'linear-gradient(135deg, rgba(139,18,223,0.12) 0%, rgba(255,98,0,0.08) 100%)',
                    pointerEvents: 'none',
                  }} />
                </div>

                {/* Floating stat badge — top left */}
                <div style={{
                  position: 'absolute', top: -16, left: -20,
                  background: isDark ? 'rgba(15,0,40,0.92)' : '#fff',
                  backdropFilter: 'blur(12px)',
                  border: `1px solid ${isDark ? 'rgba(255,255,255,0.12)' : 'rgba(139,18,223,0.15)'}`,
                  borderRadius: 16, padding: '12px 18px',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                }}>
                  <div style={{ fontSize: '1.4rem', fontWeight: 900, background: 'linear-gradient(135deg,#FF6200,#8B12DF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>100+</div>
                  <div style={{ fontSize: '0.78rem', color: isDark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.55)', fontWeight: 600 }}>Local Businesses</div>
                </div>

                {/* Floating badge — bottom right */}
                <div style={{
                  position: 'absolute', bottom: -16, right: -16,
                  background: isDark ? 'rgba(15,0,40,0.92)' : '#fff',
                  backdropFilter: 'blur(12px)',
                  border: `1px solid ${isDark ? 'rgba(255,255,255,0.12)' : 'rgba(139,18,223,0.15)'}`,
                  borderRadius: 16, padding: '12px 18px',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                  display: 'flex', alignItems: 'center', gap: 10,
                }}>
                  <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'linear-gradient(135deg,#FF6200,#8B12DF)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className="fa-solid fa-tag" style={{ color: '#fff', fontSize: '0.8rem' }}></i>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.82rem', fontWeight: 700, color: isDark ? '#fff' : '#0f0f1a' }}>New Deal!</div>
                    <div style={{ fontSize: '0.75rem', color: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)' }}>Malibu Café — 20% off</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>


      {/* ═══ EXPERTISE — What is The Movement ═══ */}
      <div className="section">
        <div className="hero-container">
          <div className="d-flex flex-column flex-xl-row gspace-5">
            {/* Image left */}
            <div className="expertise-img-layout">
              <div className="image-container expertise-img" style={{ borderRadius: '24px', overflow: 'hidden' }}>
                <img src="https://images.unsplash.com/photo-1450125531260-73927b22d6f3?auto=format&fit=crop&w=600&q=80" alt="The Movement Pepperdine" className="img-fluid " data-gsap="fade-up" />
                <div className="expertise-layout">
                  <div className="d-flex flex-column">
                    <div className="card-expertise-wrapper">
                      <div className="card card-expertise " data-gsap="fade-up">
                        <h4>Ready to Reach Nearly 10,000 Pepperdine Students?</h4>
                        <p>Let&apos;s get your business listed for free and start driving student foot traffic today.</p>
                        <div className="d-flex align-items-center flex-row gspace-2 expertise-link">
                          <Link href="/merchants">Schedule Free Onboarding</Link>
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

            {/* Text right */}
            <div className="expertise-title">
              <div className="sub-heading " data-gsap="fade-right">
                <i className="fa-regular fa-circle-dot"></i>
                <span>What is The Movement</span>
              </div>
              <h2 className="title-heading " data-gsap="fade-right">
                Student Deals. Local Businesses. One Platform.
              </h2>
              <p>The Movement bridges Pepperdine Waves and the best local businesses in Malibu — serving a university community of nearly 10,000 students spread across Southern California, with the heart of campus life right here in Malibu.</p>
              <div className="d-flex flex-column flex-md-row gspace-2">
                <div className="expertise-list">
                  <h5>Who Benefits</h5>
                  <ul className="check-list">
                    <li><Link href="/students">Pepperdine Students (all majors)</Link></li>
                    <li><Link href="/merchants">Local Restaurants &amp; Cafés</Link></li>
                    <li><Link href="/merchants">Gyms &amp; Fitness Studios</Link></li>
                    <li><Link href="/merchants">Retail &amp; Clothing Stores</Link></li>
                    <li><Link href="/merchants">Salons &amp; Barbershops</Link></li>
                    <li><Link href="/merchants">Entertainment &amp; Services</Link></li>
                  </ul>
                </div>
                <div className="card card-expertise card-expertise-counter " data-gsap="fade-up">
                  <div className="d-flex flex-row gspace-2 align-items-center">
                    <div className="d-flex flex-row align-items-center">
                      <span className="counter" style={{ fontSize: '2rem', fontWeight: 800 }}>🏪</span>
                    </div>
                    <h6>Growing Network of Local Deals — New Merchants Added Weekly</h6>
                  </div>
                  <p>From dining to fitness, retail to professional services — all within the Malibu area near campus.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ PARTNER TICKER ═══ */}
      <div className="section-partner">
        <div className="hero-container">
          <div className="card card-partner " data-gsap="fade-right">
            <div className="partner-spacer"></div>
            <div className="row row-cols-xl-2 row-cols-1 align-items-center px-5 position-relative z-2">
              <div className="col">
                <div className="d-flex flex-column justify-content-start pe-xl-3 pe-0">
                  <h3 className="title-heading">Trusted by Local Malibu Businesses</h3>
                </div>
              </div>
              <div className="col">
                <div className="d-flex flex-column ps-xl-3 ps-0">
                  <p>From neighborhood restaurants to gyms and boutiques — local merchants across Malibu trust The Movement to connect them with the Pepperdine student community.</p>
                </div>
              </div>
            </div>
            <div className="swiperPartner-layout">
              <div className="swiperPartner-overlay"><div className="spacer"></div></div>
              <div className="swiperPartner-container">
                {/* Static ticker using CSS animation — no Swiper needed */}
                <div style={{ display: 'flex', gap: 48, overflow: 'hidden', padding: '16px 0' }}>
                  {['Client-1.png','Client-2.png','Client-3.png','Client-4.png','Client-5.png','Client-6.png','Client-7.png','Client-8.png',
                    'Client-1.png','Client-2.png','Client-3.png','Client-4.png'].map((img, i) => (
                    <div key={i} className="partner-slide" style={{ flexShrink: 0 }}>
                      <img src={`/${img}`} alt="Partner" className="img-fluid" style={{ height: 50, opacity: 0.6, filter: 'grayscale(1)' }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ WHY CHOOSE US ═══ */}
      <div className="section">
        <div className="hero-container">
          <div className="row row-cols-xl-2 row-cols-1 grid-spacer-5">
            {/* Cards left */}
            <div className="col order-md-1 order-2">
              <div className="d-flex flex-column gspace-2">
                {[
                  { icon: '/Icon-2.png', title: 'Free for Every Student', desc: 'Every currently enrolled Pepperdine Wave gets 100% free access to all deals — no credit card, no catch.' },
                  { icon: '/icon-1.png', title: 'Real Local Businesses Only', desc: 'Every merchant on The Movement is a real Malibu business near Pepperdine campus — no chains, no gimmicks.' },
                  { icon: '/Icon-3.png', title: 'Deals that Actually Save You Money', desc: 'Our deals average 10–25% off — meaningful savings on food, fitness, retail, and services you use every week.' },
                ].map((item, idx) => (
                  <div key={idx} className={`card card-chooseus animate-box animated animate__animated ${idx === 0 ? 'fast' : idx === 2 ? 'slow' : ''}`} data-animate="animate__fadeInLeft">
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
                        <Link href="/students">Learn More</Link>
                        <i className="fa-solid fa-arrow-circle-right accent-color"></i>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Text + image right */}
            <div className="col order-md-2 order-1">
              <div className="d-flex flex-column gspace-5">
                <div className="d-flex flex-column gspace-2">
                  <div className="sub-heading " data-gsap="fade-up">
                    <i className="fa-regular fa-circle-dot"></i>
                    <span>Why Choose The Movement</span>
                  </div>
                  <h2 className="title-heading " data-gsap="fade-up">
                    Your Community is Our Mission
                  </h2>
                  <p className="mb-0 " data-gsap="fade-up">
                    We don&apos;t just list deals — we build real connections between Pepperdine students and the Malibu businesses that want to serve them. The Movement is community-first, always.
                  </p>
                </div>
                <div className="image-container">
                  <img src="https://images.unsplash.com/photo-1630312022342-b803b7064bd0?auto=format&fit=crop&w=600&q=80" alt="The Movement Community" className="chooseus-img" />
                  <div className="card-chooseus-cta-layout">
                    <div className="chooseus-cta-spacer"></div>
                    <div className="d-flex flex-column align-items-end">
                      <div className="chooseus-cta-spacer"></div>
                      <div className="card-chooseus-cta-wrapper">
                        <div className="card card-chooseus-cta " data-gsap="fade-up">
                          <h5>Join The Movement &amp; start saving or growing today.</h5>
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

      {/* ═══ GUIDE (dark CTA band) ═══ */}
      <div className="section-guide">
        <div className="guide-banner">
          <div className="hero-container">
            <div className="guide-content " data-gsap="fade-up">
              <div className="guide-video-container" style={{ display: 'none' }}>
              </div>
              <div className="d-flex flex-column gspace-2">
                <h3 className="title-heading">Transform Your Malibu Experience!</h3>
                <p>Whether you&apos;re a student looking to save or a business ready to grow — The Movement is your platform. Join free today and be part of something bigger.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ SERVICES → CHOOSE YOUR PATH ═══ */}
      <div className="section">
        <div className="hero-container">
          <div className="d-flex flex-column justify-content-center text-center gspace-5">
            <div className="d-flex flex-column justify-content-center text-center gspace-2">
              <div className="sub-heading align-self-center " data-gsap="fade-up">
                <i className="fa-regular fa-circle-dot"></i>
                <span>Choose Your Path</span>
              </div>
              <h2 className="title-heading heading-container heading-container-medium " data-gsap="fade-up">
                {activePath === 'merchant' ? 'Grow Your Business with Student Customers' : 'Save Money Around Pepperdine Campus'}
              </h2>
            </div>

            {/* Toggle */}
            <div className="d-flex justify-content-center">
              <div style={{ display: 'inline-flex', background: '#f4f4f4', borderRadius: 999, padding: 5, gap: 4 }}>
                <button onClick={() => setActivePath('merchant')} className={`btn${activePath === 'merchant' ? ' btn-accent' : ''}`}
                  style={{ borderRadius: 999, padding: '8px 24px', fontWeight: 700, fontSize: '.9rem', transition: 'all .3s', color: activePath !== 'merchant' ? '#333' : '#fff' }}>
                  {activePath === 'merchant' ? <><div className="btn-title"><span>🏪 For Merchants</span></div></> : '🏪 For Merchants'}
                </button>
                <button onClick={() => setActivePath('student')} className={`btn${activePath === 'student' ? ' btn-accent' : ''}`}
                  style={{ borderRadius: 999, padding: '8px 24px', fontWeight: 700, fontSize: '.9rem', transition: 'all .3s', color: activePath !== 'student' ? '#333' : '#fff' }}>
                  {activePath === 'student' ? <><div className="btn-title"><span>🎓 For Students</span></div></> : '🎓 For Students'}
                </button>
              </div>
            </div>

            {/* Service cards */}
            <div className="card-service-wrapper">
              <div className="row row-cols-xl-4 row-cols-md-2 row-cols-1 grid-spacer-2">
                {steps.map((step, idx) => (
                  <div className="col" key={step.n}>
                    <div className={`card card-service h-100 d-flex flex-column animate-box animated animate__animated ${idx === 0 ? 'slow' : idx === 2 ? 'fast' : ''}`} data-animate="animate__fadeInLeft">
                      <div className="d-flex flex-row justify-content-between gspace-2 gspace-md-3 align-items-center">
                        <div>
                          <div className="service-icon-wrapper">
                            <div className="service-icon">
                              <img src={step.icon} alt="Step Icon" className="img-fluid" onError={e => (e.currentTarget.style.display='none')} />
                            </div>
                          </div>
                        </div>
                        <div className="service-title">
                          <h4>{step.n} — {step.title}</h4>
                        </div>
                      </div>
                      <p>{step.desc}</p>
                      <Link href={activePath === 'merchant' ? '/merchants' : '/students'} className="btn btn-accent mt-auto">
                        <div className="btn-title"><span>{activePath === 'merchant' ? 'Get Started' : 'Register Free'}</span></div>
                        <div className="icon-circle"><i className="fa-solid fa-arrow-right"></i></div>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="service-link-footer">
              <p>
                {activePath === 'merchant'
                  ? <>Ready to reach nearly 10,000 Pepperdine students? <Link href="/merchants">Schedule Your Free Onboarding Call</Link></>
                  : <>Pepperdine student? Register free and unlock exclusive local deals. <Link href="/students">Join The Movement</Link></>
                }
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ CASE STUDIES → SUCCESS STORIES ═══ */}
      <div className="section p-0">
        <div className="hero-container">
          <div className="case-studies-layout">
            <div className="card card-case-studies">
              <div className="row row-cols-xl-2 row-cols-1 grid-spacer-5">
                <div className="col">
                  <div className="d-flex flex-column gspace-2 " data-gsap="fade-left">
                    <div className="sub-heading">
                      <i className="fa-regular fa-circle-dot"></i>
                      <span>Success Stories</span>
                    </div>
                    <h2 className="title-heading">See How The Movement Helps Malibu Thrive</h2>
                  </div>
                </div>
                <div className="col">
                  <div className="d-flex flex-column h-100 justify-content-end gspace-2 " data-gsap="fade-right">
                    <p>From restaurants that doubled their student traffic to Waves saving hundreds per semester — The Movement delivers real results for both sides.</p>
                    <div className="link-wrapper">
                      <Link href="/happening">More Stories</Link>
                      <i className="fa-solid fa-circle-arrow-right"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-column gspace-2">
                <div className="d-flex flex-column flex-xl-row gspace-2">
                  <div className="card case-studies-content local-business " data-gsap="fade-up">
                    <div className="case-studies-component large align-self-end justify-content-end align-items-end">
                      {['Dining', 'Gyms', 'Retail', 'Salons', 'Coffee', 'Events', 'Services'].map(t => (
                        <div key={t} className="cs-component"><a href="#">{t}</a></div>
                      ))}
                    </div>
                    <div className="d-flex flex-column gspace-2">
                      <a href="#" className="case-studies-title"><h4>Riverside Café — Student Traffic Doubled</h4></a>
                      <p>Foot traffic from Pepperdine students doubled in 2 months. The ROI has been incredible for a café our size — Sarah R., Owner.</p>
                    </div>
                  </div>
                  <div className="card case-studies-content saas-leads " data-gsap="fade-up">
                    <div className="d-flex flex-column gspace-2">
                      <a href="#" className="case-studies-title"><h4>James M. — Saving $200/Month as a CS Senior</h4></a>
                      <p>I save $40–60 every single week using The Movement. The deals at restaurants and coffee shops around campus are genuinely incredible.</p>
                    </div>
                    <div className="case-studies-component small align-self-end justify-content-end align-items-end">
                      {['Food', 'Coffee', 'Gym', 'Retail', 'Events', 'Services'].map(t => (
                        <div key={t} className="cs-component"><a href="#">{t}</a></div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-column flex-xl-row gspace-2">
                  <div className="card case-studies-content ecommerce " data-gsap="fade-up">
                    <div className="case-studies-component small align-self-start justify-content-start align-items-start">
                      {['Fitness', 'Health', 'Wellness', 'Deals', 'Pepperdine', 'Campus'].map(t => (
                        <div key={t} className="cs-component"><a href="#">{t}</a></div>
                      ))}
                    </div>
                    <div className="d-flex flex-column gspace-2">
                      <a href="#" className="case-studies-title"><h4>Fit Life Gym — 6 Weeks Free for Movement Members</h4></a>
                      <p>First 6 weeks free for Pepperdine students. No contract, cancel anytime. We saw 120+ student sign-ups in the first month alone.</p>
                    </div>
                  </div>
                  <div className="card case-studies-content startup-branding " data-gsap="fade-up">
                    <div className="d-flex flex-column gspace-2">
                      <a href="#" className="case-studies-title"><h4>Style Local Boutique — 25% Off for Wave Members</h4></a>
                      <p>Spring styles just dropped. Pepperdine students get 25% off everything in store — exclusive to The Movement members only.</p>
                    </div>
                    <div className="case-studies-component large align-self-start justify-content-start align-items-start">
                      {['Fashion', 'Style', 'Local', 'Student', 'Savings', 'Pepperdine'].map(t => (
                        <div key={t} className="cs-component"><a href="#">{t}</a></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="spacer"></div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ TESTIMONIALS ═══ */}
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
                          <img src="https://i.pravatar.cc/150?u=45" alt="Student" className="avatar" />
                          <img src="https://i.pravatar.cc/150?u=56" alt="Student" className="avatar" />
                          <img src="https://i.pravatar.cc/150?u=67" alt="Student" className="avatar" />
                          <img src="https://i.pravatar.cc/150?u=78" alt="Student" className="avatar" />
                        </div>
                        <div className="detail">
                          <h6>~10K</h6>
                          <h6>Pepperdine Students</h6>
                        </div>
                      </div>
                      <div className="testimonial-rating-container">
                        <div className="d-flex flex-column justify-content-center align-items-center gspace-1">
                          <div className="d-flex flex-row align-items-center">
                            <Counter target={100} /><span className="counter-detail">+</span>
                          </div>
                          <p>Local Deals</p>
                        </div>
                        <div className="underline-vertical"></div>
                        <div className="d-flex flex-column justify-content-center align-items-center gspace-1">
                          <div className="d-flex flex-row align-items-center">
                            <Counter target={2} /><span className="counter-detail">x</span>
                          </div>
                          <p>Avg Traffic Boost</p>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-column flex-md-row flex-xl-column justify-content-center gspace-2">
                      <div className="testimonial-header-link-wrapper">
                        <i className="fa-regular fa-circle-check accent-color"></i>
                        <a href="#">Student Discounts</a>
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
                    <p>Discover how Pepperdine Waves and local Malibu businesses are thriving with The Movement.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial cards — static grid instead of Swiper */}
            <div className="d-flex flex-column">
              <div className="overflow-hidden">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
                  {[
                    { name: 'James M.', role: 'Senior, Computer Science', quote: 'I save $40–60 every single week using The Movement. The deals at restaurants and coffee shops around campus are genuinely incredible.', img: 'https://i.pravatar.cc/150?u=James' },
                    { name: 'Sarah R.', role: 'Owner, Riverside Café', quote: 'Our foot traffic from Pepperdine students literally doubled in two months. The onboarding was effortless and the ROI has been incredible for a café our size.', img: 'https://i.pravatar.cc/150?u=Sarah' },
                    { name: 'Amara L.', role: 'Junior, Marketing', quote: 'Every Wave needs The Movement. New deals pop up constantly and it\'s helped me discover so many great local spots I never knew existed.', img: 'https://i.pravatar.cc/150?u=Amara' },
                    { name: 'Marcus K.', role: 'Owner, Wave Cuts', quote: 'The students that come in through The Movement are loyal. They keep coming back and they bring their friends. Best decision I made all year.', img: 'https://i.pravatar.cc/150?u=Marcus' },
                  ].map(t => (
                    <div key={t.name} className="card card-testimonial " data-gsap="fade-up">
                      <div className="stars">
                        {[1,2,3,4,5].map(s => <i key={s} className="fa-solid fa-star"></i>)}
                      </div>
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

      {/* ═══ DIGITAL PROCESS → HOW IT WORKS ═══ */}
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
                    <h2 className="title-heading">
                      {activePath === 'merchant' ? 'Simple Steps to Reach Pepperdine Students' : 'Simple Steps to Start Saving'}
                    </h2>
                  </div>
                </div>
                <div className="col">
                  <div className="d-flex flex-column gspace-2 justify-content-end h-100 " data-gsap="fade-up">
                    <p>Our streamlined process ensures you&apos;re up and running fast — whether you&apos;re a merchant or a student, The Movement gets you connected in minutes.</p>
                    <div className="link-wrapper">
                      <Link href={activePath === 'merchant' ? '/merchants' : '/students'}>
                        {activePath === 'merchant' ? 'Schedule Free Call' : 'Register Now'}
                      </Link>
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
                        <div className={`d-flex flex-md-row flex-column gspace-2 animate-box animated animate__animated`} data-gsap="fade-up">
                          {i > 0 && <div className="step-spacer"></div>}
                          <div className="digital-process-step">
                            <div className="d-flex justify-content-between">
                              <div>
                                <img src={`/Icon-${9 + i}.png`} alt="Process Icon" className="process-icon" onError={e => (e.currentTarget.style.display = 'none')} />
                              </div>
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

      {/* ═══ CSR — SAVING MONEY. CHANGING LIVES. ═══ */}
      <div className="section">
        <div className="hero-container">
          <div className="d-flex flex-column gspace-5">
            <div className="d-flex flex-column justify-content-center text-center gspace-2" data-gsap="fade-up">
              <div className="sub-heading align-self-center">
                <i className="fa-regular fa-circle-dot"></i>
                <span>Community Impact</span>
              </div>
              <h2 className="title-heading heading-container heading-container-medium">
                Saving Money. Changing Lives.
              </h2>
              <p style={{ maxWidth: 720, margin: '0 auto' }}>
                The Movement is proud to support Change the Cycle Inc. — a Calabasas-based nonprofit empowering girls worldwide through STEM education.
              </p>
            </div>

            <div style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center' }}>
              <p style={{ lineHeight: 1.8, marginBottom: 36 }}>
                While you save on food, fitness, and fun — a portion of The Movement&apos;s community impact goes toward something bigger. Change the Cycle Inc. is dedicated to breaking the cycle of poverty for underserved girls and young women through education, job training, and financial support — in Los Angeles, Sri Lanka, Ghana, Uganda, and beyond. As a Pepperdine Wave, you have the power to make a real difference simply by being part of The Movement community.
              </p>

              {/* Stat tiles */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20, marginBottom: 40 }}>
                {[
                  { label: 'Girls Supported', value: 'In multiple countries across 3 continents', icon: '🌍' },
                  { label: 'Focus Area', value: 'STEM Education + Career Placement', icon: '💻' },
                  { label: 'Based In', value: 'Calabasas, CA — our backyard', icon: '📍' },
                ].map(tile => (
                  <div key={tile.label} className="card" style={{
                    padding: '32px 24px',
                    borderRadius: 20,
                    textAlign: 'center',
                    background: isDark
                      ? 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(139,18,223,0.08) 100%)'
                      : 'linear-gradient(135deg, rgba(139,18,223,0.04) 0%, rgba(224,16,110,0.06) 100%)',
                    border: `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(139,18,223,0.12)'}`,
                  }}>
                    <div style={{ fontSize: '2rem', marginBottom: 12 }}>{tile.icon}</div>
                    <h5 style={{ fontWeight: 700, marginBottom: 8, background: 'linear-gradient(135deg,#FF6200,#8B12DF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{tile.label}</h5>
                    <p style={{ margin: 0, fontSize: '0.9rem', opacity: 0.7 }}>{tile.value}</p>
                  </div>
                ))}
              </div>

              {/* CTA buttons */}
              <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="https://www.changethecycleinc.com/" target="_blank" rel="noopener noreferrer" className="btn btn-accent">
                  <div className="btn-title"><span>Learn More About Change the Cycle</span></div>
                  <div className="icon-circle"><i className="fa-solid fa-arrow-up-right-from-square"></i></div>
                </a>
                <Link href="/merchants" className="btn btn-outline" style={{ borderRadius: 999, padding: '12px 28px', fontWeight: 700, border: `2px solid ${isDark ? 'rgba(255,255,255,0.2)' : 'rgba(139,18,223,0.3)'}`, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                  Host a Fundraiser at Your Business
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ FAQ ═══ */}
      <div className="section">
        <div className="hero-container">
          <div className="d-flex flex-column justify-content-center text-center gspace-5">
            <div className="d-flex flex-column gspace-2 " data-gsap="fade-up">
              <div className="sub-heading align-self-center">
                <i className="fa-regular fa-circle-dot"></i>
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="title-heading heading-container heading-container-short">
                Got Questions? We&apos;ve Got Answers.
              </h2>
            </div>
            {/* Reuse toggle */}
            <div className="d-flex justify-content-center">
              <div style={{ display: 'inline-flex', background: isDark ? 'rgba(255,255,255,0.06)' : '#ebebf5', borderRadius: 999, padding: 5, gap: 4, border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'}` }}>
                <button onClick={() => setActivePath('merchant')} className={`btn${activePath === 'merchant' ? ' btn-accent' : ''}`}
                  style={{ borderRadius: 999, padding: '8px 24px', fontWeight: 700, fontSize: '.9rem', transition: 'all .3s', color: activePath !== 'merchant' ? (isDark ? 'rgba(255,255,255,0.6)' : '#333') : '#fff' }}>
                  {activePath === 'merchant' ? <><div className="btn-title"><span>🏪 Merchant FAQ</span></div></> : '🏪 Merchant FAQ'}
                </button>
                <button onClick={() => setActivePath('student')} className={`btn${activePath === 'student' ? ' btn-accent' : ''}`}
                  style={{ borderRadius: 999, padding: '8px 24px', fontWeight: 700, fontSize: '.9rem', transition: 'all .3s', color: activePath !== 'student' ? (isDark ? 'rgba(255,255,255,0.6)' : '#333') : '#fff' }}>
                  {activePath === 'student' ? <><div className="btn-title"><span>🎓 Student FAQ</span></div></> : '🎓 Student FAQ'}
                </button>
              </div>
            </div>
            <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'left' }}>
              {faqs.map((faq, idx) => (
                <div key={idx} style={{ borderBottom: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}` }}>
                  <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    style={{ width: '100%', textAlign: 'left', padding: '18px 0', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'inherit', fontWeight: 600, fontSize: '1rem', color: isDark ? '#fff' : '#0f0f1a' }}>
                    <span>{faq.q}</span>
                    <i className={`fa-solid ${openFaq === idx ? 'fa-minus accent-color' : 'fa-plus'}`} style={{ fontSize: '.85rem', flexShrink: 0, marginLeft: 12, color: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.4)' }}></i>
                  </button>
                  {openFaq === idx && (
                    <div style={{ paddingBottom: 16 }}>
                      <p style={{ margin: 0, color: isDark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.65)', lineHeight: 1.7 }}>{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ═══ NEWSLETTER ═══ */}
      <div className="section">
        <div className="hero-container">
          <div className="newsletter-wrapper">
            <div className="newsletter-layout" style={{
              background: isDark
                ? undefined
                : 'radial-gradient(at top left, #e8e8f8 0%, #f2f2fc 50%)',
              borderColor: isDark ? undefined : 'rgba(139,18,223,0.15)',
            }}>
              <div className="spacer"></div>
              <div className="d-flex flex-column gspace-5 position-relative z-2">
                <div className="d-flex flex-column gspace-2 " data-gsap="fade-left">
                  <h3 className="title-heading" style={{ color: isDark ? '#fff' : '#0f0f1a', WebkitTextFillColor: isDark ? '#fff' : '#0f0f1a' }}>
                    Stay in the Loop with The Movement
                  </h3>
                  <p style={{ color: isDark ? 'rgba(255,255,255,0.65)' : 'rgba(0,0,0,0.6)' }}>
                    New deals added every week. Subscribe for updates on the latest offers, new merchants, and campus events — delivered straight to your inbox.
                  </p>
                </div>
                <form onSubmit={e => e.preventDefault()} className="" data-gsap="fade-right">
                  <div className="input-container">
                    <input
                      type="email"
                      placeholder="Enter your Pepperdine email address"
                      required
                      style={{
                        background: isDark ? 'rgba(255,255,255,0.05)' : '#fff',
                        border: isDark ? '1px solid rgba(255,255,255,0.15)' : '1px solid rgba(139,18,223,0.2)',
                        color: isDark ? '#fff' : '#0f0f1a',
                        borderRadius: 8,
                        padding: '14px 18px',
                        fontSize: '1rem',
                        fontFamily: 'inherit',
                        outline: 'none',
                        width: '100%',
                      }}
                    />
                    <p className="error-text hidden"></p>
                  </div>
                  <button className="btn btn-accent" type="submit">
                    <span className="btn-title"><span>Subscribe</span></span>
                    <span className="icon-circle"><i className="fa-solid fa-arrow-right"></i></span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* ═══ BLOG → HAPPENING NOW ═══ */}
      <div className="section">
        <div className="hero-container">
          <div className="d-flex flex-column gspace-5">
            <div className="row row-cols-xl-2 row-cols-1 grid-spacer-5">
              <div className="col col-xl-8">
                <div className="d-flex flex-column gspace-2 animate-box animated fast animate__animated" data-animate="animate__fadeInLeft">
                  <div className="sub-heading">
                    <i className="fa-regular fa-circle-dot"></i>
                    <span>Happening Now</span>
                  </div>
                  <h2 className="title-heading">Latest Deals &amp; Events Around Pepperdine Campus</h2>
                </div>
              </div>
              <div className="col col-xl-4">
                <div className="d-flex flex-column gspace-2 justify-content-end h-100 " data-gsap="fade-right">
                  <p>New deals, limited-time offers, and campus events updated weekly for Pepperdine Waves.</p>
                  <div className="link-wrapper">
                    <Link href="/happening">View All Deals</Link>
                    <i className="fa-solid fa-circle-arrow-right"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="row row-cols-md-2 row-cols-1 grid-spacer-3">
              {[
                { date: 'Apr 18, 2025', cat: 'Event', title: 'Pepperdine Spring Block Party Night', desc: 'The Movement is partnering with local venues to throw the biggest student night of the semester. Exclusive entry deals for Waves.', img: 'https://images.unsplash.com/photo-1688602082765-4619f9b6f844?auto=format&fit=crop&w=600&q=80' },
                { date: 'Ends Apr 30', cat: 'Deal', title: "Wave's Pizza — Finals Week 30% Off", desc: "Fuel your study sessions during finals week with the best pizza near campus. Show your Movement pass at the counter.", img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80' },
              ].map(blog => (
                <div className="col" key={blog.title}>
                  <div className="card card-blog " data-gsap="fade-up">
                    <div className="blog-image">
                      <img src={blog.img} alt={blog.title} className="img-fluid" />
                    </div>
                    <div className="card-body">
                      <div className="d-flex flex-row gspace-2">
                        <div className="d-flex flex-row gspace-1 align-items-center">
                          <i className="fa-solid fa-calendar accent-color"></i>
                          <span className="meta-data">{blog.date}</span>
                        </div>
                        <div className="d-flex flex-row gspace-1 align-items-center">
                          <i className="fa-solid fa-folder accent-color"></i>
                          <span className="meta-data">{blog.cat}</span>
                        </div>
                      </div>
                      <Link href="/happening" className="blog-link">{blog.title}</Link>
                      <p>{blog.desc}</p>
                      <Link href="/happening" className="read-more">View Deal</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
