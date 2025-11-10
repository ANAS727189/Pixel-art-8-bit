"use client";

import * as React from "react";
import Shuffle from "@/components/Shuffle";

export function PixelShuffleText(props: any) {
  return (
    <div className="pixel-animation-wrapper">
      <Shuffle {...props} />
    </div>
  );
}

export default PixelShuffleText;
