"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import SectionContainer from "@/components/ui/SectionContainer";
import Button from "@/components/ui/Button";
import { services } from "@/lib/data";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Scroll listener
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY >= 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleDropdownEnter = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => setDropdownOpen(false), 150);
  };

  const isActive = (href: string) => {
    if (href === "/services") return pathname === "/services" || pathname.startsWith("/services/");
    return pathname === href;
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-[rgba(250,249,247,0.92)] backdrop-blur-xl shadow-nav"
            : "bg-transparent"
        )}
      >
        <SectionContainer>
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="font-heading font-semibold text-xl tracking-tight">
              <span className="text-accent">a</span>
              <span className="text-text-primary">ygency</span>
            </Link>

            {/* Desktop nav links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) =>
                link.label === "Services" ? (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={handleDropdownEnter}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "px-4 py-2 rounded-full font-heading font-medium text-[15px] transition-all duration-200",
                        isActive(link.href)
                          ? "bg-secondary text-text-primary"
                          : "text-text-secondary hover:text-text-primary hover:bg-secondary"
                      )}
                    >
                      {link.label}
                    </Link>

                    {/* Services dropdown */}
                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-primary rounded-xl shadow-card-hover border border-border-light p-2 min-w-[260px] z-50"
                        >
                          {services.map((service) => (
                            <Link
                              key={service.slug}
                              href={`/services/${service.slug}`}
                              className="block px-4 py-3 rounded-lg hover:bg-secondary transition-colors"
                            >
                              <span className="block font-heading font-medium text-sm text-text-primary">
                                {service.shortTitle}
                              </span>
                              <span className="block text-xs text-text-tertiary mt-0.5">
                                {service.description}
                              </span>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={cn(
                      "px-4 py-2 rounded-full font-heading font-medium text-[15px] transition-all duration-200",
                      isActive(link.href)
                        ? "bg-secondary text-text-primary"
                        : "text-text-secondary hover:text-text-primary hover:bg-secondary"
                    )}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Button variant="primary" href="/contact">
                Book a Call
              </Button>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-[6px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30 focus-visible:ring-offset-2 rounded-lg"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              <span
                className={cn(
                  "block w-6 h-[2px] bg-text-primary transition-all duration-300 origin-center",
                  mobileOpen && "translate-y-[4px] rotate-45"
                )}
              />
              <span
                className={cn(
                  "block w-6 h-[2px] bg-text-primary transition-all duration-300",
                  mobileOpen && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "block w-6 h-[2px] bg-text-primary transition-all duration-300 origin-center",
                  mobileOpen && "-translate-y-[4px] -rotate-45"
                )}
              />
            </button>
          </div>
        </SectionContainer>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-primary z-50 flex flex-col"
          >
            {/* Mobile header with logo + close */}
            <SectionContainer>
              <div className="flex items-center justify-between h-20">
                <Link
                  href="/"
                  className="font-heading font-semibold text-xl tracking-tight"
                  onClick={() => setMobileOpen(false)}
                >
                  <span className="text-accent">a</span>
                  <span className="text-text-primary">ygency</span>
                </Link>
                <button
                  className="relative w-8 h-8 flex flex-col items-center justify-center gap-[6px]"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                >
                  <span className="block w-6 h-[2px] bg-text-primary translate-y-[4px] rotate-45 transition-all duration-300 origin-center" />
                  <span className="block w-6 h-[2px] bg-text-primary opacity-0 transition-all duration-300" />
                  <span className="block w-6 h-[2px] bg-text-primary -translate-y-[4px] -rotate-45 transition-all duration-300 origin-center" />
                </button>
              </div>
            </SectionContainer>

            {/* Mobile links */}
            <div className="flex-1 flex flex-col items-center justify-center gap-8 px-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="text-center"
                >
                  <Link
                    href={link.href}
                    className="font-heading text-3xl font-semibold text-text-primary"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                  {/* Sub-links for Services */}
                  {link.label === "Services" && (
                    <div className="flex flex-col gap-3 mt-4">
                      {services.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          className="text-lg text-text-secondary hover:text-text-primary transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          {service.shortTitle}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: navLinks.length * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="mt-4 w-full max-w-xs"
              >
                <Button
                  variant="primary"
                  size="lg"
                  href="/contact"
                  className="w-full text-center block"
                >
                  Book a Call
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
