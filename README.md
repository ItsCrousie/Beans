# Beans

**Beans** is an unpretentious TypeScript budgeting **Progressive Web App (PWA)** for tracking recurring personal expenses and shared household costs.

It is designed to be:
- **Approachable**
- **Offline-first**
- **Freeware**
- **Student-friendly**
- **Built to encourage healthy financial habits and shared responsibility**

Beans aims to make managing shared finances simple, transparent, and low-stress — especially for students and roommates.

---

## Design Pillars

### 🌱 Approachable by Default
Beans avoids financial jargon, complex charts, and intimidating dashboards. The UI focuses on clarity and plain language so that anyone can pick it up and start using it immediately — no instructions required.

### 🧑‍🤝‍🧑 Built for Shared Households
Whether you live with a partner or multiple roommates, Beans is designed around the reality of shared living:
- Household expenses are split fairly
- Each user controls their own entries
- Disagreements can be flagged without overwriting someone else’s data

### 📱 Offline-First & Local-First
Beans works without an internet connection. All data is stored locally on the user’s device, allowing it to function reliably anywhere. When connectivity is available, devices sync changes seamlessly.

### 🔐 Respectful of Privacy
No accounts. No ads. No data harvesting.  
All financial data remains on users’ devices and is encrypted at rest.

### 🎓 Freeware for Students
Beans is intended to be distributed free of charge to students, especially those navigating shared housing for the first time. Budgeting should not be gated behind subscriptions — particularly for people who are already stretched financially.

### 💰 Focused on Stability, Not Guilt
Beans isn’t about shaming spending habits. It’s about:
- Visibility
- Fairness
- Long-term financial stability
- Building healthier relationships with money

---

## App Lore

<details>
  <summary><strong>Why Beans Exists</strong></summary>

My partner and I decided early into our relationship that we would share all household expenses 50-50 so that no one felt either dependent or like a provider.<br/><br/>

I drafted a simple budget in Google Sheets, which worked well at first. However, about 1.5 years into our relationship, constantly adding new sheets for monthly household expenses became unwieldy and frustrating.<br/><br/>

I’ve been in post-secondary education for nearly three years now following my graduation of Hack Reactor (a WebDev coding bootcamp), and during that time I hadn’t touched web development — TypeScript, CSS, or HTML — at all, being busy with school projects and coursework. Meanwhile, continuing to run our budget in Sheets became increasingly unsustainable.<br/><br/>

So I decided to build Beans (like coffee beans, or bean counting — very unclever, I know). The goal is to create something genuinely useful for us, while also distributing it as freeware to students at my university, so that managing shared finances is simple, accessible, and free of charge — because students are, on average, broke.

</details>

---

## Technical Overview (High-Level)

- **TypeScript** (no framework)
- **Progressive Web App (PWA)**
- **Offline-first architecture**
- **Local persistence (IndexedDB)**
- **Client-side encryption**
- **Event-based sync model**
- **No central authority or backend database**

Beans is intentionally built “from scratch” to prioritize learning, clarity, and long-term maintainability over convenience abstractions.

---

## AI Usage Disclosure

Undertaking a project of this scope while approaching the end of Q1 of the semester (exam season) has been challenging as a solo developer.

I have used **ChatGPT** and **Google Gemini Pro** as learning aids to:
- Refresh dormant web development knowledge
- Understand modern PWA concepts
- Reason about distributed, offline-first systems

**No code is copy-pasted.**  
All implementation is written manually with the explicit goal of rebuilding fluency and deepening understanding.

---

## Project Status

Beans is an active solo-developer project intended for:
- Personal use
- Peer usability testing
- Distribution as freeware
- Inclusion as a portfolio and résumé project

Contributions, suggestions, and feedback are welcome once the core MVP stabilizes.
