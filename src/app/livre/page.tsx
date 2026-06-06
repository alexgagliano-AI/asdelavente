import Link from "next/link";

const chapters = [
  { num: "01", title: "Le Marketing — La Clé du Succès", desc: "Liste des 25 top relations, réseaux sociaux, marketing gratuit et payant, spécialisation et différenciation." },
  { num: "02", title: "L'Art de la Vente", desc: "Storytelling, elevator pitch, l'effet Wahoo, différenciation, digital et intelligence artificielle." },
  { num: "03", title: "La Science de la Vente", desc: "La découverte SPIN, la formule magique OQ = BC × PP × VP² × Po × A, le closing professionnel." },
  { num: "04", title: "Le Plan Commercial Stratégique", desc: "PSC1P (plan en 1 page), Plan d'action 90 jours, pipeline coverage, la construction de l'offre." },
  { num: "05", title: "L'Expérience Client (CX)", desc: "Culture d'entreprise, expérience employé, KPIs et métriques CX, fidélisation et rétention." },
];

export default function LivrePage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero pt-28 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-label text-[#c0392b] block mb-4 tracking-widest">
                Version Originale
              </span>
              <h1 className="text-5xl md:text-6xl font-black text-white leading-none mb-6">
                L&apos;<span className="text-[#c0392b]">As</span>
                <br />de la Vente
              </h1>
              <p className="text-white/80 text-lg leading-relaxed mb-6 max-w-lg">
                Le guide indispensable pour transformer votre vie entrepreneuriale et commerciale.
                Marketing, vente, closing, expérience client — tout ce dont vous avez besoin
                pour devenir un entrepreneur inarrêtable.
              </p>
              <div className="flex items-center gap-4 mb-8">
                <div className="text-white">
                  <span className="text-4xl font-black text-[#c0392b]">259</span>
                  <span className="text-sm text-white/60 ml-1">pages</span>
                </div>
                <div className="w-px h-10 bg-white/20" />
                <div className="text-white">
                  <span className="text-4xl font-black text-[#c0392b]">3</span>
                  <span className="text-sm text-white/60 ml-1">parties</span>
                </div>
                <div className="w-px h-10 bg-white/20" />
                <div className="text-white">
                  <span className="text-4xl font-black text-[#c0392b]">20+</span>
                  <span className="text-sm text-white/60 ml-1">ans d&apos;expérience</span>
                </div>
              </div>
              <div className="flex gap-4 flex-wrap">
                <Link href="/contact" className="btn-red">Commander le livre →</Link>
                <Link href="/contact" className="btn-outline-white">Coaching avec Alex</Link>
              </div>
            </div>

            {/* Book visual */}
            <div className="flex justify-center">
              <div className="w-52 group">
                <div className="rounded-2xl overflow-hidden shadow-2xl group-hover:-translate-y-4 group-hover:rotate-1 transition-all duration-500 bg-gradient-to-b from-[#1a1a2e] via-[#2c1a1a] to-[#c0392b]">
                  <div className="p-8 flex flex-col h-80 justify-between">
                    <div>
                      <div className="w-10 h-1 bg-white/40 rounded mb-6" />
                      <p className="text-white/50 text-xs uppercase tracking-widest mb-3">Alexandre Gagliano</p>
                      <h2 className="text-white font-black text-2xl leading-tight">
                        L&apos;As<br />de la<br />Vente
                      </h2>
                    </div>
                    <div>
                      <div className="w-full h-px bg-white/20 mb-3" />
                      <p className="text-white/40 text-xs">Le guide entrepreneur</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-12 bg-[#c0392b]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-white text-xl md:text-2xl font-bold italic">
            &ldquo;Il n&apos;y a pas de mauvaise idée. Il n&apos;y a que de mauvais vendeurs.&rdquo;
          </p>
        </div>
      </section>

      {/* Pour qui */}
      <section className="py-20 bg-[#f8f9fa]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="section-label text-[#c0392b] tracking-widest">Public cible</span>
            <h2 className="section-title text-[#1a1a2e] mt-3">Ce livre est fait pour vous si…</h2>
            <div className="divider divider-red mx-auto mt-4" />
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { icon: "🚀", label: "Vous lancez votre entreprise", desc: "Vous avez une idée mais ne savez pas comment la vendre." },
              { icon: "📈", label: "Vous voulez scale", desc: "Vous avez des clients mais votre croissance stagne." },
              { icon: "💼", label: "Vous êtes commercial", desc: "Vous voulez passer au niveau supérieur dans l'art de la vente." },
              { icon: "🎯", label: "Vous cherchez la méthode", desc: "Vous voulez un système concret, pas de la théorie." },
              { icon: "🔥", label: "Vous êtes entrepreneur", desc: "Vous savez que si vous ne vendez pas, vous n'existez pas." },
              { icon: "💡", label: "Vous voulez vous différencier", desc: "Vous cherchez à sortir de la masse et devenir une référence." },
            ].map((item) => (
              <div key={item.label} className="card text-center">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-[#1a1a2e] mb-2">{item.label}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contenu chapitres */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="section-label text-[#c0392b] tracking-widest">Sommaire</span>
            <h2 className="section-title text-[#1a1a2e] mt-3">Ce que vous allez apprendre</h2>
            <div className="divider divider-red mx-auto mt-4" />
          </div>
          <div className="space-y-4">
            {chapters.map((ch) => (
              <div
                key={ch.num}
                className="flex gap-6 p-6 rounded-xl border border-gray-100 hover:border-[#c0392b]/30 hover:shadow-md transition-all group"
              >
                <div className="text-4xl font-black text-[#c0392b]/20 group-hover:text-[#c0392b]/40 transition-colors flex-shrink-0">
                  {ch.num}
                </div>
                <div>
                  <h3 className="font-bold text-[#1a1a2e] text-lg mb-1">{ch.title}</h3>
                  <p className="text-gray-500 text-sm">{ch.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extrait */}
      <section className="py-20 gradient-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="section-label text-[#c0392b] block mb-4 tracking-widest">Extrait du livre</span>
          <blockquote className="text-white text-xl md:text-2xl leading-relaxed italic font-light mb-8">
            &ldquo;Si vous voulez devenir une entreprise à succès, si vous voulez avoir la meilleure
            équipe de vente, si vous avez envie d&apos;augmenter vos revenus de manière considérable,
            faites-vous accompagner par un coach. Je ne suis pas un perdant — je suis un gagnant.
            Et vous aussi.&rdquo;
          </blockquote>
          <p className="text-white/50 font-medium">— Alexandre Gagliano, L&apos;As de la Vente</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#c0392b]">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Prêt à devenir un as de la vente ?
          </h2>
          <p className="text-white/85 mb-8">
            Commandez le livre et rejoignez des milliers d&apos;entrepreneurs qui ont transformé
            leur business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-white text-[#c0392b] font-black px-8 py-4 rounded-full hover:bg-gray-100 transition-all text-lg">
              Commander maintenant
            </Link>
            <Link href="/fitness" className="btn-outline-white">
              Voir Fitness Edition →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
