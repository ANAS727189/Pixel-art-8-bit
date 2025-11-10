"use client";

import * as React from "react";
import TrueFocus from "@/components/TrueFocus";

export function PixelTrueFocus(props: any) {
  return (
    <div className="pixel-animation-wrapper">
      <TrueFocus {...props} />
    </div>
  );
}

export default PixelTrueFocus;
