"use client";

import * as React from "react";
import Aurora from "@/components/Aurora";

export function PixelAurora(props: any) {
  return (
    <div className="pixel-animation-wrapper w-full h-48">
      <Aurora {...props} />
    </div>
  );
}

export default PixelAurora;
