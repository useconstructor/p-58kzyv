use client

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X, Zap, Star, Search, Edit, Home, Users, DollarSign, Clock, Mail } from 'lucide-react';

export default function SiteHeader() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const workspaceItems = [
    { label: 'Pulse', href: '/', icon: Zap },
    { label: 'Inbox', href: '/', icon: Mail },
    { label: 'My Issues', href: '/', icon: Edit },
    { label: 'Search', href: '/', icon: Search },
  ];

  const favoritesItems = [
    { label: 'All Issues', href: '/', icon: Star },
    { label: 'Active', href: '/', icon: Clock },
    { label: 'Backlog', href: '/', icon: Home },
  ];

  const mainNavItems = [
    { label: 'Home', href: '/' },
    { label: 'Customers', href: '/customers' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Now', href: '/now' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-6 h-6 bg-[#5E6AD2] rounded flex items-center justify-center">
                <svg width="13" height="13" viewBox="0 0 100 100" fill="white" aria-label="Linear logo">
                  <path d="M1.225 61.523c-.222-.949.908-1.546 1.597-.857l36.512 36.512c.69.69.092 1.82-.857 1.597-18.425-4.323-32.93-18.827-37.252-37.252M.002 46.889a1 1 0 0 0 .29.76L52.35 99.71c.201.2.478.307.76.29 2.37-.149 4.695-.46 6.963-.927.765-.157 1.03-1.096.478-1.648L2.576 39.448c-.552-.551-1.491-.286-1.648.479a50 50 0 0 0-.926 6.962M4.21 29.705a.99.99 0 0 0 .208 1.1l64.776 64.776a.99.99 0 0 0 1.1.208 50 50 0 0 0 5.185-2.684.98.98 0 0 0 .183-1.54L8.436 24.336a.98.98 0 0 0-1.541.183 50 50 0 0 0-2.684 5.185m8.448-11.631a.986.986 0 0 1-.045-1.354C21.78 6.46 35.111 0 49.952 0 77.592 0 100 22.407 100 50.048c0 14.84-6.46 28.172-16.72 37.338a.986.986 0 0 1-1.354-.045z"></path>
                </svg>
              </div>
              <span className="font-bold text-lg text-gray-900">Linear</span>
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              <div className="relative">
                <button
                  onClick={() => setOpenMenu(openMenu === 'Workspace' ? null : 'Workspace')}
                  className="flex items-center gap-1 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                >
                  Workspace
                  <ChevronDown className={`w-4 h-4 transition-transform ${openMenu === 'Workspace' ? 'rotate-180' : ''}`} />
                </button>
                {openMenu === 'Workspace' && (
                  <div className="absolute top-full left-0 mt-1 bg-white shadow-xl border border-gray-100 rounded-md z-50 min-w-52 py-2">
                    {workspaceItems.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setOpenMenu(null)}
                        className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      >
                        <item.icon className="w-4 h-4 text-gray-400" />
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div className="relative">
                <button
                  onClick={() => setOpenMenu(openMenu === 'Favorites' ? null : 'Favorites')}
                  className="flex items-center gap-1 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                >
                  Favorites
                  <ChevronDown className={`w-4 h-4 transition-transform ${openMenu === 'Favorites' ? 'rotate-180' : ''}`} />
                </button>
                {openMenu === 'Favorites' && (
                  <div className="absolute top-full left-0 mt-1 bg-white shadow-xl border border-gray-100 rounded-md z-50 min-w-52 py-2">
                    {favoritesItems.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setOpenMenu(null)}
                        className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      >
                        <item.icon className="w-4 h-4 text-gray-400" />
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {mainNavItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-50 rounded-md transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <Link
              href="/contact"
              className="px-4 py-2 text-sm font-medium text-white bg-[#5E6AD2] hover:bg-[#4F5BC0] rounded-md transition-colors"
            >
              Get Started
            </Link>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4 space-y-2">
            <div className="border-b border-gray-100 pb-2 mb-2">
              <button
                onClick={() => setOpenMenu(openMenu === 'MobileWorkspace' ? null : 'MobileWorkspace')}
                className="flex items-center justify-between w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md"
              >
                Workspace
                <ChevronDown className={`w-4 h-4 transition-transform ${openMenu === 'MobileWorkspace' ? 'rotate-180' : ''}`} />
              </button>
              {openMenu === 'MobileWorkspace' && (
                <div className="ml-4 mt-1 space-y-1">
                  {workspaceItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => {
                        setOpenMenu(null);
                        setMobileMenuOpen(false);
                      }}
                      className="flex items-center gap-3 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md"
                    >
                      <item.icon className="w-4 h-4 text-gray-400" />
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="border-b border-gray-100 pb-2 mb-2">
              <button
                onClick={() => setOpenMenu(openMenu === 'MobileFavorites' ? null : 'MobileFavorites')}
                className="flex items-center justify-between w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md"
              >
                Favorites
                <ChevronDown className={`w-4 h-4 transition-transform ${openMenu === 'MobileFavorites' ? 'rotate-180' : ''}`} />
              </button>
              {openMenu === 'MobileFavorites' && (
                <div className="ml-4 mt-1 space-y-1">
                  {favoritesItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => {
                        setOpenMenu(null);
                        setMobileMenuOpen(false);
                      }}
                      className="flex items-center gap-3 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md"
                    >
                      <item.icon className="w-4 h-4 text-gray-400" />
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {mainNavItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md"
              >
                {item.label}
              </Link>
            ))}

            <div className="pt-4 border-t border-gray-100">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full px-4 py-2 text-sm font-medium text-center text-white bg-[#5E6AD2] hover:bg-[#4F5BC0] rounded-md transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}