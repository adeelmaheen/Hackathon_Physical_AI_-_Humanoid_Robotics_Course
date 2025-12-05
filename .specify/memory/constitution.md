<!-- Project Constitution | Physical AI & Humanoid Robotics Textbook -->

# Physical AI & Humanoid Robotics Textbook - Constitution

version: "1.1"
project_id: "hackathon_Physical_AI_Humanoid_Robotics"
project_type: "AI-native textbook + RAG chatbot"
framework: "Docusaurus v3"
deployment: "GitHub Pages (primary), Vercel (backup)"

## 1) Mission & Scope
- purpose: Build a complete Physical AI & Humanoid Robotics textbook with an embedded RAG chatbot, optimized for hackathon delivery.
- audience: Students, practitioners pivoting to embodied AI, and researchers in human-robot interaction.
- success bar (MVP): Deployed Docusaurus site with 6 modules, working RAG chat, demo < 90s, base scoring 100/100.
- stretch goals: Auth + profiling, personalization, Urdu translation, reusable Claude Code subagents/skills; target 200-300 points.

## 2) Architecture Blueprint
- frontend: Docusaurus 3 (TypeScript), custom theme; components at `src/components`.
- backend: FastAPI; Neon serverless Postgres; Qdrant Cloud (vector DB).
- AI: OpenAI text-embedding-3-large; GPT-4o/Turbo; RAG orchestration via FastAPI.
- auth: Better-Auth (session + DB-backed profiles).
- deployment: GitHub Pages via Actions; fallback Vercel.
- tooling: Spec-Kit Plus; Claude Code; MCP servers (GitHub for commits, Context7 for context); Git branches `main`, `dev`, `feature/*`.

## 3) Content Map (course-aligned)
- Intro: Foundations, embodied intelligence, landscape, sensors; outcomes stated upfront.
- Module 1 (ROS 2, weeks 3-5): architecture, nodes/topics/services/actions, Python packages, launch/params, URDF for humanoids, bridging agents to controllers. >=3 code examples (Python + YAML).
- Module 2 (Simulation, weeks 6-7): Gazebo setup, URDF/SDF, physics, sensors, Unity visuals, HRI in virtual env; include 3D model viewer links/demos.
- Module 3 (NVIDIA Isaac, weeks 8-10): SDK/Sim, synthetic data, Isaac ROS VSLAM, perception/manipulation, RL control, Nav2 for bipedal, sim-to-real. Hardware spec callout (RTX 4070 Ti+, 32-64 GB RAM, Ubuntu 22.04).
- Module 4 (Vision-Language-Action, weeks 11-13): kinematics/dynamics, locomotion/balance, grasping, Whisper voice-to-action, LLM planning, GPT-based convo, multimodal UX, capstone (voice cmd, nav, CV ID, manipulation).
- Each chapter: learning objectives, prerequisites, main content, >=3 runnable examples, quiz/checklist, references, links to RAG sources.

## 4) RAG Chatbot Contract
- features: content Q&A, selection-based ask, source citations, chat history, source highlighting.
- backend: `/api/chat`, `/api/embed-content`, `/api/search-context`; chunking strategy documented; embeddings stored in Qdrant with metadata (module, chapter, heading, hash).
- frontend: `src/components/RAGChatbot/` floating widget + selection popup; context tokens capped; graceful fallback when offline.

## 5) Auth, Personalization, Translation (bonus tracks)
- auth: Better-Auth; email/pass + optional OAuth; store profile (software_background, hardware_background) in Postgres.
- personalization: per-chapter button; adjust depth/examples/hardware recs; API `/api/personalize-content`; preferences persisted.
- translation: Urdu toggle; `/api/translate-chapter`; cache translations; keep technical terms in English with Urdu explanations.

## 6) Reusable Intelligence (Claude Code Subagents/Skills)
- subagents: content_writer (chapter scaffolds), code_example (ROS2/URDF/Isaac), diagram (mermaid/architecture), rag_indexing (chunk/metadata/embed).
- reusable skills: chapter_structure_validator, code_syntax_checker, link_checker, hardware_spec_formatter.
- goal: >=3 subagents + >=4 skills demonstrated with docs/examples.

## 7) Delivery Plan (phases)
- Foundation: initialize Spec-Kit Plus; scaffold Docusaurus; nav + GitHub Pages config; baseline theme.
- Content: fill all modules with objectives, 3+ examples, diagrams; cross-links; quizzes.
- RAG: FastAPI + Qdrant wiring; embed pipeline; frontend widget; E2E test.
- Bonus: Better-Auth + profiles; personalization; Urdu translation; subagents published.
- Polish: perf + accessibility; demo video (<90s); README + API docs; final deploy.

## 8) Quality Gates
- content: objectives + prerequisites per chapter; >=3 runnable examples; diagrams or screenshots; consistent depth; cross-references.
- code: tested snippets; ROS2/Python best practices; comments only where non-obvious; setup instructions included.
- UX: responsive; load <3s; clear hierarchy; intuitive chat affordances; accessible navigation.
- docs: README (setup/dev/deploy); backend API docs; component notes; deployment guide.

## 9) Scoring Checklist
- base (100): Docusaurus deployed (25); complete modules (30); RAG works (30); code/doc (10); UX (5).
- bonus (50 each): subagents/skills; Better-Auth profiling; personalization; Urdu translation. Max 300.

## 10) Governance & Workflow
- branching: `main` (release), `dev` (integration), `feature/*`.
- commits: after significant tasks; format `[AUTO] {task} - {timestamp}` via GitHub MCP when available.
- PR hygiene: small, reviewable diffs; include tests/notes.
- environment: prefer `.env.local` with non-checked secrets; no credentials in repo.

## 11) Risk & Mitigation
- deployment issues: test GH Pages early; keep Vercel backup.
- RAG latency/quality: cache; tighten chunking; cap context; monitor citations.
- auth security: follow Better-Auth guidance; input validation; session hardening.
- translation quality: cache; spot-check critical chapters; allow user feedback.
- timeline: prioritize base 100 first; lock bonus scope per phase.

## 12) Success Metrics
- MVP: deployed site with 6 modules, working chat, demo <90s, base score achieved.
- Competitive: MVP + >=2 bonus features, polished UI/UX, strong docs.
- Winning: all bonuses, high-quality code/content, notable subagent reuse, standout presentation.

## 13) Metadata
- maintained_by: Spec-Kit Plus + Claude Code
- created: 2025-11-01
- last_updated: 2025-12-06
- deadline: 2025-11-30 18:00 PKT
- mcp_servers: GitHub (commits/CI), Context7 (context/memory)

Notes: This file is the single source of truth. Keep it updated as scope or architecture shifts. Align all decisions and deliverables to this constitution.
