import Link from "next/link";

const frameworks = [
  { name: "Scaling Up", author: "Verne Harnish", icon: "📈", desc: "BHAG, Rockefeller Habits, cadence d'exécution — adaptés à votre studio fitness." },
  { name: "Buy Back Your Time", author: "Dan Martell", icon: "⏱️", desc: "Le Buyback Loop pour passer de freelance à founder sans vous tuer à la tâche." },
  { name: "5 Niveaux Leadership", author: "John Maxwell", icon: "🏆", desc: "De coach à CEO — comprendre où vous en êtes et comment progresser." },
  { name: "Méthode Toyota / Kaizen", author: "Taiichi Ohno", icon: "⚙️", desc: "L'amélioration continue et l'élimination des gaspillages dans votre studio." },
];

const forWho = [
  { icon: "💪", label: "Personal Trainers", desc: "Vous voulez remplir votre planning ET avoir du temps pour vivre." },
  { icon: "🏋️", label: "Propriétaires de studios", desc: "Vous voulez passer d'un studio à une chaîne ou un empire digital." },
  { icon: "📱", label: "Coachs en ligne", desc: "Vous voulez scaler votre influence et vos revenus sans limite géographique." },
  { icon: "🎓", label: "Formateurs fitness", desc: "Vous voulez créer votre propre certification et multiplier votre impact." },
];

const chapters = [
  { part: "Marketing", items: ["Les 25 Game Changers fitness", "Kaizen Content System", "Marketing gratuit & payant PT", "Hyper-niche et promesse de marque"] },
  { part: "Vente", items: ["Storytelling de la transformation", "Elevator pitch du coach", "Vendre des packages, pas des séances", "La formule magique fitness", "Closing sans forcer"] },
  { part: "Scale", items: ["Le Buyback Loop (Dan Martell)", "Les 4 décisions Scaling Up", "Maxwell Leadership pour PT", "Toyota Kaizen au studio", "3 modèles de scalabilité"] },
  { part: "Expérience Client", items: ["Parcours client 7 étapes", "KPIs fitness essentiels", "Culture studio gagnante", "La boîte à outils digitale"] },
];

