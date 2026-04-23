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
    { flag: '🇺🇸', name: 'Los Angeles, USA' },
    { flag: '🇱🇰', name: 'Sri Lanka' },
    { flag: '🇬🇭', name: 'Ghana' },
    { flag: '🇺🇬', name: 'Uganda' },
    { flag: '🇵🇬', name: 'Papua New Guinea' },
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
              <div className="image-container expertise-img" style={{ borderRadius: 24, overflow: 'hidden' }}>
                <img
                  src="https://images.squarespace-cdn.com/content/v1/644853f99f27b117805f75cb/723ec9b9-685e-41e2-9ebf-e3a548e389ff/tempImagejkc33M.jpg"
                  alt="Change the Cycle Inc. Team"
                  className="img-fluid"
                  data-gsap="fade-up"
                />
                <div className="expertise-layout">
                  <div className="d-flex flex-column">
                    <div className="card-expertise-wrapper">
                      <div className="card card-expertise" data-gsap="fade-up">
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
              <div className="sub-heading" data-gsap="fade-right">
                <i className="fa-regular fa-circle-dot"></i>
                <span>About Change the Cycle Inc.</span>
              </div>
              <img 
                src="https://images.squarespace-cdn.com/content/v1/644853f99f27b117805f75cb/f09f5b8d-fb8b-44eb-aa03-fef6491bc674/CTC+Primary+Logo.png?format=1500w" 
                alt="Change the Cycle Logo" 
                style={{ height: 70, marginBottom: 24, display: 'block' }} 
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
      <div className="section">
        <div className="hero-container">
          <div className="d-flex justify-content-center" data-gsap="fade-up">
            <div style={{
              display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center',
            }}>
              {countries.map(c => (
                <div key={c.name} className="card" style={{
                  padding: '20px 28px',
                  borderRadius: 16,
                  display: 'flex', alignItems: 'center', gap: 12,
                  background: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(139,18,223,0.04)',
                  border: `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(139,18,223,0.1)'}`,
                }}>
                  <span style={{ fontSize: '1.5rem' }}>{c.flag}</span>
                  <span style={{ fontWeight: 600 }}>{c.name}</span>
                </div>
              ))}
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
