"use client";

import { useState } from "react";
import { PixelButton } from "@/components/ui/pixel/pixel-button";
import { PixelCard, PixelCardContent, PixelCardDescription, PixelCardHeader, PixelCardTitle } from "@/components/ui/pixel/pixel-card";
import { PixelInput } from "@/components/ui/pixel/pixel-input";
import { PixelBadge } from "@/components/ui/pixel/pixel-badge";
import { PixelCheckbox } from "@/components/ui/pixel/pixel-checkbox";
import { PixelTabs, PixelTabsContent, PixelTabsList, PixelTabsTrigger } from "@/components/ui/pixel/pixel-tabs";
import { PixelAccordion, PixelAccordionContent, PixelAccordionItem, PixelAccordionTrigger } from "@/components/ui/pixel/pixel-accordion";
import { PixelSelect, PixelSelectContent, PixelSelectItem, PixelSelectTrigger, PixelSelectValue } from "@/components/ui/pixel/pixel-select";

export function ComponentPreview({ slug }: { slug: string }) {
  const [checked, setChecked] = useState(false);
  const [selectValue, setSelectValue] = useState("");
  
  switch (slug) {
    case "pixel-button":
      return (
        <div className="flex gap-4 flex-wrap">
          <PixelButton>Default</PixelButton>
          <PixelButton variant="secondary">Secondary</PixelButton>
          <PixelButton variant="ghost">Ghost</PixelButton>
          <PixelButton variant="destructive">Destructive</PixelButton>
        </div>
      );
    case "pixel-card":
      return (
        <PixelCard>
          <PixelCardHeader>
            <PixelCardTitle>Card Title</PixelCardTitle>
            <PixelCardDescription>Card description</PixelCardDescription>
          </PixelCardHeader>
          <PixelCardContent>
            <p>This is the card content area.</p>
          </PixelCardContent>
        </PixelCard>
      );
    case "pixel-input":
      return <PixelInput placeholder="Enter text..." />;
    case "pixel-badge":
      return (
        <div className="flex gap-2 flex-wrap">
          <PixelBadge>Default</PixelBadge>
          <PixelBadge variant="success">Success</PixelBadge>
          <PixelBadge variant="warning">Warning</PixelBadge>
          <PixelBadge variant="error">Error</PixelBadge>
        </div>
      );
    case "pixel-checkbox":
      return (
        <div className="flex items-center space-x-2">
          <PixelCheckbox id="preview" checked={checked} onCheckedChange={(c) => setChecked(c as boolean)} />
          <label htmlFor="preview">Accept terms</label>
        </div>
      );
    case "pixel-select":
      return (
        <PixelSelect value={selectValue} onValueChange={setSelectValue}>
          <PixelSelectTrigger className="w-[200px]">
            <PixelSelectValue placeholder="Choose option" />
          </PixelSelectTrigger>
          <PixelSelectContent>
            <PixelSelectItem value="1">Option 1</PixelSelectItem>
            <PixelSelectItem value="2">Option 2</PixelSelectItem>
            <PixelSelectItem value="3">Option 3</PixelSelectItem>
          </PixelSelectContent>
        </PixelSelect>
      );
    case "pixel-tabs":
      return (
        <PixelTabs defaultValue="tab1" className="w-[400px]">
          <PixelTabsList>
            <PixelTabsTrigger value="tab1">Tab 1</PixelTabsTrigger>
            <PixelTabsTrigger value="tab2">Tab 2</PixelTabsTrigger>
          </PixelTabsList>
          <PixelTabsContent value="tab1">Content for tab 1</PixelTabsContent>
          <PixelTabsContent value="tab2">Content for tab 2</PixelTabsContent>
        </PixelTabs>
      );
    case "pixel-accordion":
      return (
        <PixelAccordion type="single" collapsible className="w-full">
          <PixelAccordionItem value="item-1">
            <PixelAccordionTrigger>Question 1</PixelAccordionTrigger>
            <PixelAccordionContent>Answer to question 1</PixelAccordionContent>
          </PixelAccordionItem>
          <PixelAccordionItem value="item-2">
            <PixelAccordionTrigger>Question 2</PixelAccordionTrigger>
            <PixelAccordionContent>Answer to question 2</PixelAccordionContent>
          </PixelAccordionItem>
        </PixelAccordion>
      );
    default:
      return <p>Component preview not available</p>;
  }
}
