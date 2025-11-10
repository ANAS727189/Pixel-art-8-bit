"use client";

import * as React from "react";
import TextPressure from "@/components/TextPressure";

export function PixelTextPressure(props: any) {
  return (
    <div className="pixel-animation-wrapper">
      <TextPressure {...props} />
    </div>
  );
}

export default PixelTextPressure;
