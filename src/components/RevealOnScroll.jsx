import { useEffect, useRef } from "react";

export const RevealOnScroll = ({ children }) => {
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          currentRef.classList.add("visible");
          observer.unobserve(currentRef);
        }
      },
      {
        threshold: 0.01,
        rootMargin: "0px",
      }
    );

    observer.observe(currentRef);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="reveal w-full max-w-full">
      {children}
    </div>
  );
};
