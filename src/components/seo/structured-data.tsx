export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://pixel-ui.vercel.app/#website",
        "url": "https://pixel-ui.vercel.app/",
        "name": "Pixel UI - 8-Bit Retro Component Library",
        "description": "A complete pixel-art/8-bit retro UI component library for React and Next.js",
        "publisher": {
          "@id": "https://pixel-ui.vercel.app/#organization"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "Organization",
        "@id": "https://pixel-ui.vercel.app/#organization",
        "name": "Team Parashuram",
        "url": "https://pixel-ui.vercel.app/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://pixel-ui.vercel.app/logo.png"
        },
        "founder": {
          "@type": "Person",
          "name": "Shardendu Mishra",
          "url": "https://mishrashardendu22.is-a.dev/",
          "sameAs": [
            "https://github.com/MishraShardendu22/",
            "https://www.linkedin.com/in/shardendumishra22/",
            "https://x.com/Shardendu_M"
          ]
        }
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Pixel UI",
        "description": "8-Bit Retro Component Library for React and Next.js",
        "codeRepository": "https://github.com/Team-Parashuram/Pixel-art-8-bit",
        "programmingLanguage": ["TypeScript", "React", "Next.js"],
        "runtimePlatform": "Web Browser",
        "license": "https://github.com/Team-Parashuram/Pixel-art-8-bit/blob/main/LICENSE",
        "author": {
          "@type": "Person",
          "name": "Shardendu Mishra",
          "url": "https://mishrashardendu22.is-a.dev/"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://pixel-ui.vercel.app/#webpage",
        "url": "https://pixel-ui.vercel.app/",
        "name": "Pixel UI - 8-Bit Retro Component Library",
        "isPartOf": {
          "@id": "https://pixel-ui.vercel.app/#website"
        },
        "description": "Build nostalgic web experiences with pixel-perfect components inspired by classic 8-bit games",
        "inLanguage": "en-US"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
