import { useRef } from "react";
import useVantaWaves from "@/hooks/vantage";

const Background = ({ children }: { children: React.ReactNode }) => {
  const vantaRef = useRef(null);
  useVantaWaves(vantaRef);

  return (
    <div ref={vantaRef} className='min-h-screen w-full'>
      {children}
    </div>
  );
};

export default Background;
