import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

interface Props {
  scrollContainer: React.RefObject<HTMLDivElement>;
}

const SmoothScrollProvider = ({ scrollContainer }: Props) => {
  useEffect(() => {
    if (!scrollContainer.current) return;

    const wrapper = scrollContainer.current;
    const content = wrapper.firstElementChild as HTMLElement;

    if (!content) return;

    const lenis = new Lenis({
      wrapper,
      content,

      duration: 2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, [scrollContainer]);

  return null;
};

export default SmoothScrollProvider;
