const agendaItems = [
  {
    id: "1️⃣",
    title: "Welcome & Icebreaker – “Say It in 7 Words”",
    duration: "10 min",
    focus:
      "Set the tone, build trust, and get participants speaking within the first minutes.",
    takeaways: [
      "Rapid rapport building",
      "Demonstrates concise messaging",
      "Establishes a high-energy room dynamic"
    ],
    format: "Facilitated round-robin introductions with facilitator modeling first."
  },
  {
    id: "2️⃣",
    title: "Understanding Stage Fear & Communication Blocks",
    duration: "12 min",
    focus:
      "Normalize nerves and equip participants with reframing strategies anchored in neuroscience.",
    takeaways: [
      "Identify personal fear triggers",
      "Reframe nerves as performance energy",
      "Structured breathing reset protocol"
    ],
    format: "Interactive poll + mini-framework + guided reflection."
  },
  {
    id: "3️⃣",
    title: "The 4 Pillars of Powerful Speaking",
    duration: "12 min",
    focus:
      "Deconstruct compelling presence into actionable pillars: Content, Voice, Body, Connection.",
    takeaways: [
      "Diagnostic checklist for each pillar",
      "Micro-habits to strengthen weak areas",
      "Anchor phrase for instant stage composure"
    ],
    format: "Visual breakdown with quick demonstrations."
  },
  {
    id: "4️⃣",
    title: "Speech Structure Made Simple – The PROLEARNZ Model",
    duration: "11 min",
    focus:
      "Introduce the signature structure for high-impact talks and meetings.",
    takeaways: [
      "PROLEARNZ canvas PDF",
      "Story spine prompts",
      "Hook-Bridge-Promise formula"
    ],
    format: "Live walkthrough of model using a topical case study."
  },
  {
    id: "5️⃣",
    title: "Activity: 20-Second Micro Speech",
    duration: "8 min",
    focus:
      "Apply the speaking model under time pressure to reinforce clarity and pacing.",
    takeaways: [
      "Coach-style peer feedback rubric",
      "Real-time timing awareness",
      "Confidence boost through action"
    ],
    format: "Triad rotations with timer and feedback cards."
  },
  {
    id: "6️⃣",
    title: "Real-World Communication Skills",
    duration: "10 min",
    focus:
      "Translate stage skills to interviews, meetings, and executive updates.",
    takeaways: [
      "Adaptive messaging cheat sheet",
      "Question-handling ladder",
      "Meeting opener scripts"
    ],
    format: "Scenario mapping workshop with facilitated debrief."
  },
  {
    id: "7️⃣",
    title: "Body Language & Voice Control Techniques",
    duration: "9 min",
    focus:
      "Layer vocal power and physical presence for gravitas in any room or camera shot.",
    takeaways: [
      "Posture and gesture toolkit",
      "Vocal warm-up routine audio",
      "Calibrated eye-contact pattern"
    ],
    format: "Mirror-based drills + facilitator modeling."
  },
  {
    id: "8️⃣",
    title: "Activity: Voice Modulation & Expression Drill",
    duration: "7 min",
    focus:
      "Experiment with tempo, tone, texture, and pause to elevate emotional impact.",
    takeaways: [
      "Four-tone storytelling template",
      "Energy arc tracker worksheet",
      "Feedback phrases that encourage expressive risk-taking"
    ],
    format: "Pair practice with rotating prompts and facilitator scoring."
  },
  {
    id: "9️⃣",
    title: "Impromptu Speaking Challenge – “Speak for 30 Seconds”",
    duration: "6 min",
    focus:
      "Build fast-thinking confidence and structured spontaneity using the PROLEARNZ cues.",
    takeaways: [
      "Prompt deck for ongoing practice",
      "3-beat micro outline method",
      "Pause-reset technique"
    ],
    format: "Hot-seat challenge with positive reinforcement."
  },
  {
    id: "🔟",
    title: "Feedback, Summary & PROLEARNZ Communication Toolkit",
    duration: "5 min",
    focus:
      "Lock in wins, capture commitments, and equip participants with the toolkit for sustained growth.",
    takeaways: [
      "Personal action commitments",
      "Digital follow-up resource hub",
      "Accountability buddy system setup"
    ],
    format: "Live feedback wall + QR-code toolkit reveal."
  }
];

