# OffSpot
### Async video interviews, on your terms.

> *"You can't claim to be an inclusive employer and make every candidate perform under pressure."*

OffSpot is an inclusive hiring platform that removes real-time interview pressure from the equation. Candidates record video answers at their own pace — pausing, re-recording, and taking breaks as needed. Employers review responses blind, with names and photos hidden until they choose to shortlist.

Built for people who have something real to offer the world — just not necessarily on the spot.

---

## Why OffSpot exists

1 in 4 adults lives with a disability. Many more experience anxiety, processing differences, chronic illness, or circumstances that make high-pressure live interviews a barrier — not a measure of ability.

Traditional interviews test performance under stress. Most roles don't require that. OffSpot tests what actually matters: what a person knows, how they think, and what they can do.

---

## Features

- **Async video interviews** — candidates record on their own schedule, no live call required
- **Pace selector** — Relaxed (5 min, unlimited re-records), Standard, No time limit, or Written-only mode
- **Accessibility by default** — live captions, read-aloud prompts, and low-stimulation UI are on from the start, not buried in settings
- **Blind-first employer review** — names and photos are hidden until an employer actively shortlists a candidate
- **No-ghosting commitment** — employers are held to a 5-day response window
- **Free for job seekers** — always

---

## Screens

| Screen | Description |
|---|---|
| Home | Mission statement, dual entry points (candidate / employer) |
| Job listings | Roles tagged by pace type and format |
| Interview setup | Pace selector + accessibility toggles |
| Interview room | Video recording with re-record, pause, captions |
| Review & submit | Answer review, portfolio link, applicant note |
| Employer dashboard | Blind applicant list, shortlist action, profile reveal |

---

## Tech stack

| Layer | Tool |
|---|---|
| Prototype | HTML / CSS / Vanilla JS |
| Backend (v1) | Google Sheets |
| App layer (v1) | Google AppSheet or Google Antigravity |
| Video intake | Loom (free tier) — candidates paste link |
| Deployment | Google Cloud / Vercel |
| Design tokens | Custom CSS variables — teal `#1D9E75`, warm gray `#F1EFE8` |

---

## Getting started

```bash
# Clone the repo
git clone https://github.com/your-username/offspot-app.git
cd offspot-app

# Install dependencies and start the local development server
npm install
npm run dev
```

To run the full app with data:
1. Create a Google Sheet with 'Jobs' and 'Applicants' tabs.
2. Link the sheet to the app via Google Apps Script (details in docs).
3. Deploy as a public web app on Vercel.

---

## Accessibility commitments

- Captions **on by default** — not opt-in
- Minimum **16px** body font
- Minimum **44px** touch targets on all interactive elements
- High contrast ratio across teal/gray palette
- Written-only mode available for every question
- No time limits unless the candidate chooses them
- Re-recording is always available before submission

---

## Roadmap

- [ ] Native video recording (no Loom dependency)
- [ ] SMS/email notifications for applicants
- [ ] Employer response tracking and accountability dashboard
- [ ] Screen reader audit (WCAG 2.1 AA)
- [ ] API for ATS integration (Greenhouse, Lever, Workday)
- [ ] Employer inclusivity rating — public-facing score

---

## Contributing

OffSpot is early and open. If you work in disability advocacy, inclusive HR, or accessible design — pull requests and issues are welcome. Please read `CONTRIBUTING.md` before submitting.

If you have a lived experience of being screened out by traditional interviews, open an issue and tell us what would have helped. That's the most valuable contribution of all.

---

## License

MIT License — free to use, fork, and build on.

---

## Built by

**Sindarity** — The Advocacy Foundry  
Canton, Ohio  
[sindarity.com](https://sindarity.com) · [@offspotapp](https://twitter.com/offspotapp)

*Sindarity builds advocacy infrastructure for people navigating systems that weren't designed with them in mind.*

---

*Your pace. Your place.*
