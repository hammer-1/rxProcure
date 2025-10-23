import { ShoppingCart, Wrench, Users, Building2, CheckCircle, ArrowRight, Star, Shield, Zap } from 'lucide-react'
import Link from 'next/link'

export default function Services() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-blue-600">Services</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Comprehensive solutions designed specifically for pharmaceutical and healthcare companies
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Business Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to streamline your pharmaceutical business operations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Marketplace Service */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="bg-blue-600 p-3 rounded-lg mr-4">
                  <ShoppingCart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Marketplace Platform</h3>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                Connect with trusted vendors for all your pharmaceutical procurement needs. 
                Source drugs, devices, APIs, and biologics from verified suppliers.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-700">Brand & Generic Drugs</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-700">Biomedical Devices</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-700">Rare APIs & Ingredients</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-700">Biologics & Biosimilars</span>
                </div>
              </div>
              <Link
                href="/marketplace"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 inline-flex items-center"
              >
                Explore Marketplace
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Software Solutions */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <div className="bg-green-600 p-3 rounded-lg mr-4">
                  <Wrench className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Software Solutions</h3>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                Complete suite of business management software tailored for pharmaceutical companies. 
                Streamline operations with our integrated platform.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-700">ERP Systems</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-700">CRM Software</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-700">POS Systems</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-700">Accounting Software</span>
                </div>
              </div>
              <Link
                href="/software"
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 inline-flex items-center"
              >
                View Software
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Additional Services */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="bg-purple-100 p-3 rounded-lg w-fit mb-6">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional Network</h3>
              <p className="text-gray-600 mb-6">
                Connect with industry professionals, CDMO vendors, and build lasting business relationships.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  CDMO Vendor Network
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Industry Events
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Professional Forums
                </li>
              </ul>
              <Link
                href="/network"
                className="text-purple-600 font-semibold hover:text-purple-700 transition-colors duration-200"
              >
                Join Network →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="bg-orange-100 p-3 rounded-lg w-fit mb-6">
                <Building2 className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Procurement Services</h3>
              <p className="text-gray-600 mb-6">
                Expert procurement services for all your pharmaceutical and healthcare needs with guaranteed quality and timely delivery.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Sourcing & Procurement
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Quality Assurance
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Supply Chain Management
                </li>
              </ul>
              <Link
                href="/procurement"
                className="text-orange-600 font-semibold hover:text-orange-700 transition-colors duration-200"
              >
                Learn More →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="bg-red-100 p-3 rounded-lg w-fit mb-6">
                <Shield className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Support & Training</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive support and training programs to ensure your team gets the most out of our platform.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  24/7 Technical Support
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Training Programs
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Implementation Support
                </li>
              </ul>
              <Link
                href="/support"
                className="text-red-600 font-semibold hover:text-red-700 transition-colors duration-200"
              >
                Get Support →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Rx Procures?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry-specific features designed for pharmaceutical and healthcare businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Secure & Compliant</h3>
              <p className="text-gray-600">
                HIPAA compliant platform with enterprise-grade security for pharmaceutical data.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Fast & Efficient</h3>
              <p className="text-gray-600">
                Streamlined processes that save time and reduce operational costs significantly.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Expert Network</h3>
              <p className="text-gray-600">
                Connect with verified vendors and industry professionals worldwide.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Star className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Proven Results</h3>
              <p className="text-gray-600">
                Trusted by 1000+ pharmaceutical companies with 99% satisfaction rate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of pharmaceutical companies already using Rx Procures to streamline their operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Start Free Trial
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
