"use client";
import { useState } from "react";

// ── Types ──────────────────────────────────────────────────
type Screen = "home" | "jobs" | "setup" | "interview" | "review" | "done" | "employer";
type PaceOption = "relaxed" | "standard" | "nolimit" | "written";

const JOBS = [
  { id: 1, emoji: "🌿", title: "Customer Support Specialist", company: "GreenLeaf Co", location: "Remote · Part-time", pace: "Flexible pace", format: "Async only" },
  { id: 2, emoji: "📦", title: "Data Entry Associate", company: "SupplyBridge", location: "On-site · Full-time", pace: "Flexible pace", format: "Hybrid" },
  { id: 3, emoji: "🎨", title: "Graphic Design Assistant", company: "Forma Studio", location: "Remote · Freelance", pace: "Flexible pace", format: "Portfolio welcome" },
];

const QUESTIONS = [
  "Tell us about yourself and what draws you to this role.",
  "Describe a time you helped someone solve a problem. What happened?",
  "What's one strength you bring that a traditional interview might miss?",
  "Is there anything you'd like us to know about you before we review your answers?",
];

// ── Utility Components ─────────────────────────────────────
function Badge({ children, variant = "teal" }: { children: React.ReactNode; variant?: "teal" | "blue" | "amber" | "gray" }) {
  const styles: Record<string, string> = {
    teal: "bg-teal-50 text-teal-800 border border-teal-200",
    blue: "bg-blue-50 text-blue-800 border border-blue-200",
    amber: "bg-amber-50 text-amber-800 border border-amber-200",
    gray: "bg-gray-100 text-gray-600 border border-gray-200",
  };
  return <span className={`inline-flex items-center gap-1 text-xs font-medium px-2.5 py-0.5 rounded-full ${styles[variant]}`}>{children}</span>;
}

function NavBar({ title, onBack }: { title: string; onBack: () => void }) {
  return (
    <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 bg-white sticky top-0 z-10">
      <button onClick={onBack} className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        Back
      </button>
      <span className="text-sm font-medium text-gray-900">{title}</span>
      <span className="w-10" />
    </div>
  );
}

// ── Wolf Logo Mark ─────────────────────────────────────────
function WolfMark({ size = 48 }: { size?: number }) {
  return (
    <div style={{ width: size, height: size }} className="relative flex items-center justify-center">
      <img src="/wlfden-logo.png" alt="WLFDEN wolf logo" style={{ width: size, height: size, objectFit: "contain" }}
        onError={(e) => {
          // fallback geometric wolf SVG if image not found
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />
      {/* Fallback SVG wolf mark */}
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: size, height: size, position: "absolute" }}>
        <polygon points="24,4 32,14 28,14 34,22 28,20 30,28 24,22 18,28 20,20 14,22 20,14 16,14" fill="#1D9E75" opacity="0.9"/>
        <polygon points="24,22 20,32 24,30 28,32" fill="#0F6E56"/>
        <circle cx="20" cy="18" r="1.5" fill="#E1F5EE"/>
        <circle cx="28" cy="18" r="1.5" fill="#E1F5EE"/>
      </svg>
    </div>
  );
}

