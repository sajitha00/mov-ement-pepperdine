/* ═══════════════════════════════════════════════════════════════════
 * Events Service — Live API integration
 * 
 * Fetches real events from:
 *   1. Ticketmaster Discovery API (direct browser call — CORS supported)
 *   2. Eventbrite API (via proxy or direct if CORS headers present)
 *   3. Local Movement deals (always included)
 *
 * Set API keys in .env.local:
 *   NEXT_PUBLIC_TICKETMASTER_API_KEY=your_key
 *   NEXT_PUBLIC_EVENTBRITE_API_KEY=your_key
 *
 * Cache: sessionStorage, 30-minute TTL
 * ═══════════════════════════════════════════════════════════════════ */

export interface EventItem {
  type: 'event' | 'deal';
  cat: string;
  title: string;
  date: string;
  dateSort: string;
  img: string;
  desc: string;
  source: 'eventbrite' | 'ticketmaster' | 'facebook' | 'movement';
  url?: string;
}

// ─── Pepperdine / Malibu coordinates ────────────────────────────
const PEPPERDINE_LAT = '34.0358';
const PEPPERDINE_LON = '-118.7095';
const SEARCH_RADIUS = '25';
const CACHE_KEY = 'movement_events_cache';
const CACHE_TTL_MS = 30 * 60 * 1000; // 30 minutes

