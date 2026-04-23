'use client';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { PageBanner, GuideBand } from '@/components/PageComponents';
import { useTheme } from '@/components/ThemeProvider';

export default function CommunityPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const ways = [
    { icon: '💰', title: 'Donate', desc: 'Contribute directly to fund STEM scholarships and career programs for underserved girls.' },
    { icon: '🤝', title: 'Volunteer', desc: 'Offer your time — mentor, tutor, or help organize community events.' },
    { icon: '🎉', title: 'Attend a Fundraiser', desc: 'Join local fundraiser events at Malibu merchants. Every dollar supports education.' },
    { icon: '📱', title: 'Share on Social', desc: 'Amplify the mission by sharing with your Pepperdine community.' },
  ];

  const countries = [
    { flag: '🇺🇸', name: 'Los Angeles, USA', desc: 'HQ & Local STEM Programs' },
    { flag: '🇱🇰', name: 'Sri Lanka', desc: 'Educational Access Initiatives' },
    { flag: '🇬🇭', name: 'Ghana', desc: 'Girls IT & Tech Education' },
    { flag: '🇺🇬', name: 'Uganda', desc: 'Career Placement Support' },
    { flag: '🇵🇬', name: 'Papua New Guinea', desc: 'Sustainable Independence' },
  ];

  return (
    <>
      <Navbar />
      <PageBanner title="Community Impact" breadcrumb="Community" />

      {/* ─── Hero: More Than Deals ─── */}
      <div className="section">
        <div className="hero-container">
          <div className="d-flex flex-column justify-content-center text-center gspace-5">
            <div className="d-flex flex-column justify-content-center text-center gspace-2" data-gsap="fade-up">
              <div className="sub-heading align-self-center">
                <i className="fa-regular fa-circle-dot"></i>
                <span>The Movement x Change the Cycle</span>
              </div>
              <h2 className="title-heading heading-container heading-container-medium">
                The Movement is More Than Deals
              </h2>
              <p style={{ maxWidth: 720, margin: '0 auto', lineHeight: 1.8 }}>
                While students save on food, fitness, and fun — The Movement channels community energy toward something bigger. We partner with Change the Cycle Inc. to empower underserved girls and young women worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ─── About Change the Cycle ─── */}
      <div className="section">
        <div className="hero-container">
          <div className="d-flex flex-column flex-xl-row gspace-5">
            {/* Image */}
            <div className="expertise-img-layout">
              <div style={{ borderRadius: 24, overflow: 'hidden', height: 'auto', position: 'relative' }}>
                <img
                  src="https://images.squarespace-cdn.com/content/v1/644853f99f27b117805f75cb/723ec9b9-685e-41e2-9ebf-e3a548e389ff/tempImagejkc33M.jpg"
                  alt="Change the Cycle Inc. Team"
                  style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }}
                  data-gsap="fade-up"
                />
                <div className="expertise-layout" style={{ position: 'relative', marginTop: 24 }}>
                  <div className="d-flex flex-column" style={{ width: '100%' }}>
                    <div className="card-expertise-wrapper" style={{ padding: 0 }}>
                      <div className="card card-expertise" data-gsap="fade-up" style={{ width: '100%' }}>
                        <h4>Founded 2020 — Calabasas, CA</h4>
                        <p>Right next door to Pepperdine — empowering girls through education worldwide.</p>
                        <div className="d-flex align-items-center flex-row gspace-2 expertise-link">
                          <a href="https://www.changethecycleinc.com/" target="_blank" rel="noopener noreferrer">Visit Their Website</a>
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
              <img 
                src="https://images.squarespace-cdn.com/content/v1/644853f99f27b117805f75cb/f09f5b8d-fb8b-44eb-aa03-fef6491bc674/CTC+Primary+Logo.png?format=1500w" 
                alt="Change the Cycle Logo" 
                style={{ 
                  maxWidth: '320px',
                  width: '100%',
                  height: 'auto', 
                  marginBottom: 32, 
                  display: 'block',
                  filter: isDark ? 'brightness(0) invert(1)' : 'none'
                }} 
                data-gsap="fade-right" 
              />
              <h2 className="title-heading" data-gsap="fade-right">
                Empowering Girls Through STEM Education
              </h2>
              <p>Change the Cycle Inc. is a Calabasas-based nonprofit empowering underrepresented girls and young women worldwide — from educational access to sustainable employment.</p>
              <p>Their focus: STEM education, scholarships, job placement, and financial assistance across LA, Sri Lanka, Ghana, Uganda, and Papua New Guinea.</p>
              <div className="d-flex flex-column flex-md-row gspace-2">
                <div className="expertise-list">
                  <h5>Key Programs</h5>
                  <ul className="check-list">
                    <li><a href="https://www.changethecycleinc.com/" target="_blank" rel="noopener noreferrer">Code in Pink — Girls IT Education</a></li>
                    <li><a href="https://www.changethecycleinc.com/" target="_blank" rel="noopener noreferrer">STEM Scholarships</a></li>
                    <li><a href="https://www.changethecycleinc.com/" target="_blank" rel="noopener noreferrer">Career Placement Support</a></li>
                    <li><a href="https://www.changethecycleinc.com/" target="_blank" rel="noopener noreferrer">Financial Assistance Programs</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Countries Served ─── */}
      <div className="section" style={{ position: 'relative' }}>
        <div className="hero-container">
          <div className="d-flex flex-column justify-content-center text-center gspace-5">
            <div className="d-flex flex-column gspace-2" data-gsap="fade-up">
              <div className="sub-heading align-self-center">
                <i className="fa-regular fa-circle-dot"></i>
                <span>Global Reach</span>
              </div>
              <h2 className="title-heading heading-container heading-container-medium">
                Empowering Women Worldwide
              </h2>
            </div>
            
            <div className="row row-cols-xl-5 row-cols-md-3 row-cols-2 grid-spacer-2 justify-content-center">
              {countries.map((c, i) => (
                <div className="col" key={c.name} data-gsap="fade-up" style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className="card h-100" style={{
                    padding: '32px 24px',
                    borderRadius: 24,
                    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16,
                    background: isDark ? 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)' : 'linear-gradient(145deg, rgba(139,18,223,0.05) 0%, rgba(139,18,223,0.01) 100%)',
                    border: `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(139,18,223,0.1)'}`,
                    boxShadow: isDark ? '0 10px 30px rgba(0,0,0,0.2)' : '0 10px 30px rgba(139,18,223,0.05)',
                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    cursor: 'default'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                    e.currentTarget.style.boxShadow = isDark ? '0 20px 40px rgba(139,18,223,0.2)' : '0 20px 40px rgba(139,18,223,0.15)';
                    e.currentTarget.style.borderColor = isDark ? 'rgba(255,255,255,0.15)' : 'rgba(139,18,223,0.25)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = isDark ? '0 10px 30px rgba(0,0,0,0.2)' : '0 10px 30px rgba(139,18,223,0.05)';
                    e.currentTarget.style.borderColor = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(139,18,223,0.1)';
                  }}
                  >
                    <div style={{
                      fontSize: '3.5rem', 
                      lineHeight: 1,
                      filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.15))'
                    }}>
                      {c.flag}
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <span style={{ fontWeight: 700, fontSize: '1.1rem', display: 'block', marginBottom: 4 }}>{c.name}</span>
                      <span style={{ fontSize: '0.85rem', opacity: 0.7 }}>{c.desc}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ─── Video Placeholders ─── */}
      <div className="section" style={{ paddingBottom: 0 }}>
        <div className="hero-container">
          <div className="row row-cols-xl-2 row-cols-1 grid-spacer-5">
            <div className="col">
              <div className="card" style={{ padding: 24, borderRadius: 24, border: '1px solid rgba(139,18,223,0.15)' }}>
                <h4 style={{ marginBottom: 16 }}>Mission in Action</h4>
                <div style={{ aspectRatio: '16/9', background: 'rgba(0,0,0,0.05)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ opacity: 0.5 }}>[YouTube Video Placeholder 1]</span>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" style={{ padding: 24, borderRadius: 24, border: '1px solid rgba(139,18,223,0.15)' }}>
                <h4 style={{ marginBottom: 16 }}>Students Making a Difference</h4>
                <div style={{ aspectRatio: '16/9', background: 'rgba(0,0,0,0.05)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ opacity: 0.5 }}>[YouTube Video Placeholder 2]</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── How Students Can Help ─── */}
      <div className="section">
        <div className="hero-container">
          <div className="d-flex flex-column justify-content-center text-center gspace-5">
            <div className="d-flex flex-column gspace-2" data-gsap="fade-up">
              <div className="sub-heading align-self-center">
                <i className="fa-regular fa-circle-dot"></i>
                <span>Get Involved</span>
              </div>
              <h2 className="title-heading heading-container heading-container-medium">
                How Pepperdine Students Can Help
              </h2>
            </div>
            <div className="card-service-wrapper">
              <div className="row row-cols-xl-4 row-cols-md-2 row-cols-1 grid-spacer-2">
                {ways.map((w, i) => (
                  <div className="col" key={w.title}>
                    <div className={`card card-service h-100 d-flex flex-column animate-box animated animate__animated ${i % 2 === 0 ? 'slow' : 'fast'}`} data-animate="animate__fadeInUp">
                      <div style={{ fontSize: '2.5rem', marginBottom: 16 }}>{w.icon}</div>
                      <div className="service-title"><h4>{w.title}</h4></div>
                      <p>{w.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Upcoming Fundraiser Events CTA ─── */}
      <div className="section">
        <div className="hero-container">
          <div className="card" style={{
            padding: '56px 48px',
            borderRadius: 28,
            background: 'linear-gradient(135deg, rgba(255,98,0,0.08) 0%, rgba(139,18,223,0.12) 100%)',
            border: '1px solid rgba(139,18,223,0.2)',
            backdropFilter: 'blur(20px)',
            textAlign: 'center',
          }}>
            <h3 className="title-heading" style={{ marginBottom: 16 }}>Upcoming Fundraiser Events</h3>
            <p style={{ maxWidth: 600, margin: '0 auto 32px', lineHeight: 1.8 }}>
              Keep an eye on our Happening page for upcoming fundraiser nights at local Malibu businesses. Your attendance directly supports STEM education for girls who need it most.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/happening" className="btn btn-accent">
                <div className="btn-title"><span>View Upcoming Events</span></div>
                <div className="icon-circle"><i className="fa-solid fa-arrow-right"></i></div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <GuideBand
        title="Merchants: Host a Fundraiser Night!"
        desc="Partner with The Movement and Change the Cycle Inc. to host a student fundraiser at your Malibu business. Get featured on our platform and make a real difference."
        linkLabel="Contact Us About Hosting"
        linkHref="/merchants#contact"
      />

      {/* ─── External Link ─── */}
      <div className="section">
        <div className="hero-container">
          <div style={{ textAlign: 'center' }}>
            <p style={{ marginBottom: 20 }}>Learn more about Change the Cycle Inc. and their mission:</p>
            <a href="https://www.changethecycleinc.com/" target="_blank" rel="noopener noreferrer" className="btn btn-accent">
              <div className="btn-title"><span>Visit changethecycleinc.com</span></div>
              <div className="icon-circle"><i className="fa-solid fa-arrow-up-right-from-square"></i></div>
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
