export default function Page() {
  return (
    <div className="bg-[#0a0a0b] text-white min-h-screen">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-medium tracking-tight mb-6">
            Pricing
          </h1>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {/* Free Plan */}
          <div className="bg-[#141415] border border-[#2a2a2b] rounded-xl p-6">
            <h3 className="text-lg font-medium text-[#9c9da1] mb-2" style={{ fontFamily: 'var(--font-monospace)' }}>Free</h3>
            <div className="mb-4">
              <span className="text-4xl font-semibold">$0</span>
            </div>
            <p className="text-[#9c9da1] text-sm mb-6">Free for everyone</p>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-[#9c9da1]">•</span>
                <span>Unlimited members</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#9c9da1]">•</span>
                <span>2 teams</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#9c9da1]">•</span>
                <span>250 issues</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#9c9da1]">•</span>
                <span>Agent platform</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#9c9da1]">•</span>
                <span>Linear Agent</span>
              </li>
            </ul>
          </div>

          {/* Basic Plan */}
          <div className="bg-[#141415] border border-[#2a2a2b] rounded-xl p-6">
            <h3 className="text-lg font-medium text-[#9c9da1] mb-2" style={{ fontFamily: 'var(--font-monospace)' }}>Basic</h3>
            <div className="mb-4">
              <span className="text-4xl font-semibold">$10</span>
              <span className="text-[#9c9da1] text-sm ml-1">per user/month</span>
            </div>
            <p className="text-[#9c9da1] text-sm mb-6">Billed yearly</p>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-[#9c9da1]">•</span>
                <span>All Free features +</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#9c9da1]">•</span>
                <span>5 teams</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#9c9da1]">•</span>
                <span>Unlimited issues</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#9c9da1]">•</span>
                <span>Unlimited file uploads</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#9c9da1]">•</span>
                <span>Admin roles</span>
              </li>
            </ul>
          </div>

          {/* Business Plan */}
          <div className="bg-[#141415] border border-[#5e6ad2] rounded-xl p-6 relative">
            <h3 className="text-lg font-medium text-[#9c9da1] mb-2" style={{ fontFamily: 'var(--font-monospace)' }}>Business</h3>
            <div className="mb-4">
              <span className="text-4xl font-semibold">$16</span>
              <span className="text-[#9c9da1] text-sm ml-1">per user/month</span>
            </div>
            <p className="text-[#9c9da1] text-sm mb-6">Billed yearly</p>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-[#9c9da1]">•</span>
                <span>All Basic features +</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#9c9da1]">•</span>
                <span>Unlimited teams</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#9c9da1]">•</span>
                <span>Private teams and guests</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#9c9da1]">•</span>
                <span>Triage Intelligence</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#9c9da1]">•</span>
                <span>Loops</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#9c9da1]">•</span>
                <span>Code Intelligence</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#9c9da1]">•</span>
                <span>Linear Insights</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#9c9da1]">•</span>
                <span>Linear Asks</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#9c9da1]">•</span>
                <span>Zendesk and Intercom integrations</span>
              </li>
            </ul>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-[#141415] border border-[#2a2a2b] rounded-xl p-6">
            <h3 className="text-lg font-medium text-[#9c9da1] mb-2" style={{ fontFamily: 'var(--font-monospace)' }}>Enterprise</h3>
            <div className="mb-4">
              <span className="text-4xl font-semibold">Custom</span>
            </div>
            <p className="text-[#9c9da1] text-sm mb-6">Annual billing only</p>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-[#9c9da1]">•</span>
                <span>All Business features +</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#9c9da1]">•</span>
                <span>Invoice/PO billing</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#9c9da1]">•</span>
                <span>SAML and SCIM</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#9c9da1]">•</span>
                <span>Granular admin controls</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#9c9da1]">•</span>
                <span>Enterprise-grade security</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#9c9da1]">•</span>
                <span>Advanced org modeling</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#9c9da1]">•</span>
                <span>Migration & onboarding support</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#9c9da1]">•</span>
                <span>Priority support</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#9c9da1]">•</span>
                <span>Account management</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Trusted By Section */}
        <div className="text-center mb-20">
          <p className="text-[#9c9da1] text-lg">
            Trusted by more than <span className="text-white font-semibold">40,000</span> companies
          </p>
        </div>

        {/* Feature Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#2a2a2b]">
                <th className="text-left py-4 px-4 font-medium text-[#9c9da1]"></th>
                <th className="text-center py-4 px-4 font-medium">Free</th>
                <th className="text-center py-4 px-4 font-medium">Basic</th>
                <th className="text-center py-4 px-4 font-medium">Business</th>
                <th className="text-center py-4 px-4 font-medium">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {/* Basic Limits */}
              <tr className="border-b border-[#2a2a2b]">
                <td className="py-4 px-4 text-[#9c9da1]">Members</td>
                <td className="py-4 px-4 text-center">Unlimited</td>
                <td className="py-4 px-4 text-center">Unlimited</td>
                <td className="py-4 px-4 text-center">Unlimited</td>
                <td className="py-4 px-4 text-center">Unlimited</td>
              </tr>
              <tr className="border-b border-[#2a2a2b]">
                <td className="py-4 px-4 text-[#9c9da1]">File upload</td>
                <td className="py-4 px-4 text-center">10MB</td>
                <td className="py-4 px-4 text-center">Unlimited</td>
                <td className="py-4 px-4 text-center">Unlimited</td>
                <td className="py-4 px-4 text-center">Unlimited</td>
              </tr>
              <tr className="border-b border-[#2a2a2b]">
                <td className="py-4 px-4 text-[#9c9da1]">Issues</td>
                <td className="py-4 px-4 text-center">250 issues</td>
                <td className="py-4 px-4 text-center">Unlimited</td>
                <td className="py-4 px-4 text-center">Unlimited</td>
                <td className="py-4 px-4 text-center">Unlimited</td>
              </tr>
              <tr className="border-b border-[#2a2a2b]">
                <td className="py-4 px-4 text-[#9c9da1]">Teams</td>
                <td className="py-4 px-4 text-center">2 teams</td>
                <td className="py-4 px-4 text-center">5 teams</td>
                <td className="py-4 px-4 text-center">Unlimited</td>
                <td className="py-4 px-4 text-center">Unlimited</td>
              </tr>

              {/* Core Section */}
              <tr>
                <td colSpan={5} className="pt-8 pb-4 px-4">
                  <span className="text-xs uppercase tracking-wider text-[#5e6ad2] font-medium" style={{ fontFamily: 'var(--font-monospace)' }}>Core</span>
                </td>
              </tr>
              <tr className="border-b border-[#2a2a2b]">
                <td className="py-4 px-4 text-[#9c9da1]">Issues, projects, cycles, initiatives</td>
                <td className="py-4 px-4 text-center">✓</td>
                <td className="py-4 px-4 text-center">✓</td>
                <td className="py-4 px-4 text-center">✓</td>
                <td className="py-4 px-4 text-center">✓</td>
              </tr>
              <tr className="border-b border-[#2a2a2b]">
                <td className="py-4 px-4 text-[#9c9da1]">Customer requests</td>
                <td className="py-4 px-4 text-center">✓</td>
                <td className="py-4 px-4 text-center">✓</td>
                <td className="py-4 px-4 text-center">✓</td>
                <td className="py-4 px-4 text-center">✓</td>
              </tr>
              <tr className="border-b border-[#2a2a2b]">
                <td className="py-4 px-4 text-[#9c9da1]">API and webhook access</td>
                <td className="py-4 px-4 text-center">✓</td>
                <td className="py-4 px-4 text-center">✓</td>
                <td className="py-4 px-4 text-center">✓</td>
                <td className="py-4 px-4 text-center">✓</td>
              </tr>
              <tr className="border-b border-[#2a2a2b]">
                <td className="py-4 px-4 text-[#9c9da1]">Import and export</td>
                <td className="py-4 px-4 text-center">✓</td>
                <td className="py-4 px-4 text-center">✓</td>
                <td className="py-4 px-4 text-center">✓</td>
                <td className="py-4 px-4 text-center">✓</td>
              </tr>
              <tr className="border-b border-[#2a2a2b]">
                <td className="py-4 px-4 text-[#9c9da1]">Triage</td>
                <td className="py-4 px-4 text-center">✓</td>
                <td className="py-4 px-4 text-center">✓</td>
                <td className="py-4 px-4 text-center">✓</td>
                <td className="py-4 px-4 text-center">✓</td>
              </tr>
              <tr className="border-b border-[#2a2a2b]">
                <td className="py-4 px-4 text-[#9c9da1]">Pulse</td>
                <td className="py-4 px-4 text-center">✓</td>
                <td className="py-4 px-4 text-center">✓</td>
                <td className="py-4 px-4 text-center">✓</td>
                <td className="py-4 px-4 text-center">✓</td>
              </tr>
              <tr className="border-b border-[#2a2a2b]">
                <td className="py-4 px-4 text-[#9c9da1]">Issue sync</td>
                <td className="py-4 px-4 text-center">✓</td>
                <td className="py-4 px-4 text-center">✓</td>
                <td className="py-4 px-4 text-center">✓</td>
                <td className="py-4 px-4 text-center">✓</td>
              </tr>
              <tr className="border-b border-[#2a2a2b]">
                <td className="py-4 px-4 text-[#9c9da1]">Diffs</td>
                <td className="py-4 px-4 text-center">✓</td>
                <td className="py-4 px-4 text-center">✓</td>
                <td className="py-4 px-4 text-center">✓</td>
                <td className="py-4 px-4 text-center">✓</td>
              </tr>
              <tr className="border-b border-[#2a2a2b]">
                <td className="py-4 px-4 text-[#9c9da1]">Guided reviews</td>
                <td className="py-4 px-4 text-center">—</td>
                <td className="py-4 px-4 text-center">✓</td>
                <td className="py-4 px-4 text-center">✓</td>
                <td className="py-4 px-4 text-center">✓</td>
              </tr>
              <tr className="border-b border-[#2a2a2b]">
                <td className="py-4 px-4 text-[#9c9da1]">Issue SLAs</td>
                <td className="py-4 px-4 text-center">—</td>
                <td className="py-4 px-4 text-center">—</td>
                <td className="py-4 px-4 text-center">✓</td>
                <td className="py-4 px-4 text-center">✓</td>
              </tr>
              <tr className="border-b border-[#2a2a2b]">
                <td className="py-4 px-4 text-[#9c9da1]">Triage responsibility</td>
                <td className="py-4 px-4 text-center">—</td>
                <td className="py-4 px-4 text-center">—</td>
                <td className="py-4 px-4 text-center">✓</td>
                <td className="py-4 px-4 text-center">✓</td>
              </tr>
              <tr className="border-b border-[#2a2a2b]">
                <td className="py-4 px-4 text-[#9c9da1]">Triage rules</td>
                <td className="py-4 px-4 text-center">—</td>
                <td className="py-4 px-4 text-center">—</td>
                <td className="py-4 px-4 text-center">✓</td>
                <td className="py-4 px-4 text-center">✓</td>
              </tr>
              <tr className="border-b border-[#2a2a2b]">
                <td className="py-4 px-4 text-[#9c9da1]">Releases</td>
                <td className="py-4 px-4 text-center">—</td>
                <td className="py-4 px-4 text-center">15 pipelines</td>
                <td className="py-4 px-4 text-center">Unlimited</td>
                <td className="py-4 px-4 text-center">Unlimited</td>
              </tr>
              <tr className="border-b border-[#2a2a2b]">
                <td className="py-4 px-4 text-[#9c9da1]">Sub-initiatives</td>
                <td className="py-4 px-4 text-center">—</td>
                <td className="py-4 px-4 text-center">—</td>
                <td className="py-4 px-4 text-center">✓</td>
                <td className="py-4 px-4 text-center">✓</td>
              </tr>

              {/* AI and Agent Workflows */}
              <tr>
                <td colSpan={5} className="pt-8 pb-4 px-4">
                  <span className="text-xs uppercase tracking-wider text-[#5e6ad2] font-medium" style={{ fontFamily: 'var(--font-monospace)' }}>AI and agent workflows</span>
                </td>
              </tr>
              <tr className="border-b border-[#2a2a2b]">
                <td className="py-4 px-4 text-[#9c9da1]">Agent platform</td>
                <td className="py-4 px-4 text-center">✓</td>
                <td className="py-4 px-4 text-center">✓</td>
                <td className="py-4 px-4 text-center">✓</td>
                <td className="py-4 px-4 text-center">✓</td>
              </tr>
              <tr className="border-b border-[#2a2a2b]">
                <td className="py-4 px-4 text-[#9c9da1]">MCP access</td>
                <td className="py-4 px-4 text-center">✓</td>
                <td className="py-4 px-4 text-center">✓</td>
                <td className="py-4 px-4 text-center">✓</td>
                <td className="py-4 px-4 text-center">✓</td>
              </tr>
              <tr className="border-b border-[#2a2a2b]">
                <td className="py-4 px-4 text-[#9c9da1]">Linear Agent</td>
                <td className="py-4 px-4 text-center">✓</td>
                <td className="py-4 px-4 text-center">✓</td>
                <td className="py-4 px-4 text-center">✓</td>
                <td className="py-4 px-4 text-center">✓</td>
              </tr>
              <tr className="border-b border-[#2a2a2b]">
                <td className="py-4 px-4 text-[#9c9da1]">Coding sessions**</td>
                <td className="py-4 px-4 text-center">—</td>
                <td className="py-4 px-4 text-center">—</td>
                <td className="py-4 px-4 text-center">✓</td>
                <td className="py-4 px-4 text-center">✓</td>
              </tr>
              <tr className="border-b border-[#2a2a2b]">
                <td className="py-4 px-4 text-[#9c9da1]">Loops**</td>
                <td className="py-4 px-4 text-center">—</td>
                <td className="py-4 px-4 text-center">—</td>
                <td className="py-4 px-4 text-center">✓</td>
                <td className="py-4 px-4 text-center">✓</td>
              </tr>
              <tr className="border-b border-[#2a2a2b]">
                <td className="py-4 px-4 text-[#9c9da1]">Code Intelligence</td>
                <td className="py-4 px-4 text-center">—</td>
                <td className="py-4 px-4 text-center">—</td>
                <td className="py-4 px-4 text-center">✓</td>
                <td className="py-4 px-4 text-center">✓</td>
              </tr>
              <tr className="border-b border-[#2a2a2b]">
                <td className="py-4 px-4 text-[#9c9da1]">Triage Intelligence</td>
                <td className="py-4 px-4 text-center">—</td>
                <td className="py-4 px-4 text-center">—</td>
                <td className="py-4 px-4 text-center">✓</td>
                <td className="py-4 px-4 text-center">✓</td>
              </tr>

              {/* Integrations */}
              <tr>
                <td colSpan={5} className="pt-8 pb-4 px-4">
                  <span className="text-xs uppercase tracking-wider text-[#5e6ad2] font-medium" style={{ fontFamily: 'var(--font-monospace)' }}>Integrations</span>
                </td>
              </tr>
              <tr className="border-b border-[#2a2a2b]">
                <td className="py-4 px-4 text-[#9c9da1]">Integrations</td>
                <td className="py-4 px-4 text-center">✓</td>
                <td className="py-4 px-4 text-center">✓</td>
                <td className="py-4 px-4 text-center">✓</td>
                <td className="py-4 px-4 text-center">✓</td>
              </tr>
              <tr className="border-b border-[#2a2a2b]">
                <td className="py-4 px-4 text-[#9c9da1]">Microsoft Teams integration</td>
                <td className="py-4 px-4 text-center">—</td>
                <td className="py-4 px-4 text-center">—</td>
                <td className="py-4 px-4 text-center">✓</td>
                <td className="py-4 px-4 text-center">✓</td>
              </tr>
              <tr className="border-b border-[#2a2a2b]">
                <td className="py-4 px-4 text-[#9c9da1]">Multiple tenants</td>
                <td className="py-4 px-4 text-center">—</td>
                <td className="py-4 px-4 text-center">—</td>
                <td className="py-4 px-4 text-center">✓</td>
                <td className="py-4 px-4 text-center">✓</td>
              </tr>
              <tr className="border-b border-[#2a2a2b]">
                <td className="py-4 px-4 text-[#9c9da1]">Support integrations</td>
                <td className="py-4 px-4 text-center">—</td>
                <td className="py-4 px-4 text-center">—</td>
                <td className="py-4 px-4 text-center">✓</td>
                <td className="py-4 px-4 text-center">✓</td>
              </tr>
              <tr className="border-b border-[#2a2a2b]">
                <td className="py-4 px-4 text-[#9c9da1]">Salesforce integration</td>
                <td className="py-4 px-4 text-center">—</td>
                <td className="py-4 px-4 text-center">—</td>
                <td className="py-4 px-4 text-center">—</td>
                <td className="py-4 px-4 text-center">Add-on</td>
              </tr>

              {/* Team Management */}
              <tr>
                <td colSpan={5} className="pt-8 pb-4 px-4">
                  <span className="text-xs uppercase tracking-wider text-[#5e6ad2] font-medium" style={{ fontFamily: 'var(--font-monospace)' }}>Team management</span>
                </td>
              </tr>
              <tr className="border-b border-[#2a2a2b]">
                <td className="py-4 px-4 text-[#9c9da1]">Sub-teams</td>
                <td className="py-4 px-4 text-center">—</td>
                <td className="py-4 px-4 text-center">1 level</td>
                <td className="py-4 px-4 text-center">5 levels</td>
                <td className="py-4 px-4 text-center">5 levels</td>
              </tr>
              <tr className="border-b border-[#2a2a2b]">
                <td className="py-4 px-4 text-[#9c9da1]">Private teams</td>
                <td className="py-4 px-4 text-center">—</td>
                <td className="py-4 px-4 text-center">—</td>
                <td className="py-4 px-4 text-center">✓</td>
                <td className="py-4 px-4 text-center">✓</td>
              </tr>
              <tr className="border-b border-[#2a2a2b]">
                <td className="py-4 px-4 text-[#9c9da1]">Guest accounts</td>
                <td className="py-4 px-4 text-center">—</td>
                <td className="py-4 px-4 text-center">—</td>
                <td className="py-4 px-4 text-center">✓</td>
                <td className="py-4 px-4 text-center">✓</td>
              </tr>

              {/* Analytics & Reporting */}
              <tr>
                <td colSpan={5} className="pt-8 pb-4 px-4">
                  <span className="text-xs uppercase tracking-wider text-[#5e6ad2] font-medium" style={{ fontFamily: 'var(--font-monospace)' }}>Analytics & Reporting</span>
                </td>
              </tr>
              <tr className="border-b border-[#2a2a2b]">
                <td className="py-4 px-4 text-[#9c9da1]">Progress reports</td>
                <td className="py-4 px-4 text-center">✓</td>
                <td className="py-4 px-4 text-center">✓</td>
                <td className="py-4 px-4 text-center">✓</td>
                <td className="py-4 px-4 text-center">✓</td>
              </tr>
              <tr className="border-b border-[#2a2a2b]">
                <td className="py-4 px-4 text-[#9c9da1]">Insights</td>
                <td className="py-4 px-4 text-center">—</td>
                <td className="py-4 px-4 text-center">—</td>
                <td className="py-4 px-4 text-center">✓</td>
                <td className="py-4 px-4 text-center">✓</td>
              </tr>
              <tr className="border-b border-[#2a2a2b]">
                <td className="py-4 px-4 text-[#9c9da1]">Dashboards</td>
                <td className="py-4 px-4 text-center">—</td>
                <td className="py-4 px-4 text-center">—</td>
                <td className="py-4 px-4 text-center">✓</td>
                <td className="py-4 px-4 text-center">✓</td>
              </tr>
              <tr className="border-b border-[#2a2a2b]">
                <td className="py-4 px-4 text-[#9c9da1]">Data warehouse sync</td>
                <td className="py-4 px-4 text-center">—</td>
                <td className="py-4 px-4 text-center">—</td>
                <td className="py-4 px-4 text-center">—</td>
                <td className="py-4 px-4 text-center">✓</td>
              </tr>

              {/* Linear Asks */}
              <tr>
                <td colSpan={5} className="pt-8 pb-4 px-4">
                  <span className="text-xs uppercase tracking-wider text-[#5e6ad2] font-medium" style={{ fontFamily: 'var(--font-monospace)' }}>Linear Asks</span>
                </td>
              </tr>
              <tr className="border-b border-[#2a2a2b]">
                <td className="py-4 px-4 text-[#9c9da1]">Slack intake</td>
                <td className="py-4 px-4 text-center">—</td>
                <td className="py-4 px-4 text-center">—</td>
                <td className="py-4 px-4 text-center">✓</td>
                <td className="py-4 px-4 text-center">✓</td>
              </tr>
              <tr className="border-b border-[#2a2a2b]">
                <td className="py-4 px-4 text-[#9c9da1]">Email intake</td>
                <td className="py-4 px-4 text-center">—</td>
                <td className="py-4 px-4 text-center">—</td>
                <td className="py-4 px-4 text-center">✓</td>
                <td className="py-4 px-4 text-center">✓</td>
              </tr>
              <tr className="border-b border-[#2a2a2b]">
                <td className="py-4 px-4 text-[#9c9da1]">Web forms</td>
                <td className="py-4 px-4 text-center">—</td>
                <td className="py-4 px-4 text-center">—</td>
                <td className="py-4 px-4 text-center">✓</td>
                <td className="py-4 px-4 text-center">✓</td>
              </tr>
              <tr className="border-b border-[#2a2a2b]">
                <td className="py-4 px-4 text-[#9c9da1]">Multiple Slack workspaces</td>
                <td className="py-4 px-4 text-center">—</td>
                <td className="py-4 px-4 text-center">—</td>
                <td className="py-4 px-4 text-center">✓</td>
                <td className="py-4 px-4 text-center">✓</td>
              </tr>
              <tr className="border-b border-[#2a2a2b]">
                <td className="py-4 px-4 text-[#9c9da1]">Private Slack channels</td>
                <td className="py-4 px-4 text-center">—</td>
                <td className="py-4 px-4 text-center">—</td>
                <td className="py-4 px-4 text-center">✓</td>
                <td className="py-4 px-4 text-center">✓</td>
              </tr>
              <tr className="border-b border-[#2a2a2b]">
                <td className="py-4 px-4 text-[#9c9da1]">Per-channel configurations</td>
                <td className="py-4 px-4 text-center">—</td>
                <td className="py-4 px-4 text-center">—</td>
                <td className="py-4 px-4 text-center">✓</td>
                <td className="py-4 px-4 text-center">✓</td>
              </tr>

              {/* Security */}
              <tr>
                <td colSpan={5} className="pt-8 pb-4 px-4">
                  <span className="text-xs uppercase tracking-wider text-[#5e6ad2] font-medium" style={{ fontFamily: 'var(--font-monospace)' }}>Security</span>
                </td>
              </tr>
              <tr className="border-b border-[#2a2a2b]">
                <td className="py-4 px-4 text-[#9c9da1]">SSO</td>
                <td className="py-4 px-4 text-center">Google</td>
                <td className="py-4 px-4 text-center">Google</td>
                <td className="py-4 px-4 text-center">Google</td>
                <td className="py-4 px-4 text-center">Google + SAML</td>
              </tr>
              <tr className="border-b border-[#2a2a2b]">
                <td className="py-4 px-4 text-[#9c9da1]">Admin roles</td>
                <td className="py-4 px-4 text-center">—</td>
                <td className="py-4