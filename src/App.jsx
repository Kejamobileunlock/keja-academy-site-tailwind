import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

export default function App() {
  const whatsappLink = 'https://wa.me/22943050611'

  const features = [
    "Formation 100% pratique",
    "Support personnalisé sur WhatsApp",
    "Accès à vie au contenu",
    "Création de A à Z",
    "Aucune compétence requise",
    "Projets concrets dès le premier jour",
  ]

  const examples = [
    { title: "Site de Paris Sportif", desc: "Plateforme intuitive pour gérer les mises, dépôts, retraits et résultats en temps réel." },
    { title: "Site de Blog", desc: "Blog élégant avec gestion des catégories, articles et interface admin simple." },
    { title: "Site de Déblocage Téléphone", desc: "Service en ligne pour commander le déblocage d'appareils avec suivi automatisé." },
    { title: "Site E‑commerce", desc: "Boutique professionnelle avec panier, gestion de stock et espace admin complet." },
    { title: "Site d'Investissement", desc: "Plateforme sécurisée pour investir et gérer les utilisateurs facilement." },
    { title: "Site de Portefeuille", desc: "Portefeuille numérique avec suivi des transactions, dépôts et retraits." },
  ]

  const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.12 } } }
  const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 bg-black/50 backdrop-blur border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-green-500" />
            <span className="text-sm md:text-base font-semibold tracking-tight">KEJA Academy</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-xs uppercase text-gray-300">
            <a href="#programme" className="hover:text-white">Programme</a>
            <a href="#exemples" className="hover:text-white">Exemples</a>
            <a href="#inscription" className="hover:text-white">Inscription</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
          </nav>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm bg-green-500 hover:bg-green-600 px-3 py-2 rounded-full">
            Commencer
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-600/10 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-4"
          >
            Créez des Web Apps professionnelles <span className="text-green-400">sans coder</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mx-auto max-w-2xl text-sm md:text-base text-gray-300"
          >
            Apprenez à concevoir, lancer et administrer des sites modernes avec base de données automatique et interface
            d’administration complète — directement depuis votre téléphone.
          </motion.p>
          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block mt-8 bg-green-500 hover:bg-green-600 text-white text-sm md:text-base px-6 py-3 rounded-full shadow-lg"
          >
            Commencer maintenant
          </motion.a>
        </div>
      </section>

      {/* BENEFITS */}
      <section id="programme" className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-14">
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-green-400 mb-8">Pourquoi choisir KEJA Academy ?</h2>
          <motion.ul variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f, i) => (
              <motion.li key={i} variants={item} className="bg-gray-900/60 border border-gray-800 rounded-2xl p-5 text-gray-200 text-sm">
                {f}
              </motion.li>
            ))}
          </motion.ul>

          {/* Programme détaillé */}
          <div className="mt-12 grid md:grid-cols-3 gap-6 text-sm">
            {[
              { t: "Module 1 — Bases", d: "Découvrir les outils no‑code, structure d’un projet, bonnes pratiques UX/UI." },
              { t: "Module 2 — Base de données auto", d: "Modèles de données, workflows, formulaires, permissions." },
              { t: "Module 3 — Interface Admin", d: "Publier des contenus, valider dépôts/retraits, gérer les utilisateurs." },
              { t: "Module 4 — Paiements", d: "Intégrations, sécurité, suivi des transactions et reçus." },
              { t: "Module 5 — Déploiement", d: "Nom de domaine, hébergement, SEO et performance." },
              { t: "Module 6 — Projets réels", d: "Construire et lancer votre propre application de A à Z." },
            ].map((m, i) => (
              <div key={i} className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6">
                <h3 className="text-base font-semibold text-green-400 mb-2">{m.t}</h3>
                <p className="text-gray-300">{m.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXAMPLES */}
      <section id="exemples" className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-14">
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-green-400 mb-10">Exemples de sites créés par nos apprenants</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {examples.map((ex, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-900/60 p-6 rounded-2xl border border-gray-800 shadow-md hover:shadow-green-500/20"
              >
                <h3 className="text-lg font-semibold mb-2 text-green-400">{ex.title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">{ex.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="inscription" className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-14 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Prêt à lancer votre projet ?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mt-3 text-sm md:text-base">
            Rejoignez KEJA Academy et obtenez un accompagnement pas à pas pour créer votre application professionnelle.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 bg-green-500 hover:bg-green-600 text-white text-sm md:text-base px-6 py-3 rounded-full shadow-lg"
          >
            Commencer maintenant
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-14">
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-green-400 mb-8">Questions fréquentes</h2>
          <div className="max-w-3xl mx-auto divide-y divide-gray-800 rounded-2xl border border-gray-800 overflow-hidden">
            {[
              { q: "Faut‑il savoir coder ?", a: "Non. La formation est conçue pour les débutants. Aucun prérequis technique." },
              { q: "Ai‑je besoin d’un ordinateur ?", a: "Non. Vous pouvez suivre et créer vos projets depuis un smartphone." },
              { q: "Combien de temps pour créer un site ?", a: "Dès les premières semaines, vous lancez un projet fonctionnel." },
              { q: "Y a‑t‑il un support ?", a: "Oui, support dédié par WhatsApp avec réponses rapides." },
            ].map((f, i) => (
              <details key={i} className="group open:bg-gray-900/60 bg-black p-5">
                <summary className="cursor-pointer list-none flex items-center justify-between text-sm md:text-base font-medium text-white">
                  {f.q}
                  <span className="ml-4 transition-transform group-open:rotate-45 text-green-400">+</span>
                </summary>
                <p className="mt-3 text-gray-300 text-sm">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-10 text-center text-gray-400 text-xs md:text-sm">
          <p>© {new Date().getFullYear()} KEJA Academy. Tous droits réservés.</p>
          <p className="mt-2">Contact : <a href={whatsappLink} className="text-green-400 hover:underline">+229 43 05 06 11</a></p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 p-4 rounded-full shadow-lg"
        aria-label="WhatsApp"
        title="WhatsApp"
      >
        <FaWhatsapp size={24} className="text-white" />
      </a>
    </div>
  )
}
