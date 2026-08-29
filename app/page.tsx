export default function Page() {
  return (
    <main className="bg-[#0a0a0b] text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6">
            <span className="block">The product development</span>
            <span className="block">system for teams and agents</span>
          </h1>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-8">
            <p className="text-[#9c9da1] text-lg">
              Purpose-built for planning and building products. Designed for the AI era.
            </p>
            <a href="/now" className="inline-flex items-center gap-3 text-sm hover:opacity-80 transition-opacity">
              <span className="text-[#5e6ad2] font-mono text-xs uppercase tracking-wider">New</span>
              <span className="text-white">Loops →</span>
            </a>
          </div>
        </div>

        {/* Hero Images */}
        <div className="relative max-w-6xl mx-auto mt-12">
          <img 
            src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/6600ca96-e49b-4fd9-c03a-7979faddad00/f=auto,fit=scale-down,metadata=none,width=2560" 
            alt="Linear app screenshot showing issue view" 
            className="w-full rounded-xl shadow-2xl"
          />
          <img 
            src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/c7fa8f5f-d439-4329-6a65-de549b51e300/f=auto,fit=scale-down,metadata=none,width=2560" 
            alt="Linear app interface" 
            className="absolute inset-0 w-full rounded-xl opacity-50"
          />
        </div>

        {/* Issue Card Preview */}
        <div className="max-w-4xl mx-auto mt-12 bg-[#16161a] rounded-xl border border-[#26262a] p-6">
          <h3 className="text-xl font-medium mb-2">Faster app launch</h3>
          <p className="text-[#9c9da1] text-sm font-mono mb-6">
            Render UI before <code className="bg-[#26262a] px-1 rounded">vehicle_state</code> sync when minimum required state is present, instead of blocking on full refresh during iOS startup.
          </p>
          
          <div className="border-t border-[#26262a] pt-4">
            <h4 className="text-sm font-medium text-[#9c9da1] mb-4">Activity</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <img 
                  src="https://webassets.linear.app/images/ornj730p/production/f79251b06e9edeeacbf2875384defe629e000b3c-352x352.png?w=72&q=95&auto=format&dpr=2" 
                  alt="Avatar of Karri" 
                  className="w-6 h-6 rounded-full"
                />
                <span className="text-[#9c9da1]">Linear created the issue via Slack on behalf of Karri · 2min ago</span>
              </div>
              <div className="text-[#9c9da1]">Triage Intelligence added the labels Performance and iOS · 2min ago</div>
              <div className="flex items-center gap-3">
                <img 
                  src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/c2f6447a-d507-43c1-f3ab-3f2c6fbceb00/f=auto,fit=scale-down,metadata=none" 
                  alt="Linear" 
                  className="w-6 h-6 rounded-full"
                />
                <span className="text-[#9c9da1]">Linear connected by Jori · 2 min ago</span>
              </div>
              <div className="text-[#9c9da1]">Changed 2 files Draft PR awaiting your review · 2 min ago</div>
              <div className="text-[#9c9da1]">Linear moved from Todo to In Progress · just now</div>
            </div>
          </div>

          <div className="flex gap-4 mt-6">
            <button className="px-4 py-2 bg-[#26262a] rounded text-sm hover:bg-[#36363a] transition-colors">Reviews</button>
            <button className="px-4 py-2 bg-[#26262a] rounded text-sm hover:bg-[#36363a] transition-colors">Revert</button>
          </div>

          <div className="mt-6 border-t border-[#26262a] pt-4">
            <h4 className="text-sm font-medium text-[#9c9da1] mb-3">Properties</h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-[#9c9da1]">Status:</span> <span className="text-[#f2c94c]">In Progress</span>
              </div>
              <div>
                <span className="text-[#9c9da1]">Priority:</span> <span>Medium</span>
              </div>
              <div className="flex items-center gap-2">
                <img 
                  src="https://webassets.linear.app/images/ornj730p/production/f79251b06e9edeeacbf2875384defe629e000b3c-352x352.png?w=72&q=95&auto=format&dpr=2" 
                  alt="Karri" 
                  className="w-5 h-5 rounded-full"
                />
                <span>Karri</span>
              </div>
              <div className="flex items-center gap-2">
                <img 
                  src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/c2f6447a-d507-43c1-f3ab-3f2c6fbceb00/f=auto,fit=scale-down,metadata=none" 
                  alt="Linear" 
                  className="w-5 h-5 rounded-full"
                />
                <span>Linear</span>
              </div>
              <div>
                <span className="text-[#9c9da1]">Cycle:</span> <span>Cycle 144</span>
              </div>
              <div>
                <span className="text-[#9c9da1]">Releases:</span> <span>Linear App 1.6881... · Jun 25</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customers Section */}
      <section className="py-16 px-6 lg:px-12 border-t border-[#26262a]">
        <div className="max-w-7xl mx-auto text-center">
          <a href="/customers" className="text-[#9c9da1] text-sm hover:text-white transition-colors">
            Powering the companies building the future
          </a>
        </div>
      </section>

      {/* New Species Section */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6">
            <span className="font-bold">A new species of product tool.</span>
            <span className="text-[#9c9da1]"> Purpose-built for modern teams with AI workflows at its core, Linear sets a new standard for planning and building products.</span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <span className="font-mono text-xs text-[#5e6ad2] uppercase tracking-wider">Fig 0.1</span>
            <h3 className="text-xl font-medium mt-4 mb-3">Purpose-built</h3>
            <p className="text-[#9c9da1]">Linear is shaped by the practices and principles of world-class product teams.</p>
          </div>
          <div className="text-center">
            <span className="font-mono text-xs text-[#5e6ad2] uppercase tracking-wider">Fig 0.2</span>
            <h3 className="text-xl font-medium mt-4 mb-3">Powered by agents</h3>
            <p className="text-[#9c9da1]">Designed for workflows shared by humans and agents, from PRD to PR.</p>
          </div>
          <div className="text-center">
            <span className="font-mono text-xs text-[#5e6ad2] uppercase tracking-wider">Fig 0.3</span>
            <h3 className="text-xl font-medium mt-4 mb-3">Designed for speed</h3>
            <p className="text-[#9c9da1]">Reduces noise and restores momentum to help teams ship with high velocity and focus.</p>
          </div>
        </div>
      </section>

      {/* Issues List Section */}
      <section className="py-16 px-6 lg:px-12 bg-[#0d0d0f]">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-2">
            {[
              { title: "Reduce UI flicker during autonomy...", tags: [] },
              { title: "Add buffering for autonomy event streams", tags: [] },
              { title: "Reduce startup delay caused by vehicle sync", tags: [] },
              { title: "Fix delayed route updates during rerouting", tags: [] },
              { title: "Remove UI inconsistencies", tags: ["Bug", "Design"] },
              { title: "TypeError: Cannot read properties", tags: ["Bug"] },
              { title: "Upgrade to Claude Opus 5", tags: ["AI"] },
              { title: "Optimize load times", tags: ["Performance"] },
              { title: "Remove contentData from GraphQL API", id: "61039" },
              { title: "Launch page assets", tags: ["Design"] },
              { title: "Prevent duplicate ride requests on poor...", tags: ["Bug"], id: "62048" },
              { title: "Clean up deprecated APIs...", tags: ["API"], id: "61002" },
              { title: "Reduce latency in autonomy st...", id: "61005" },
              { title: "Reduce ETA fluctuations durin...", id: "61202" },
              { title: "Improve fallback messaging", tags: ["UI"], id: "61149" },
              { title: "Improve rider visibility into veh...", tags: [] },
            ].map((issue, i) => (
              <div key={i} className="flex items-center gap-3 py-2 px-3 rounded hover:bg-[#16161a] transition-colors cursor-pointer">
                <div className="w-4 h-4 rounded-full border-2 border-[#5e6ad2]"></div>
                <span className="flex-1 text-sm truncate">{issue.title}</span>
                {issue.tags?.map((tag, j) => (
                  <span key={j} className="text-xs px-2 py-0.5 bg-[#26262a] rounded text-[#9c9da1]">{tag}</span>
                ))}
                {issue.id && <span className="text-xs text-[#9c9da1] font-mono">{issue.id}</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Slack Conversation Section */}
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="flex gap-3">
            <img 
              src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/580cd9c0-2770-4fe4-1ad2-95c76fc6f000/f=auto,fit=scale-down,metadata=none" 
              alt="lena" 
              className="w-10 h-10 rounded"
            />
            <div className="bg-[#16161a] rounded-lg p-4 flex-1">
              <p className="font-medium text-sm mb-1">lena</p>
              <p className="text-[#9c9da1]">Anyone else noticing the iOS app feels slow to open if you haven't used it in a bit?</p>
            </div>
          </div>
          <div className="flex gap-3">
            <img 
              src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/c8aeedda-7726-4a4f-226a-f573f85d8d00/f=auto,fit=scale-down,metadata=none" 
              alt="didier" 
              className="w-10 h-10 rounded"
            />
            <div className="bg-[#16161a] rounded-lg p-4 flex-1">
              <p className="font-medium text-sm mb-1">didier</p>
              <p className="text-[#9c9da1]">Yea, we're still blocking initial render on a full vehicle_state sync every time…</p>
            </div>
          </div>
          <div className="flex gap-3">
            <img 
              src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/22210a73-581d-42db-d42a-bf2907860300/f=auto,fit=scale-down,metadata=none" 
              alt="andreas" 
              className="w-10 h-10 rounded"
            />
            <div className="bg-[#16161a] rounded-lg p-4 flex-1">
              <p className="font-medium text-sm mb-1">andreas</p>
              <p className="text-[#9c9da1]">Feels like we could render sooner and load the rest in the background. Probably also worth tracking startup timing so we know how often this happens!</p>
              <p className="text-[#5e6ad2] mt-2">@Linear create issues and assign to me</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 px-6 lg:px-12 bg-[#0d0d0f] overflow-x-auto">
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-8 text-xs text-[#9c9da1] font-mono mb-4">
            <span>MAR</span><span>APR</span><span>MAY</span><span>JUN</span><span>JUL</span><span>AUG</span><span>SEP</span>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-4">
              <span className="text-sm w-40">UI Refresh</span>
              <div className="flex-1 h-6 bg-gradient-to-r from-[#5e6ad2] to-[#8b5cf6] rounded opacity-80"></div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm w-40">Core screens</span>
              <div className="flex-1 h-6 bg-[#5e6ad2] rounded opacity-60 ml-12" style={{ maxWidth: '60%' }}></div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm w-40">Polish</span>
              <div className="flex-1 h-6 bg-[#5e6ad2] rounded opacity-40 ml-24" style={{ maxWidth: '40%' }}></div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm w-40">Split fares</span>
              <div className="flex gap-2 ml-8">
                <span className="text-xs bg-[#26262a] px-2 py-1 rounded">Internal</span>
                <span className="text-xs bg-[#5e6ad2] px-2 py-1 rounded">Public Beta</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm w-40">Autonomy status clarity</span>
              <span className="text-xs bg-[#f59e0b] px-2 py-1 rounded ml-16">Alpha</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm w-40">Autonomy telemetry reliability</span>
              <div className="flex gap-2 ml-20">
                <span className="text-xs bg-[#10b981] px-2 py-1 rounded">Beta</span>
                <span className="text-xs bg-[#22c55e] px-2 py-1 rounded">GA</span>
              </div>
            </div>
          </div>
          <div className="flex gap-8 text-xs text-[#9c9da1] font-mono mt-8">
            <span>Oct 2025</span><span>Nov 2025</span><span>Dec 2025</span><span>Jan 2026</span><span>Feb 2026</span>
          </div>
        </div>
      </section>

      {/* AI Chat Section */}
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-[#16161a] rounded-lg p-4 border border-[#26262a]">
            <p className="text-[#9c9da1] mb-4">what are the three most important customer requests around permissions? add them to the Access Controls project</p>
            <p className="text-xs text-[#5e6ad2] mb-3">Worked for 8 sec</p>
            <div className="space-y-2 text-sm">
              <p>Three issues ranked by customer impact:</p>
              <p className="text-[#9c9da1]">ENG-2298 Add granular project permissions</p>
              <p className="text-[#9c9da1]">ENG-2647 Let guests access multiple teams</p>
              <p className="text-[#9c9da1]">ENG-2352 Create custom roles with scoped access</p>
              <p className="mt-2">I've added them to Access Controls</p>
            </div>
          </div>

          <div className="bg-[#16161a] rounded-lg p-4 border border-[#26262a]">
            <p className="text-[#9c9da1] mb-4">add retry handling for failed image uploads described in this issue</p>
            <p className="text-xs text-[#5e6ad2]">ENG-2844 added to context</p>
            <p className="text-xs text-[#9c9da1] mt-2">Thinking…</p>
          </div>

          <div className="bg-[#16161a] rounded-lg p-4 border border-[#26262a]">
            <p className="text-[#9c9da1] mb-4">review today's mobile triage and group the issues by what should happen next</p>
            <p className="text-xs text-[#5e6ad2]">Mobile Triage added to context</p>
            <p className="text-xs text-[#9c9da1] mt-2">Thinking…</p>
          </div>

          <div className="bg-[#16161a] rounded-lg p-4 border border-[#26262a]">
            <p className="text-[#9c9da1] mb-4">review this issue, draft complete offline mode requirements, and break the work into sub-issues</p>
            <p className="text-xs text-[#5e6ad2]">ENG-2521 added to context</p>
            <p className="text-xs text-[#5e6ad2] mt-2">Worked for 1 min</p>
            <div className="mt-3 text-sm">
              <p>Updated the issue with requirements, open product decisions, and acceptance criteria.</p>
              <p className="text-[#9c9da1] mt-2">ENG-2920 Define offline mode requirements</p>
            </div>
          </div>
        </div>
      </section>

      {/* Issues Board Section */}
      <section className="py-16 px-6 lg:px-12 bg-[#0d0d0f]">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-2">
            {[
              { id: "ENG-2076", title: "Reduce ETA jitter", tag: "Performance", status: "Working…", date: "Oct 6" },
              { id: "ENG-2108", title: "Handle GPS dropouts gracefully", tag: "Maps", status: "Working…", date: "Oct 2" },
              { id: "ENG-2143", title: "Optimize map tile loading on initial app open", tag: "Maps", date: "Oct 7" },
              { id: "ENG-2187", title: "Prevent duplicate ride requests on poor networks", tag: "Bug", status: "Working…", date: "Oct 5" },
              { id: "ENG-2254", title: "Reduce unnecessary map re-rendering on home screen", tag: "Maps", date: "Oct 10" },
              { id: "ENG-2291", title: "Clean up deprecated APIs used by the rider app", tag: "API", date: "Oct 9" },
              { id: "ENG-2327", title: "Speed up CI pipelines for mobile builds", tag: "Performance", date: "Oct 9" },
              { id: "ENG-2358", title: "Reduce flakiness in mobile UI tests", tag: "Reliability", date: "Oct 4" },
            ].map((issue, i) => (
              <div key={i} className="flex items-center gap-3 py-3 px-4 bg-[#16161a] rounded-lg hover:bg-[#1a1a1e] transition-colors cursor-pointer">
                <span className="text-xs text-[#5e6ad2] font-mono">{issue.id}</span>
                <span className="flex-1 text-sm">{issue.title}</span>
                <span className="text-xs px-2 py-0.5 bg-[#26262a] rounded text-[#9c9da1]">{issue.tag}</span>
                {issue.status && <span className="text-xs text-[#f59e0b]">{issue.status}</span>}
                <span className="text-xs text-[#9c9da1]">{issue.date}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Diff Section */}
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-[#16161a] rounded-lg p-4 border border-[#26262a] overflow-x-auto">
              <pre className="text-xs text-[#9c9da1] font-mono">
{`import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import { useVehicleState } from '@hooks/useVehicleState'
import { Dashboard } from '@components/Dashboard'

export const HomeScreen = () => {
  const { vehicleState, isFullySynced } = useVehicleState()
  
  if (!isFullySynced) {
    return <ActivityIndicator size="large" />
  }
  
  return (
    <View>
      <Dashboard state={vehicleState} />
    </View>
  )
}`}
              </pre>
            </div>
            <div className="bg-[#16161a] rounded-lg p-4 border border-[#26262a] overflow-x-auto">
              <pre className="text-xs text-[#9c9da1] font-mono">
{`import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import { useVehicleState, SyncStatus } from '@hooks/useVehicleState'
import { Dashboard } from '@components/Dashboard'

export const HomeScreen = () => {
  const { vehicleState, syncStatus } = useVehicleState()
  
  if (syncStatus === SyncStatus.PENDING) {
    return <ActivityIndicator size="large" />
  }
  
  return (
    <View>
      <Dashboard state={vehicleState} syncStatus={syncStatus} />
    </View>
  )
}`}
              </pre>
            </div>
          </div>

          <div className="mt-8 bg-[#16161a] rounded-lg p-4 border border-[#26262a]">
            <pre className="text-xs text-[#9c9da1] font-mono">
{`export const CodeReview = () => {
  <Diff.Provider>
    <Slow />
    <Fragmented />
    <HumanOnly />
    <Frictionless />
    <Integrated />
    <AgentReady />
  </Diff.Provider>
};`}
            </pre>
          </div>
        </div>
      </section>

      {/* Changelog Section */}
      <section className="py-24 px-6 lg:px-12 border-t border-[#26262a]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-medium">Changelog</h2>
        </div>
      </section>
    </main>
  );
}