import { useEffect, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { smoothEase } from "../motionTokens";
import { BrandLockup } from "./LogoMark";

const LINKS = [
  { href: "#invites", label: "Invités" },
  { href: "#proposer", label: "Proposer" },
  { href: "#booking", label: "Réserver" },
];

export function Nav() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 24);
  });

  useEffect(() => {
    setScrolled(window.scrollY > 24);
  }, []);

  return (
    <motion.header
      className={`nav nav--tsf ${scrolled ? "nav--scrolled" : ""}`}
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: smoothEase }}
    >
      <div className="nav__inner">
        <a className="nav__brand nav__brand--tsf" href="#top">
          <BrandLockup />
        </a>
        <nav className="nav__links" aria-label="Navigation principale">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <a className="nav__cta nav__cta--tsf" href="#booking">
          Code invité
        </a>
      </div>
    </motion.header>
  );
}
