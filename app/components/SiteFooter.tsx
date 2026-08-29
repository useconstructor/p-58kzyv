import { Twitter, Linkedin, Instagram, Mail } from 'lucide-react'
import Link from 'next/link'

export default function SiteFooter() {
  const currentYear = new Date().getFullYear()

  const navLinks = [
    { label: 'Workspace', href: '/' },
    { label: 'Favorites', href: '/homepage' },
    { label: 'Customers', href: '/customers' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Now', href: '/now' },
    { label: 'Contact', href: '/contact' },
  ]

  const productLinks = [
    { label: 'Features', href: '/' },
    { label: 'Integrations', href: '/' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Changelog', href: '/' },
    { label: 'Documentation', href: '/' },
  ]

  const companyLinks = [
    { label: 'About', href: '/' },
    { label: 'Customers', href: '/customers' },
    { label: 'Careers', href: '/' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <footer className="bg-[#0a0a0b] text-gray-400 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <img
                src=""
                alt="Linear – The system for product development"
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-sm text-gray-500 mb-6 max-w-sm">
              Linear is the system for product development. Streamline issues, projects, and product roadmaps.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://twitter.com/linear"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/company/linear"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/linear"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="/contact"
                className="text-gray-500 hover:text-white transition-colors"
                aria-label="Contact us"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Product</h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Navigation</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {currentYear} Linear. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <Link href="/" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/" className="hover:text-white transition-colors">
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}