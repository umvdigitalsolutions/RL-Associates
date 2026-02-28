export default function Footer() {
  return (
    // 1. Moved background, blur, and top border to the outer footer so it spans full width
    <footer className="mt-12 w-full backdrop-blur-sm bg-white/5 border-t border-white/10">
      
      {/* 2. Changed text-adv-navy to text-gray-200 so you can read it on the red background */}
      <div className="mx-auto max-w-7xl px-6 py-6 text-sm text-gray-200 opacity-80 flex flex-col md:flex-row md:justify-between items-center">
        <div>© {new Date().getFullYear()} RL Associates — Dr. Jagdish Kumar Prajapat.</div>
        <div className="mt-3 md:mt-0">Registered Office · All rights reserved</div>
      </div>
    </footer>
  );
}