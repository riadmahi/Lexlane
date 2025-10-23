import Image from "next/image";
import Link from "next/link";
import Brand from "@/assets/images/brand.svg";
import { PageTransition, FadeIn } from "@/components/ui/page-transition";

interface AuthLayoutProps {
  children: React.ReactNode;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  imageUrl?: string;
}

export function AuthLayout({ 
  children, 
  testimonial = {
    quote: "Lexlane a transformé notre façon de travailler. Un outil indispensable pour notre cabinet.",
    author: "Sophie Martin",
    role: "Avocate associée, Cabinet Martin & Associés"
  },
  imageUrl = "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
}: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Left side - Form */}
        <div className="flex items-center justify-center p-8">
          <PageTransition className="w-full max-w-md space-y-8">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src={Brand}
                alt="Lexlane"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </Link>

            {children}
          </PageTransition>
        </div>

        {/* Right side - Image */}
        <FadeIn className="hidden lg:block relative" delay={0.2}>
          <Image
            src={imageUrl}
            alt="Cabinet d'avocat"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
          
          {/* Testimonial */}
          <div className="absolute inset-0 flex items-end p-12">
            <blockquote className="text-white">
              <p className="font-rethink-sans text-3xl font-semibold mb-8">
                "{testimonial.quote}"
              </p>
              <footer className="font-inter text-sm">
                <strong className="block">{testimonial.author}</strong>
                <span className="text-white/80">{testimonial.role}</span>
              </footer>
            </blockquote>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
