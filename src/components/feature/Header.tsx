import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white/90 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="w-full px-6 md:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 flex items-center justify-center bg-gray-900 rounded-lg">
            <i className="ri-dashboard-line text-white text-sm"></i>
          </div>
          <span className="text-gray-900 font-semibold text-base tracking-tight">Dashboard</span>
        </div>

        {/* Nav Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-200 whitespace-nowrap">Inicio</a>
          <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-200 whitespace-nowrap">Características</a>
          <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-200 whitespace-nowrap">Soporte</a>
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200 whitespace-nowrap cursor-pointer">
            Iniciar sesión
          </button>
          <button className="text-sm bg-gray-900 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition-all duration-200 whitespace-nowrap cursor-pointer">
            Comenzar
          </button>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden w-8 h-8 flex items-center justify-center cursor-pointer text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className={menuOpen ? "ri-close-line text-xl" : "ri-menu-line text-xl"}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors whitespace-nowrap">Inicio</a>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors whitespace-nowrap">Características</a>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors whitespace-nowrap">Soporte</a>
          <button className="text-sm bg-gray-900 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition-all whitespace-nowrap cursor-pointer w-fit">
            Comenzar
          </button>
        </div>
      )}
    </header>
  );
}
