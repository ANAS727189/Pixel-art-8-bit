"use client";

import * as React from "react";
import TargetCursor from "@/components/TargetCursor";

export function PixelTargetCursor(props: any) {
  return (
    <div className="pixel-animation-wrapper">
      <TargetCursor {...props} />
    </div>
  );
}

export default PixelTargetCursor;
