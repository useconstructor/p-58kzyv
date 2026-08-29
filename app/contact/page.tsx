export default function Page() {
  return (
    <main className="bg-[#0a0a0b] text-white min-h-screen">
      {/* Hero Section */}
      <section className="px-6 md:px-12 lg:px-24 pt-32 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6">
            How can we help?
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Get in touch with our sales and support teams for demos, onboarding support, or product questions.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="px-6 md:px-12 lg:px-24 pb-16">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {/* Sales Card */}
          <a
            href="/contact/sales"
            className="group block p-8 rounded-xl bg-[#131316] border border-[#1f1f23] hover:border-[#2a2a2e] transition-colors"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#1f1f23] flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-300">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium text-white mb-2">Sales</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Speak to our sales team about plans, pricing, enterprise contracts, or request a demo.
                </p>
              </div>
            </div>
          </a>

          {/* Support Card */}
          <a
            href="/contact/support"
            className="group block p-8 rounded-xl bg-[#131316] border border-[#1f1f23] hover:border-[#2a2a2e] transition-colors"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#1f1f23] flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-300">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                  <path d="M12 17h.01" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium text-white mb-2">Support</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  We are here to help. Ask us product questions, report problems, or leave feedback.
                </p>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* Get in touch Section */}
      <section className="px-6 md:px-12 lg:px-24 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-8" style={{ fontFamily: 'var(--font-monospace)' }}>
            Get in touch
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Community */}
            <div>
              <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3" style={{ fontFamily: 'var(--font-monospace)' }}>
                Community
              </h4>
              <p className="text-gray-300 text-sm mb-3">Connect with Linear users in Slack</p>
              <a
                href="https://linear.app/join-slack"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-sm hover:text-gray-300 transition-colors inline-flex items-center gap-1"
              >
                Join Slack
                <span>↗</span>
              </a>
            </div>

            {/* General communication */}
            <div>
              <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3" style={{ fontFamily: 'var(--font-monospace)' }}>
                General communication
              </h4>
              <p className="text-gray-300 text-sm mb-3">For other questions, email us</p>
              <a
                href="mailto:hello@linear.app"
                className="text-white text-sm hover:text-gray-300 transition-colors"
              >
                hello@linear.app
              </a>
            </div>

            {/* Documentation */}
            <div>
              <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3" style={{ fontFamily: 'var(--font-monospace)' }}>
                Documentation
              </h4>
              <p className="text-gray-300 text-sm mb-3">Features, integrations, and usage</p>
              <a
                href="https://linear.app/docs"
                className="text-white text-sm hover:text-gray-300 transition-colors inline-flex items-center gap-1"
              >
                Linear Docs
                <span>→</span>
              </a>
            </div>

            {/* Developers */}
            <div>
              <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3" style={{ fontFamily: 'var(--font-monospace)' }}>
                Developers
              </h4>
              <p className="text-gray-300 text-sm mb-3">Extend Linear with our API and SDK</p>
              <a
                href="https://linear.app/developers"
                className="text-white text-sm hover:text-gray-300 transition-colors inline-flex items-center gap-1"
              >
                Linear API
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* System Status */}
      <section className="px-6 md:px-12 lg:px-24 py-16 border-t border-[#1f1f23]">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2" style={{ fontFamily: 'var(--font-monospace)' }}>
                System
              </h4>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <span className="text-white font-medium">All systems operational</span>
              </div>
            </div>
            <a
              href="https://linearstatus.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 text-sm hover:text-white transition-colors inline-flex items-center gap-1"
            >
              Check status
              <span>↗</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}