const pillars = [
  {
    name: "Content",
    description:
      "Design bold narratives with compelling hooks, data-backed insights, and clear calls to action."
  },
  {
    name: "Voice",
    description:
      "Command tone, tempo, and texture to deliver messages that resonate and persuade."
  },
  {
    name: "Body",
    description:
      "Align posture, gestures, and facial expressions with intent for believable presence."
  },
  {
    name: "Connection",
    description:
      "Read the room, adapt in real time, and turn passive audiences into engaged collaborators."
  }
];

const prolearnzModel = [
  { phase: "P", label: "Purpose", detail: "Frame the why and define the audience outcome." },
  { phase: "R", label: "Reveal", detail: "Deliver a captivating hook or story that earns attention." },
  { phase: "O", label: "Outline", detail: "Map the journey with 3 crisp checkpoints." },
  { phase: "L", label: "Layer Insight", detail: "Add data, proof, or examples that anchor credibility." },
  { phase: "E", label: "Engage", detail: "Invite interaction through questions, polls, or reflections." },
  { phase: "A", label: "Action", detail: "Clarify what to do next and the support available." },
  { phase: "R", label: "Reinforce", detail: "Summarize the core message and emotional intent." },
  { phase: "N", label: "Next Steps", detail: "Assign commitments, deadlines, or practice drills." },
  { phase: "Z", label: "Zoom Out", detail: "Connect the moment to the bigger mission or vision." }
];

const outcomes = [
  {
    title: "Confident Presence",
    detail:
      "Participants walk away with a replicable game plan to reduce stage fear and project authority."
  },
  {
    title: "Communication Toolkit",
    detail:
      "Lock in frameworks, prompts, and drills for ongoing practice across interviews, meetings, and keynotes."
  },
  {
    title: "Measurable Performance",
    detail:
      "Built-in feedback loops, peer coaching rubrics, and accountability pathways accelerate improvement."
  }
];

const facilitatorsNotes = [
  {
    title: "Environment",
    items: [
      "Room set up in collaborative pods of 4–5 participants.",
      "Bluetooth speaker preloaded with vocal warm-up audio.",
      "Flipcharts for feedback wall and toolkit QR reveal."
    ]
  },
  {
    title: "Materials",
    items: [
      "Printed PROLEARNZ Model canvas (A3) for each pod.",
      "Prompt deck cards for micro-speech and impromptu drills.",
      "Digital resource hub QR code (slides, planner, recordings)."
    ]
  },
  {
    title: "Success Signals",
    items: [
      "High-energy room with diverse voices heard in first 10 minutes.",
      "Participants using model vocabulary in peer feedback.",
      "Commitments captured on feedback wall before closing."
    ]
  }
];

