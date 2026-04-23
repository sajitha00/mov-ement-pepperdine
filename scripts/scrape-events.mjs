import { chromium } from 'playwright';
import fs from 'fs/promises';
import path from 'path';

const EVENTBRITE_URL = 'https://www.eventbrite.com/d/ca--malibu/events/?q=pepperdine';
const DATA_PATH = path.join(process.cwd(), 'src/data/pepperdine-events.json');

async function scrape() {
  console.log('🚀 Starting Eventbrite scraper (Playwright)...');
  
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
    viewport: { width: 1920, height: 1080 }
  });
  const page = await context.newPage();

  console.log(`🌐 Navigating to ${EVENTBRITE_URL}...`);
  try {
    await page.goto(EVENTBRITE_URL, { waitUntil: 'networkidle', timeout: 60000 });
  } catch (error) {
    console.error('⚠️ Could not fully load the page, continuing anyway...');
  }

  console.log('🔍 Extracting events...');
  
  const events = await page.evaluate(() => {
    const eventCards = Array.from(document.querySelectorAll('a[href*="/e/"]'));
    const uniqueLinks = new Set();
    const results = [];

    function categorize(name) {
      const lower = name.toLowerCase();
      if (lower.includes('music') || lower.includes('concert') || lower.includes('acoustic') || lower.includes('dj')) return 'Music';
      if (lower.includes('food') || lower.includes('drink') || lower.includes('dinner') || lower.includes('brunch')) return 'Food & Drink';
      if (lower.includes('sport') || lower.includes('fit') || lower.includes('run') || lower.includes('yoga')) return 'Sports';
      if (lower.includes('nightlife') || lower.includes('club') || lower.includes('party') || lower.includes('bar')) return 'Nightlife';
      if (lower.includes('fundrais') || lower.includes('charit')) return 'Fundraisers';
      return 'Community';
    }

    eventCards.forEach(card => {
      const url = card.href;
      if (uniqueLinks.has(url)) return;

      const container = card.closest('section') || card.parentElement;
      const titleEl = container?.querySelector('h3, h2, [data-testid="event-card-title"]');
      const dateEl = container?.querySelector('p, [data-testid="event-card-date"]');
      const imgEl = container?.querySelector('img');

      const title = titleEl ? titleEl.textContent.trim() : null;
      if (!title || title.length < 5) return;

      const dateStr = dateEl ? dateEl.textContent.trim() : 'Upcoming';
      let dateSort = '2026-12-31';
      
      const currentYear = new Date().getFullYear();
      const monthMap = { jan:'01', feb:'02', mar:'03', apr:'04', may:'05', jun:'06', jul:'07', aug:'08', sep:'09', oct:'10', nov:'11', dec:'12' };
      const dateLower = dateStr.toLowerCase();
      
      for (const [month, num] of Object.entries(monthMap)) {
        if (dateLower.includes(month)) {
          const match = dateLower.match(/\\d{1,2}/);
          if (match) {
            const day = match[0].padStart(2, '0');
            dateSort = `${currentYear}-${num}-${day}`;
          }
        }
      }

      let img = imgEl?.src || 'https://images.unsplash.com/photo-1544928147-79a2dbc1f389?auto=format&fit=crop&w=600&q=80';
      
      uniqueLinks.add(url);
      results.push({
        type: 'event',
        cat: categorize(title),
        title: title,
        date: dateStr,
        dateSort: dateSort,
        img: img,
        desc: `Join this ${categorize(title).toLowerCase()} event for the Pepperdine community.`,
        source: 'eventbrite',
        url: url.split('?')[0]
      });
    });

    return results;
  });

  console.log(`✅ Extracted ${events.length} events from Eventbrite!`);

  const finalEvents = events.length > 0 ? events : [
    { type: 'event', cat: 'Community', title: 'Pepperdine Community Event', date: 'TBA', dateSort: '2026-12-31', img: 'https://images.unsplash.com/photo-1544928147-79a2dbc1f389?auto=format&fit=crop&w=600&q=80', desc: 'A local Pepperdine community event.', source: 'eventbrite', url: 'https://eventbrite.com/' }
  ];

  await fs.mkdir(path.dirname(DATA_PATH), { recursive: true });
  await fs.writeFile(DATA_PATH, JSON.stringify(finalEvents, null, 2), 'utf-8');
  
  console.log(`💾 Saved events to ${DATA_PATH}`);

  await browser.close();
}

scrape().catch(console.error);
