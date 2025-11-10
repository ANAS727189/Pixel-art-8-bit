"use client";

import * as React from "react";
import TiltedCard from "@/components/TiltedCard";

export function PixelTiltedCard(props: any) {
  return (
    <div className="pixel-animation-wrapper">
      <TiltedCard {...props} />
    </div>
  );
}

export default PixelTiltedCard;