export default function FitnessPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-fitness pt-28 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-[#27ae60] text-white text-xs font-black px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
                Nouveau — Fitness Edition
              </span>
              <h1 className="text-5xl md:text-6xl font-black text-white leading-none mb-6">
                L&apos;<span className="text-[#27ae60]">As</span>
                <br />de la Vente
                <br />
                <span className="text-[#27ae60] text-4xl">Fitness Edition</span>
              </h1>
              <p className="text-white/80 text-lg leading-relaxed mb-6 max-w-lg">
                Du planning rempli à l&apos;empire qui tourne sans toi. Le guide de scalabilité
                ultime pour le Personal Trainer qui veut bâtir un business — pas juste survivre.
              </p>
              <div className="flex items-center gap-4 mb-8">
                {[
                  { val: "100+", unit: "pages" },
                  { val: "4", unit: "parties" },
                  { val: "4", unit: "frameworks" },
                ].map((s) => (
                  <div key={s.unit} className="text-white">
                    <span className="text-4xl font-black text-[#27ae60]">{s.val}</span>
                    <span className="text-sm text-white/60 ml-1">{s.unit}</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-4 flex-wrap">
                <Link href="/contact" className="btn-green">Commander ce livre →</Link>
                <Link href="/contact" className="btn-outline-white">Coaching fitness avec Alex</Link>
              </div>
            </div>

            {/* Book visual */}
            <div className="flex justify-center">
              <div className="w-52 group">
                <div className="rounded-2xl overflow-hidden shadow-2xl group-hover:-translate-y-4 group-hover:-rotate-1 transition-all duration-500 bg-gradient-to-b from-[#0d2818] via-[#0d3a1e] to-[#1a6b3a]">
                  <div className="p-8 flex flex-col h-80 justify-between">
                    <div>
                      <span className="text-[9px] bg-[#27ae60]/40 text-[#2ecc71] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                        Nouveau
                      </span>
                      <div className="w-10 h-1 bg-white/40 rounded mt-4 mb-6" />
                      <p className="text-white/50 text-xs uppercase tracking-widest mb-3">Alexandre Gagliano</p>
                      <h2 className="text-white font-black text-2xl leading-tight">
                        L&apos;As<br />de la<br />Vente
                      </h2>
                      <p className="text-[#2ecc71] font-bold text-sm mt-2">Fitness Edition</p>
                    </div>
                    <div>
                      <div className="w-full h-px bg-white/20 mb-3" />
                      <p className="text-white/40 text-xs">Scaling Up · Martell · Maxwell · Toyota</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accroche */}
      <section className="py-12 bg-[#27ae60]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-white text-xl md:text-2xl font-bold italic">
            &ldquo;Il n&apos;y a pas de mauvais programme.
            Il n&apos;y a que de mauvais vendeurs.&rdquo;
          </p>
        </div>
      </section>

      {/* Pour qui */}
      <section className="py-20 bg-[#f8f9fa]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="section-label text-[#27ae60] tracking-widest">Public cible</span>
            <h2 className="section-title text-[#1a1a2e] mt-3">Ce livre est fait pour vous</h2>
            <div className="divider divider-green mx-auto mt-4" />
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {forWho.map((item) => (
              <div key={item.label} className="card text-center border-t-4 border-[#27ae60]">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-[#1a1a2e] mb-2">{item.label}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 Frameworks */}
      <section className="py-20 gradient-navy">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="section-label text-[#27ae60] tracking-widest">Les piliers du livre</span>
            <h2 className="section-title text-white mt-3">4 frameworks qui changent tout</h2>
            <div className="divider divider-green mx-auto mt-4" />
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {frameworks.map((f) => (
              <div key={f.name} className="flex gap-4 bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                <span className="text-3xl flex-shrink-0">{f.icon}</span>
                <div>
                  <h3 className="font-black text-white text-lg">{f.name}</h3>
                  <p className="text-[#27ae60] text-xs font-semibold mb-2">{f.author}</p>
                  <p className="text-white/65 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sommaire */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="section-label text-[#27ae60] tracking-widest">Sommaire</span>
            <h2 className="section-title text-[#1a1a2e] mt-3">Ce que vous allez apprendre</h2>
            <div className="divider divider-green mx-auto mt-4" />
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {chapters.map((ch) => (
              <div key={ch.part} className="rounded-xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                <div className="bg-[#1a1a2e] px-6 py-4">
                  <h3 className="font-black text-white text-lg">{ch.part}</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-2">
                    {ch.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="text-[#27ae60] font-bold">→</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cas concret Sophie */}
      <section className="py-20 bg-[#f8f9fa]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="section-label text-[#27ae60] tracking-widest">Cas concret</span>
            <h2 className="section-title text-[#1a1a2e] mt-3">
              De 2.500€ à 15.000€/mois en 18 mois
            </h2>
            <div className="divider divider-green mx-auto mt-4" />
          </div>
          <div className="card border-l-4 border-[#27ae60]">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {[
                { label: "Mois 1–3", title: "Audit & Délégation", val: "4.500€/mois", color: "#c0392b" },
                { label: "Mois 4–6", title: "Programme en ligne", val: "6.600€/mois", color: "#f39c12" },
                { label: "Mois 13–18", title: "Formation PT", val: "15.000€/mois", color: "#27ae60" },
              ].map((step) => (
                <div key={step.label} className="text-center">
                  <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">{step.label}</p>
                  <p className="font-bold text-[#1a1a2e] mb-2">{step.title}</p>
                  <p className="text-3xl font-black" style={{ color: step.color }}>{step.val}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-600 leading-relaxed italic text-center">
              &ldquo;Sophie, coach post-natale à Lyon, est passée de 2.500€ à 15.000€/mois en 18 mois
              en appliquant le Buyback Loop et les 4 décisions Scaling Up. Sans travailler plus d&apos;heures —
              en travaillant différemment.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Extrait */}
      <section className="py-20 gradient-fitness">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="section-label text-[#27ae60] block mb-4 tracking-widest">Extrait</span>
          <blockquote className="text-white text-xl md:text-2xl leading-relaxed italic font-light mb-8">
            &ldquo;Si votre business s&apos;arrête quand vous arrêtez de coacher,
            vous n&apos;avez pas un business. Vous avez un job. Un job très bien payé peut-être,
            mais un job quand même.&rdquo;
          </blockquote>
          <p className="text-white/50 font-medium">— Alexandre Gagliano, L&apos;As de la Vente — Fitness Edition</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#27ae60]">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Prêt à scaler votre business fitness ?
          </h2>
          <p className="text-white/85 mb-8">
            Commandez la Fitness Edition et commencez votre transformation cette semaine.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-white text-[#27ae60] font-black px-8 py-4 rounded-full hover:bg-gray-100 transition-all text-lg">
              Commander maintenant
            </Link>
            <Link href="/livre" className="btn-outline-white">
              Voir le livre original →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
