
import React from 'react';
import { User, Home } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  // Define navigation items as per the new design (no map)
  const navItems = [
    { icon: User, label: 'حسابي', href: '/profile' },
    { icon: Home, label: 'الرئيسية', href: '/' },
  ];

  return (
    <header className="relative z-10 px-4 md:px-6 py-3 md:py-4 bg-[#202c76] border-b-4 border-[#f3b12d]">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Navigation Items */}
        <div className="flex items-center space-x-8 space-x-reverse">
          {navItems.map((item) => {
            const active = location.pathname === item.href;
            return (
              <Link
                key={item.label}
                to={item.href}
                className={
                  "flex flex-col items-center justify-center px-2 group " +
                  (active
                    ? "text-[#f3b12d]"
                    : "text-white hover:text-[#f3b12d]")
                }
                aria-current={active ? 'page' : undefined}
              >
                <item.icon
                  className={`w-6 h-6 mb-1 ${active ? "fill-[#f3b12d]" : ""}`}
                  strokeWidth={2}
                  absoluteStrokeWidth
                />
                <span className="text-xs font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <div className="text-white text-xl md:text-2xl font-bold">
            <span className="text-[#f3b12d]">K</span>hedamni
          </div>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
