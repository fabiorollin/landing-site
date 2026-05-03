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
        <a href="/teleport" className="hover:text-white">Teleport Project</a>
	<a href="/teleport#screenshots" className="hover:text-white">Evidence</a>
        <a href="/teleport#integrations" className="hover:text-white">Integrations</a>
        <a href="/teleport#why-teleport" className="hover:text-white">Why Teleport</a>
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
                Portfolio project landing page
              </div>
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Cloud, Kubernetes, and secure infrastructure access projects
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                I am Fabio Rollin, a solutions engineer focused on cloud infrastructure, Kubernetes, and secure access architecture. This site highlights one of my featured projects, a Teleport based infrastructure access demo spanning Amazon EKS, Amazon EC2, Amazon RDS PostgreSQL, and Grafana..
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/teleport"
                  className="rounded-2xl bg-indigo-500 px-6 py-4 text-base font-semibold text-white shadow-xl shadow-indigo-950/40 transition hover:bg-indigo-400"
                >
                  View Teleport Project
                </a>
                <a
                  href="https://contacts.fabiorollin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-base font-semibold text-white transition hover:bg-white/10"
                >
                  Open Trading Contacts
                </a>
              </div>

              <div className="mt-10">
                <div className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Quick connect
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://patient-credit.trial.teleport.sh/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-2xl border border-indigo-400/30 bg-indigo-500/10 px-5 py-3 text-sm font-semibold text-indigo-100 transition hover:bg-indigo-500/20"
                  >
                    <img src="/teleport-icon.png" alt="" className="h-5 w-5" />
                    Teleport
                  </a>
                  <a
                    href="https://console.aws.amazon.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-2xl border border-amber-400/30 bg-amber-500/10 px-5 py-3 text-sm font-semibold text-amber-100 transition hover:bg-amber-500/20"
                  >
                    <img src="/aws-icon.png" alt="" className="h-5 w-5" />
                    AWS Console
                  </a>
                  <a
                    href="https://grafana.fabiorollin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-2xl border border-orange-400/30 bg-orange-500/10 px-5 py-3 text-sm font-semibold text-orange-100 transition hover:bg-orange-500/20"
                  >
                    <span aria-hidden="true" className="grid h-5 w-5 place-items-center rounded-full bg-orange-500/30 text-[10px] font-bold text-orange-200">G</span>
                    Grafana
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
