import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function GsapScrollBand() {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!rootRef.current) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.from(".scroll-band__line", {
        opacity: 0.06,
        y: 52,
        stagger: 0.11,
        ease: "none",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 88%",
          end: "top 24%",
          scrub: 0.7,
        },
      });

      gsap.fromTo(
        ".scroll-band__track",
        { xPercent: 10 },
        {
          xPercent: -10,
          ease: "none",
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );

      const onResize = () => ScrollTrigger.refresh();
      window.addEventListener("resize", onResize);
      return () => window.removeEventListener("resize", onResize);
    },
    { scope: rootRef },
  );

  return (
    <section
      ref={rootRef}
      className="scroll-band scroll-band--podcast scroll-band--tsf"
      aria-labelledby="scroll-band-heading"
    >
      <div className="scroll-band__glow scroll-band__glow--podcast" aria-hidden />
      <div className="scroll-band__inner">
        <p id="scroll-band-heading" className="scroll-band__eyebrow scroll-band__eyebrow--tsf">
          La promesse
        </p>
        <div className="scroll-band__viewport">
          <div className="scroll-band__track">
            <p className="scroll-band__line">&laquo; Sans langue de bois,</p>
            <p className="scroll-band__line scroll-band__line--accent">
              avec du temps pour les idées qui comptent.
            </p>
            <p className="scroll-band__line">&raquo;</p>
          </div>
        </div>
      </div>
    </section>
  );
}
