import Link from "next/link";
import { Container } from "./container";
import { APP_NAME } from "@/constants";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-zinc-800 dark:bg-zinc-950/95">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold">{APP_NAME}</span>
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link
                href="/"
                className="text-sm font-medium transition-colors hover:text-zinc-900 dark:hover:text-zinc-50"
              >
                Accueil
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
              >
                À propos
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </Container>
    </header>
  );
}
