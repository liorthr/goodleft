
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-32 pb-20">
        <div className="container max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Politique de confidentialité</h1>
          
          <div className="prose prose-lg max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Collecte des informations</h2>
              <p className="text-muted-foreground leading-relaxed">
                Goodleft collecte des informations lorsque vous remplissez un formulaire de contact, vous abonnez à notre newsletter, ou interagissez avec notre site web. Les informations collectées peuvent inclure votre nom, adresse e-mail, numéro de téléphone et autres détails pertinents pour nos services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Utilisation des informations</h2>
              <p className="text-muted-foreground leading-relaxed">
                Les informations que nous collectons peuvent être utilisées pour :
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Personnaliser votre expérience et répondre à vos besoins individuels</li>
                <li>Fournir un contenu publicitaire personnalisé</li>
                <li>Améliorer notre site web</li>
                <li>Améliorer le service client et vos besoins de prise en charge</li>
                <li>Vous contacter par e-mail ou téléphone</li>
                <li>Administrer un concours, une promotion, ou une enquête</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Protection des informations</h2>
              <p className="text-muted-foreground leading-relaxed">
                Nous mettons en œuvre une variété de mesures de sécurité pour préserver la sécurité de vos informations personnelles. Nous utilisons un cryptage à la pointe de la technologie pour protéger les informations sensibles transmises en ligne.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Notre site peut utiliser des cookies pour améliorer l'expérience utilisateur. Les cookies sont de petits fichiers qu'un site ou son prestataire de services transfère sur le disque dur de votre ordinateur par l'intermédiaire de votre navigateur Web qui permet au site ou au prestataire de services de reconnaître votre navigateur et de capturer et mémoriser certaines informations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Divulgation à des tiers</h2>
              <p className="text-muted-foreground leading-relaxed">
                Nous ne vendons, n'échangeons et ne transférons pas vos informations personnelles identifiables à des tiers. Cela ne comprend pas les tierce parties de confiance qui nous aident à exploiter notre site web ou à mener nos affaires, tant que ces parties conviennent de garder ces informations confidentielles.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Consentement</h2>
              <p className="text-muted-foreground leading-relaxed">
                En utilisant notre site, vous consentez à notre politique de confidentialité.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                Si vous avez des questions concernant cette politique de confidentialité, vous pouvez nous contacter à :
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mt-4">
                <p className="font-medium">Goodleft</p>
                <p>60 rue François 1er, 75008 Paris</p>
                <p>Email : contact@goodleft.com</p>
                <p>Téléphone : +33 7 82 97 94 79</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Privacy;
