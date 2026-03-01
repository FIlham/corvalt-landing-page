import { Bot, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-slate-800">Corvalt</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-slate-600 hover:text-cyan-600 font-medium transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-slate-600 hover:text-cyan-600 font-medium transition-colors">
              Pricing
            </a>
            <a href="#contact" className="text-slate-600 hover:text-cyan-600 font-medium transition-colors">
              Contact
            </a>
            <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all">
              Get Started
            </button>
          </nav>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 flex flex-col gap-4">
            <a
              href="#features"
              className="text-slate-600 hover:text-cyan-600 font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-slate-600 hover:text-cyan-600 font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#contact"
              className="text-slate-600 hover:text-cyan-600 font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold">
              Get Started
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
