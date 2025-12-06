---
sidebar_position: 1
---

# Physical AI & Humanoid Robotics Textbook

Welcome to the hackathon textbook for **Physical AI & Humanoid Robotics**. This site mirrors the constitution at `.specify/memory/constitution.md` and will host the RAG chatbot.

## What you'll learn
- Foundations of Physical AI and embodied intelligence.
- ROS 2 middleware, URDF, and launch files for humanoids.
- Simulation with Gazebo/Unity as a digital twin.
- NVIDIA Isaac stack for accelerated perception and sim-to-real.
- Vision-Language-Action (VLA): Whisper voice-to-action, LLM planning, and multimodal UX.

## How to use this book
- Start with **Introduction** for objectives and course map.
- Follow modules in order (ROS 2 → Simulation → NVIDIA Isaac → VLA).
- Each chapter lists prerequisites, 3+ runnable examples, and a checklist.
- RAG chatbot (to be wired) will cite chapter sources for answers.

## Expected outcomes
- Deployed Docusaurus site with 6 modules and a working RAG chatbot.
- Demo (&lt;90 seconds) showing navigation, Q&A, and at least base scoring (100/100).
- Stretch: auth + profiling, personalization, Urdu translation, and reusable Claude Code subagents/skills.

## Constitution alignment & next steps
- Module coverage: Introduction + Modules 1-4 (ROS 2, Simulation, NVIDIA Isaac, VLA). To draft: Module 5 (Shipping & Observability) and Module 6 (Field Ops) with checklists and runnable examples.
- Content gaps: add 3 runnable examples per remaining modules, quizzes/checklists, diagrams/screenshots, and cross-links back to RAG sources.
- RAG/chatbot: scaffold FastAPI + Qdrant endpoints (`/api/chat`, `/api/embed-content`, `/api/search-context`) and front-end widget at `src/components/RAGChatbot/`.
- Bonus backlog: Better-Auth profiles + personalization API, Urdu translation toggle, and publishing Claude Code subagents/skills.
- Delivery artifacts: demo video (&lt;90s), README updates (setup/deploy), backend API docs, and deployment guide for GitHub Pages + Vercel fallback.

## Run locally
```bash
cd physical-ai-textbook
npm install
npm run start
```

## Build for production
```bash
npm run build
```

## Contributing
- Keep content aligned with the constitution.
- Use small, reviewable PRs; document examples and checks.
- Do not commit secrets; use `.env.local` for local configuration.



