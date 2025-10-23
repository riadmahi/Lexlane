import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import BrandWhite from "@/assets/images/brand-white.svg";

export const metadata = {
  title: "Conditions Générales d'Utilisation",
  description: "Conditions Générales d'Utilisation de Lexlane",
};

export default function CGU() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Image src={BrandWhite} alt="Lexlane" className="h-24" />
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
            Conditions Générales d'Utilisation
          </h1>
          
          <div className="space-y-8 font-inter text-white/80 leading-relaxed">
            {/* Préambule */}
            <section>
              <p className="mb-4">
                Les présentes Conditions Générales d'Utilisation (ci-après « CGU ») ont pour objet de définir les 
                modalités et conditions d'utilisation de la plateforme <strong className="text-white">Lexlane</strong>, 
                ainsi que les droits et obligations des utilisateurs.
              </p>
              <p>
                L'accès et l'utilisation de la plateforme Lexlane impliquent l'acceptation sans réserve des présentes CGU.
              </p>
            </section>

            {/* Article 1 */}
            <section>
              <h2 className="font-rethink-sans text-2xl font-semibold text-white mb-4">
                Article 1 - Mentions légales
              </h2>
              <p className="mb-4">
                La plateforme Lexlane est éditée par :
              </p>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-2">
                <p><strong className="text-white">Raison sociale :</strong> MAHI RIAD (Entrepreneur individuel)</p>
                <p><strong className="text-white">SIREN :</strong> 918 773 755</p>
                <p><strong className="text-white">SIRET :</strong> 918 773 755 00015</p>
                <p><strong className="text-white">Adresse :</strong> 74 Allée des Ifs, 73220 Aiton, France</p>
                <p><strong className="text-white">Email :</strong> support@lexlane.fr</p>
                <p><strong className="text-white">Numéro TVA :</strong> FR26918773755</p>
              </div>
            </section>

            {/* Article 2 */}
            <section>
              <h2 className="font-rethink-sans text-2xl font-semibold text-white mb-4">
                Article 2 - Définitions
              </h2>
              <ul className="space-y-3">
                <li>
                  <strong className="text-white">« Plateforme » :</strong> désigne le site web Lexlane et l'ensemble 
                  des services proposés accessibles via le nom de domaine lexlane.fr et ses sous-domaines.
                </li>
                <li>
                  <strong className="text-white">« Utilisateur » :</strong> désigne toute personne physique ou morale 
                  utilisant la Plateforme.
                </li>
                <li>
                  <strong className="text-white">« Client » :</strong> désigne tout Utilisateur ayant souscrit à un 
                  abonnement payant.
                </li>
                <li>
                  <strong className="text-white">« Services » :</strong> désigne l'ensemble des fonctionnalités 
                  proposées par la Plateforme (gestion de dossiers, documents, IA, etc.).
                </li>
                <li>
                  <strong className="text-white">« Contenu » :</strong> désigne l'ensemble des informations, données, 
                  textes, documents uploadés par l'Utilisateur sur la Plateforme.
                </li>
              </ul>
            </section>

            {/* Article 3 */}
            <section>
              <h2 className="font-rethink-sans text-2xl font-semibold text-white mb-4">
                Article 3 - Objet
              </h2>
              <p>
                Les présentes CGU ont pour objet de définir les conditions d'accès et d'utilisation de la Plateforme 
                Lexlane, qui propose une solution de gestion complète pour les cabinets juridiques, incluant la gestion 
                de dossiers, la génération de documents assistée par IA, la gestion du temps et des ressources humaines.
              </p>
            </section>

            {/* Article 4 */}
            <section>
              <h2 className="font-rethink-sans text-2xl font-semibold text-white mb-4">
                Article 4 - Accès à la Plateforme
              </h2>
              <h3 className="font-rethink-sans text-lg font-semibold text-white mb-3 mt-4">
                4.1 Conditions d'accès
              </h3>
              <p className="mb-4">
                L'accès à la Plateforme est réservé aux professionnels du droit (avocats, juristes, notaires) et 
                nécessite la création d'un compte utilisateur.
              </p>
              
              <h3 className="font-rethink-sans text-lg font-semibold text-white mb-3 mt-4">
                4.2 Inscription
              </h3>
              <p className="mb-4">
                Pour créer un compte, l'Utilisateur doit fournir des informations exactes, complètes et à jour. 
                L'Utilisateur s'engage à mettre à jour ces informations en cas de modification.
              </p>
              
              <h3 className="font-rethink-sans text-lg font-semibold text-white mb-3 mt-4">
                4.3 Identifiants
              </h3>
              <p>
                L'Utilisateur est responsable de la confidentialité de ses identifiants de connexion. Toute utilisation 
                de la Plateforme effectuée avec ces identifiants sera réputée avoir été effectuée par l'Utilisateur.
              </p>
            </section>

            {/* Article 5 */}
            <section>
              <h2 className="font-rethink-sans text-2xl font-semibold text-white mb-4">
                Article 5 - Services proposés
              </h2>
              <p className="mb-4">La Plateforme propose notamment les services suivants :</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Gestion centralisée des dossiers clients</li>
                <li>Stockage sécurisé de documents juridiques</li>
                <li>Génération automatique de documents assistée par intelligence artificielle</li>
                <li>Analyse et recherche dans les documents</li>
                <li>Gestion du temps et planning</li>
                <li>Gestion des ressources humaines</li>
                <li>Outils de collaboration et communication</li>
                <li>Tableaux de bord et statistiques</li>
              </ul>
              <p className="mt-4">
                La liste des Services peut évoluer. MAHI RIAD se réserve le droit d'ajouter, modifier ou supprimer 
                des fonctionnalités avec un préavis raisonnable.
              </p>
            </section>

            {/* Article 6 */}
            <section>
              <h2 className="font-rethink-sans text-2xl font-semibold text-white mb-4">
                Article 6 - Obligations de l'Utilisateur
              </h2>
              <p className="mb-4">L'Utilisateur s'engage à :</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Utiliser la Plateforme conformément à sa destination et aux lois en vigueur</li>
                <li>Ne pas porter atteinte à la sécurité de la Plateforme</li>
                <li>Ne pas utiliser de robots, scripts ou moyens automatisés non autorisés</li>
                <li>Respecter les droits de propriété intellectuelle</li>
                <li>Ne pas diffuser de contenu illégal, diffamatoire ou portant atteinte aux droits de tiers</li>
                <li>Respecter la confidentialité des données clients conformément à la déontologie de sa profession</li>
                <li>Maintenir à jour les informations de son compte</li>
              </ul>
            </section>

            {/* Article 7 */}
            <section>
              <h2 className="font-rethink-sans text-2xl font-semibold text-white mb-4">
                Article 7 - Propriété intellectuelle
              </h2>
              <h3 className="font-rethink-sans text-lg font-semibold text-white mb-3 mt-4">
                7.1 Propriété de la Plateforme
              </h3>
              <p className="mb-4">
                L'ensemble des éléments de la Plateforme (design, code source, textes, logos, images, etc.) est la 
                propriété exclusive de MAHI RIAD ou de ses partenaires. Toute reproduction, représentation, modification 
                ou exploitation non autorisée est interdite.
              </p>
              
              <h3 className="font-rethink-sans text-lg font-semibold text-white mb-3 mt-4">
                7.2 Contenu de l'Utilisateur
              </h3>
              <p className="mb-4">
                L'Utilisateur conserve l'entière propriété du Contenu qu'il upload sur la Plateforme. En utilisant 
                la Plateforme, l'Utilisateur accorde à MAHI RIAD une licence limitée, non exclusive et révocable 
                d'utiliser ce Contenu uniquement dans le cadre de la fourniture des Services.
              </p>
              
              <h3 className="font-rethink-sans text-lg font-semibold text-white mb-3 mt-4">
                7.3 Contenu généré par l'IA
              </h3>
              <p>
                Les documents générés par l'intelligence artificielle de la Plateforme sont la propriété de l'Utilisateur. 
                L'Utilisateur reste responsable de la vérification et de la validation de ces documents avant toute utilisation.
              </p>
            </section>

            {/* Article 8 */}
            <section>
              <h2 className="font-rethink-sans text-2xl font-semibold text-white mb-4">
                Article 8 - Protection des données personnelles
              </h2>
              <p>
                Le traitement des données personnelles est régi par notre{" "}
                <Link href="/legal/privacy-policy" className="text-white underline hover:text-white/80">
                  Politique de confidentialité
                </Link>, 
                conformément au RGPD et à la loi Informatique et Libertés. Les données sont hébergées en Europe 
                sur l'infrastructure Google Firebase avec chiffrement de bout en bout.
              </p>
            </section>

            {/* Article 9 */}
            <section>
              <h2 className="font-rethink-sans text-2xl font-semibold text-white mb-4">
                Article 9 - Tarifs et paiement
              </h2>
              <h3 className="font-rethink-sans text-lg font-semibold text-white mb-3 mt-4">
                9.1 Abonnements
              </h3>
              <p className="mb-4">
                L'accès aux Services de la Plateforme est soumis à un abonnement mensuel ou annuel. Les tarifs sont 
                indiqués en euros TTC et sont disponibles sur demande.
              </p>
              
              <h3 className="font-rethink-sans text-lg font-semibold text-white mb-3 mt-4">
                9.2 Modalités de paiement
              </h3>
              <p className="mb-4">
                Le paiement s'effectue par carte bancaire ou virement. La facturation est mensuelle ou annuelle selon 
                la formule choisie, avec prélèvement automatique le jour anniversaire de la souscription.
              </p>
              
              <h3 className="font-rethink-sans text-lg font-semibold text-white mb-3 mt-4">
                9.3 Révision des tarifs
              </h3>
              <p>
                MAHI RIAD se réserve le droit de modifier ses tarifs à tout moment. Les Clients en cours d'abonnement 
                seront informés par email au moins 30 jours avant l'application des nouveaux tarifs.
              </p>
            </section>

            {/* Article 10 */}
            <section>
              <h2 className="font-rethink-sans text-2xl font-semibold text-white mb-4">
                Article 10 - Durée et résiliation
              </h2>
              <h3 className="font-rethink-sans text-lg font-semibold text-white mb-3 mt-4">
                10.1 Durée
              </h3>
              <p className="mb-4">
                L'abonnement est souscrit pour une durée d'un mois ou d'un an selon la formule choisie, renouvelable 
                automatiquement par tacite reconduction.
              </p>
              
              <h3 className="font-rethink-sans text-lg font-semibold text-white mb-3 mt-4">
                10.2 Résiliation par le Client
              </h3>
              <p className="mb-4">
                Le Client peut résilier son abonnement à tout moment depuis son espace personnel, avec effet à la fin 
                de la période d'abonnement en cours. Aucun remboursement au prorata ne sera effectué.
              </p>
              
              <h3 className="font-rethink-sans text-lg font-semibold text-white mb-3 mt-4">
                10.3 Résiliation par Lexlane
              </h3>
              <p>
                MAHI RIAD se réserve le droit de suspendre ou résilier l'accès d'un Utilisateur en cas de manquement 
                grave aux présentes CGU, notamment en cas d'utilisation frauduleuse ou d'impayé, après mise en demeure 
                restée sans effet pendant 15 jours.
              </p>
            </section>

            {/* Article 11 */}
            <section>
              <h2 className="font-rethink-sans text-2xl font-semibold text-white mb-4">
                Article 11 - Garanties et responsabilité
              </h2>
              <h3 className="font-rethink-sans text-lg font-semibold text-white mb-3 mt-4">
                11.1 Disponibilité
              </h3>
              <p className="mb-4">
                MAHI RIAD s'efforce d'assurer une disponibilité de la Plateforme 24h/24 et 7j/7. Toutefois, l'accès 
                peut être temporairement suspendu pour maintenance, sans engagement de disponibilité contractuel.
              </p>
              
              <h3 className="font-rethink-sans text-lg font-semibold text-white mb-3 mt-4">
                11.2 Limitation de responsabilité
              </h3>
              <p className="mb-4">
                MAHI RIAD ne saurait être tenu responsable :
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Des interruptions ou dysfonctionnements techniques indépendants de sa volonté</li>
                <li>De la perte de données en cas de non-respect des recommandations de sauvegarde</li>
                <li>De l'utilisation inappropriée ou illégale de la Plateforme par l'Utilisateur</li>
                <li>Du contenu généré par l'IA sans validation par un professionnel</li>
                <li>Des dommages indirects (perte de chiffre d'affaires, de clientèle, de données, etc.)</li>
              </ul>
              
              <h3 className="font-rethink-sans text-lg font-semibold text-white mb-3 mt-4">
                11.3 Intelligence Artificielle
              </h3>
              <p>
                L'IA est un outil d'assistance. L'Utilisateur reste seul responsable de la vérification, validation 
                et utilisation des documents générés. MAHI RIAD ne garantit pas l'exactitude, l'exhaustivité ou 
                l'adéquation des contenus générés par l'IA.
              </p>
            </section>

            {/* Article 12 */}
            <section>
              <h2 className="font-rethink-sans text-2xl font-semibold text-white mb-4">
                Article 12 - Force majeure
              </h2>
              <p>
                MAHI RIAD ne pourra être tenu responsable de l'inexécution de ses obligations en cas de force majeure, 
                telle que définie par la jurisprudence française, notamment en cas de catastrophe naturelle, guerre, 
                émeute, insurrection, incendie, grève, panne technique majeure, défaillance des réseaux de télécommunication.
              </p>
            </section>

            {/* Article 13 */}
            <section>
              <h2 className="font-rethink-sans text-2xl font-semibold text-white mb-4">
                Article 13 - Modifications des CGU
              </h2>
              <p>
                MAHI RIAD se réserve le droit de modifier les présentes CGU à tout moment. Les Utilisateurs seront 
                informés par email de toute modification substantielle. La poursuite de l'utilisation de la Plateforme 
                après notification vaut acceptation des nouvelles CGU.
              </p>
            </section>

            {/* Article 14 */}
            <section>
              <h2 className="font-rethink-sans text-2xl font-semibold text-white mb-4">
                Article 14 - Droit applicable et juridiction
              </h2>
              <h3 className="font-rethink-sans text-lg font-semibold text-white mb-3 mt-4">
                14.1 Droit applicable
              </h3>
              <p className="mb-4">
                Les présentes CGU sont régies par le droit français.
              </p>
              
              <h3 className="font-rethink-sans text-lg font-semibold text-white mb-3 mt-4">
                14.2 Règlement des litiges
              </h3>
              <p className="mb-4">
                En cas de litige, les parties s'efforceront de trouver une solution amiable. À défaut, le litige sera 
                porté devant les tribunaux compétents du ressort du siège social de MAHI RIAD.
              </p>
              
              <h3 className="font-rethink-sans text-lg font-semibold text-white mb-3 mt-4">
                14.3 Médiation
              </h3>
              <p>
                Conformément à l'article L.612-1 du Code de la consommation, l'Utilisateur consommateur a le droit de 
                recourir gratuitement à un médiateur de la consommation en cas de litige.
              </p>
            </section>

            {/* Article 15 */}
            <section>
              <h2 className="font-rethink-sans text-2xl font-semibold text-white mb-4">
                Article 15 - Contact
              </h2>
              <p className="mb-4">
                Pour toute question relative aux présentes CGU :
              </p>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-2">
                <p><strong className="text-white">Email :</strong> support@lexlane.fr</p>
                <p><strong className="text-white">Courrier :</strong> MAHI RIAD - 74 Allée des Ifs, 73220 Aiton, France</p>
              </div>
            </section>

            {/* Date de mise à jour */}
            <section className="pt-8 border-t border-white/10">
              <p className="text-sm text-white/60">
                Date d'entrée en vigueur : 23 octobre 2025
              </p>
              <p className="text-sm text-white/60 mt-2">
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
