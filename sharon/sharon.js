/* ============================================================
   מסלולי טיול בשרון · קיץ 2026
   מקור אמת יחיד: מערך TRAILS מניע את הכרטיסים, את סמני המפה
   ואת ווידג'ט מזג האוויר.
   ============================================================ */

'use strict';

/* ----- נתוני המסלולים -----
   coords: קואורדינטות מקורבות לכניסה/חניה (לסמן במפה).
   לניווט בפועל יש כפתורי Waze / Google לפי שם היעד. */
const TRAILS = [
  {
    id: 'alexander',
    name: 'נחל אלכסנדר – גשר הצבים',
    nameEn: 'Alexander Stream – Turtle Bridge',
    lat: 32.398, lon: 34.881,
    area: 'כפר ויתקין / מכמורת',
    paid: false,
    fee: 'כניסה חופשית',
    difficulty: 'קל',
    family: true,
    shade: 'חלקית (לאורך הנחל)',
    length: 'כ-2–4 ק"מ (הלוך־חזור, לבחירה)',
    duration: 'שעה עד שעתיים',
    parking: 'חניון חינם ליד הגשר',
    access: 'מחלף כפר ויתקין מכביש 2, מערבה ואז צפונה לכיוון מכמורת; מעבר על גשר הנחל ופנייה ימינה.',
    transit: 'מוגבלת — מומלץ ברכב פרטי',
    summerNote: 'הצבים הרכים נצפים על גדות הנחל בשעות הבוקר המוקדמות. רוב המסלול חשוף לשמש — צאו מוקדם והביאו מים.',
  },
  {
    id: 'apollonia',
    name: 'גן לאומי אפולוניה (ארסוף)',
    nameEn: 'Apollonia National Park',
    lat: 32.19528, lon: 34.80667,
    area: 'הרצליה פיתוח',
    paid: true,
    fee: 'כ-28 ₪ מבוגר / 14 ₪ ילד (לאימות באתר רט"ג)',
    difficulty: 'קל',
    family: true,
    shade: 'מעטה — צוק חשוף מעל הים',
    length: 'מסלול הקפה קצר',
    duration: 'כשעה עד שעה וחצי',
    parking: 'חניון חינם בכניסה',
    access: 'בקצה הצפוני של הרצליה פיתוח, גישה נוחה ברכב מכביש 2 ומתל אביב.',
    transit: 'אוטובוסים להרצליה פיתוח ואז הליכה',
    summerNote: 'מצודה צלבנית ותצפיות ים על צוק כורכר. האתר חשוף מאוד לשמש — ביקור בבוקר, כובע ומים. שעות הקיץ בדרך כלל 08:00–17:00 (לאימות).',
  },
  {
    id: 'hof-hasharon',
    name: 'גן לאומי חוף השרון',
    nameEn: 'Sharon Beach National Park',
    lat: 32.21, lon: 34.81,
    area: 'בין הרצליה לנתניה (רישפון–וינגייט)',
    paid: false,
    fee: 'כניסה חופשית בשעות היום',
    difficulty: 'קל–בינוני',
    family: true,
    shade: 'מעטה — מצוקים וחולות חשופים',
    length: 'מקטעים לבחירה לאורך החוף',
    duration: 'שעה עד שלוש שעות',
    parking: 'חניון וחורשת איקליפטוס בגבול הדרומי',
    access: 'לאורך החוף בין הרצליה לנתניה. מסלולי "חוף השרון צפון" ו"חוף השרון דרום".',
    transit: 'מוגבלת — מומלץ ברכב פרטי',
    summerNote: 'מצוקי כורכר ושמורת צבאים. שטח פתוח וחשוף — בוקר מוקדם עדיף, עם רוח ים מקררת.',
  },
  {
    id: 'poleg',
    name: 'שמורת נחל פולג',
    nameEn: 'Nahal Poleg Reserve',
    lat: 32.27, lon: 34.85,
    area: 'נתניה דרום',
    paid: false,
    fee: 'השמורה פתוחה (חניית וינגייט בתשלום; חלופה חינם ברמת פולג)',
    difficulty: 'קל',
    family: true,
    shade: 'חלקית ליד הנחל',
    length: 'מסלולים מעגליים קצרים',
    duration: 'שעה עד שעתיים',
    parking: 'חניון מכון וינגייט (בתשלום) או חניית רחוב חינם ברמת פולג (קצה רחוב שייח׳ אופיר)',
    access: 'בדרום נתניה, בין כביש החוף לים.',
    transit: 'אוטובוסים לאזור וינגייט / רמת פולג',
    summerNote: 'מסלולים יורדים לגדת הנחל בין רכסי כורכר, חולות וחוף. צל חלקי ליד המים — מומלץ בבוקר.',
  },
  {
    id: 'ilanot',
    name: 'יער אילנות והארבורטום',
    nameEn: 'Ilanot Forest & Arboretum',
    lat: 32.30, lon: 34.95,
    area: 'כביש 4 הישן (בין צומת דרור לצומת השרון)',
    paid: false,
    fee: 'היער חינם; מרכז המבקרים בתשלום (לאימות בקק"ל)',
    difficulty: 'קל',
    family: true,
    shade: 'גבוהה — יער מוצל',
    length: 'שבילים שטוחים ביער ובגן הבוטני',
    duration: 'שעה עד שעתיים',
    parking: 'חניוני יום חינם של קק"ל (כולל חניה נגישה)',
    access: 'לאורך כביש 4 הישן בין צומת דרור לצומת השרון. כניסה מערבית ליער וכניסה מזרחית לגן הבוטני.',
    transit: 'אוטובוסים בכביש 4',
    summerNote: 'האופציה המוצלת והמומלצת לחום הקיץ: שבילים שטוחים בין עצים, שולחנות פיקניק ומתקני משחק. מסלול האירוסים פורח בינואר–פברואר (לא בקיץ).',
  },
  {
    id: 'netanya-cliff',
    name: 'טיילת מצוק נתניה',
    nameEn: 'Netanya Cliff Promenade',
    lat: 32.332, lon: 34.855,
    area: 'נתניה מרכז',
    paid: false,
    fee: 'כניסה חופשית',
    difficulty: 'קל (סלול ונגיש)',
    family: true,
    shade: 'חלקית — ספסלים ופרגולות',
    length: 'עד כ-13 ק"מ (מקטעים לבחירה)',
    duration: 'לפי הבחירה',
    parking: 'חניוני רחוב ותשלום ליד הטיילת',
    access: 'במרכז נתניה, נקודות כניסה מרובות לאורך המצוק. מעלית/רכבל מהטיילת אל החוף.',
    transit: 'נגיש מאוד — רכבת ישראל (קו החוף) ורשת אוטובוסים',
    summerNote: 'טיילת סלולה עם תצפיות, ספסלים ומתקני כושר. חשופה אך עם רוח ים. השקיעה אידיאלית.',
  },
  {
    id: 'harutzim',
    name: 'שמורת רכס חרוצים (בני ציון)',
    nameEn: 'Harutzim Ridge (Bnei Zion) Reserve',
    lat: 32.21, lon: 34.88,
    area: 'שרון מזרחי (חרוצים / בני ציון)',
    paid: false,
    fee: 'כניסה חופשית',
    difficulty: 'קל',
    family: true,
    shade: 'מעטה — שיחייה נמוכה',
    length: 'שבילים קצרים בשמורה',
    duration: 'כשעה',
    parking: 'חניית רחוב / שוליים ליד השמורה',
    access: 'בשרון המזרחי ליד חרוצים ובני ציון.',
    transit: 'מוגבלת — מומלץ ברכב פרטי',
    summerNote: 'שמורת החמרה (אדמת הסחף) הגדולה ששרדה בשרון. שיא הפריחה באביב; בקיץ שקטה וחמה יותר — בוקר בלבד.',
  },
  {
    id: 'taninim',
    name: 'שמורת נחל תנינים',
    nameEn: 'Nahal Taninim Reserve',
    lat: 32.55, lon: 34.91,
    area: 'קצה צפוני — ליד מעגן מיכאל',
    paid: true,
    fee: 'כ-28 ₪ מבוגר / 14 ₪ ילד (לאימות באתר רט"ג)',
    difficulty: 'קל ונגיש',
    family: true,
    shade: 'מעטה למרות המים',
    length: 'כ-2 ק"מ, רובו נגיש',
    duration: 'כשעה עד שעה וחצי',
    parking: 'חניון מאורגן באתר',
    access: 'מכביש 2 ליד מעגן מיכאל, בין מעגן מיכאל לג׳סר א-זרקא. מעט צפונית לליבת השרון אך בהישג יד.',
    transit: 'מוגבלת — מומלץ ברכב פרטי',
    summerNote: 'סכר רומי, טחנת קמח ואמת מים, מים וציפורים. למרות המים האתר חשוף לשמש — בוקר מוקדם ומים מומלצים. שעות גן לאומי מגודר (לאימות).',
  },
];

