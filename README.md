# acep.ac.th

Assumption College English Program — official website.

## About

Static landing page for ACEP (โรงเรียนอัสสัมชัญ English Program) under
the Saint Gabriel's Foundation of Thailand. Flagship message:
**"Lead AI, not Live AI"** — บุตรหลานของเราต้อง _นำ_ AI ไม่ใช่ _ตาม_ AI.

## Stack

- Static HTML / CSS — no build step
- Fonts: Playfair Display (serif) + Sarabun (Thai sans) via Google Fonts
- Designed to deploy on **Cloudflare Pages** (DNS already on Cloudflare)

## Structure

```
acep.ac.th/
├── index.html              ← Leading AI landing page
├── assets/
│   ├── css/style.css
│   └── img/acep-campus.jpg
└── README.md
```

## Sections (in `index.html`)

1. **Nav** — sticky top
2. **Hero** — "Lead AI / not Live AI" + CTA
3. **The Stake** — why this matters (energy/food/tech driven by AI)
4. **The Skill — 4 Pillars** — Systematic Prompt · Trust · Speed · Teamwork
5. **The Catholic Difference** — virtue as foundation of trust
6. **The Network** — 14 schools alumni network
7. **The Promise** — curriculum design + teaching technique
8. **Admission** — placeholder contact form
9. **Footer** — cross-links to fsgthailand / thaibrothers / montfortian

## TODOs (placeholder content)

- [ ] Phone number
- [ ] Email address
- [ ] School address
- [ ] Real photos (campus, students, classrooms, faculty)
- [ ] Apply form (or registration link)
- [ ] Logo file (currently using "ACEP" text mark)
- [ ] Domain transfer / Cloudflare Pages setup (Phase 2 governance)

## Deployment plan

1. Push this repo to GitHub
2. Get Cloudflare account access (Phase 1 of governance plan)
3. Connect repo to **Cloudflare Pages** → auto-build on push
4. Add custom domain `acep.ac.th` (DNS already on Cloudflare ✓)
5. Cutover from old site (whenever ready)

## Identity context

Per `brobook-memory/identity_brothers_vs_foundation.md`:
- ACEP is a **school** under the Foundation (mission: education, 15 schools)
- This site does NOT carry religious-life content (that lives on montfortian.net)
- Cross-link to fsgthailand / thaibrothers / montfortian via footer

## License

Owned by Assumption College English Program (legal domain holder).
