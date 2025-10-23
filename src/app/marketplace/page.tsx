import { Search, Filter, ShoppingCart, Star, MapPin, Clock, CheckCircle, ArrowRight, Building2, Package, Beaker, Heart } from 'lucide-react'
import Link from 'next/link'

export default function Marketplace() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Pharmaceutical <span className="text-blue-600">Marketplace</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Source pharmaceutical drugs, biomedical devices, rare APIs, biologics, and connect with CDMO vendors
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for drugs, devices, APIs, or vendors..."
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200">
                  Search
                </button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">10K+</div>
                <div className="text-gray-600">Products</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600">Vendors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">1K+</div>
                <div className="text-gray-600">Orders</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">99%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Browse by Category
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find exactly what you need from our comprehensive product categories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Pharmaceutical Drugs */}
            <Link href="/marketplace/drugs" className="group">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <div className="bg-blue-600 p-4 rounded-lg w-fit mb-6">
                  <Package className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Pharmaceutical Drugs</h3>
                <p className="text-gray-600 mb-6">
                  Brand and generic pharmaceutical drugs from verified suppliers
                </p>
                <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700">
                  Browse Drugs
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </Link>

            {/* Biomedical Devices */}
            <Link href="/marketplace/devices" className="group">
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <div className="bg-green-600 p-4 rounded-lg w-fit mb-6">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Biomedical Devices</h3>
                <p className="text-gray-600 mb-6">
                  Medical devices and equipment for healthcare facilities
                </p>
                <div className="flex items-center text-green-600 font-semibold group-hover:text-green-700">
                  Browse Devices
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </Link>

            {/* APIs & Ingredients */}
            <Link href="/marketplace/apis" className="group">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <div className="bg-purple-600 p-4 rounded-lg w-fit mb-6">
                  <Beaker className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">APIs & Ingredients</h3>
                <p className="text-gray-600 mb-6">
                  Rare pharmaceutical APIs and active ingredients
                </p>
                <div className="flex items-center text-purple-600 font-semibold group-hover:text-purple-700">
                  Browse APIs
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </Link>

            {/* Biologics & Biosimilars */}
            <Link href="/marketplace/biologics" className="group">
              <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-xl hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <div className="bg-red-600 p-4 rounded-lg w-fit mb-6">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Biologics & Biosimilars</h3>
                <p className="text-gray-600 mb-6">
                  Biologics, biosimilars, and specialty pharmaceuticals
                </p>
                <div className="flex items-center text-red-600 font-semibold group-hover:text-red-700">
                  Browse Biologics
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover trending products and trusted vendors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product Card 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <Package className="h-16 w-16 text-blue-600" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-blue-600 font-semibold">Pharmaceutical Drug</span>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">4.8</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Generic Metformin 500mg</h3>
                <p className="text-gray-600 text-sm mb-4">
                  High-quality generic diabetes medication from verified supplier
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-gray-900">$0.15</span>
                    <span className="text-gray-600 text-sm">/tablet</span>
                  </div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            {/* Product Card 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                <Building2 className="h-16 w-16 text-green-600" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-green-600 font-semibold">Medical Device</span>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">4.9</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Digital Blood Pressure Monitor</h3>
                <p className="text-gray-600 text-sm mb-4">
                  FDA-approved digital blood pressure monitoring device
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-gray-900">$89.99</span>
                    <span className="text-gray-600 text-sm">/unit</span>
                  </div>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            {/* Product Card 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                <Beaker className="h-16 w-16 text-purple-600" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-purple-600 font-semibold">API</span>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">4.7</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Rare API Compound X-247</h3>
                <p className="text-gray-600 text-sm mb-4">
                  High-purity rare API for specialty pharmaceutical manufacturing
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-gray-900">$2,500</span>
                    <span className="text-gray-600 text-sm">/kg</span>
                  </div>
                  <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-200">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/marketplace/search"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-200 inline-flex items-center"
            >
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CDMO Vendors */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              CDMO Vendor Network
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with trusted Customized Drug Manufacturing Organizations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                  P
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">PharmaCorp Solutions</h3>
                  <p className="text-gray-600 text-sm">CDMO Specialist</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <MapPin className="h-4 w-4 text-gray-400 mr-2" />
                <span className="text-sm text-gray-600">New Jersey, USA</span>
              </div>
              <div className="flex items-center mb-4">
                <Clock className="h-4 w-4 text-gray-400 mr-2" />
                <span className="text-sm text-gray-600">24/7 Support</span>
              </div>
              <div className="flex items-center mb-6">
                <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                <span className="text-sm text-gray-600">4.9/5 (127 reviews)</span>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Solid Dosage Forms
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Injectable Manufacturing
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Regulatory Compliance
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                  B
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">BioTech Manufacturing</h3>
                  <p className="text-gray-600 text-sm">Biologics CDMO</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <MapPin className="h-4 w-4 text-gray-400 mr-2" />
                <span className="text-sm text-gray-600">California, USA</span>
              </div>
              <div className="flex items-center mb-4">
                <Clock className="h-4 w-4 text-gray-400 mr-2" />
                <span className="text-sm text-gray-600">Business Hours</span>
              </div>
              <div className="flex items-center mb-6">
                <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                <span className="text-sm text-gray-600">4.8/5 (89 reviews)</span>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Biologics Manufacturing
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Biosimilar Development
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Quality Assurance
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                  G
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Global Pharma Works</h3>
                  <p className="text-gray-600 text-sm">International CDMO</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <MapPin className="h-4 w-4 text-gray-400 mr-2" />
                <span className="text-sm text-gray-600">Singapore</span>
              </div>
              <div className="flex items-center mb-4">
                <Clock className="h-4 w-4 text-gray-400 mr-2" />
                <span className="text-sm text-gray-600">24/7 Support</span>
              </div>
              <div className="flex items-center mb-6">
                <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                <span className="text-sm text-gray-600">4.7/5 (156 reviews)</span>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Global Distribution
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Regulatory Expertise
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Cost-Effective Solutions
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/marketplace/cdmo"
              className="bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors duration-200 inline-flex items-center"
            >
              Explore CDMO Network
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Sourcing?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of pharmaceutical companies already using our marketplace to streamline their procurement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Get Started Free
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
