"use client";

import * as React from "react";
import RippleGrid from "@/components/RippleGrid";

export function PixelRippleGrid(props: any) {
  return (
    <div className="pixel-animation-wrapper w-full h-48">
      <RippleGrid {...props} />
    </div>
  );
}

export default PixelRippleGrid;
