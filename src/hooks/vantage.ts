// hooks/useVantaWaves.ts
import { useEffect, useState, RefObject } from "react";
import * as THREE from "three";
import WAVES from "vanta/dist/vanta.waves.min";

const useVantaWaves = (ref: RefObject<null | HTMLElement>) => {
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    if (!vantaEffect && ref.current) {
      setVantaEffect(
        WAVES({
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
          shininess: 50.0,
          zoom: 0.84,
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect, ref]);

  return vantaEffect;
};

export default useVantaWaves;
