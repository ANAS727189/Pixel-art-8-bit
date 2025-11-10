"use client";

import * as React from "react";
import GridMotion from "@/components/GridMotion";

export function PixelGridMotion(props: any) {
  return (
    <div className="pixel-animation-wrapper w-full h-48">
      <GridMotion {...props} />
    </div>
  );
}

export default PixelGridMotion;
