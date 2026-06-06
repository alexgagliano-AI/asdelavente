import Link from "next/link";

const testimonials = [
  {
    name: "Sophie M.",
    role: "Personal Trainer, Lyon",
    text: "En 18 mois avec la méthode d'Alex, je suis passée de 2.500€ à 15.000€/mois. Le livre Fitness Edition m'a ouvert les yeux sur tout ce que je faisais mal.",
    stars: 5,
  },
  {
    name: "Thomas R.",
    role: "Entrepreneur, Bruxelles",
    text: "L'As de la Vente est le livre que j'aurais voulu lire avant de lancer ma boîte. Direct, concret, sans blabla. Alex dit ce que personne n'ose dire.",
    stars: 5,
  },
  {
    name: "Camille D.",
    role: "Coach Fitness, Paris",
    text: "La formule magique de la vente m'a permis de doubler mon taux de closing en 3 mois. Je suis passée de 30% à 72%.",
    stars: 5,
  },
];

const stats = [
  { value: "20+", label: "ans d'expérience en vente" },
  { value: "2", label: "livres publiés" },
  { value: "1.000+", label: "entrepreneurs coachés" },
  { value: "x3", label: "revenu moyen multiplié" },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ───────────────────────────────────────────────────── */}
      <section className="gradient-hero min-h-screen flex items-center pt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-label text-[#c0392b] block mb-4 tracking-widest">
                Alexandre Gagliano
              </span>
              <h1 className="text-5xl md:text-7xl font-black text-white leading-none mb-6">
                L&apos;<span className="text-[#c0392b]">As</span>
                <br />
                de la
                <br />
                <span className="text-[#c0392b]">Vente</span>
              </h1>
              <p className="text-white/80 text-xl leading-relaxed mb-8 max-w-md">
                Deux livres pour vous transformer en machine de vente et bâtir un business
                qui tourne <strong className="text-white">sans vous.</strong>
              </p>
              <div className="flex flex-wrap gap-4 mb-12">
                <Link href="/livre" className="btn-red text-base">
                  Le Livre Original
                </Link>
                <Link href="/fitness" className="btn-outline-white text-base">
                  Fitness Edition →
                </Link>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="text-3xl font-black text-[#c0392b]">{s.value}</div>
                    <div className="text-xs text-white/60 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Book covers */}
            <div className="flex gap-6 justify-center items-end">
              <Link href="/livre" className="group w-44 flex-shrink-0">
                <div className="rounded-2xl overflow-hidden shadow-2xl group-hover:-translate-y-4 group-hover:-rotate-2 transition-all duration-300 bg-gradient-to-b from-[#1a1a2e] via-[#2c1a1a] to-[#c0392b]">
                  <div className="p-5 flex flex-col h-64 justify-between">
                    <div>
                      <div className="w-8 h-1 bg-white/40 rounded mb-4" />
                      <p className="text-white/50 text-[10px] uppercase tracking-widest mb-2">Alexandre Gagliano</p>
                      <h3 className="text-white font-black text-lg leading-tight">
                        L&apos;As de la Vente
                      </h3>
                    </div>
                    <div>
                      <div className="w-full h-px bg-white/20 mb-2" />
                      <p className="text-white/40 text-[10px]">Version Originale</p>
                    </div>
                  </div>
                </div>
                <p className="text-white/60 text-xs text-center mt-2 group-hover:text-white transition-colors">
                  Version Originale
                </p>
              </Link>

              <Link href="/fitness" className="group w-44 flex-shrink-0">
                <div className="rounded-2xl overflow-hidden shadow-2xl group-hover:-translate-y-4 group-hover:rotate-2 transition-all duration-300 bg-gradient-to-b from-[#0d2818] via-[#0d3a1e] to-[#1a6b3a]">
                  <div className="p-5 flex flex-col h-72 justify-between">
                    <div>
                      <span className="text-[9px] bg-[#27ae60]/40 text-[#2ecc71] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                        Nouveau
                      </span>
                      <div className="w-8 h-1 bg-white/40 rounded mt-3 mb-4" />
                      <p className="text-white/50 text-[10px] uppercase tracking-widest mb-2">Alexandre Gagliano</p>
                      <h3 className="text-white font-black text-lg leading-tight">
                        L&apos;As de la Vente
                      </h3>
                      <p className="text-[#2ecc71] font-bold text-sm mt-1">Fitness Edition</p>
                    </div>
                    <div>
                      <div className="w-full h-px bg-white/20 mb-2" />
                      <p className="text-white/40 text-[9px]">Scaling Up · Martell · Maxwell</p>
                    </div>
                  </div>
                </div>
                <p className="text-white/60 text-xs text-center mt-2 group-hover:text-white transition-colors">
                  Fitness &amp; PT Edition
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── LES DEUX LIVRES ─────────────────────────────────────────── */}
      <section className="py-24 bg-[#f8f9fa]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="section-label text-[#c0392b] tracking-widest">
              Deux livres, une mission
            </span>
            <h2 className="section-title text-[#1a1a2e] mt-3">
              Choisissez votre chemin
            </h2>
            <div className="divider divider-red mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Livre 1 */}
            <div className="card border-t-4 border-[#c0392b]">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-[#c0392b] flex items-center justify-center text-white font-black text-lg">
                  1
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest">Version Originale</p>
                  <h3 className="font-black text-[#1a1a2e] text-xl">L&apos;As de la Vente</h3>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Le guide de référence pour tout entrepreneur, commercial et chef d&apos;entreprise
                qui veut vendre mieux, bâtir un pipeline solide et développer une stratégie
                commerciale gagnante. Marketing, vente, closing, expérience client — tout y est.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Marketing : gratuit et payant",
                  "L'art et la science de la vente",
                  "La formule magique du closing",
                  "Plan stratégique commercial en 1 page",
                  "L'expérience client (CX)",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="text-[#c0392b] font-bold text-base">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/livre" className="btn-red block text-center">
                Découvrir ce livre →
              </Link>
            </div>

            {/* Livre 2 */}
            <div className="card border-t-4 border-[#27ae60] relative">
              <div className="absolute -top-3 right-4">
                <span className="bg-[#27ae60] text-white text-xs font-black px-3 py-1 rounded-full">
                  NOUVEAU
                </span>
              </div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-[#27ae60] flex items-center justify-center text-white font-black text-lg">
                  2
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest">Fitness Edition</p>
                  <h3 className="font-black text-[#1a1a2e] text-xl">L&apos;As de la Vente</h3>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Spécialement conçu pour les Personal Trainers et coachs fitness qui veulent
                passer de freelance à founder. Scaling Up, Dan Martell, Maxwell Leadership
                et méthode Toyota — adaptés à votre réalité quotidienne.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Marketing fitness & hyper-niche",
                  "Vendre des packages, pas des séances",
                  "Le Buyback Loop de Dan Martell",
                  "Les 4 décisions Scaling Up",
                  "3 modèles de scalabilité PT",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="text-[#27ae60] font-bold text-base">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/fitness" className="btn-green block text-center">
                Découvrir ce livre →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── ALEX TEASER ─────────────────────────────────────────────── */}
      <section className="py-24 gradient-navy text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-label text-[#c0392b] block mb-4 tracking-widest">L&apos;auteur</span>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
                Je ne suis pas{" "}
                <span className="text-white/50">un coach.</span>
                <br />
                Je suis{" "}
                <span className="text-[#c0392b]">LE coach.</span>
              </h2>
              <div className="divider divider-red mb-6" />
              <p className="text-white/75 leading-relaxed mb-4">
                Alexandre Gagliano. Né à Bruxelles d&apos;un père sicilien. Grandi sans argent,
                déterminé à réussir. À 8 ans, meilleur vendeur d&apos;autocollants de son école.
                À 40 ans — faillite, licenciement, zéro voiture — et une conviction inébranlable.
              </p>
              <p className="text-white/75 leading-relaxed mb-8">
                Après 20 ans de vente dans les télécoms et la tech (Orange, SAP), il est devenu
                le coach des entrepreneurs qui veulent scaler — pas juste survivre.
              </p>
              <Link href="/alex" className="btn-outline-white">
                L&apos;histoire complète d&apos;Alex →
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {[
                { icon: "🏆", title: "20+ ans de vente", desc: "Télécoms, tech, entrepreneuriat — dans le vrai monde, pas dans les livres." },
                { icon: "💼", title: "Entrepreneur résilient", desc: "Une faillite, deux renaissances. La vraie école du business." },
                { icon: "🚀", title: "Coach scalabilité", desc: "Scaling Up, Dan Martell, Maxwell — adapté à votre secteur." },
                { icon: "📚", title: "Auteur & Speaker", desc: "Deux livres publiés. Des conférences. Un message : vendez mieux." },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <h4 className="font-bold text-white">{item.title}</h4>
                    <p className="text-white/55 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="section-label text-[#c0392b] tracking-widest">Ce qu&apos;ils disent</span>
            <h2 className="section-title text-[#1a1a2e] mt-3">Résultats réels</h2>
            <div className="divider divider-red mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="card">
                <div className="flex mb-3">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <span key={i} className="text-[#f39c12] text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-6 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="border-t pt-4">
                  <p className="font-bold text-[#1a1a2e]">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CITATION ALEX ────────────────────────────────────────────── */}
      <section className="py-16 bg-[#f8f9fa]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-3xl md:text-4xl font-black text-[#1a1a2e] leading-tight">
            &ldquo;Il n&apos;y a pas de mauvaise idée.
            <br />
            <span className="text-[#c0392b]">Il n&apos;y a que de mauvais vendeurs.</span>&rdquo;
          </p>
          <p className="text-gray-500 mt-4 font-medium">— Alexandre Gagliano</p>
        </div>
      </section>

      {/* ── CTA FINAL ────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#c0392b]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            Prêt à devenir inarrêtable ?
          </h2>
          <p className="text-white/85 text-lg mb-10">
            Choisissez votre livre. Appliquez la méthode. Mesurez les résultats.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/livre"
              className="bg-white text-[#c0392b] font-black px-8 py-4 rounded-full hover:bg-gray-100 transition-all text-lg shadow-lg"
            >
              Le Livre Original
            </Link>
            <Link
              href="/fitness"
              className="bg-[#1a1a2e] text-white font-black px-8 py-4 rounded-full hover:bg-[#2c3e50] transition-all text-lg shadow-lg"
            >
              Fitness Edition
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
