"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold tracking-tighter">
          AV<span className="text-purple-500">.</span>
        </a>
        <ul className="flex gap-6 md:gap-8 text-sm font-medium text-gray-300">
          <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
          <li><a href="#work" className="hover:text-white transition-colors">Work</a></li>
          <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}