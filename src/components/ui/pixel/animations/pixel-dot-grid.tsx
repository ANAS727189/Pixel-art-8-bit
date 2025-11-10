"use client";

import * as React from "react";
import DotGrid from "@/components/DotGrid";

export function PixelDotGrid(props: any) {
  return (
    <div className="pixel-animation-wrapper w-full h-48">
      <DotGrid {...props} />
    </div>
  );
}

export default PixelDotGrid;
