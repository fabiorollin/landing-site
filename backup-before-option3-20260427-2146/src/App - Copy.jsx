export default function TeleportSolutionWebsite() {
  const pillars = [
    {
      title: "Identity first access",
      text: "Teleport issues short lived credentials and applies role based access controls instead of relying on long lived shared access patterns.",
      icon: "🔐",
    },
    {
      title: "Unified Kubernetes workflow",
      text: "Engineers can log in once, select the target cluster, and use kubectl through a consistent access layer.",
      icon: "☸️",
    },
    {
      title: "Audit ready operations",
      text: "Session events, kubectl activity, and access decisions are easier to review from one control plane.",
      icon: "🧾",
    },
    {
      title: "Cleaner network exposure",
      text: "Teleport reduces direct trust on network location and pushes access decisions toward verified identity and policy.",
      icon: "🌐",
    },
  ];

  const journey = [
    {
      step: "01",
      title: "Connected to EKS",
      text: "Configured kubeconfig, verified node access, and confirmed the cluster was healthy before deploying workloads.",
    },
    {
      step: "02",
      title: "Published Nginx",
      text: "Created a deployment and service, then diagnosed why the external endpoint stayed pending.",
    },
    {
      step: "03",
      title: "Fixed AWS networking",
      text: "Tagged the VPC subnets correctly so EKS could place the public load balancer in the right network path.",
    },
    {
      step: "04",
      title: "Validated public access",
      text: "Confirmed that the web endpoint was reachable through the AWS load balancer and the application path was working end to end.",
    },
    {
      step: "05",
      title: "Logged in through Teleport",
      text: "Used tsh login and tsh kube login to move access from direct cloud administration toward an identity centric workflow.",
    },
    {
      step: "06",
      title: "Closed the RBAC gap",
      text: "Validated authentication, found the authorization failure, and fixed Kubernetes role binding for the Teleport mapped group.",
    },
  ];

  const outcomes = [
    "Kubernetes cluster published successfully on AWS",
    "Teleport based access validated with tsh and kubectl",
    "RBAC issue isolated at the authorization layer instead of the authentication layer",
    "Reusable explanation prepared for a hiring manager conversation",
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-indigo-950 via-slate-950 to-slate-950">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-fuchsia-500 blur-3xl" />
          <div className="absolute right-0 top-24 h-72 w-72 rounded-full bg-cyan-500 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="mb-5 inline-flex items-center rounded-full border border-indigo-400/30 bg-indigo-400/10 px-4 py-2 text-sm font-medium text-indigo-200">
                Teleport solution story for the interview
              </div>
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                From direct EKS access to a stronger identity driven Kubernetes workflow
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                This site presents a practical lab that started with publishing a web workload on Amazon EKS and evolved into a Teleport centered access model for Kubernetes. The goal was not just to make the app reachable. The goal was to show why identity, authorization, and audit matter in real infrastructure operations.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur">
                  <div className="text-sm uppercase tracking-[0.18em] text-slate-400">Environment</div>
                  <div className="mt-2 text-xl font-semibold text-white">Amazon EKS + Teleport</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur">
                  <div className="text-sm uppercase tracking-[0.18em] text-slate-400">Resource</div>
                  <div className="mt-2 text-xl font-semibold text-white">Kubernetes cluster</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur">
                  <div className="text-sm uppercase tracking-[0.18em] text-slate-400">Result</div>
                  <div className="mt-2 text-xl font-semibold text-white">Web workload live with Teleport secured access</div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-fuchsia-950/30 backdrop-blur">
              <div className="mb-4 flex items-center justify-between">
                <div className="text-sm font-medium text-slate-300">Executive summary</div>
                <div className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-300">Demo complete</div>
              </div>
              <div className="space-y-4 text-sm leading-7 text-slate-300">
                <p>
                  The application path was built first. Nginx was deployed on EKS, exposed through AWS load balancing, and validated publicly.
                </p>
                <p>
                  The access path was hardened next. Teleport authenticated the user successfully, but Kubernetes RBAC denied access until the mapped group was bound to the correct role.
                </p>
                <p>
                  That separation became the central message of the solution: authentication succeeded through Teleport, authorization remained owned by Kubernetes, and the combined model produced a cleaner operational story.
                </p>
              </div>
              <div className="mt-6 rounded-2xl border border-indigo-400/20 bg-indigo-500/10 p-4">
                <div className="text-xs uppercase tracking-[0.18em] text-indigo-200">Core message</div>
                <p className="mt-2 text-base leading-7 text-indigo-50">
                  Teleport improved the access model by shifting cluster entry toward verified identity and short lived credentials while preserving Kubernetes RBAC as the authorization control plane.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="mb-8 max-w-3xl">
          <div className="text-sm font-semibold uppercase tracking-[0.24em] text-fuchsia-300">Why this matters</div>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">What Teleport changed in the operating model</h2>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            The same Kubernetes cluster can be reached in two very different ways. One is direct cloud administration. The other is identity aware access with stronger control boundaries, better auditability, and a cleaner story for scale.
          </p>
        </div>

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
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">AWS CLI credentials</div>
                <div className="text-fuchsia-300">↓</div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Kubeconfig update</div>
                <div className="text-fuchsia-300">↓</div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">kubectl to EKS</div>
              </div>
            </div>
            <ul className="mt-6 space-y-3 text-slate-300">
              <li>Direct and effective for administration</li>
              <li>Good for bootstrapping and platform setup</li>
              <li>Less expressive as a centralized access story</li>
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
                <div className="rounded-2xl border border-cyan-400/20 bg-cyan-500/10 p-4">Short lived credentials</div>
                <div className="text-cyan-300">↓</div>
                <div className="rounded-2xl border border-cyan-400/20 bg-cyan-500/10 p-4">Kubernetes RBAC authorization</div>
                <div className="text-cyan-300">↓</div>
                <div className="rounded-2xl border border-cyan-400/20 bg-cyan-500/10 p-4">kubectl to EKS</div>
              </div>
            </div>
            <ul className="mt-6 space-y-3 text-slate-300">
              <li>Identity drives access decisions</li>
              <li>Authentication and authorization are cleanly separated</li>
              <li>More scalable for teams, review, and governance</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900/70">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <div className="mb-10 max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Solution pillars</div>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">What makes the Teleport model compelling</h2>
          </div>
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

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-indigo-300">Implementation journey</div>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">What was done in the lab</h2>
            <p className="mt-4 text-lg leading-8 text-slate-300">
              The work moved through infrastructure, application publishing, access validation, and identity based authorization. Each phase removed a different class of risk or uncertainty.
            </p>
          </div>
          <div className="space-y-4">
            {journey.map((item) => (
              <div key={item.step} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-500/15 text-lg font-semibold text-indigo-200">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 leading-7 text-slate-300">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950/40">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <div className="mb-10 max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-300">Architecture diagram</div>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">How the pieces fit together</h2>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-6">
            <div className="grid gap-6 xl:grid-cols-5">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 xl:col-span-1">
                <div className="text-sm uppercase tracking-[0.18em] text-slate-400">User</div>
                <div className="mt-3 text-2xl font-semibold text-white">Engineer</div>
                <p className="mt-3 leading-7 text-slate-300">
                  Logs in with Teleport, requests access, then uses kubectl through a session backed by identity and role mapping.
                </p>
              </div>

              <div className="flex items-center justify-center text-3xl text-cyan-300 xl:col-span-1">→</div>

              <div className="rounded-3xl border border-cyan-400/20 bg-cyan-500/10 p-5 xl:col-span-1">
                <div className="text-sm uppercase tracking-[0.18em] text-cyan-100/80">Access layer</div>
                <div className="mt-3 text-2xl font-semibold text-white">Teleport</div>
                <p className="mt-3 leading-7 text-slate-200">
                  Authenticates the user, issues short lived credentials, and carries user and group identity into the Kubernetes request path.
                </p>
              </div>

              <div className="flex items-center justify-center text-3xl text-cyan-300 xl:col-span-1">→</div>

              <div className="rounded-3xl border border-emerald-400/20 bg-emerald-500/10 p-5 xl:col-span-1">
                <div className="text-sm uppercase tracking-[0.18em] text-emerald-100/80">Runtime</div>
                <div className="mt-3 text-2xl font-semibold text-white">Amazon EKS</div>
                <p className="mt-3 leading-7 text-slate-200">
                  Enforces Kubernetes RBAC, runs the web workload, and exposes the application through AWS load balancing.
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <div className="text-sm uppercase tracking-[0.18em] text-slate-400">Application path</div>
                <p className="mt-3 leading-7 text-slate-300">
                  Browser to AWS load balancer to Kubernetes service to web server pods.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <div className="text-sm uppercase tracking-[0.18em] text-slate-400">Identity path</div>
                <p className="mt-3 leading-7 text-slate-300">
                  User to Teleport login to cluster selection to kubectl request carrying mapped Kubernetes group membership.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <div className="text-sm uppercase tracking-[0.18em] text-slate-400">Control insight</div>
                <p className="mt-3 leading-7 text-slate-300">
                  Authentication success did not imply authorization success. That distinction became the most valuable proof point in the demo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-fuchsia-300">Command flow</div>
            <h2 className="mt-3 text-3xl font-semibold text-white">Demo commands that tell the story</h2>
            <div className="mt-6 space-y-4">
              <div className="rounded-2xl bg-slate-950 p-4 font-mono text-sm text-emerald-300">
                aws eks update-kubeconfig --region us-east-1 --name casual-blues-goose
              </div>
              <div className="rounded-2xl bg-slate-950 p-4 font-mono text-sm text-emerald-300">
                kubectl create deployment nginx --image=nginx
              </div>
              <div className="rounded-2xl bg-slate-950 p-4 font-mono text-sm text-emerald-300">
                kubectl expose deployment nginx --port=80 --type=LoadBalancer
              </div>
              <div className="rounded-2xl bg-slate-950 p-4 font-mono text-sm text-emerald-300">
                tsh login --proxy=broken-tooth.trial.teleport.sh:443 --auth=local --user=raquel@portilhodoce.com
              </div>
              <div className="rounded-2xl bg-slate-950 p-4 font-mono text-sm text-emerald-300">
                tsh kube login casual-blues-goose
              </div>
              <div className="rounded-2xl bg-slate-950 p-4 font-mono text-sm text-emerald-300">
                kubectl create clusterrolebinding teleport-kubernetes-admin --clusterrole=cluster-admin --group=kubernetes
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-6">
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Key outcomes</div>
            <h2 className="mt-3 text-3xl font-semibold text-white">What the hiring manager should take away</h2>
            <ul className="mt-6 space-y-4">
              {outcomes.map((item) => (
                <li key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-300">
                  <span className="mt-1 text-emerald-300">●</span>
                  <span className="leading-7">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-2xl border border-fuchsia-400/20 bg-fuchsia-500/10 p-5">
              <div className="text-sm uppercase tracking-[0.18em] text-fuchsia-200">Best hiring manager line</div>
              <p className="mt-3 text-lg leading-8 text-white">
                This solution shows not only that the platform can secure access, but that it clarifies the exact boundary between identity, policy, and runtime authorization in a live Kubernetes environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.24em] text-indigo-300">Recommended next phase</div>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Where this solution goes next</h2>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
                Move from broad administrative binding toward role specific access by namespace, resource labels, and job function. Then add an ALB backed ingress, HTTPS, and richer audit workflows for a more complete production story.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 px-6 py-5 text-right">
              <div className="text-sm uppercase tracking-[0.18em] text-slate-400">Presentation focus</div>
              <div className="mt-2 text-2xl font-semibold text-white">Security that engineers will actually use</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
