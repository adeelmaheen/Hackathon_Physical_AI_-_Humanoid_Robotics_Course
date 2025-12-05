---
id: 0006
title: Attempted Task Generation Without Spec and Plan
stage: tasks
date: 2025-12-06
surface: agent
model: claude-sonnet-4-5-20250929
feature: none
branch: main
user:
command: /sp.tasks $ARGUMENTS
labels: ["tasks","error","prerequisites-missing"]
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

To create tasks for this project, I first need a feature specification (using `/sp.specify`) and an implementation plan (using `/sp.plan`). These documents are prerequisites for generating actionable tasks. I understand you do not want to push directly to the `main` branch. Once we have a feature specification and a plan, I will create a new branch for the implementation and push changes there, which can then be merged to `main`. Please first create a feature specification using the `/sp.specify` command with a detailed description of the feature you want to plan. Then, use `/sp.plan` to create the implementation plan. Once both are complete, I can generate the tasks.

## Outcome

- ✅ Impact: User informed about missing prerequisites (feature specification and plan) for task generation, and previous instructions re-acknowledged.
- 🧪 Tests: N/A
- 📁 Files: No files created or modified for tasks.
- 🔁 Next prompts: User will provide a feature description for `/sp.specify`.
- 🧠 Reflection: User is repeatedly attempting `/sp.tasks` without the prerequisite specification and plan. The prompt should reinforce the required sequence of commands.

## Evaluation notes (flywheel)

- Failure modes observed: Missing prerequisites (feature specification and plan).
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): N/A
