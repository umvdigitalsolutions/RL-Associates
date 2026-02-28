import Link from "next/link";

export default function Header() {
  // 1. Moved background, blur, border, and shadow to the outer header so it spans full width
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/35 border-b border-white/20 shadow-sm text-adv-navy antialiased">
      
      {/* 2. Kept the max-width, centering, padding, and flex layout here to contain the content */}
      <div className="mx-auto max-w-7xl px-6 py-8 flex items-center justify-between">
        
        <div className="flex items-center gap-3">
          <div className="text-2xl font-semibold">RL Associates</div>
          <div className="text-sm text-adv-muted opacity-90 hidden sm:block">
            Advocates & Legal Consultants
          </div>
        </div>

        <nav className="hidden md:flex gap-6 text-sm">
          <Link href="/" className="hover:text-adv-gold transition-colors">Home</Link>
          <Link href="/about" className="hover:text-adv-gold transition-colors">About</Link>
          <Link href="/services" className="hover:text-adv-gold transition-colors">Services</Link>
          <Link href="/contact" className="hover:text-adv-gold transition-colors">Contact</Link>
        </nav>
      </div>
    </header>
  );
}