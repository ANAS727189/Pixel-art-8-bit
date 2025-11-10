"use client";

import * as React from "react";
import BlobCursor from "@/components/BlobCursor";

export function PixelBlobCursor(props: any) {
  return (
    <div className="pixel-animation-wrapper">
      <BlobCursor {...props} />
    </div>
  );
}

export default PixelBlobCursor;
