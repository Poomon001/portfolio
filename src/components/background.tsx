/**
 * A hero background powered by Vanta
 **/
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import WAVES from "vanta/dist/vanta.waves.min";

const Background = ({ children }: { children: React.ReactNode }) => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState<any>(0);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      setVantaEffect(
        WAVES({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x0,
          shininess: 20.0,
          zoom: 0.84,
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={vantaRef} style={{ width: "100%", height: "100vh" }}>
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </div>
  );
};

export default Background;
