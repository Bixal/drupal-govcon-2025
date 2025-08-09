---
title: Component Checklist
description: A checklist for testing components.
---

Use this checklist to keep your components high quality, accessible, and easy to use. Test regularly and document your process.

## How to Use

1. Review this checklist before releasing or updating any component.
2. Test a few components each quarter if you have many.
3. Write down how and when you test, and what tools you use.

## Checklist

```md
## Accessibility Checks

Always test for accessibility. Follow WCAG 2.1 AA and Section 508 standards.

- [ ] Use semantic HTML for meaning and structure
- [ ] Use headings in a clear, logical order
- [ ] Make all interactive elements keyboard accessible
- [ ] Ensure color contrast is at least 4.5:1 for text
- [ ] Add descriptive alt text to all meaningful images
- [ ] Link labels to form controls
- [ ] Support 400% zoom or 320px width
- [ ] Write in plain language

### Specific Checks

- [ ] HTML is valid
- [ ] No errors in axe devtools
- [ ] Works well with screen readers (like VoiceOver)

## Visual Checks

- [ ] Looks and works great on mobile (mobile-first)
- [ ] Uses theme tokens for color, spacing, and typography
- [ ] Passes color contrast checks
- [ ] Disables animations if user prefers reduced motion

## Performance Checks

- [ ] Does not block page rendering
- [ ] Important content loads first
- [ ] Images and SVGs are optimized
- [ ] Avoids unnecessary re-renders or DOM updates
- [ ] Works well on slow networks (like 3G)
- [ ] No layout shifts (CLS) or flashes of unstyled content (FOUC)

## Guidance Checks

- [ ] Uses plain language and avoids jargon
- [ ] Clear, friendly, and direct tone
- [ ] Follows this format:
  - When to use
  - When to consider something else
  - Accessibility guidance
  - Usability guidance
    - Settings
    - Variants
```