/* ----- כלי עזר -----*/
const wazeUrl = (t) => `https://waze.com/ul?ll=${t.lat},${t.lon}&navigate=yes`;
const gmapUrl = (t) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(t.name)}`;

/* ----- רינדור כרטיסי מסלולים -----*/
const cardsContainer = document.getElementById('trail-cards');

function trailCard(t) {
  const badge = t.paid
    ? '<span class="badge badge-paid">בתשלום</span>'
    : '<span class="badge badge-free">חינם</span>';

  return `
    <article class="trail-card" id="trail-${t.id}" data-paid="${t.paid}" data-shade="${shadeLevel(t.shade)}" data-family="${t.family}">
      <div class="trail-card-head">
        <h3>${t.name}</h3>
        ${badge}
      </div>
      <p class="trail-en">${t.nameEn}</p>
      <p class="trail-summer">${t.summerNote}</p>
      <dl class="trail-facts">
        <div><dt>אזור</dt><dd>${t.area}</dd></div>
        <div><dt>רמת קושי</dt><dd>${t.difficulty}</dd></div>
        <div><dt>אורך</dt><dd>${t.length}</dd></div>
        <div><dt>משך</dt><dd>${t.duration}</dd></div>
        <div><dt>מחיר</dt><dd>${t.fee}</dd></div>
        <div><dt>חניה</dt><dd>${t.parking}</dd></div>
        <div><dt>צל</dt><dd>${t.shade}</dd></div>
        <div><dt>הגעה</dt><dd>${t.access}</dd></div>
        <div><dt>תחבורה ציבורית</dt><dd>${t.transit}</dd></div>
      </dl>
      <div class="trail-actions">
        <a class="btn btn-primary" href="${wazeUrl(t)}" target="_blank" rel="noopener">ניווט ב-Waze</a>
        <a class="btn btn-ghost" href="${gmapUrl(t)}" target="_blank" rel="noopener">Google Maps</a>
      </div>
    </article>`;
}

/* סיווג רמת הצל לצורך סינון */
function shadeLevel(shade) {
  if (shade.startsWith('גבוהה')) return 'high';
  if (shade.startsWith('חלקית')) return 'partial';
  return 'low';
}

cardsContainer.innerHTML = TRAILS.map(trailCard).join('');

/* ----- סינון כרטיסים -----*/
const filterButtons = document.querySelectorAll('.filter-btn');
let activeFilter = 'all';

filterButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    filterButtons.forEach((b) => b.setAttribute('aria-pressed', 'false'));
    btn.setAttribute('aria-pressed', 'true');
    activeFilter = btn.dataset.filter;
    applyFilter();
  });
});

function applyFilter() {
  document.querySelectorAll('.trail-card').forEach((card) => {
    let show = true;
    if (activeFilter === 'free') show = card.dataset.paid === 'false';
    else if (activeFilter === 'shaded') show = card.dataset.shade !== 'low';
    else if (activeFilter === 'family') show = card.dataset.family === 'true';
    card.hidden = !show;
  });
}

/* ----- מפה אינטראקטיבית (Leaflet) -----*/
const map = L.map('map', { scrollWheelZoom: false }).setView([32.30, 34.87], 10);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 18,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

const markers = [];
TRAILS.forEach((t) => {
  const marker = L.marker([t.lat, t.lon]).addTo(map);
  marker.bindPopup(
    `<strong>${t.name}</strong><br>רמת קושי: ${t.difficulty}<br>` +
    `<a href="#trail-${t.id}">למידע המלא</a>`
  );
  markers.push(marker);
});

/* התאמת המפה לגבולות כל הסמנים */
map.fitBounds(L.latLngBounds(TRAILS.map((t) => [t.lat, t.lon])).pad(0.15));

/* ----- ווידג'ט מזג אוויר (Open-Meteo) -----*/
const weatherSelect = document.getElementById('weather-select');
const weatherResult = document.getElementById('weather-result');

/* מילוי הבורר */
weatherSelect.innerHTML = TRAILS.map(
  (t) => `<option value="${t.id}">${t.name}</option>`
).join('');

function describeUv(uv) {
  if (uv == null) return '—';
  if (uv < 3) return `${uv} (נמוכה)`;
  if (uv < 6) return `${uv} (בינונית)`;
  if (uv < 8) return `${uv} (גבוהה)`;
  if (uv < 11) return `${uv} (גבוהה מאוד)`;
  return `${uv} (קיצונית)`;
}

async function loadWeather(id) {
  const t = TRAILS.find((x) => x.id === id);
  if (!t) return;

  weatherResult.innerHTML = '<p class="weather-loading">טוען נתוני מזג אוויר…</p>';

  const url =
    'https://api.open-meteo.com/v1/forecast' +
    `?latitude=${t.lat}&longitude=${t.lon}` +
    '&current=temperature_2m,relative_humidity_2m,wind_speed_10m' +
    '&daily=temperature_2m_max,temperature_2m_min,uv_index_max,precipitation_sum' +
    '&timezone=Asia%2FJerusalem';

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const data = await res.json();
    const c = data.current;
    const d = data.daily;

    weatherResult.innerHTML = `
      <p class="weather-title">${t.name} · עכשיו</p>
      <div class="weather-grid">
        <div><span class="weather-val">${Math.round(c.temperature_2m)}°C</span><span class="weather-key">טמפרטורה</span></div>
        <div><span class="weather-val">${Math.round(c.relative_humidity_2m)}%</span><span class="weather-key">לחות</span></div>
        <div><span class="weather-val">${Math.round(c.wind_speed_10m)} קמ"ש</span><span class="weather-key">רוח</span></div>
        <div><span class="weather-val">${Math.round(d.temperature_2m_max[0])}° / ${Math.round(d.temperature_2m_min[0])}°</span><span class="weather-key">מקס׳ / מינ׳ היום</span></div>
        <div><span class="weather-val">${describeUv(d.uv_index_max[0])}</span><span class="weather-key">קרינת UV</span></div>
        <div><span class="weather-val">${d.precipitation_sum[0]} מ"מ</span><span class="weather-key">משקעים היום</span></div>
      </div>
      <p class="weather-source">מקור: Open-Meteo · לתחזית רשמית מורחבת — <a href="https://ims.gov.il/he" target="_blank" rel="noopener">השירות המטאורולוגי</a></p>`;
  } catch (err) {
    weatherResult.innerHTML = `
      <p class="weather-error">לא ניתן לטעון את נתוני מזג האוויר כעת. בדקו את החיבור לרשת ונסו שוב,
      או עברו לתחזית הרשמית של <a href="https://ims.gov.il/he" target="_blank" rel="noopener">השירות המטאורולוגי</a>.</p>`;
  }
}

weatherSelect.addEventListener('change', () => loadWeather(weatherSelect.value));
loadWeather(TRAILS[0].id);

/* ----- חותמת שנה בפוטר -----*/
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
