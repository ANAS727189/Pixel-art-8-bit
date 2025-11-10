"use client";

import * as React from "react";
import LetterGlitch from "@/components/LetterGlitch";

export function PixelLetterGlitch(props: any) {
  return (
    <div className="pixel-animation-wrapper">
      <LetterGlitch {...props} />
    </div>
  );
}

export default PixelLetterGlitch;
