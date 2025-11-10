"use client";

import * as React from "react";
import Galaxy from "@/components/Galaxy";

export function PixelGalaxy(props: any) {
  return (
    <div className="pixel-animation-wrapper w-full h-48">
      <Galaxy {...props} />
    </div>
  );
}

export default PixelGalaxy;
