"use client";
import { useState } from "react";

const offerings = [
  { icon: "📚", title: "Commander un livre", desc: "L'As de la Vente (original) ou la Fitness Edition. Commandez directement ou via Amazon." },
  { icon: "🎯", title: "Coaching individuel", desc: "Sessions 1:1 avec Alex pour transformer votre stratégie commerciale et votre business." },
  { icon: "👥", title: "Coaching d'équipe", desc: "Formation de votre équipe commerciale aux techniques de vente et à la scalabilité." },
  { icon: "🎤", title: "Conférence & Speaking", desc: "Alex intervient dans vos événements, salons, conventions d'entreprise." },
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", sujet: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="gradient-navy pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="section-label text-[#c0392b] block mb-4 tracking-widest">Contact</span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
            Passons à l&apos;<span className="text-[#c0392b]">action</span>
          </h1>
          <p className="text-white/75 text-lg max-w-2xl mx-auto">
            Commander un livre, demander un coaching, inviter Alex à parler — dites-moi
            ce dont vous avez besoin. Je vous réponds sous 24h.
          </p>
        </div>
      </section>

      {/* Offres */}
      <section className="py-16 bg-[#f8f9fa]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {offerings.map((o) => (
              <div key={o.title} className="card text-center">
                <div className="text-4xl mb-3">{o.icon}</div>
                <h3 className="font-bold text-[#1a1a2e] mb-2">{o.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulaire */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="section-title text-[#1a1a2e]">Envoyez-moi un message</h2>
            <div className="divider divider-red mx-auto mt-4" />
          </div>

          {sent ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">✅</div>
              <h3 className="text-2xl font-black text-[#1a1a2e] mb-3">
                Message envoyé — merci !
              </h3>
              <p className="text-gray-500">
                Je vous réponds sous 24 heures. Keep doing it.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-[#1a1a2e] mb-2">
                    Votre nom *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#c0392b] transition-colors"
                    placeholder="Alexandre Gagliano"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#1a1a2e] mb-2">
                    Votre email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#c0392b] transition-colors"
                    placeholder="vous@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1a1a2e] mb-2">
                  Objet de votre demande *
                </label>
                <select
                  name="sujet"
                  required
                  value={form.sujet}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#c0392b] transition-colors bg-white"
                >
                  <option value="">Choisissez…</option>
                  <option value="livre">Commander un livre</option>
                  <option value="coaching-individuel">Coaching individuel</option>
                  <option value="coaching-equipe">Coaching d&apos;équipe / formation</option>
                  <option value="speaking">Invitation à parler / conférence</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1a1a2e] mb-2">
                  Votre message *
                </label>
                <textarea
                  name="message"
                  required
                  value={form.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#c0392b] transition-colors resize-none"
                  placeholder="Décrivez votre situation, vos objectifs, ce dont vous avez besoin…"
                />
              </div>

              <button type="submit" className="btn-red w-full text-center text-lg">
                Envoyer mon message →
              </button>
              <p className="text-xs text-gray-400 text-center">
                Réponse sous 24h. Vos données restent confidentielles.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* Keep doing it */}
      <section className="py-16 bg-[#1a1a2e] text-center">
        <div className="max-w-xl mx-auto px-4">
          <p className="text-white/60 text-sm mb-2">La devise d&apos;Alex</p>
          <p className="text-3xl font-black text-white">
            Keep doing it.
          </p>
          <p className="text-white/40 text-sm mt-3">— Alexandre Gagliano</p>
        </div>
      </section>
    </>
  );
}
