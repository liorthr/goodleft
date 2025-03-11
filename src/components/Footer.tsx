
import { Link } from "react-router-dom";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Twitter, 
  ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1 */}
          <div className="space-y-6">
            <div className="font-heading font-bold text-2xl text-gradient">
              Goodleft
            </div>
            <p className="text-muted-foreground">
              Votre partenaire marketing digital à Paris, spécialisé dans le secteur du bâtiment et bien plus encore.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={<Facebook className="h-5 w-5" />} />
              <SocialLink href="#" icon={<Instagram className="h-5 w-5" />} />
              <SocialLink href="#" icon={<Twitter className="h-5 w-5" />} />
              <SocialLink href="#" icon={<Linkedin className="h-5 w-5" />} />
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-6">Liens rapides</h3>
            <div className="space-y-4">
              <FooterLink to="/">Accueil</FooterLink>
              <FooterLink to="/services">Services</FooterLink>
              <FooterLink to="/blog">Blog</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
            </div>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-6">Nos Services</h3>
            <div className="space-y-4">
              <FooterLink to="/services#metaads">Meta Ads</FooterLink>
              <FooterLink to="/services#tiktokads">TikTok Ads</FooterLink>
              <FooterLink to="/services#googleads">Google Ads</FooterLink>
              <FooterLink to="/services#automation">Automatisation</FooterLink>
              <FooterLink to="/services#leadgen">Lead Generation</FooterLink>
            </div>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-primary shrink-0 mt-0.5" />
                <p className="text-muted-foreground">60 rue François 1er, 75008 Paris</p>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-primary shrink-0" />
                <a href="mailto:contact@goodleft.com" className="text-muted-foreground hover:text-primary transition-colors">
                  contact@goodleft.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-primary shrink-0" />
                <a href="tel:+33782979479" className="text-muted-foreground hover:text-primary transition-colors">
                  +33 7 82 97 94 79
                </a>
              </div>
              <Button className="w-full mt-2 smooth-transition button-hover" asChild>
                <Link to="/contact">
                  <span className="mr-2">Nous contacter</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Goodleft. Tous droits réservés.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Politique de confidentialité
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Conditions d'utilisation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-colors duration-300"
    >
      {icon}
    </a>
  );
};

const FooterLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  return (
    <Link
      to={to}
      className="block text-muted-foreground hover:text-primary transition-colors duration-200"
    >
      {children}
    </Link>
  );
};

export default Footer;
