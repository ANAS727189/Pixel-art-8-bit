"use client";

import * as React from "react";
import StickerPeel from "@/components/StickerPeel";

export function PixelStickerPeel(props: any) {
  return (
    <div className="pixel-animation-wrapper">
      <StickerPeel {...props} />
    </div>
  );
}

export default PixelStickerPeel;
