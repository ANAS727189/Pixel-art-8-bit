"use client";

import * as React from "react";
import Plasma from "@/components/Plasma";

export function PixelPlasma(props: any) {
  return (
    <div className="pixel-animation-wrapper w-full h-48">
      <Plasma {...props} />
    </div>
  );
}

export default PixelPlasma;
