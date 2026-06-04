import { useState } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import clsx from 'clsx';
import { navLinks } from '@/lib/data';
import type { NavLink } from '@/types';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-brand font-bold text-xl">
          <Code2 size={24} />
          <span>Alex Dev</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link: NavLink) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-600 hover:text-brand font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-gray-600 hover:text-brand transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={clsx(
          'md:hidden overflow-hidden transition-all duration-300 bg-white border-t border-gray-100',
          open ? 'max-h-64' : 'max-h-0'
        )}
      >
        <nav className="flex flex-col px-6 py-4 gap-4">
          {navLinks.map((link: NavLink) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-600 hover:text-brand font-medium transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
