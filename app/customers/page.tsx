export default function Page() {
  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white">
      {/* Stats Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-20">
            <div>
              <div className="text-5xl md:text-6xl font-medium text-white mb-2">2.0x</div>
              <div className="text-gray-400 text-sm">Increase in filed issues</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-medium text-white mb-2">3.3x</div>
              <div className="text-gray-400 text-sm">Faster issue resolution</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-medium text-white mb-2">50%</div>
              <div className="text-gray-400 text-sm">Issues authored by agents</div>
            </div>
          </div>

          {/* Headline */}
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-4">
              Powering more than 40,000 organizations.
            </h1>
            <p className="text-gray-400 text-lg">
              From ambitious startups to major enterprise and Fortune 20 companies.
            </p>
          </div>

          {/* Customer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Pleo */}
            <a
              href="https://linear.app/customers/pleo"
              className="group block bg-[#16161a] hover:bg-[#1c1c21] rounded-xl p-6 transition-colors border border-[#27272a]"
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="https://webassets.linear.app/images/ornj730p/production/b778fb6b1f4c768fff589d5d9070b4bf3a92f26b-56x56.svg?q=95&auto=format&dpr=2"
                  alt="Pleo logo"
                  className="w-10 h-10 rounded-lg"
                />
                <span className="text-white font-medium">Pleo</span>
              </div>
              <p className="text-gray-300 text-sm mb-3">
                Pleo transitioned their internal support workflows to Linear Asks
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500 font-mono uppercase">Fintech</span>
                <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                  Read story →
                </span>
              </div>
            </a>

            {/* Klaviyo */}
            <a
              href="https://linear.app/customers/klaviyo"
              className="group block bg-[#16161a] hover:bg-[#1c1c21] rounded-xl p-6 transition-colors border border-[#27272a]"
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="https://webassets.linear.app/images/ornj730p/production/e08b228973f347e41fd1ded59d70f7a8af7a5b24-56x56.svg?q=95&auto=format&dpr=2"
                  alt="Klaviyo logo"
                  className="w-10 h-10 rounded-lg"
                />
                <span className="text-white font-medium">Klaviyo</span>
              </div>
              <p className="text-gray-300 text-sm mb-3">
                Klaviyo boosts visibility and velocity with Linear
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500 font-mono uppercase">SaaS, Enterprise</span>
                <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                  Read story →
                </span>
              </div>
            </a>

            {/* Mercury */}
            <a
              href="https://linear.app/customers/mercury"
              className="group block bg-[#16161a] hover:bg-[#1c1c21] rounded-xl p-6 transition-colors border border-[#27272a]"
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="https://webassets.linear.app/images/ornj730p/production/91c55d098003b92c00d5ab8ccc38ba3040fb0557-56x56.svg?q=95&auto=format&dpr=2"
                  alt="Mercury logo"
                  className="w-10 h-10 rounded-lg"
                />
                <span className="text-white font-medium">Mercury</span>
              </div>
              <p className="text-gray-300 text-sm mb-3">
                Mercury eliminated cluttered feedback with Linear Asks
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500 font-mono uppercase">Fintech, Enterprise</span>
                <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                  Read story →
                </span>
              </div>
            </a>

            {/* Sierra */}
            <a
              href="https://linear.app/customers/sierra"
              className="group block bg-[#16161a] hover:bg-[#1c1c21] rounded-xl p-6 transition-colors border border-[#27272a]"
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="https://webassets.linear.app/images/ornj730p/production/805551cdc94ee1d8627cb5e00fd73baec0904ce2-56x56.svg?q=95&auto=format&dpr=2"
                  alt="Sierra logo"
                  className="w-10 h-10 rounded-lg"
                />
                <span className="text-white font-medium">Sierra</span>
              </div>
              <p className="text-gray-300 text-sm mb-3">
                From project updates to accountability, Sierra moves as one company in Linear
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500 font-mono uppercase">AI</span>
                <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                  Read story →
                </span>
              </div>
            </a>

            {/* Cash App */}
            <a
              href="https://linear.app/customers/cashapp"
              className="group block bg-[#16161a] hover:bg-[#1c1c21] rounded-xl p-6 transition-colors border border-[#27272a]"
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="https://webassets.linear.app/images/ornj730p/production/896d0e6ed13122608df8aa1a57bb3c19e9ad4862-56x56.svg?q=95&auto=format&dpr=2"
                  alt="Cash App logo"
                  className="w-10 h-10 rounded-lg"
                />
                <span className="text-white font-medium">Cash App</span>
              </div>
              <p className="text-gray-300 text-sm mb-3">
                Linear helps Cash App manage aggressive roadmaps
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500 font-mono uppercase">Fintech, Consumer, Enterprise</span>
                <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                  Read story →
                </span>
              </div>
            </a>

            {/* Clay */}
            <a
              href="https://linear.app/customers/clay"
              className="group block bg-[#16161a] hover:bg-[#1c1c21] rounded-xl p-6 transition-colors border border-[#27272a]"
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="https://webassets.linear.app/images/ornj730p/production/8861e93599dc80b90e04ae88157af4abc3391e80-56x56.svg?q=95&auto=format&dpr=2"
                  alt="Clay logo"
                  className="w-10 h-10 rounded-lg"
                />
                <span className="text-white font-medium">Clay</span>
              </div>
              <p className="text-gray-300 text-sm mb-3">
                How Clay manages bugs using Linear
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500 font-mono uppercase">SaaS</span>
                <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                  Read story →
                </span>
              </div>
            </a>

            {/* Watershed */}
            <a
              href="https://linear.app/customers/watershed"
              className="group block bg-[#16161a] hover:bg-[#1c1c21] rounded-xl p-6 transition-colors border border-[#27272a]"
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="https://webassets.linear.app/images/ornj730p/production/66314c542672167823e48ab60156459e5f1ca252-56x56.svg?q=95&auto=format&dpr=2"
                  alt="Watershed logo"
                  className="w-10 h-10 rounded-lg"
                />
                <span className="text-white font-medium">Watershed</span>
              </div>
              <p className="text-gray-300 text-sm mb-3">
                Watershed switched to Linear to accelerate their team
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500 font-mono uppercase">SaaS</span>
                <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                  Read story →
                </span>
              </div>
            </a>

            {/* Clio */}
            <a
              href="https://linear.app/customers/clio"
              className="group block bg-[#16161a] hover:bg-[#1c1c21] rounded-xl p-6 transition-colors border border-[#27272a]"
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="https://webassets.linear.app/images/ornj730p/production/314cde3cd6d3063546973af031b72abab6bdeede-56x56.svg?q=95&auto=format&dpr=2"
                  alt="Clio logo"
                  className="w-10 h-10 rounded-lg"
                />
                <span className="text-white font-medium">Clio</span>
              </div>
              <p className="text-gray-300 text-sm mb-3">
                How Linear helps engineering managers at Clio operate more efficiently
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500 font-mono uppercase">SaaS, AI, Enterprise</span>
                <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                  Read story →
                </span>
              </div>
            </a>

            {/* Descript */}
            <a
              href="https://linear.app/customers/descript"
              className="group block bg-[#16161a] hover:bg-[#1c1c21] rounded-xl p-6 transition-colors border border-[#27272a]"
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="https://webassets.linear.app/images/ornj730p/production/5494a32be3c77b5fd654e93da0a47b624d5ad4d3-56x56.svg?q=95&auto=format&dpr=2"
                  alt="Descript logo"
                  className="w-10 h-10 rounded-lg"
                />
                <span className="text-white font-medium">Descript</span>
              </div>
              <p className="text-gray-300 text-sm mb-3">
                Why Descript builds with Linear
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500 font-mono uppercase">SaaS, AI</span>
                <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                  Read story →
                </span>
              </div>
            </a>

            {/* Retool */}
            <a
              href="https://linear.app/customers/retool"
              className="group block bg-[#16161a] hover:bg-[#1c1c21] rounded-xl p-6 transition-colors border border-[#27272a]"
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="https://webassets.linear.app/images/ornj730p/production/900344db813b157d72157b63aa859156a8e49b41-56x56.svg?q=95&auto=format&dpr=2"
                  alt="Retool logo"
                  className="w-10 h-10 rounded-lg"
                />
                <span className="text-white font-medium">Retool</span>
              </div>
              <p className="text-gray-300 text-sm mb-3">
                How Retool turns customer feedback into engineering work
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500 font-mono uppercase">SaaS</span>
                <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                  Read story →
                </span>
              </div>
            </a>

            {/* Remote */}
            <a
              href="https://linear.app/customers/remote"
              className="group block bg-[#16161a] hover:bg-[#1c1c21] rounded-xl p-6 transition-colors border border-[#27272a]"
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="https://webassets.linear.app/images/ornj730p/production/159083854336376173d7b08664db1a6d53f3cdb2-56x56.svg?q=95&auto=format&dpr=2"
                  alt="Remote logo"
                  className="w-10 h-10 rounded-lg"
                />
                <span className="text-white font-medium">Remote</span>
              </div>
              <p className="text-gray-300 text-sm mb-3">
                Remote switched their 1,000 person team to Linear to move faster
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500 font-mono uppercase">SaaS, Enterprise</span>
                <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                  Read story →
                </span>
              </div>
            </a>

            {/* Cohere */}
            <a
              href="https://linear.app/customers/cohere"
              className="group block bg-[#16161a] hover:bg-[#1c1c21] rounded-xl p-6 transition-colors border border-[#27272a]"
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="https://webassets.linear.app/images/ornj730p/production/a29aa6a5a361fe63e0c0b0ed7016d20c71b08c32-56x56.svg?q=95&auto=format&dpr=2"
                  alt="Cohere logo"
                  className="w-10 h-10 rounded-lg"
                />
                <span className="text-white font-medium">Cohere</span>
              </div>
              <p className="text-gray-300 text-sm mb-3">
                Why Cohere builds with Linear
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500 font-mono uppercase">AI</span>
                <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                  Read story →
                </span>
              </div>
            </a>

            {/* Raycast */}
            <a
              href="https://linear.app/customers/raycast"
              className="group block bg-[#16161a] hover:bg-[#1c1c21] rounded-xl p-6 transition-colors border border-[#27272a]"
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="https://webassets.linear.app/images/ornj730p/production/e49b121abff6209db36584e2bc070ddb3b3dd5f2-56x56.svg?q=95&auto=format&dpr=2"
                  alt="Raycast logo"
                  className="w-10 h-10 rounded-lg"
                />
                <span className="text-white font-medium">Raycast</span>
              </div>
              <p className="text-gray-300 text-sm mb-3">
                Why Raycast builds with Linear
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500 font-mono uppercase">SaaS</span>
                <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                  Read story →
                </span>
              </div>
            </a>

            {/* Semgrep */}
            <a
              href="https://linear.app/customers/semgrep"
              className="group block bg-[#16161a] hover:bg-[#1c1c21] rounded-xl p-6 transition-colors border border-[#27272a]"
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="https://webassets.linear.app/images/ornj730p/production/86b90fd7c098af86bd4bd36b6723c86efb147896-56x56.svg?q=95&auto=format&dpr=2"
                  alt="Semgrep logo"
                  className="w-10 h-10 rounded-lg"
                />
                <span className="text-white font-medium">Semgrep</span>
              </div>
              <p className="text-gray-300 text-sm mb-3">
                Why Semgrep builds with Linear
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500 font-mono uppercase">SaaS</span>
                <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                  Read story →
                </span>
              </div>
            </a>

            {/* Lightricks */}
            <a
              href="https://linear.app/customers/lightricks"
              className="group block bg-[#16161a] hover:bg-[#1c1c21] rounded-xl p-6 transition-colors border border-[#27272a]"
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="https://webassets.linear.app/images/ornj730p/production/385544c10c843445c6a7ccd840bb6993cfad58f4-56x56.svg?q=95&auto=format&dpr=2"
                  alt="Lightricks logo"
                  className="w-10 h-10 rounded-lg"
                />
                <span className="text-white font-medium">Lightricks</span>
              </div>
              <p className="text-gray-300 text-sm mb-3">
                Improving how teams work together at Lightricks
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500 font-mono uppercase">AI</span>
                <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                  Read story →
                </span>
              </div>
            </a>

            {/* Alan */}
            <a
              href="https://linear.app/customers/alan"
              className="group block bg-[#16161a] hover:bg-[#1c1c21] rounded-xl p-6 transition-colors border border-[#27272a]"
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="https://webassets.linear.app/images/ornj730p/production/a24595dad6f23ede11eb3182bab9586df2435dae-56x56.svg?q=95&auto=format&dpr=2"
                  alt="Alan logo"
                  className="w-10 h-10 rounded-lg"
                />
                <span className="text-white font-medium">Alan</span>
              </div>
              <p className="text-gray-300 text-sm mb-3">
                Why Alan builds with Linear
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500 font-mono uppercase">Health, Fintech</span>
                <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                  Read story →
                </span>
              </div>
            </a>

            {/* Twingate */}
            <a
              href="https://linear.app/customers/twingate"
              className="group block bg-[#16161a] hover:bg-[#1c1c21] rounded-xl p-6 transition-colors border border-[#27272a]"
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="https://webassets.linear.app/images/ornj730p/production/6b446f5aeb06ea5cbb24bd7169ef4ab3ebe12326-56x56.svg?q=95&auto=format&dpr=2"
                  alt="Twingate logo"
                  className="w-10 h-10 rounded-lg"
                />
                <span className="text-white font-medium">Twingate</span>
              </div>
              <p className="text-gray-300 text-sm mb-3">
                Why Twingate builds with Linear
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500 font-mono uppercase">SaaS</span>
                <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                  Read story →
                </span>
              </div>
            </a>

            {/* Pulley */}
            <a
              href="https://linear.app/customers/pulley"
              className="group block bg-[#16161a] hover:bg-[#1c1c21] rounded-xl p-6 transition-colors border border-[#27272a]"
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="https://webassets.linear.app/images/ornj730p/production/e7c7bf5936627ae1ccf55365d451a302af9d57a3-56x56.svg?q=95&auto=format&dpr=2"
                  alt="Pulley logo"
                  className="w-10 h-10 rounded-lg"
                />
                <span className="text-white font-medium">Pulley</span>
              </div>
              <p className="text-gray-300 text-sm mb-3">
                How Pulley uses Linear beyond their product teams
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500 font-mono uppercase">Fintech</span>
                <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                  Read story →
                </span>
              </div>
            </a>

            {/* Your Company CTA */}
            <a
              href="https://linear.app/switch"
              className="group flex flex-col items-center justify-center bg-gradient-to-br from-[#5e6ad2]/20 to-[#5e6ad2]/5 hover:from-[#5e6ad2]/30 hover:to-[#5e6ad2]/10 rounded-xl p-6 transition-colors border border-[#5e6ad2]/30"
            >
              <span className="text-white font-medium text-lg mb-2">Your company</span>
              <span className="text-[#5e6ad2] group-hover:text-[#7c85e0] transition-colors">
                Make the switch →
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}