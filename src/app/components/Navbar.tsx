'use client';

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/#products", label: "Produits", targetId: "products" },
  { href: "/#references", label: "Références", targetId: "references" },
  { href: "/#contact", label: "Contact", targetId: "contact" },
];

function scrollToId(id: string) {
  if (typeof document === "undefined") return;
  const el = document.getElementById(id);
  el?.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const pathname = usePathname();

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    if (pathname === "/") {
      event.preventDefault();
      scrollToId(targetId);
    }
  };

  return (
    <nav className="bg-white shadow-md" role="navigation" aria-label="Navigation principale">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" aria-label="OmegaMesure - Retour à l'accueil" className="focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded">
              <Image
                src="/logo.jpg"
                alt="OmegaMesure Logo"
                width={120}
                height={40}
                className="object-contain"
                priority
              />
            </Link>
          </div>
          <div className="flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-secondary-600 hover:text-primary-700"
                onClick={(e) => handleClick(e, link.targetId)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+212664323049"
              className="flex items-center space-x-2 text-secondary-600 hover:text-primary-700"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+212 664 323 049</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

