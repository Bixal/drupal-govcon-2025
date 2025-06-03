// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Branching Out: Design Systems",
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
              slug: "",
            },
            {
              label: "Creating components",
              slug: "",
            },
            {
              label: "Documentation and governance",
              slug: "",
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
