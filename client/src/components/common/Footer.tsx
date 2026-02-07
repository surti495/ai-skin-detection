export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white mt-8">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <section className="flex flex-col items-start">
            <img 
              src="/logo.png" 
              alt="AI Skin Detection Logo" 
              className="h-10 w-auto mb-2"
            />
            <p className="text-gray-300 text-sm">
              Advanced AI-powered skin analysis for better health insights.
            </p>
          </section>

          {/* Quick Links */}
          <nav aria-label="Quick Links">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="/help" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Help & Support
                </a>
              </li>
              <li>
                <a 
                  href="/contact" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a 
                  href="/faq" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </nav>

          {/* Legal Links */}
          <nav aria-label="Legal">
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="/privacy" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="/terms" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a 
                  href="/cookies" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Cookie Policy
                </a>
              </li>
            </ul>
          </nav>

          {/* Social Links */}
          <nav aria-label="Social Media">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://twitter.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a 
                  href="https://facebook.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a 
                  href="https://instagram.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} AI Skin Detection. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}