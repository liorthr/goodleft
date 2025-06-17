
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24 pb-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Button variant="ghost" asChild className="mb-4">
                <Link to="/">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Retour à l'accueil
                </Link>
              </Button>
              <h1 className="text-4xl font-bold mb-4">Conditions d'utilisation</h1>
              <p className="text-muted-foreground">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
            </div>

            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">1. Objet</h2>
                <p className="mb-4">
                  Les présentes conditions générales d'utilisation (CGU) régissent l'utilisation du site web 
                  de Goodleft et l'accès aux services proposés par notre agence de marketing digital.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">2. Mentions légales</h2>
                <ul className="list-none mb-4">
                  <li><strong>Raison sociale :</strong> Goodleft</li>
                  <li><strong>Adresse :</strong> 60 rue François 1er, 75008 Paris</li>
                  <li><strong>Email :</strong> contact@goodleft.com</li>
                  <li><strong>Téléphone :</strong> +33 7 82 97 94 79</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">3. Accès au site</h2>
                <p className="mb-4">
                  L'accès au site est gratuit. Cependant, nous nous réservons le droit de suspendre 
                  temporairement l'accès pour des raisons de maintenance ou de mise à jour.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">4. Services proposés</h2>
                <p className="mb-4">
                  Goodleft propose des services de marketing digital incluant :
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Gestion de campagnes publicitaires (Meta Ads, Google Ads, TikTok Ads, Native Ads)</li>
                  <li>Génération de leads qualifiés</li>
                  <li>Automatisation marketing</li>
                  <li>Stratégies de communication digitale</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">5. Obligations de l'utilisateur</h2>
                <p className="mb-4">
                  L'utilisateur s'engage à :
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Utiliser le site conformément à sa destination</li>
                  <li>Ne pas porter atteinte aux droits de tiers</li>
                  <li>Fournir des informations exactes lors de ses demandes</li>
                  <li>Respecter les lois en vigueur</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">6. Propriété intellectuelle</h2>
                <p className="mb-4">
                  Tous les éléments du site (textes, images, logos, etc.) sont protégés par le droit d'auteur. 
                  Toute reproduction sans autorisation est interdite.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">7. Limitation de responsabilité</h2>
                <p className="mb-4">
                  Goodleft ne saurait être tenu responsable des dommages directs ou indirects résultant 
                  de l'utilisation du site ou de l'impossibilité d'y accéder.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">8. Protection des données</h2>
                <p className="mb-4">
                  Le traitement de vos données personnelles est régi par notre 
                  <Link to="/privacy" className="text-primary hover:underline"> politique de confidentialité</Link>.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">9. Droit applicable</h2>
                <p className="mb-4">
                  Les présentes CGU sont soumises au droit français. Tout litige sera soumis 
                  aux tribunaux compétents de Paris.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">10. Contact</h2>
                <p className="mb-4">
                  Pour toute question concernant ces conditions d'utilisation :
                </p>
                <ul className="list-none mb-4">
                  <li><strong>Email :</strong> contact@goodleft.com</li>
                  <li><strong>Téléphone :</strong> +33 7 82 97 94 79</li>
                  <li><strong>Adresse :</strong> 60 rue François 1er, 75008 Paris</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
