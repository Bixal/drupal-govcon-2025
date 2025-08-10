---
title: ADR Template
description: A template for documenting important technical decisions, including background, available options, rationale, expected benefits, possible risks, and any supporting information.
---

Use this template to clearly document important technical decisions. Record the background, options, reasoning, benefits, risks, and any supporting info.

## How to use

1. Make a `decisions` folder in your project.
2. Copy the template below into that folder.
3. Add a README that explains how and when to use the template, and how to approve decisions.
4. Duplicate the template for each new decision and fill it out.

You should have something like this:

```sh
decisions/
├── _adr-template.md
├── README.md
└── 0001-require-typescript.md
```

## Template

```md
<!-- adr_template.md -->

<!--
The record number and the title should be in the filename.
For example:
/decisions/0000-adr-title.md
-->

<!--
PR Title:
ADR Proposal: A brief description
-->

# 0000-adr-title

**Date:** YYYY-MM-DD

**Status:** Draft

<!--
Status options:
- Draft
- Proposed
- Approved
- Rejected
- Deprecated
- Superseded
-->

**Authors:**

- John Doe
- Jane Doe

## Background

The problem or background information that led to the decision.

## Decision

Options considered (with benefits and risks/mitigations), assumptions, choice made, and reasoning.

### Alternatives

The other options you considered.

## Consequences

Pros and cons of this decision, including potential trade-offs.

### Benefits

A list of high level benefits of this change.

- [Benefit 1: A key advantage of the decision]
- [Benefit 2: Another key advantage of the decision]
- [Add enough so a decision could be made confidently]

### Risks

A list of high level risks from this change.

- [Risk 1: A potential downside or challenge]
- [Risk 2: Another risk]
- etc

## Supporting information

List any research, feedback, or things that informed the decision.
```
