import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white selection:bg-brand-purple selection:text-black overflow-hidden">
      {/* Hero Section */}
      <section className="relative px-6 pt-24 pb-16 lg:px-8 lg:pt-32 lg:pb-24">
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

      {/* 3-Column Image Showcase Grid */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 lg:gap-6 items-start">
          
          <div className="flex flex-col items-center text-center">
            <div className="w-full flex justify-center mb-8 h-[55vh] md:h-[65vh] max-h-[650px]">
              <Image 
                src="/image 2095.png" 
                alt="Gridlock Gameplay" 
                width={500} 
                height={800} 
                className="rounded-[2rem] shadow-lg object-cover object-top h-full w-auto"
                priority
              />
            </div>
            <h3 className="text-2xl font-medium tracking-tight text-black mb-4">
              Pure Strategy
            </h3>
            <p className="text-base font-light text-black/60 leading-relaxed max-w-sm">
              Every word must be at least 3 letters long and intersect with the existing board. Think ahead. Connect the dots.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-full flex justify-center mb-8 h-[55vh] md:h-[65vh] max-h-[650px]">
              <Image 
                src="/image 2093.png" 
                alt="Clean Interface" 
                width={500} 
                height={800} 
                className="rounded-[2rem] shadow-lg object-cover object-top h-full w-auto"
                priority
              />
            </div>
            <h3 className="text-2xl font-medium tracking-tight text-black mb-4">
              Less noise. More focus.
            </h3>
            <p className="text-base font-light text-black/60 leading-relaxed max-w-sm">
              We stripped away the clutter. No flashy animations, no distracting timers. Just you, the letters, and an elegant grid that expands as you play.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-full flex justify-center mb-8 h-[55vh] md:h-[65vh] max-h-[650px]">
              <Image 
                src="/image 2094.png" 
                alt="Ghost Hints Feature" 
                width={500} 
                height={800} 
                className="rounded-[2rem] shadow-lg object-cover object-top h-full w-auto"
                priority
              />
            </div>
            <h3 className="text-2xl font-medium tracking-tight text-black mb-4">
              Intuitive Ghost Hints
            </h3>
            <p className="text-base font-light text-black/60 leading-relaxed max-w-sm">
              Stuck on a tricky intersection? Click multiple times to cycle through faded ghost letters showing valid possibilities directly on the grid.
            </p>
          </div>

        </div>
      </section>

      {/* Google OAuth Justification for Review */}
      <section className="bg-black/5 py-32 border-t border-black/5 mt-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-medium tracking-tight text-black mb-6">
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