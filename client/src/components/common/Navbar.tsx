'use client';

import { useState } from 'react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { href: '/upload', label: 'Upload', icon: '📤' },
        { href: '/products', label: 'Products', icon: '🛍️' },
        { href: '/about', label: 'About', icon: 'ℹ️' },
        { href: '/contact', label: 'Contact', icon: '✉️' },
    ];

    return (
        <nav className="bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-lg sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    {/* Logo Section */}
                    <div className="flex items-center space-x-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center font-bold text-lg">
                            AS
                        </div>
                        <a href="/" className="text-2xl font-bold hover:text-blue-400 transition-colors">
                            AiSkin
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex space-x-1">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className="px-4 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-200 flex items-center space-x-1"
                                >
                                    <span>{link.icon}</span>
                                    <span>{link.label}</span>
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Right Section - User Profile & Login */}
                    <div className="flex items-center space-x-4">
                        <a
                            href="/profile"
                            className="hidden sm:inline-block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-200"
                        >
                            👤 Profile
                        </a>
                        <a
                            href="/login"
                            className="px-5 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
                        >
                            Sign In
                        </a>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden inline-flex flex-col items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-700 transition-colors"
                            aria-label="Toggle menu"
                            aria-expanded={isMenuOpen}
                        >
                            <div className="w-6 h-0.5 bg-white mb-1 transition-transform"></div>
                            <div className="w-6 h-0.5 bg-white mb-1 transition-transform"></div>
                            <div className="w-6 h-0.5 bg-white transition-transform"></div>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 border-t border-gray-700 pt-4">
                        <ul className="space-y-2">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="block px-4 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-200"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <span>{link.icon}</span> {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
}