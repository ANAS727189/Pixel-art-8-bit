"use client";

import * as React from "react";
import SplitText from "@/components/SplitText";

export function PixelSplitText(props: any) {
  return (
    <div className="pixel-animation-wrapper">
      <SplitText {...props} />
    </div>
  );
}

export default PixelSplitText;
