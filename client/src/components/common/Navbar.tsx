'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { href: '/upload', label: 'Upload' },
        { href: '/products', label: 'Products' },
        { href: '/about', label: 'About' },
        { href: '/contact', label: 'Contact' },
    ];

    const isActive = (href: string) => {
        return pathname === href || pathname.startsWith(href + '/');
    };

    return (
        <nav className="bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-lg sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    {/* Logo Section */}
                    <a href="/" className="flex items-center space-x-2 group">
                        <Image 
                            src="/logo.png" 
                            alt="AI Skin Detection Logo" 
                            width={40} 
                            height={40}
                            className="hover:scale-110 transition-transform duration-200"
                        />
                        <span className="text-2xl font-bold group-hover:text-blue-400 transition-colors">
                            Ai-Skin system
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <ul className="hidden lg:flex items-center space-x-2">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                                        isActive(link.href)
                                            ? 'text-white bg-blue-600 shadow-md'
                                            : 'text-gray-300 hover:text-white hover:bg-gray-700'
                                    }`}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Right Section - User Profile & Login */}
                    <div className="flex items-center space-x-2 lg:space-x-4">
                        <a
                            href="/profile"
                            className={`hidden sm:inline-block px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                                isActive('/profile')
                                    ? 'text-white bg-blue-600'
                                    : 'text-gray-300 hover:text-white hover:bg-gray-700'
                            }`}
                        >
                            Profile
                        </a>
                        <a
                            href="/login"
                            className="px-4 py-2.5 lg:px-5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 active:scale-95 transition-all duration-200 shadow-md hover:shadow-lg text-sm lg:text-base"
                        >
                            Sign In
                        </a>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden inline-flex flex-col items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-700 transition-colors"
                            aria-label="Toggle menu"
                            aria-expanded={isMenuOpen}
                        >
                            <div className={`w-6 h-0.5 bg-white mb-1 transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
                            <div className={`w-6 h-0.5 bg-white mb-1 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
                            <div className={`w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                {isMenuOpen && (
                    <div className="lg:hidden mt-4 pb-4 border-t border-gray-700 pt-4 animate-in fade-in slide-in-from-top-2 duration-200">
                        <ul className="space-y-1">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className={`block px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                                            isActive(link.href)
                                                ? 'text-white bg-blue-600'
                                                : 'text-gray-300 hover:text-white hover:bg-gray-700'
                                        }`}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {link.label}
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