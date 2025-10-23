import Link from 'next/link'
import { Building2, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">Rx Procures</span>
            </div>
            <p className="text-gray-300 text-sm">
              Complete B2B platform for pharmaceutical and healthcare companies providing comprehensive business solutions.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <Mail className="h-4 w-4" />
              <span>info@rxprocures.com</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <MapPin className="h-4 w-4" />
              <span>123 Pharma Street, Healthcare City</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/marketplace" className="text-gray-300 hover:text-white transition-colors">Marketplace</Link></li>
              <li><Link href="/software" className="text-gray-300 hover:text-white transition-colors">Software Solutions</Link></li>
              <li><Link href="/procurement" className="text-gray-300 hover:text-white transition-colors">Procurement Services</Link></li>
              <li><Link href="/network" className="text-gray-300 hover:text-white transition-colors">Professional Network</Link></li>
            </ul>
          </div>

          {/* Software Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Software Solutions</h3>
            <ul className="space-y-2">
              <li><Link href="/software/crm" className="text-gray-300 hover:text-white transition-colors">CRM Software</Link></li>
              <li><Link href="/software/erp" className="text-gray-300 hover:text-white transition-colors">ERP Software</Link></li>
              <li><Link href="/software/pos" className="text-gray-300 hover:text-white transition-colors">POS Software</Link></li>
              <li><Link href="/software/accounting" className="text-gray-300 hover:text-white transition-colors">Accounting Software</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/faq" className="text-gray-300 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/support" className="text-gray-300 hover:text-white transition-colors">Support</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2024 Rx Procures. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-300 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-300 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
