import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import BrandWhite from "@/assets/images/brand-white.svg";

export const metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité de Lexlane",
};

export default function PolitiqueConfidentialite() {
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
            Politique de confidentialité
          </h1>
          
          <div className="space-y-8 font-inter text-white/80 leading-relaxed">
            {/* Introduction */}
            <section>
              <p className="mb-4">
                La présente politique de confidentialité définit et vous informe de la manière dont 
                <strong className="text-white"> Lexlane</strong>, édité par MAHI RIAD, utilise et protège les 
                informations que vous nous transmettez lorsque vous utilisez notre site web et nos services.
              </p>
              <p>
                Nous nous engageons à respecter la confidentialité de vos données personnelles conformément au 
                Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.
              </p>
            </section>

            {/* Responsable du traitement */}
            <section>
              <h2 className="font-rethink-sans text-2xl font-semibold text-white mb-4">
                1. Responsable du traitement des données
              </h2>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-2">
                <p><strong className="text-white">Responsable :</strong> MAHI RIAD</p>
                <p><strong className="text-white">SIREN :</strong> 918 773 755</p>
                <p><strong className="text-white">Adresse :</strong> 74 Allée des Ifs, 73220 Aiton, France</p>
                <p><strong className="text-white">Email :</strong> support@lexlane.fr</p>
              </div>
            </section>

            {/* Données collectées */}
            <section>
              <h2 className="font-rethink-sans text-2xl font-semibold text-white mb-4">
                2. Données personnelles collectées
              </h2>
              <p className="mb-4">
                Dans le cadre de l'utilisation de nos services, nous sommes susceptibles de collecter les données suivantes :
              </p>
              
              <div className="space-y-4">
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h3 className="font-rethink-sans text-lg font-semibold text-white mb-3">
                    Données d'identification
                  </h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Nom et prénom</li>
                    <li>Adresse email</li>
                    <li>Numéro de téléphone</li>
                    <li>Nom du cabinet juridique</li>
                    <li>Fonction au sein du cabinet</li>
                  </ul>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h3 className="font-rethink-sans text-lg font-semibold text-white mb-3">
                    Données de connexion
                  </h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Adresse IP</li>
                    <li>Logs de connexion</li>
                    <li>Données de navigation (cookies)</li>
                    <li>Type de navigateur et appareil utilisé</li>
                  </ul>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h3 className="font-rethink-sans text-lg font-semibold text-white mb-3">
                    Données métier
                  </h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Dossiers clients</li>
                    <li>Documents juridiques</li>
                    <li>Correspondances et communications</li>
                    <li>Données de facturation</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Finalités */}
            <section>
              <h2 className="font-rethink-sans text-2xl font-semibold text-white mb-4">
                3. Finalités du traitement
              </h2>
              <p className="mb-4">Vos données personnelles sont collectées et traitées pour les finalités suivantes :</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Création et gestion de votre compte utilisateur</li>
                <li>Fourniture et amélioration de nos services</li>
                <li>Gestion de la relation client et support technique</li>
                <li>Envoi de communications relatives au service</li>
                <li>Analyse et statistiques d'utilisation</li>
                <li>Respect de nos obligations légales et réglementaires</li>
                <li>Prévention de la fraude et sécurisation de la plateforme</li>
              </ul>
            </section>

            {/* Base légale */}
            <section>
              <h2 className="font-rethink-sans text-2xl font-semibold text-white mb-4">
                4. Base légale du traitement
              </h2>
              <p className="mb-4">Le traitement de vos données repose sur :</p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong className="text-white">L'exécution du contrat :</strong> pour la fourniture de nos services</li>
                <li><strong className="text-white">Votre consentement :</strong> pour les communications marketing (révocable à tout moment)</li>
                <li><strong className="text-white">Notre intérêt légitime :</strong> pour améliorer nos services et assurer la sécurité</li>
                <li><strong className="text-white">Obligations légales :</strong> pour respecter les obligations comptables et fiscales</li>
              </ul>
            </section>

            {/* Hébergement */}
            <section>
              <h2 className="font-rethink-sans text-2xl font-semibold text-white mb-4">
                5. Hébergement et localisation des données
              </h2>
              <p className="mb-4">
                Vos données sont hébergées sur l'infrastructure <strong className="text-white">Google Firebase</strong> et 
                <strong className="text-white"> Cloud Firestore</strong>.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-2">
                <p><strong className="text-white">Hébergeur :</strong> Google Cloud Platform (Google LLC)</p>
                <p><strong className="text-white">Localisation :</strong> Serveurs situés en Europe (conformité RGPD)</p>
                <p><strong className="text-white">Certifications :</strong> ISO 27001, ISO 27017, ISO 27018, SOC 2/3</p>
                <p><strong className="text-white">Chiffrement :</strong> AES-256 au repos et en transit (TLS 1.3)</p>
              </div>
              <p className="mt-4">
                Google est conforme au RGPD et a signé les clauses contractuelles types de l'Union européenne. 
                Vos données ne sont jamais transférées hors de l'Union européenne sans garanties appropriées.
              </p>
            </section>

            {/* Destinataires */}
            <section>
              <h2 className="font-rethink-sans text-2xl font-semibold text-white mb-4">
                6. Destinataires des données
              </h2>
              <p className="mb-4">Vos données peuvent être transmises aux destinataires suivants :</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Personnel autorisé de MAHI RIAD</li>
                <li>Prestataires techniques (hébergement, maintenance)</li>
                <li>Partenaires de paiement (pour la facturation)</li>
                <li>Autorités compétentes (sur réquisition judiciaire uniquement)</li>
              </ul>
              <p className="mt-4">
                Tous nos prestataires sont soigneusement sélectionnés et s'engagent contractuellement à respecter 
                la confidentialité et la sécurité de vos données.
              </p>
            </section>

            {/* Durée de conservation */}
            <section>
              <h2 className="font-rethink-sans text-2xl font-semibold text-white mb-4">
                7. Durée de conservation
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li><strong className="text-white">Données de compte :</strong> Pendant toute la durée du contrat + 3 ans après la fin</li>
                <li><strong className="text-white">Données de facturation :</strong> 10 ans (obligation légale comptable)</li>
                <li><strong className="text-white">Données de connexion :</strong> 12 mois maximum</li>
                <li><strong className="text-white">Cookies :</strong> 13 mois maximum</li>
              </ul>
            </section>

            {/* Droits */}
            <section>
              <h2 className="font-rethink-sans text-2xl font-semibold text-white mb-4">
                8. Vos droits
              </h2>
              <p className="mb-4">
                Conformément au RGPD, vous disposez des droits suivants sur vos données personnelles :
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong className="text-white">Droit d'accès :</strong> obtenir une copie de vos données</li>
                <li><strong className="text-white">Droit de rectification :</strong> corriger vos données inexactes</li>
                <li><strong className="text-white">Droit à l'effacement :</strong> supprimer vos données (sous conditions)</li>
                <li><strong className="text-white">Droit à la limitation :</strong> limiter le traitement de vos données</li>
                <li><strong className="text-white">Droit à la portabilité :</strong> récupérer vos données dans un format structuré</li>
                <li><strong className="text-white">Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
                <li><strong className="text-white">Droit de retirer votre consentement</strong> à tout moment</li>
              </ul>
              <p className="mt-4">
                Pour exercer vos droits, contactez-nous à : <strong className="text-white">support@lexlane.fr</strong>
              </p>
              <p className="mt-2">
                Vous disposez également du droit d'introduire une réclamation auprès de la CNIL : 
                <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-white/80 ml-1">
                  www.cnil.fr
                </a>
              </p>
            </section>

            {/* Sécurité */}
            <section>
              <h2 className="font-rethink-sans text-2xl font-semibold text-white mb-4">
                9. Sécurité des données
              </h2>
              <p className="mb-4">
                Nous mettons en œuvre toutes les mesures techniques et organisationnelles appropriées pour protéger 
                vos données contre tout accès non autorisé, modification, divulgation ou destruction :
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Chiffrement de bout en bout (AES-256)</li>
                <li>Authentification forte et double facteur</li>
                <li>Pare-feu et systèmes de détection d'intrusion</li>
                <li>Sauvegardes quotidiennes automatiques</li>
                <li>Accès restreint aux données (principe du moindre privilège)</li>
                <li>Audits de sécurité réguliers</li>
              </ul>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="font-rethink-sans text-2xl font-semibold text-white mb-4">
                10. Cookies
              </h2>
              <p className="mb-4">
                Notre site utilise des cookies pour améliorer votre expérience et analyser l'utilisation du site. 
                Les types de cookies utilisés sont :
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong className="text-white">Cookies essentiels :</strong> nécessaires au fonctionnement du site</li>
                <li><strong className="text-white">Cookies de performance :</strong> pour analyser l'utilisation du site (avec consentement)</li>
                <li><strong className="text-white">Cookies fonctionnels :</strong> pour mémoriser vos préférences</li>
              </ul>
              <p className="mt-4">
                Vous pouvez gérer vos préférences de cookies via les paramètres de votre navigateur ou notre bandeau de consentement.
              </p>
            </section>

            {/* Modifications */}
            <section>
              <h2 className="font-rethink-sans text-2xl font-semibold text-white mb-4">
                11. Modifications de la politique
              </h2>
              <p>
                Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. 
                Toute modification sera publiée sur cette page avec une nouvelle date de mise à jour. 
                Nous vous encourageons à consulter régulièrement cette page.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="font-rethink-sans text-2xl font-semibold text-white mb-4">
                12. Contact
              </h2>
              <p className="mb-4">
                Pour toute question concernant cette politique de confidentialité ou l'exercice de vos droits :
              </p>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-2">
                <p><strong className="text-white">Email :</strong> support@lexlane.fr</p>
                <p><strong className="text-white">Courrier :</strong> MAHI RIAD - 74 Allée des Ifs, 73220 Aiton, France</p>
              </div>
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
