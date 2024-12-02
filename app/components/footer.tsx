export default function Footer() {
    return (
      <footer className="w-full py-4 bg-black text-center text-zinc-500 text-sm opacity-0 animate-fade-in delay-500">
         <p className="text-sm">
          © {new Date().getFullYear()} JuanseFDZ. All rights reserved.
        </p>
        <p className="text-xs text-zinc-400 mt-2">
          Construido con <span className="text-lime-400">Next.js</span>
        </p>
      </footer>
    );
  }
  