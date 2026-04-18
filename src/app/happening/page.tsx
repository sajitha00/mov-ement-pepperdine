'use client';
import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { PageBanner, GuideBand } from '@/components/PageComponents';
import { useTheme } from '@/components/ThemeProvider';
import { fetchAllEvents, filterEvents, type EventItem } from '@/lib/events';

const categories = ['All', 'Food & Drink', 'Music', 'Sports', 'Nightlife', 'Community', 'Fundraisers'];

const sourceBadges: Record<string, { label: string; color: string }> = {
  eventbrite: { label: 'Eventbrite', color: '#F05537' },
  ticketmaster: { label: 'Ticketmaster', color: '#026CDF' },
  facebook: { label: 'Facebook Event', color: '#1877F2' },
  movement: { label: 'The Movement', color: '#8B12DF' },
};

export default function HappeningPage() {
  const [category, setCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [allEvents, setAllEvents] = useState<EventItem[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [sources, setSources] = useState<{ eventbrite: boolean; ticketmaster: boolean }>({ eventbrite: false, ticketmaster: false });
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const initialLoad = useRef(true);

  // Fetch events from the events service
  const loadEvents = useCallback(async (forceRefresh = false) => {
    setLoading(true);
    try {
      const result = await fetchAllEvents(forceRefresh);
      setAllEvents(result.events);
      setSources(result.sources);
    } catch (err) {
      console.error('Failed to fetch events:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  // Fetch on mount
  useEffect(() => {
    if (initialLoad.current) {
      initialLoad.current = false;
      loadEvents();
    }
  }, [loadEvents]);

  // Apply filters when category/search/allEvents change (debounced for search)
  useEffect(() => {
    const debounce = setTimeout(() => {
      setFilteredEvents(filterEvents(allEvents, category, search));
    }, search ? 300 : 0);
    return () => clearTimeout(debounce);
  }, [allEvents, category, search]);

  const events = filteredEvents;

  // Active API sources for indicator
  const activeSources = [
    sources.eventbrite && 'Eventbrite',
    sources.ticketmaster && 'Ticketmaster',
    'The Movement',
  ].filter(Boolean);

  return (
    <>
      <Navbar />
      <PageBanner title="What's Happening" breadcrumb="Happening" />

      {/* ─── Filter + grid ─── */}
      <div className="section">
        <div className="hero-container">
          <div className="d-flex flex-column gspace-5">
            {/* Header row */}
            <div className="row row-cols-xl-2 row-cols-1 grid-spacer-5">
              <div className="col col-xl-8">
                <div className="d-flex flex-column gspace-2 animate-box animated fast animate__animated" data-animate="animate__fadeInLeft">
                  <div className="sub-heading">
                    <i className="fa-regular fa-circle-dot"></i>
                    <span>Events, Deals &amp; Things to Do</span>
                  </div>
                  <h2 className="title-heading">What&apos;s Happening Around Campus</h2>
                  <p style={{ margin: 0 }}>Events, deals, and things to do near Pepperdine — updated in real-time from Eventbrite, Ticketmaster, and local merchants.</p>
                </div>
              </div>
              <div className="col col-xl-4">
                <div className="d-flex flex-column gspace-2 justify-content-end h-100 animate-box animated animate__animated" data-animate="animate__fadeInRight">
                  <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                    <Link href="/students" className="btn btn-accent" style={{ borderRadius: 999, fontSize: '0.88rem' }}>
                      <div className="btn-title"><span>Register &amp; Unlock All</span></div>
                      <div className="icon-circle"><i className="fa-solid fa-arrow-right"></i></div>
                    </Link>
                    <Link href="/merchants#contact" className="btn btn-outline" style={{
                      borderRadius: 999, padding: '10px 22px', fontWeight: 600, fontSize: '0.88rem',
                      border: `2px solid ${isDark ? 'rgba(255,255,255,0.2)' : 'rgba(139,18,223,0.3)'}`,
                      display: 'inline-flex', alignItems: 'center', gap: 8,
                    }}>
                      📝 Submit Your Event
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Live source indicator */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap',
              padding: '12px 20px', borderRadius: 14,
              background: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(139,18,223,0.03)',
              border: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}`,
            }}>
              <div style={{
                width: 8, height: 8, borderRadius: '50%',
                background: '#22c55e',
                boxShadow: '0 0 8px rgba(34,197,94,0.6)',
                animation: 'pulse 2s infinite',
              }}></div>
              <span style={{ fontSize: '0.82rem', fontWeight: 600, opacity: 0.7 }}>
                Live from: {activeSources.join(' · ')}
              </span>
              <span style={{ fontSize: '0.75rem', opacity: 0.4, marginLeft: 'auto' }}>
                {events.length} results · Auto-refreshes every 30 min
              </span>
            </div>

            {/* Search bar */}
            <div style={{ position: 'relative', maxWidth: 480 }}>
              <i className="fa-solid fa-magnifying-glass" style={{
                position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)',
                color: isDark ? 'rgba(255,255,255,0.35)' : 'rgba(0,0,0,0.35)', fontSize: '0.9rem',
              }}></i>
              <input
                type="text"
                placeholder="Search events near Pepperdine..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                style={{
                  width: '100%', padding: '14px 18px 14px 44px',
                  background: isDark ? 'rgba(255,255,255,0.06)' : '#fff',
                  border: `1px solid ${isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.12)'}`,
                  borderRadius: 14, color: isDark ? '#fff' : '#0f0f1a',
                  fontSize: '0.95rem', fontFamily: 'inherit', outline: 'none',
                  transition: 'border-color 0.3s',
                }}
                onFocus={e => { e.target.style.borderColor = 'rgba(139,18,223,0.5)'; }}
                onBlur={e => { e.target.style.borderColor = isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.12)'; }}
              />
            </div>

            {/* Category filter tabs */}
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {categories.map(cat => (
                <button key={cat} onClick={() => setCategory(cat)}
                  className={`btn ${category === cat ? 'btn-accent' : 'btn-outline'}`}
                  style={{
                    borderRadius: 999, padding: '8px 20px', fontFamily: 'inherit',
                    fontWeight: 600, fontSize: '0.85rem', cursor: 'pointer',
                    border: category === cat ? 'none' : `2px solid ${isDark ? 'rgba(255,255,255,0.15)' : '#ddd'}`,
                    color: category === cat ? '#fff' : (isDark ? 'rgba(255,255,255,0.7)' : '#555'),
                  }}>
                  {cat}
                </button>
              ))}
            </div>

            {/* Loading state */}
            {loading && (
              <div style={{
                textAlign: 'center', padding: '60px 20px',
              }}>
                <div style={{
                  width: 40, height: 40, borderRadius: '50%',
                  border: '3px solid rgba(139,18,223,0.15)',
                  borderTopColor: '#8B12DF',
                  animation: 'spin 0.8s linear infinite',
                  margin: '0 auto 16px',
                }}></div>
                <p style={{ opacity: 0.6 }}>Fetching events from Eventbrite, Ticketmaster &amp; local merchants...</p>

              </div>
            )}

            {/* Event cards grid */}
            {!loading && events.length > 0 && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 24 }}>
                {events.map(item => {
                  const badge = sourceBadges[item.source] || sourceBadges.movement;
                  return (
                    <div key={`${item.source}-${item.title}`} className="card card-blog animate-box animated animate__animated" data-animate="animate__fadeInUp">
                      <div className="blog-image" style={{ position: 'relative' }}>
                        <img src={item.img} alt={item.title} className="img-fluid" />
                        {/* Source badge */}
                        <div style={{
                          position: 'absolute', top: 12, right: 12,
                          background: badge.color, color: '#fff',
                          padding: '4px 12px', borderRadius: 999,
                          fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.02em',
                          boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                        }}>
                          {badge.label}
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="d-flex flex-row gspace-2">
                          <div className="d-flex flex-row gspace-1 align-items-center">
                            <i className="fa-solid fa-calendar accent-color"></i>
                            <span className="meta-data">{item.date}</span>
                          </div>
                          <div className="d-flex flex-row gspace-1 align-items-center">
                            <i className="fa-solid fa-folder accent-color"></i>
                            <span className="meta-data">{item.cat}</span>
                          </div>
                        </div>
                        {item.url && item.url !== '#' ? (
                          <a href={item.url} target="_blank" rel="noopener noreferrer" className="blog-link">{item.title}</a>
                        ) : (
                          <span className="blog-link">{item.title}</span>
                        )}
                        <p>{item.desc}</p>
                        {item.url && item.url !== '#' ? (
                          <a href={item.url} target="_blank" rel="noopener noreferrer" className="read-more">
                            {item.type === 'deal' ? 'Claim This Deal' : 'Get Tickets / RSVP'}
                          </a>
                        ) : (
                          <Link href="/students" className="read-more">
                            {item.type === 'deal' ? 'Claim This Deal' : 'View Details'}
                          </Link>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Empty state */}
            {!loading && events.length === 0 && (
              <div style={{
                textAlign: 'center', padding: '60px 20px',
                background: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)',
                borderRadius: 20, border: `1px dashed ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
              }}>
                <div style={{ fontSize: '2.5rem', marginBottom: 16 }}>🔍</div>
                <h4 style={{ marginBottom: 8 }}>No events found</h4>
                <p style={{ opacity: 0.6 }}>No events match your current filters. Try a different category or search term.</p>
                <button onClick={() => { setCategory('All'); setSearch(''); }} className="btn btn-accent" style={{ marginTop: 16, borderRadius: 999 }}>
                  <div className="btn-title"><span>Clear Filters</span></div>
                </button>
              </div>
            )}

            {/* Refresh button */}
            {!loading && (
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button onClick={() => loadEvents(true)} style={{
                  padding: '10px 24px', borderRadius: 999,
                  background: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.04)',
                  border: `1px solid ${isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.1)'}`,
                  color: isDark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.6)',
                  fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer',
                  display: 'flex', alignItems: 'center', gap: 8,
                  fontFamily: 'inherit', transition: 'all 0.2s',
                }}>
                  <i className="fa-solid fa-arrows-rotate"></i>
                  Refresh Events
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <GuideBand
        title="Never Miss a Deal or Event!"
        desc="Register free and get notified every time a new deal drops or a campus event is added. Be the first to claim the best offers."
        linkLabel="Register Free"
        linkHref="/students"
      />

      {/* ─── Newsletter ─── */}
      <div className="section">
        <div className="hero-container">
          <div style={{
            maxWidth: 680,
            margin: '0 auto',
            background: isDark
              ? 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(139,18,223,0.08) 100%)'
              : 'linear-gradient(135deg, rgba(139,18,223,0.04) 0%, rgba(224,16,110,0.06) 100%)',
            border: `1px solid ${isDark ? 'rgba(224,16,110,0.2)' : 'rgba(139,18,223,0.15)'}`,
            borderRadius: 28,
            padding: '56px 48px',
            backdropFilter: 'blur(20px)',
            boxShadow: isDark ? '0 24px 80px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.05)' : '0 16px 48px rgba(0,0,0,0.06)',
          }}>
            <div style={{ textAlign: 'center', marginBottom: 36 }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: 'linear-gradient(135deg, rgba(255,98,0,0.15), rgba(224,16,110,0.15))',
                border: '1px solid rgba(224,16,110,0.25)',
                borderRadius: 999, padding: '6px 18px', marginBottom: 20,
                fontSize: '0.85rem', fontWeight: 600, color: '#FF6200',
              }}>
                <i className="fa-solid fa-bell" style={{ fontSize: '0.8rem' }}></i>
                Stay Updated
              </div>
              <h3 style={{
                fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', fontWeight: 800,
                marginBottom: 12, lineHeight: 1.2,
              }}>Stay in the Loop with The Movement</h3>
              <p style={{ color: isDark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.55)', fontSize: '0.95rem', maxWidth: 480, margin: '0 auto', lineHeight: 1.7 }}>
                New deals added every week. Subscribe and get the latest offers delivered straight to your Pepperdine inbox.
              </p>
            </div>
            <form onSubmit={e => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ position: 'relative' }}>
                <i className="fa-solid fa-envelope" style={{
                  position: 'absolute', left: 18, top: '50%', transform: 'translateY(-50%)',
                  color: isDark ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)', fontSize: '0.9rem',
                }}></i>
                <input type="email" placeholder="Enter your Pepperdine email address" required style={{
                  width: '100%', padding: '16px 18px 16px 46px',
                  background: isDark ? 'rgba(255,255,255,0.05)' : '#fff',
                  border: `1px solid ${isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.12)'}`,
                  borderRadius: 14, color: isDark ? '#fff' : '#0f0f1a', fontSize: '0.95rem',
                  outline: 'none', transition: 'border-color 0.3s, box-shadow 0.3s',
                  fontFamily: 'inherit',
                }} onFocus={e => { e.target.style.borderColor = 'rgba(224,16,110,0.5)'; e.target.style.boxShadow = '0 0 20px rgba(224,16,110,0.12)'; }}
                   onBlur={e => { e.target.style.borderColor = isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.12)'; e.target.style.boxShadow = 'none'; }} />
              </div>
              <button type="submit" style={{
                padding: '16px 32px',
                background: 'linear-gradient(135deg, #FF6200 0%, #E0106E 50%, #8B12DF 100%)',
                border: 'none', borderRadius: 14, color: '#fff',
                fontSize: '1rem', fontWeight: 700, fontFamily: 'inherit',
                cursor: 'pointer', transition: 'transform 0.2s, box-shadow 0.2s',
                boxShadow: '0 8px 32px rgba(224,16,110,0.3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
              }}
                onMouseEnter={e => { (e.target as HTMLElement).style.transform = 'translateY(-2px)'; (e.target as HTMLElement).style.boxShadow = '0 12px 40px rgba(224,16,110,0.4)'; }}
                onMouseLeave={e => { (e.target as HTMLElement).style.transform = 'translateY(0)'; (e.target as HTMLElement).style.boxShadow = '0 8px 32px rgba(224,16,110,0.3)'; }}>
                Subscribe
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </form>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 24, color: isDark ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)', fontSize: '0.8rem' }}>
              <i className="fa-solid fa-lock"></i>
              <span>We respect your privacy · Unsubscribe anytime</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
      `}</style>
      <Footer />
    </>
  );
}
