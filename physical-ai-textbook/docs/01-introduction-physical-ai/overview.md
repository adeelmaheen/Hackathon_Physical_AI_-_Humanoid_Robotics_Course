---
title: Introduction to Physical AI
sidebar_label: Introduction
---

# Introduction to Physical AI

## Learning objectives
- Grasp what Physical AI means in the context of embodied systems.
- Recognize core building blocks: sensing, perception, planning, control, and embodiment.
- Understand the hackathon deliverable: AI-native textbook plus RAG chatbot.
- Identify how the course modules connect (ROS 2, simulation, NVIDIA Isaac, VLA).

## Prerequisites
- Basic Python.
- Comfort with Git and VS Code (or similar).
- High-level understanding of robotics (sensors, actuators) is helpful but not required.

## Why Physical AI now
- Convergence of capable models (LLMs, VLMs) with cheaper sensors and compute.
- Sim-to-real pipelines accelerating iteration.
- Open-source ROS 2 ecosystem maturing for production.

## Course map
- **Module 1 (ROS 2):** core middleware, nodes, topics/services/actions, URDF, launch files.
- **Module 2 (Simulation):** Gazebo/Unity, URDF vs SDF, physics and sensors, HRI in virtual worlds.
- **Module 3 (NVIDIA Isaac):** SDK/Sim, VSLAM, perception/manipulation, RL control, Nav2 for bipedal, sim-to-real.
- **Module 4 (Vision-Language-Action):** kinematics/dynamics, locomotion, grasping, Whisper voice-to-action, LLM planning, multimodal UX.

## Expected outcomes
- Deployed Docusaurus site with 6 modules and a working RAG chatbot.
- Demo (&lt;90 seconds) showing navigation, Q&A, and at least base scoring (100/100).
- Stretch: auth + profiling, personalization, Urdu translation, and reusable Claude Code subagents/skills.

## Reading list (quick start)
- ROS 2 Humble docs: https://docs.ros.org/en/humble/
- Gazebo Sim: https://gazebosim.org/docs
- NVIDIA Isaac: https://developer.nvidia.com/isaac-ros
- FastAPI: https://fastapi.tiangolo.com/
- Qdrant: https://qdrant.tech/documentation/
