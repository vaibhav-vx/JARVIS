# 🔬 Hackathon Websites — Research & Observations
> Documented by: Designer + Engineer + Creative Director lens  
> Purpose: To study and extract insights for building **JARVIS Hackathon** website  
> Date: September 2026

---

## Website 1 — Hack the North 2025

**🔗 URL:** https://2025.hackthenorth.com  
**📍 Organized by:** University of Waterloo, Canada  
**📅 Event Date:** September 12–14, 2025  
**⏱️ Duration:** 36 Hours  
**📏 Type:** In-person | International (Canada's biggest hackathon)

---

### What We Saw & Observed

#### 🎨 Design & Visual Language
- **Theme Color:** Deep navy/dark purple (`#141425`) as background with vibrant coral/salmon (`#f3675a`) as the primary brand accent.
- **Mood:** Whimsical, hand-drawn, illustrated art style. It doesn't feel cold or corporate. It feels warm, friendly, and welcoming — especially for first-time hackers.
- **Illustrations:** Custom illustrated characters, landscapes, and scenes scattered across the page. This is what makes it visually unique and instantly recognizable.
- **Typography:** Mix of a rounded, playful heading font with a clean system font for body. Feels approachable.
- **Layout:** Full single-page scroll layout. Each section flows into the next with illustrated dividers (like rolling hills or horizon lines between sections).
- **No sharp boxes:** Almost nothing is a plain rectangle. Sections blend into each other through illustrated ground lines and organic shapes.

#### 📐 Page Structure & Sections (Top to Bottom)
1. **Sticky Navbar** — Logo on the left, navigation links on the right. Transparent at the top, becomes slightly opaque on scroll. Links: About, Schedule, Sponsors, FAQ, Apply. A bright "Apply" button stands out in the primary coral color.
2. **Hero Section** — Large illustrated scene with the Hack the North branding text, dates, and a glowing "Apply" CTA. Animated elements (floating stars, moving clouds or characters). Countdown timer to event.
3. **About Section** — Key stats (e.g., 1,200+ hackers, 36 hours, 200+ mentors). Uses large numbers in big bold typography to communicate scale and credibility.
4. **What to Expect** — Cards or illustrated panels showing what participants will get: Hardware, APIs, workshops, mentorship, food & swag.
5. **Schedule Section** — A day-by-day or hourly timeline. Clean table or accordion format showing when events, meals, and keynotes happen.
6. **Sponsors Section** — Logo grid organized by tier: Title, Gold, Silver, Bronze, etc. Logos are horizontally aligned.
7. **FAQ Section** — Accordion-style. Questions expand on click to reveal answers. Clean, minimal.
8. **Footer** — Social links (Twitter/X, Instagram, Facebook), copyright, and past hackathon archive links.

#### ⚡ Interactions & Animations
- **Scroll Animations:** Elements animate in as you scroll down. Text fades up. Illustrations slide in from the sides.
- **Floating/Parallax Elements:** Background stars and decorative elements move at a slower speed than content when scrolling, giving a depth effect.
- **Hover States:** Buttons glow or shift color on hover. Nav links have underline slide-in effects.
- **Mobile Responsive:** Hamburger menu on smaller screens. Layout reflows well to single-column.

#### 🛠️ Technical Stack (Observed from HTML)
- **Framework:** React (all content is rendered inside a `<div id="root">`, confirming SPA architecture).
- **Bundler:** Create React App or similar (confirmed from `/static/js/main.4fbca1da.js`).
- **Analytics:** Fathom Analytics (`cdn.usefathom.com`) — a privacy-first GA alternative.
- **Animations:** `animate.css` (CDN link visible in the HTML head).
- **SEO:** Full Open Graph meta tags, Twitter Cards, Apple Touch icon, Web App Manifest.
- **Color Theme:** `theme-color: #141425` confirms the dark purple brand background.
- **PWA Ready:** Has `site.webmanifest`, Apple mobile web app capable tags.

#### ✍️ Copywriting Style
- Inclusive and warm. Language like "make it easy for anyone to dream big."
- Short, punchy statements. Numbers are displayed prominently ("36 hours," "1,200 hackers").
- Does not feel intimidating to beginners.

---

## Website 2 — Code2Create 7.0 (ACM-VIT)

**🔗 URL:** https://c2c.acmvit.in  
**📍 Organized by:** ACM-VIT, VIT Vellore, India  
**📅 Event Date:** 6 September 2026  
**⏱️ Duration:** 48 Hours  
**📏 Type:** National Hackathon | In-person

---

### What We Saw & Observed

#### 🎨 Design & Visual Language
- **Theme:** Japanese-inspired aesthetic — night sakura (cherry blossom) trees, deep dark backgrounds, soft pinks and purples layered over black. Very cinematic and culturally distinct.
- **Background Color:** Near-black with a deep burgundy tint (`#0c0004`) — darker than Hack the North.
- **Accent Colors:** Soft pink cherry blossoms, pale lavender. Creates a beautiful contrast against the very dark background.
- **Mood:** Elegant, premium, atmospheric. Feels like you're opening a high-budget event website, not a student hackathon.
- **OG Image:** The preview image is "a night sakura tree" — extremely distinctive and shareable.

#### 🖋️ Typography (Observed from HTML head)
Multiple high-quality Google Fonts loaded:
- `Do Hyeon` — Korean-inspired display font (adds cultural character)
- `Fraunces` — Elegant, editorial serif font for premium headings
- `Geist` — Ultra-modern sans-serif (made by Vercel) for body and UI text
- `Playfair Display` — Classic, high-end serif for special callout text

This combination of 4 distinct fonts shows serious typographic effort. The contrast between the serif and the modern Geist creates a "luxury editorial" feel.

#### 📐 Page Structure & Sections (Top to Bottom)
1. **Navbar** — Likely sticky, minimal. Logo + navigation links.
2. **Hero Section** — The sakura tree illustration or 3D scene. Event title "Code2Create 7.0", dates, and a registration CTA.
3. **About Section** — What the hackathon is, its legacy, and what edition this is (7th edition signals credibility and history).
4. **Problem Statements / Tracks** — Domain-specific challenges.
5. **Timeline / Schedule** — Event flow from registration to results.
6. **Prizes** — Prize pool display.
7. **Sponsors** — Partner logos.
8. **FAQ** — Accordion-based.
9. **Footer** — Contacts and socials.

#### ⚡ Interactions & Animations
- Given the nature of the theme (sakura petals), there are almost certainly falling petal particle animations in the background.
- The extremely dark background makes any glowing element (text, buttons, borders) pop dramatically.
- Scroll-triggered reveals with cinematic transitions between sections.

#### 🛠️ Technical Stack (Observed from HTML)
- **Framework:** React + Vite (confirmed from `/assets/index-BW2q0tx6.js` — this is Vite's fingerprinted output format).
- **Styling:** CSS Modules or Tailwind (given the Vite setup).
- **Analytics:** Cloudflare Web Analytics (from `beacon.min.js` in the body).
- **CDN:** Cloudflare (for asset delivery and analytics).
- **SEO:** Full Open Graph, Twitter Cards, theme-color.
- **Icons:** SVG-based logo.

#### ✍️ Copywriting Style
- Punchy tagline: "Don't just code for the vibes, Code2Create." — This is brilliant. It speaks directly to its Gen Z audience.
- The name "Code2Create" itself is rhythmic and memorable.

---

## Website 3 — Hackfest: INNOV8 TMRW (CESA × VIT Mumbai)

**🔗 URL:** https://www.hackfestvit.tech  
**📍 Organized by:** CESA (Computer Engineering Students' Association), VIT Mumbai  
**📅 Event Date:** February 16 – March 7, 2026  
**⏱️ Duration:** Multi-round (Abstract → PPT → Pitching)  
**📏 Type:** National | Hybrid (Online Round 1, Offline Final)

---

### What We Saw & Observed

#### 🎨 Design & Visual Language
- **Theme:** Bold, space/infinity-inspired. Tagline is "Build Beyond Infinity."
- **Navigation:** Sticky navbar with links: `Home`, `About`, `Domains`, `Event-Flow`, `Contact` — clean and minimal.
- **Mood:** Modern, energetic, dark. Uses a "countdown timer" prominently in the Hero section (Days, Hrs, Min, Sec).

#### 📐 Page Structure & Sections (Fully Documented)

**1. Navbar**
Sticky. Links: Home | About | Domains | Event-Flow | Contact. Clean and simple.

**2. Hero Section**
- Tagline: **"BUILD BEYOND INFINITY"**
- Dates displayed: `16 Feb – 7 March 2026 | CESA X VIT Mumbai`
- Live Countdown Timer: Days / HRS / MIN / SEC
- CTA button (Register/Explore)

**3. About Section: "What is INNOV8 TMRRW?"**
- Full description: "HACKFEST – INNOV8 TMRW is a structured, multi-round hackathon initiative by CESA-VIT designed to transform innovative ideas into real-world solutions..."
- Three highlight cards/badges below:
  - `Structured Innovation Journey → Multi-Stage Competition`
  - `Diverse Real-World Challenges → Multiple Domains`
  - `Guidance. Evaluation. Excellence. → Mentorship & Recognition`

**4. Domains Section: "Choose a domain, solve real-world challenges, and build beyond limits"**

| Track | Problem Statements |
|---|---|
| AI/ML/GenAI | Intelligent Energy Management for Educational Institutions |
| AI/ML/GenAI | Predictive Maintenance for Urban Systems |
| Web Development | Streamlined Community Issue Management System |
| Web Development | Smart Professional Opportunity Matching System |
| Social Impact | Smart Food Waste Reduction and Donation System |
| Social Impact | Data-Driven Service Equity Analysis |
| Agriculture | Intelligent Agricultural Decision Support |
| Agriculture | Computer Vision for Crop Damage Analysis |
| Healthcare | AI-Assisted Healthcare Triage |
| Healthcare | Predictive ICU Monitoring System |

**5. Event-Flow Section (Timeline)**
- **Phase 1:** Problem Statement Release on Unstop. Registration opens.
- **Phase 2:** Submit Abstract or PPT. Evaluated on innovation, feasibility, clarity.
- **Phase 3:** Shortlisting Announcement. Selected teams get new PS + pay ₹200.
- **Phase 4:** Online Mentorship Day at 8 PM. Technical guidance sessions.
- **Phase 5:** Final Pitching & Evaluation (Offline). On-campus presentations. Winner declaration.

**6. Prize Pool Section: "Reward Beyond Infinity"**
- 🥇 **Winner:** ₹15,000
- 🥈 **1st Runner-Up:** ₹8,000
- 🥉 **2nd Runner-Up:** ₹5,000
- 🎁 **Special Goodies:** Swag & Gear for winners

**7. Rules & Guidelines**
1. Teams of 2–4 members. Registration + submission within deadlines.
2. All work must be original. Plagiarism = disqualification.
3. Judged on innovation, feasibility, impact, and clarity.
4. Shortlisted teams must attend mentoring round.
5. Professional and ethical conduct expected.

**8. FAQ Section**
- Eligibility: All undergrads with technical knowledge. Teams of 2–4.
- Fee: ₹200 only for shortlisted Round 2 teams.
- Submission: Abstract or PPT in prescribed format.
- Judging: Innovation, feasibility, clarity, relevance, impact.
- Round 2: New problem statements provided.
- Mentoring: Mandatory for shortlisted teams.

**9. Sponsors & Partners**
- Header: "Powering Innovation Beyond Infinity"
- Logo grid of sponsors by tier.

**10. Footer**
- Event Info: 16 Feb – 7 March 2026 | Hybrid Mode | VIT Mumbai
- Contact: cesa.vidyalankar@gmail.com
- Contact Persons: Riya (+91 91360 28906), Bhavika (+91 81890 97092)
- Footer tagline: "Build. Beyond. Infinity."

#### 🛠️ Technical Stack (Observed)
- Standard React/Vite SPA or HTML/CSS/JS given the simpler structure.
- Multi-round event format — has its own workflow and registration logic.

#### ✍️ Copywriting Style
- Aspirational: "Build Beyond Infinity", "Reward Beyond Infinity".
- The word "infinity" is used as a recurring motif — very intentional branding.
- Detailed domain descriptions help participants self-select their best fit.

---

## 📊 Side-by-Side Comparison of All 3 Websites

| Feature | Hack the North | Code2Create 7.0 | Hackfest VIT |
|---|---|---|---|
| **Theme** | Whimsical / Illustrated | Japanese Sakura / Elegant | Space / Infinity |
| **Color Mood** | Dark Purple + Coral | Near-Black + Soft Pink | Dark + Bold |
| **Duration** | 36 Hours | 48 Hours | Multi-round (Weeks) |
| **Scale** | International | National | National |
| **Typography** | Playful + Rounded | Editorial Serif + Modern | Bold Modern |
| **Framework** | React (CRA) | React + Vite | Unknown (likely React/Vite) |
| **Analytics** | Fathom (privacy-first) | Cloudflare | Unknown |
| **Countdown Timer** | ✅ Yes | ✅ Yes | ✅ Yes |
| **Sponsor Grid** | ✅ Yes | ✅ Yes | ✅ Yes |
| **FAQ Accordion** | ✅ Yes | ✅ Yes | ✅ Yes |
| **Scroll Animations** | ✅ Yes (animate.css) | ✅ Yes (Framer/GSAP likely) | ✅ Yes |
| **Custom Art / 3D** | ✅ Heavy illustrated art | ✅ Sakura scene | Moderate |
| **OG/Social Preview** | ✅ Full setup | ✅ Full setup | ✅ Full setup |
| **PWA Support** | ✅ Yes | ✅ Yes | Unknown |
| **Recurring motif word** | "Dream Big" | "vibes / Create" | "Infinity" |

---

## 🏆 What We Can Take & Build Better For JARVIS

Here is everything valuable extracted from all 3 websites, and how we make it even better for the **JARVIS: Iron Man-themed hackathon**.

### From Hack the North ✅
| What They Did | How We Supercharge It for JARVIS |
|---|---|
| Custom illustrated visual world | Build a **Iron Man HUD / Arc Reactor 3D visual world** using Three.js or Spline |
| Warm inclusive copywriting | Use **J.A.R.V.I.S. AI dialogue style**: "Welcome back, sir. Systems fully operational." |
| Scroll animations with animate.css | Upgrade to **Framer Motion + GSAP** for cinematic HUD reveals and scan lines |
| Stats section with big numbers | "2,000+ Registered Operatives | 48 Hours | ₹50,000+ in Stark Grants" |
| PWA-ready setup | Make JARVIS installable as a home screen app — with Iron Man icon |
| Privacy-first analytics (Fathom) | Adopt Fathom — classy, GDPR-safe, and lightweight |
| Parallax floating elements | Replace stars with **floating holographic HUD fragments** |

### From Code2Create 7.0 ✅
| What They Did | How We Supercharge It for JARVIS |
|---|---|
| Cinematic OG/social preview image | Design a **dark arc reactor poster** — glowing cyan on black |
| 4-font expressive typography | Use `Orbitron` (HUD numbers) + `Rajdhani` (headings) + `Inter` (body) |
| Sakura falling particle effect | Create **Arc Reactor particle bursts** and cyan energy pulse animations |
| React + Vite for fast builds | ✅ We also use Vite — right call for performance |
| Tagline that speaks to audience | Our tagline: **"Activating Intelligence. Assembling Innovators."** |
| Edition number builds legacy | Call it **JARVIS: Protocol 1.0** — implies future editions, builds legacy |
| Extremely dark background | We go pure obsidian (`#050505`) — makes cyan glow elements pop brilliantly |

### From Hackfest VIT ✅
| What They Did | How We Supercharge It for JARVIS |
|---|---|
| Fully documented domain tracks | Rename tracks to **J.A.R.V.I.S. / F.R.I.D.A.Y. / E.D.I.T.H. / H.O.M.E.R.** AI protocols |
| Detailed multi-step event flow timeline | Style timeline as a **Stark Mission Briefing / flight-path board** |
| Clear prize breakdown | Rename to **"Stark Grants"** — glowing podium presentation with trophy icons |
| FAQ section | Style as **"Query the AI Database"** — answers type out like a terminal response |
| Contact info in footer | Frame as **"Open Communication Channel"** with tech-styled contact cards |
| Rules listed clearly | Rename to **"Protocol Guidelines"** — numbered like classified documents |
| Countdown timer in hero | Style as **reactor charge-up bar + digital timer** |
| Highlight feature cards in About | Use **hexagonal HUD card panels** instead of plain rectangles |

---

## 🔑 Final: Non-Negotiable Features List for JARVIS Website

Based on everything observed across all 3 websites, these are the must-haves:

- [ ] Sticky Navbar (transparent → solid on scroll, with JARVIS logo)
- [ ] Boot Sequence / Loading Screen (terminal text animation on first load)
- [ ] Hero Section with 3D Arc Reactor visual + CTA `[ INITIALIZE_REGISTRATION ]`
- [ ] Live Countdown Timer (reactor-styled)
- [ ] About / Mission Section ("The Stark Initiative")
- [ ] Thematic Problem Statement Tracks (J.A.R.V.I.S. / F.R.I.D.A.Y. / E.D.I.T.H. / H.O.M.E.R.)
- [ ] Step-by-Step Event Timeline (Mission Briefing style)
- [ ] Prize Pool Section — "Stark Grants" (visually stunning podium design)
- [ ] Sponsor / Partner Grid — "Stark Industries Partners" (hexagonal grid, tier-based)
- [ ] Rules & Guidelines — "Protocol Guidelines"
- [ ] FAQ Accordion — "Query AI Database" (terminal typing animation on expand)
- [ ] Footer with Contact & Socials — "Open Communication Channel"
- [ ] Fully configured OG & Twitter Card meta tags (Arc Reactor banner image)
- [ ] Mobile Responsive (hamburger menu, single-column reflow)
- [ ] Scroll Animations (every section has a Framer Motion reveal)
- [ ] Custom Cursor (Iron Man HUD crosshair)
- [ ] Glow effects on all interactive elements (buttons, borders, cards)
- [ ] Dark theme: Obsidian `#050505` + Arc Reactor Cyan `#00F0FF` + Stark Crimson `#E62429`

---

*This document is a living reference for the JARVIS hackathon website build. All creative and technical decisions should circle back to these observations.*
