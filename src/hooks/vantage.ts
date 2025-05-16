import { useEffect, useState, RefObject } from "react";
import * as THREE from "three";
import WAVES from "vanta/dist/vanta.waves.min";

const useVantaWaves = (ref: RefObject<HTMLElement | null>) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let effect: any;

    if (ref.current) {
      effect = WAVES({
        el: ref.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x0,
        shininess: 100.0,
        zoom: 0.84,
      });

      setReady(true);
    }

    return () => {
      if (effect) effect.destroy();
    };
  }, [ref]);

  return ready;
};

export default useVantaWaves;
