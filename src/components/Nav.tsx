import { useEffect, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { smoothEase } from "../motionTokens";

const LINKS = [
  { href: "#intro", label: "Concept" },
  { href: "#hote", label: "L’hôte" },
  { href: "#invites-preview", label: "Invités" },
  { href: "#episodes", label: "Épisodes" },
  { href: "#booking", label: "Réserver" },
];

export function Nav() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 40);
  });

  useEffect(() => {
    setScrolled(window.scrollY > 40);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        className={`doac-nav ${scrolled ? "doac-nav--scrolled" : ""}`}
        initial={{ y: -12, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: smoothEase }}
      >
        <div className="doac-nav__bar">
          <a className="doac-nav__logo" href="#top">
            LA TABLE <span>SANS FILTRE</span>
          </a>

          <nav className="doac-nav__desktop" aria-label="Navigation principale">
            {LINKS.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <a className="doac-nav__pill" href="#booking">
            Code invité
          </a>

          <button
            type="button"
            className={`doac-nav__burger ${menuOpen ? "doac-nav__burger--open" : ""}`}
            aria-expanded={menuOpen}
            aria-controls="doac-mobile-menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className="sr-only">{menuOpen ? "Fermer le menu" : "Ouvrir le menu"}</span>
            <span className="doac-nav__burger-mid" aria-hidden />
          </button>
        </div>
      </motion.header>

      <button
        type="button"
        className={`doac-nav__backdrop ${menuOpen ? "doac-nav__backdrop--open" : ""}`}
        aria-label="Fermer le menu"
        tabIndex={menuOpen ? 0 : -1}
        onClick={() => setMenuOpen(false)}
      />

      <div
        id="doac-mobile-menu"
        className={`doac-nav__drawer ${menuOpen ? "doac-nav__drawer--open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <nav className="doac-nav__drawer-inner" aria-label="Navigation mobile">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#booking" onClick={() => setMenuOpen(false)}>
            Code invité
          </a>
        </nav>
      </div>
    </>
  );
}
