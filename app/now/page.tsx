export default function Page() {
  return (
    <main className="min-h-screen bg-[#0a0a0b] text-white">
      {/* Hero Section */}
      <div className="pt-32 pb-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white mb-8">
            Now
          </h1>
          
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-4 mb-8 border-b border-gray-800 pb-4">
            <a href="/now" className="text-white font-medium hover:text-gray-300 transition-colors">All</a>
            <a href="/changelog" className="text-gray-500 hover:text-gray-300 transition-colors">Changelog</a>
            <a href="/now/product-launches" className="text-gray-500 hover:text-gray-300 transition-colors">Product launches</a>
            <a href="/now/team" className="text-gray-500 hover:text-gray-300 transition-colors">From the team</a>
            <a href="/now/community" className="text-gray-500 hover:text-gray-300 transition-colors">From the community</a>
            <a href="/now/press" className="text-gray-500 hover:text-gray-300 transition-colors">Press</a>
          </div>

          {/* Search and RSS */}
          <div className="flex items-center gap-4 mb-12">
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search…"
                className="w-full bg-[#16161a] border border-gray-800 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-gray-600"
              />
            </div>
            <a href="/rss/now.xml" className="text-gray-500 hover:text-white transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19 7.38 20 6.18 20C5 20 4 19 4 17.82a2.18 2.18 0 0 1 2.18-2.18M4 4.44A15.56 15.56 0 0 1 19.56 20h-2.83A12.73 12.73 0 0 0 4 7.27V4.44m0 5.66a9.9 9.9 0 0 1 9.9 9.9h-2.83A7.07 7.07 0 0 0 4 12.93V10.1Z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="px-6 md:px-12 lg:px-24 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Article 1 */}
            <a href="/now/styling-linear-for-the-future-stylex" className="group block bg-[#16161a] rounded-xl overflow-hidden hover:bg-[#1c1c21] transition-colors">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/6600ca96-e49b-4fd9-c03a-7979faddad00/f=auto,fit=scale-down,metadata=none,width=2560" 
                  alt="Styling Linear for the future with StyleX"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-medium text-white mb-2 group-hover:text-gray-200">Styling Linear for the future with StyleX</h3>
                <p className="text-sm text-gray-400 mb-3">A long-running migration that became an exercise in tooling, automation, and designing clearer boundaries for both humans and agents.</p>
                <p className="text-xs text-gray-500 font-mono">Kenneth Skovhus · Aug 26, 2026 →</p>
              </div>
            </a>

            {/* Article 2 */}
            <a href="/now/sharing-growth-with-the-people-building-linear" className="group block bg-[#16161a] rounded-xl overflow-hidden hover:bg-[#1c1c21] transition-colors">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/c7fa8f5f-d439-4329-6a65-de549b51e300/f=auto,fit=scale-down,metadata=none,width=2560" 
                  alt="Sharing Linear's growth with the people building it"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-medium text-white mb-2 group-hover:text-gray-200">Sharing Linear's growth with the people building it</h3>
                <p className="text-sm text-gray-400 mb-3">As Linear passes $100 million in ARR, we're giving our team another opportunity to participate in the upside.</p>
                <p className="text-xs text-gray-500 font-mono">Karri Saarinen · Aug 26, 2026 →</p>
              </div>
            </a>

            {/* Article 3 */}
            <a href="/now/rebuilding-delta-sync-read-path" className="group block bg-[#16161a] rounded-xl overflow-hidden hover:bg-[#1c1c21] transition-colors">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="https://webassets.linear.app/images/ornj730p/production/f79251b06e9edeeacbf2875384defe629e000b3c-352x352.png?w=72&q=95&auto=format&dpr=2" 
                  alt="Rebuilding Linear's delta sync read path"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-medium text-white mb-2 group-hover:text-gray-200">Rebuilding Linear's delta sync read path</h3>
                <p className="text-sm text-gray-400 mb-3">How we use turbopuffer to keep catch-up latency predictable across more than 20 TB of sync actions.</p>
                <p className="text-xs text-gray-500 font-mono">Peter Travers · Aug 18, 2026 →</p>
              </div>
            </a>

            {/* Article 4 */}
            <a href="/data" className="group block bg-[#16161a] rounded-xl overflow-hidden hover:bg-[#1c1c21] transition-colors">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/f28b59f4-538c-4517-cfd7-510913015200/f=auto,fit=scale-down,metadata=none" 
                  alt="How teams build AI"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-medium text-white mb-2 group-hover:text-gray-200">How teams build AI</h3>
                <p className="text-sm text-gray-400 mb-3">usage patterns in software teams: who is adopting AI, how it reshapes where teams spend their time, and how much more they ship.</p>
                <p className="text-xs text-gray-500 font-mono">Tim Qi · Aug 17, 2026 →</p>
              </div>
            </a>

            {/* Article 5 - Coinbase */}
            <a href="/customers/coinbase" className="group block bg-[#16161a] rounded-xl overflow-hidden hover:bg-[#1c1c21] transition-colors">
              <div className="aspect-video overflow-hidden bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center">
                <img 
                  src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/c2f6447a-d507-43c1-f3ab-3f2c6fbceb00/f=auto,fit=scale-down,metadata=none" 
                  alt="Coinbase logo"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <span className="text-xs text-purple-400 font-mono uppercase tracking-wide">Customer story</span>
                <h3 className="text-lg font-medium text-white mb-2 mt-1 group-hover:text-gray-200">Coinbase's bet on agent-first development</h3>
                <p className="text-sm text-gray-400 mb-3">In January 2026, Chintan asked his entire engineering organisation to delete their IDEs and write zero lines of code.</p>
                <p className="text-xs text-gray-500 font-mono">Aug 11, 2026 →</p>
              </div>
            </a>

            {/* Article 6 */}
            <a href="/now/how-we-built-linear-agent" className="group block bg-[#16161a] rounded-xl overflow-hidden hover:bg-[#1c1c21] transition-colors">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/086b510a-f5da-414b-bc9d-228afb968600/f=auto,fit=scale-down,metadata=none" 
                  alt="How we built Linear Agent"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-medium text-white mb-2 group-hover:text-gray-200">How we built Linear Agent</h3>
                <p className="text-sm text-gray-400 mb-3">The product and engineering decisions we made so Linear Agent can handle complex tasks without becoming unpredictable.</p>
                <p className="text-xs text-gray-500 font-mono">Matthijs Wolting · Aug 10, 2026 →</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Changelog Section */}
      <div className="px-6 md:px-12 lg:px-24 py-16 bg-[#0d0d0f]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-medium text-white mb-8">Changelog</h2>
          
          <div className="space-y-6">
            <a href="/changelog/2026-08-20-coding-environments" className="block group">
              <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-[#16161a] transition-colors">
                <div className="flex-1">
                  <h3 className="text-white font-medium group-hover:text-gray-200">Coding sessions</h3>
                  <p className="text-sm text-gray-400 mt-1">Linear Agent can now set up, run, and test your code before returning its work. That means fewer handoffs and changes that are further along when they come back to you.</p>
                </div>
                <span className="text-xs text-gray-500 font-mono whitespace-nowrap">Aug 19, 2026</span>
              </div>
            </a>

            <a href="/changelog/2026-08-13-team-initiatives" className="block group">
              <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-[#16161a] transition-colors">
                <div className="flex-1">
                  <h3 className="text-white font-medium group-hover:text-gray-200">Team initiatives</h3>
                  <p className="text-sm text-gray-400 mt-1">Initiatives are Linear's way to manage product strategy and high-level planning across projects. Strategy may start at the company level, but teams carry it forward. You can now assign a team to lead an initiative.</p>
                </div>
                <span className="text-xs text-gray-500 font-mono whitespace-nowrap">Aug 13, 2026</span>
              </div>
            </a>

            <a href="/changelog/2026-07-30-coding-sessions-on-mobile" className="block group">
              <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-[#16161a] transition-colors">
                <div className="flex-1">
                  <h3 className="text-white font-medium group-hover:text-gray-200">Coding sessions on mobile</h3>
                  <p className="text-sm text-gray-400 mt-1">Your coding session doesn't have to stop when you leave your desk. Use the Linear mobile app to review code changes, comment on specific lines, and iterate with Linear Agent.</p>
                </div>
                <span className="text-xs text-gray-500 font-mono whitespace-nowrap">Jul 30, 2026</span>
              </div>
            </a>

            <a href="/changelog/2026-07-23-agent-assisted-editing" className="block group">
              <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-[#16161a] transition-colors">
                <div className="flex-1">
                  <h3 className="text-white font-medium group-hover:text-gray-200">Agent-assisted text editing</h3>
                  <p className="text-sm text-gray-400 mt-1">Documents and project descriptions are critical context for your teams and agents.</p>
                </div>
                <span className="text-xs text-gray-500 font-mono whitespace-nowrap">Jul 22, 2026</span>
              </div>
            </a>
          </div>

          <a href="/changelog" className="inline-flex items-center gap-2 mt-8 text-purple-400 hover:text-purple-300 transition-colors font-medium">
            View all →
          </a>
        </div>
      </div>

      {/* More Articles */}
      <div className="px-6 md:px-12 lg:px-24 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Introducing Loops */}
            <a href="/now/introducing-loops" className="group block bg-[#16161a] rounded-xl overflow-hidden hover:bg-[#1c1c21] transition-colors">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/302b16a5-f9ca-42f2-dbae-3c76f19b2d00/f=auto,fit=scale-down,metadata=none" 
                  alt="Introducing Loops"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-medium text-white mb-2 group-hover:text-gray-200">Introducing Loops</h3>
                <p className="text-sm text-gray-400 mb-3">Describe a recurring job in plain language and Linear Agent will run it on a schedule or in response to events, working from the full context of your workspace.</p>
                <p className="text-xs text-gray-500 font-mono">Nan Yu · Jul 20, 2026 →</p>
              </div>
            </a>

            {/* Boom Supersonic */}
            <a href="/customers/boom" className="group block bg-[#16161a] rounded-xl overflow-hidden hover:bg-[#1c1c21] transition-colors">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/1eb8f8b2-3593-473f-ba8a-acac99aa0300/f=auto,fit=scale-down,metadata=none" 
                  alt="Boom Supersonic"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <span className="text-xs text-purple-400 font-mono uppercase tracking-wide">Customer story</span>
                <h3 className="text-lg font-medium text-white mb-2 mt-1 group-hover:text-gray-200">Boom Supersonic builds as fast as it flies</h3>
                <p className="text-sm text-gray-400 mb-3">Boom Supersonic is bringing back supersonic flight before the end of the decade. To move that fast, its engineers borrowed the habits of software.</p>
                <p className="text-xs text-gray-500 font-mono">Jul 15, 2026 →</p>
              </div>
            </a>

            {/* Teaching an agent */}
            <a href="/now/linear-agent-bug-fix" className="group block bg-[#16161a] rounded-xl overflow-hidden hover:bg-[#1c1c21] transition-colors">
              <div className="aspect-video overflow-hidden bg-gradient-to-br from-indigo-900 to-purple-900">
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-4xl">🤖</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-medium text-white mb-2 group-hover:text-gray-200">Teaching an agent to auto-fix bugs</h3>
                <p className="text-sm text-gray-400 mb-3">Some bugs at Linear now get fixed before a single engineer picks them up. Igor has been teaching Linear Agent to catch them in triage and ship the fix on its own.</p>
                <p className="text-xs text-gray-500 font-mono">Igor Sechyn · Jun 12, 2026 →</p>
              </div>
            </a>

            {/* Now Linear writes the code */}
            <a href="/now/coding-sessions-for-linear-agent" className="group block bg-[#16161a] rounded-xl overflow-hidden hover:bg-[#1c1c21] transition-colors">
              <div className="aspect-video overflow-hidden bg-gradient-to-br from-blue-900 to-indigo-900">
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-4xl">💻</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-medium text-white mb-2 group-hover:text-gray-200">Now Linear writes the code, too</h3>
                <p className="text-sm text-gray-400 mb-3">Linear Agent can now write code. With Coding Sessions, it can take a bug from triage all the way to a reviewed fix, without the work ever leaving Linear.</p>
                <p className="text-xs text-gray-500 font-mono">Karri Saarinen · Jun 11, 2026 →</p>
              </div>
            </a>

            {/* Reviewing code */}
            <a href="/now/reviewing-code-in-the-agent-era" className="group block bg-[#16161a] rounded-xl overflow-hidden hover:bg-[#1c1c21] transition-colors">
              <div className="aspect-video overflow-hidden bg-gradient-to-br from-green-900 to-teal-900">
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-4xl">👀</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-medium text-white mb-2 group-hover:text-gray-200">Reviewing code in the agent era</h3>
                <p className="text-sm text-gray-400 mb-3">Agentic coding has puts real pressure on review. One of our engineers shares how he uses Linear Diffs to hold his bar high without drowning in pull requests.</p>
                <p className="text-xs text-gray-500 font-mono">Maciek Pekala · Jun 10, 2026 →</p>
              </div>
            </a>

            {/* Code review should be fast */}
            <a href="/now/code-review-should-be-fast" className="group block bg-[#16161a] rounded-xl overflow-hidden hover:bg-[#1c1c21] transition-colors">
              <div className="aspect-video overflow-hidden bg-gradient-to-br from-orange-900 to-red-900">
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-4xl">⚡</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-medium text-white mb-2 group-hover:text-gray-200">Code review should be fast</h3>
                <p className="text-sm text-gray-400 mb-3">Agents are forcing a change in how we review code. Diffs brings code reviews directly inside Linear, so that the review lives alongside all of your product context.</p>
                <p className="text-xs text-gray-500 font-mono">Tuomas Artman · May 28, 2026 →</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Press Section */}
      <div className="px-6 md:px-12 lg:px-24 py-16 bg-[#0d0d0f]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-medium text-white mb-8">Press</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <a href="https://www.youtube.com/watch?v=8wqZXOhuJUM" target="_blank" rel="noopener noreferrer" className="group block bg-[#16161a] rounded-xl overflow-hidden hover:bg-[#1c1c21] transition-colors">
              <div className="aspect-video overflow-hidden bg-gradient-to-br from-red-900 to-pink-900 flex items-center justify-center">
                <svg className="w-16 h-16 text-white opacity-80" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs text-gray-500">YouTube</span>
                  <span className="text-xs text-gray-600">·</span>
                  <span className="text-xs text-gray-500">Aug 12, 2026</span>
                </div>
                <h3 className="text-lg font-medium text-white group-hover:text-gray-200">Protecting the Thinking Behind Great Design, Inside Linear's Design Team</h3>
                <span className="text-purple-400 text-sm mt-2 inline-block">↗</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}