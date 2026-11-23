import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { render } from "astro:content";
import { getPublishedPosts } from "../lib/blog";

export async function GET(context: APIContext) {
  const posts = await getPublishedPosts();
  const site = context.site ?? new URL("https://amatelabs.xyz");
  const container = await AstroContainer.create();

  const items = await Promise.all(
    posts.map(async (post) => {
      const { Content } = await render(post);
      const content = await container.renderToString(Content);

      return {
        title: post.data.title,
        pubDate: post.data.pubDate,
        description: post.data.description,
        link: `/blog/${post.id}/`,
        content,
      };
    }),
  );

  return rss({
    title: "Amate Labs / Blog",
    description: "Notes and updates from Amate Labs.",
    site,
    items,
    customData: "<language>en-us</language>",
  });
}
