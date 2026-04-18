'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useTheme } from './ThemeProvider';

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggle } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/malibu', label: 'Malibu' },
    { href: '/merchants', label: 'Merchants' },
    { href: '/students', label: 'Students' },
    { href: '/community', label: 'Community' },
  ];

  const navBg = isDark
    ? (scrolled ? 'rgba(10,0,30,0.92)' : 'rgba(10,0,30,0.75)')
    : (scrolled ? 'rgba(245,245,252,0.95)' : 'rgba(245,245,252,0.85)');
  const border = isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.10)';

  return (
    <>
      <div style={{ height: 80 }} />

      <div style={{
        position: 'fixed', top: 16, left: '50%', transform: 'translateX(-50%)',
        zIndex: 1000, width: 'calc(100% - 32px)', maxWidth: 1200,
        transition: 'all 0.3s ease',
      }}>
        {/* ── Main pill ── */}
        <nav style={{
          display: 'flex', flexDirection: 'row', alignItems: 'center',
          justifyContent: 'space-between', flexWrap: 'nowrap',
          height: 60, padding: '0 10px 0 20px', borderRadius: 100,
          background: navBg, backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
          border: `1px solid ${border}`,
          boxShadow: scrolled
            ? (isDark ? '0 8px 40px rgba(0,0,0,0.5)' : '0 8px 32px rgba(0,0,0,0.12)')
            : '0 4px 24px rgba(0,0,0,0.12)',
          transition: 'all 0.3s ease',
        }}>

          {/* Brand */}
          <Link href="/" style={{
            textDecoration: 'none', flexShrink: 0, whiteSpace: 'nowrap',
            fontWeight: 800, fontSize: '1.05rem', letterSpacing: '-0.02em',
            background: 'linear-gradient(135deg,#FF6200 0%,#FF1045 30%,#E0106E 60%,#8B12DF 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>
            The Movement{' '}
            <span className="nav-pepperdine-label" style={{
              WebkitTextFillColor: isDark ? 'rgba(255,255,255,0.45)' : 'rgba(0,0,0,0.4)',
              color: isDark ? 'rgba(255,255,255,0.45)' : 'rgba(0,0,0,0.4)',
            }}>
              Pepperdine
            </span>
          </Link>

          {/* Desktop nav links — hidden on mobile via CSS class */}
          <ul className="nav-desktop-links" style={{
            display: 'flex', flexDirection: 'row', alignItems: 'center', flexWrap: 'nowrap',
            listStyle: 'none', margin: 0, padding: '0 8px', gap: '2px',
            position: 'absolute', left: '50%', transform: 'translateX(-50%)',
          }}>
            {links.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <li key={href} style={{ whiteSpace: 'nowrap' }}>
                  <Link href={href} style={{
                    display: 'inline-block', padding: '7px 14px',
                    fontWeight: active ? 700 : 500, fontSize: '0.88rem',
                    color: active ? (isDark ? '#fff' : '#0f0f1a') : (isDark ? 'rgba(255,255,255,0.68)' : 'rgba(0,0,0,0.6)'),
                    textDecoration: 'none', borderRadius: 50,
                    background: active ? 'linear-gradient(135deg,rgba(255,98,0,0.18) 0%,rgba(139,18,223,0.18) 100%)' : 'transparent',
                    border: active ? '1px solid rgba(255,255,255,0.15)' : '1px solid transparent',
                    transition: 'all 0.2s ease',
                  }}>
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right: toggle + CTA + hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
            {/* Theme toggle */}
            <button onClick={toggle} title={isDark ? 'Light Mode' : 'Dark Mode'} style={{
              width: 38, height: 38, borderRadius: '50%',
              border: `1px solid ${isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)'}`,
              background: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)',
              color: isDark ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.7)',
              cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '0.95rem', transition: 'all 0.2s ease', flexShrink: 0,
            }}>
              {isDark ? '☀️' : '🌙'}
            </button>

            {/* CTA — hidden on very small screens */}
            <Link href="/students" className="nav-cta-btn" style={{
              flexShrink: 0, padding: '9px 20px', borderRadius: '999px',
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              whiteSpace: 'nowrap', fontSize: '0.88rem', fontWeight: 700,
              background: 'linear-gradient(135deg,#FF6200 0%,#8B12DF 100%)',
              color: '#fff', textDecoration: 'none',
              boxShadow: '0 4px 16px rgba(139,18,223,0.35)',
              transition: 'opacity 0.2s ease, box-shadow 0.2s ease',
            }}>
              🎓 Join Free
            </Link>

            {/* Hamburger — only on mobile */}
            <button
              className="nav-hamburger"
              onClick={() => setMobileOpen(o => !o)}
              aria-label="Toggle mobile menu"
              style={{
                display: 'none', // shown via CSS on mobile
                width: 38, height: 38, borderRadius: '50%',
                border: `1px solid ${isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)'}`,
                background: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)',
                color: isDark ? '#fff' : '#0f0f1a',
                cursor: 'pointer', alignItems: 'center', justifyContent: 'center',
                fontSize: '1rem', flexShrink: 0,
              }}
            >
              <i className={`fa-solid ${mobileOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
            </button>
          </div>
        </nav>

        {/* ── Mobile dropdown menu ── */}
        {mobileOpen && (
          <div style={{
            marginTop: 8, borderRadius: 20, overflow: 'hidden',
            background: navBg, backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
            border: `1px solid ${border}`,
            boxShadow: isDark ? '0 16px 48px rgba(0,0,0,0.5)' : '0 16px 40px rgba(0,0,0,0.12)',
            padding: '12px 8px',
          }}>
            {links.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <Link key={href} href={href} style={{
                  display: 'block', padding: '12px 20px',
                  fontWeight: active ? 700 : 500, fontSize: '1rem',
                  color: active ? (isDark ? '#fff' : '#0f0f1a') : (isDark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.65)'),
                  textDecoration: 'none', borderRadius: 12,
                  background: active ? 'linear-gradient(135deg,rgba(255,98,0,0.15) 0%,rgba(139,18,223,0.15) 100%)' : 'transparent',
                }}>
                  {label}
                </Link>
              );
            })}
            <div style={{ borderTop: `1px solid ${border}`, margin: '8px 12px 4px', paddingTop: 12 }}>
              <Link href="/students" style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                padding: '12px 20px', borderRadius: 999, fontWeight: 700, fontSize: '0.95rem',
                background: 'linear-gradient(135deg,#FF6200 0%,#8B12DF 100%)',
                color: '#fff', textDecoration: 'none',
                boxShadow: '0 4px 16px rgba(139,18,223,0.3)',
              }}>
                🎓 Join Free as Student
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
