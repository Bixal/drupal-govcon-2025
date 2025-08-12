// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Branching Out: Design Systems",
      customCss: ["./src/styles/custom.css"],
      components: {
        PageFrame: "./src/components/PageFrame.astro",
      },
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
              label: "Your design language",
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
          label: "Exercises",
          items: [
            {
              label: "00. Local Setup",
              slug: "exercises/00",
            },
            {
              label: "01. USWDS Packages",
              slug: "exercises/01",
            },
            {
              label: "02. Translating Wireframes",
              slug: "exercises/02",
            },
            {
              label: "03. ",
              slug: "exercises/03",
            },
          ],
        },
        {
          label: "Templates",
          autogenerate: { directory: "templates" },
        },
      ],
    }),
  ],
});
