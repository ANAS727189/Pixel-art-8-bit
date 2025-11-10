"use client";

import * as React from "react";
import ImageTrail from "@/components/ImageTrail";

export function PixelImageTrail(props: any) {
  return (
    <div className="pixel-animation-wrapper">
      <ImageTrail {...props} />
    </div>
  );
}

export default PixelImageTrail;
