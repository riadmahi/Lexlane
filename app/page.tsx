import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/layout/navigation";
import BrandWhite from "@/assets/images/brand-white.svg";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative px-6 pt-32 pb-16 lg:px-8 lg:pt-40">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-rethink-sans text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Votre cabinet, en plus rapide.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl font-inter text-base text-white/70 sm:text-lg">
            Une solution complète, boosté par l'IA, sécurisée et conçue pour les professionnels du droit.
          </p>
          <div className="mt-10">
            <Button size="lg" className="bg-white text-black hover:bg-white/90">
              Demander une démo
            </Button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mx-auto mt-16 max-w-6xl px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-lg border border-white/10 bg-white/5 shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1469"
              alt="Bureau moderne"
              width={1200}
              height={675}
              className="w-full"
              priority
            />
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="font-rethink-sans text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              La solution qui simplifie et accélère
              <br />
              votre pratique juridique.
            </h2>
          </div>

          {/* Content Grid */}
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center mb-24">
            {/* Left: Illustration placeholder */}
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm"></div>
            </div>

            {/* Right: Value Proposition */}
            <div className="space-y-8">
              <p className="font-inter text-xl leading-relaxed text-white/80">
                Lexlane repose sur un principe simple, centraliser tout ce dont un avocat a besoin en{" "}
                <span className="font-semibold text-white">un seul espace fiable et intelligent</span>, pour{" "}
                <span className="font-semibold text-white">réduire le temps perdu</span> sur les tâches répétitives et{" "}
                <span className="font-semibold text-white">maximiser la valeur de chaque minute de travail</span>.
              </p>
            </div>
          </div>

          {/* Detailed Benefits */}
          <div className="space-y-48">
            {/* Benefit 1 - AI Powered */}
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 mb-6">
                  <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="font-inter text-sm font-medium">Propulsé par l'IA</span>
                </div>
                <h3 className="font-rethink-sans text-3xl font-semibold mb-4">
                  Automatisez les tâches répétitives
                </h3>
                <p className="font-inter text-lg leading-relaxed text-white/70 mb-6">
                  Notre assistant IA analyse vos documents, extrait les informations clés et génère automatiquement vos actes juridiques. 
                  Gagnez jusqu'à <span className="text-white font-semibold">10 heures par semaine</span> sur les tâches administratives.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="h-6 w-6 text-white/80 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-inter text-white/70">Analyse automatique de contrats et documents</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="h-6 w-6 text-white/80 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-inter text-white/70">Génération d'actes juridiques personnalisés</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="h-6 w-6 text-white/80 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-inter text-white/70">Recherche intelligente dans votre base documentaire</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 lg:order-2">
                <div className="aspect-video rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/10 backdrop-blur-sm"></div>
              </div>
            </div>

            {/* Benefit 2 - Centralized */}
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <div className="aspect-video rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-white/10 backdrop-blur-sm"></div>
              </div>
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 mb-6">
                  <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                  </svg>
                  <span className="font-inter text-sm font-medium">Tout centralisé</span>
                </div>
                <h3 className="font-rethink-sans text-3xl font-semibold mb-4">
                  Un seul espace pour tout gérer
                </h3>
                <p className="font-inter text-lg leading-relaxed text-white/70 mb-6">
                  Fini les outils dispersés et les données éparpillées. Lexlane centralise vos dossiers, documents, clients et communications dans une seule plateforme intuitive et sécurisée.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="h-6 w-6 text-white/80 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-inter text-white/70">Gestion centralisée de tous vos dossiers clients</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="h-6 w-6 text-white/80 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-inter text-white/70">Stockage sécurisé de documents avec versioning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="h-6 w-6 text-white/80 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-inter text-white/70">Facturation et comptabilité au même endroit</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Benefit 3 - Secure */}
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 mb-6">
                  <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span className="font-inter text-sm font-medium">Sécurité maximale</span>
                </div>
                <h3 className="font-rethink-sans text-3xl font-semibold mb-4">
                  Vos données protégées en toutes circonstances
                </h3>
                <p className="font-inter text-lg leading-relaxed text-white/70 mb-6">
                  La confidentialité de vos données clients est notre priorité absolue. Lexlane est conforme aux plus hauts standards de sécurité et aux réglementations françaises et européennes.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="h-6 w-6 text-white/80 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-inter text-white/70">Hébergement en France (HDS certifié)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="h-6 w-6 text-white/80 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-inter text-white/70">Chiffrement de bout en bout (AES-256)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="h-6 w-6 text-white/80 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-inter text-white/70">Conformité RGPD et ISO 27001</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 lg:order-2">
                <div className="aspect-video rounded-2xl bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-white/10 backdrop-blur-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Feature 1 */}
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04]">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-rethink-sans text-xl font-semibold mb-3">Sécurité des données</h3>
              <p className="font-inter text-sm leading-relaxed text-white/60">
                Vos données sont hébergées et protégées selon les plus hauts standards de sécurité (ISO 27001).
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04]">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-rethink-sans text-xl font-semibold mb-3">Gestion de dossiers</h3>
              <p className="font-inter text-sm leading-relaxed text-white/60">
                Centralisez et organisez vos dossiers en un seul endroit pour une gestion claire et efficace.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04]">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-rethink-sans text-xl font-semibold mb-3">Outil RH</h3>
              <p className="font-inter text-sm leading-relaxed text-white/60">
                Simplifiez la gestion de votre équipe et des ressources humaines en toute conformité.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04]">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-rethink-sans text-xl font-semibold mb-3">Gestion du temps</h3>
              <p className="font-inter text-sm leading-relaxed text-white/60">
                Planifiez, suivez et optimisez votre temps pour vous concentrer sur l'essentiel : vos clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-rethink-sans text-center text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl mb-16">
            Les questions fréquentes
          </h2>
          
          <div className="space-y-4">
            {/* FAQ Item 1 */}
            <details className="group rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm transition-all duration-300 hover:border-white/20">
              <summary className="flex w-full cursor-pointer items-center justify-between p-6 text-left">
                <h3 className="font-rethink-sans text-lg font-semibold">
                  Comment Lexlane garantit-il la sécurité de mes données ?
                </h3>
                <svg className="h-5 w-5 text-white/60 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 pt-2">
                <p className="font-inter text-white/70 leading-relaxed">
                  Lexlane prend la sécurité très au sérieux. Vos données sont hébergées en France sur des serveurs certifiés HDS (Hébergeur de Données de Santé) et bénéficient d'un chiffrement de bout en bout avec AES-256. Nous sommes conformes aux normes RGPD et ISO 27001. Des sauvegardes quotidiennes automatiques garantissent la disponibilité de vos données en toutes circonstances.
                </p>
              </div>
            </details>

            {/* FAQ Item 2 */}
            <details className="group rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm transition-all duration-300 hover:border-white/20">
              <summary className="flex w-full cursor-pointer items-center justify-between p-6 text-left">
                <h3 className="font-rethink-sans text-lg font-semibold">
                  Puis-je intégrer Lexlane avec mes outils existants ?
                </h3>
                <svg className="h-5 w-5 text-white/60 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 pt-2">
                <p className="font-inter text-white/70 leading-relaxed">
                  Oui, absolument ! Lexlane s'intègre facilement avec les principaux outils que vous utilisez déjà : Microsoft 365, Google Workspace, systèmes de facturation, et plateformes de communication. Notre API REST permet également des intégrations personnalisées. Notre équipe vous accompagne dans la mise en place de ces connexions pour une transition en douceur.
                </p>
              </div>
            </details>

            {/* FAQ Item 3 */}
            <details className="group rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm transition-all duration-300 hover:border-white/20">
              <summary className="flex w-full cursor-pointer items-center justify-between p-6 text-left">
                <h3 className="font-rethink-sans text-lg font-semibold">
                  Combien de temps faut-il pour déployer Lexlane ?
                </h3>
                <svg className="h-5 w-5 text-white/60 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 pt-2">
                <p className="font-inter text-white/70 leading-relaxed">
                  Le déploiement de Lexlane est rapide et simple. Pour un cabinet de taille moyenne, comptez entre 2 et 4 semaines. Cela inclut la configuration initiale, la migration de vos données existantes, la formation de votre équipe et la personnalisation selon vos besoins spécifiques. Vous pouvez commencer à utiliser certaines fonctionnalités dès la première semaine.
                </p>
              </div>
            </details>

            {/* FAQ Item 4 */}
            <details className="group rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm transition-all duration-300 hover:border-white/20">
              <summary className="flex w-full cursor-pointer items-center justify-between p-6 text-left">
                <h3 className="font-rethink-sans text-lg font-semibold">
                  Quel support proposez-vous ?
                </h3>
                <svg className="h-5 w-5 text-white/60 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 pt-2">
                <p className="font-inter text-white/70 leading-relaxed">
                  Notre équipe support est disponible du lundi au vendredi de 9h à 19h par email (support@lexlane.fr), chat en direct et téléphone. Nous proposons également un centre d'aide en ligne avec guides, tutoriels vidéo et FAQ détaillées. Pour nos clients Premium, un gestionnaire de compte dédié assure un suivi personnalisé et des formations régulières.
                </p>
              </div>
            </details>

            {/* FAQ Item 5 */}
            <details className="group rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm transition-all duration-300 hover:border-white/20">
              <summary className="flex w-full cursor-pointer items-center justify-between p-6 text-left">
                <h3 className="font-rethink-sans text-lg font-semibold">
                  Quels sont les tarifs de Lexlane ?
                </h3>
                <svg className="h-5 w-5 text-white/60 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 pt-2">
                <p className="font-inter text-white/70 leading-relaxed">
                  Nos tarifs sont adaptés à la taille de votre cabinet et à vos besoins. Nous proposons plusieurs formules par utilisateur/mois, sans engagement de durée. Toutes nos offres incluent les mises à jour, le stockage sécurisé et le support client. Contactez-nous pour obtenir un devis personnalisé et découvrir quelle formule correspond le mieux à votre cabinet.
                </p>
              </div>
            </details>

            {/* FAQ Item 6 */}
            <details className="group rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm transition-all duration-300 hover:border-white/20">
              <summary className="flex w-full cursor-pointer items-center justify-between p-6 text-left">
                <h3 className="font-rethink-sans text-lg font-semibold">
                  L'IA de Lexlane peut-elle vraiment remplacer un avocat ?
                </h3>
                <svg className="h-5 w-5 text-white/60 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 pt-2">
                <p className="font-inter text-white/70 leading-relaxed">
                  Non, et ce n'est pas notre objectif. L'IA de Lexlane est conçue comme un assistant qui automatise les tâches répétitives et chronophages (analyse de documents, rédaction d'actes standards, recherche juridique). Cela vous libère du temps pour vous concentrer sur votre véritable valeur ajoutée : le conseil stratégique, la plaidoirie et la relation client. L'IA vous assiste, vous ne la remplacez pas.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] p-12 backdrop-blur-sm lg:p-16">
            <div className="relative z-10 text-center">
              <h2 className="font-rethink-sans text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl mb-6">
                Prêt à transformer votre pratique juridique ?
              </h2>
              <p className="font-inter text-lg text-white/70 mb-8 max-w-2xl mx-auto">
                Rejoignez les cabinets qui ont déjà fait le choix de l'efficacité avec Lexlane.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-black hover:bg-white/90 font-rethink-sans">
                  Demander une démo
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 bg-transparent text-white hover:bg-white/10 font-rethink-sans hover:text-white">
                  Contactez-nous
                </Button>
              </div>
            </div>
            {/* Decorative gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-4">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src={BrandWhite}
                  alt="Lexlane"
                  className="h-8"
                />
              </div>
              <p className="font-inter text-sm text-white/60 leading-relaxed">
                La solution complète pour moderniser votre cabinet juridique.
              </p>
            </div>

            {/* Product Column */}
            <div>
              <h3 className="font-rethink-sans text-sm font-semibold mb-4">Produit</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#solution" className="font-inter text-sm text-white/60 transition-colors hover:text-white">
                    La solution
                  </a>
                </li>
                <li>
                  <a href="#features" className="font-inter text-sm text-white/60 transition-colors hover:text-white">
                    Fonctionnalités
                  </a>
                </li>
                <li>
                  <a href="#" className="font-inter text-sm text-white/60 transition-colors hover:text-white">
                    Tarifs
                  </a>
                </li>
                <li>
                  <a href="#faq" className="font-inter text-sm text-white/60 transition-colors hover:text-white">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h3 className="font-rethink-sans text-sm font-semibold mb-4">Entreprise</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#about" className="font-inter text-sm text-white/60 transition-colors hover:text-white">
                    À propos
                  </a>
                </li>
                <li>
                  <a href="#" className="font-inter text-sm text-white/60 transition-colors hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="font-inter text-sm text-white/60 transition-colors hover:text-white">
                    Carrières
                  </a>
                </li>
                <li>
                  <a href="#" className="font-inter text-sm text-white/60 transition-colors hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h3 className="font-rethink-sans text-sm font-semibold mb-4">Contact</h3>
              <ul className="space-y-3 mb-6">
                <li>
                  <a 
                    href="mailto:support@lexlane.fr" 
                    className="font-inter text-sm text-white/60 transition-colors hover:text-white flex items-center gap-2"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    support@lexlane.fr
                  </a>
                </li>
              </ul>
              
              {/* Social Links */}
              <div className="flex items-center gap-4">
                <a 
                  href="https://www.linkedin.com/company/lexlane"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.02] text-white/60 transition-all hover:border-white/20 hover:bg-white/[0.04] hover:text-white"
                  aria-label="LinkedIn"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                
                <a 
                  href="https://instagram.com/lexlane.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.02] text-white/60 transition-all hover:border-white/20 hover:bg-white/[0.04] hover:text-white"
                  aria-label="Instagram"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <p className="font-inter text-sm text-white/40">
                © 2025 Lexlane. Tous droits réservés.
              </p>
              <div className="flex gap-6">
                <a href="/legal/legal-notice" className="font-inter text-sm text-white/40 transition-colors hover:text-white/60">
                  Mentions légales
                </a>
                <a href="/legal/privacy-policy" className="font-inter text-sm text-white/40 transition-colors hover:text-white/60">
                  Politique de confidentialité
                </a>
                <a href="/legal/terms-of-service" className="font-inter text-sm text-white/40 transition-colors hover:text-white/60">
                  CGU
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
