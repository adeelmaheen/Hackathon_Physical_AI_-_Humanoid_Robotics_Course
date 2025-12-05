---
title: Vision-Language-Action (Weeks 11-13)
sidebar_label: Vision-Language-Action
---

# Vision-Language-Action

## Learning objectives
- Model kinematics/dynamics for locomotion and manipulation.
- Integrate Whisper for voice-to-action and LLMs for planning/dialog.
- Design multimodal UX for conversational humanoids.
- Deliver capstone: voice commands → navigation → perception → manipulation.

## Prerequisites
- Modules 1-3 completed.
- GPU with CUDA for speech/vision models (optional but recommended).
- Basic linear algebra for kinematics and transforms.

## Core topics
- **Kinematics/Dynamics:** forward/inverse kinematics, ZMP for balance, PID vs MPC controllers.
- **Locomotion & Balance:** gait generation, footstep planning, fall detection strategies.
- **Manipulation & Grasping:** grasp pose sampling, simple semantic grasp rules.
- **Voice-to-Action:** Whisper transcribe → intent parse → ROS action dispatch.
- **Planning with LLMs:** constrained action dictionaries, safety filters, retry logic.
- **Multimodal UX:** grounding references to scene objects, confirmations, fail-soft messages.

## Example: intent to action (sketch)
```python title="intent_router.py"
INTENTS = {"look_left": {"topic": "/head_cmd", "field": "yaw", "limit": 0.6},
           "step_forward": {"topic": "/cmd_vel", "field": "linear_x", "limit": 0.2}}

def route_intent(intent, value):
    spec = INTENTS.get(intent)
    if not spec:
        return None
    value = max(min(value, spec["limit"]), -spec["limit"])
    return {"topic": spec["topic"], spec["field"]: value}
```

## Capstone requirements
- Voice command reception (Whisper + lightweight intent parser).
- Path planning + navigation with feedback.
- Object identification (vision) and grasp/manipulate.
- Clear user feedback with citations to perception/planning outputs.

## Checklist
- [ ] Kinematics and balance controller validated in sim.
- [ ] Voice pipeline wired to safe action dictionary.
- [ ] LLM planner constrained; retries and timeouts in place.
- [ ] UX shows confirmations, safe fallbacks, and logs for RAG indexing.
- [ ] Capstone demo recorded (&lt;90s) and linked in docs.

## References
- Whisper: https://github.com/openai/whisper
- GPT-4o/Turbo: https://platform.openai.com/docs
- Manipulation: https://moveit.picknik.ai/main/index.html
