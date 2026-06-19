/* ============================================================
   מסלולי טיול בשרון · קיץ 2026
   מקור אמת יחיד: מערך TRAILS מניע את הכרטיסים, את סמני המפה,
   את ווידג'ט מזג האוויר ואת חלון הפירוט (כולל מפת שבילים).
   ============================================================ */

'use strict';

/* ----- נתוני המסלולים -----
   lat/lon: קואורדינטות מקורבות לכניסה/חניה (לסימון במפה).
   routeDesc: תיאור הדרך וההליכה. history: סקירה היסטורית (null אם אין).
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
    routeDesc: 'המסלול יוצא מגשר הצבים, שם חניון חינם ומעבר עץ מעל המים המאפשר תצפית על הצבים הרכים. משם ממשיכים לאורך הנחל בין דיונות חול, חורשות איקליפטוס ואזורי פיקניק, בתוך גן לאומי נחל אלכסנדר לכיוון חוף בית ינאי. הדרך שטוחה וקלה, מתאימה למשפחות, וניתן להאריך אותה עד תל חפר או לחזור הלוך־חזור.',
    history: 'נחל אלכסנדר הוא ביתה של אוכלוסיית הצב הרך (Trionyx triunguis) הגדולה בישראל. גשר הצבים נבנה במקור מעץ בשנות ה-30 בידי מייסדי כפר ויתקין, ונבנה מחדש מבטון לאחר סערה קשה ב-1991. במהלך המאה ה-20 פגעו זיהומים תעשייתיים קשות באוכלוסיית הצבים; מאז שוקם הנחל והאוכלוסייה מתאוששת בהדרגה.',
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
    length: 'מסלול הקפה כ-6–7 ק"מ',
    duration: 'כשעה עד שעה וחצי',
    parking: 'חניון חינם בכניסה',
    access: 'בקצה הצפוני של הרצליה פיתוח, גישה נוחה ברכב מכביש 2 ומתל אביב.',
    transit: 'אוטובוסים להרצליה פיתוח ואז הליכה',
    summerNote: 'מצודה צלבנית ותצפיות ים על צוק כורכר. האתר חשוף מאוד לשמש — ביקור בבוקר, כובע ומים. שעות הקיץ בדרך כלל 08:00–17:00 (לאימות).',
    routeDesc: 'מסלול הקפה קל באורך כ-7 ק"מ (כשעה וחצי) על שבילים מהודקים וחוליים. רשות הטבע והגנים סללה שביל נגיש המחבר בין אתרי החפירה והשרידים, וכל נקודה לאורכו צופה אל קו החוף. בולטים שרידי המצודה הצלבנית, מבני התקופה הרומית והביזנטית ושרידי תעשיית הזכוכית.',
    history: 'האתר יושב על מצוק כורכר מעל הים, וקיומו מתועד מהתקופה הפיניקית (המאה ה-6 לפנה"ס), אז נקרא ארסוף על שם האל רשף. בתקופה הביזנטית הייתה אפולוניה העיר השנייה בגודלה בשרון אחרי קיסריה, ופרחה בה תעשיית זכוכית. ב-1241 הקימו הצלבנים מצודה במקום, וזו נפלה ב-1265 לאחר מצור של כחודש בידי הסולטאן הממלוכי בייברס, שהרס את העיר.',
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
    routeDesc: 'בשמורה שני מסלולים מסומנים עיקריים: "שביל המצוק" האדום הקרוב לים, ו"שביל הכורכר" השחור הפנימי יותר. שביל ישראל עובר בשמורה. הדרך חולית (אינה מתאימה לעגלות), עוברת על שפת המצוק עם תצפיות ים ומסתיימת במרפסת עץ. רכיבת אופניים מותרת בשביל השחור בלבד.',
    history: 'הגן הלאומי שומר על מצוקי כורכר — רכס אבן חול מגובש המתנשא עד עשרות מטרים מעל הים ונמשך כשני קילומטרים לאורך החוף. הרכס הוא תצורה גאולוגית אופיינית למישור החוף הישראלי. בשטח השמורה מתקיימת אוכלוסיית צבאים, אם כי הם ביישנים וקשים לצפייה.',
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
    routeDesc: 'בשמורה כמה מסלולים מסומנים, מטיולים משפחתיים קלים ועד מסלולי חוף בינוניים. מסלול אופייני יוצא מבריכת אודים, עובר בשדות לאורך נחל פולג עד שער פולג — הפרצה ברכס הכורכר — וחוזר. השטח חולי עם בריכות עונתיות, ומחובר למערך שביל ישראל.',
    history: 'רכס הכורכר החוסם את דרכו של נחל פולג אל הים יצר בעבר ביצות. בעת העתיקה נחצב מעבר ברכס — "שער פולג" — כדי לנקז את המים, אם כי תיארוך החציבה מיוחס ואינו ודאי. הביצות שרדו עד שנות ה-30, ועבודות ניקוז בתקופת המנדט הבריטי ובשנות ה-50 ייצבו את אפיק הנחל במתכונתו הנוכחית.',
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
    length: 'שבילים שטוחים: לולאה כ-1.5–3 ק"מ',
    duration: 'שעה עד שעתיים',
    parking: 'חניוני יום חינם של קק"ל (כולל חניה נגישה)',
    access: 'לאורך כביש 4 הישן בין צומת דרור לצומת השרון. כניסה מערבית ליער וכניסה מזרחית לגן הבוטני.',
    transit: 'אוטובוסים בכביש 4',
    summerNote: 'האופציה המוצלת והמומלצת לחום הקיץ: שבילים שטוחים בין עצים, שולחנות פיקניק ומתקני משחק. מסלול האירוסים פורח בינואר–פברואר (לא בקיץ).',
    routeDesc: 'באתר שבילים סלולים ומוצלים לאורך 130 הדונם. "מסלול האירוסים" הוא לולאה באורך כ-3 ק"מ שבה פורח האירוס הסגול בפברואר–תחילת מרץ, ולצדו לולאה קצרה של כ-1.5 ק"מ. במקום שירותים, ברזיות, פינות פיקניק והנגשה. אפשר לטייל בין עצים ממוספרים ומתויגים לפי אזור מוצאם.',
    history: 'הארבורטום הוקם בשנות ה-50 בידי מחלקת חקר היער של משרד החקלאות, כתחנת ניסיון לאקלום עצים. נשתלו בו מעל 700 מיני עצים מרחבי העולם, מסודרים לפי אזורי מוצא, והאתר שימש מרכז מחקר יערני כשלושים שנה. ב-1986 נסגרה מחלקת חקר היער והאתר ננטש, וב-2013 שיקמה אותו קק"ל עם שבילים נגישים, שילוט הסבר ומתקנים.',
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
    routeDesc: 'הטיילת משתרעת על פני קילומטרים אחדים לאורך ראש המצוק, עם תצפיות ים מרהיבות. לאורכה מקטעים נושאיים ובהם פינות ישיבה, מתקני כושר, מיצגי אמנות, גנים ומשחקייה, וירידה לחוף במעלית. אפשר לבחור כל מקטע לפי הרצון; השקיעה מומלצת במיוחד.',
    history: 'מצוקי הכורכר של נתניה מתנשאים כ-30–50 מטר מעל הים. שחיקת המצוק התגברה מאז שנות ה-70, בין היתר בשל בניית סכר אסואן במצרים שהפחיתה את סחף החול לאורך החוף. כדי למנוע התמוטטויות נבנים שוברי גלים לאורך החוף. מהטיילת יורדת מעלית זכוכית מודרנית בגובה כ-33 מטר אל החוף.',
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
    length: 'מסלול הקפה כ-4 ק"מ',
    duration: 'שעה עד שעה וחצי',
    parking: 'חניית רחוב / שוליים ליד השמורה',
    access: 'בשרון המזרחי ליד חרוצים ובני ציון.',
    transit: 'מוגבלת — מומלץ ברכב פרטי',
    summerNote: 'שמורת החמרה (אדמת הסחף) הגדולה ששרדה בשרון. שיא הפריחה באביב; בקיץ שקטה וחמה יותר — בוקר בלבד.',
    routeDesc: 'מסלול ההקפה הוא טיול קל של כ-4 ק"מ (שעה עד שעה וחצי) בשבילים חוליים. בשמורה גידור המגן על הפריחה, ובאביב (פברואר–מרץ) היא נצבעת בתורמוסים, כלניות ואירוס הארגמן. השמורה עצמה קומפקטית, וניתן לשלב אותה עם אזור חרוצים הסמוך.',
    history: 'השמורה היא שריד לנוף השרון הטבעי, עם צמחייה המותאמת לקרקע החמרה (חול חרסיתי אדום ועשיר בברזל). עד המאה ה-20 היה האזור חלק מ"יער השרון" (אל-ע׳אבה) — חורש פתוח שבלט בו אלון התבור, והשתרע מכפר יונה בצפון ועד רעננה בדרום. השמורה מוגנת משום שהיא משמרת מערכת אקולוגית נדירה זו.',
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
    routeDesc: 'בשמורה מסלולי הקפה קלים סביב הנחל הזורם כל השנה. בולטים בדרך: הסכר הרומי-ביזנטי המרשים עם מעבר עץ על גביו, מערכת תעלות ושערים שהזרימו מים אל הטחנות, קטעי אמת המים, וטחנת קמח עות׳מאנית משוחזרת ובה אבני ריחיים וגלגלי מים. מתאים למשפחות ולצפרים.',
    history: 'בתקופה הרומית-ביזנטית נבנה כאן סכר שהעלה את מפלס הנחל בכ-3 מטרים, כדי להזרים מים אל קיסריה דרך אמות מים. במקום פעלו טחנות קמח ביזנטיות ועות׳מאניות שניצלו את שפע המים, וחלקן שוחזר. הנחל נקרא "תנינים" משום שתנינים מצריים חיו בביצות כברה הסמוכות עד תחילת המאה ה-20 — הצפייה האחרונה תועדה ב-1912.',
  },
];

/* ----- כלי עזר -----*/
const wazeUrl = (t) => `https://waze.com/ul?ll=${t.lat},${t.lon}&navigate=yes`;
const gmapUrl = (t) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(t.name)}`;
const trailById = (id) => TRAILS.find((t) => t.id === id);

/* סיווג רמת הצל לצורך סינון */
function shadeLevel(shade) {
  if (shade.startsWith('גבוהה')) return 'high';
  if (shade.startsWith('חלקית')) return 'partial';
  return 'low';
}

/* ----- רינדור כרטיסי מסלולים -----*/
const cardsContainer = document.getElementById('trail-cards');

function trailCard(t) {
  const badge = t.paid
    ? '<span class="badge badge-paid">בתשלום</span>'
    : '<span class="badge badge-free">חינם</span>';

  return `
    <article class="trail-card" id="trail-${t.id}" data-id="${t.id}"
             data-paid="${t.paid}" data-shade="${shadeLevel(t.shade)}" data-family="${t.family}"
             role="button" tabindex="0" aria-label="פתיחת פרטים מלאים: ${t.name}">
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
      </dl>
      <div class="trail-actions">
        <span class="trail-more">פרטים, מפת שבילים והיסטוריה ←</span>
        <a class="btn btn-ghost" href="${wazeUrl(t)}" target="_blank" rel="noopener">Waze</a>
      </div>
    </article>`;
}

cardsContainer.innerHTML = TRAILS.map(trailCard).join('');

/* פתיחת חלון הפירוט בלחיצה על כרטיס (פרט לקישורי ניווט) */
cardsContainer.addEventListener('click', (e) => {
  if (e.target.closest('a')) return;
  const card = e.target.closest('.trail-card');
  if (card) openDetail(card.dataset.id);
});
cardsContainer.addEventListener('keydown', (e) => {
  if (e.key !== 'Enter' && e.key !== ' ') return;
  const card = e.target.closest('.trail-card');
  if (card) { e.preventDefault(); openDetail(card.dataset.id); }
});

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

/* ----- מפת הסקירה הכללית (Leaflet) -----*/
const overviewMap = L.map('map', { scrollWheelZoom: false }).setView([32.30, 34.87], 10);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 18,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(overviewMap);

TRAILS.forEach((t) => {
  const marker = L.marker([t.lat, t.lon]).addTo(overviewMap);
  marker.bindPopup(
    `<strong>${t.name}</strong><br>רמת קושי: ${t.difficulty}<br>` +
    `<button type="button" class="popup-link" onclick="openTrailDetail('${t.id}')">לפרטים המלאים</button>`
  );
});
overviewMap.fitBounds(L.latLngBounds(TRAILS.map((t) => [t.lat, t.lon])).pad(0.15));

/* ----- חלון פירוט המסלול (כולל מפת שבילים ייעודית) -----*/
const modal = document.getElementById('trail-modal');
const modalBody = document.getElementById('modal-body');
let detailMap = null;
let lastFocused = null;

function detailHtml(t) {
  const badge = t.paid
    ? '<span class="badge badge-paid">בתשלום</span>'
    : '<span class="badge badge-free">חינם</span>';

  const historyBlock = t.history
    ? `<section class="modal-section">
         <h3>סקירה היסטורית</h3>
         <p>${t.history}</p>
       </section>`
    : '';

  return `
    <div class="modal-head">
      <h2 id="modal-title">${t.name}</h2>
      ${badge}
    </div>
    <p class="trail-en">${t.nameEn}</p>

    <section class="modal-section">
      <h3>תיאור הדרך</h3>
      <p>${t.routeDesc}</p>
    </section>

    <section class="modal-section">
      <h3>הוראות הגעה</h3>
      <p>${t.access}</p>
      <div class="trail-actions">
        <a class="btn btn-primary" href="${wazeUrl(t)}" target="_blank" rel="noopener">ניווט ב-Waze</a>
        <a class="btn btn-ghost" href="${gmapUrl(t)}" target="_blank" rel="noopener">Google Maps</a>
      </div>
    </section>

    <section class="modal-section">
      <h3>מפת שבילים</h3>
      <div id="modal-map" class="modal-map"></div>
      <p class="fineprint">השכבה מציגה את רשת השבילים המסומנים של ישראל (Israel Hiking Map). הסמן מציין את הכניסה/החניה המקורבת.</p>
    </section>

    ${historyBlock}

    <section class="modal-section">
      <h3>פרטים מלאים</h3>
      <dl class="trail-facts">
        <div><dt>אזור</dt><dd>${t.area}</dd></div>
        <div><dt>רמת קושי</dt><dd>${t.difficulty}</dd></div>
        <div><dt>אורך</dt><dd>${t.length}</dd></div>
        <div><dt>משך</dt><dd>${t.duration}</dd></div>
        <div><dt>מחיר</dt><dd>${t.fee}</dd></div>
        <div><dt>חניה</dt><dd>${t.parking}</dd></div>
        <div><dt>צל</dt><dd>${t.shade}</dd></div>
        <div><dt>תחבורה ציבורית</dt><dd>${t.transit}</dd></div>
      </dl>
    </section>

    <section class="modal-section">
      <h3>המלצת קיץ</h3>
      <p>${t.summerNote}</p>
    </section>`;
}

function openDetail(id) {
  const t = trailById(id);
  if (!t) return;

  lastFocused = document.activeElement;
  modalBody.innerHTML = detailHtml(t);
  modal.hidden = false;
  document.body.style.overflow = 'hidden';
  if (location.hash !== `#detail-${id}`) history.replaceState(null, '', `#detail-${id}`);

  /* מפת שבילים ייעודית: בסיס OSM + שכבת שבילים מסומנים */
  detailMap = L.map('modal-map', { scrollWheelZoom: false }).setView([t.lat, t.lon], 14);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(detailMap);
  L.tileLayer('https://israelhiking.osm.org.il/OverlayTiles/{z}/{x}/{y}.png', {
    maxZoom: 16, minZoom: 7,
    attribution: '<a href="https://israelhiking.osm.org.il/">Israel Hiking Map</a>',
  }).addTo(detailMap);
  L.marker([t.lat, t.lon]).addTo(detailMap).bindPopup(t.name);

  requestAnimationFrame(() => detailMap.invalidateSize());

  modal.querySelector('.modal-close').focus();
}

function closeDetail() {
  if (modal.hidden) return;
  if (detailMap) { detailMap.remove(); detailMap = null; }
  modal.hidden = true;
  document.body.style.overflow = '';
  if (location.hash.startsWith('#detail-')) history.replaceState(null, '', location.pathname + location.search);
  if (lastFocused) lastFocused.focus();
}

/* חשיפה גלובלית לקישור שבתוך ה-popup של המפה */
window.openTrailDetail = openDetail;

modal.addEventListener('click', (e) => {
  if (e.target.dataset.close !== undefined) closeDetail();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeDetail();
});

/* פתיחה אוטומטית לפי קישור עומק (#detail-<id>) */
if (location.hash.startsWith('#detail-')) {
  const id = location.hash.replace('#detail-', '');
  if (trailById(id)) openDetail(id);
}

/* ----- ווידג'ט מזג אוויר (Open-Meteo) -----*/
const weatherSelect = document.getElementById('weather-select');
const weatherResult = document.getElementById('weather-result');

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
  const t = trailById(id);
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
