// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

const GAID = "G-VJ35C5WR1G";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Branching Out: Design Systems",
      customCss: ["./src/styles/custom.css"],
      head: [
        {
          tag: "meta",
          attrs: {
            name: "og:image",
            content: "/og-image.jpg",
          },
        },
        {
          tag: "script",
          attrs: {
            src: `https://www.googletagmanager.com/gtag/js?id=${GAID}`,
            async: true,
          },
        },
        {
          tag: "script",
          content: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GAID}');`,
        },
      ],
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
              label: "03. Custom Components with USWDS",
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
