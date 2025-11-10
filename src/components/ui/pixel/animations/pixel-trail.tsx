"use client";

import * as React from "react";
import PixelTrail from "@/components/PixelTrail";

export function PixelTrailWrapper(props: any) {
  return (
    <div className="pixel-animation-wrapper">
      <PixelTrail {...props} />
    </div>
  );
}

export default PixelTrailWrapper;
