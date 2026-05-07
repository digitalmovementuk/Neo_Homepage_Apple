import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { business } from "../content";
import { useT } from "../lib/i18n";
import { LanguagePicker } from "./LanguagePicker";

type Surface = "dark" | "light";

/**
 * Fixed translucent top bar. Surface tone (dark/light) is derived from which
 * page section is currently behind the bar — each section in App.tsx carries
 * a `data-surface` attribute and we pick whichever one straddles the nav
 * baseline. Logo + link colours flip accordingly so the bar always reads.
 *
 * Includes a clean LanguagePicker (DE/EN flags) — visible right of the
 * primary CTA on desktop, inline with the hamburger on mobile.
 */
export function Nav() {
  const t = useT();
  const [surface, setSurface] = useState<Surface>("dark");
  const [scrolled, setScrolled] = useState(false);
  const [compact, setCompact] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const NAV_BAND = 80;
    let frame = 0;

    const compute = () => {
      frame = 0;
      setScrolled(window.scrollY > 12);

      const sections = document.querySelectorAll<HTMLElement>("[data-surface]");
      let active: Surface = "dark";
      for (const sec of sections) {
        const r = sec.getBoundingClientRect();
        if (r.top <= NAV_BAND && r.bottom > NAV_BAND) {
          active = (sec.dataset.surface as Surface) ?? "dark";
          break;
        }
      }
      setSurface(active);

      const hero = document.getElementById("top");
      if (hero) {
        const r = hero.getBoundingClientRect();
        setCompact(r.bottom < hero.offsetHeight * 0.5);
      }
    };

    // Coalesce scroll events into a single rAF tick so we don't trigger
    // a relayout/repaint per scroll event — was causing the bar to flicker
    // at section boundaries on iOS where wheel/scroll fires very fast.
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(compute);
    };

    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const onDark = surface === "dark";
  const linkCls = onDark
    ? "text-white/85 hover:text-white"
    : "text-ink-soft hover:text-ink";
  const ctaSize = compact ? "text-[13px] px-4 py-2" : "text-[14px] px-5 py-2.5";
  const ctaCls = `inline-flex items-center gap-2 rounded-full bg-[#0071E3] hover:bg-[#0077ED] text-white font-medium transition-all duration-300 ${ctaSize}`;
  const hamburgerCls = onDark
    ? "border-white/30 bg-white/10 text-white"
    : "border-ink/15 bg-white/70 text-ink";

  const barHeightCls = compact ? "h-[48px] md:h-[56px]" : "h-[80px] md:h-[100px]";
  const logoHeightCls = compact ? "h-6 sm:h-7" : "h-9 sm:h-12";
  const linkSizeCls = compact ? "text-[13px]" : "text-[15px]";
  const linkGapCls = compact ? "gap-6 lg:gap-8" : "gap-7 lg:gap-10";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          scrolled
            ? onDark
              ? "nav-glass-dark"
              : "nav-glass-light"
            : "bg-transparent"
        }`}
      >
        <div className={`container-v3 flex items-center justify-between transition-all duration-300 ${barHeightCls}`}>
          <a href="#top" className="flex items-center gap-3" aria-label="NEO THE AGENCY home">
            <img
              src={`${import.meta.env.BASE_URL}brand/${
                onDark ? "logo-color-negative" : "logo-color-positive"
              }.png`}
              alt="NEO THE AGENCY"
              className={`w-auto transition-all duration-300 ${logoHeightCls}`}
              draggable={false}
            />
          </a>

          <nav className={`hidden md:flex items-center transition-all duration-300 ${linkGapCls}`}>
            {t.nav.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`font-semibold tracking-tight transition-all duration-300 ${linkSizeCls} ${linkCls}`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <LanguagePicker surface={surface} compact={compact} />

            <a href="#contact" className={`hidden md:inline-flex ${ctaCls}`}>
              {t.nav.cta} <ArrowRight size={13} />
            </a>

            <button
              className={`md:hidden grid h-10 w-10 place-items-center rounded-pill border backdrop-blur transition-colors ${hamburgerCls}`}
              onClick={() => setOpen(true)}
              aria-label={t.nav.menuOpen}
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              className="fixed inset-0 z-[60] bg-plum/70 backdrop-blur"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              key="drawer"
              className="fixed inset-y-0 right-0 z-[70] w-[88%] max-w-[420px] surface-dark p-6"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center justify-between">
                <img
                  src={`${import.meta.env.BASE_URL}brand/logo-color-negative.png`}
                  alt="NEO THE AGENCY"
                  className="h-7 w-auto"
                />
                <button
                  className="grid h-10 w-10 place-items-center rounded-pill border border-white/20 text-white"
                  onClick={() => setOpen(false)}
                  aria-label={t.nav.menuClose}
                >
                  <X size={18} />
                </button>
              </div>

              <nav className="mt-12 flex flex-col">
                {t.nav.links.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-4 text-[26px] font-bold tracking-tight border-b border-white/10 text-white"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.06 * i + 0.08 }}
                  >
                    {l.label}
                  </motion.a>
                ))}
              </nav>

              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-8 w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#0071E3] hover:bg-[#0077ED] text-white text-[15px] font-medium py-3 transition-colors"
              >
                {t.nav.cta} <ArrowRight size={15} />
              </a>

              <div className="mt-8 flex justify-center">
                <LanguagePicker surface="dark" />
              </div>

              <div className="mt-10 text-[13px] text-white/65 space-y-1.5">
                <p>{business.phone}</p>
                <p>{business.email}</p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
