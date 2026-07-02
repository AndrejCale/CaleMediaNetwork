// ===== PRELOADER =====
window.addEventListener('load', () => {
  const pre = document.getElementById('preloader');
  if (pre) setTimeout(() => pre.classList.add('hide'), 750);
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[data-internal]').forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      if (href && !href.startsWith('#')) {
        e.preventDefault();
        const pre = document.getElementById('preloader');
        if (pre) {
          pre.classList.remove('hide');
          setTimeout(() => { window.location.href = href; }, 500);
        } else {
          window.location.href = href;
        }
      }
    });
  });
});

// ===== CURSOR SPOTLIGHT =====
document.addEventListener('mousemove', e => {
  const s = document.getElementById('spotlight');
  if (s) { s.style.setProperty('--x', e.clientX + 'px'); s.style.setProperty('--y', e.clientY + 'px'); }
});

// ===== TRANSLATIONS =====
const TRANSLATIONS = {
  de: {
    "nav.home":"Start","nav.services":"Leistungen","nav.work":"Arbeiten","nav.process":"Ablauf","nav.about":"Über uns","nav.cta":"Call buchen",
    "footer.imprint":"Impressum","footer.privacy":"Datenschutz",

    "home.hero.eyebrow":"Digitalagentur",
    "home.hero.headline":"Wir bauen digitale Erlebnisse, die <em>wirklich konvertieren</em>.",
    "home.hero.sub":"Webdesign, KI-Automation und Social Media für Unternehmen, die online wachsen wollen — weltweit einsatzbereit.",
    "home.hero.ctaPrimary":"Kostenloses Strategiegespräch buchen","home.hero.ctaSecondary":"Arbeiten ansehen",
    "home.rating":"Durchgängig starkes Kundenfeedback",
    "home.services.eyebrow":"Leistungen","home.services.title":"Drei Hebel, ein System","home.services.sub":"Jede Leistung steht für sich — die Wirkung entsteht, wenn sie zusammenspielen.",
    "home.services.web.title":"Websites, die verkaufen","home.services.web.desc":"Schnelle, moderne Seiten, gebaut um Buchungen, Reservierungen und Anfragen zu maximieren.",
    "home.services.ai.title":"Prozesse, die sich selbst führen","home.services.ai.desc":"Automatisierte Abläufe für Akquise, Kundenkommunikation und interne Prozesse.",
    "home.services.social.title":"Sichtbarkeit, die bleibt","home.services.social.desc":"Content-Strategie und Betreuung, die deine Marke konsistent und glaubwürdig positioniert.",
    "home.services.link":"Mehr erfahren →",
    "home.work.eyebrow":"Ausgewählte Arbeiten","home.work.title":"Live im Einsatz, nicht nur im Portfolio","home.work.sub":"Ein Ausschnitt aus echten, launchten Projekten.","home.work.link":"Alle Arbeiten ansehen →",
    "home.process.eyebrow":"Ablauf","home.process.title":"Vom Gespräch zum Launch","home.process.link":"Ablauf im Detail →",
    "home.cta.title":"Bereit für den nächsten Schritt?","home.cta.sub":"Buche ein kostenloses, unverbindliches Strategiegespräch.","home.cta.button":"Call buchen",

    "services.eyebrow":"Leistungen","services.title":"Drei Hebel, ein System","services.sub":"Webdesign, KI-Automation und Social Media — einzeln stark, gemeinsam unschlagbar.",
    "services.web.tag":"01 · Webdesign","services.web.title":"Websites, die verkaufen","services.web.desc":"Schnelle, moderne Seiten, gebaut um Buchungen, Reservierungen und Anfragen zu maximieren — nicht nur gut auszusehen.",
    "services.web.li1":"Individuelles Design, kein Template","services.web.li2":"Reservierungs- &amp; Buchungssysteme","services.web.li3":"Mehrsprachig verfügbar",
    "services.ai.tag":"02 · KI-Automation","services.ai.title":"Prozesse, die sich selbst führen","services.ai.desc":"Automatisierte Abläufe für Akquise, Kundenkommunikation und interne Prozesse — weniger manuelle Arbeit, mehr Wachstum.",
    "services.ai.li1":"Automatisierte Kaltakquise-Systeme","services.ai.li2":"KI-gestützte Kundenkommunikation","services.ai.li3":"Interne Tools &amp; Dashboards",
    "services.social.tag":"03 · Social Media","services.social.title":"Sichtbarkeit, die bleibt","services.social.desc":"Content-Strategie und Betreuung, die deine Marke konsistent und glaubwürdig positioniert.",
    "services.social.li1":"Content-Strategie &amp; Planung","services.social.li2":"Community-Management","services.social.li3":"Markenaufbau über Kanäle hinweg",
    "services.cta.title":"Welche Leistung passt zu dir?","services.cta.sub":"Lass uns in einem kurzen Gespräch klären, was am meisten Wirkung bringt.","services.cta.button":"Call buchen",

    "work.eyebrow":"Ausgewählte Arbeiten","work.title":"Live im Einsatz, nicht nur im Portfolio","work.sub":"Jedes Projekt unten ist ein echtes, launchtes System — kein Mockup.",
    "work.pasodoble.cat":"Gastronomie","work.pasodoble.title":"Paso Doble","work.pasodoble.desc":"Komplette DNS-Migration, neue Domain-Infrastruktur und ein Reservierungssystem, das Anfragen direkt per E-Mail an den Inhaber sendet.",
    "work.labolera.cat":"Gastronomie","work.labolera.title":"La Bolera","work.labolera.desc":"Moderne Restaurant-Website mit vollständig eingebetteten Assets für maximale Ladegeschwindigkeit — von Grund auf neu aufgebaut.",
    "work.gripx.cat":"Marke &amp; Content","work.gripx.title":"GripX","work.gripx.desc":"Produktkommunikation und Werbefilm für eine Grip-Marke — von der Idee bis zum fertigen Content-Stück.",
    "work.ms.cat":"E-Commerce","work.ms.title":"Antiquitäten M.S.","work.ms.desc":"Shopify-Store im dunklen Galerie-Look für hochwertige Antiquitäten, inklusive Reservierungs-Kaufprozess statt klassischem Checkout.",
    "work.cta.title":"Dein Projekt könnte das nächste sein","work.cta.sub":"Lass uns besprechen, was für dein Business Sinn ergibt.","work.cta.button":"Call buchen",

    "process.eyebrow":"Ablauf","process.title":"Vom Gespräch zum Launch","process.sub":"Ein klarer, vorhersehbarer Weg von der ersten Idee bis zum laufenden Betrieb.",
    "process.s1.title":"Strategiegespräch","process.s1.desc":"Wir klären Ziele, Zielgruppe und was am meisten Wirkung bringt — unverbindlich und kostenlos.",
    "process.s2.title":"Konzept &amp; Design","process.s2.desc":"Wir entwickeln ein individuelles Konzept, abgestimmt auf deine Marke und deinen Markt.",
    "process.s3.title":"Umsetzung &amp; Launch","process.s3.desc":"Wir bauen, testen und bringen dein Projekt live — schnell und ohne Umwege.",
    "process.s4.title":"Betreuung &amp; Wachstum","process.s4.desc":"Nach dem Launch bleiben wir dran: Wartung, Optimierung und Weiterentwicklung nach Bedarf.",
    "process.cta.title":"Lass uns starten","process.cta.sub":"Der erste Schritt ist ein kurzes, kostenloses Gespräch.","process.cta.button":"Call buchen",

    "about.eyebrow":"Über uns","about.title":"Digitale Partner für wachsende Unternehmen",
    "about.p1":"CaleMediaNetwork wurde mit einem klaren Ziel gegründet: Unternehmen eine digitale Präsenz zu geben, die überzeugt — unabhängig davon, wo ihre Kunden sind.",
    "about.p2":"Als international arbeitende Agentur betreuen wir Kunden in mehreren Sprachen und Märkten und bringen jedes Projekt von der ersten Idee bis zum laufenden Betrieb.",
    "about.chip1.label":"Standort","about.chip2.label":"Sprachen","about.chip3.label":"Hintergrund","about.chip3.value":"Business Administration, FOM Hochschule",
    "about.chip4.label":"Fokus","about.chip4.value":"Webdesign, KI-Automation, Social Media",
    "about.cta.title":"Lass uns zusammenarbeiten","about.cta.sub":"Buche ein kostenloses Strategiegespräch und lerne uns kennen.","about.cta.button":"Call buchen",

    "contact.eyebrow":"Kontakt","contact.title":"Bereit für den nächsten Schritt?","contact.sub":"Buche ein kostenloses, unverbindliches Strategiegespräch — wir schauen gemeinsam, was für dein Business Sinn ergibt.","contact.cta":"Call buchen","contact.note":"Calendly-Link hier einfügen: href auf id=\"calendly-cta\" ersetzen",
    "contact.info1.label":"E-Mail","contact.info2.label":"Standort","contact.info2.value":"Bad Vilbel, Deutschland","contact.info3.label":"Antwortzeit","contact.info3.value":"In der Regel innerhalb 24 Std."
  },
  en: {
    "nav.home":"Home","nav.services":"Services","nav.work":"Work","nav.process":"Process","nav.about":"About","nav.cta":"Book a call",
    "footer.imprint":"Imprint","footer.privacy":"Privacy",

    "home.hero.eyebrow":"Digital Agency",
    "home.hero.headline":"We build digital experiences that <em>actually convert</em>.",
    "home.hero.sub":"Web design, AI automation and social media for businesses that want to grow online — built for a global audience.",
    "home.hero.ctaPrimary":"Book a free strategy call","home.hero.ctaSecondary":"See the work",
    "home.rating":"Consistently strong client feedback",
    "home.services.eyebrow":"Services","home.services.title":"Three levers, one system","home.services.sub":"Each service stands on its own — the real impact shows up when they work together.",
    "home.services.web.title":"Websites built to sell","home.services.web.desc":"Fast, modern sites built to maximize bookings, reservations and inquiries.",
    "home.services.ai.title":"Processes that run themselves","home.services.ai.desc":"Automated workflows for outreach, client communication and internal processes.",
    "home.services.social.title":"Visibility that lasts","home.services.social.desc":"Content strategy and management that positions your brand consistently and credibly.",
    "home.services.link":"Learn more →",
    "home.work.eyebrow":"Selected Work","home.work.title":"Live in production, not just a portfolio","home.work.sub":"A snapshot of real, launched projects.","home.work.link":"See all work →",
    "home.process.eyebrow":"Process","home.process.title":"From conversation to launch","home.process.link":"See the full process →",
    "home.cta.title":"Ready for the next step?","home.cta.sub":"Book a free, no-obligation strategy call.","home.cta.button":"Book a call",

    "services.eyebrow":"Services","services.title":"Three levers, one system","services.sub":"Web design, AI automation and social media — strong alone, unstoppable together.",
    "services.web.tag":"01 · Web Design","services.web.title":"Websites built to sell","services.web.desc":"Fast, modern sites built to maximize bookings, reservations and inquiries — not just look good.",
    "services.web.li1":"Custom design, never a template","services.web.li2":"Reservation &amp; booking systems","services.web.li3":"Multilingual support available",
    "services.ai.tag":"02 · AI Automation","services.ai.title":"Processes that run themselves","services.ai.desc":"Automated workflows for outreach, client communication and internal processes — less manual work, more growth.",
    "services.ai.li1":"Automated cold outreach systems","services.ai.li2":"AI-powered client communication","services.ai.li3":"Internal tools &amp; dashboards",
    "services.social.tag":"03 · Social Media","services.social.title":"Visibility that lasts","services.social.desc":"Content strategy and management that positions your brand consistently and credibly.",
    "services.social.li1":"Content strategy &amp; planning","services.social.li2":"Community management","services.social.li3":"Cross-channel brand building",
    "services.cta.title":"Which service fits you?","services.cta.sub":"Let's figure out what will move the needle most, in a short call.","services.cta.button":"Book a call",

    "work.eyebrow":"Selected Work","work.title":"Live in production, not just a portfolio","work.sub":"Every project below is a real, launched system — not a mockup.",
    "work.pasodoble.cat":"Hospitality","work.pasodoble.title":"Paso Doble","work.pasodoble.desc":"Full DNS migration, new domain infrastructure, and a reservation system that emails inquiries straight to the owner.",
    "work.labolera.cat":"Hospitality","work.labolera.title":"La Bolera","work.labolera.desc":"Modern restaurant website with fully embedded assets for maximum load speed — built from scratch.",
    "work.gripx.cat":"Brand &amp; Content","work.gripx.title":"GripX","work.gripx.desc":"Product communication and a commercial video for a grip brand — from concept to finished content piece.",
    "work.ms.cat":"E-Commerce","work.ms.title":"Antiquitäten M.S.","work.ms.desc":"Dark gallery-style Shopify store for high-value antiques, with a reservation-based purchase flow instead of standard checkout.",
    "work.cta.title":"Your project could be next","work.cta.sub":"Let's talk about what makes sense for your business.","work.cta.button":"Book a call",

    "process.eyebrow":"Process","process.title":"From conversation to launch","process.sub":"A clear, predictable path from first idea to ongoing operation.",
    "process.s1.title":"Strategy call","process.s1.desc":"We clarify goals, audience and what will move the needle most — free and no obligation.",
    "process.s2.title":"Concept &amp; design","process.s2.desc":"We build a custom concept aligned to your brand and your market.",
    "process.s3.title":"Build &amp; launch","process.s3.desc":"We build, test, and take your project live — fast, with no detours.",
    "process.s4.title":"Support &amp; growth","process.s4.desc":"After launch, we stay on it: maintenance, optimization and further development as needed.",
    "process.cta.title":"Let's get started","process.cta.sub":"The first step is a short, free conversation.","process.cta.button":"Book a call",

    "about.eyebrow":"About","about.title":"A digital partner for growing businesses",
    "about.p1":"CaleMediaNetwork was founded with a clear goal: giving businesses a digital presence that actually convinces people — wherever their customers are.",
    "about.p2":"As an internationally-minded agency, we work with clients across multiple languages and markets, carrying every project from first idea to ongoing operation.",
    "about.chip1.label":"Location","about.chip2.label":"Languages","about.chip3.label":"Background","about.chip3.value":"Business Administration, FOM University",
    "about.chip4.label":"Focus","about.chip4.value":"Web design, AI automation, social media",
    "about.cta.title":"Let's work together","about.cta.sub":"Book a free strategy call and get to know us.","about.cta.button":"Book a call",

    "contact.eyebrow":"Contact","contact.title":"Ready for the next step?","contact.sub":"Book a free, no-obligation strategy call — let's look at what makes sense for your business.","contact.cta":"Book a call","contact.note":"Insert Calendly link here: replace href on id=\"calendly-cta\"",
    "contact.info1.label":"Email","contact.info2.label":"Location","contact.info2.value":"Bad Vilbel, Germany","contact.info3.label":"Response time","contact.info3.value":"Usually within 24 hours"
  },
  sr: {
    "nav.home":"Početna","nav.services":"Usluge","nav.work":"Radovi","nav.process":"Proces","nav.about":"O nama","nav.cta":"Zakaži poziv",
    "footer.imprint":"Impresum","footer.privacy":"Privatnost",

    "home.hero.eyebrow":"Digitalna agencija",
    "home.hero.headline":"Gradimo digitalna iskustva koja <em>zaista konvertuju</em>.",
    "home.hero.sub":"Web dizajn, AI automatizacija i društvene mreže za firme koje žele da rastu na internetu — spremno za globalnu publiku.",
    "home.hero.ctaPrimary":"Zakaži besplatan strateški poziv","home.hero.ctaSecondary":"Pogledaj radove",
    "home.rating":"Dosledno pozitivne povratne informacije klijenata",
    "home.services.eyebrow":"Usluge","home.services.title":"Tri poluge, jedan sistem","home.services.sub":"Svaka usluga stoji sama za sebe — pravi efekat nastaje kad rade zajedno.",
    "home.services.web.title":"Sajtovi napravljeni da prodaju","home.services.web.desc":"Brzi, moderni sajtovi napravljeni da maksimizuju rezervacije i upite.",
    "home.services.ai.title":"Procesi koji se sami vode","home.services.ai.desc":"Automatizovani procesi za akviziciju, komunikaciju sa klijentima i interne procese.",
    "home.services.social.title":"Vidljivost koja traje","home.services.social.desc":"Content strategija i upravljanje koji pozicioniraju vaš brend dosledno i verodostojno.",
    "home.services.link":"Saznaj više →",
    "home.work.eyebrow":"Izabrani radovi","home.work.title":"Uživo u pogonu, ne samo u portfoliju","home.work.sub":"Deo pravih, lansiranih projekata.","home.work.link":"Pogledaj sve radove →",
    "home.process.eyebrow":"Proces","home.process.title":"Od razgovora do lansiranja","home.process.link":"Pogledaj ceo proces →",
    "home.cta.title":"Spremni za sledeći korak?","home.cta.sub":"Zakažite besplatan strateški poziv bez obaveza.","home.cta.button":"Zakaži poziv",

    "services.eyebrow":"Usluge","services.title":"Tri poluge, jedan sistem","services.sub":"Web dizajn, AI automatizacija i društvene mreže — snažni pojedinačno, nezaustavljivi zajedno.",
    "services.web.tag":"01 · Web dizajn","services.web.title":"Sajtovi napravljeni da prodaju","services.web.desc":"Brzi, moderni sajtovi napravljeni da maksimizuju rezervacije i upite — ne samo da lepo izgledaju.",
    "services.web.li1":"Individualni dizajn, bez šablona","services.web.li2":"Sistemi za rezervacije i zakazivanje","services.web.li3":"Dostupna višejezična podrška",
    "services.ai.tag":"02 · AI automatizacija","services.ai.title":"Procesi koji se sami vode","services.ai.desc":"Automatizovani procesi za akviziciju, komunikaciju sa klijentima i interne procese — manje ručnog rada, više rasta.",
    "services.ai.li1":"Automatizovani sistemi hladnog kontakta","services.ai.li2":"AI komunikacija sa klijentima","services.ai.li3":"Interni alati i dashboard-ovi",
    "services.social.tag":"03 · Društvene mreže","services.social.title":"Vidljivost koja traje","services.social.desc":"Content strategija i upravljanje koji pozicioniraju vaš brend dosledno i verodostojno.",
    "services.social.li1":"Content strategija i planiranje","services.social.li2":"Upravljanje zajednicom","services.social.li3":"Izgradnja brenda kroz sve kanale",
    "services.cta.title":"Koja usluga vam odgovara?","services.cta.sub":"Hajde da na kratkom pozivu razjasnimo šta donosi najviše efekta.","services.cta.button":"Zakaži poziv",

    "work.eyebrow":"Izabrani radovi","work.title":"Uživo u pogonu, ne samo u portfoliju","work.sub":"Svaki projekat ispod je pravi, lansiran sistem — ne maketa.",
    "work.pasodoble.cat":"Ugostiteljstvo","work.pasodoble.title":"Paso Doble","work.pasodoble.desc":"Potpuna DNS migracija, nova domenska infrastruktura i sistem rezervacija koji šalje upite direktno vlasniku putem mejla.",
    "work.labolera.cat":"Ugostiteljstvo","work.labolera.title":"La Bolera","work.labolera.desc":"Moderan sajt za restoran sa potpuno ugrađenim resursima za maksimalnu brzinu učitavanja — izgrađen od nule.",
    "work.gripx.cat":"Brend i sadržaj","work.gripx.title":"GripX","work.gripx.desc":"Komunikacija proizvoda i reklamni video za brend grip proizvoda — od ideje do gotovog sadržaja.",
    "work.ms.cat":"E-trgovina","work.ms.title":"Antiquitäten M.S.","work.ms.desc":"Shopify prodavnica u tamnom galerijskom stilu za vredne antikvitete, sa procesom kupovine putem rezervacije umesto klasičnog checkout-a.",
    "work.cta.title":"Vaš projekat bi mogao biti sledeći","work.cta.sub":"Hajde da razgovaramo o tome šta ima smisla za vaš biznis.","work.cta.button":"Zakaži poziv",

    "process.eyebrow":"Proces","process.title":"Od razgovora do lansiranja","process.sub":"Jasan, predvidiv put od prve ideje do svakodnevnog rada.",
    "process.s1.title":"Strateški poziv","process.s1.desc":"Razjašnjavamo ciljeve, ciljnu grupu i šta donosi najviše efekta — besplatno i bez obaveza.",
    "process.s2.title":"Koncept i dizajn","process.s2.desc":"Razvijamo individualni koncept usklađen sa vašim brendom i tržištem.",
    "process.s3.title":"Izrada i lansiranje","process.s3.desc":"Gradimo, testiramo i lansiramo vaš projekat — brzo i bez zaobilaznih puteva.",
    "process.s4.title":"Podrška i rast","process.s4.desc":"Nakon lansiranja ostajemo uz vas: održavanje, optimizacija i dalji razvoj po potrebi.",
    "process.cta.title":"Hajde da počnemo","process.cta.sub":"Prvi korak je kratak, besplatan razgovor.","process.cta.button":"Zakaži poziv",

    "about.eyebrow":"O nama","about.title":"Digitalni partner za firme u rastu",
    "about.p1":"CaleMediaNetwork je osnovan sa jasnim ciljem: da firmama pruži digitalno prisustvo koje zaista ubeđuje ljude — bez obzira gde se nalaze njihovi klijenti.",
    "about.p2":"Kao agencija sa međunarodnim pristupom, radimo sa klijentima na više jezika i tržišta, vodeći svaki projekat od prve ideje do svakodnevnog rada.",
    "about.chip1.label":"Lokacija","about.chip2.label":"Jezici","about.chip3.label":"Obrazovanje","about.chip3.value":"Poslovna administracija, FOM Hochschule",
    "about.chip4.label":"Fokus","about.chip4.value":"Web dizajn, AI automatizacija, društvene mreže",
    "about.cta.title":"Hajde da sarađujemo","about.cta.sub":"Zakažite besplatan strateški poziv i upoznajte nas.","about.cta.button":"Zakaži poziv",

    "contact.eyebrow":"Kontakt","contact.title":"Spremni za sledeći korak?","contact.sub":"Zakažite besplatan strateški poziv bez obaveza — zajedno ćemo videti šta ima smisla za vaš biznis.","contact.cta":"Zakaži poziv","contact.note":"Ovde ubaci Calendly link: zameni href na id=\"calendly-cta\"",
    "contact.info1.label":"Email","contact.info2.label":"Lokacija","contact.info2.value":"Bad Vilbel, Nemačka","contact.info3.label":"Vreme odgovora","contact.info3.value":"Obično u roku od 24h"
  }
};

function applyLang(lang){
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    if(TRANSLATIONS[lang][key]) el.innerHTML = TRANSLATIONS[lang][key];
  });
  document.querySelectorAll('.lang-switch button').forEach(b=>{
    b.classList.toggle('active', b.dataset.lang===lang);
  });
  localStorage.setItem('cmn-lang', lang);
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.lang-switch button').forEach(btn=>{
    btn.addEventListener('click', ()=>applyLang(btn.dataset.lang));
  });
  const saved = localStorage.getItem('cmn-lang') || 'de';
  applyLang(saved);
});
