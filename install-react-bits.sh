#!/bin/bash

# React Bits Component Installation Script

echo "Installing React Bits components..."

# Text Components
components=(
  "SplitText-TS-TW"
  "BlurText-TS-TW"
  "CircularText-TS-TW"
  "Shuffle-TS-TW"
  "ShinyText-TS-TW"
  "TextPressure-TS-TW"
  "CurvedLoop-TS-TW"
  "FuzzyText-TS-TW"
  "GradientText-TS-TW"
  "FallingText-TS-TW"
  "TextCursor-TS-TW"
  "DecryptedText-TS-TW"
  "TrueFocus-TS-TW"
  "ScrollFloat-TS-TW"
  "ScrollReveal-TS-TW"
  "ASCIIText-TS-TW"
  "ScrambledText-TS-TW"
  "RotatingText-TS-TW"
  "GlitchText-TS-TW"
  "ScrollVelocity-TS-TW"
  "VariableProximity-TS-TW"
  "CountUp-TS-TW"
  
  # Animated Components
  "AnimatedContent-TS-TW"
  "FadeContent-TS-TW"
  "ElectricBorder-TS-TW"
  "PixelTransition-TS-TW"
  "GlareHover-TS-TW"
  "LogoLoop-TS-TW"
  "TargetCursor-TS-TW"
  "LaserFlow-TS-TW"
  "MagnetLines-TS-TW"
  "GhostCursor-TS-TW"
  "GradualBlur-TS-TW"
  "ClickSpark-TS-TW"
  "Magnet-TS-TW"
  "StickerPeel-TS-TW"
  "PixelTrail-TS-TW"
  "Cubes-TS-TW"
  "MetallicPaint-TS-TW"
  "Noise-TS-TW"
  "ShapeBlur-TS-TW"
  "Crosshair-TS-TW"
  "ImageTrail-TS-TW"
  "Ribbons-TS-TW"
  "SplashCursor-TS-TW"
  "MetaBalls-TS-TW"
  "BlobCursor-TS-TW"
  "StarBorder-TS-TW"
  
  # Layout Components
  "AnimatedList-TS-TW"
  "ScrollStack-TS-TW"
  "BubbleMenu-TS-TW"
  "MagicBento-TS-TW"
  "CircularGallery-TS-TW"
  "CardNav-TS-TW"
  "Stack-TS-TW"
  "FluidGlass-TS-TW"
  "PillNav-TS-TW"
  "TiltedCard-TS-TW"
  "Masonry-TS-TW"
  "GlassSurface-TS-TW"
  "DomeGallery-TS-TW"
  "ChromaGrid-TS-TW"
  "Folder-TS-TW"
  "StaggeredMenu-TS-TW"
  "ModelViewer-TS-TW"
  "Lanyard-TS-TW"
  "ProfileCard-TS-TW"
  "Dock-TS-TW"
  "GooeyNav-TS-TW"
  "PixelCard-TS-TW"
  "Carousel-TS-TW"
  "SpotlightCard-TS-TW"
  "FlyingPosters-TS-TW"
  "CardSwap-TS-TW"
  "GlassIcons-TS-TW"
  "DecayCard-TS-TW"
  "FlowingMenu-TS-TW"
  "ElasticSlider-TS-TW"
  "Counter-TS-TW"
  "InfiniteMenu-TS-TW"
  "Stepper-TS-TW"
  "BounceCards-TS-TW"
  
  # Background/Effect Components
  "LiquidEther-TS-TW"
  "Prism-TS-TW"
  "DarkVeil-TS-TW"
  "Silk-TS-TW"
  "LightRays-TS-TW"
  "PixelBlast-TS-TW"
  "ColorBends-TS-TW"
  "Aurora-TS-TW"
  "Plasma-TS-TW"
  "Particles-TS-TW"
  "GradientBlinds-TS-TW"
  "GridScan-TS-TW"
  "Beams-TS-TW"
  "Lightning-TS-TW"
  "PrismaticBurst-TS-TW"
  "Galaxy-TS-TW"
  "Dither-TS-TW"
  "FaultyTerminal-TS-TW"
  "RippleGrid-TS-TW"
  "DotGrid-TS-TW"
  "Threads-TS-TW"
  "Hyperspeed-TS-TW"
  "Iridescence-TS-TW"
  "Waves-TS-TW"
  "GridDistortion-TS-TW"
  "Ballpit-TS-TW"
  "Orb-TS-TW"
  "LetterGlitch-TS-TW"
  "GridMotion-TS-TW"
  "Squares-TS-TW"
  "LiquidChrome-TS-TW"
  "Balatro-TS-TW"
)

total=${#components[@]}
success=0
failed=0
skipped=0

for i in "${!components[@]}"; do
  component="${components[$i]}"
  current=$((i + 1))
  
  echo ""
  echo "[$current/$total] Installing $component..."
  
  if npx shadcn@latest add "@react-bits/$component" --yes --overwrite 2>&1 | tee /tmp/install_output.txt; then
    if grep -q "Skipped" /tmp/install_output.txt; then
      echo "⊘ Skipped: $component"
      ((skipped++))
    else
      echo "✓ Success: $component"
      ((success++))
    fi
  else
    echo "✗ Failed: $component"
    ((failed++))
  fi
done

echo ""
echo "================================"
echo "Installation Summary:"
echo "Total: $total"
echo "Success: $success"
echo "Failed: $failed"
echo "Skipped: $skipped"
echo "================================"
