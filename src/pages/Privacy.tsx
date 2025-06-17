
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Privacy = () => {
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
              <h1 className="text-4xl font-bold mb-4">Politique de confidentialité</h1>
              <p className="text-muted-foreground">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
            </div>

            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">1. Collecte des informations</h2>
                <p className="mb-4">
                  Chez Goodleft, nous collectons les informations que vous nous fournissez directement lorsque vous :
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Remplissez notre formulaire de contact</li>
                  <li>Nous contactez par téléphone ou email</li>
                  <li>Utilisez nos services de marketing digital</li>
                  <li>Vous abonnez à notre newsletter</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">2. Utilisation des informations</h2>
                <p className="mb-4">
                  Nous utilisons vos informations pour :
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Répondre à vos demandes et vous fournir nos services</li>
                  <li>Améliorer notre site web et nos services</li>
                  <li>Vous envoyer des communications marketing (avec votre consentement)</li>
                  <li>Respecter nos obligations légales</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">3. Partage des informations</h2>
                <p className="mb-4">
                  Nous ne vendons, n'échangeons ni ne louons vos informations personnelles à des tiers. 
                  Nous pouvons partager vos informations uniquement dans les cas suivants :
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Avec votre consentement explicite</li>
                  <li>Pour respecter la loi ou répondre à des procédures judiciaires</li>
                  <li>Avec nos prestataires de services (sous contrat de confidentialité)</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">4. Sécurité des données</h2>
                <p className="mb-4">
                  Nous mettons en place des mesures de sécurité appropriées pour protéger vos informations 
                  contre tout accès, modification, divulgation ou destruction non autorisés.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">5. Vos droits</h2>
                <p className="mb-4">
                  Conformément au RGPD, vous disposez des droits suivants :
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Droit d'accès à vos données personnelles</li>
                  <li>Droit de rectification de vos données</li>
                  <li>Droit à l'effacement de vos données</li>
                  <li>Droit à la portabilité de vos données</li>
                  <li>Droit d'opposition au traitement</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">6. Cookies</h2>
                <p className="mb-4">
                  Notre site utilise des cookies pour améliorer votre expérience de navigation. 
                  Vous pouvez configurer votre navigateur pour refuser les cookies.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">7. Contact</h2>
                <p className="mb-4">
                  Pour toute question concernant cette politique de confidentialité, contactez-nous :
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

export default Privacy;
