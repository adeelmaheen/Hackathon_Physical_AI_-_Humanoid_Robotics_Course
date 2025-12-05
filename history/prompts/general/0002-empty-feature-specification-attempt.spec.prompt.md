---
id: 0002
title: Empty Feature Specification Attempt
stage: spec
date: 2025-12-06
surface: agent
model: claude-sonnet-4-5-20250929
feature: none
branch: main
user:
command: /sp.specify $ARGUMENTS
labels: ["specify","error","empty-argument"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
tests:

---

## Prompt

$ARGUMENTS

## Response snapshot

No feature description was provided. Please provide a detailed description of the feature you want to specify.

## Outcome

- ✅ Impact: User prompted for missing feature description.
- 🧪 Tests: N/A
- 📁 Files: No files created or modified for the feature.
- 🔁 Next prompts: User will provide a feature description.
- 🧠 Reflection: The `/sp.specify` command requires a feature description as an argument. The literal `$ARGUMENTS` was provided, indicating the actual argument was missing.

## Evaluation notes (flywheel)

- Failure modes observed: Missing command argument.
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): Ensure clearer guidance or stricter validation for command arguments.