// ── SCREEN: Home ───────────────────────────────────────────
function HomeScreen({ onNav }: { onNav: (s: Screen) => void }) {
  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-hidden">
      {/* Banner hero */}
      <div className="relative w-full overflow-hidden" style={{ minHeight: 260 }}>
        <img
          src="/wlfden-banner.png"
          alt="WLFDEN — The spot where wolves hunt on their own terms"
          className="w-full object-cover object-center"
          style={{ maxHeight: 260 }}
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-950/40 to-gray-950" />
      </div>

      {/* Brand block */}
      <div className="px-5 -mt-8 relative z-10">
        <div className="flex items-center gap-3 mb-2">
          <WolfMark size={44} />
          <div>
            <h1 className="text-3xl font-black tracking-tighter text-white">WLFDEN</h1>
            <p className="text-xs text-teal-400 font-medium tracking-widest uppercase">The spot where wolves hunt on their own terms.</p>
          </div>
        </div>

        <p className="text-gray-300 text-[15px] leading-relaxed mt-4 mb-6 max-w-sm">
          Async video interviews for people who get filtered out — not because they lack ability, but because the format wasn't built for them.
        </p>

        <button
          onClick={() => onNav("jobs")}
          className="w-full bg-teal-500 hover:bg-teal-400 text-gray-950 font-bold py-3.5 rounded-xl text-[15px] transition-all active:scale-95 mb-3 flex items-center justify-center gap-2"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg>
          Find your den
        </button>
        <button
          onClick={() => onNav("employer")}
          className="w-full bg-transparent border border-gray-700 hover:border-gray-500 text-gray-300 font-medium py-3.5 rounded-xl text-[15px] transition-all active:scale-95 flex items-center justify-center gap-2"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>
          I'm building a pack
        </button>
      </div>

      {/* Why WLFDEN */}
      <div className="px-5 mt-8 pb-10">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">Why the den is different</p>
        {[
          { icon: "⏸", title: "Hunt at your pace", body: "Record when you're ready. Pause, re-record, take breaks. No countdown, no audience." },
          { icon: "🐺", title: "Wolves review wolves", body: "Employers see your answers before your name. Skills first. Every time." },
          { icon: "♿", title: "Built for every wolf", body: "Captions, read-aloud, written mode, low-stimulation UI — on by default, not buried in settings." },
        ].map((c) => (
          <div key={c.title} className="bg-gray-900 border border-gray-800 rounded-2xl p-4 mb-3 flex gap-4">
            <span className="text-2xl flex-shrink-0 mt-0.5">{c.icon}</span>
            <div>
              <h3 className="text-sm font-semibold text-white mb-1">{c.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{c.body}</p>
            </div>
          </div>
        ))}

        {/* Tagline bar */}
        <div className="mt-6 border border-teal-900 rounded-2xl p-4 bg-teal-950/50 text-center">
          <p className="text-teal-300 font-bold text-base">"Forget on-the-spot interviews."</p>
          <p className="text-teal-400 text-sm mt-1">Get WLFDEN offers.</p>
        </div>

        {/* Waitlist */}
        <div className="mt-4 bg-gray-900 border border-gray-800 rounded-2xl p-4">
          <p className="text-sm font-medium text-white mb-1">Join the waitlist</p>
          <p className="text-xs text-gray-500 mb-3">Be first to know when employer spots open.</p>
          <div className="flex gap-2">
            <input type="email" placeholder="your@email.com" className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-600 outline-none focus:border-teal-500" />
            <button className="bg-teal-500 text-gray-950 font-semibold px-4 py-2 rounded-lg text-sm hover:bg-teal-400 transition-colors">Join</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── SCREEN: Jobs ───────────────────────────────────────────
function JobsScreen({ onBack, onNav }: { onBack: () => void; onNav: (s: Screen) => void }) {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <NavBar title="Open roles" onBack={onBack} />
      <div className="px-5 py-5">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">Packs hiring now</p>
        {JOBS.map((job) => (
          <button key={job.id} onClick={() => onNav("setup")}
            className="w-full bg-gray-900 border border-gray-800 hover:border-teal-700 rounded-2xl p-4 mb-3 flex items-start gap-3 text-left transition-all active:scale-98 group">
            <div className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center text-xl flex-shrink-0 group-hover:bg-gray-700 transition-colors">
              {job.emoji}
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-semibold text-white mb-0.5">{job.title}</h4>
              <p className="text-xs text-gray-500 mb-2">{job.company} · {job.location}</p>
              <div className="flex flex-wrap gap-1.5">
                <Badge variant="teal">{job.pace}</Badge>
                <Badge variant="gray">{job.format}</Badge>
              </div>
            </div>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-600 flex-shrink-0 mt-1">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        ))}

        <div className="mt-2 bg-gray-900 border border-gray-800 rounded-2xl p-4 text-center">
          <p className="text-sm text-gray-400">Your ideal role not listed?</p>
          <button className="mt-2 text-teal-400 text-sm font-medium hover:text-teal-300 transition-colors">
            Join the candidate waitlist →
          </button>
        </div>
      </div>
    </div>
  );
}

// ── SCREEN: Setup ──────────────────────────────────────────
function SetupScreen({ onBack, onNav }: { onBack: () => void; onNav: (s: Screen) => void }) {
  const [pace, setPace] = useState<PaceOption>("nolimit");
  const paces: { id: PaceOption; icon: string; label: string; desc: string }[] = [
    { id: "relaxed", icon: "🌿", label: "Relaxed", desc: "5 min per question, unlimited re-records" },
    { id: "standard", icon: "⚡", label: "Standard", desc: "3 min per question, 2 re-records" },
    { id: "nolimit", icon: "∞", label: "No time limit", desc: "Take as long as you need" },
    { id: "written", icon: "✍️", label: "Written only", desc: "Type your answers instead of video" },
  ];
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <NavBar title="Interview setup" onBack={onBack} />
      <div className="px-5 py-5">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">Choose your pace</p>
        <div className="grid grid-cols-2 gap-3 mb-6">
          {paces.map((p) => (
            <button key={p.id} onClick={() => setPace(p.id)}
              className={`rounded-2xl p-4 text-left border transition-all active:scale-95 ${pace === p.id ? "bg-teal-950 border-teal-500" : "bg-gray-900 border-gray-800 hover:border-gray-600"}`}>
              <span className="text-xl block mb-2">{p.icon}</span>
              <h4 className={`text-sm font-semibold mb-1 ${pace === p.id ? "text-teal-300" : "text-white"}`}>{p.label}</h4>
              <p className="text-xs text-gray-500 leading-relaxed">{p.desc}</p>
            </button>
          ))}
        </div>

        <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">Accessibility</p>
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-4 mb-6">
          {[["Live captions", true], ["Read questions aloud", true], ["Low-stimulation mode", true]].map(([label, on]) => (
            <div key={String(label)} className="flex items-center justify-between py-2.5 border-b border-gray-800 last:border-0">
              <span className="text-sm text-gray-300">{String(label)}</span>
              <Badge variant="teal">{on ? "On" : "Off"}</Badge>
            </div>
          ))}
        </div>

        <div className="bg-amber-950/50 border border-amber-900 rounded-2xl p-4 mb-6 flex gap-3">
          <span className="text-amber-400 flex-shrink-0">🐺</span>
          <p className="text-xs text-amber-300 leading-relaxed">You're in control of this hunt. No judgment on pace or re-records. The pack only sees what you choose to submit.</p>
        </div>

        <button onClick={() => onNav("interview")}
          className="w-full bg-teal-500 hover:bg-teal-400 text-gray-950 font-bold py-3.5 rounded-xl text-[15px] transition-all active:scale-95 flex items-center justify-center gap-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          Enter the den
        </button>
      </div>
    </div>
  );
}

// ── SCREEN: Interview ──────────────────────────────────────
function InterviewScreen({ onBack, onNav }: { onBack: () => void; onNav: (s: Screen) => void }) {
  const [qIndex, setQIndex] = useState(1);
  const total = QUESTIONS.length;
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <NavBar title={`Question ${qIndex + 1} of ${total}`} onBack={onBack} />
      <div className="px-5 py-5">
        {/* Progress */}
        <div className="flex gap-1.5 mb-5">
          {QUESTIONS.map((_, i) => (
            <div key={i} className={`flex-1 h-1 rounded-full transition-all ${i < qIndex ? "bg-teal-500" : i === qIndex ? "bg-teal-800" : "bg-gray-800"}`} />
          ))}
        </div>

        {/* Notice */}
        <div className="bg-amber-950/40 border border-amber-900/50 rounded-xl px-4 py-3 mb-4 flex gap-2.5">
          <span className="text-amber-400 text-sm flex-shrink-0">ℹ</span>
          <p className="text-xs text-amber-300 leading-relaxed">No time limit. Re-record as many times as you need before moving on.</p>
        </div>

        {/* Question */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-4 mb-4">
          <p className="text-[15px] text-white leading-relaxed">{QUESTIONS[qIndex]}</p>
        </div>

        {/* Video panel */}
        <div className="bg-gray-900 rounded-2xl aspect-video flex flex-col items-center justify-center mb-4 relative overflow-hidden border border-gray-800">
          <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-black/60 rounded-full px-2.5 py-1">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-xs text-white font-medium">REC</span>
          </div>
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-gray-700 mb-2">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>
          </svg>
          <p className="text-xs text-gray-600">Camera preview</p>
        </div>

        {/* Controls */}
        <div className="flex justify-center gap-3 mb-5">
          {[
            { label: "Mute", icon: <path d="M1 1l22 22M9 9v3a3 3 0 005.12 2.12M15 9.34V4a3 3 0 00-5.94-.6M17 16.95A7 7 0 015 12v-2m14 0v2a7 7 0 01-.11 1.23M12 20v4M8 20h8"/> },
            { label: "Camera off", icon: <><path d="M16 16v1a2 2 0 01-2 2H3a2 2 0 01-2-2V7a2 2 0 012-2h2m5.66 0H14a2 2 0 012 2v3.34l1 1L23 7v10"/><line x1="1" y1="1" x2="23" y2="23"/></> },
            { label: "Re-record", icon: <><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 102.13-9.36L1 10"/></> },
          ].map((btn) => (
            <button key={btn.label} aria-label={btn.label}
              className="w-12 h-12 rounded-full bg-gray-800 border border-gray-700 hover:border-gray-500 flex items-center justify-center transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">{btn.icon}</svg>
            </button>
          ))}
          <button aria-label="Stop recording" onClick={() => onNav("review")}
            className="w-12 h-12 rounded-full bg-red-600 hover:bg-red-500 flex items-center justify-center transition-colors">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>
          </button>
        </div>

        <button onClick={() => onNav("review")}
          className="w-full bg-transparent border border-gray-700 hover:border-gray-500 text-gray-300 font-medium py-3 rounded-xl text-sm transition-all flex items-center justify-center gap-2">
          Done — next question
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
      </div>
    </div>
  );
}

// ── SCREEN: Review ─────────────────────────────────────────
function ReviewScreen({ onBack, onNav }: { onBack: () => void; onNav: (s: Screen) => void }) {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <NavBar title="Review & submit" onBack={onBack} />
      <div className="px-5 py-5">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">Your answers</p>
        <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden mb-5">
          {[["Q1 — About yourself", true], ["Q2 — Helping others", true], ["Q3 — Your strengths", false], ["Q4 — Anything else", false]].map(([q, done]) => (
            <div key={String(q)} className="flex items-center justify-between px-4 py-3 border-b border-gray-800 last:border-0">
              <span className="text-sm text-gray-300">{String(q)}</span>
              <Badge variant={done ? "teal" : "amber"}>{done ? "✓ Recorded" : "Pending"}</Badge>
            </div>
          ))}
        </div>

        <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">Optional extras</p>
        <div className="mb-4">
          <label className="block text-xs text-gray-500 mb-1.5">Portfolio or work sample URL</label>
          <input type="text" placeholder="https://..." className="w-full bg-gray-900 border border-gray-800 focus:border-teal-600 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-gray-700 outline-none transition-colors" />
        </div>
        <div className="mb-6">
          <label className="block text-xs text-gray-500 mb-1.5">Anything the pack should know</label>
          <textarea rows={3} placeholder="E.g. preferred contact method, accommodations needed, what they'd miss if they skipped your answers..." className="w-full bg-gray-900 border border-gray-800 focus:border-teal-600 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-gray-700 outline-none transition-colors resize-none" />
        </div>

        <button onClick={() => onNav("done")}
          className="w-full bg-teal-500 hover:bg-teal-400 text-gray-950 font-bold py-3.5 rounded-xl text-[15px] transition-all active:scale-95 flex items-center justify-center gap-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
          Submit to the pack
        </button>
      </div>
    </div>
  );
}

// ── SCREEN: Done ───────────────────────────────────────────
function DoneScreen({ onNav }: { onNav: (s: Screen) => void }) {
  return (
    <div className="min-h-screen bg-gray-950 text-white px-5 py-10 flex flex-col items-center text-center">
      <div className="w-20 h-20 bg-teal-950 border border-teal-700 rounded-full flex items-center justify-center mb-5">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
      </div>
      <h1 className="text-2xl font-black tracking-tight mb-2">You're in the den.</h1>
      <p className="text-gray-400 text-[15px] leading-relaxed max-w-xs mb-8">
        Your answers are with GreenLeaf Co. They review blind — your name stays hidden until they choose to move forward.
      </p>

      <div className="grid grid-cols-3 gap-3 w-full mb-8">
        {[["4", "Answers"], ["∞", "Time limit"], ["3", "Re-records"]].map(([n, l]) => (
          <div key={l} className="bg-gray-900 border border-gray-800 rounded-2xl py-4">
            <div className="text-2xl font-black text-teal-400">{n}</div>
            <div className="text-xs text-gray-500 mt-1">{l}</div>
          </div>
        ))}
      </div>

      <div className="w-full space-y-3 mb-8">
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-4 text-left flex gap-3">
          <span className="text-xl">🙈</span>
          <div>
            <h4 className="text-sm font-semibold text-white mb-1">Blind review</h4>
            <p className="text-xs text-gray-500 leading-relaxed">Name and photo are hidden. They see your answers first, every time.</p>
          </div>
        </div>
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-4 text-left flex gap-3">
          <span className="text-xl">🔔</span>
          <div>
            <h4 className="text-sm font-semibold text-white mb-1">5-day response commitment</h4>
            <p className="text-xs text-gray-500 leading-relaxed">WLFDEN holds employers to a response window. No ghosting allowed in this den.</p>
          </div>
        </div>
      </div>

      <button onClick={() => onNav("employer")}
        className="w-full border border-gray-700 hover:border-gray-500 text-gray-300 font-medium py-3 rounded-xl text-sm transition-all flex items-center justify-center gap-2">
        See the employer view
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </button>
    </div>
  );
}

// ── SCREEN: Employer ───────────────────────────────────────
function EmployerScreen({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <NavBar title="Pack dashboard" onBack={onBack} />
      <div className="px-5 py-5">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">Candidates — Customer Support</p>

        {[
          { num: 1, time: "2 hours ago", pace: "No time limit", answers: 4, rerecords: 3, note: true, shortlisted: false },
          { num: 2, time: "Yesterday", pace: "Written only", answers: 4, rerecords: 0, note: false, shortlisted: true },
        ].map((a) => (
          <div key={a.num} className="bg-gray-900 border border-gray-800 rounded-2xl p-4 mb-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-white">Candidate #{a.num}</span>
              <Badge variant={a.shortlisted ? "teal" : "blue"}>{a.shortlisted ? "Shortlisted" : "Awaiting review"}</Badge>
            </div>
            <p className="text-xs text-gray-500 mb-3">Submitted {a.time} · {a.pace} · {a.answers} answers</p>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {a.rerecords > 0 && <Badge variant="gray">Re-records: {a.rerecords}</Badge>}
              {a.note && <Badge variant="gray">Note included</Badge>}
              <Badge variant="gray">{a.pace}</Badge>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => alert(a.shortlisted ? `Profile revealed:\nCandidate #${a.num}\nname@email.com` : "Watch their video answers before revealing identity.")}
                className="flex-1 bg-teal-500 hover:bg-teal-400 text-gray-950 font-semibold py-2.5 rounded-xl text-sm transition-all flex items-center justify-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                {a.shortlisted ? "Reveal profile" : "Watch answers"}
              </button>
              {!a.shortlisted && (
                <button className="px-4 py-2.5 border border-gray-700 hover:border-gray-500 text-gray-400 rounded-xl text-sm transition-all">Pass</button>
              )}
            </div>
          </div>
        ))}

        <div className="mt-4 bg-gray-900 border border-gray-800 rounded-2xl p-4">
          <p className="text-xs text-gray-500 leading-relaxed">
            WLFDEN's blind-first model means you evaluate what candidates can do before bias gets a running start. Names and photos reveal only when you shortlist.
          </p>
        </div>
      </div>
    </div>
  );
}

// ── Root App ───────────────────────────────────────────────
export default function WLFDENApp() {
  const [screen, setScreen] = useState<Screen>("home");
  const history: Screen[] = ["home"];

  const go = (s: Screen) => setScreen(s);
  const back = () => {
    const map: Partial<Record<Screen, Screen>> = {
      jobs: "home", setup: "jobs", interview: "setup",
      review: "interview", done: "review", employer: "home",
    };
    setScreen(map[screen] || "home");
  };

  return (
    <div className="max-w-sm mx-auto min-h-screen font-sans">
      {screen === "home" && <HomeScreen onNav={go} />}
      {screen === "jobs" && <JobsScreen onBack={back} onNav={go} />}
      {screen === "setup" && <SetupScreen onBack={back} onNav={go} />}
      {screen === "interview" && <InterviewScreen onBack={back} onNav={go} />}
      {screen === "review" && <ReviewScreen onBack={back} onNav={go} />}
      {screen === "done" && <DoneScreen onNav={go} />}
      {screen === "employer" && <EmployerScreen onBack={back} />}
    </div>
  );
}
