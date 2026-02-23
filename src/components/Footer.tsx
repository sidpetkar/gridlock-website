import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-white mt-auto border-t border-black/5">
      <div className="mx-auto max-w-5xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <Link href="/privacy" className="text-sm text-black/50 hover:text-black transition-colors">
            Privacy
          </Link>
          <Link href="/terms" className="text-sm text-black/50 hover:text-black transition-colors">
            Terms
          </Link>
          <a href="mailto:support@gridlock.app" className="text-sm text-black/50 hover:text-black transition-colors">
            Support
          </a>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-sm text-black/40">
            &copy; {new Date().getFullYear()} Gridlock. Minimalist Design.
          </p>
        </div>
      </div>
    </footer>
  );
}