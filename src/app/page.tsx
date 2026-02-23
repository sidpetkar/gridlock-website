import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white selection:bg-brand-purple selection:text-black overflow-hidden">
      {/* Hero Section */}
      <section className="relative px-6 pt-24 pb-16 lg:px-8 lg:pt-40 lg:pb-32">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-5xl font-light tracking-tight text-black sm:text-7xl mb-8">
            A dynamic crossword <br className="hidden sm:block"/> puzzle experience.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl font-light text-black/60 leading-relaxed">
            Compete against an AI opponent to create intersecting words on an expanding grid. 
            Pure strategy, minimal distractions.
          </p>
          <div className="mt-12 flex items-center justify-center gap-x-6">
            <Link
              href="/play"
              className="rounded-full bg-black px-8 py-3.5 text-base font-medium text-white hover:bg-black/80 transition-colors"
            >
              Start Playing
            </Link>
          </div>
        </div>
      </section>

      {/* Main Image Showcase */}
      <section className="mx-auto max-w-5xl px-6 lg:px-8 pb-32">
        <div className="relative rounded-3xl bg-brand-purple p-8 sm:p-12 overflow-hidden shadow-2xl shadow-black/5 flex items-center justify-center">
          <Image 
            src="/image 2095.png" 
            alt="Gridlock Gameplay" 
            width={800} 
            height={600} 
            className="rounded-2xl border border-black/5 shadow-xl object-cover max-w-full h-auto"
            priority
          />
        </div>
      </section>

      {/* Philosophy / Features Grid */}
      <section className="mx-auto max-w-5xl px-6 lg:px-8 py-24 border-t border-black/5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-light tracking-tight text-black mb-6">
              Less noise.<br/> More focus.
            </h2>
            <p className="text-lg font-light text-black/60 leading-relaxed mb-6">
              We stripped away the clutter. No flashy animations, no distracting timers. Just you, the letters, and an elegant grid that expands as you play. 
            </p>
            <p className="text-lg font-light text-black/60 leading-relaxed">
              Every word must be at least 3 letters long and intersect with the existing board. Think ahead. Connect the dots.
            </p>
          </div>

          <div className="relative rounded-2xl bg-brand-green p-8 flex items-center justify-center">
            <Image 
              src="/image 2093.png" 
              alt="Clean Interface" 
              width={400} 
              height={500} 
              className="rounded-xl border border-black/5 shadow-lg max-w-full h-auto"
            />
          </div>

        </div>
      </section>

      {/* Feature 2: Ghost Hints */}
      <section className="mx-auto max-w-5xl px-6 lg:px-8 py-24 border-t border-black/5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          
          <div className="relative rounded-2xl bg-brand-purple/50 p-8 flex items-center justify-center order-2 md:order-1">
            <Image 
              src="/image 2094.png" 
              alt="Ghost Hints Feature" 
              width={400} 
              height={500} 
              className="rounded-xl border border-black/5 shadow-lg max-w-full h-auto"
            />
          </div>

          <div className="flex flex-col justify-center order-1 md:order-2">
            <h2 className="text-3xl font-light tracking-tight text-black mb-6">
              Intuitive Ghost Hints.
            </h2>
            <p className="text-lg font-light text-black/60 leading-relaxed mb-6">
              Stuck on a tricky intersection? Click multiple times to cycle through faded ghost letters showing valid possibilities directly on the grid.
            </p>
            <p className="text-lg font-light text-black/60 leading-relaxed">
              A subtle nudge to discover words you might not have thought of, without holding your hand.
            </p>
          </div>

        </div>
      </section>

      {/* Google OAuth Justification for Review */}
      <section className="bg-black/5 py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-light tracking-tight text-black mb-6">
            Pick up exactly where you left off.
          </h2>
          <p className="text-lg font-light text-black/60 leading-relaxed mb-8">
            Gridlock uses <strong>Google Sign-In</strong> so you can seamlessly cross-save your progress across web and mobile. We use it strictly for secure authentication to track your multiplayer stats and restore your active games.
          </p>
          <Link
            href="/play"
            className="inline-flex rounded-full bg-black px-8 py-3 text-sm font-medium text-white hover:bg-black/80 transition-colors"
          >
            Sign in & Play
          </Link>
        </div>
      </section>

    </div>
  );
}