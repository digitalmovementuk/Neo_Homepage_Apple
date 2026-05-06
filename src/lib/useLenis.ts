import { useEffect } from "react";
import Lenis from "lenis";

const NAV_OFFSET = 72; // matches md+ nav height; mobile nav is 64 — close enough.

export function useLenis() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const lenis = new Lenis({
      // Wheel feels snappy at ~0.85s; anchor jumps use a slightly longer
      // duration explicitly inside scrollTo() so long jumps don't blur.
      duration: 0.85,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let raf = 0;
    const tick = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    // Lenis doesn't intercept hash-anchor clicks by default — without this,
    // <a href="#section"> jumps instantly (browser-native), bypassing the
    // smooth scroll. We hijack the click to route through lenis.scrollTo
    // and offset for the fixed nav so the target lands flush.
    const onAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest?.("a") as HTMLAnchorElement | null;
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || !href.startsWith("#") || href === "#") return;
      // Don't hijack if the anchor opens a new tab or has explicit modifier
      if (anchor.target === "_blank" || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const el = document.getElementById(href.slice(1));
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el, { offset: -NAV_OFFSET, duration: 1.1 });
      // Update history so the URL still reflects the section.
      if (history.replaceState) history.replaceState(null, "", href);
    };
    document.addEventListener("click", onAnchorClick);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      document.removeEventListener("click", onAnchorClick);
    };
  }, []);
}
