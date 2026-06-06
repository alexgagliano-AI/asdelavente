import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-white/70 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-[#c0392b] flex items-center justify-center">
                <span className="text-white font-black text-sm">A</span>
              </div>
              <span className="text-white font-black text-lg">
                L&apos;<span className="text-[#c0392b]">As</span> de la Vente
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Deux livres. Une mission : faire de vous un champion de la vente et un entrepreneur qui scale.
            </p>
            <p className="text-sm mt-4">
              Par{" "}
              <span className="text-white font-semibold">Alexandre Gagliano</span>
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-widest">Livres</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/livre" className="hover:text-white transition-colors">L&apos;As de la Vente et du Marketing</Link></li>
              <li>
                <a
                  href="https://www.amazon.com.be/LAS-vente-marketing-Comment-maitriser/dp/B0FLWYH5DL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f39c12] hover:text-[#e67e22] transition-colors font-semibold"
                >
                  🛒 Commander sur Amazon
                </a>
              </li>
              <li><Link href="/fitness" className="hover:text-white transition-colors">Fitness Edition</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/alex" className="hover:text-white transition-colors">Qui est Alex ?</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact & Coaching</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p>© {new Date().getFullYear()} Alexandre Gagliano — Tous droits réservés</p>
          <p>
            <a href="https://asdelavente.fr" className="hover:text-white transition-colors">
              asdelavente.fr
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
