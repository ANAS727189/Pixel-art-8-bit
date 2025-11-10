"use client";

import * as React from "react";
import RotatingText from "@/components/RotatingText";

export function PixelRotatingText(props: any) {
  return (
    <div className="pixel-animation-wrapper">
      <RotatingText {...props} />
    </div>
  );
}

export default PixelRotatingText;
