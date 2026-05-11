import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

const NAV = [
  { id: "vision", label: "Vision" },
  { id: "strategy", label: "Strategy" },
  { id: "roadmap", label: "Roadmap" },
  { id: "features", label: "Features" },
  { id: "ux", label: "UX Flow" },
  { id: "increment", label: "Increment" },
];

function useScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setP(total > 0 ? (h.scrollTop / total) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return p;
}

function useActiveSection() {
  const [active, setActive] = useState("vision");
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + 140;
      let current = "vision";
      for (const { id } of NAV) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return active;
}

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
}

function Navbar({ active }: { active: string }) {
  return (
    <nav
      className="fixed left-0 right-0 z-40 bg-background"
      style={{ top: 3, borderBottom: "1px solid #1E1E1E" }}
    >
      <div className="container-vr flex items-center justify-between" style={{ height: 64 }}>
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-3">
          <span className="text-white font-bold" style={{ fontSize: 16 }}>
            Venture-Ready Platform
          </span>
          <span className="tag tag-teal">Globant EdTech Studio</span>
        </button>
        <div className="hidden md:flex items-center gap-7">
          {NAV.map((n) => (
            <button
              key={n.id}
              onClick={() => scrollTo(n.id)}
              className="transition-colors"
              style={{
                fontSize: 14,
                color: active === n.id ? "#00C9A7" : "#A0A0A0",
              }}
            >
              {n.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

function ProgressBar({ p }: { p: number }) {
  return (
    <div
      className="fixed top-0 left-0 right-0 z-50"
      style={{ height: 3, background: "#0A0A0A" }}
    >
      <div style={{ width: `${p}%`, height: "100%", background: "#00C9A7", transition: "width 0.1s linear" }} />
    </div>
  );
}

function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center text-center"
      style={{ minHeight: "100vh", paddingTop: 120, paddingBottom: 80 }}
    >
      <div className="container-vr">
        <span className="tag tag-amber">PM Homework Assignment — Globant Interview</span>
        <h1
          className="mt-8 text-white font-bold mx-auto"
          style={{ fontSize: "clamp(36px, 6vw, 56px)", lineHeight: 1.1, letterSpacing: "-0.03em", maxWidth: 900 }}
        >
          The Venture-Ready Platform
        </h1>
        <p className="mt-6 mx-auto" style={{ fontSize: 20, color: "#A0A0A0", maxWidth: 760, lineHeight: 1.5 }}>
          A complete reinvention of how an EdTech platform delivers knowledge — inspired by Tetr × built for Globant.
        </p>
        <p
          className="mt-8 mx-auto italic"
          style={{ fontSize: "clamp(18px,2.2vw,24px)", color: "#00C9A7", maxWidth: 820, lineHeight: 1.4 }}
        >
          “No entrenamos estudiantes para que sepan. Los entrenamos para que puedan.”
        </p>

        <div className="mt-14 grid gap-5 sm:grid-cols-3 max-w-4xl mx-auto">
          {[
            { n: "80%", l: "Theory absences", s: "The problem we solve" },
            { n: "95%", l: "Hands-on attendance", s: "The benchmark we replicate" },
            { n: "2 yrs", l: "Since MVP launch", s: "The reinvention moment" },
          ].map((s) => (
            <div key={s.n} className="vr-card p-6 text-left">
              <div style={{ color: "#00C9A7", fontSize: 44, fontWeight: 700, letterSpacing: "-0.03em" }}>{s.n}</div>
              <div className="text-white mt-2" style={{ fontSize: 15, fontWeight: 500 }}>{s.l}</div>
              <div className="mt-1" style={{ color: "#A0A0A0", fontSize: 12 }}>{s.s}</div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => scrollTo("vision")}
        aria-label="Scroll down"
        className="vr-arrow mt-16"
        style={{ color: "#00C9A7" }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </section>
  );
}

function SectionHeader({ tag, title, subtitle }: { tag: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-12">
      <span className="tag tag-teal">{tag}</span>
      <h2 className="h-section mt-5">{title}</h2>
      {subtitle && (
        <p className="mt-4" style={{ color: "#A0A0A0", fontSize: 16, maxWidth: 820, lineHeight: 1.6 }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

function BorderCard({
  border,
  children,
  className = "",
}: {
  border?: "teal" | "amber" | "coral";
  children: React.ReactNode;
  className?: string;
}) {
  const colors: Record<string, string> = { teal: "#00C9A7", amber: "#F59E0B", coral: "#EF4444" };
  const c = border ? colors[border] : undefined;
  return (
    <div
      className={`vr-card p-7 ${className}`}
      style={c ? { borderLeft: `3px solid ${c}` } : undefined}
    >
      {children}
    </div>
  );
}

function Vision() {
  const principles = [
    {
      n: "01",
      t: "Skin in the Game",
      d: "Every theory module is anchored to a Venture Challenge with a real deliverable. Theory is not a prerequisite. It is fuel for not failing at something real.",
    },
    {
      n: "02",
      t: "Demo Day as Deadline",
      d: "Sprint Showcases replace quizzes as the motivation engine. When your work is evaluated publicly by peers, the cost of not finishing becomes visible.",
    },
    {
      n: "03",
      t: "Context Creates Relevance",
      d: "Theory is delivered by application context, not academic topic. Students do not search for module 3. The system delivers the pricing framework when they are designing their sales strategy.",
    },
  ];
  return (
    <section id="vision" className="section">
      <div className="container-vr">
        <SectionHeader tag="Product Vision" title="What problem are we really solving?" />
        <div className="grid md:grid-cols-2 gap-8">
          <BorderCard border="coral">
            <h3 className="text-white" style={{ fontSize: 18, fontWeight: 700 }}>The Real Problem</h3>
            <p className="mt-4" style={{ color: "#A0A0A0", fontSize: 15, lineHeight: 1.7 }}>
              The 80% theory absence rate is not a motivation problem. It is a delivery architecture problem. The
              platform was built on a sequence that learning science has proven does not work: learn theory first, apply
              it later. By the time “later” arrives, motivation is gone. Students vote with their feet — they show up
              where consequences are real and immediate.
            </p>
          </BorderCard>
          <BorderCard border="amber">
            <h3 className="text-white" style={{ fontSize: 18, fontWeight: 700 }}>The Insight — Tetr DNA</h3>
            <p className="mt-4" style={{ color: "#A0A0A0", fontSize: 15, lineHeight: 1.7 }}>
              Tetr College of Business solved this radically. Students launch real businesses with real money in
              countries they have never visited. Dropshipping in India. Kickstarter in China. NGOs in Ghana. The first
              cohort generated real revenue — one company reached $18,000 in sales. Theory does not precede the
              business. Theory appears when the business needs it to survive. That is the logic we are bringing to
              digital scale.
            </p>
          </BorderCard>
        </div>

        <div
          className="vr-card mt-8 p-10 text-center"
          style={{ borderLeft: "4px solid #00C9A7" }}
        >
          <h3 className="text-white" style={{ fontSize: 22, fontWeight: 700 }}>The Vision</h3>
          <p className="mt-5 mx-auto" style={{ color: "#FFFFFF", fontSize: 18, lineHeight: 1.6, maxWidth: 820 }}>
            We don't sell access to content. We sell execution capacity. Coursera and Udemy measure success in completed
            videos. We measure it in real decisions made, real problems solved, and real competencies demonstrated.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {principles.map((p) => (
            <div key={p.n} className="vr-card p-7">
              <div style={{ color: "#00C9A7", fontSize: 28, fontWeight: 700 }}>{p.n}</div>
              <h4 className="text-white mt-3" style={{ fontSize: 17, fontWeight: 700 }}>{p.t}</h4>
              <p className="mt-3" style={{ color: "#A0A0A0", fontSize: 14, lineHeight: 1.6 }}>{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Strategy() {
  const okrs = [
    {
      stripe: "#00C9A7",
      n: "01",
      title: "Engagement in theoretical content",
      obj: "Make theory sought, not avoided.",
      krs: [
        "Reduce theory absences from 80% to 35% in 6 months.",
        "60% of theory access occurs from within a Venture Challenge, not the navigation menu.",
        "Theory module NPS ≥ 40 by end of Q2.",
      ],
    },
    {
      stripe: "#F59E0B",
      n: "02",
      title: "Completion rate and retention",
      obj: "Students finish what they start.",
      krs: [
        "Increase complete cycle completion rate to 65% in 12 months.",
        "Reduce month-1 churn from estimated 45% to 20%.",
        "55% of active users complete at least one full cycle per week.",
      ],
    },
    {
      stripe: "#EF4444",
      n: "03",
      title: "Satisfaction and perceived value",
      obj: "Students feel every minute is worth it — and tell others.",
      krs: [
        "Global CSAT ≥ 4.4 out of 5.0 measured quarterly.",
        "40% of active students publish at least one deliverable in their Competency Portfolio by Q3.",
        "20% of new registrations come from organic referrals.",
      ],
    },
  ];
  return (
    <section id="strategy" className="section" style={{ background: "#070707" }}>
      <div className="container-vr">
        <SectionHeader tag="Product Goals & Strategy" title="Theory-as-a-Service" />

        <div className="vr-card p-8" style={{ borderColor: "#00C9A7" }}>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <div className="tag tag-teal">The Strategy</div>
              <h3 className="text-white mt-4" style={{ fontSize: 22, fontWeight: 700 }}>
                TaaS — Theory as a Service
              </h3>
              <p className="mt-4" style={{ color: "#A0A0A0", fontSize: 15, lineHeight: 1.7 }}>
                Today theory works like a library. The student must go find it, locate the right resource, read it, and
                then try to apply it in a different moment and context. We change the architecture. Theory works like
                Google Maps — it appears exactly when you need it, in the most useful format for that moment, without
                you having to ask for it.
              </p>
            </div>
            <div className="space-y-4">
              <div className="vr-card p-5">
                <span className="tag tag-coral">Before</span>
                <p className="mt-3" style={{ color: "#A0A0A0", fontSize: 14, lineHeight: 1.6 }}>
                  Student → navigates to theory → consumes → tries to apply later → motivation lost.
                </p>
              </div>
              <div className="vr-card p-5">
                <span className="tag tag-teal">After</span>
                <p className="mt-3" style={{ color: "#FFFFFF", fontSize: 14, lineHeight: 1.6 }}>
                  Student hits friction in challenge → system detects → theory appears → student applies immediately →
                  cycle complete.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 space-y-6">
          {okrs.map((o) => (
            <div key={o.n} className="vr-card overflow-hidden" style={{ borderLeft: `4px solid ${o.stripe}` }}>
              <div className="grid md:grid-cols-[260px_1fr] gap-8 p-7">
                <div>
                  <div style={{ color: "#3a3a3a", fontSize: 56, fontWeight: 800, lineHeight: 1 }}>{o.n}</div>
                  <h4 className="text-white mt-3" style={{ fontSize: 18, fontWeight: 700 }}>{o.title}</h4>
                  <p className="mt-2" style={{ color: "#A0A0A0", fontSize: 14 }}>{o.obj}</p>
                </div>
                <ul className="space-y-3 self-center">
                  {o.krs.map((k, i) => (
                    <li key={i} className="flex gap-3" style={{ color: "#A0A0A0", fontSize: 14, lineHeight: 1.6 }}>
                      <span style={{ color: "#00C9A7", marginTop: 7 }}>●</span>
                      <span>{k}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Roadmap() {
  const areas = [
    {
      color: "#00C9A7",
      tagClass: "tag-teal",
      n: "Area 01",
      title: "Contextual Theory Injection",
      principle: "From Tetr Principle: Context Creates Relevance",
      rationale:
        "The moment of maximum openness to theoretical learning is not when the student opens the module menu. It is when they are mid-challenge, blocked on a decision, knowing their deliverable depends on resolving it. That is the Tetr moment. That is when theory has survival value. Solution: AI-triggered micro-content embedded in the practical activity flow, activated by friction signals — inactivity over 90 seconds, recurring edit-delete patterns, velocity significantly below cohort average.",
      alignment:
        "Directly attacks OKR 1. When 60% of theory access occurs from within challenge context, the 80% absence problem transforms structurally. Students do not attend theory. They consume it because they need it.",
    },
    {
      color: "#F59E0B",
      tagClass: "tag-amber",
      n: "Area 02",
      title: "Venture Challenge Engine",
      principle: "From Tetr Principle: Skin in the Game",
      rationale:
        "High-intensity motivation requires something at stake. Not necessarily money — reputation, portfolio quality, or peer feedback is enough. The Engine defines: business briefing with real context, available resources including contextual theory, deliverable with clear criteria, evaluation rubric executable by self, peers, or instructor.",
      alignment:
        "Attacks OKR 2. When there is a real deliverable with peer evaluation, cycle completion rises because the cost of not finishing is visible.",
    },
    {
      color: "#EF4444",
      tagClass: "tag-coral",
      n: "Area 03",
      title: "Sprint Showcase & Competency Portfolio",
      principle: "From Tetr Principle: Demo Day as Deadline",
      rationale:
        "Solo learning does not sustain long-term motivation. The Showcase is an async video presentation uploaded at module close, available for peer evaluation. The Portfolio is the professional profile built automatically as students complete challenges — exactly like Tetr's Demo Day, but async and at digital scale.",
      alignment:
        "Attacks OKR 3. The visible portfolio drives organic referrals. When students can show concrete evidence of what they built, they share it.",
    },
  ];

  const quarters = [
    {
      label: "Q1",
      color: "#00C9A7",
      title: "Foundation",
      sub: "Make theory findable",
      items: [
        "CTI MVP in top 3 courses by volume.",
        "Behavior tracking instrumented for friction detection.",
        "In-app micro-surveys at module close.",
        "Progress tracker redesigned around unlocked competencies.",
        "Smart Nudge v1 triggered by inactivity.",
      ],
      metric: "Theory absences 80% → 55% · CTI adoption >40%.",
    },
    {
      label: "Q2",
      color: "#F59E0B",
      title: "Scale",
      sub: "Make progress visible",
      items: [
        "CTI with AI automatic matching trained on Q1 data.",
        "Peer-Review Engine inside Venture Challenge.",
        "Async Sprint Showcase launched.",
        "Competency Portfolio v1.",
        "Smart Nudge v2 with behavioral triggers.",
      ],
      metric: "Cycle completion 40% · CSAT >4.2 · Month-1 churn <25%.",
    },
    {
      label: "Q3",
      color: "#EF4444",
      title: "Reinvention",
      sub: "Make learning indistinguishable from doing",
      items: [
        "AI Learning Companion trained on 6 months of data.",
        "Adaptive Curriculum Engine reorders syllabus per user.",
        "Instructor Co-Pilot with dropout risk alerts.",
        "Career Path Connector.",
        "Situational Applied Assessments.",
      ],
      metric: "Absences <20% · Theory NPS >42 · Organic referrals 15%.",
    },
  ];

  return (
    <section id="roadmap" className="section">
      <div className="container-vr">
        <SectionHeader
          tag="Roadmap Definition"
          title="Three areas. Three quarters. One narrative."
          subtitle="Each area attacks a different layer of the same problem. Each quarter generates the data the next one needs."
        />

        <div className="space-y-6">
          {areas.map((a) => (
            <div key={a.n} className="vr-card p-7" style={{ borderLeft: `4px solid ${a.color}` }}>
              <div className="flex flex-wrap items-center gap-3">
                <span className={`tag ${a.tagClass}`}>{a.n}</span>
                <h3 className="text-white" style={{ fontSize: 20, fontWeight: 700 }}>{a.title}</h3>
              </div>
              <p className="mt-2 italic" style={{ color: a.color, fontSize: 13 }}>{a.principle}</p>
              <div className="grid md:grid-cols-2 gap-8 mt-5">
                <div>
                  <div className="text-white" style={{ fontSize: 14, fontWeight: 600, letterSpacing: "0.04em" }}>
                    The Rationale
                  </div>
                  <p className="mt-3" style={{ color: "#A0A0A0", fontSize: 14, lineHeight: 1.7 }}>{a.rationale}</p>
                </div>
                <div>
                  <div className="text-white" style={{ fontSize: 14, fontWeight: 600, letterSpacing: "0.04em" }}>
                    Business Alignment
                  </div>
                  <p className="mt-3" style={{ color: "#A0A0A0", fontSize: 14, lineHeight: 1.7 }}>{a.alignment}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {quarters.map((q) => (
            <div key={q.label} className="vr-card p-6 flex flex-col">
              <div style={{ color: q.color, fontSize: 28, fontWeight: 800, letterSpacing: "-0.02em" }}>{q.label}</div>
              <h4 className="text-white mt-2" style={{ fontSize: 18, fontWeight: 700 }}>{q.title}</h4>
              <p style={{ color: "#A0A0A0", fontSize: 13 }}>{q.sub}</p>
              <ul className="mt-4 space-y-2 flex-1">
                {q.items.map((it, i) => (
                  <li key={i} className="flex gap-2" style={{ color: "#A0A0A0", fontSize: 13, lineHeight: 1.55 }}>
                    <span style={{ color: q.color }}>—</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 p-4 rounded-lg" style={{ background: "#0A0A0A", border: "1px solid #1E1E1E" }}>
                <div className="tag tag-teal">Validation metric</div>
                <p className="text-white mt-2" style={{ fontSize: 13, lineHeight: 1.5 }}>{q.metric}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  const rows = [
    { f: "Smart Nudge System", r: "10,000", i: "2.0", c: "85%", e: "5 weeks", s: "3,400", p: "P0 Q1", pc: "teal" },
    { f: "Adaptive Progress Dashboard", r: "10,000", i: "1.5", c: "90%", e: "4 weeks", s: "3,375", p: "P1 Q1", pc: "gray" },
    { f: "Contextual Theory Injection", r: "8,500", i: "3.0", c: "80%", e: "7 weeks", s: "2,914", p: "P0 Q1", pc: "teal", highlight: true },
    { f: "Venture Challenge Engine", r: "9,000", i: "3.0", c: "85%", e: "10 weeks", s: "2,295", p: "P0 Q1", pc: "teal" },
    { f: "Peer-Review Engine + Sprint Showcase", r: "6,500", i: "2.5", c: "70%", e: "8 weeks", s: "1,422", p: "P1 Q2", pc: "amber" },
  ];
  const headers = ["Feature", "Reach", "Impact", "Confidence", "Effort", "RICE Score", "Priority"];

  return (
    <section id="features" className="section" style={{ background: "#070707" }}>
      <div className="container-vr">
        <SectionHeader
          tag="Feature Prioritization"
          title="Five features. One framework. One clear rationale."
          subtitle="RICE Score = (Reach × Impact × Confidence) ÷ Effort. Reach = users/month. Impact = 0.25 to 3.0. Confidence = 0 to 100%. Effort = person-weeks."
        />

        <div className="vr-card overflow-hidden" style={{ padding: 0 }}>
          <div className="overflow-x-auto">
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 760 }}>
              <thead>
                <tr style={{ background: "#1E1E1E" }}>
                  {headers.map((h) => (
                    <th
                      key={h}
                      style={{
                        textAlign: "left",
                        padding: "16px 18px",
                        color: "#00C9A7",
                        fontSize: 12,
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                        fontWeight: 600,
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((r, idx) => (
                  <tr
                    key={r.f}
                    style={{
                      background: idx % 2 ? "#101010" : "transparent",
                      borderTop: "1px solid #1E1E1E",
                      ...(r.highlight ? { boxShadow: "inset 3px 0 0 #00C9A7" } : {}),
                    }}
                  >
                    <td style={{ padding: "18px", color: "#FFFFFF", fontSize: 14, fontWeight: 500 }}>{r.f}</td>
                    <td style={{ padding: "18px", color: "#A0A0A0", fontSize: 14 }}>{r.r}</td>
                    <td style={{ padding: "18px", color: "#A0A0A0", fontSize: 14 }}>{r.i}</td>
                    <td style={{ padding: "18px", color: "#A0A0A0", fontSize: 14 }}>{r.c}</td>
                    <td style={{ padding: "18px", color: "#A0A0A0", fontSize: 14 }}>{r.e}</td>
                    <td style={{ padding: "18px", color: "#FFFFFF", fontSize: 14, fontWeight: 600 }}>{r.s}</td>
                    <td style={{ padding: "18px" }}>
                      <span className={`tag tag-${r.pc}`}>{r.p}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <BorderCard border="amber">
            <h4 className="text-white" style={{ fontSize: 17, fontWeight: 700 }}>The apparent contradiction</h4>
            <p className="mt-3" style={{ color: "#A0A0A0", fontSize: 14, lineHeight: 1.7 }}>
              The Smart Nudge has the highest RICE score but is not the most strategically important feature. RICE
              measures speed of impact, not strategic importance. The Nudge costs 5 weeks and generates data from day
              one. The CTI costs 7 weeks and changes the knowledge delivery architecture of the entire system.
            </p>
          </BorderCard>
          <BorderCard border="teal">
            <h4 className="text-white" style={{ fontSize: 17, fontWeight: 700 }}>Why the AI Companion is not in the top 5</h4>
            <p className="mt-3" style={{ color: "#A0A0A0", fontSize: 14, lineHeight: 1.7 }}>
              The AI Learning Companion needs months of real behavior data to function well. Q1 and Q2 data are its
              fuel. Building it in Q1 would mean training a model on insufficient data. Quick wins politically and
              technically fund the strategic bets. That is portfolio management, not just backlog prioritization.
            </p>
          </BorderCard>
        </div>
      </div>
    </section>
  );
}

function UX() {
  const steps = [
    ["Challenge Opens", "Student receives business briefing: define your monetization model. The board wants numbers."],
    ["Student Works", "Writes, deletes, rewrites. Stuck on how to justify freemium vs subscription vs usage-based."],
    ["Friction Detected", "90-second inactivity + edit-delete pattern. Standard analytics. No sophisticated AI needed yet."],
    ["CTI Panel Appears", "Right sidebar expands smoothly. Non-blocking. Message: these 3 frameworks can help you right now."],
    ["Format Selected", "Student chooses: Audio 4 min, Infographic, or Real case (Notion, Stripe, Figma examples)."],
    ["Content Consumed", "Micro-content plays inline. Panel closes when done. Cursor stays in editor. Zero friction to return."],
    ["Challenge Completed", "Student now articulates the difference between models and justifies their choice with a real framework."],
    ["Deliverable Submitted", "Platform records: concept consumed in application context. Portfolio auto-updates with competency evidence."],
    ["Cycle Closed", "Screen shows connected concepts: Unit Economics, LTV/CAC, Price Elasticity. Each links to micro-content, not full module."],
  ];

  return (
    <section id="ux" className="section">
      <div className="container-vr">
        <SectionHeader
          tag="User Experience"
          title="Contextual Theory Injection — UX Flow & Wireframe"
          subtitle="The feature that resolves the problem without asking the user to change their behavior."
        />

        <div className="overflow-x-auto pb-3" style={{ marginLeft: -8, marginRight: -8 }}>
          <div className="flex gap-4 px-2" style={{ minWidth: "max-content" }}>
            {steps.map(([t, d], i) => (
              <div key={i} className="vr-card p-5 flex-shrink-0 flex flex-col" style={{ width: 180 }}>
                <div style={{ color: "#00C9A7", fontSize: 26, fontWeight: 800 }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="text-white mt-2" style={{ fontSize: 13, fontWeight: 700 }}>{t}</div>
                <div className="mt-2" style={{ color: "#A0A0A0", fontSize: 12, lineHeight: 1.5 }}>{d}</div>
              </div>
            ))}
          </div>
        </div>

        <h3 className="text-white mt-14" style={{ fontSize: 18, fontWeight: 700 }}>Wireframe — Screen Layout</h3>

        <div
          className="mt-5 rounded-xl overflow-hidden"
          style={{ background: "#0E0E0E", border: "1px solid #1E1E1E" }}
        >
          <div
            className="flex items-center gap-2 px-4"
            style={{ height: 38, background: "#0A0A0A", borderBottom: "1px solid #1E1E1E" }}
          >
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#EF4444" }} />
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#F59E0B" }} />
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#00C9A7" }} />
            <div
              className="mx-auto px-4 py-1 rounded-md"
              style={{ background: "#141414", border: "1px solid #1E1E1E", color: "#A0A0A0", fontSize: 12 }}
            >
              learnos.platform/challenge/3.2
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[65fr_35fr]">
            {/* Workspace */}
            <div className="p-6" style={{ borderRight: "1px solid #1E1E1E" }}>
              <span className="tag tag-teal">Challenge Workspace</span>

              <div
                className="mt-4 rounded-lg p-4 flex items-start justify-between"
                style={{ background: "#141414", border: "1px solid #1E1E1E" }}
              >
                <div>
                  <div className="text-white" style={{ fontSize: 13, fontWeight: 600 }}>Briefing</div>
                  <p className="mt-1" style={{ color: "#A0A0A0", fontSize: 12, lineHeight: 1.5 }}>
                    Define a monetization model for a B2B SaaS targeting LATAM SMBs.
                  </p>
                </div>
                <span style={{ color: "#A0A0A0", fontSize: 14 }}>▾</span>
              </div>

              <div
                className="mt-4 rounded-lg p-5"
                style={{ background: "#0A0A0A", border: "1px dashed #1E1E1E", minHeight: 180 }}
              >
                <p style={{ color: "#3a3a3a", fontSize: 13 }}>Start building your response here…</p>
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-2">
                {[
                  { l: "Briefing", state: "done" },
                  { l: "Work", state: "active" },
                  { l: "Submit", state: "todo" },
                  { l: "Review", state: "todo" },
                  { l: "Portfolio", state: "todo" },
                ].map((s, i, arr) => (
                  <div key={s.l} className="flex items-center gap-2">
                    <div
                      className="px-3 py-1 rounded-md"
                      style={{
                        background:
                          s.state === "active" ? "color-mix(in oklab, #00C9A7 18%, transparent)" : "#141414",
                        border: "1px solid #1E1E1E",
                        color: s.state === "todo" ? "#A0A0A0" : s.state === "active" ? "#00C9A7" : "#FFFFFF",
                        fontSize: 12,
                        fontWeight: 600,
                      }}
                    >
                      {s.state === "done" ? "✓ " : ""}
                      {s.l}
                    </div>
                    {i < arr.length - 1 && <span style={{ color: "#1E1E1E" }}>—</span>}
                  </div>
                ))}
              </div>
            </div>

            {/* CTI Panel */}
            <div className="p-6 space-y-4">
              <div className="flex justify-end">
                <span className="tag tag-teal">CTI Panel</span>
              </div>

              <div className="vr-card p-3 flex items-center justify-between" style={{ borderLeft: "1px solid #1E1E1E" }}>
                <span style={{ color: "#A0A0A0", fontSize: 12 }}>State 1 · Inactive</span>
                <span style={{ color: "#3a3a3a" }}>◉</span>
              </div>

              <div className="vr-card p-4" style={{ borderColor: "#00C9A7" }}>
                <div className="flex items-center justify-between">
                  <span className="tag tag-teal">State 2 · Active</span>
                </div>
                <div className="text-white mt-3" style={{ fontSize: 14, fontWeight: 700 }}>
                  Monetization Models
                </div>
                <div className="flex gap-2 mt-3 flex-wrap">
                  {["Audio", "Infographic", "Case"].map((b) => (
                    <button
                      key={b}
                      className="px-3 py-1 rounded-md transition-colors"
                      style={{
                        border: "1px solid #00C9A7",
                        color: "#00C9A7",
                        fontSize: 12,
                        fontWeight: 600,
                        background: "transparent",
                      }}
                    >
                      {b}
                    </button>
                  ))}
                </div>
                <div
                  className="mt-3 rounded-md p-3"
                  style={{ background: "#0A0A0A", border: "1px solid #1E1E1E", color: "#A0A0A0", fontSize: 12 }}
                >
                  ▶︎ Preview · 4 min · Pricing frameworks for B2B SaaS
                </div>
              </div>

              <div className="vr-card p-3">
                <span style={{ color: "#A0A0A0", fontSize: 11 }}>State 3 · Completed</span>
                <div className="mt-2 flex items-center justify-between">
                  <span style={{ color: "#00C9A7", fontSize: 13, fontWeight: 600 }}>
                    ✓ Concept consumed: Monetization Models
                  </span>
                </div>
                <a style={{ color: "#A0A0A0", fontSize: 12 }}>Go deeper →</a>
              </div>
            </div>
          </div>
        </div>

        <div className="vr-card mt-6 p-6" style={{ borderLeft: "4px solid #00C9A7" }}>
          <p className="text-white" style={{ fontSize: 16, fontWeight: 600 }}>
            One rule guided the entire wireframe: theory never interrupts the practical flow.
          </p>
        </div>
      </div>
    </section>
  );
}

function Increment() {
  const rows: [string, string][] = [
    ["Theory module — linear video and PDF", "Micro-units with context metadata + CTI delivery at detected friction moments."],
    ["Standalone practical activity, no context", "Venture Challenge with real business briefing + evaluation rubric + CTI Panel integrated in sidebar."],
    ["Progress tracker — percentage of content viewed", "3-layer tracker: cycles completed + unlocked competencies + portfolio evidence."],
    ["Recall assessment — define the concept", "Applied Assessment — given this real scenario, what would you recommend and why?"],
    ["Fixed-schedule push notifications", "Smart Nudge triggered by behavioral patterns: inactivity, velocity drop, session close without completion."],
    ["No peer evaluation mechanism", "Peer-Review Engine inside Sprint Showcase — async video defense evaluated by certified peers."],
    ["No professional identity layer", "Competency Portfolio — public, shareable, auto-updated with every completed challenge."],
    ["Quarterly feedback reports no one reads", "Real-time AI signal dashboard: support tags + micro-survey responses + drop-off signals feed weekly backlog input."],
  ];
  return (
    <section id="increment" className="section" style={{ background: "#070707" }}>
      <div className="container-vr">
        <SectionHeader
          tag="Product Increment"
          title="Nothing gets thrown away. Everything gets enriched."
          subtitle="Two years of content, data, and organizational learning stay intact. We add intelligence layers, not replacements."
        />

        <div className="vr-card overflow-hidden" style={{ padding: 0 }}>
          <div className="grid grid-cols-[1fr_36px_1fr]" style={{ background: "#1E1E1E" }}>
            <div style={{ padding: "16px 20px", color: "#A0A0A0", fontSize: 12, textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 600 }}>
              MVP Current State
            </div>
            <div />
            <div style={{ padding: "16px 20px", color: "#00C9A7", fontSize: 12, textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 600 }}>
              Product Increment
            </div>
          </div>
          {rows.map(([a, b], i) => (
            <div
              key={i}
              className="grid grid-cols-[1fr_36px_1fr] items-center"
              style={{ borderTop: "1px solid #1E1E1E", background: i % 2 ? "#101010" : "transparent" }}
            >
              <div style={{ padding: "18px 20px", color: "#A0A0A0", fontSize: 14, lineHeight: 1.6 }}>{a}</div>
              <div className="text-center" style={{ color: "#00C9A7", fontSize: 18 }}>→</div>
              <div style={{ padding: "18px 20px", color: "#FFFFFF", fontSize: 14, lineHeight: 1.6 }}>{b}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 space-y-6">
          <BorderCard border="amber">
            <h4 className="text-white" style={{ fontSize: 17, fontWeight: 700 }}>The analogy</h4>
            <p className="mt-3" style={{ color: "#A0A0A0", fontSize: 15, lineHeight: 1.7 }}>
              We are not demolishing the building to construct a new one. We are adding a smart home system to an
              existing structure. The rooms are the same. The structure is the same. But now the building learns how
              you live in it and adapts in real time.
            </p>
          </BorderCard>

          <BorderCard border="teal">
            <h4 className="text-white" style={{ fontSize: 17, fontWeight: 700 }}>
              The AI feedback loop that makes iteration continuous
            </h4>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              {[
                { t: "User behavior signals", c: "#A0A0A0" },
                { t: "AI detects pattern", c: "#00C9A7" },
                { t: "Immediate action", c: "#FFFFFF" },
                { t: "Outcome improved", c: "#00C9A7" },
              ].map((s, i, arr) => (
                <div key={s.t} className="flex items-center gap-3">
                  <div
                    className="px-4 py-3 rounded-lg"
                    style={{ background: "#0A0A0A", border: "1px solid #1E1E1E", color: s.c, fontSize: 13, fontWeight: 600 }}
                  >
                    {s.t}
                  </div>
                  {i < arr.length - 1 && <span style={{ color: "#00C9A7", fontSize: 18 }}>→</span>}
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-2">
              <span style={{ color: "#F59E0B", fontSize: 12 }}>↺ Roadmap input</span>
              <span style={{ color: "#A0A0A0", fontSize: 12 }}>— this loop never stops.</span>
            </div>
          </BorderCard>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ background: "#050505", borderTop: "1px solid #1E1E1E" }}>
      <div className="container-vr text-center" style={{ paddingTop: 60, paddingBottom: 60 }}>
        <div className="text-white" style={{ fontSize: 20, fontWeight: 700 }}>Venture-Ready Platform</div>
        <div className="mt-2" style={{ color: "#A0A0A0", fontSize: 14 }}>
          PM Homework Assignment — Globant EdTech Studio
        </div>
        <div className="mt-2" style={{ color: "#A0A0A0", fontSize: 12 }}>
          Inspired by Tetr College of Business · Powered by Globant Digital Reinvention mindset
        </div>
        <div className="mt-6" style={{ color: "#404040", fontSize: 11, letterSpacing: "0.04em" }}>
          Theory-as-a-Service · Contextual Theory Injection · Venture Challenge Engine · Sprint Showcase · Competency Portfolio
        </div>
        <div className="mt-4 italic" style={{ color: "#00C9A7", fontSize: 12 }}>
          The 80% absence rate is not a motivation problem. It is a delivery architecture problem. We solved it.
        </div>
      </div>
    </footer>
  );
}

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed z-40 transition-transform hover:-translate-y-0.5"
      style={{
        bottom: 24,
        right: 24,
        background: "#00C9A7",
        color: "#0A0A0A",
        padding: "12px 18px",
        borderRadius: 8,
        fontSize: 13,
        fontWeight: 700,
        boxShadow: "0 10px 30px -10px rgba(0,201,167,0.5)",
      }}
    >
      ↑ Back to top
    </button>
  );
}

function Index() {
  const progress = useScrollProgress();
  const active = useActiveSection();
  return (
    <div style={{ background: "#0A0A0A", minHeight: "100vh" }}>
      <ProgressBar p={progress} />
      <Navbar active={active} />
      <main style={{ paddingTop: 67 }}>
        <Hero />
        <Vision />
        <Strategy />
        <Roadmap />
        <Features />
        <UX />
        <Increment />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
