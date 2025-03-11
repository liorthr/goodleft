
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto">
        <nav className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center space-x-2" 
            onClick={closeMenu}
          >
            <div className="font-heading font-bold text-2xl text-gradient">
              AgenceMarketing
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <div className="flex items-center space-x-8">
              <NavLink to="/" active={isActive("/")} onClick={closeMenu}>
                Accueil
              </NavLink>
              <NavLink to="/services" active={isActive("/services")} onClick={closeMenu}>
                Services
              </NavLink>
              <NavLink to="/blog" active={isActive("/blog")} onClick={closeMenu}>
                Blog
              </NavLink>
              <NavLink to="/contact" active={isActive("/contact")} onClick={closeMenu}>
                Contact
              </NavLink>
            </div>
            <Button className="smooth-transition button-hover" size="sm">
              <span className="mr-2">Démarrer un projet</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="text-foreground"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute inset-x-0 top-full mt-0 bg-white/90 backdrop-blur-md border-b border-gray-200 animate-fade-in-fast">
            <div className="container py-6 space-y-6">
              <div className="flex flex-col space-y-4">
                <NavLink to="/" active={isActive("/")} onClick={closeMenu}>
                  Accueil
                </NavLink>
                <NavLink to="/services" active={isActive("/services")} onClick={closeMenu}>
                  Services
                </NavLink>
                <NavLink to="/blog" active={isActive("/blog")} onClick={closeMenu}>
                  Blog
                </NavLink>
                <NavLink to="/contact" active={isActive("/contact")} onClick={closeMenu}>
                  Contact
                </NavLink>
              </div>
              <Button className="w-full smooth-transition button-hover">
                Démarrer un projet
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

// NavLink component for styling active links
const NavLink = ({ 
  to, 
  active, 
  onClick, 
  children 
}: { 
  to: string;
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`relative text-base font-medium transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100 ${
        active ? "text-primary after:origin-bottom-left after:scale-x-100" : "text-foreground"
      }`}
    >
      {children}
    </Link>
  );
};

export default Navbar;
