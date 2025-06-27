# Branching Out: Create & maintain your own design system

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

A guide for starting your own design system. This project is hosted on netlify: https://drupal-govcon-2025.netlify.app/

## Project Structure

Inside this project, you'll see the following folders and files:

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   ├── docs/
│   └── content.config.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

## Working with Git

### Naming Branches

Use the project prefix, the GitHub issue number, and a brief summary of the changes.

```
feature/dg2025-{ISSUE_NO}-{BRIEF_DESCRIPTION}
```

**Example**

```
feature/dg2025-20-font-size
```

## Updating Content

### Navigation

To update the Guide sidebar navigation go to:
`astro.config.mjs`

## Commands

All commands are run from the root of the project, from a terminal:

| Command                      | Action                                           |
| :--------------------------- | :----------------------------------------------- |
| `npm install`                | Installs dependencies                            |
| `npm run dev` or `npm start` | Starts local dev server at `localhost:4321`      |
| `npm run format:check`       | Checks code formatting                           |
| `npm run format:fix`         | Fixes code formatting issues                     |
| `npm run build`              | Build your production site to `./dist/`          |
| `npm run preview`            | Preview your build locally, before deploying     |
| `npm run astro ...`          | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help`    | Get help using the Astro CLI                     |

## Additional resources

- [Starlight’s docs](https://starlight.astro.build/)
- [Astro documentation](https://docs.astro.build)
- [Astro Discord server](https://astro.build/chat)
