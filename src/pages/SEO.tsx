
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Search, TrendingUp, FileText, Link as LinkIcon, Zap, MessageCircle, Eye, BarChart3 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

const SEO = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-green-600/10 to-primary/10">
        <div className="container text-center">
          <div className="inline-block animate-fade-in">
            <span className="bg-green-100 text-green-600 text-sm font-medium px-4 py-1.5 rounded-full">
              Stratégie SEO
            </span>
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl font-bold max-w-4xl mx-auto leading-tight animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Dominez Google avec notre 
            <span className="text-green-600"> stratégie SEO</span>
          </h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Positionnement organique durable pour le secteur du bâtiment. Attirez plus de prospects qualifiés grâce à une visibilité maximale sur Google.
          </p>
          <div className="mt-8 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button size="lg" asChild>
              <Link to="/contact">
                Booster mon référencement
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Notre Méthode SEO */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Notre Méthode SEO 360°</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Une approche complète pour propulser votre site en première page de Google
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-green-100 p-3 rounded-xl w-fit mb-6">
                <Search className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Audit SEO Complet</h3>
              <p className="text-muted-foreground">
                Analyse technique approfondie de votre site, étude de la concurrence et identification des opportunités de positionnement dans le bâtiment.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 p-3 rounded-xl w-fit mb-6">
                <FileText className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Stratégie de Contenu</h3>
              <p className="text-muted-foreground">
                Création de contenu expert : articles de blog, guides techniques, fiches produits optimisées pour les mots-clés du secteur.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 p-3 rounded-xl w-fit mb-6">
                <LinkIcon className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Netlinking Qualifié</h3>
              <p className="text-muted-foreground">
                Acquisition de backlinks de qualité depuis des sites d'autorité du bâtiment et de l'habitat. Stratégie de liens durables.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-orange-100 p-3 rounded-xl w-fit mb-6">
                <Zap className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Optimisation Technique</h3>
              <p className="text-muted-foreground">
                Amélioration de la vitesse de chargement, optimisation mobile, structure des URLs et balisage schema pour le bâtiment.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-red-100 p-3 rounded-xl w-fit mb-6">
                <Eye className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">SEO Local</h3>
              <p className="text-muted-foreground">
                Optimisation Google My Business, citations locales et stratégie géolocalisée pour capter les recherches "près de chez moi".
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-indigo-100 p-3 rounded-xl w-fit mb-6">
                <BarChart3 className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Suivi & Reporting</h3>
              <p className="text-muted-foreground">
                Monitoring des positions, analyse du trafic organique et reporting mensuel détaillé avec plan d'action.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Spécialisation Bâtiment */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Expert SEO Secteur Bâtiment</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Nous maîtrisons parfaitement les enjeux SEO spécifiques au secteur du bâtiment
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg text-left">
                <h3 className="text-xl font-semibold mb-4 text-green-600">Mots-clés Techniques</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Isolation thermique + ville</li>
                  <li>• Rénovation énergétique + région</li>
                  <li>• Maçonnerie + département</li>
                  <li>• Plomberie d'urgence + localité</li>
                  <li>• Électricien agréé + zone</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg text-left">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Optimisations Spécifiques</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Fiches Google My Business</li>
                  <li>• Avis clients optimisés</li>
                  <li>• Photos de chantiers</li>
                  <li>• Certifications mises en avant</li>
                  <li>• Zone d'intervention claire</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Résultats Garantis</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">+150%</div>
                  <p className="text-sm text-muted-foreground">Trafic organique moyen</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">TOP 3</div>
                  <p className="text-sm text-muted-foreground">Positions sur mots-clés cibles</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">+200%</div>
                  <p className="text-sm text-muted-foreground">Leads qualifiés générés</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Suivi Client */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Accompagnement SEO Premium</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Un suivi personnalisé avec stratégie évolutive et optimisation continue pour des résultats durables.
            </p>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-green-100 p-4 rounded-full">
                  <MessageCircle className="h-12 w-12 text-green-600" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Groupe WhatsApp Dédié</h3>
              <p className="text-muted-foreground text-lg mb-6">
                Échanges directs avec votre consultant SEO. Suivi des positions, conseils stratégiques et reporting en temps réel.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg mt-1">
                    <span className="text-green-600 font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Conseils experts</h4>
                    <p className="text-sm text-muted-foreground">Stratégie personnalisée</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg mt-1">
                    <span className="text-green-600 font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Reporting mensuel</h4>
                    <p className="text-sm text-muted-foreground">Analytics détaillées</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg mt-1">
                    <span className="text-green-600 font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Veille continue</h4>
                    <p className="text-sm text-muted-foreground">Algorithmes & concurrence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Prêt à dominer Google naturellement ?"
        description="Contactez-nous pour un audit SEO gratuit et découvrez le potentiel de positionnement de votre site dans le secteur du bâtiment."
        buttonText="Démarrer ma stratégie SEO"
        buttonLink="/contact"
      />

      <Footer />
    </div>
  );
};

export default SEO;
