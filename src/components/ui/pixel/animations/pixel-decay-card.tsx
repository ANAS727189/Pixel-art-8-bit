"use client";

import * as React from "react";
import DecayCard from "@/components/DecayCard";

export function PixelDecayCard(props: any) {
  return (
    <div className="pixel-animation-wrapper">
      <DecayCard {...props} />
    </div>
  );
}

export default PixelDecayCard;
