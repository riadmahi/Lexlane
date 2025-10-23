import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Brand from "@/assets/images/brand.svg";

export const metadata = {
  title: "Mentions légales",
  description: "Mentions légales de Lexlane",
};

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Image src={Brand} alt="Lexlane" className="h-24" />
            </Link>
            <Link href="/">
              <Button variant="outline" className="border-white/20 bg-transparent text-white hover:bg-white/10">
                Retour à l'accueil
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="px-6 pt-32 pb-24 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="font-rethink-sans text-4xl font-semibold mb-8 sm:text-5xl">
            Mentions légales
          </h1>
          
          <div className="space-y-8 font-inter text-white/80 leading-relaxed">
            {/* Éditeur */}
            <section>
              <h2 className="font-rethink-sans text-2xl font-semibold text-white mb-4">
                1. Éditeur du site
              </h2>
              <p className="mb-4">
                Le site web <strong className="text-white">Lexlane</strong> est édité par :
              </p>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-2">
                <p><strong className="text-white">Raison sociale :</strong> MAHI RIAD (Entrepreneur individuel)</p>
                <p><strong className="text-white">Nom commercial :</strong> Lexlane</p>
                <p><strong className="text-white">SIREN :</strong> 918 773 755</p>
                <p><strong className="text-white">SIRET :</strong> 918 773 755 00015</p>
                <p><strong className="text-white">Code NAF :</strong> 62.01Z (Programmation informatique)</p>
                <p><strong className="text-white">Numéro TVA :</strong> FR26918773755</p>
                <p><strong className="text-white">Forme juridique :</strong> Entrepreneur individuel - Libérale non réglementée</p>
                <p><strong className="text-white">Adresse :</strong> 74 Allée des Ifs, 73220 Aiton, France</p>
                <p><strong className="text-white">Email :</strong> support@lexlane.fr</p>
              </div>
            </section>

            {/* Directeur de publication */}
            <section>
              <h2 className="font-rethink-sans text-2xl font-semibold text-white mb-4">
                2. Directeur de la publication
              </h2>
              <p>
                Le directeur de la publication du site est <strong className="text-white">Monsieur MAHI Riad</strong>, 
                en sa qualité d'entrepreneur individuel.
              </p>
            </section>

            {/* Hébergement */}
            <section>
              <h2 className="font-rethink-sans text-2xl font-semibold text-white mb-4">
                3. Hébergement
              </h2>
              <p className="mb-4">
                Le site Lexlane est hébergé par :
              </p>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-2">
                <p><strong className="text-white">Hébergeur :</strong> Google Firebase (Google LLC)</p>
                <p><strong className="text-white">Adresse :</strong> 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA</p>
                <p><strong className="text-white">Localisation des données :</strong> Europe (données stockées sur des serveurs européens via Firebase et Cloud Firestore)</p>
                <p><strong className="text-white">Site web :</strong> <a href="https://firebase.google.com" target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-white/80">firebase.google.com</a></p>
              </div>
            </section>

            {/* Propriété intellectuelle */}
            <section>
              <h2 className="font-rethink-sans text-2xl font-semibold text-white mb-4">
                4. Propriété intellectuelle
              </h2>
              <p className="mb-4">
                L'ensemble du contenu de ce site (textes, images, logos, graphismes, vidéos, etc.) est la propriété exclusive 
                de MAHI RIAD ou de ses partenaires, et est protégé par les lois françaises et internationales relatives à la 
                propriété intellectuelle.
              </p>
              <p>
                Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, 
                quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de MAHI RIAD.
              </p>
            </section>

            {/* Données personnelles */}
            <section>
              <h2 className="font-rethink-sans text-2xl font-semibold text-white mb-4">
                5. Données personnelles
              </h2>
              <p>
                Pour toute information concernant la collecte et le traitement de vos données personnelles, 
                veuillez consulter notre{" "}
                <Link href="/legal/privacy-policy" className="text-white underline hover:text-white/80">
                  Politique de confidentialité
                </Link>.
              </p>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="font-rethink-sans text-2xl font-semibold text-white mb-4">
                6. Cookies
              </h2>
              <p>
                Le site Lexlane peut utiliser des cookies pour améliorer l'expérience utilisateur et analyser 
                le trafic du site. Vous pouvez à tout moment désactiver les cookies dans les paramètres de votre navigateur.
              </p>
            </section>

            {/* Loi applicable */}
            <section>
              <h2 className="font-rethink-sans text-2xl font-semibold text-white mb-4">
                7. Loi applicable
              </h2>
              <p>
                Les présentes mentions légales sont régies par le droit français. En cas de litige, et à défaut 
                d'accord amiable, le tribunal compétent sera celui du ressort du siège social de MAHI RIAD.
              </p>
            </section>

            {/* Date de mise à jour */}
            <section className="pt-8 border-t border-white/10">
              <p className="text-sm text-white/60">
                Dernière mise à jour : 23 octobre 2025
              </p>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto max-w-7xl text-center">
          <p className="font-inter text-sm text-white/40">
            © 2025 Lexlane. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}
