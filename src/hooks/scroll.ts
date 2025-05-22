import { useCallback } from "react";

type Scroll = (id: string) => (e: React.MouseEvent) => void;

const smoothScroll = (id: string) => {
  const section = document.querySelector(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
  return section;
};

const useScroll = () => {
  // lazy callback: cache the same memory reference avoiding unnecesry re-render in child
  const scrollTo: Scroll = useCallback((id: string) => {
    return (e: React.MouseEvent) => {
      e.preventDefault();
      smoothScroll(id);
    };
  }, []);
  return scrollTo;
};

export default useScroll;
export type { Scroll };
