# Venture-Ready Platform
### A PM Case Study — EdTech Platform Reinvention
**Prepared for Globant EdTech Studio | PM / Delivery Manager Interview**

[View the interactive prototype →]([YOUR-LOVABLE-URL-HERE](https://venture-ready-flow.lovable.app/))

## What This Is

This is a complete product management case study built for a technical interview
at Globant. The challenge: a university EdTech platform with a critical problem:
80% absence rate in theoretical content, while hands-on classes maintain 95%
attendance. 

This repository contains the full strategic proposal, the interactive prototype,
and the reasoning behind every product decision.

## The Core Insight

The 80% absence rate is not a motivation problem.
It is a **delivery architecture problem.**

The platform was built on a sequence that learning science has proven does not
work: learn theory first, apply it later. By the time "later" arrives, motivation
is gone. Students vote with their feet — they show up where consequences are real.

**The solution:** Theory-as-a-Service (TaaS). Theory stops being a destination
the student must visit. It becomes a service that appears exactly when needed,
in the right format, without being asked — like Google Maps, not like a library.

## Inspiration — Tetr DNA

This proposal is informed by the model of
[Tetr College of Business](https://tetr.com), winner of the QS Gold Award for
Most Innovative Business School of 2025.

Tetr's approach: students launch real businesses with real money in countries
they have never visited. Dropshipping in India. Kickstarter in China. NGOs in
Ghana. The first cohort generated real revenue — one company reached $18,000
in sales.

**The principle borrowed:** When ignorance has a real cost, learning intensity
maximizes. Theory appears as a survival tool, not a requirement.

Three Tetr principles adapted to digital scale:

- **Skin in the Game** — Every theory module anchored to a Venture Challenge
  with a real deliverable
- **Demo Day as Deadline** — Sprint Showcases replace quizzes as the motivation
  engine
- **Context Creates Relevance** — Theory delivered by application context, not
  academic topic

## The Six-Point Proposal

### 1. Product Vision

**"We don't train students to know things. We train them to do things."**

The Venture-Ready Platform converts every moment of friction in practical
learning into an opportunity to deliver the exact theory the student needs at
that moment. Theory stops being a module to pass and becomes fuel for not
failing at something real.

**Differentiation:**
Coursera/ Udemy sell access to content, while a venture-ready platform sells execution capacity.
Traditional learning platforms measure success by completed videos, whereas a venture-ready platform measures success by real decisions made.
In conventional platforms, theory comes before practice; in a venture-ready platform, theory is triggered by practice and real-world execution.
Traditional platforms rely on static content delivery, while a venture-ready platform provides AI-adaptive, contextual delivery.


### 2. Product Goals & Strategy

**Strategy: Theory-as-a-Service (TaaS)**

**OKR 1 — Engagement in theoretical content**
- Objective: Make theory sought, not avoided
- KR1: Reduce theory absences from 80% to 35% in 6 months
- KR2: 60% of theory access occurs from within a Venture Challenge context
- KR3: Theory module NPS ≥ 40 by end of Q2

**OKR 2 — Completion rate and retention**
- Objective: Students finish what they start
- KR1: Increase complete cycle completion rate to 65% in 12 months
- KR2: Reduce month-1 churn from 45% to 20%
- KR3: 55% of active users complete at least one full cycle per week

**OKR 3 — Satisfaction and perceived value**
- Objective: Students feel every minute is worth it — and tell others
- KR1: Global CSAT ≥ 4.4/5.0 measured quarterly
- KR2: 40% of active students publish at least one deliverable in their
  Competency Portfolio by Q3
- KR3: 20% of new registrations from organic referrals

---

### 3. Roadmap Definition

Three improvement areas, each derived from one Tetr principle:

**Area 1: Contextual Theory Injection**
From principle: *Context Creates Relevance*

AI-triggered micro-content embedded in the practical activity flow, activated
by friction signals: inactivity over 90 seconds, recurring edit-delete patterns,
velocity significantly below cohort average. Directly attacks OKR 1.

**Area 2: Venture Challenge Engine**
From principle: *Skin in the Game*

Every practical activity becomes a structured challenge with a real business
briefing, contextual theory resources, a clear deliverable, and an evaluation
rubric executable by self, peers, or instructor. Attacks OKR 2.

**Area 3: Sprint Showcase & Competency Portfolio**
From principle: *Demo Day as Deadline*

An async video presentation at module close evaluated by peers, plus a
professional portfolio that builds automatically as students complete challenges.
Attacks OKR 3.

**Quarterly Timeline:**

|**Q1 — Foundation: Make theory findable**
Key deliverables include the CTI MVP, behavior tracking, micro-surveys, progress tracker redesign, and Smart Nudge v1.
Success metrics: absences reduced from 80% to 55%, and CTI adoption above 40%.

**Q2 — Scale: Make progress visible**
Key deliverables include CTI with AI matching, the Peer-Review Engine, Sprint Showcase, Portfolio v1, and Smart Nudge v2.
Success metrics: 40% cycle completion, CSAT above 4.2, and churn below 25%.

**Q3 — Reinvention: Make learning indistinguishable from doing**
Key deliverables include the AI Learning Companion, Adaptive Curriculum Engine, Instructor Co-Pilot, and Career Path Connector.
Success metrics: absences below 20%, NPS above 42, and referrals reaching 15%.

---

### 4. Feature Prioritization — RICE Framework

**Formula:** Score = (Reach × Impact × Confidence) ÷ Effort

Smart Nudge System — Reach: 10,000 · Impact: 2.0 · Confidence: 85% · Effort: 5 weeks · RICE Score: 3,400 · Priority: P0 — Q1
Adaptive Progress Dashboard — Reach: 10,000 · Impact: 1.5 · Confidence: 90% · Effort: 4 weeks · RICE Score: 3,375 · Priority: P1 — Q1
Contextual Theory Injection ⭐ — Reach: 8,500 · Impact: 3.0 · Confidence: 80% · Effort: 7 weeks · RICE Score: 2,914 · Priority: P0 — Q1
Venture Challenge Engine — Reach: 9,000 · Impact: 3.0 · Confidence: 85% · Effort: 10 weeks · RICE Score: 2,295 · Priority: P0 — Q1
Peer-Review + Sprint Showcase — Reach: 6,500 · Impact: 2.5 · Confidence: 70% · Effort: 8 weeks · RICE Score: 1,422 · Priority: P1 — Q2

⭐ *Highest strategic importance despite not having the highest RICE score.*

**The key distinction:** RICE measures speed of impact, not strategic importance.
The Smart Nudge leads in score because it is fast and generates data from day
one. The CTI leads in strategic importance because it changes the knowledge
delivery logic of the entire system. Quick wins fund strategic bets. That is
portfolio management, not just backlog prioritization.

**Why the AI Learning Companion is not in the top 5:**
It needs months of real behavior data to function well. Q1 and Q2 data are its
fuel. Building it in Q1 would mean training a model on insufficient data.
It is the Q3 north star — the reason the roadmap is sequenced the way it is.

---

### 5. User Experience — Contextual Theory Injection

**The design rule:** Theory never interrupts the practical flow.

**User Flow — 9 Steps:**

```
Step 1 → Student opens Venture Challenge with real business briefing
Step 2 → Student starts working, gets stuck on a decision
Step 3 → Platform detects friction (90s inactivity + edit-delete pattern)
Step 4 → CTI Panel appears in right sidebar — non-blocking, smooth expansion
Step 5 → Student selects format: Audio 4 min / Infographic / Real case
Step 6 → Micro-content consumed inline, zero friction to return to editor
Step 7 → Student resumes with the conceptual framework they needed
Step 8 → Deliverable completed and submitted, competency auto-recorded
Step 9 → Cycle close: connected concepts surfaced, Portfolio updated
```

**Wireframe — Screen Layout:**

```
┌─────────────────────────────────────────────────────────────┐
│  ● ● ●   learnos.platform/challenge/3.2                     │
├──────────────────────────────────┬──────────────────────────┤
│                                  │                          │
│   CHALLENGE WORKSPACE (65%)      │   CTI PANEL (35%)        │
│                                  │                          │
│  ┌─────────────────────────┐     │  State 1 — Inactive      │
│  │ Briefing (collapsible)  │     │  Thin bar, brain icon    │
│  └─────────────────────────┘     │                          │
│                                  │  State 2 — Active        │
│  ┌─────────────────────────┐     │  ┌──────────────────┐   │
│  │                         │     │  │ Monetization     │   │
│  │   Editor (free text)    │     │  │ Models           │   │
│  │                         │     │  ├──────────────────┤   │
│  │                         │     │  │ [Audio] [Chart]  │   │
│  │                         │     │  │ [Case Study]     │   │
│  └─────────────────────────┘     │  └──────────────────┘   │
│                                  │                          │
│  ○ Briefing  ● Work  ○ Submit    │  State 3 — Completed     │
│  ○ Review    ○ Portfolio         │  ✓ Concept consumed      │
│                                  │    "Go deeper →"         │
└──────────────────────────────────┴──────────────────────────┘
```

---

### 6. Product Increment

**The principle:** We are not demolishing the building to construct a new one.
We are adding a smart home system to an existing structure. The rooms are the
same. The structure is the same. But now the building learns how you live in it.

**Before → After Map:**

The current MVP uses a theory module based on linear videos and PDFs, while the product increment introduces micro-units enriched with contextual metadata and CTI delivery at friction moments.
The current experience offers standalone practical activities, whereas the new model evolves them into Venture Challenges with business briefings, evaluation rubrics, and integrated CTI Panels.
Progress tracking currently measures percentage of content viewed; the new system tracks three dimensions: completed cycles, unlocked competencies, and portfolio evidence generated by the learner.
Current assessments focus on recalling concepts and definitions, while the upgraded approach evaluates applied decision-making through scenario-based recommendations.
Notifications today are sent on fixed schedules, but the Smart Nudge system introduces behavioral triggers based on user activity and engagement patterns rather than time slots.
The MVP currently lacks peer evaluation capabilities, while the new platform incorporates a Peer-Review Engine embedded inside Sprint Showcase experiences.
There is currently no professional identity layer for learners, but the increment introduces a public, shareable, auto-updated Competency Portfolio.
Feedback is currently delivered through quarterly reports, whereas the upgraded system provides a real-time AI signal dashboard that continuously feeds weekly product and learning backlog decisions.

**Nothing gets thrown away. Everything gets enriched.**

---

## Business Case
Theory absence rate is currently at 80%, with a target reduction to 20% within 9 months.
Month-1 churn currently stands at 45%, with a goal of reducing it to 20% over the next 6 months.
Course completion rate is approximately 20% today, with a target increase to 65% within 12 months.
Theory module NPS is currently around 15, with a goal of reaching 42 in 6 months.
Organic referrals are currently below 5%, with a target of increasing them to 15% within 12 months.

**Financial projection:**
Reducing month-1 churn from 45% to 20% across 5,000 active users retains
approximately 850 additional users. At an average LTV of $800, that represents
**~$680,000 in protected revenue**. Q1 investment: approximately 6 person-weeks.
Positive ROI from month four.

---

## The AI Layer
The platform uses four intelligence layers that feed each other continuously:

```
User behavior signals
        ↓
AI detects friction pattern
        ↓
Immediate contextual action (CTI, Nudge, Instructor Alert)
        ↓
Outcome improved + data recorded
        ↓
Weekly backlog signal for PM
        ↑_________________________________↩
```

Feedback channels — surveys, support tags, drop-off analytics — are not inputs
for quarterly reports. They are real-time fuel for product decisions.

---

## About This Project

**Role:** Product Manager / Delivery Manager candidate  
**Company:** Globant — EdTech Studio  
**Interview stage:** Technical homework assignment  
**Time to build:** 5 hours (strategy) + 1 hour (prototype)  
**Tools used:** Claude (strategy development), Lovable (prototype), Figma (wireframe)

**Frameworks applied:**
- RICE prioritization
- OKR goal-setting
- Jobs-to-be-Done for user behavior analysis
- Agile roadmap sequencing
- Theory-as-a-Service (TaaS) — original framework developed for this proposal

---

## Skills Demonstrated

- Product vision definition and differentiation strategy
- Quantitative goal-setting with OKRs and business metrics
- Roadmap sequencing with dependency logic
- Feature prioritization using RICE with strategic nuance
- UX flow design and wireframe description
- Product increment mapping (build on existing, not replace)
- AI-powered feature design (CTI, Smart Nudge, Adaptive Curriculum)
- Business case construction with LTV and ROI framing
- Stakeholder communication and PM storytelling

---

## Contact

**Nat** — Product Manager / Delivery Manager  
Based in Colombia · Available for remote US-based roles  
[[LinkedIn](#) ](https://www.linkedin.com/in/natalia-alzate-usuga/)

---

*"The 80% absence rate is not a motivation problem.
It is a delivery architecture problem. We solved it."*

