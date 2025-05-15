
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Palestras", path: "/palestras" },
    { name: "Programação", path: "/programacao" },
    { name: "Workshops", path: "/workshops" },
    { name: "Galeria", path: "/galeria" },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 bg-white shadow-sm z-50">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-semibold text-event-purple">
          V SCC-IFMA
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`nav-link ${isActive(item.path) ? "active" : ""}`}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/inscricao"
            className="bg-event-blue hover:bg-blue-600 text-white px-5 py-2 rounded-md transition-colors"
          >
            Inscreva-se
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-event-blue"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white w-full border-t animate-fade-in">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`nav-link ${isActive(item.path) ? "active" : ""} block py-2`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/inscricao"
              className="bg-event-blue hover:bg-blue-600 text-white px-5 py-2 rounded-md transition-colors text-center"
              onClick={() => setIsOpen(false)}
            >
              Inscreva-se
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
