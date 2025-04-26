/**
 * The code follows a pattern recommended in the Next.js documentation for integrating CSS-in-JS (styled-components)
 * libraries with the nextJS App Router. It is crucial for making styled-components work correctly with Next.js
 *
 * 1. Captures styled-components styles during SSR
 * 2. Injects styles into initial HTML
 * 3. Prevents Flash of Unstyled Content (FOUC)
 **/
"use client";

import React, { useState } from "react";
import { useServerInsertedHTML } from "next/navigation";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";

export default function StyledComponentsRegistry({ children }: { children: React.ReactNode }) {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  if (typeof window !== "undefined") return <>{children}</>;

  return <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>{children}</StyleSheetManager>;
}
