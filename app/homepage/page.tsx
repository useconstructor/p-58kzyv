export default function Page() {
  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white">
      {/* Hero Section */}
      <section className="relative px-6 pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight mb-6">
            <span className="block">The product development</span>
            <span className="block">system for teams and agents</span>
          </h1>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mt-8">
            <p className="text-[#9c9da1] text-lg">
              Purpose-built for planning and building products. Designed for the AI era.
            </p>
            <a 
              href="/now" 
              className="inline-flex items-center gap-3 text-sm hover:opacity-80 transition-opacity"
            >
              <span className="text-[#5e6ad2] font-medium text-xs uppercase tracking-wider">New</span>
              <span className="text-white">Loops →</span>
            </a>
          </div>
        </div>

        {/* Hero Images */}
        <div className="mt-16 max-w-6xl mx-auto relative">
          <div className="relative rounded-xl overflow-hidden shadow-2xl">
            <img 
              src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/6600ca96-e49b-4fd9-c03a-7979faddad00/f=auto,fit=scale-down,metadata=none,width=2560" 
              alt="Linear app screenshot showing issue tracking interface"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Issue Detail Card */}
      <section className="px-6 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#141415] rounded-2xl border border-[#26262a] p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left Column - Issue Details */}
              <div>
                <h3 className="text-xl font-medium mb-4">Faster app launch</h3>
                <p className="text-[#9c9da1] font-mono text-sm mb-8">
                  Render UI before <code className="bg-[#26262a] px-2 py-1 rounded">vehicle_state</code> sync when minimum required state is present, instead of blocking on full refresh during iOS startup.
                </p>

                <div className="space-y-4">
                  <h4 className="text-sm font-medium text-[#9c9da1] uppercase tracking-wider">Activity</h4>
                  
                  <div className="flex items-start gap-3">
                    <img 
                      src="https://webassets.linear.app/images/ornj730p/production/f79251b06e9edeeacbf2875384defe629e000b3c-352x352.png?w=72&q=95&auto=format&dpr=2" 
                      alt="Avatar of Karri"
                      className="w-6 h-6 rounded-full"
                    />
                    <p className="text-sm text-[#9c9da1]">
                      Linear created the issue via Slack on behalf of Karri·2min ago
                    </p>
                  </div>

                  <p className="text-sm text-[#9c9da1]">
                    Triage Intelligence added the labels Performance and iOS·2min ago
                  </p>

                  <div className="flex items-start gap-3">
                    <img 
                      src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/c2f6447a-d507-43c1-f3ab-3f2c6fbceb00/f=auto,fit=scale-down,metadata=none" 
                      alt="Linear"
                      className="w-6 h-6 rounded-full"
                    />
                    <div>
                      <p className="text-sm text-[#9c9da1]">Linear connected by Jori·2 min ago</p>
                      <p className="text-sm text-[#9c9da1]">Changed 2 files Draft PR awaiting your review·2 min ago</p>
                      <p className="text-sm text-[#9c9da1]">Linear moved from Todo to In Progress·just now</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Properties */}
              <div className="space-y-6">
                <div className="flex gap-4">
                  <button className="px-4 py-2 bg-[#26262a] rounded-lg text-sm font-medium hover:bg-[#32323a] transition-colors">
                    Reviews
                  </button>
                  <button className="px-4 py-2 bg-[#26262a] rounded-lg text-sm font-medium hover:bg-[#32323a] transition-colors">
                    Revert
                  </button>
                </div>

                <div className="space-y-4">
                  <h4 className="text-sm font-medium text-[#9c9da1] uppercase tracking-wider">Properties</h4>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-[#9c9da1]">Status</span>
                      <p className="text-[#f2c94c] font-medium">In Progress</p>
                    </div>
                    <div>
                      <span className="text-[#9c9da1]">Priority</span>
                      <p className="font-medium">Medium</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <img 
                      src="https://webassets.linear.app/images/ornj730p/production/f79251b06e9edeeacbf2875384defe629e000b3c-352x352.png?w=72&q=95&auto=format&dpr=2" 
                      alt="Avatar of Karri"
                      className="w-6 h-6 rounded-full"
                    />
                    <span className="text-sm">Karri</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <img 
                      src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/c2f6447a-d507-43c1-f3ab-3f2c6fbceb00/f=auto,fit=scale-down,metadata=none" 
                      alt="Linear"
                      className="w-6 h-6 rounded-full"
                    />
                    <span className="text-sm">Linear</span>
                  </div>

                  <div>
                    <span className="text-[#9c9da1] text-sm">Cycle 144</span>
                  </div>

                  <div>
                    <span className="text-[#9c9da1] text-sm block mb-2">Labels</span>
                  </div>

                  <div>
                    <span className="text-[#9c9da1] text-sm block mb-2">Releases</span>
                    <span className="text-sm">Linear App 1.6881...⋅Jun 25</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customers Section */}
      <section className="px-6 py-16 border-t border-[#26262a]">
        <div className="max-w-6xl mx-auto text-center">
          <a href="/customers" className="text-[#9c9da1] hover:text-white transition-colors text-sm">
            Powering the companies building the future
          </a>
        </div>
      </section>

      {/* New Species Section */}
      <section className="px-6 py-24 lg:py-32">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-6">
            <span className="font-bold">A new species of product tool.</span>
            <span className="text-[#9c9da1]"> Purpose-built for modern teams with AI workflows at its core, Linear sets a new standard for planning and building products.</span>
          </h2>
        </div>

        {/* Feature Cards */}
        <div className="max-w-6xl mx-auto mt-16 grid md:grid-cols-3 gap-6">
          <div className="bg-[#141415] rounded-xl border border-[#26262a] p-8">
            <span className="text-[#5e6ad2] font-mono text-xs uppercase tracking-wider">Fig 0.1</span>
            <h3 className="text-lg font-medium mt-4 mb-3">Purpose-built</h3>
            <p className="text-[#9c9da1] text-sm">
              Linear is shaped by the practices and principles of world-class product teams.
            </p>
          </div>

          <div className="bg-[#141415] rounded-xl border border-[#26262a] p-8">
            <span className="text-[#5e6ad2] font-mono text-xs uppercase tracking-wider">Fig 0.2</span>
            <h3 className="text-lg font-medium mt-4 mb-3">Powered by agents</h3>
            <p className="text-[#9c9da1] text-sm">
              Designed for workflows shared by humans and agents. From drafting PRDs to pushing PRs.
            </p>
          </div>

          <div className="bg-[#141415] rounded-xl border border-[#26262a] p-8">
            <span className="text-[#5e6ad2] font-mono text-xs uppercase tracking-wider">Fig 0.3</span>
            <h3 className="text-lg font-medium mt-4 mb-3">Designed for speed</h3>
            <p className="text-[#9c9da1] text-sm">
              Reduces noise and restores momentum to help teams ship with high velocity and focus.
            </p>
          </div>
        </div>
      </section>

      {/* Issues List Section */}
      <section className="px-6 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#141415] rounded-2xl border border-[#26262a] overflow-hidden">
            <div className="divide-y divide-[#26262a]">
              {[
                { title: "Reduce UI flicker during autonomy...", labels: ["Bug", "Design"] },
                { title: "Add buffering for autonomy event streams", labels: [] },
                { title: "Reduce startup delay caused by vehicle sync", labels: [] },
                { title: "Fix delayed route updates during rerouting", labels: [] },
                { title: "Remove UI inconsistencies", labels: ["Bug", "Design"] },
                { title: "TypeError: Cannot read properties", labels: ["Bug"] },
                { title: "Upgrade to Claude Opus 5", labels: ["AI"] },
                { title: "Optimize load times", labels: ["Performance"] },
                { title: "Remove contentData from GraphQL API", labels: ["61039"] },
                { title: "Launch page assets", labels: ["Design"] },
                { title: "Prevent duplicate ride requests on poor...", labels: ["Bug", "62048"] },
                { title: "Clean up deprecated APIs...", labels: ["API", "61002"] },
                { title: "Reduce latency in autonomy st...", labels: ["61005"] },
                { title: "Reduce ETA fluctuations durin...", labels: ["61202"] },
                { title: "Improve fallback messaging", labels: ["UI", "61149"] },
                { title: "Improve rider visibility into veh...", labels: [] },
              ].map((issue, idx) => (
                <div key={idx} className="px-6 py-3 flex items-center gap-4 hover:bg-[#1a1a1b] transition-colors cursor-pointer">
                  <div className="w-4 h-4 rounded-full border-2 border-[#9c9da1]"></div>
                  <span className="text-sm flex-1 truncate">{issue.title}</span>
                  <div className="flex gap-2">
                    {issue.labels.map((label, lidx) => (
                      <span key={lidx} className="text-xs px-2 py-1 bg-[#26262a] rounded text-[#9c9da1]">
                        {label}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Slack Conversation Section */}
      <section className="px-6 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#141415] rounded-2xl border border-[#26262a] p-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <img 
                  src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/580cd9c0-2770-4fe4-1ad2-95c76fc6f000/f=auto,fit=scale-down,metadata=none" 
                  alt="lena"
                  className="w-10 h-10 rounded-lg"
                />
                <div>
                  <span className="font-medium text-sm">lena</span>
                  <p className="text-[#9c9da1] mt-1">
                    Anyone else noticing the iOS app feels slow to open if you haven't used it in a bit?
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <img 
                  src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/c8aeedda-7726-4a4f-226a-f573f85d8d00/f=auto,fit=scale-down,metadata=none" 
                  alt="didier"
                  className="w-10 h-10 rounded-lg"
                />
                <div>
                  <span className="font-medium text-sm">didier</span>
                  <p className="text-[#9c9da1] mt-1">
                    Yea, we're still blocking initial render on a full vehicle_state sync every time…
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <img 
                  src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/22210a73-581d-42db-d42a-bf2907860300/f=auto,fit=scale-down,metadata=none" 
                  alt="andreas"
                  className="w-10 h-10 rounded-lg"
                />
                <div>
                  <span className="font-medium text-sm">andreas</span>
                  <p className="text-[#9c9da1] mt-1">
                    Feels like we could render sooner and load the rest in the background. Probably also worth tracking startup timing so we know how often this happens!
                  </p>
                  <p className="text-[#5e6ad2] mt-2 font-medium">@Linear create issues and assign to me</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline/Roadmap Section */}
      <section className="px-6 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#141415] rounded-2xl border border-[#26262a] p-8 overflow-x-auto">
            <div className="min-w-[800px]">
              {/* Timeline Header */}
              <div className="flex gap-4 text-xs text-[#9c9da1] font-mono uppercase tracking-wider mb-6 border-b border-[#26262a] pb-4">
                {["MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP"].map((month) => (
                  <div key={month} className="flex-1 text-center">{month}</div>
                ))}
              </div>

              {/* Timeline Items */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-sm w-48">UI Refresh</span>
                  <div className="flex-1 h-6 bg-[#5e6ad2] rounded-full opacity-70"></div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm w-48">Core screens</span>
                  <div className="flex-1 h-6 bg-[#5e6ad2] rounded-full opacity-50 ml-16"></div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm w-48">Polish</span>
                  <div className="flex-1 h-6 bg-[#5e6ad2] rounded-full opacity-30 ml-32"></div>
                </div>
                <div className="flex items-center gap-4 mt-8">
                  <span className="text-sm w-48">Split fares</span>
                  <div className="flex gap-2 ml-8">
                    <span className="text-xs px-2 py-1 bg-[#26262a] rounded">Internal</span>
                    <span className="text-xs px-2 py-1 bg-[#5e6ad2] rounded">Public Beta</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm w-48">Autonomy status clarity</span>
                  <span className="text-xs px-2 py-1 bg-[#26262a] rounded ml-16">Alpha</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm w-48">Autonomy telemetry reliability</span>
                  <div className="flex gap-2 ml-24">
                    <span className="text-xs px-2 py-1 bg-[#26262a] rounded">Beta</span>
                    <span className="text-xs px-2 py-1 bg-[#22c55e] rounded">GA</span>
                  </div>
                </div>
              </div>

              {/* Future Dates */}
              <div className="flex gap-4 text-xs text-[#9c9da1] font-mono uppercase tracking-wider mt-8 pt-4 border-t border-[#26262a]">
                {["Oct 2025", "Nov 2025", "Dec 2025", "Jan 2026", "Feb 2026"].map((date) => (
                  <div key={date} className="flex-1 text-center">{date}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Chat Section */}
      <section className="px-6 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#141415] rounded-2xl border border-[#26262a] p-8">
            <div className="space-y-6">
              <div className="bg-[#1a1a1b] rounded-lg p-4">
                <p className="text-sm">
                  what are the three most important customer requests around permissions? add them to the Access Controls project
                </p>
              </div>

              <div className="pl-4 border-l-2 border-[#5e6ad2]">
                <p className="text-xs text-[#9c9da1] mb-2">Worked for 8 sec</p>
                <p className="text-sm text-[#9c9da1] mb-4">Three issues ranked by customer impact:</p>
                <ul className="space-y-2 text-sm">
                  <li><span className="text-[#5e6ad2]">ENG-2298</span> Add granular project permissions</li>
                  <li><span className="text-[#5e6ad2]">ENG-2647</span> Let guests access multiple teams</li>
                  <li><span className="text-[#5e6ad2]">ENG-2352</span> Create custom roles with scoped access</li>
                </ul>
                <p className="text-sm mt-4">I've added them to Access Controls</p>
              </div>

              <div className="bg-[#1a1a1b] rounded-lg p-4">
                <p className="text-sm">
                  add retry handling for failed image uploads described in this issue
                </p>
              </div>

              <div className="pl-4 border-l-2 border-[#5e6ad2]">
                <p className="text-xs text-[#9c9da1]">ENG-2844 added to context</p>
              </div>

              <div className="bg-[#1a1a1b] rounded-lg p-4">
                <p className="text-sm">
                  Review today's mobile triage and group the issues by what should happen next
                </p>
              </div>

              <div className="pl-4 border-l-2 border-[#5e6ad2]">
                <p className="text-xs text-[#9c9da1]">Mobile Triage added to context</p>
              </div>

              <div className="bg-[#1a1a1b] rounded-lg p-4">
                <p className="text-sm">
                  review this issue, draft complete offline mode requirements, and break the work into sub-issues
                </p>
              </div>

              <div className="pl-4 border-l-2 border-[#5e6ad2]">
                <p className="text-xs text-[#9c9da1] mb-2">ENG-2521 added to context</p>
                <p className="text-xs text-[#9c9da1] mb-2">Worked for 1 min</p>
                <p className="text-sm">Updated the issue with requirements, open product decisions, and acceptance criteria.</p>
                <p className="text-sm mt-2"><span className="text-[#5e6ad2]">ENG-2920</span> Define offline mode requirements</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Issues List with Avatars */}
      <section className="px-6 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#141415] rounded-2xl border border-[#26262a] overflow-hidden">
            <div className="divide-y divide-[#26262a]">
              {[
                { id: "ENG-2076", title: "Reduce ETA jitter", label: "Performance", status: "Working…", pr: "#55423", date: "Oct 6" },
                { id: "ENG-2108", title: "Handle GPS dropouts gracefully", label: "Maps", status: "Working…", pr: "#55409", date: "Oct 2" },
                { id: "ENG-2143", title: "Optimize map tile loading on initial app open", label: "Maps", status: "", pr: "", date: "Oct 7" },
                { id: "ENG-2187", title: "Prevent duplicate ride requests on poor networks", label: "Bug", status: "Working…", pr: "", date: "Oct 5" },
                { id: "ENG-2254", title: "Reduce unnecessary map re-rendering on home screen", label: "Maps", status: "", pr: "", date: "Oct 10" },
                { id: "ENG-2291", title: "Clean up deprecated APIs used by the rider app", label: "API", status: "", pr: "", date: "Oct 9" },
                { id: "ENG-2327", title: "Speed up CI pipelines for mobile builds", label: "Performance", status: "", pr: "", date: "Oct 9" },
                { id: "ENG-2358", title: "Reduce flakiness in mobile UI tests", label: "Reliability", status: "", pr: "", date: "Oct 4" },
              ].map((issue, idx) => (
                <div key={idx} className="px-6 py-4 flex items-center gap-4 hover:bg-[#1a1a1b] transition-colors cursor-pointer">
                  <div className="w-4 h-4 rounded-full border-2 border-[#f2c94c]"></div>
                  <span className="text-[#5e6ad2] text-sm font-mono">{issue.id}</span>
                  <span className="text-sm flex-1">{issue.title}</span>
                  {issue.pr && (
                    <span className="text-xs text-[#9c9da1] font-mono">{issue.pr}</span>
                  )}
                  <span className="text-xs px-2 py-1 bg-[#26262a] rounded text-[#9c9da1]">{issue.label}</span>
                  {issue.status && (
                    <span className="text-xs text-[#9c9da1]">{issue.status}</span>
                  )}
                  <span className="text-xs text-[#9c9da1]">{issue.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Code Preview Section */}
      <section className="px-6 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#141415] rounded-2xl border border-[#26262a] p-6 overflow-x-auto">
            <pre className="text-sm font-mono text-[#9c9da1]">
              <code>{`import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import { useVehicleState } from '@hooks/useVehicleState'
import { Dashbo`}</code>
            </pre>
          </div>
        </div>
      </section>
    </div>
  )
}