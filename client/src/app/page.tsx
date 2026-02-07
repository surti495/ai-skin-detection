'use client';

import Image from 'next/image';

export default function Home() {
  const services = [
    {
      id: 1,
      title: 'Skin Analysis',
      description: 'Advanced AI-powered skin analysis for better health insights.',
      image: '/services/analysis.jpg',
    },
    {
      id: 2,
      title: 'Product Recommendations',
      description: 'Personalized product recommendations based on your skin type.',
      image: '/services/recommendations.jpg',
    },
    {
      id: 3,
      title: 'Health Insights',
      description: 'Get detailed health insights and personalized advice.',
      image: '/services/insights.jpg',
    },
  ];

  const products = [
    {
      id: 1,
      name: 'Professional AI Skin Analyzer',
      description: 'Advanced device for comprehensive skin analysis.',
      image: '/products/analyzer.jpg',
      price: '₨45,000',
      link: '/products/1',
    },
    {
      id: 2,
      name: 'Skincare Bundle Set',
      description: 'Complete skincare solution for all skin types.',
      image: '/products/bundle.jpg',
      price: '₨18,500',
      link: '/products/2',
    },
    {
      id: 3,
      name: 'AI Diagnosis Report',
      description: 'Detailed skin diagnosis with personalized recommendations.',
      image: '/products/report.jpg',
      price: '₨5,000',
      link: '/products/3',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Transform Your Skin Journey
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Advanced AI-powered skin analysis system for personalized skincare recommendations and health insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/upload"
                className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 text-center"
              >
                Upload Skin Sample
              </a>
              <a
                href="/contact"
                className="px-8 py-4 bg-blue-900 text-white font-bold rounded-lg hover:bg-blue-950 transition-all duration-200 border-2 border-white text-center"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Our Services
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive solutions for your skin health
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
              >
                <div className="relative h-48 bg-gray-200 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600"></div>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Our Products
            </h2>
            <p className="text-lg text-gray-600">
              Premium solutions for professional skin analysis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <a
                key={product.id}
                href={product.link}
                className="group"
              >
                <div className="bg-white rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden h-full transform hover:-translate-y-2">
                  {/* Product Image */}
                  <div className="relative h-56 bg-gray-200 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400"></div>
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-blue-600">
                        {product.price}
                      </span>
                      <span className="text-blue-600 font-semibold group-hover:translate-x-2 transition-transform">
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Get the latest updates, skincare tips, and exclusive offers directly in your inbox.
            </p>

            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-4 rounded-lg text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all duration-200 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>

            <p className="text-sm text-gray-400 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
