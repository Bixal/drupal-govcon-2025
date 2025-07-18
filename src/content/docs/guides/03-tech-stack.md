---
title: Choosing Your Tech Stack
description: Considerations for deciding what tools to use for your design system.
---

Creating a design system involves a lot of technical considerations. The right tech stack can make the difference between a system that's maintainable and scalable and one that becomes a burden. Here are some key aspects to consider.

## General Considerations

- **Identify Your Audience and Their Needs**: Identify the specific challenges your design system needs to address. Are you dealing with inconsistency across existing apps? Is the goal to improve front-end performance? Will you need to accommodate multiple frameworks or platforms? Are cost considerations involved? What would lower the barrier to adoption? Defining these problems will help you choose the right tools.

- **Start Small, Focus on Adoption, and Iterate**: Start with a minimal set of essential components and features, focus on promoting and integrating the design system across your teams to build a foundation, and continuously gather feedback to improve the design system.

## Core Components

### Design Tools

Choose design tools based on the needs of your design team and the ease of integration with your development workflow.

- [**Figma**](https://www.figma.com/): A popular choice for collaborative design, especially for creating shared design assets and components.
- [**Zeroheight**](https://zeroheight.com/): A static documentation site generator that integrates well with design systems for generating and hosting documentation.
- [**Tokens**](https://designsystem.digital.gov/design-tokens/): Manage color, typography, and other design tokens to ensure consistency across your design and code.

### Dev Tools

Select development tools that align with your team's proficiency and the nature of your projects.

#### Component Libraries

Pre-built UI components that can be easily integrated into your projects.

- [**Storybook**](https://storybook.js.org/): An open-source tool for building and maintaining React, Vue, Angular, or web components. It allows you to develop, test, document, and share components in an isolated environment.
- [**StencilJS**](https://stenciljs.com/): A platform for creating, testing, and sharing UI components, with strong integrations with other tools and platforms.

#### Frameworks

- **HTML5**: Consider this web native method if you are looking for minimal dependencies and simplicity.
- **JS libraries**: Consider frameworks like React, Vue, or Angular that can enhance your design system’s functionality and maintainability.
- **Web Components**: Consider if web components provide a most agnostic soltution for creating highly reusable and encapsulated elements.

#### Testing

Ensure robust testing to maintain quality and reliability.

- **Unit Testing**: Verify the functionality of individual components using a tool such a React Testing Library or Jest.
- **End-to-End Testing**: Ensure the system works as a whole using a tool such as Cypress.
- **Accessibility (a11y)**: Ensure compliance with accessibility standards using a tool such as sA11y.
- **Visual Regression**: Maintain consistency in visual presentation with automated testing using a tool such as Chromatic.

#### Tokens

Ensure that frontend development adheres to the design language using methods such as Sass variables or CSS custom properties.

### Documentation

Effective documentation is crucial for ensuring adoption and consistency.

- [**Storybook**](): All in one solution for documentation and component library.
- [**Starlight**](https://starlight.astro.build/): A lightweight, fast, accessible and easy-to-use documentation site generator using Astro.
- [**Docusaurus**](https://docusaurus.io/): A popular open-source tool for building documentation sites, maintained by Facebook. Supports Markdown, JSX, and multiple languages.

## Core Strategies

### Define Your Approach to Customization

Decide what level of customization is allowed and under what circumstances. Consider:

- How customization can improve usability without diluting the brand.
- How customization options can improve reusability without overcomplicating the design system or making it hard to maintain.
- Include documentation for guidelines on customization and what to avoid.
- Define recommendations for customizing components or extending the design system.
- Define a policy for edge case support.
- Encourage contributions to improve the flexibility of the design system but hold to your principles.

### Change Management and Version Control

Version control ensures you can manage changes without breaking existing implementations.

- **Semantic Versioning (SemVer)**: Use semantic versioning to manage updates and ensure compatibility. Major versions for breaking changes, minor versions for new features, and patch versions for bug fixes.
- **Changelog**: Maintain a changelog to document what has changed in each version. This is crucial for both developers and designers to understand the impact of changes.

### Quality and Testing Strategies

Ensuring the quality and maintainability of your design system involves rigorous testing and versioning. Implement comprehensive testing to ensure reliability.

- **Web Accessibility (a11y)**: Regularly perform accessibility audits and fix issues to make sure your design system is accessible to all users.
- **User Testing**: Conduct user testing to gather feedback and ensure that your design system meets the needs of end-users.
- **Quality Assurance**: Implement quality assurance practices to ensure that your design system remains robust and reliable.
- **Peer Reviews**: Regular peer reviews can help catch issues early and ensure that the design system meets quality standards.

## Distribution

Effectively distributing a design system on the web involves several key approaches and tools to ensure it is accessible, usable, and maintainable. Here are some common methods and tools:

### Hosting the Design System

#### Package Managers

- [**NPM**](https://www.npmjs.com/): Publish your design system as an NPM package to allow other developers to easily install and use your components via `npm install`.
- [**Yarn**](https://yarnpkg.com/): Similar to NPM, Yarn is another package manager that can be used to distribute your design system.
- [**GitHub Package**](https://docs.github.com/en/packages): Host your design system as a package on GitHub, making it easy to manage and distribute through Git.

#### Continuous Integration/Continuous Deployment (CI/CD)

Automate the build, test, deploy, and distribution of your design system.

- **GitHub Actions**: Use GitHub Actions to automate testing, building, and deploying changes.
- **CircleCI**: Use CircleCI to automate continuous integration and continuous deployment processes.

### Access Control

- **Public vs. Private**: Decide whether your design system will be publicly accessible or restricted to internal use.
- **Authentication**: Use authentication mechanisms (e.g., OAuth, JWT) to control access to the design system and documentation, especially if it is intended for internal use.

## Further Reading

- [Awesome Design Systems: A curated list of bookmarks, resources, and articles about design systems focused on developers](https://github.com/klaufel/awesome-design-systems?tab=readme-ov-file#ui-design-tools)
