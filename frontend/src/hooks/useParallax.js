import { useEffect } from "react";

export default function useParallax(selector, speed = 0.2) {
  useEffect(() => {
    const element = document.querySelector(selector);

    if (!element) return;

    const handleScroll = () => {
      const offset = window.scrollY;
      element.style.transform = `translateY(${offset * speed}px)`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [selector, speed]);
}