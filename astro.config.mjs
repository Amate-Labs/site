import { defineConfig } from "astro/config";
import { unified } from "@astrojs/markdown-remark";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeMermaid from "rehype-mermaid";

const site = process.env.SITE_URL ?? "https://amatelabs.xyz";

const monoTheme = {
  name: "mono",
  type: "light",
  colors: {
    "editor.background": "#ffffff",
    "editor.foreground": "#000000",
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
                primaryColor: "#ffffff",
                primaryTextColor: "#000000",
                primaryBorderColor: "#000000",
                lineColor: "#000000",
                secondaryColor: "#f2f2f2",
                tertiaryColor: "#ffffff",
                edgeLabelBackground: "#ffffff",
                clusterBkg: "#ffffff",
                clusterBorder: "#000000",
                titleColor: "#000000",
                nodeTextColor: "#000000",
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
