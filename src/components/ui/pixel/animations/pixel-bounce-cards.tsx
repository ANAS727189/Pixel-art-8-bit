"use client";

import * as React from "react";
import BounceCards from "@/components/BounceCards";

export function PixelBounceCards(props: any) {
  return (
    <div className="pixel-animation-wrapper">
      <BounceCards {...props} />
    </div>
  );
}

export default PixelBounceCards;
