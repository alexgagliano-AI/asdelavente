import Link from "next/link";
import Image from "next/image";

const timeline = [
  { year: "1982", event: "Naissance à Bruxelles", desc: "D'un père sicilien et d'une mère belge. Appartement de 70m² à 4. La différence sociale se ressent dès le départ." },
  { year: "1990", event: "Le premier vendeur", desc: "Meilleur vendeur d'autocollants de son école à 8 ans. Pas pour l'œuvre caritative — pour gagner la journée au parc d'attractions." },
  { year: "1996", event: "Vendeur de rue", desc: "À 14 ans, vend des autocollants dans la rue. Premiers apprentissages de l'elevator pitch et du closing rapide. Marges de x50." },
  { year: "2010", event: "Premier entrepreneur", desc: "Lance son entreprise de télécommunications. Partenaire Orange/Mobistar. Premiers employés. Premiers succès." },
  { year: "2013", event: "La faillite — le MBA personnel", desc: "Faillite de l'entreprise. Zéro. Licenciements, voiture perdue, comptes bloqués. La leçon la plus chère et la plus précieuse." },
  { year: "2014-2021", event: "Le corporate comeback", desc: "SAP, grandes entreprises tech. VP Sales. Grimpe les échelons. Apprend ce que les grandes boîtes font mieux — et moins bien." },
  { year: "2022", event: "Le licenciement", desc: "40 ans, sans voiture, deux enfants, grosse mensualité. Zéro à nouveau. Et cette fois, c'est différent — c'est une renaissance choisie." },
  { year: "2023+", event: "Le Coach — L'As de la Vente", desc: "Publie son livre. Lance son activité de coaching. Une mission : aider les entrepreneurs à scaler. Pas juste à survivre." },
];

export default function AlexPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero pt-28 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-label text-[#c0392b] block mb-4 tracking-widest">L&apos;auteur</span>
              <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-6">
                Alexandre<br />
                <span className="text-[#c0392b]">Gagliano</span>
              </h1>
              <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-lg">
                Vendeur à 8 ans. Entrepreneur à 28. En faillite à 32. Relancé à 40.
                Coach depuis 2023. Une vie de vente, d&apos;échecs et de victoires — condensée
                en deux livres et une mission.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link href="/contact" className="btn-red">Travailler avec Alex</Link>
                <Link href="/livre" className="btn-outline-white">Ses livres →</Link>
              </div>
            </div>

            {/* Photo Alex */}
            <div className="flex justify-center md:justify-end">
              <div className="relative w-64 h-72 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/alex.jpg"
                  alt="Alexandre Gagliano"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {[
                { val: "20+", label: "ans de vente", sub: "Télécoms, Tech, Coaching" },
                { val: "2", label: "livres publiés", sub: "Original + Fitness Edition" },
                { val: "1.000+", label: "entrepreneurs coachés", sub: "En Europe et ailleurs" },
                { val: "x3", label: "revenu moyen", sub: "Multiplié chez ses clients" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-white/5 border border-white/10 rounded-xl p-5 text-center"
                >
                  <div className="text-3xl font-black text-[#c0392b]">{s.val}</div>
                  <div className="text-white font-bold text-sm mt-1">{s.label}</div>
                  <div className="text-white/40 text-xs mt-1">{s.sub}</div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Citation */}
      <section className="py-12 bg-[#c0392b]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-white text-xl md:text-2xl font-bold italic">
            &ldquo;Je ne suis pas là pour aider des perdants. Je suis là pour aider des gagnants
            qui ne savent pas encore qu&apos;ils le sont.&rdquo;
          </p>
        </div>
      </section>

      {/* Son histoire */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="section-label text-[#c0392b] tracking-widest">Son parcours</span>
            <h2 className="section-title text-[#1a1a2e] mt-3">De Bruxelles au coaching</h2>
            <div className="divider divider-red mx-auto mt-4" />
          </div>

          <div className="space-y-6">
            {timeline.map((item, i) => (
              <div key={item.year} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[#c0392b] flex items-center justify-center text-white font-black text-xs flex-shrink-0">
                    {item.year.slice(-2)}&apos;
                  </div>
                  {i < timeline.length - 1 && (
                    <div className="w-0.5 flex-1 bg-gray-200 mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs text-[#c0392b] font-bold">{item.year}</span>
                    <h3 className="font-black text-[#1a1a2e]">{item.event}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sa philosophie */}
      <section className="py-20 gradient-navy">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="section-label text-[#c0392b] tracking-widest">Sa philosophie</span>
            <h2 className="section-title text-white mt-3">Ce qu&apos;Alex croit vraiment</h2>
            <div className="divider divider-red mx-auto mt-4" />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "L'échec est un professeur",
                quote: "Ma faillite m'a coûté cher. Mais c'est mon MBA personnel. J'en parle avec fierté parce que sans elle, je ne serais pas ce que je suis aujourd'hui.",
              },
              {
                title: "Vendre, c'est aider",
                quote: "Si votre programme peut changer la vie de quelqu'un et que vous ne savez pas le vendre — c'est vous qui lui faites du tort. Vous le privez de la transformation qu'il cherche.",
              },
              {
                title: "Scale ou stagne",
                quote: "Une start-up, c'est bien. Une scale-up, c'est mieux. Si votre business s'arrête quand vous vous arrêtez — vous n'avez pas un business. Vous avez un job.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="font-black text-white text-lg mb-4">{item.title}</h3>
                <p className="text-white/65 italic leading-relaxed text-sm">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#c0392b]">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Prêt à travailler avec Alex ?
          </h2>
          <p className="text-white/85 mb-8">
            Coaching individuel, groupe, conférences — choisissez votre format.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-white text-[#c0392b] font-black px-8 py-4 rounded-full hover:bg-gray-100 transition-all text-lg">
              Prendre contact
            </Link>
            <Link href="/livre" className="btn-outline-white">
              Découvrir les livres →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