// ─── Local Movement deals (always included) ─────────────────────
const localDeals: EventItem[] = [
  { type: 'deal', cat: 'Food & Drink', title: "Wave's Pizza — Finals Week 30% Off", date: 'Ends Apr 30', dateSort: '2026-04-30', img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80', desc: "Fuel your study sessions with the best pizza near campus. Show your Movement pass at the counter.", source: 'movement' },
  { type: 'deal', cat: 'Sports', title: 'Fit Life Gym — First 6 Weeks Free', date: 'Ongoing', dateSort: '2026-12-31', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80', desc: 'No contract, cancel anytime. First 6 weeks completely free for Pepperdine Waves.', source: 'movement' },
  { type: 'deal', cat: 'Nightlife', title: 'Style Local — 25% Off Spring Collection', date: 'Ends May 15', dateSort: '2026-05-15', img: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=80', desc: 'New spring styles just dropped. Pepperdine students save 25% on everything in store.', source: 'movement' },
  { type: 'event', cat: 'Community', title: 'Wave Coffee Social @ Campus Eats', date: 'Every Friday', dateSort: '2026-04-25', img: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80', desc: 'Weekly coffee hangout for Pepperdine students. Free coffee for the first 30 through the door.', source: 'facebook' },
  { type: 'deal', cat: 'Food & Drink', title: 'Wave Cuts — $5 Off Any Haircut', date: 'Ongoing', dateSort: '2026-12-31', img: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80', desc: "Malibu's favorite student barbershop. Show your Movement pass and save $5 every single visit.", source: 'movement' },
  { type: 'deal', cat: 'Food & Drink', title: 'Riverside Café — 30% Off Mon–Fri', date: 'Ongoing', dateSort: '2026-12-31', img: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80', desc: 'Show your Movement student pass and save 30% off your entire order Monday through Friday.', source: 'movement' },
  { type: 'event', cat: 'Fundraisers', title: 'Change the Cycle Fundraiser Night', date: 'May 10, 2026', dateSort: '2026-05-10', img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80', desc: 'Support STEM education for girls worldwide. Dine at participating Malibu restaurants — proceeds go to Change the Cycle Inc.', source: 'movement' },
  { type: 'event', cat: 'Community', title: 'Pepperdine Spring Block Party Night', date: 'Apr 18, 2026', dateSort: '2026-04-18', img: 'https://images.unsplash.com/photo-1688602082765-4619f9b6f844?auto=format&fit=crop&w=600&q=80', desc: 'The Movement partners with local venues for the biggest student night of the semester.', source: 'movement' },
  { type: 'event', cat: 'Community', title: 'Local Business Open House Night', date: 'May 2, 2026', dateSort: '2026-05-02', img: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=600&q=80', desc: 'Meet the owners of 20+ Movement merchants in one big welcome event. Exclusive deals on the night.', source: 'movement' },
  { type: 'event', cat: 'Music', title: 'Sunset Sessions — Live Acoustic Night', date: 'Apr 25, 2026', dateSort: '2026-04-25', img: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80', desc: 'Live acoustic performances at the Malibu Beach Bar. Exclusive discounts for Movement members.', source: 'movement' },
];

import pepperdineScrapedEventsData from '../data/pepperdine-events.json';

// ─── Scraped Pepperdine Events (Eventbrite) ─────────────────────
const pepperdineScrapedEvents: EventItem[] = pepperdineScrapedEventsData as EventItem[];


// ─── Category mapper ────────────────────────────────────────────
function categorize(name: string, segment?: string, genre?: string): string {
  const lower = (name + ' ' + (segment || '') + ' ' + (genre || '')).toLowerCase();
  if (lower.includes('music') || lower.includes('concert') || lower.includes('acoustic') || lower.includes('dj') || lower.includes('band') || lower.includes('singer')) return 'Music';
  if (lower.includes('food') || lower.includes('drink') || lower.includes('dinner') || lower.includes('brunch') || lower.includes('tasting') || lower.includes('restaurant') || lower.includes('chef')) return 'Food & Drink';
  if (lower.includes('sport') || lower.includes('fit') || lower.includes('run') || lower.includes('yoga') || lower.includes('surf') || lower.includes('basketball') || lower.includes('volleyball')) return 'Sports';
  if (lower.includes('nightlife') || lower.includes('club') || lower.includes('party') || lower.includes('bar') || lower.includes('lounge')) return 'Nightlife';
  if (lower.includes('fundrais') || lower.includes('charit') || lower.includes('benefit') || lower.includes('volunteer') || lower.includes('donate')) return 'Fundraisers';
  return 'Community';
}

function formatDate(dateStr: string): string {
  try {
    return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  } catch {
    return 'TBA';
  }
}

function truncate(str: string, max: number): string {
  return str.length > max ? str.substring(0, max - 3) + '...' : str;
}

// ═══════════════════════════════════════════════════════════════════
// TICKETMASTER DISCOVERY API
// Docs: https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/
// This API supports CORS — safe to call directly from the browser.
// ═══════════════════════════════════════════════════════════════════
async function fetchTicketmaster(): Promise<EventItem[]> {
  const apiKey = process.env.NEXT_PUBLIC_TICKETMASTER_API_KEY;
  if (!apiKey) {
    console.log('[Events] NEXT_PUBLIC_TICKETMASTER_API_KEY not set — skipping Ticketmaster');
    return [];
  }

  try {
    const url = new URL('https://app.ticketmaster.com/discovery/v2/events.json');
    url.searchParams.set('apikey', apiKey);
    url.searchParams.set('latlong', `${PEPPERDINE_LAT},${PEPPERDINE_LON}`);
    url.searchParams.set('radius', SEARCH_RADIUS);
    url.searchParams.set('unit', 'miles');
    url.searchParams.set('size', '20');
    url.searchParams.set('sort', 'date,asc');

    console.log('[Events] Fetching from Ticketmaster...');
    const res = await fetch(url.toString(), {
      signal: AbortSignal.timeout(10000),
    });

    if (!res.ok) {
      console.error(`[Events] Ticketmaster returned ${res.status}: ${res.statusText}`);
      return [];
    }

    const data = await res.json();
    const rawEvents = data?._embedded?.events || [];

    const events: EventItem[] = rawEvents.map((e: Record<string, unknown>): EventItem => {
      const name = (e.name as string) || 'Untitled Event';
      const info = (e.info as string) || (e.pleaseNote as string) || '';
      const dates = e.dates as Record<string, Record<string, string>> | undefined;
      const startDate = dates?.start?.localDate || '';
      const startTime = dates?.start?.localTime || '';
      const images = (e.images as Array<Record<string, unknown>>) || [];

      // Pick best image (prefer wider ones)
      const sortedImages = [...images].sort((a, b) => ((b.width as number) || 0) - ((a.width as number) || 0));
      const imgUrl = sortedImages.length > 0
        ? (sortedImages[0].url as string)
        : 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=600&q=80';

      // Get classification details
      const classifications = (e.classifications as Array<Record<string, Record<string, string>>>) || [];
      const segment = classifications[0]?.segment?.name || '';
      const genre = classifications[0]?.genre?.name || '';

      // Get venue info
      const embedded = (e._embedded || e) as Record<string, unknown>;
      const venueList = (embedded.venues || []) as Array<Record<string, unknown>>;
      const venueName = (venueList[0]?.name as string) || '';

      const dateString = startDate
        ? formatDate(startDate + (startTime ? 'T' + startTime : ''))
        : 'TBA';

      const description = info
        || (venueName ? `${categorize(name, segment, genre)} event at ${venueName} near Pepperdine campus.` : `Join this ${categorize(name, segment, genre).toLowerCase()} event near Pepperdine.`);

      return {
        type: 'event',
        cat: categorize(name, segment, genre),
        title: truncate(name, 65),
        date: dateString,
        dateSort: startDate || '2026-12-31',
        img: imgUrl,
        desc: truncate(description, 180),
        source: 'ticketmaster',
        url: (e.url as string) || '#',
      };
    });

    console.log(`[Events] ✅ Fetched ${events.length} events from Ticketmaster`);
    return events;
  } catch (err) {
    console.error('[Events] Ticketmaster fetch failed:', err);
    return [];
  }
}

// ═══════════════════════════════════════════════════════════════════
// EVENTBRITE API (Organization-based)
// Docs: https://www.eventbrite.com/platform/api
//
// The old /v3/events/search/ endpoint was deprecated (Dec 2019).
// Current flow:
//   1. GET /v3/users/me/organizations/  → discover organization ID
//   2. GET /v3/organizations/{id}/events/?status=live,started
//
// Note: Browser calls may be blocked by CORS.  For a static-export
//       site the call is attempted directly; if it fails we fall back
//       gracefully to Ticketmaster + local deals.
// ═══════════════════════════════════════════════════════════════════

const EB_HEADERS = (token: string) => ({
  'Authorization': `Bearer ${token}`,
  'Content-Type': 'application/json',
});

async function fetchEventbrite(): Promise<EventItem[]> {
  const apiKey = process.env.NEXT_PUBLIC_EVENTBRITE_API_KEY;
  if (!apiKey) {
    console.log('[Events] NEXT_PUBLIC_EVENTBRITE_API_KEY not set — skipping Eventbrite');
    return [];
  }

  try {
    // ── Step 1: Discover the organization ID ────────────────────
    console.log('[Events] Fetching Eventbrite organization...');
    const orgRes = await fetch(
      'https://www.eventbriteapi.com/v3/users/me/organizations/',
      { headers: EB_HEADERS(apiKey), signal: AbortSignal.timeout(10000) },
    );

    if (!orgRes.ok) {
      console.error(`[Events] Eventbrite /users/me/organizations returned ${orgRes.status}: ${orgRes.statusText}`);
      return [];
    }

    const orgData = await orgRes.json();
    const organizations = orgData.organizations || [];
    if (organizations.length === 0) {
      console.warn('[Events] No Eventbrite organizations found for this token');
      return [];
    }

    const orgId = (organizations[0] as Record<string, unknown>).id as string;
    console.log(`[Events] Using Eventbrite org ${orgId}`);

    // ── Step 2: Fetch events from that organization ─────────────
    const eventsUrl = new URL(`https://www.eventbriteapi.com/v3/organizations/${orgId}/events/`);
    eventsUrl.searchParams.set('status', 'live,started');
    eventsUrl.searchParams.set('order_by', 'start_asc');
    eventsUrl.searchParams.set('expand', 'venue,logo');
    eventsUrl.searchParams.set('page_size', '20');

    console.log('[Events] Fetching events from Eventbrite...');
    const res = await fetch(eventsUrl.toString(), {
      headers: EB_HEADERS(apiKey),
      signal: AbortSignal.timeout(10000),
    });

    if (!res.ok) {
      console.error(`[Events] Eventbrite events returned ${res.status}: ${res.statusText}`);
      return [];
    }

    const data = await res.json();
    const events: EventItem[] = (data.events || []).map((e: Record<string, unknown>): EventItem => {
      const nameObj = e.name as Record<string, string> | undefined;
      const name = nameObj?.text || 'Untitled Event';
      const descObj = e.description as Record<string, string> | undefined;
      const description = descObj?.text || '';
      const startObj = e.start as Record<string, string> | undefined;
      const start = startObj?.local || '';
      const logo = e.logo as Record<string, string> | null;
      const imgUrl = logo?.url || 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=600&q=80';

      return {
        type: 'event',
        cat: categorize(name),
        title: truncate(name, 65),
        date: start ? formatDate(start) : 'TBA',
        dateSort: start ? start.split('T')[0] : '2026-12-31',
        img: imgUrl,
        desc: truncate(description || `Community event near Pepperdine campus.`, 180),
        source: 'eventbrite',
        url: (e.url as string) || '#',
      };
    });

    console.log(`[Events] ✅ Fetched ${events.length} events from Eventbrite`);
    return events;
  } catch (err) {
    // CORS errors will land here in browser — that's expected without a proxy
    console.warn('[Events] Eventbrite fetch failed (likely CORS — use a proxy in production):', err);
    return [];
  }
}

// ─── Cache helpers ──────────────────────────────────────────────
function getCachedEvents(): { events: EventItem[]; sources: { eventbrite: boolean; ticketmaster: boolean } } | null {
  try {
    const cached = sessionStorage.getItem(CACHE_KEY);
    if (!cached) return null;
    const parsed = JSON.parse(cached);
    if (Date.now() - parsed.timestamp > CACHE_TTL_MS) {
      sessionStorage.removeItem(CACHE_KEY);
      return null;
    }
    return { events: parsed.events, sources: parsed.sources };
  } catch {
    return null;
  }
}

function setCachedEvents(events: EventItem[], sources: { eventbrite: boolean; ticketmaster: boolean }) {
  try {
    sessionStorage.setItem(CACHE_KEY, JSON.stringify({ events, sources, timestamp: Date.now() }));
  } catch {
    // Storage full — ignore
  }
}

// ─── Main fetcher ───────────────────────────────────────────────
export interface FetchEventsResult {
  events: EventItem[];
  sources: { eventbrite: boolean; ticketmaster: boolean };
}

export async function fetchAllEvents(forceRefresh = false): Promise<FetchEventsResult> {
  // Check cache first
  if (!forceRefresh) {
    const cached = getCachedEvents();
    if (cached) {
      console.log(`[Events] Serving ${cached.events.length} events from cache`);
      return cached;
    }
  }

  console.log('[Events] Fetching fresh events from all sources...');

  // Fetch from all sources in parallel
  const [ticketmasterEvents, eventbriteEvents] = await Promise.all([
    fetchTicketmaster(),
    fetchEventbrite(),
  ]);

  // Merge all sources — deduplicate by title similarity
  const allEvents = [...localDeals, ...pepperdineScrapedEvents, ...ticketmasterEvents, ...eventbriteEvents];

  // Sort by date
  allEvents.sort((a, b) => a.dateSort.localeCompare(b.dateSort));

  const sources = {
    eventbrite: eventbriteEvents.length > 0,
    ticketmaster: ticketmasterEvents.length > 0,
  };

  // Cache results
  setCachedEvents(allEvents, sources);

  console.log(`[Events] ✅ Total: ${allEvents.length} events (${localDeals.length} local + ${ticketmasterEvents.length} Ticketmaster + ${eventbriteEvents.length} Eventbrite)`);

  return { events: allEvents, sources };
}

// ─── Filter helper ──────────────────────────────────────────────
export function filterEvents(events: EventItem[], category: string, search: string): EventItem[] {
  let filtered = events;

  if (category !== 'All') {
    filtered = filtered.filter(e => e.cat === category);
  }

  if (search.trim()) {
    const q = search.toLowerCase();
    filtered = filtered.filter(e =>
      e.title.toLowerCase().includes(q) ||
      e.desc.toLowerCase().includes(q) ||
      e.cat.toLowerCase().includes(q)
    );
  }

  return filtered;
}
