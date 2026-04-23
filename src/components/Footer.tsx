'use client';
import Link from 'next/link';
import { useTheme } from './ThemeProvider';

export default function Footer() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const bg = isDark ? '#08001A' : '#eeeef8';
  const textPrimary = isDark ? '#fff' : '#0f0f1a';
  const textMuted = isDark ? '#9CA3AF' : '#6B7280';
  const textSub = isDark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.6)';
  const border = isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.1)';
  const inputBorder = isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)';
  const inputBg = isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)';
  const iconBorder = isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.12)';
  const iconColor = isDark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.55)';
  const watermarkColor = isDark
    ? 'linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 100%)'
    : 'linear-gradient(180deg, rgba(0,0,0,0.05) 0%, transparent 100%)';

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/pepperdine', label: 'Pepperdine' },
    { href: '/merchants', label: 'Merchants' },
    { href: '/students', label: 'Students' },
  ];

  const involvementLinks = [
    { href: '/merchants', label: 'List Your Business' },
    { href: '/students', label: 'Student Registration' },
    { href: '/merchants', label: 'Schedule a Call' },
    { href: '/merchants', label: 'Partner With Us' },
  ];

  const legalLinks = [
    { href: '#', label: 'Terms of Service' },
    { href: '#', label: 'Privacy Policy' },
    { href: '#', label: 'Cookie Policy' },
    { href: '#', label: 'Contact Us' },
  ];

  const socials = [
    { icon: 'fa-instagram', href: 'https://instagram.com' },
    { icon: 'fa-x-twitter', href: 'https://twitter.com' },
    { icon: 'fa-facebook', href: 'https://facebook.com' },
    { icon: 'fa-linkedin', href: 'https://linkedin.com' },
  ];

  return (
    <footer style={{ background: bg, position: 'relative', overflow: 'hidden', paddingTop: '60px', transition: 'background 0.3s ease' }}>

      {/* Subscribe pill bar */}
      <div style={{ maxWidth: 760, margin: '0 auto 56px', padding: '0 24px' }}>
        <div style={{
          display: 'flex', alignItems: 'center',
          border: `1px solid ${inputBorder}`, borderRadius: 999,
          padding: '6px 6px 6px 20px',
          background: inputBg, backdropFilter: 'blur(10px)',
        }}>
          <i className="fa-regular fa-envelope" style={{ color: iconColor, fontSize: '1rem', marginRight: 12, flexShrink: 0 }}></i>
          <input
            type="email"
            placeholder="Enter your email to stay updated..."
            style={{ flex: 1, background: 'none', border: 'none', outline: 'none', color: textPrimary, fontSize: '0.95rem', fontFamily: 'inherit' }}
          />
          <button style={{
            background: 'linear-gradient(135deg, #FF6200 0%, #8B12DF 100%)',
            border: 'none', borderRadius: 999, color: '#fff',
            fontWeight: 700, fontSize: '0.9rem', padding: '10px 28px',
            cursor: 'pointer', whiteSpace: 'nowrap',
            boxShadow: '0 4px 20px rgba(139,18,223,0.35)', flexShrink: 0,
          }}>
            Subscribe
          </button>
        </div>
      </div>

      {/* 4-column grid */}
      <div className="footer-grid" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '40px', position: 'relative', zIndex: 2 }}>

        {/* Brand */}
        <div>
          <div style={{
            fontWeight: 800, fontSize: '1.3rem', letterSpacing: '-0.02em', marginBottom: 16,
            background: 'linear-gradient(135deg, #FF6200 0%, #FF1045 30%, #E0106E 60%, #8B12DF 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>
            The Movement
          </div>
          <p style={{ color: textMuted, fontSize: '0.92rem', lineHeight: 1.75, maxWidth: 280 }}>
            Connecting Pepperdine students with exclusive local deals in Malibu — empowering students and helping businesses grow.
          </p>
          <div style={{ display: 'flex', gap: 14, marginTop: 24 }}>
            {socials.map(({ icon, href }) => (
              <a key={icon} href={href} target="_blank" rel="noreferrer" style={{
                width: 36, height: 36, borderRadius: '50%',
                border: `1px solid ${iconBorder}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: iconColor, fontSize: '0.85rem', textDecoration: 'none',
              }}>
                <i className={`fa-brands ${icon}`}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h6 style={{ color: textPrimary, fontWeight: 700, fontSize: '0.95rem', marginBottom: 20, letterSpacing: '0.03em', textTransform: 'uppercase' }}>Navigation</h6>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} style={{ color: textMuted, fontSize: '0.9rem', textDecoration: 'none' }}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Get Involved */}
        <div>
          <h6 style={{ color: textPrimary, fontWeight: 700, fontSize: '0.95rem', marginBottom: 20, letterSpacing: '0.03em', textTransform: 'uppercase' }}>Get Involved</h6>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {involvementLinks.map(({ href, label }) => (
              <li key={label}>
                <Link href={href} style={{ color: textMuted, fontSize: '0.9rem', textDecoration: 'none' }}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h6 style={{ color: textPrimary, fontWeight: 700, fontSize: '0.95rem', marginBottom: 20, letterSpacing: '0.03em', textTransform: 'uppercase' }}>Legal</h6>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {legalLinks.map(({ href, label }) => (
              <li key={label}>
                <Link href={href} style={{ color: textMuted, fontSize: '0.9rem', textDecoration: 'none' }}>{label}</Link>
              </li>
            ))}
          </ul>
          <div style={{ marginTop: 24 }}>
            <p style={{ color: textSub, fontSize: '0.85rem', marginBottom: 4 }}>Contact</p>
            <a href="mailto:chamil.hettiarachchi@sales.movement.college" style={{ color: textMuted, fontSize: '0.85rem', textDecoration: 'none' }}>chamil.hettiarachchi@sales.movement.college</a>
            <p style={{ color: textMuted, fontSize: '0.85rem' }}>Malibu, CA</p>
          </div>
        </div>

      </div>

      {/* Divider + Copyright */}
      <div style={{ maxWidth: 1200, margin: '48px auto 0', padding: '0 32px' }}>
        <div style={{
          borderTop: `1px solid ${border}`, paddingTop: 24, paddingBottom: 32,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          position: 'relative', zIndex: 2,
        }}>
          <span style={{ color: textSub, fontSize: '0.85rem' }}>
            © {new Date().getFullYear()} The Movement Pepperdine. All Rights Reserved.
          </span>
          <div style={{ display: 'flex', gap: 20 }}>
            <a href="#" style={{ color: textSub, fontSize: '0.85rem', textDecoration: 'none' }}>Privacy Policy</a>
            <a href="#" style={{ color: textSub, fontSize: '0.85rem', textDecoration: 'none' }}>Terms</a>
          </div>
        </div>
      </div>

      {/* Watermark */}
      <div style={{
        position: 'absolute', bottom: -20, left: '50%', transform: 'translateX(-50%)',
        fontSize: 'clamp(60px, 12vw, 160px)', fontWeight: 900, letterSpacing: '-0.03em',
        userSelect: 'none', pointerEvents: 'none', whiteSpace: 'nowrap',
        background: watermarkColor,
        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
        zIndex: 1,
      }}>
        MOVEMENT
      </div>

    </footer>
  );
}
