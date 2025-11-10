"use client";

import * as React from "react";
import Ribbons from "@/components/Ribbons";

export function PixelRibbons(props: any) {
  return (
    <div className="pixel-animation-wrapper w-full h-48">
      <Ribbons {...props} />
    </div>
  );
}

export default PixelRibbons;
