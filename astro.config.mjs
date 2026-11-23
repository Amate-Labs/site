import { defineConfig } from "astro/config";
import { unified } from "@astrojs/markdown-remark";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeMermaid from "rehype-mermaid";

const site = process.env.SITE_URL ?? "https://amatelabs.xyz";

const monoTheme = {
  name: "mono",
  type: "dark",
  colors: {
    "editor.background": "#000000",
    "editor.foreground": "#ffffff",
  },
  tokenColors: [],
};

export default defineConfig({
  site,
  trailingSlash: "always",
  markdown: {
    processor: unified({
      smartypants: false,
      remarkPlugins: [remarkMath],
      rehypePlugins: [
        [rehypeKatex, { throwOnError: false }],
        [
          rehypeMermaid,
          {
            strategy: "inline-svg",
            mermaidConfig: {
              theme: "neutral",
              themeVariables: {
                fontFamily: '"Times New Roman", Times, serif',
                primaryColor: "#000000",
                primaryTextColor: "#ffffff",
                primaryBorderColor: "#ffffff",
                lineColor: "#ffffff",
                secondaryColor: "#1a1a1a",
                tertiaryColor: "#000000",
                edgeLabelBackground: "#000000",
                clusterBkg: "#000000",
                clusterBorder: "#ffffff",
                titleColor: "#ffffff",
                nodeTextColor: "#ffffff",
              },
            },
          },
        ],
      ],
    }),
    syntaxHighlight: { type: "shiki", excludeLangs: ["mermaid"] },
    shikiConfig: {
      theme: monoTheme,
      wrap: true,
    },
  },
});
