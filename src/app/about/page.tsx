import { Building2, Target, Users, Award, CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-blue-600">Rx Procures</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We are revolutionizing the pharmaceutical industry by providing comprehensive 
              business solutions that connect healthcare professionals with trusted vendors.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                To streamline pharmaceutical procurement and business operations by providing 
                a comprehensive platform that connects healthcare companies with trusted vendors, 
                while offering cutting-edge software solutions tailored for the industry.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We believe in making healthcare more accessible and efficient through technology, 
                ensuring that pharmaceutical companies can focus on what matters most - improving 
                patient outcomes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
                >
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/services"
                  className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200"
                >
                  Our Services
                </Link>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 p-8 rounded-xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Our Vision</h3>
                  <p className="text-sm text-gray-600">
                    To be the leading platform for pharmaceutical business solutions globally
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Our Values</h3>
                  <p className="text-sm text-gray-600">
                    Innovation, integrity, and excellence in everything we do
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Do
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions designed specifically for pharmaceutical and healthcare companies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-blue-100 p-3 rounded-lg w-fit mb-6">
                <Building2 className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Marketplace Platform</h3>
              <p className="text-gray-600 mb-6">
                Connect pharmaceutical companies with trusted vendors for drugs, devices, APIs, and biologics.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Pharmaceutical Drugs
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Biomedical Devices
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Rare APIs & Ingredients
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Biologics & Biosimilars
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-green-100 p-3 rounded-lg w-fit mb-6">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Software Solutions</h3>
              <p className="text-gray-600 mb-6">
                Complete suite of business management software tailored for pharmaceutical companies.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  ERP Systems
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  CRM Software
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  POS Systems
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Accounting Software
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-purple-100 p-3 rounded-lg w-fit mb-6">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional Network</h3>
              <p className="text-gray-600 mb-6">
                Connect with industry professionals and build lasting business relationships.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
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
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Knowledge Sharing
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced professionals dedicated to revolutionizing pharmaceutical business solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                JD
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">John Doe</h3>
              <p className="text-blue-600 font-medium mb-4">CEO & Founder</p>
              <p className="text-gray-600">
                15+ years in pharmaceutical industry with expertise in business development and technology integration.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-600 text-white rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                SM
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sarah Miller</h3>
              <p className="text-blue-600 font-medium mb-4">CTO</p>
              <p className="text-gray-600">
                Technology leader with extensive experience in healthcare software development and system architecture.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-600 text-white rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                AR
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Alex Rodriguez</h3>
              <p className="text-blue-600 font-medium mb-4">Head of Operations</p>
              <p className="text-gray-600">
                Operations expert with deep knowledge of pharmaceutical supply chain and vendor management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Impact
            </h2>
            <p className="text-xl text-blue-100">
              Numbers that speak to our success and growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-blue-100">Active Vendors</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">10K+</div>
              <div className="text-blue-100">Products Listed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">1K+</div>
              <div className="text-blue-100">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">99%</div>
              <div className="text-blue-100">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