const totalDuration = agendaItems
  .map((item) => parseInt(item.duration.split(" ")[0], 10))
  .reduce((acc, curr) => acc + curr, 0);

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="relative overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#1e82ff40,_transparent_55%)]" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 py-20 md:flex-row md:items-center">
          <div className="flex-1">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm font-medium uppercase tracking-wide text-brand-100 ring-1 ring-inset ring-white/20">
              PROLEARNZ Masterclass
            </span>
            <h1 className="mt-6 font-display text-4xl leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Public Speaking &amp; Communication Skill Intensive
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/80">
              A 90-minute, high-impact journey that transforms hesitant voices
              into confident communicators armed with tools they can deploy the
              second they leave the room.
            </p>
            <dl className="mt-8 grid grid-cols-2 gap-6 text-sm text-white/70 sm:flex sm:gap-12">
              <div>
                <dt className="font-semibold uppercase tracking-wide text-white">
                  Duration
                </dt>
                <dd>{totalDuration} Minutes</dd>
              </div>
              <div>
                <dt className="font-semibold uppercase tracking-wide text-white">
                  Format
                </dt>
                <dd>Live Masterclass + Coaching Labs</dd>
              </div>
              <div>
                <dt className="font-semibold uppercase tracking-wide text-white">
                  Audience
                </dt>
                <dd>High-potentials, leaders, client-facing teams</dd>
              </div>
              <div>
                <dt className="font-semibold uppercase tracking-wide text-white">
                  Facilitator
                </dt>
                <dd>PROLEARNZ Coaching Faculty</dd>
              </div>
            </dl>
          </div>
          <div className="flex-1">
            <div className="relative overflow-hidden rounded-3xl bg-white/5 shadow-2xl shadow-blue-500/20 ring-1 ring-white/10 backdrop-blur">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-500/30 blur-3xl" />
              <div className="absolute -bottom-16 -left-16 h-44 w-44 rounded-full bg-slate-200/20 blur-3xl" />
              <div className="relative space-y-6 p-8">
                <h2 className="font-display text-2xl text-white">
                  Your Participants Will:
                </h2>
                <ul className="space-y-4 text-base text-white/85">
                  <li className="rounded-xl bg-white/5 px-4 py-3">
                    Craft concise, compelling messages using the PROLEARNZ model.
                  </li>
                  <li className="rounded-xl bg-white/5 px-4 py-3">
                    Deliver confident, expressive talks with agile voice control.
                  </li>
                  <li className="rounded-xl bg-white/5 px-4 py-3">
                    Hit real-world communication scenarios with a ready-to-use toolkit.
                  </li>
                </ul>
                <p className="text-sm uppercase tracking-wide text-white/60">
                  Designed for hybrid delivery — onsite or virtual.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-display text-3xl text-slate-900 sm:text-4xl">
          Masterclass Success Outcomes
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {outcomes.map((outcome) => (
            <div
              key={outcome.title}
              className="group rounded-2xl bg-white p-6 shadow-sm shadow-slate-200 ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                <span className="font-display text-xl">★</span>
              </div>
              <h3 className="mt-6 font-display text-xl text-slate-900">
                {outcome.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {outcome.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-600">
                Agenda Flow
              </span>
              <h2 className="mt-4 font-display text-3xl text-slate-900 sm:text-4xl">
                90 Minutes to Confident Communicators
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-slate-600">
              Each segment blends insight, modeling, and deliberate communication
              practice. Movement between pods keeps energy high and embeds
              feedback-driven growth.
            </p>
          </div>
          <div className="mt-10 space-y-6">
            {agendaItems.map((item) => (
              <article
                key={item.title}
                className="relative overflow-hidden rounded-3xl border border-slate-100 bg-slate-50/40 p-6 transition hover:border-brand-200 hover:bg-white hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="flex flex-col gap-4 md:flex-row md:justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-100 font-display text-xl text-brand-600">
                      {item.id}
                    </div>
                    <div>
                      <h3 className="font-display text-xl text-slate-900">
                        {item.title}
                      </h3>
                      <p className="mt-2 max-w-2xl text-sm text-slate-600">
                        {item.focus}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 rounded-full border border-brand-100 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wider text-brand-600">
                    <span>Segment</span>
                    <span className="text-slate-500">•</span>
                    <span>{item.duration}</span>
                  </div>
                </div>
                <div className="mt-6 grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Participant Takeaways
                    </h4>
                    <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                      {item.takeaways.map((takeaway) => (
                        <li
                          key={takeaway}
                          className="flex items-start gap-2 rounded-xl bg-white px-3 py-2 text-sm text-slate-700 shadow-sm shadow-slate-200"
                        >
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-500" />
                          <span>{takeaway}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Facilitation Format
                    </h4>
                    <p className="mt-3 rounded-xl bg-white px-3 py-3 text-sm leading-relaxed text-slate-700 shadow-sm shadow-slate-200">
                      {item.format}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl bg-slate-900 p-10 text-white shadow-2xl shadow-blue-500/20">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
            <div className="lg:w-1/3">
              <h2 className="font-display text-3xl text-white sm:text-4xl">
                The 4 Pillars of Powerful Speaking
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-white/80">
                Participants evaluate their strengths and blind spots across the
                four pillars. Facilitator-led demos illustrate how mastery across
                each axis multiplies influence.
              </p>
            </div>
            <div className="grid flex-1 grid-cols-1 gap-4 md:grid-cols-2">
              {pillars.map((pillar) => (
                <div
                  key={pillar.name}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-brand-200/70 hover:bg-brand-500/10"
                >
                  <h3 className="font-display text-xl text-white">
                    {pillar.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/80">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900/5 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-600">
                Signature Framework
              </span>
              <h2 className="mt-4 font-display text-3xl text-slate-900 sm:text-4xl">
                The PROLEARNZ Speaking Model
              </h2>
            </div>
            <p className="max-w-lg text-sm leading-relaxed text-slate-600">
              A nine-phase flow that unlocks narrative clarity and ensures every
              communication touchpoint drives action. Participants map their
              upcoming talk directly onto the canvas during the session.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {prolearnzModel.map((phase) => (
              <div
                key={phase.phase}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200 transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 font-display text-lg text-brand-600">
                    {phase.phase}
                  </span>
                  <h3 className="font-display text-lg text-slate-900">
                    {phase.label}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {phase.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[0.6fr_0.4fr]">
          <div>
            <h2 className="font-display text-3xl text-slate-900 sm:text-4xl">
              Active Practice Moments
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Three kinetic drills accelerate skill transfer, each layered with
              facilitator coaching, peer feedback, and personal reflection.
            </p>
            <div className="mt-8 space-y-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200">
                <h3 className="font-display text-xl text-slate-900">
                  20-Second Micro Speech
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Participants deliver a laser-focused message using the
                  PROLEARNZ canvas. Timing discipline plus instant feedforward.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200">
                <h3 className="font-display text-xl text-slate-900">
                  Voice Modulation &amp; Expression Drill
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Facilitator models pace, pause, and pitch. Participants mirror
                  and experiment with expressive range to add emotional texture.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200">
                <h3 className="font-display text-xl text-slate-900">
                  Impromptu Speaking Challenge
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  30-second hot seat prompts build agile thinking. The 3-beat
                  outline card keeps responses sharp and structured.
                </p>
              </div>
            </div>
          </div>
          <aside className="space-y-6">
            {facilitatorsNotes.map((note) => (
              <div
                key={note.title}
                className="rounded-3xl border border-brand-100/70 bg-brand-50/80 p-6 shadow-sm shadow-blue-500/20"
              >
                <h3 className="font-display text-xl text-brand-700">
                  {note.title}
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-brand-800">
                  {note.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </aside>
        </div>
      </section>

      <section className="bg-slate-900 py-16 text-white">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-3xl bg-white/5 p-10 shadow-2xl shadow-blue-500/30 ring-1 ring-white/10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="font-display text-3xl text-white sm:text-4xl">
                  PROLEARNZ Communication Toolkit
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-white/80">
                  Curated resources extend the masterclass impact beyond the 90
                  minutes. Participants receive access within 24 hours post
                  session.
                </p>
              </div>
              <div className="rounded-2xl border border-white/20 bg-slate-900/60 p-6 text-sm text-white/80">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-brand-300" />
                    <span>On-demand video library with pillar refreshers.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-brand-300" />
                    <span>Downloadable PROLEARNZ canvas and planning templates.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-brand-300" />
                    <span>Prompt deck PDFs for impromptu and micro-speech drills.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-brand-300" />
                    <span>Weekly accountability nudges + success checklist.</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-4 text-sm text-white/70">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-400 font-display text-lg text-slate-900">
                  ✓
                </span>
                <p>
                  Participants leave with commitments captured and scheduled
                  accountability touchpoints.
                </p>
              </div>
              <button className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow shadow-white/40 transition hover:shadow-focus hover:text-brand-600">
                Schedule a PROLEARNZ Masterclass
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <div>
            © {new Date().getFullYear()} PROLEARNZ. Mastery Through Practice.
          </div>
          <div className="flex flex-wrap gap-6">
            <span>Public Speaking</span>
            <span>Communication Coaching</span>
            <span>Leadership Impact Labs</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
