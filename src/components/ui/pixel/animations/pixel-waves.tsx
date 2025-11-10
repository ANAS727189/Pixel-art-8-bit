"use client";

import * as React from "react";
import Waves from "@/components/Waves";

export function PixelWaves(props: any) {
  return (
    <div className="pixel-animation-wrapper w-full h-48">
      <Waves {...props} />
    </div>
  );
}

export default PixelWaves;
