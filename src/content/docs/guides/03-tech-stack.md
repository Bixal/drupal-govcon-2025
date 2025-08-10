---
title: Choosing Your Tech Stack
description: Considerations for deciding what tools to use for your design system.
---

Creating a design system comes with a lot of technical considerations. Choosing the right tools can make your design system easy to maintain and scale. Picking the wrong ones can make it challenging. Here are some key things to consider.

## General Considerations

- **Know Your Audience and Their Needs**: Identify the problems your design system should fix. Ask yourself these questions:
  - Are your current apps inconsistent?
  - Do you need to improve performance?
  - Will you need to accommodate multiple frameworks or platforms?
  - Does cost matter? Also think about the cost to maintain or migrate.
  - What would lower the barrier to adoption?

  Defining these problems will help you choose the right tools.

- **Start Small, Focus on Adoption, and Iterate**: Start with a minimal set of essential components and features, focus on promoting and integrating the design system across your teams to build a foundation, and continuously gather feedback to improve the design system.

## Core Components

### Design Tools

Choose design tools based on the needs of your design team and the ease of integration with your development workflow.

- [**Figma**](https://www.figma.com/): A popular choice for collaborative design, especially for creating shared design assets and components.
- [**Zeroheight**](https://zeroheight.com/): A static documentation site generator that integrates well with design systems for generating and hosting documentation.
- [**Tokens**](https://designsystem.digital.gov/design-tokens/): Manage color, typography, and other design tokens to ensure consistency across your design and code.

### Dev Tools

Choose tools that align with your team's knowledge and the nature of your projects.

#### Component Libraries

Pre-built UI components that can be easily integrated into your projects.

- [**Storybook**](https://storybook.js.org/): An open-source tool for building and maintaining React, Vue, Angular, or web components. It allows you to develop, test, document, and share components in an isolated environment.
- [**StencilJS**](https://stenciljs.com/): A platform for creating, testing, and sharing UI components, with strong integrations with other tools and platforms.

#### Frameworks

- **HTML5**: Consider this web native method if you are looking for minimal dependencies and simplicity.
- **JS libraries**: Consider frameworks like React, Vue, or Angular that can enhance your design system’s functionality and maintainability.
- **Web Components**: Consider if web components provide a most agnostic solution for creating highly reusable and encapsulated elements.
  - [**Lit**](https://lit.dev/): Web components with minimal layer for improving the developer experience. Opposite of StencilJS, which comes with everything you need. Important if you don't want too much all at once or want to be tied to specific tool.
  - [**Open Web Components**](https://open-wc.org/): Open source tools and libraries for developing web components.

#### Testing

Ensure robust testing to maintain quality and reliability.

- **Unit Testing**: Verify the functionality of individual components using a tool like React Testing Library, Mocha, Vitest, or Jest.
- **End-to-End Testing**: Ensure the system works as a whole using a tool such as Cypress.
- **Accessibility (a11y)**: Ensure compliance with accessibility standards using a tool such as sA11y.
- **Visual Regression**: Maintain consistency in visual presentation with automated testing using a tool such as Chromatic.

#### Tokens

Make sure that frontend development follows the design language using Sass variables or CSS custom properties.

If you need to support many different platforms, consider [**Style Dictionary**](https://styledictionary.com/). It helps you use your tokens in iOS, Android, and more.

### Documentation

Effective documentation is crucial for ensuring adoption and consistency.

- [**Storybook**](https://storybook.js.org/): All in one solution for documentation and component library.
- [**Starlight**](https://starlight.astro.build/): A lightweight, fast, accessible and easy-to-use documentation site generator using Astro.
- [**Docusaurus**](https://docusaurus.io/): A popular open-source tool for building documentation sites, maintained by Facebook. Supports Markdown, JSX, and multiple languages.

## Core Strategies

### Define Your Approach to Customization

Decide what level of customization is allowed and under what circumstances. Consider:

- How customization can improve usability without diluting the brand.
- How customization options can improve reusability without overcomplicating the design system or making it hard to maintain.
- Include documentation for guidelines on customization and what to avoid.
- Define recommendations for customizing components or extending the design system.
- Create a policy for supporting edge cases. Outline possible limitations and explain how requests are handled. Be consistent and clear about expectations.
- Encourage contributions to improve the flexibility of the design system but hold to your principles.

### Change Management and Version Control

Version control ensures you can manage changes without breaking existing implementations.

- **Semantic Versioning (SemVer)**: Use semantic versioning to manage updates and ensure compatibility. Major versions for breaking changes, minor versions for new features, and patch versions for bug fixes.
- **Changelog**: Maintain a changelog to document what has changed in each version. This is crucial for both developers and designers to understand the impact of changes.

### Quality and Testing Strategies

Test your design system often. Use rigorous testing and version control to keep it reliable and easy to maintain.

- **Web Accessibility (a11y)**: Regularly perform accessibility audits and fix issues to make sure your design system is accessible to all users.
- **User Testing**: Conduct user testing to gather feedback and ensure that your design system meets the needs of end-users.
- **Quality Assurance**: Implement quality assurance practices to ensure that your design system remains robust and reliable.
- **Peer Reviews**: Regular peer reviews can help catch issues early and ensure that the design system meets quality standards.

## Distribution

Distribute your design system in ways that make it accessible, usable, and maintainable. Here are some common methods and tools:

### Hosting the Design System

#### Package Managers

- [**NPM**](https://www.npmjs.com/): Publish your design system as an NPM package to allow other developers to easily install and use your components via `npm install`.
- [**PNPM**](https://pnpm.io/): pnpm is a fast, efficient package manager that saves disk space, speeds up installs, and helps manage multiple repo's in one (monorepos).
- [**Yarn**](https://yarnpkg.com/): Another package manager that can be used to distribute your design system on NPM. It offers quick installs, support for multiple repo's (monorepos), and dependency caching.
- [**GitHub Package**](https://docs.github.com/en/packages): Host your design system as a package on GitHub, making it easy to manage and distribute through Git.

#### Continuous Integration/Continuous Deployment (CI/CD)

Automate the build, test, deploy, and distribution of your design system.

- **GitHub Actions**: Use GitHub Actions to automate testing, building, and deploying changes.
- **CircleCI**: Use CircleCI to automate continuous integration and continuous deployment processes.

### Managing Access

- **Public vs. Private**: Decide whether your design system will be publicly accessible or restricted to internal use.
- **Authentication**: Use methods like OAuth or JWT to control access to the design system and documentation, especially if it's meant for internal teams.

## Further Reading

- [Awesome Design Systems: A curated list of bookmarks, resources, and articles about design systems focused on developers](https://github.com/klaufel/awesome-design-systems?tab=readme-ov-file#ui-design-tools)
