---
id: 0007
title: Attempted Implementation Without Prerequisites
stage: implement
date: 2025-12-06
surface: agent
model: claude-sonnet-4-5-20250929
feature: none
branch: main
user:
command: /sp.implement $ARGUMENTS
labels: ["implement","error","prerequisites-missing"]
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

To proceed with implementation, I require a completed feature specification (`spec.md`), an implementation plan (`plan.md`), and a generated task list (`tasks.md`). Currently, these documents are missing. Please follow these steps: 1. **Create a feature specification**: Use the `/sp.specify` command with a detailed description of the feature you want to implement. **Example:** `/sp.specify Develop an AI-native textbook with an embedded RAG chatbot for Physical AI and Humanoid Robotics.` 2. **Create an implementation plan**: Once the specification is complete, use the `/sp.plan` command to generate a detailed implementation plan. **Example:** `/sp.plan plan the development of the AI-native textbook and RAG chatbot` 3. **Generate tasks**: After the plan is complete, use the `/sp.tasks` command to break down the plan into actionable, dependency-ordered tasks. **Example:** `/sp.tasks create tasks for the AI-native textbook and RAG chatbot implementation` Once these steps are completed, I can proceed with implementing the tasks. I will ensure all changes are made on a new branch, which you can then review and merge to `main`.

## Outcome

- ✅ Impact: User informed about missing prerequisites (feature specification, plan, and tasks) for implementation.
- 🧪 Tests: N/A
- 📁 Files: No files created or modified for implementation.
- 🔁 Next prompts: User will be guided to create the feature specification.
- 🧠 Reflection: The user is repeatedly attempting `/sp.implement` without the necessary prerequisite documents. Reinforcing the sequence of `specify`, `plan`, and `tasks` is crucial.

## Evaluation notes (flywheel)

- Failure modes observed: Missing prerequisites.
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): N/A
