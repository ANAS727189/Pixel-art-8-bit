"use client";

import * as React from "react";
import SplashCursor from "@/components/SplashCursor";

export function PixelSplashCursor(props: any) {
  return (
    <div className="pixel-animation-wrapper">
      <SplashCursor {...props} />
    </div>
  );
}

export default PixelSplashCursor;
