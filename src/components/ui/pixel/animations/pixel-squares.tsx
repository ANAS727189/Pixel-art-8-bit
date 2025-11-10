"use client";

import * as React from "react";
import Squares from "@/components/Squares";

export function PixelSquares(props: any) {
  return (
    <div className="pixel-animation-wrapper w-full h-48">
      <Squares {...props} />
    </div>
  );
}

export default PixelSquares;
