import { useEffect } from "react";

export default function useScrollReveal() {
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    sections.forEach((section) => {
      section.classList.add("reveal");
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);
}
