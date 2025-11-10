"use client";

import * as React from "react";
import MetaBalls from "@/components/MetaBalls";

export function PixelMetaBalls(props: any) {
  return (
    <div className="pixel-animation-wrapper w-full h-48">
      <MetaBalls {...props} />
    </div>
  );
}

export default PixelMetaBalls;
