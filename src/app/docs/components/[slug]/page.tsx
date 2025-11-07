import { notFound } from "next/navigation";
import Link from "next/link";
import { DocsSidebar } from "@/components/docs/sidebar";
import { CodeBlock } from "@/components/docs/code-block";
import { PixelButton } from "@/components/ui/pixel/pixel-button";
import { PixelCard, PixelCardContent, PixelCardDescription, PixelCardHeader, PixelCardTitle } from "@/components/ui/pixel/pixel-card";
import { PixelBadge } from "@/components/ui/pixel/pixel-badge";
import { PixelTabs, PixelTabsContent, PixelTabsList, PixelTabsTrigger } from "@/components/ui/pixel/pixel-tabs";
import { componentRegistry } from "@/lib/component-registry";
import { ComponentExamplePreview } from "./component-example-preview";
import { ComponentPreview } from "./component-preview";


// Component source code map - TODO: Generate this automatically
const componentSourceMap: Record<string, string> = {
  "pixel-button": `"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const pixelButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-xs font-bold uppercase tracking-wider transition-none duration-0 disabled:pointer-events-none disabled:opacity-50 pixel-borders active:translate-x-[2px] active:translate-y-[2px]",
  {
    variants: {
      variant: {
        default:
          "bg-[#ff8c00] text-white border-black hover:bg-[#ff9f1a] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none dark:bg-[#ff8c00] dark:border-[#ff8c00] dark:shadow-[4px_4px_0px_0px_rgba(255,140,0,0.5)]",
        secondary:
          "bg-[#ffd700] text-black border-black hover:bg-[#ffe44d] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none dark:bg-[#ffd700] dark:border-[#ffd700] dark:text-black",
        ghost:
          "bg-transparent border-black text-black hover:bg-black/10 dark:border-white dark:text-white dark:hover:bg-white/10",
        destructive:
          "bg-[#ff0000] text-white border-black hover:bg-[#ff3333] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none dark:bg-[#cc0000] dark:border-[#ff0000]",
      },
      size: {
        sm: "h-8 px-3 text-[10px]",
        md: "h-12 px-6 text-xs",
        lg: "h-16 px-8 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface PixelButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof pixelButtonVariants> {
  asChild?: boolean;
}

const PixelButton = React.forwardRef<HTMLButtonElement, PixelButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(pixelButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
PixelButton.displayName = "PixelButton";

export { PixelButton, pixelButtonVariants };`,
  
  "pixel-input": `"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface PixelInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const PixelInput = React.forwardRef<HTMLInputElement, PixelInputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex w-full pixel-borders border-[3px] border-black bg-white px-4 py-3 text-sm transition-none duration-0 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-black/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff8c00] focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 dark:border-[#ff8c00] dark:bg-[#1a1a1a] dark:text-white dark:placeholder:text-white/50 dark:focus-visible:ring-[#ffd700]",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
PixelInput.displayName = "PixelInput";

export { PixelInput };`,

  "pixel-badge": `"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const pixelBadgeVariants = cva(
  "inline-flex items-center pixel-borders border-2 px-3 py-1 text-xs font-bold uppercase tracking-wider transition-none duration-0",
  {
    variants: {
      variant: {
        default:
          "bg-[#ff8c00] text-white border-black dark:bg-[#ff8c00] dark:border-[#ff8c00]",
        success:
          "bg-[#00ff00] text-black border-black dark:bg-[#00cc00] dark:border-[#00ff00]",
        warning:
          "bg-[#ffd700] text-black border-black dark:bg-[#ffd700] dark:border-[#ffd700]",
        error:
          "bg-[#ff0000] text-white border-black dark:bg-[#cc0000] dark:border-[#ff0000]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface PixelBadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof pixelBadgeVariants> {}

function PixelBadge({ className, variant, ...props }: PixelBadgeProps) {
  return (
    <div className={cn(pixelBadgeVariants({ variant }), className)} {...props} />
  );
}

export { PixelBadge, pixelBadgeVariants };`,

  "pixel-card": `"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const PixelCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "pixel-borders border-4 p-6 bg-[#fffacd] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:bg-[#1a1a1a] dark:border-[#ff8c00] dark:shadow-[6px_6px_0px_0px_rgba(255,140,0,0.3)]",
      className
    )}
    {...props}
  />
));
PixelCard.displayName = "PixelCard";

const PixelCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-2 pb-4", className)}
    {...props}
  />
));
PixelCardHeader.displayName = "PixelCardHeader";

const PixelCardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-base font-bold uppercase tracking-wider font-[family-name:var(--font-pixel)] leading-relaxed dark:text-[#ffd700]",
      className
    )}
    {...props}
  />
));
PixelCardTitle.displayName = "PixelCardTitle";

const PixelCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      "text-sm text-black/80 dark:text-white/80 leading-relaxed",
      className
    )}
    {...props}
  />
));
PixelCardDescription.displayName = "PixelCardDescription";

const PixelCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("py-4", className)} {...props} />
));
PixelCardContent.displayName = "PixelCardContent";

const PixelCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center pt-4", className)}
    {...props}
  />
));
PixelCardFooter.displayName = "PixelCardFooter";

export {
  PixelCard,
  PixelCardHeader,
  PixelCardFooter,
  PixelCardTitle,
  PixelCardDescription,
  PixelCardContent,
};`,
};

