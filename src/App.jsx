import { useEffect, useRef } from 'react'
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'

// ─── Animated counter that runs once on scroll-into-view ────────────────────
function Counter({ to, suffix = '', duration = 1.8 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const mv = useMotionValue(0)
  const rounded = useTransform(mv, (v) => Math.round(v).toLocaleString())

  useEffect(() => {
    if (inView) {
      const controls = animate(mv, to, { duration, ease: [0.16, 1, 0.3, 1] })
      return controls.stop
    }
  }, [inView, mv, to, duration])

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{rounded}</motion.span>{suffix}
    </span>
  )
}

// ─── Projects grid · portfolio section ─────────────────────────────────────
function ProjectsGrid() {
  const projects = [
    {
      title: 'Teleport · SE Take-Home Demo',
      tagline: 'Identity-aware access platform for a fictional voice-trading firm. Built end-to-end on AWS — EKS Auto Mode, RDS Aurora, EC2, all fronted by Teleport with JIT access requests, per-session MFA, and full audit.',
      tech: ['AWS', 'EKS', 'RDS', 'Teleport', 'GitHub OIDC', 'Slack'],
      href: 'https://trading.fabiorollin.com/teleport',
      cta: 'View project',
      external: true,
      status: 'live',
      accent: 'indigo',
    },
    {
      title: 'Trading Contacts App',
      tagline: 'Node.js + Express trading-desk contacts app. Bcrypt password hashing, JWT cookies, rate-limited login, two audit trails (login attempts + click-to-dial). ~300 lines, deployed via Helm to EKS.',
      tech: ['Node.js', 'Express', 'MySQL', 'RDS', 'Helm', 'ECR'],
      href: 'https://contacts.fabiorollin.com',
      cta: 'Open app',
      external: true,
      status: 'live',
      accent: 'cyan',
    },
    {
      title: 'MIT · Applied AI & Data Science',
      tagline: "Capstone work and case studies from the MIT-led Applied AI & Data Science program. ML, deep learning, recommender systems, computer vision applied to real-world business problems.",
      tech: ['Python', 'PyTorch', 'pandas', 'scikit-learn'],
      href: 'https://www.mygreatlearning.com/eportfolio/fabio-rollin-ramos-vieira',
      cta: 'View ePortfolio',
      external: true,
      status: 'in progress',
      accent: 'sky',
    },
    {
      title: 'Notes · technical blog',
      tagline: 'Posts on cloud infrastructure, Kubernetes, identity-driven access, observability, and applied AI. Custom Hugo site, deployed alongside the rest of the stack on EKS.',
      tech: ['Hugo', 'Nginx', 'Docker', 'K8s', 'EKS'],
      href: 'https://blog.fabiorollin.com',
      cta: 'Read the blog',
      external: true,
      status: 'live',
      accent: 'fuchsia',
      secondary: { href: 'https://blog.fabiorollin.com/digest/', label: 'Weekly digest →' },
    },
  ]

  const accents = {
    indigo: { ring: 'border-indigo-400/30 bg-indigo-500/5', tag: 'bg-indigo-500/10 text-indigo-200', cta: 'bg-indigo-500 hover:bg-indigo-400' },
    cyan:   { ring: 'border-cyan-400/30 bg-cyan-500/5',     tag: 'bg-cyan-500/10 text-cyan-200',     cta: 'bg-cyan-500 hover:bg-cyan-400' },
    sky:    { ring: 'border-sky-400/30 bg-sky-500/5',       tag: 'bg-sky-500/10 text-sky-200',       cta: 'bg-sky-500 hover:bg-sky-400' },
    fuchsia:{ ring: 'border-fuchsia-400/30 bg-fuchsia-500/5', tag: 'bg-fuchsia-500/10 text-fuchsia-200', cta: 'bg-fuchsia-500 hover:bg-fuchsia-400' },
  }

  const statusBadge = {
    live:          { label: '● live',           cls: 'border-emerald-400/30 bg-emerald-500/10 text-emerald-200' },
    'in progress': { label: '◐ in progress',    cls: 'border-amber-400/30 bg-amber-500/10 text-amber-200' },
    archived:      { label: '○ archived',       cls: 'border-slate-400/30 bg-slate-500/10 text-slate-300' },
  }

  return (
    <section id="projects" className="relative overflow-hidden border-b border-white/10 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 max-w-3xl"
        >
          <div className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-fuchsia-300">
            Projects
          </div>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            What I'm building right now
          </h2>
          <p className="mt-3 text-lg leading-8 text-slate-300">
            A mix of solutions-engineering work, real-world platform projects, and the AI &amp; data-science learning track I'm on. New projects added as they ship.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((p, i) => {
            const a = accents[p.accent]
            const s = statusBadge[p.status]
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col rounded-3xl border ${a.ring} p-6 backdrop-blur`}
              >
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className={`inline-flex items-center rounded-full border ${s.cls} px-3 py-1 text-xs font-medium tracking-wide`}>
                    {s.label}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold text-white">{p.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-slate-300">
                  {p.tagline}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className={`inline-flex items-center rounded-md ${a.tag} px-2.5 py-1 text-xs font-medium`}>
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a
                    href={p.href}
                    target={p.external ? '_blank' : undefined}
                    rel={p.external ? 'noreferrer' : undefined}
                    className={`inline-flex items-center justify-center gap-2 rounded-2xl ${a.cta} px-5 py-3 text-sm font-semibold text-white transition`}
                  >
                    {p.cta} {p.external ? '↗' : '→'}
                  </a>
                  {p.secondary && (
                    <a
                      href={p.secondary.href}
                      target={p.external ? '_blank' : undefined}
                      rel={p.external ? 'noreferrer' : undefined}
                      className="inline-flex items-center text-sm font-medium text-slate-300 underline-offset-4 transition hover:text-white hover:underline"
                    >
                      {p.secondary.label}
                    </a>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 text-center text-sm text-slate-500"
        >
          More projects in flight — check back, or follow along on{' '}
          <a href="https://github.com/fabiorollin" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white underline-offset-4 hover:underline">
            GitHub
          </a>
          {' '}and{' '}
          <a href="https://www.linkedin.com/in/fabiorollin" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white underline-offset-4 hover:underline">
            LinkedIn
          </a>.
        </motion.p>
      </div>
    </section>
  )
}

// ─── Live-platform section: stats grid + topology animation ─────────────────
function LivePlatform() {
  const stats = [
    { label: 'Apps via Teleport SSO · contacts · grafana · prometheus · headlamp · alertmanager', to: 5, suffix: '',  color: 'text-indigo-200',  ring: 'border-indigo-400/30 bg-indigo-500/10'  },
    { label: 'Databases protected · RDS Aurora + in-cluster MySQL',  to: 2, suffix: '',  color: 'text-cyan-200',    ring: 'border-cyan-400/30 bg-cyan-500/10'    },
    { label: 'EKS cluster · casual-blues-goose · ~36 pods',          to: 1, suffix: '',  color: 'text-fuchsia-200', ring: 'border-fuchsia-400/30 bg-fuchsia-500/10' },
    { label: 'EC2 server · enrolled via SSM auto-discovery',         to: 1, suffix: '',  color: 'text-emerald-200', ring: 'border-emerald-400/30 bg-emerald-500/10' },
  ]

  const fade = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  }

  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-slate-950">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute left-1/4 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-indigo-600 blur-[120px]" />
        <div className="absolute right-1/4 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-fuchsia-600 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <motion.div {...fade} className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-300" />
              </span>
              Live · running now
            </div>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Platform at a glance</h2>
            <p className="mt-3 max-w-2xl text-slate-300">
              Every privileged path to Acme Trading's infrastructure flows through one identity layer. Numbers update on each access event.
            </p>
          </div>
        </motion.div>

        {/* Stats grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={`rounded-3xl border ${s.ring} p-6 backdrop-blur`}
            >
              <div className={`text-5xl font-semibold tracking-tight ${s.color}`}>
                <Counter to={s.to} suffix={s.suffix} />
              </div>
              <div className="mt-3 text-sm text-slate-300">{s.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Demo architecture — animated SVG (replaces Topology in this slot) */}
        <motion.div {...fade} transition={{ ...fade.transition, delay: 0.25 }} className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <div className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
            How everything talks
          </div>
          <DemoArchitectureDiagram />
        </motion.div>
      </div>
    </section>
  )
}

// ─── Control Plane closing section · uses Topology at the bottom of the page
function ControlPlane() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-gradient-to-br from-fuchsia-950/40 via-indigo-950/30 to-slate-950">
      <div className="absolute inset-0 opacity-25 pointer-events-none">
        <div className="absolute left-1/3 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-fuchsia-600 blur-[120px]" />
        <div className="absolute right-1/3 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-indigo-600 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 max-w-3xl"
        >
          <div className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-fuchsia-300">
            Closing thought
          </div>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Identity is the control plane
          </h2>
          <p className="mt-3 text-lg leading-8 text-slate-300">
            Whoever the actor — engineer, CI/CD pipeline, compliance auditor — and whatever the resource — cluster, server, database, app — every privileged path goes through one identity layer. That's the entire bet.
          </p>
        </motion.div>

        <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-8 backdrop-blur">
          <Topology />
        </div>
      </div>
    </section>
  )
}

// ─── Animated topology: clients → Teleport → resources ──────────────────────
function Topology() {
  const path = {
    initial: { pathLength: 0, opacity: 0 },
    whileInView: { pathLength: 1, opacity: 1 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 1.2, ease: 'easeInOut' },
  }
  const pulse = {
    initial: { offsetDistance: '0%', opacity: 0 },
    animate: { offsetDistance: '100%', opacity: [0, 1, 1, 0] },
  }

  // Coordinates (SVG viewBox 800x260)
  const left = [
    { y: 50,  label: 'Engineer',  sub: '' },
    { y: 130, label: 'CI/CD',      sub: 'github actions' },
    { y: 210, label: 'Compliance', sub: 'auditor' },
  ]
  const right = [
    { y: 30,  label: 'EKS',  sub: 'casual-blues-goose' },
    { y: 100, label: 'RDS',  sub: 'aurora pg' },
    { y: 170, label: 'EC2',  sub: 'backup server' },
    { y: 240, label: 'Apps', sub: 'contacts · grafana' },
  ]

  return (
    <svg viewBox="0 0 860 280" className="h-auto w-full">
      <defs>
        <linearGradient id="t-line-l" x1="140" y1="0" x2="400" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#a5b4fc" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#a5b4fc" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id="t-line-r" x1="460" y1="0" x2="680" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#f0abfc" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#f0abfc" stopOpacity="0.15" />
        </linearGradient>
      </defs>

      {/* Left → Teleport lines */}
      {left.map((n, i) => (
        <motion.line
          key={`L${i}`}
          x1={140} y1={n.y + 10}
          x2={400} y2={140}
          stroke="url(#t-line-l)"
          strokeWidth="1.5"
          {...path}
          transition={{ ...path.transition, delay: 0.1 + i * 0.1 }}
        />
      ))}

      {/* Teleport → Right lines */}
      {right.map((n, i) => (
        <motion.line
          key={`R${i}`}
          x1={460} y1={140}
          x2={680} y2={n.y + 10}
          stroke="url(#t-line-r)"
          strokeWidth="1.5"
          {...path}
          transition={{ ...path.transition, delay: 0.4 + i * 0.08 }}
        />
      ))}

      {/* Left nodes */}
      {left.map((n, i) => (
        <g key={`Ln${i}`}>
          <rect x={20} y={n.y} width={120} height={40} rx={10}
            fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.15)" />
          <text x={80} y={n.sub ? n.y + 18 : n.y + 25} fill="#e2e8f0" fontSize="13" fontWeight="500" textAnchor="middle">
            {n.label}
          </text>
          {n.sub ? (
            <text x={80} y={n.y + 33} fill="#94a3b8" fontSize="10" textAnchor="middle">
              {n.sub}
            </text>
          ) : null}
        </g>
      ))}

      {/* Right nodes */}
      {right.map((n, i) => (
        <g key={`Rn${i}`}>
          <rect x={680} y={n.y} width={160} height={32} rx={9}
            fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.15)" />
          <text x={760} y={n.y + 14} fill="#e2e8f0" fontSize="12" fontWeight="500" textAnchor="middle">
            {n.label}
          </text>
          <text x={760} y={n.y + 26} fill="#94a3b8" fontSize="9" textAnchor="middle">
            {n.sub}
          </text>
        </g>
      ))}

      {/* Teleport central node — pulsing */}
      <motion.circle
        cx={430} cy={140} r={50}
        fill="rgba(99,102,241,0.15)"
        stroke="rgba(165,180,252,0.6)"
        strokeWidth="2"
        initial={{ scale: 0.85, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      />
      <motion.circle
        cx={430} cy={140} r={50}
        fill="none"
        stroke="rgba(165,180,252,0.4)"
        strokeWidth="2"
        animate={{ r: [50, 70, 50], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
      />
      <text x={430} y={138} fill="#fff" fontSize="16" fontWeight="500" textAnchor="middle">
        TELEPORT
      </text>
      <text x={430} y={156} fill="#a5b4fc" fontSize="10" textAnchor="middle" letterSpacing="2">
        identity proxy
      </text>
    </svg>
  )
}

// ─── Before/After comparison ────────────────────────────────────────────────
function BeforeAfter() {
  const fade = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
  }

  const beforePoints = [
    'Multiple credentials per user — VPN cert, kubeconfig, SSH key, DB password',
    'Network is the trust boundary — once on the VPN, broad access',
    'Audit fragmented across CloudTrail, K8s audit log, DB logs',
    'No per-session MFA — single login covers hours of activity',
  ]
  const afterPoints = [
    'One short-lived cert per session, federated from the IdP',
    'Identity is the trust boundary — every connection authenticated',
    'Single audit log, every privileged session recorded',
    'Per-session MFA — hardware key tap on every elevated action',
  ]

  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <motion.div {...fade} transition={{ duration: 0.6 }} className="mb-12 max-w-3xl">
          <div className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-fuchsia-300">
            How access changed
          </div>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            From fragmented credentials to one identity layer
          </h2>
          <p className="mt-3 text-lg leading-8 text-slate-300">
            The same engineer, the same resources — two very different operating models. The left is how most teams still work today. The right is the demo running on this site.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* BEFORE panel */}
          <motion.div
            {...fade}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-amber-400/20 bg-amber-500/5 p-6"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-amber-200">
              Before · without Teleport
            </div>
            <h3 className="text-2xl font-semibold text-white">Direct, fragmented access</h3>
            <p className="mt-2 text-sm text-slate-300">
              Engineers carry a kit of credentials. Trust is network-bound. Audit is scattered.
            </p>

            <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/60 p-5">
              <BeforeDiagram />
            </div>

            <ul className="mt-6 space-y-2.5 text-sm leading-6 text-slate-300">
              {beforePoints.map((p) => (
                <li key={p} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-400/70" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* AFTER panel */}
          <motion.div
            {...fade}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-3xl border border-emerald-400/20 bg-emerald-500/5 p-6"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200">
              After · with Teleport
            </div>
            <h3 className="text-2xl font-semibold text-white">One identity, one audit log</h3>
            <p className="mt-2 text-sm text-slate-300">
              Same engineer, same resources — but every privileged path goes through one short-lived cert.
            </p>

            <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/60 p-5">
              <AfterDiagram />
            </div>

            <ul className="mt-6 space-y-2.5 text-sm leading-6 text-slate-300">
              {afterPoints.map((p) => (
                <li key={p} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400/70" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ─── Before diagram: chaotic, multi-cred ────────────────────────────────────
function BeforeDiagram() {
  // Each line has its own pulse delay → visual fragmentation
  const lines = [
    { x2: 380, y2: 30,  color: '#f87171', label: 'VPN cert' },     // red
    { x2: 380, y2: 80,  color: '#fbbf24', label: 'kubeconfig' },   // amber
    { x2: 380, y2: 130, color: '#34d399', label: 'DB password' },  // emerald
    { x2: 380, y2: 180, color: '#a78bfa', label: 'SSH key' },      // purple
    { x2: 380, y2: 230, color: '#60a5fa', label: 'AWS access key' }, // blue
  ]
  const targets = [
    { y: 20,  label: 'VPN gateway' },
    { y: 70,  label: 'Kubernetes' },
    { y: 120, label: 'Database' },
    { y: 170, label: 'Server' },
    { y: 220, label: 'Cloud console' },
  ]

  return (
    <svg viewBox="0 0 500 270" className="h-auto w-full">
      {/* Engineer node */}
      <rect x={10} y={110} width={100} height={50} rx={10}
        fill="rgba(251,191,36,0.08)" stroke="rgba(251,191,36,0.4)" strokeWidth="1.5" />
      <text x={60} y={132} fill="#fde68a" fontSize="13" fontWeight="500" textAnchor="middle">Engineer</text>
      <text x={60} y={148} fill="#fcd34d" fontSize="9" textAnchor="middle">5 credentials</text>

      {/* Lines with independent pulses */}
      {lines.map((l, i) => (
        <g key={i}>
          <line x1={110} y1={135} x2={l.x2} y2={l.y2 + 15}
            stroke={l.color} strokeOpacity="0.5" strokeWidth="1.5" />
          <motion.circle
            r={3}
            fill={l.color}
            animate={{
              cx: [110, l.x2],
              cy: [135, l.y2 + 15],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 2.2,
              delay: i * 0.4,
              repeat: Infinity,
              ease: 'linear',
              repeatDelay: 0.5,
            }}
          />
          <text x={(110 + l.x2) / 2} y={((135 + l.y2 + 15) / 2) - 4}
            fill={l.color} fillOpacity="0.85" fontSize="9" textAnchor="middle">{l.label}</text>
        </g>
      ))}

      {/* Right-side resource nodes */}
      {targets.map((t, i) => (
        <g key={`t${i}`}>
          <rect x={380} y={t.y} width={110} height={30} rx={7}
            fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
          <text x={435} y={t.y + 19} fill="#e2e8f0" fontSize="11" textAnchor="middle">{t.label}</text>
        </g>
      ))}
    </svg>
  )
}

// ─── After diagram: clean, identity-mediated ────────────────────────────────
function AfterDiagram() {
  const path = {
    initial: { pathLength: 0, opacity: 0 },
    whileInView: { pathLength: 1, opacity: 1 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 1.2, ease: 'easeInOut' },
  }
  const targets = [
    { y: 20,  label: 'Kubernetes' },
    { y: 70,  label: 'Database' },
    { y: 120, label: 'Server' },
    { y: 170, label: 'Application' },
  ]

  return (
    <svg viewBox="0 0 500 270" className="h-auto w-full">
      {/* Engineer */}
      <rect x={10} y={110} width={100} height={50} rx={10}
        fill="rgba(52,211,153,0.08)" stroke="rgba(52,211,153,0.4)" strokeWidth="1.5" />
      <text x={60} y={132} fill="#a7f3d0" fontSize="13" fontWeight="500" textAnchor="middle">Engineer</text>
      <text x={60} y={148} fill="#6ee7b7" fontSize="9" textAnchor="middle">1 identity</text>

      {/* Single line to Teleport */}
      <motion.line x1={110} y1={135} x2={210} y2={135}
        stroke="rgba(110,231,183,0.6)" strokeWidth="2"
        {...path} />
      <motion.circle r={3} fill="#6ee7b7"
        animate={{ cx: [110, 210], cy: [135, 135], opacity: [0, 1, 1, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'linear', repeatDelay: 0.4 }} />
      <text x={160} y={130} fill="#6ee7b7" fontSize="9" textAnchor="middle">short-lived cert</text>

      {/* Teleport node — pulsing */}
      <motion.circle cx={260} cy={135} r={45}
        fill="rgba(110,231,183,0.10)" stroke="rgba(110,231,183,0.5)" strokeWidth="2"
        initial={{ scale: 0.85, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }} />
      <motion.circle cx={260} cy={135} r={45}
        fill="none" stroke="rgba(110,231,183,0.4)" strokeWidth="1.5"
        animate={{ r: [45, 60, 45], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }} />
      <text x={260} y={132} fill="#fff" fontSize="13" fontWeight="500" textAnchor="middle">TELEPORT</text>
      <text x={260} y={148} fill="#a7f3d0" fontSize="9" textAnchor="middle">identity proxy</text>

      {/* Lines to resources */}
      {targets.map((t, i) => (
        <motion.line key={`l${i}`}
          x1={305} y1={135} x2={380} y2={t.y + 15}
          stroke="rgba(110,231,183,0.45)" strokeWidth="1.5"
          {...path}
          transition={{ ...path.transition, delay: 0.4 + i * 0.08 }} />
      ))}

      {/* Right-side resource nodes */}
      {targets.map((t, i) => (
        <g key={`t${i}`}>
          <rect x={380} y={t.y} width={110} height={30} rx={7}
            fill="rgba(255,255,255,0.04)" stroke="rgba(110,231,183,0.20)" strokeWidth="1" />
          <text x={435} y={t.y + 19} fill="#e2e8f0" fontSize="11" textAnchor="middle">{t.label}</text>
        </g>
      ))}
    </svg>
  )
}

// ─── Demo Architecture · animated Framer Motion version ────────────────────
function DemoArchitectureDiagram() {
  // Container envelopes — drawn dashed, fade in sequentially
  const envelopes = [
    { x: 320, y: 30,  w: 760, h: 720, label: 'AWS Cloud',      color: '#94a3b8' },
    { x: 360, y: 70,  w: 700, h: 660, label: 'AWS Cluster',    color: '#64748b' },
    { x: 400, y: 110, w: 540, h: 580, label: 'EKS Cluster',    color: '#a5b4fc' },
  ]

  // Inside-EKS nodes
  const inside = [
    { x: 440, y: 160, w: 130, h: 50, label: 'Web Server',      sub: 'service / ingress', tone: 'app',  icon: 'server' },
    { x: 590, y: 160, w: 130, h: 50, label: 'Trading Apps',    sub: 'workloads',         tone: 'app',  icon: 'cube' },
    { x: 740, y: 160, w: 130, h: 50, label: 'Prometheus',      sub: 'metrics',           tone: 'app',  icon: 'fire' },

    { x: 440, y: 270, w: 130, h: 50, label: 'Trading Contacts', sub: 'webapp',           tone: 'app',  icon: 'users' },
    { x: 590, y: 270, w: 130, h: 50, label: 'MySQL',            sub: 'in-cluster mTLS',  tone: 'data', icon: 'cylinder' },
    { x: 740, y: 270, w: 130, h: 50, label: 'Grafana',          sub: 'dashboards',       tone: 'app',  icon: 'bars' },

    { x: 590, y: 380, w: 130, h: 50, label: 'K8s API Server',  sub: 'control plane',     tone: 'sys',  icon: 'gear' },
    { x: 740, y: 380, w: 130, h: 50, label: 'Headlamp',         sub: 'k8s ui',           tone: 'app',  icon: 'window' },

    { x: 510, y: 500, w: 200, h: 60, label: 'Teleport Service', sub: 'in-cluster · kube · app · db', tone: 'tp', icon: 'shield' },
  ]

  // Outside EKS but inside AWS
  const outside = [
    { x: 980, y: 270, w: 110, h: 50, label: 'RDS',  sub: 'aurora pg',     tone: 'data', icon: 'cylinder' },
    { x: 980, y: 380, w: 110, h: 50, label: 'EC2',  sub: 'backup server', tone: 'sys',  icon: 'server' },
  ]

  // Outside AWS Cloud entirely
  const external = [
    { x: 30,  y: 250, w: 120, h: 56, label: 'User',         sub: 'browser',                 tone: 'ext',      icon: 'user' },
    { x: 180, y: 250, w: 110, h: 56, label: 'Internet',     sub: '',                        tone: 'ext-soft', icon: 'globe' },
    { x: 30,  y: 530, w: 200, h: 70, label: 'Admin Portal', sub: 'admin · dev · sso',       tone: 'tp',       icon: 'key' },
  ]

  // Small monochrome icon paths (14×14 viewport, stroke-rendered)
  const icons = {
    server:   'M1 3 H13 V6 H1 Z M1 7 H13 V10 H1 Z M1 11 H13 V14 H1 Z',
    cube:     'M7 1 L13 3.5 V10 L7 13 L1 10 V3.5 Z M7 7 V13 M1 3.5 L7 7 L13 3.5',
    cylinder: 'M1 3 Q 1 1.5 7 1.5 Q 13 1.5 13 3 V11 Q 13 12.5 7 12.5 Q 1 12.5 1 11 Z M1 3 Q 1 4.5 7 4.5 Q 13 4.5 13 3',
    user:     'M7 7 a 2.5 2.5 0 1 0 0 -5 a 2.5 2.5 0 1 0 0 5 M2 13 Q 2 8 7 8 Q 12 8 12 13',
    users:    'M5 5.5 a 2 2 0 1 0 0 -4 a 2 2 0 1 0 0 4 M9 5.5 a 2 2 0 1 0 0 -4 a 2 2 0 1 0 0 4 M1 12 Q 1 7.5 5 7.5 M9 7.5 Q 13 7.5 13 12',
    globe:    'M7 1 a 6 6 0 1 0 0 12 a 6 6 0 1 0 0 -12 M1 7 H13 M7 1 Q 11 7 7 13 M7 1 Q 3 7 7 13',
    shield:   'M7 1 L12 3.5 V8 Q 12 11.5 7 13 Q 2 11.5 2 8 V3.5 Z',
    fire:     'M7 1 Q 10 4.5 9 7.5 Q 11.5 7 10.5 10 Q 10.5 13 7 13 Q 3.5 13 3.5 10 Q 2.5 7 5 7.5 Q 4 4.5 7 1 Z',
    bars:     'M1.5 13 V8 H4 V13 Z M5 13 V4 H7.5 V13 Z M8.5 13 V9.5 H11 V13 Z',
    window:   'M1.5 3 H12.5 V12 H1.5 Z M1.5 5.5 H12.5',
    gear:     'M7 4.5 a 2.5 2.5 0 1 0 0 5 a 2.5 2.5 0 1 0 0 -5 M7 1 V2.5 M7 11.5 V13 M1 7 H2.5 M11.5 7 H13 M2.5 2.5 L3.5 3.5 M10.5 10.5 L11.5 11.5 M2.5 11.5 L3.5 10.5 M10.5 3.5 L11.5 2.5',
    key:      'M4 7 a 3 3 0 1 0 0 -0.01 M7 7 H13 M11 7 V9 M13 7 V10',
  }

  // Connections — { from: [x,y], to: [x,y], label?, color, delay }
  // Use arrowhead for direction.
  const C = {
    app: '#60a5fa',     // blue — app traffic
    data: '#34d399',    // green — data
    sys: '#94a3b8',     // gray — system
    tp: '#a78bfa',      // purple — teleport identity
    ext: '#e2e8f0',     // white — external
  }
  const connections = [
    // User → Internet → Web Server
    { x1: 150, y1: 278, x2: 180, y2: 278, color: C.ext, delay: 0.0, label: '' },
    { x1: 290, y1: 278, x2: 440, y2: 185, color: C.app, delay: 0.05, label: 'HTTPS' },
    // Web Server → Trading Apps
    { x1: 570, y1: 185, x2: 590, y2: 185, color: C.app, delay: 0.10, label: '' },
    // Web Server → Trading Contacts
    { x1: 505, y1: 210, x2: 505, y2: 270, color: C.app, delay: 0.12, label: 'serves' },
    // Trading Contacts → MySQL
    { x1: 570, y1: 295, x2: 590, y2: 295, color: C.data, delay: 0.15, label: '' },
    // Trading Apps → MySQL
    { x1: 655, y1: 210, x2: 655, y2: 270, color: C.data, delay: 0.15, label: '' },
    // Trading Apps → Prometheus (cluster metrics)
    { x1: 720, y1: 185, x2: 740, y2: 185, color: C.app, delay: 0.18, label: '' },
    // MySQL → Prometheus (mysqld-exporter scrape)
    { x1: 720, y1: 270, x2: 760, y2: 215, color: C.app, delay: 0.20, label: 'scrape' },
    // Prometheus → Grafana
    { x1: 805, y1: 210, x2: 805, y2: 270, color: C.app, delay: 0.22, label: '' },
    // Headlamp → K8s API
    { x1: 740, y1: 405, x2: 720, y2: 405, color: C.sys, delay: 0.25, label: '' },
    // K8s API → Grafana (metrics/dashboards)
    { x1: 720, y1: 380, x2: 805, y2: 320, color: C.sys, delay: 0.26, label: 'metrics' },
    // Teleport → K8s API
    { x1: 655, y1: 500, x2: 655, y2: 430, color: C.tp, delay: 0.30, label: 'kubectl' },
    // Teleport → RDS (DB access / audit)
    { x1: 710, y1: 525, x2: 980, y2: 295, color: C.tp, delay: 0.34, label: 'db access' },
    // Teleport → EC2 (backup server)
    { x1: 710, y1: 535, x2: 980, y2: 405, color: C.tp, delay: 0.36, label: 'tsh ssh' },
    // Admin Portal → Teleport (sso)
    { x1: 230, y1: 565, x2: 510, y2: 530, color: C.tp, delay: 0.42, label: 'sso · platform access' },
  ]

  // Path connections — for routes that need to detour around obstacles
  const pathConnections = [
    {
      // Trading Contacts → RDS, routed L-shape under EKS cluster
      d: 'M 505 320 L 505 720 L 1090 720 L 1090 295',
      color: C.data,
      delay: 0.38,
      label: 'reads contacts',
      labelAt: [800, 712],
      dashed: true,
    },
  ]

  // Tone styling per node
  const tones = {
    app:       { fill: 'rgba(59,130,246,0.10)',  stroke: 'rgba(96,165,250,0.45)',  text: '#dbeafe' },
    data:      { fill: 'rgba(16,185,129,0.10)',  stroke: 'rgba(52,211,153,0.45)',  text: '#a7f3d0' },
    sys:       { fill: 'rgba(100,116,139,0.10)', stroke: 'rgba(148,163,184,0.45)', text: '#e2e8f0' },
    tp:        { fill: 'rgba(99,102,241,0.18)',  stroke: 'rgba(167,139,250,0.65)', text: '#e9d5ff' },
    ext:       { fill: 'rgba(255,255,255,0.06)', stroke: 'rgba(255,255,255,0.30)', text: '#f1f5f9' },
    'ext-soft':{ fill: 'rgba(255,255,255,0.04)', stroke: 'rgba(255,255,255,0.20)', text: '#cbd5e1' },
  }

  const drawIn = {
    initial: { pathLength: 0, opacity: 0 },
    whileInView: { pathLength: 1, opacity: 1 },
    viewport: { once: true, margin: '-80px' },
  }
  const fadeIn = (delay) => ({
    initial: { opacity: 0, scale: 0.92 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] },
  })

  // Pulses to loop on key paths
  const pulsePaths = [
    { from: [290, 278], to: [440, 185], color: C.app, dur: 2.2, delay: 0 },     // Internet → Web
    { from: [230, 565], to: [510, 530], color: C.tp,  dur: 2.6, delay: 0.5 },   // Admin → Teleport
    { from: [655, 500], to: [655, 430], color: C.tp,  dur: 2.0, delay: 1.0 },   // Teleport → K8s
    { from: [710, 525], to: [980, 295], color: C.tp,  dur: 2.6, delay: 1.4 },   // Teleport → RDS
    { from: [710, 535], to: [980, 405], color: C.tp,  dur: 2.4, delay: 0.9 },   // Teleport → EC2
  ]

  return (
    <svg viewBox="0 0 1100 760" className="h-auto w-full">
      <defs>
        <marker id="arrow" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L0,6 L7,3 z" fill="rgba(255,255,255,0.55)" />
        </marker>
      </defs>

      {/* Envelopes */}
      {envelopes.map((e, i) => (
        <g key={`env${i}`}>
          <motion.rect
            x={e.x} y={e.y} width={e.w} height={e.h} rx={18}
            fill="rgba(255,255,255,0.015)"
            stroke={e.color}
            strokeOpacity="0.45"
            strokeWidth="1.25"
            strokeDasharray="6 4"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: `${e.x + e.w/2}px ${e.y + e.h/2}px` }}
          />
          <motion.text
            x={e.x + 14} y={e.y + 22}
            fill={e.color} fillOpacity="0.85"
            fontSize="12" fontWeight="500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.12 + 0.4 }}
          >
            {e.label}
          </motion.text>
        </g>
      ))}

      {/* All nodes (external + outside EKS + inside EKS) */}
      {[...external, ...outside, ...inside].map((n, i) => {
        const t = tones[n.tone]
        return (
          <motion.g key={`n${n.label}${i}`} {...fadeIn(0.35 + i * 0.04)}>
            <rect x={n.x} y={n.y} width={n.w} height={n.h} rx={9}
              fill={t.fill} stroke={t.stroke} strokeWidth="1.25" />
            {n.icon && icons[n.icon] ? (
              <g transform={`translate(${n.x + 8}, ${n.y + 7})`}>
                <path d={icons[n.icon]}
                  fill="none" stroke={t.text} strokeOpacity="0.85"
                  strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
              </g>
            ) : null}
            <text x={n.x + n.w/2} y={n.sub ? n.y + n.h/2 - 2 : n.y + n.h/2 + 4}
              fill={t.text} fontSize="12.5" fontWeight="500" textAnchor="middle">
              {n.label}
            </text>
            {n.sub ? (
              <text x={n.x + n.w/2} y={n.y + n.h/2 + 13}
                fill={t.text} fillOpacity="0.6" fontSize="9.5" textAnchor="middle">
                {n.sub}
              </text>
            ) : null}
          </motion.g>
        )
      })}

      {/* Connection lines — drawn last so they layer above envelopes */}
      {connections.map((c, i) => (
        <motion.line
          key={`c${i}`}
          x1={c.x1} y1={c.y1} x2={c.x2} y2={c.y2}
          stroke={c.color} strokeOpacity="0.65" strokeWidth="1.5"
          strokeDasharray={c.dashed ? '4 4' : undefined}
          markerEnd="url(#arrow)"
          {...drawIn}
          transition={{ duration: 0.7, delay: 0.9 + c.delay, ease: 'easeInOut' }}
        />
      ))}

      {/* Path connections — detour routes (e.g., Trading Contacts → RDS under EKS) */}
      {pathConnections.map((p, i) => (
        <motion.path
          key={`pc${i}`}
          d={p.d}
          stroke={p.color} strokeOpacity="0.65" strokeWidth="1.5" fill="none"
          strokeDasharray={p.dashed ? '4 4' : undefined}
          markerEnd="url(#arrow)"
          {...drawIn}
          transition={{ duration: 0.9, delay: 0.9 + p.delay, ease: 'easeInOut' }}
        />
      ))}
      {pathConnections.filter(p => p.label).map((p, i) => (
        <motion.text
          key={`pcl${i}`}
          x={p.labelAt[0]} y={p.labelAt[1]}
          fill={p.color} fillOpacity="0.9"
          fontSize="9.5" fontWeight="500" textAnchor="middle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4, delay: 1.4 + p.delay }}
        >
          {p.label}
        </motion.text>
      ))}

      {/* Connection labels */}
      {connections.filter(c => c.label).map((c, i) => {
        const mx = (c.x1 + c.x2) / 2
        const my = (c.y1 + c.y2) / 2
        return (
          <motion.text
            key={`cl${i}`}
            x={mx} y={my - 4}
            fill={c.color} fillOpacity="0.9"
            fontSize="9.5" fontWeight="500" textAnchor="middle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.4, delay: 1.2 + c.delay }}
          >
            {c.label}
          </motion.text>
        )
      })}

      {/* Continuous data-flow pulses */}
      {pulsePaths.map((p, i) => (
        <motion.circle
          key={`p${i}`} r={3.5} fill={p.color}
          initial={{ cx: p.from[0], cy: p.from[1], opacity: 0 }}
          animate={{
            cx: [p.from[0], p.to[0]],
            cy: [p.from[1], p.to[1]],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: p.dur,
            delay: 2.0 + p.delay,
            repeat: Infinity,
            ease: 'linear',
            repeatDelay: 0.4,
          }}
        />
      ))}
    </svg>
  )
}

function DemoArchitecture() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 max-w-3xl"
        >
          <div className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
            Demo architecture
          </div>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            How everything talks
          </h2>
          <p className="mt-3 text-lg leading-8 text-slate-300">
            User traffic enters through the Web Server. Admin and dev access flows through the Teleport Service. Every privileged path — kube, db, ssh — funnels through one identity layer.
          </p>
        </motion.div>

        <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur">
          <DemoArchitectureDiagram />
        </div>
      </div>
    </section>
  )
}

function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="mb-10 max-w-3xl">
      <div className="text-sm font-semibold uppercase tracking-[0.24em] text-fuchsia-300">{eyebrow}</div>
      <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
      {text ? <p className="mt-4 text-lg leading-8 text-slate-300">{text}</p> : null}
    </div>
  )
}

function TopNav() {
  return (
    <nav className="mb-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur">
      <div className="flex items-center gap-3 text-lg font-semibold text-white">
        <a href="/" className="hover:text-indigo-300 transition">Fabio Rollin</a>
      </div>
      <div className="flex flex-wrap gap-5 text-sm text-slate-300">
        <a href="/" className="hover:text-white">Home</a>
        <a href="#projects" className="hover:text-white">Projects</a>
        <a href="https://blog.fabiorollin.com" target="_blank" rel="noreferrer" className="hover:text-white">Blog ↗</a>
        <a href="https://blog.fabiorollin.com/digest/" target="_blank" rel="noreferrer" className="hover:text-white">Weekly digest ↗</a>
        <a href="https://trading.fabiorollin.com/teleport" target="_blank" rel="noreferrer" className="hover:text-white">Teleport demo ↗</a>
        <a href="https://www.mygreatlearning.com/eportfolio/fabio-rollin-ramos-vieira" target="_blank" rel="noreferrer" className="hover:text-white">MIT ↗</a>
      </div>
    </nav>
  )
}

function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-950 via-slate-950 to-slate-950">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-fuchsia-500 blur-3xl" />
          <div className="absolute right-0 top-24 h-72 w-72 rounded-full bg-cyan-500 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
          <TopNav />
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="mb-5 inline-flex items-center rounded-full border border-indigo-400/30 bg-indigo-400/10 px-4 py-2 text-sm font-medium text-indigo-200">
                Portfolio · projects in flight
              </div>
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Cloud, Kubernetes, and applied AI projects
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                I'm Fabio Rollin — Solutions Engineer focused on cloud infrastructure, Kubernetes, identity-driven access, and applied AI. This site is where I keep links to the projects I'm building and the learning paths I'm on.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="rounded-2xl bg-indigo-500 px-6 py-4 text-base font-semibold text-white shadow-xl shadow-indigo-950/40 transition hover:bg-indigo-400"
                >
                  Browse projects
                </a>
                <a
                  href="https://blog.fabiorollin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl bg-fuchsia-500 px-6 py-4 text-base font-semibold text-white shadow-xl shadow-fuchsia-950/40 transition hover:bg-fuchsia-400"
                >
                  Read the blog ↗
                </a>
                <a
                  href="https://trading.fabiorollin.com/teleport"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-base font-semibold text-white transition hover:bg-white/10"
                >
                  Featured: Teleport demo ↗
                </a>
              </div>

              <div className="mt-10">
                <div className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Profile · find me
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://www.mygreatlearning.com/eportfolio/fabio-rollin-ramos-vieira"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-2xl border border-sky-400/30 bg-sky-500/10 px-5 py-3 text-sm font-semibold text-sky-100 transition hover:bg-sky-500/20"
                  >
                    <span aria-hidden="true" className="grid h-5 w-5 place-items-center rounded-md bg-sky-500/30 text-[10px] font-bold text-sky-100">MIT</span>
                    Applied AI &amp; Data Science
                  </a>
                  <a
                    href="https://www.linkedin.com/in/fabiorollin"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-2xl border border-blue-400/30 bg-blue-500/10 px-5 py-3 text-sm font-semibold text-blue-100 transition hover:bg-blue-500/20"
                  >
                    <span aria-hidden="true" className="grid h-5 w-5 place-items-center rounded-md bg-blue-500/30 text-[10px] font-bold text-blue-100">in</span>
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/fabiorollin"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-2xl border border-slate-400/30 bg-slate-500/10 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:bg-slate-500/20"
                  >
                    <span aria-hidden="true" className="grid h-5 w-5 place-items-center rounded-full bg-slate-500/30 text-[10px] font-bold text-slate-100">@</span>
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-fuchsia-950/20 backdrop-blur">
              <a href="https://www.linkedin.com/in/fabiorollin" target="_blank" rel="noreferrer">
                <img
                  src="/fabio.jpg"
                  alt="Fabio Rollin portrait"
                  className="mx-auto aspect-square w-full max-w-[12rem] rounded-[2rem] object-cover cursor-pointer"
                />
              </a>
            <div className="mt-6 text-center">
              <h2 className="text-2xl font-semibold text-white">Fabio Rollin</h2>
              <p className="mt-2 text-indigo-300">Solutions Engineer</p>

              <p className="mt-4 text-base leading-7 text-slate-300">
                I design and demonstrate secure infrastructure solutions that simplify how teams access Kubernetes, servers, and databases.
              </p>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Focused on identity driven access, cloud platforms, and real world implementations that balance security, usability, and scale.
              </p>
            </div>
            </div>
          </div>
        </div>
      </section>

      <ProjectsGrid />
      <LivePlatform />
      <BeforeAfter />
      <ControlPlane />
    </div>
  )
}

function TeleportProjectPage() {
  const pillars = [
    {
      title: 'Identity first access',
      text: 'Teleport shifts access decisions toward verified identity and short lived credentials instead of long lived shared access patterns.',
      icon: '🔐',
    },
    {
      title: 'Unified operator experience',
      text: 'Teams can discover Kubernetes, servers, and databases from one interface with a more consistent workflow.',
      icon: '🧭',
    },
    {
      title: 'Clear authorization model',
      text: 'Authentication is centralized while authorization remains explicit at the resource layer, creating stronger control boundaries.',
      icon: '🛡️',
    },
    {
      title: 'Audit ready platform',
      text: 'Access events and operational activity are easier to review from one control plane.',
      icon: '🧾',
    },
  ]

  const journey = [
    {
      step: '01',
      title: 'Integrated Amazon EKS',
      text: 'Connected Teleport to an Amazon EKS cluster and validated Kubernetes access through an identity driven workflow instead of relying only on direct cloud administration.',
    },
    {
      step: '02',
      title: 'Integrated Amazon EC2',
      text: 'Created and enrolled an Amazon EC2 server so it appeared directly in the Teleport GUI, showing how traditional compute resources can be managed through the same access platform.',
    },
    {
      step: '03',
      title: 'Integrated Amazon RDS PostgreSQL',
      text: 'Added a test Amazon RDS PostgreSQL database through AWS auto discovery, proving that database resources can also be surfaced and governed inside the Teleport experience.',
    },
    {
      step: '04',
      title: 'Validated unified access',
      text: 'Demonstrated that Kubernetes, servers, and databases could all be reached through one identity centric control plane with a consistent operator experience.',
    },
    {
      step: '05',
      title: 'Closed the authorization gap',
      text: 'Validated authentication, identified the Kubernetes RBAC issue, and fixed authorization so the access story was complete from identity to policy enforcement.',
    },
    {
      step: '06',
      title: 'Framed the business value',
      text: 'Positioned the solution as a broader access platform story that reduces tool sprawl, strengthens governance, and improves the operator experience across resource types.',
    },
  ]

  const screenshots = [
    {
      src: '/teleport-resources.png',
      title: 'Teleport resource inventory',
      text: 'Teleport GUI showing the Kubernetes cluster, enrolled EC2 server, and discovered applications in one interface.',
    },
    {
      src: '/eks-cluster.png',
      title: 'Amazon EKS validation',
      text: 'AWS EKS console view used to validate the running cluster and Teleport agent presence inside the environment.',
    },
    {
      src: '/grafana.png',
      title: 'Grafana monitoring dashboard',
      text: 'Grafana dashboard showing real-time metrics and observability for the platform using Prometheus data sources.',
    },
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <section id="overview" className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-indigo-950 via-slate-950 to-slate-950">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-fuchsia-500 blur-3xl" />
          <div className="absolute right-0 top-24 h-72 w-72 rounded-full bg-cyan-500 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
          <TopNav />
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="mb-5 inline-flex items-center rounded-full border border-indigo-400/30 bg-indigo-400/10 px-4 py-2 text-sm font-medium text-indigo-200">
                Teleport project presentation
              </div>
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                One access platform for Kubernetes, servers, and databases
              </h1>
              <p className="mt-4 text-xl text-indigo-300">Presented by Fabio Rollin</p>
              <p className="mt-2 max-w-2xl text-base text-slate-400">
                Teleport demo across Amazon EKS, Amazon EC2, Amazon RDS PostgreSQL, and Grafana.
              </p>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                This presentation shows how I used Teleport to bring Amazon EKS, Amazon EC2, Amazon RDS PostgreSQL and Grafna dashboard into one identity driven access experience. The goal was to show that Teleport can simplify secure access across different infrastructure types while preserving clear authorization boundaries.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-fuchsia-950/30 backdrop-blur">
              <a href="https://www.linkedin.com/in/fabiorollin" target="_blank" rel="noreferrer">
                <img
                  src="/fabio.jpg"
                  alt="Fabio Rollin portrait"
                  className="mx-auto aspect-square w-full max-w-[6rem] rounded-[1.5rem] object-cover cursor-pointer"
                />
              </a>
              <div className="mt-6 text-center">
                <div className="text-sm font-medium text-slate-300">Created and presented by</div>
                <div className="mt-2 text-2xl font-semibold text-white">Fabio Rollin</div>
                <div className="mt-2 text-slate-400">Solutions Engineer</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="screenshots" className="border-b border-white/10 bg-slate-900/70">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <SectionTitle
            eyebrow="Project evidence"
            title="Screenshots from the implementation"
            text="These screenshots show the project running in real infrastructure and help validate that the integrations were built and tested."
          />

          <div className="mb-8 flex flex-wrap gap-4">
            <a
              href="https://broken-tooth.trial.teleport.sh/web/cluster/broken-tooth.trial.teleport.sh/resources"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-2xl bg-indigo-500 px-6 py-4 text-base font-semibold text-white shadow-xl shadow-indigo-950/40 transition hover:bg-indigo-400"
            >
              <img src="/teleport-icon.png" alt="Teleport" className="h-5 w-5" />
              Open Teleport GUI
            </a>
            <a
              href="https://console.aws.amazon.com/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-base font-semibold text-white transition hover:bg-white/10"
            >
              <img src="/aws-icon.png" alt="AWS" className="h-5 w-5" />
              Open AWS Console
            </a>
          </div>

          <div className="flex flex-col gap-10">
            {screenshots.map((item) => (
              <div key={item.title} className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl shadow-black/20">
                <img 
                  src={item.src} 
                  alt={item.title} 
                  className="w-full max-h-[600px] object-contain bg-black"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-300">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="built-from-scratch" className="border-b border-white/10 bg-slate-900/70">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <SectionTitle
            eyebrow="Project scope"
            title="Built from scratch in AWS"
            text="This was not only a product walkthrough. The supporting environment was designed and created from scratch to validate a realistic customer scenario across infrastructure, Kubernetes, database access, and observability."
          />

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/20">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-300">
                What was built
              </div>
              <h3 className="mt-3 text-2xl font-semibold text-white">
                End to end environment creation
              </h3>
              <ul className="mt-4 space-y-3 text-slate-300">
                <li>Created the Amazon EKS environment from scratch for Kubernetes validation</li>
                <li>Provisioned supporting cloud infrastructure to host and test the solution</li>
                <li>Created the Amazon EC2 server used for Teleport node enrollment</li>
                <li>Created the Amazon RDS PostgreSQL database used for database discovery and access validation</li>
                <li>Built the Grafana dashboard layer to demonstrate observability and monitoring value</li>
                <li>Integrated all resources into one Teleport access story spanning Kubernetes, servers, databases, and dashboards</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/20">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
                Why this matters
              </div>
              <h3 className="mt-3 text-2xl font-semibold text-white">
                More than a simple product demo
              </h3>
              <p className="mt-4 leading-7 text-slate-300">
                By building the environment from the ground up, the project demonstrates architecture thinking, implementation capability, and validation across the full stack. It shows how the access platform fits into a realistic cloud deployment instead of an isolated lab screenshot.
              </p>
              <p className="mt-4 leading-7 text-slate-300">
                For a customer, this makes the demo more credible because it reflects the real work required to connect cloud resources, secure Kubernetes access, onboard servers, discover databases, and expose monitoring dashboards through one identity driven model.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-[2rem] border border-fuchsia-400/20 bg-fuchsia-500/5 p-8 shadow-2xl shadow-black/20">
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-fuchsia-300">
              Project outcome
            </div>
            <h3 className="mt-3 text-3xl font-semibold text-white">
              One project proving architecture, implementation, and customer value
            </h3>
            <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-300">
              The project proves that I can build the underlying AWS environment, deploy Kubernetes and observability components, integrate servers and databases, and then position Teleport as the unified access layer that secures and simplifies operations across the entire stack.
            </p>
          </div>
        </div>
      </section>
      <section id="customer-value" className="border-b border-white/10 bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <SectionTitle
            eyebrow="Customer outcomes"
            title="What this demo can deliver for a real customer"
            text="This demo is not only a technical validation. It shows how a customer can improve security, simplify access, reduce operational overhead, and create measurable business value across Kubernetes, servers, databases, and monitoring platforms."
          />

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/20">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-300">
                Demo goals
              </div>
              <h3 className="mt-3 text-2xl font-semibold text-white">
                What the customer validates
              </h3>
              <ul className="mt-4 space-y-3 text-slate-300">
                <li>Centralize access across Kubernetes, servers, databases, and observability tools</li>
                <li>Eliminate static credentials such as SSH keys, shared kubeconfigs, and embedded database access</li>
                <li>Enforce identity based access control with Role Based Access Control and least privilege</li>
                <li>Provide full audit logging and session traceability for operations and compliance</li>
                <li>Improve the operator experience with one consistent workflow across environments</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/20">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
                Business value
              </div>
              <h3 className="mt-3 text-2xl font-semibold text-white">
                What can be monetized
              </h3>
              <ul className="mt-4 space-y-3 text-slate-300">
                <li>Reduce financial exposure by lowering the risk created by static credentials and broad access</li>
                <li>Save engineering time by reducing access friction from minutes to seconds</li>
                <li>Consolidate overlapping access tools into one identity driven platform</li>
                <li>Improve audit readiness and reduce time spent on compliance reviews</li>
                <li>Standardize access patterns across cloud and on premises systems at scale</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/20">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-fuchsia-300">
                Customer benefits
              </div>
              <h3 className="mt-3 text-2xl font-semibold text-white">
                Real outcomes for operations
              </h3>
              <ul className="mt-4 space-y-3 text-slate-300">
                <li>Faster and more reliable access to production systems</li>
                <li>Stronger security posture through short lived certificates and identity based access</li>
                <li>Better visibility through centralized audit logs, recordings, and monitoring</li>
                <li>Improved developer and operator productivity with one portal and one access model</li>
                <li>Clearer accountability for every session, request, and privileged action</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 rounded-[2rem] border border-emerald-400/20 bg-emerald-500/5 p-8 shadow-2xl shadow-black/20">
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-300">
              Executive value
            </div>
            <h3 className="mt-3 text-3xl font-semibold text-white">
              One platform that improves security, efficiency, and governance
            </h3>
            <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-300">
              This demo shows how a customer can move from fragmented access patterns to one identity driven platform that reduces risk, accelerates operations, improves auditability, and supports growth across Kubernetes, servers, databases, and observability tooling.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <SectionTitle
          eyebrow="Why this matters"
          title="What Teleport changed in the operating model"
          text="The same environment can be reached in two very different ways. One is direct cloud administration. The other is identity aware access with stronger control boundaries, better auditability, and a cleaner story for scale."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-amber-400/20 bg-amber-500/5 p-6">
            <div className="mb-3 inline-flex rounded-full bg-amber-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-amber-200">
              Before
            </div>
            <h3 className="text-2xl font-semibold text-white">Direct cloud path</h3>
            <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/80 p-5">
              <div className="grid gap-4 text-center text-sm font-medium text-slate-200">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Engineer</div>
                <div className="text-fuchsia-300">↓</div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Cloud credentials</div>
                <div className="text-fuchsia-300">↓</div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Service specific tooling</div>
                <div className="text-fuchsia-300">↓</div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Separate operational paths</div>
              </div>
            </div>
            <ul className="mt-6 space-y-3 text-slate-300">
              <li>Works for administration</li>
              <li>Creates fragmented workflows</li>
              <li>Makes access stories harder to standardize</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-emerald-400/20 bg-emerald-500/5 p-6">
            <div className="mb-3 inline-flex rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200">
              After
            </div>
            <h3 className="text-2xl font-semibold text-white">Teleport centered path</h3>
            <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/80 p-5">
              <div className="grid gap-4 text-center text-sm font-medium text-slate-200">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Engineer</div>
                <div className="text-cyan-300">↓</div>
                <div className="rounded-2xl border border-cyan-400/20 bg-cyan-500/10 p-4">Teleport authentication</div>
                <div className="text-cyan-300">↓</div>
                <div className="rounded-2xl border border-cyan-400/20 bg-cyan-500/10 p-4">Unified resource discovery</div>
                <div className="text-cyan-300">↓</div>
                <div className="rounded-2xl border border-cyan-400/20 bg-cyan-500/10 p-4">Explicit authorization</div>
                <div className="text-cyan-300">↓</div>
                <div className="rounded-2xl border border-cyan-400/20 bg-cyan-500/10 p-4">Consistent access workflow</div>
              </div>
            </div>
            <ul className="mt-6 space-y-3 text-slate-300">
              <li>Identity drives access decisions</li>
              <li>Clusters, servers, and databases appear in one experience</li>
              <li>Security and usability improve together</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900/70">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <SectionTitle eyebrow="Solution pillars" title="Why the platform story is compelling" />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {pillars.map((item) => (
              <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/20">
                <div className="text-3xl">{item.icon}</div>
                <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="integrations" className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <SectionTitle
          eyebrow="Three integrations"
          title="Three integrations, one platform story"
          text="The EKS integration proves Kubernetes access, the EC2 integration proves server access, and the RDS PostgreSQL integration proves database access. Together they show that Teleport can unify infrastructure access through one identity driven experience."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/20">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-300">Integration 1</div>
            <h3 className="mt-3 text-2xl font-semibold text-white">Amazon EKS</h3>
            <p className="mt-3 leading-7 text-slate-300">
              First, the platform was connected to an Amazon EKS cluster. That established the Kubernetes story and showed how engineers could move from direct cloud access to a cleaner identity centered workflow.
            </p>
            <ol className="mt-4 list-inside list-decimal space-y-3 text-slate-300">
              <li>Connect the cluster to the access platform</li>
              <li>Verify cluster visibility in the Teleport experience</li>
              <li>Validate user authentication and Kubernetes authorization</li>
              <li>Demonstrate secure operational access to the cluster</li>
            </ol>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/20">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">Integration 2</div>
            <h3 className="mt-3 text-2xl font-semibold text-white">Amazon EC2</h3>
            <p className="mt-3 leading-7 text-slate-300">
              Next, an Amazon EC2 server was created and surfaced inside the Teleport GUI. This expanded the story from Kubernetes into traditional server access and showed that Teleport could present compute resources in the same control plane.
            </p>
            <ol className="mt-4 list-inside list-decimal space-y-3 text-slate-300">
              <li>Create and prepare the EC2 resource</li>
              <li>Enroll the server into the Teleport environment</li>
              <li>Confirm that the server appears in the Teleport GUI</li>
              <li>Show how operators can discover and access it centrally</li>
            </ol>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/20">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-fuchsia-300">Integration 3</div>
            <h3 className="mt-3 text-2xl font-semibold text-white">Amazon RDS PostgreSQL</h3>
            <p className="mt-3 leading-7 text-slate-300">
              Finally, a test Amazon RDS PostgreSQL database was added through AWS auto discovery for databases. That completed the message that Teleport can bring managed data services into the same access layer as clusters and servers.
            </p>
            <ol className="mt-4 list-inside list-decimal space-y-3 text-slate-300">
              <li>Create the test PostgreSQL database resource</li>
              <li>Enable discovery through the Teleport database workflow</li>
              <li>Confirm visibility inside the Teleport GUI</li>
              <li>Demonstrate a unified path to secure database connectivity</li>
            </ol>
          </div>
        </div>

        </section>

      

      <section id="why-teleport" className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionTitle
              eyebrow="How Teleport works"
              title="Core services and platform architecture"
              text="This section explains Teleport the way I would describe it to a customer. The platform centralizes access around identity, policy, and audit while keeping infrastructure resources private and reducing reliance on static credentials."
            />

            <div className="space-y-4">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-2xl font-semibold text-white">Auth Service</h3>
                <p className="mt-3 leading-7 text-slate-300">
                  The Auth Service is the brain of Teleport. It runs the certificate authority, stores cluster state, users, roles, connectors, and writes to the audit log. This is what allows Teleport to make identity central and issue short lived credentials instead of depending on static secrets.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-2xl font-semibold text-white">Proxy Service</h3>
                <p className="mt-3 leading-7 text-slate-300">
                  The Proxy Service is the public facing gateway. It handles protocol detection and routing, so the same port can serve the web UI, SSH sessions, Kubernetes API requests, and database connections through multiplex mode. For customers, this simplifies architecture and creates a consistent front door for access.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-2xl font-semibold text-white">Kubernetes Service</h3>
                <p className="mt-3 leading-7 text-slate-300">
                  The Kubernetes Service is the agent that connects Teleport to the Kubernetes API server. It maintains a reverse tunnel back to the proxy, which means the API server does not need to be directly exposed to the internet. This is one of the clearest examples of how Teleport supports a zero trust architecture.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-6">
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Customer value</div>
            <h2 className="mt-3 text-3xl font-semibold text-white">Security and operational advantages</h2>

            <div className="mt-6 grid gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <h3 className="text-lg font-semibold text-white">Identity based access control</h3>
                <p className="mt-2 leading-7 text-slate-300">Teleport makes identity the control plane so access decisions follow the authenticated user rather than trust in network location.</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <h3 className="text-lg font-semibold text-white">Short lived certificates</h3>
                <p className="mt-2 leading-7 text-slate-300">Instead of long lived keys and credentials, Teleport issues short lived certificates that reduce credential exposure and improve control.</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <h3 className="text-lg font-semibold text-white">Elimination of static credentials</h3>
                <p className="mt-2 leading-7 text-slate-300">By moving away from static kubeconfig secrets, SSH keys, and embedded database passwords, customers reduce one of the most common operational risks.</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <h3 className="text-lg font-semibold text-white">Role Based Access Control</h3>
                <p className="mt-2 leading-7 text-slate-300">Teleport maps users and groups into clear role definitions, which makes authorization easier to manage and scale across teams.</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <h3 className="text-lg font-semibold text-white">Least privilege and just in time access</h3>
                <p className="mt-2 leading-7 text-slate-300">The platform supports granting only the access needed for the task and only for the required time window, which aligns strongly with zero trust principles.</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <h3 className="text-lg font-semibold text-white">Centralized audit logging and session traceability</h3>
                <p className="mt-2 leading-7 text-slate-300">Teleport centralizes audit events and can record sessions, making investigations, compliance reviews, and operational accountability much stronger.</p>
              </div>
            </div>
         
          </div>
        </div>
      </section>

<section className="border-t border-white/10 bg-gradient-to-br from-fuchsia-600/10 via-indigo-600/10 to-slate-900">
  <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
    
    <div className="text-center max-w-4xl mx-auto">
      <div className="text-sm font-semibold uppercase tracking-[0.24em] text-fuchsia-300">
        Executive takeaway
      </div>

      <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-white">
        Identity becomes the control plane for infrastructure access
      </h2>

      <p className="mt-6 text-lg leading-8 text-slate-300">
        Teleport improves infrastructure access by treating identity as the control plane, replacing static trust with short lived credentials, and giving customers stronger visibility, governance, and operational simplicity across Kubernetes, servers, and databases.
      </p>

    </div>

  </div>
</section>

    </div>
  )
}

export default function App() {
  const path = typeof window !== 'undefined' ? window.location.pathname : '/'
  const normalizedPath = path.replace(/\/$/, '') || '/'

  if (normalizedPath === '/teleport') {
    return <TeleportProjectPage />
  }

  return <HomePage />
}
