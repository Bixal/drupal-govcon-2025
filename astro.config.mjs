// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Branching Out: Design Systems",
      customCss: ["./src/styles/custom.css"],
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Introduction", slug: "guides/01-intro" },
            {
              label: "USWDS as a foundation",
              slug: "guides/02-uswds-foundation",
            },
            {
              label: "Choosing your tech stack",
              slug: "guides/03-tech-stack",
            },
            {
              label: "Create your own design language",
              slug: "guides/04-design-language",
            },
            {
              label: "Creating components",
              slug: "guides/05-creating-components",
            },
            {
              label: "Documentation and governance",
              slug: "guides/06-governance",
            },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
