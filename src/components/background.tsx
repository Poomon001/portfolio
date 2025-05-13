import { useRef, useMemo } from "react";
import useVantaWaves from "@/hooks/vantage";
import styled from "styled-components";

const Wrapper = styled.div<{ $ready: boolean }>`
  opacity: ${({ $ready }) => ($ready ? 1 : 0)};
`;

const Background = ({ children }: { children: React.ReactNode }) => {
  const vantaRef = useRef(null);
  const ready = useVantaWaves(vantaRef);

  return (
    <div ref={vantaRef} style={{ position: "relative", zIndex: 1 }}>
      <Wrapper $ready={ready}>{children}</Wrapper>
    </div>
  );
};

export default Background;
