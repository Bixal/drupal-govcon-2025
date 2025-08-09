---
title: Release Checklist
description: A checklist for releasing.
---

This checklist helps you release with confidence.

## How to Use

1. Use this checklist before every release.
2. Assign tasks to team members.
3. Check off each item as you finish it.
4. Log any issues or blockers so the team can help.

## Checklist

```md
# Release Checklist

## Code

- [ ] Make sure all automated tests pass (unit, a11y, builds)
- [ ] Look for any bugs or regressions

## Documentation

- [ ] **Release notes**
  - [ ] Copy note from merged PRs (write new ones if needed)
  - [ ] Explain any breaking changes and how to upgrade
  - [ ] Add major changes to code (e.g., SCSS notifications partial)
  - [ ] Write notes with new features, fixes, and breaking changes
- [ ] **Documentation site**
  - [ ] Add all new changes
  - [ ] Update changelogs
  - [ ] Check that all links and code samples work
  - [ ] Install and test release on website as a final check

## Security

- [ ] Run `npm audit` and log vulnerabilities
- [ ] Update npm dependencies (patch and minor updates only)
  - [ ] Open issues for any major updates
- [ ] Run `npm audit fix` again and log new number for notes
- [ ] Log changes and update security tracking spreadsheet
- [ ] Validate the MD5 hash of the created archive

## Distributing

- [ ] Update the version number in `package.json` and anywhere else needed
- [ ] Build and package the release (for example, with `npm run release`)
- [ ] Publish to npm
- [ ] Tag the release in git and publish on GitHub
- [ ] Make sure the published package includes all files and works

## Communication

- [ ] Announce the release in GitHub Discussions
- [ ] Close the GitHub milestone
```