export default async function ComponentPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  
  // Find component from registry
  const component = componentRegistry.find(c => c.slug === params.slug);

  if (!component) {
    notFound();
  }

  const componentSource = componentSourceMap[params.slug] || "// Component source code not available yet";

  return (
    <div className="min-h-screen bg-[#f5f5dc] dark:bg-[#000000]">
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          <DocsSidebar />
          
          <main className="flex-1 max-w-4xl">
            {/* Back Button */}
            <Link href="/docs/components">
              <PixelButton variant="ghost" size="sm" className="mb-6">
                ← Back to Components
              </PixelButton>
            </Link>

            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <h1 className="text-4xl font-bold uppercase tracking-wider font-[family-name:var(--font-pixel)] dark:text-[#ffd700]">
                  {component.title}
                </h1>
                <PixelBadge variant="default">{component.category}</PixelBadge>
              </div>
              <p className="text-lg dark:text-white/80">{component.description}</p>
            </div>

            {/* Installation */}
            {component.installation && (
              <section className="mb-8">
                <h2 className="text-2xl font-bold uppercase tracking-wider font-[family-name:var(--font-pixel)] mb-4 dark:text-[#ffd700]">
                  Installation
                </h2>
                <CodeBlock code={component.installation} language="bash" />
              </section>
            )}

            {/* Import */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold uppercase tracking-wider font-[family-name:var(--font-pixel)] mb-4 dark:text-[#ffd700]">
                Import
              </h2>
              <CodeBlock code={component.importCode} />
            </section>

            {/* Usage */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold uppercase tracking-wider font-[family-name:var(--font-pixel)] mb-4 dark:text-[#ffd700]">
                Usage
              </h2>
              <PixelTabs defaultValue="preview">
                <PixelTabsList>
                  <PixelTabsTrigger value="preview">Preview</PixelTabsTrigger>
                  <PixelTabsTrigger value="code">Code</PixelTabsTrigger>
                </PixelTabsList>
                <PixelTabsContent value="preview">
                  <div className="pixel-borders border-4 border-black p-8 bg-white dark:border-[#ff8c00] dark:bg-[#1a1a1a] min-h-[200px] flex items-center justify-center">
                    <ComponentPreview slug={params.slug} />
                  </div>
                </PixelTabsContent>
                <PixelTabsContent value="code">
                  <CodeBlock code={component.usageCode} />
                </PixelTabsContent>
              </PixelTabs>
            </section>

            {/* Component Source Code */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold uppercase tracking-wider font-[family-name:var(--font-pixel)] mb-4 dark:text-[#ffd700]">
                Component Source
              </h2>
              <p className="mb-4 text-sm dark:text-white/70">
                Copy and paste the following code into your project at <code className="bg-black/10 dark:bg-white/10 px-2 py-1 rounded">{component.componentCode}</code>
              </p>
              <CodeBlock code={componentSource} />
            </section>

            {/* Props Table */}
            {component.props && component.props.length > 0 && (
              <section className="mb-8">
                <h2 className="text-2xl font-bold uppercase tracking-wider font-[family-name:var(--font-pixel)] mb-4 dark:text-[#ffd700]">
                  Props
                </h2>
                <div className="pixel-borders border-4 border-black overflow-hidden dark:border-[#ff8c00]">
                  <table className="w-full">
                    <thead className="bg-[#ff8c00] text-white">
                      <tr>
                        <th className="text-left p-3 font-bold uppercase text-xs">Prop</th>
                        <th className="text-left p-3 font-bold uppercase text-xs">Type</th>
                        <th className="text-left p-3 font-bold uppercase text-xs">Default</th>
                        <th className="text-left p-3 font-bold uppercase text-xs">Description</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-[#1a1a1a]">
                      {component.props.map((prop, index) => (
                        <tr key={index} className="border-t-2 border-black dark:border-[#ff8c00]">
                          <td className="p-3 font-mono text-sm font-bold">{prop.name}</td>
                          <td className="p-3 font-mono text-xs text-black/70 dark:text-white/70">{prop.type}</td>
                          <td className="p-3 font-mono text-xs text-black/70 dark:text-white/70">{prop.default || '-'}</td>
                          <td className="p-3 text-sm text-black/70 dark:text-white/70">{prop.description || '-'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )}

            {/* Examples */}
            {component.examples && component.examples.length > 0 && (
              <section className="mb-8">
                <h2 className="text-2xl font-bold uppercase tracking-wider font-[family-name:var(--font-pixel)] mb-4 dark:text-[#ffd700]">
                  Examples
                </h2>
                {component.examples.map((example, index) => (
                  <div key={index} className="mb-6">
                    <h3 className="text-lg font-bold mb-2 dark:text-white">{example.title}</h3>
                    {example.description && (
                      <p className="text-sm mb-3 dark:text-white/70">{example.description}</p>
                    )}
                    <PixelTabs defaultValue="preview">
                      <PixelTabsList>
                        <PixelTabsTrigger value="preview">Preview</PixelTabsTrigger>
                        <PixelTabsTrigger value="code">Code</PixelTabsTrigger>
                      </PixelTabsList>
                      <PixelTabsContent value="preview">
                        <div className="pixel-borders border-4 border-black p-8 bg-white dark:border-[#ff8c00] dark:bg-[#1a1a1a] min-h-[150px] flex items-center justify-center">
                          <ComponentExamplePreview code={example.code} slug={params.slug} />
                        </div>
                      </PixelTabsContent>
                      <PixelTabsContent value="code">
                        <CodeBlock code={example.code} />
                      </PixelTabsContent>
                    </PixelTabs>
                  </div>
                ))}
              </section>
            )}

            {/* Accessibility */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold uppercase tracking-wider font-[family-name:var(--font-pixel)] mb-4 dark:text-[#ffd700]">
                Accessibility
              </h2>
              <PixelCard>
                <PixelCardContent className="pt-6">
                  <p className="text-sm dark:text-white/80">
                    This component is built with accessibility in mind, including proper ARIA attributes, 
                    keyboard navigation, and focus management.
                  </p>
                </PixelCardContent>
              </PixelCard>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
