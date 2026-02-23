import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-black/5 sticky top-0 z-50">
      <nav className="mx-auto flex max-w-5xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3 group">
            <span className="sr-only">Gridlock</span>
            <Image 
              src="/gridlock-nobg.png" 
              alt="Gridlock Logo" 
              width={28} 
              height={28} 
              className="group-hover:opacity-70 transition-opacity"
            />
            <span className="text-xl font-medium tracking-tight text-black">Gridlock.</span>
          </Link>
        </div>
        <div className="flex gap-4 items-center justify-end">
          <Link
            href="/play"
            className="rounded-full bg-black px-6 py-2.5 text-sm font-medium text-white hover:bg-black/80 transition-colors"
          >
            Play
          </Link>
        </div>
      </nav>
    </header>
  );
}