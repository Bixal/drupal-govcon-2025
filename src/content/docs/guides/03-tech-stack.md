---
title: Choosing your Tech Stack
description: Considerations for deciding what tools to use.
---

Creating a design system involves a lot of technical considerations. The right tech stack can make the difference between a system that's maintainable and scalable and one that becomes a burden. Here are some key aspects to consider.

## General Considerations

### Problems to Solve

Identify the specific challenges your design system needs to address. Are you dealing with inconsistency across existing apps? Is the goal to improve front-end performance? Will you need to accommodate multiple frameworks or platforms? Defining the problems will help you choose the right tools.

### Define your approach to customization

Decide whether customization is allowed and under what circumstances. Consider:

- How customization can improve usability without diluting the brand.
- Tools and guidelines for customizing components.

## Core Components

### Design tools

Choose design tools based on the needs of your design team and the ease of integration with your development workflow.

- **Figma**: A popular choice for collaborative design, especially for creating shared design assets and components.
- **Zeroheight**: A static documentation site generator that integrates well with design systems for generating and hosting documentation.
- **Tokens**: Manage color, typography, and other design tokens to ensure consistency across your design and code.

### Dev Tools

Select development tools that align with your team's proficiency and the nature of your projects.

#### Component libraries

Pre-built UI components that can be easily integrated into your projects.

- [**Storybook**](https://storybook.js.org/): An open-source tool for building and maintaining React, Vue, Angular, or web components. It allows you to develop, test, document, and share components in an isolated environment.
- [**StencilJS**](https://stenciljs.com/): A platform for creating, testing, and sharing UI components, with strong integrations with other tools and platforms.

#### Frameworks

- **JS libraries**: Consider frameworks like React, Vue, or Angular that can enhance your design system’s functionality and maintainability.
- **Web Components**: Consider if web components are necessary for creating highly reusable and encapsulated elements.

#### Testing

Implementing robust testing strategies is essential.

- **Unit Testing**: Verify the functionality of individual components.
- **End-to-End Testing**: Ensure the system works as a whole.
- **Accessibility (a11y)**: Ensure compliance with accessibility standards.
- **Visual Regression**: Maintain consistency in visual presentation with automated testing.

#### Tokens

Also crucial for developers, ensuring that frontend development adheres to the design language.

### Documentation

Effective documentation is crucial for ensuring adoption and consistency.

- [**Storybook**](): All in one solution for documentation and component library.
- [**Starlight**](https://starlight.astro.build/): A lightweight, fast, accessible and easy-to-use documentation site generator using Astro.
- [**Docusaurus**](https://docusaurus.io/): A popular open-source tool for building documentation sites, maintained by Facebook. Supports Markdown, JSX, and multiple languages.

## Testing Strategy

Ensuring the quality and maintainability of your design system involves rigorous testing and versioning. Implement comprehensive testing to ensure reliability.

## Change management and version control

Version control ensures you can manage changes without breaking existing implementations.

- **Semantic Versioning (SemVer)**: Use semantic versioning to manage updates and ensure compatibility.
- **Change Logs**: Maintain a change log to document what has changed in each version, which is crucial for both developers and designers.

## Distribution

Effectively distributing a design system on the web involves several key approaches and tools to ensure it is accessible, usable, and maintainable. Here are some common methods and tools:

### Hosting the Design System

#### Package Managers

- [**NPM**](https://www.npmjs.com/): Publish your design system as an NPM package to allow other developers to easily install and use your components via `npm install`.
- [**Yarn**](https://yarnpkg.com/): Similar to NPM, Yarn is another package manager that can be used to distribute your design system.
- [**GitHub Package**](https://docs.github.com/en/packages): Host your design system as a package on GitHub, making it easy to manage and distribute through Git.

#### Continuous Integration/Continuous Deployment (CI/CD)

Automate the build, test, deploy and distribution of your design system.

- GitHub Actions
- CircleCI

### Access Control

- **Public vs. Private**: Decide whether your design system will be publicly accessible or restricted to internal use.
- **Authentication**: Use authentication mechanisms (e.g., OAuth, JWT) to control access to the design system and documentation, especially if it is intended for internal use.

## What Do You Need Today vs Tomorrow

Start small, focus on getting adoption, and iteratively improve your design system.

- **Starting Small**: Identify a set of essential components and features that solve immediate problems.
- **Getting Adoption**: Focus on promoting and integrating the design system across your teams to build a foundation.
- **Iterative Improvement**: Continuously gather feedback and improve the design system to better meet the evolving needs of your projects.

---

**Activity:** Initialize a new Storybook instance with testing, USWDS, TWIG, and Drupal integrated (Repo to fork?)
