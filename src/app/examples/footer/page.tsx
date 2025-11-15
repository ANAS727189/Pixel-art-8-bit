"use client";

import { PixelButton } from "@/components/ui/pixel/pixel-button";
import { 
  PixelFooter,
  PixelFooterGrid,
  PixelFooterSection,
  PixelFooterTitle,
  PixelFooterLinks,
  PixelFooterLink,
  PixelFooterDivider,
  PixelFooterBottom,
  PixelFooterCopyright,
  PixelFooterSocial,
  PixelFooterSocialLink,
  PixelFooterLogo,
  PixelFooterDescription
} from "@/components/ui/pixel/pixel-footer";

export default function FooterExamples() {
  return (
    <div className="space-y-32 pb-16">
      <div className="container mx-auto px-4 py-16 text-center space-y-4">
        <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-wider font-[family-name:var(--font-pixel)]">
          Footer Examples
        </h1>
        <p className="text-lg md:text-xl opacity-80 max-w-2xl mx-auto">
          Retro pixel-perfect footer components for your website
        </p>
      </div>

      {/* Example 1: Complete Footer with 4 Columns */}
      <section className="space-y-8">
        <div className="container mx-auto px-4 space-y-2">
          <h2 className="text-3xl font-bold uppercase tracking-wide font-[family-name:var(--font-pixel)]">
            1. Complete 4-Column Footer
          </h2>
          <p className="text-black/60 dark:text-white/60">
            Full-featured footer with multiple sections and social links
          </p>
        </div>
        
        <PixelFooter variant="default" size="md">
          <PixelFooterGrid>
            <PixelFooterSection>
              <PixelFooterTitle>Product</PixelFooterTitle>
              <PixelFooterLinks>
                <PixelFooterLink href="#">Features</PixelFooterLink>
                <PixelFooterLink href="#">Pricing</PixelFooterLink>
                <PixelFooterLink href="#">Changelog</PixelFooterLink>
                <PixelFooterLink href="#">Roadmap</PixelFooterLink>
              </PixelFooterLinks>
            </PixelFooterSection>
            
            <PixelFooterSection>
              <PixelFooterTitle>Company</PixelFooterTitle>
              <PixelFooterLinks>
                <PixelFooterLink href="#">About Us</PixelFooterLink>
                <PixelFooterLink href="#">Blog</PixelFooterLink>
                <PixelFooterLink href="#">Careers</PixelFooterLink>
                <PixelFooterLink href="#">Press Kit</PixelFooterLink>
              </PixelFooterLinks>
            </PixelFooterSection>
            
            <PixelFooterSection>
              <PixelFooterTitle>Resources</PixelFooterTitle>
              <PixelFooterLinks>
                <PixelFooterLink href="#">Documentation</PixelFooterLink>
                <PixelFooterLink href="#">Guides</PixelFooterLink>
                <PixelFooterLink href="#">API Reference</PixelFooterLink>
                <PixelFooterLink href="#">Support</PixelFooterLink>
              </PixelFooterLinks>
            </PixelFooterSection>
            
            <PixelFooterSection>
              <PixelFooterTitle>Legal</PixelFooterTitle>
              <PixelFooterLinks>
                <PixelFooterLink href="#">Privacy Policy</PixelFooterLink>
                <PixelFooterLink href="#">Terms of Service</PixelFooterLink>
                <PixelFooterLink href="#">Cookie Policy</PixelFooterLink>
                <PixelFooterLink href="#">License</PixelFooterLink>
              </PixelFooterLinks>
            </PixelFooterSection>
          </PixelFooterGrid>
          
          <PixelFooterDivider />
          
          <PixelFooterBottom>
            <PixelFooterCopyright>© 2024 Pixel UI. All rights reserved.</PixelFooterCopyright>
            <PixelFooterSocial>
              <PixelFooterSocialLink href="#" icon="🐦" />
              <PixelFooterSocialLink href="#" icon="📘" />
              <PixelFooterSocialLink href="#" icon="💼" />
              <PixelFooterSocialLink href="#" icon="📷" />
            </PixelFooterSocial>
          </PixelFooterBottom>
        </PixelFooter>
      </section>

      {/* Example 2: Footer with Logo and Description */}
      <section className="space-y-8">
        <div className="container mx-auto px-4 space-y-2">
          <h2 className="text-3xl font-bold uppercase tracking-wide font-[family-name:var(--font-pixel)]">
            2. Footer with Logo Section
          </h2>
          <p className="text-black/60 dark:text-white/60">
            Include branding and company description
          </p>
        </div>
        
        <PixelFooter variant="default" size="md">
          <PixelFooterGrid>
            <PixelFooterSection>
              <PixelFooterLogo>🎮 PIXEL UI</PixelFooterLogo>
              <PixelFooterDescription>
                Build retro-styled interfaces with our pixel-perfect component library.
              </PixelFooterDescription>
            </PixelFooterSection>
            
            <PixelFooterSection>
              <PixelFooterTitle>Quick Links</PixelFooterTitle>
              <PixelFooterLinks>
                <PixelFooterLink href="#">Home</PixelFooterLink>
                <PixelFooterLink href="#">Components</PixelFooterLink>
                <PixelFooterLink href="#">Examples</PixelFooterLink>
              </PixelFooterLinks>
            </PixelFooterSection>
            
            <PixelFooterSection>
              <PixelFooterTitle>Support</PixelFooterTitle>
              <PixelFooterLinks>
                <PixelFooterLink href="#">Help Center</PixelFooterLink>
                <PixelFooterLink href="#">Contact</PixelFooterLink>
                <PixelFooterLink href="#">Status</PixelFooterLink>
              </PixelFooterLinks>
            </PixelFooterSection>
            
            <PixelFooterSection>
              <PixelFooterTitle>Connect</PixelFooterTitle>
              <PixelFooterLinks>
                <PixelFooterLink href="#">Twitter</PixelFooterLink>
                <PixelFooterLink href="#">GitHub</PixelFooterLink>
                <PixelFooterLink href="#">Discord</PixelFooterLink>
              </PixelFooterLinks>
            </PixelFooterSection>
          </PixelFooterGrid>
          
          <PixelFooterDivider />
          
          <PixelFooterBottom>
            <PixelFooterCopyright>Made with ❤️ by Pixel UI Team</PixelFooterCopyright>
            <PixelFooterSocial>
              <PixelFooterSocialLink href="#" icon="🐦" />
              <PixelFooterSocialLink href="#" icon="🐙" />
            </PixelFooterSocial>
          </PixelFooterBottom>
        </PixelFooter>
      </section>

      {/* Example 3: Compact Footer */}
      <section className="space-y-8">
        <div className="container mx-auto px-4 space-y-2">
          <h2 className="text-3xl font-bold uppercase tracking-wide font-[family-name:var(--font-pixel)]">
            3. Compact Footer
          </h2>
          <p className="text-black/60 dark:text-white/60">
            Minimalist footer with essential links only
          </p>
        </div>
        
        <PixelFooter variant="default" size="sm">
          <PixelFooterBottom>
            <PixelFooterCopyright>© 2024 Pixel UI</PixelFooterCopyright>
            <div className="flex gap-4">
              <PixelFooterLink href="#">Privacy</PixelFooterLink>
              <PixelFooterLink href="#">Terms</PixelFooterLink>
              <PixelFooterLink href="#">Contact</PixelFooterLink>
            </div>
            <PixelFooterSocial>
              <PixelFooterSocialLink href="#" icon="🐦" />
              <PixelFooterSocialLink href="#" icon="💼" />
            </PixelFooterSocial>
          </PixelFooterBottom>
        </PixelFooter>
      </section>

      {/* Example 4: Dark Footer */}
      <section className="space-y-8">
        <div className="container mx-auto px-4 space-y-2">
          <h2 className="text-3xl font-bold uppercase tracking-wide font-[family-name:var(--font-pixel)]">
            4. Dark Footer Variant
          </h2>
          <p className="text-black/60 dark:text-white/60">
            Dark background with orange accents
          </p>
        </div>
        
        <PixelFooter variant="dark" size="md">
          <PixelFooterGrid>
            <PixelFooterSection>
              <PixelFooterLogo>⚡ RETRO APP</PixelFooterLogo>
              <PixelFooterDescription>
                The ultimate retro gaming platform for developers and designers.
              </PixelFooterDescription>
            </PixelFooterSection>
            
            <PixelFooterSection>
              <PixelFooterTitle>Platform</PixelFooterTitle>
              <PixelFooterLinks>
                <PixelFooterLink href="#">Overview</PixelFooterLink>
                <PixelFooterLink href="#">Features</PixelFooterLink>
                <PixelFooterLink href="#">Pricing</PixelFooterLink>
              </PixelFooterLinks>
            </PixelFooterSection>
            
            <PixelFooterSection>
              <PixelFooterTitle>Developers</PixelFooterTitle>
              <PixelFooterLinks>
                <PixelFooterLink href="#">Documentation</PixelFooterLink>
                <PixelFooterLink href="#">API</PixelFooterLink>
                <PixelFooterLink href="#">SDKs</PixelFooterLink>
              </PixelFooterLinks>
            </PixelFooterSection>
            
            <PixelFooterSection>
              <PixelFooterTitle>Community</PixelFooterTitle>
              <PixelFooterLinks>
                <PixelFooterLink href="#">Forum</PixelFooterLink>
                <PixelFooterLink href="#">Discord</PixelFooterLink>
                <PixelFooterLink href="#">Events</PixelFooterLink>
              </PixelFooterLinks>
            </PixelFooterSection>
          </PixelFooterGrid>
          
          <PixelFooterDivider />
          
          <PixelFooterBottom>
            <PixelFooterCopyright>© 2024 Retro App. Powered by Pixel UI.</PixelFooterCopyright>
            <PixelFooterSocial>
              <PixelFooterSocialLink href="#" icon="🐦" />
              <PixelFooterSocialLink href="#" icon="📘" />
              <PixelFooterSocialLink href="#" icon="💬" />
            </PixelFooterSocial>
          </PixelFooterBottom>
        </PixelFooter>
      </section>

      {/* Example 5: Primary Footer */}
      <section className="space-y-8">
        <div className="container mx-auto px-4 space-y-2">
          <h2 className="text-3xl font-bold uppercase tracking-wide font-[family-name:var(--font-pixel)]">
            5. Primary Branded Footer
          </h2>
          <p className="text-black/60 dark:text-white/60">
            Orange background with prominent branding
          </p>
        </div>
        
        <PixelFooter variant="primary" size="lg">
          <PixelFooterGrid>
            <PixelFooterSection>
              <PixelFooterLogo>🎯 PIXEL STUDIO</PixelFooterLogo>
              <PixelFooterDescription>
                Create stunning pixel-art interfaces with our professional tools and components.
              </PixelFooterDescription>
            </PixelFooterSection>
            
            <PixelFooterSection>
              <PixelFooterTitle>Products</PixelFooterTitle>
              <PixelFooterLinks>
                <PixelFooterLink href="#">UI Kit</PixelFooterLink>
                <PixelFooterLink href="#">Icons</PixelFooterLink>
                <PixelFooterLink href="#">Templates</PixelFooterLink>
                <PixelFooterLink href="#">Animations</PixelFooterLink>
              </PixelFooterLinks>
            </PixelFooterSection>
            
            <PixelFooterSection>
              <PixelFooterTitle>Resources</PixelFooterTitle>
              <PixelFooterLinks>
                <PixelFooterLink href="#">Blog</PixelFooterLink>
                <PixelFooterLink href="#">Tutorials</PixelFooterLink>
                <PixelFooterLink href="#">Newsletter</PixelFooterLink>
                <PixelFooterLink href="#">Community</PixelFooterLink>
              </PixelFooterLinks>
            </PixelFooterSection>
            
            <PixelFooterSection>
              <PixelFooterTitle>Company</PixelFooterTitle>
              <PixelFooterLinks>
                <PixelFooterLink href="#">About</PixelFooterLink>
                <PixelFooterLink href="#">Careers</PixelFooterLink>
                <PixelFooterLink href="#">Partners</PixelFooterLink>
                <PixelFooterLink href="#">Contact</PixelFooterLink>
              </PixelFooterLinks>
            </PixelFooterSection>
          </PixelFooterGrid>
          
          <PixelFooterDivider />
          
          <PixelFooterBottom>
            <PixelFooterCopyright>© 2024 Pixel Studio. All rights reserved.</PixelFooterCopyright>
            <PixelFooterSocial>
              <PixelFooterSocialLink href="#" icon="🐦" />
              <PixelFooterSocialLink href="#" icon="📘" />
              <PixelFooterSocialLink href="#" icon="💼" />
              <PixelFooterSocialLink href="#" icon="📷" />
              <PixelFooterSocialLink href="#" icon="🎮" />
            </PixelFooterSocial>
          </PixelFooterBottom>
        </PixelFooter>
      </section>

      {/* Example 6: Secondary Footer */}
      <section className="space-y-8">
        <div className="container mx-auto px-4 space-y-2">
          <h2 className="text-3xl font-bold uppercase tracking-wide font-[family-name:var(--font-pixel)]">
            6. Secondary Gold Footer
          </h2>
          <p className="text-black/60 dark:text-white/60">
            Gold background for premium feel
          </p>
        </div>
        
        <PixelFooter variant="secondary" size="md">
          <PixelFooterGrid>
            <PixelFooterSection>
              <PixelFooterLogo>👑 PREMIUM</PixelFooterLogo>
              <PixelFooterDescription>
                Premium pixel components for professional projects.
              </PixelFooterDescription>
            </PixelFooterSection>
            
            <PixelFooterSection>
              <PixelFooterTitle>Solutions</PixelFooterTitle>
              <PixelFooterLinks>
                <PixelFooterLink href="#">Enterprise</PixelFooterLink>
                <PixelFooterLink href="#">Startups</PixelFooterLink>
                <PixelFooterLink href="#">Agencies</PixelFooterLink>
              </PixelFooterLinks>
            </PixelFooterSection>
            
            <PixelFooterSection>
              <PixelFooterTitle>Learn</PixelFooterTitle>
              <PixelFooterLinks>
                <PixelFooterLink href="#">Documentation</PixelFooterLink>
                <PixelFooterLink href="#">Video Tutorials</PixelFooterLink>
                <PixelFooterLink href="#">Best Practices</PixelFooterLink>
              </PixelFooterLinks>
            </PixelFooterSection>
            
            <PixelFooterSection>
              <PixelFooterTitle>Support</PixelFooterTitle>
              <PixelFooterLinks>
                <PixelFooterLink href="#">Help Center</PixelFooterLink>
                <PixelFooterLink href="#">Contact Us</PixelFooterLink>
                <PixelFooterLink href="#">FAQ</PixelFooterLink>
              </PixelFooterLinks>
            </PixelFooterSection>
          </PixelFooterGrid>
          
          <PixelFooterDivider />
          
          <PixelFooterBottom>
            <PixelFooterCopyright>© 2024 Premium Pixels Inc.</PixelFooterCopyright>
            <PixelFooterSocial>
              <PixelFooterSocialLink href="#" icon="🐦" />
              <PixelFooterSocialLink href="#" icon="📘" />
            </PixelFooterSocial>
          </PixelFooterBottom>
        </PixelFooter>
      </section>
    </div>
  );
}
