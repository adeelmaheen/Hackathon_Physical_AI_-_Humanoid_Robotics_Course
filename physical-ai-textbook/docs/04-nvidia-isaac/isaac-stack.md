---
title: NVIDIA Isaac Stack (Weeks 8-10)
sidebar_label: NVIDIA Isaac
---

# NVIDIA Isaac Stack

## Learning objectives
- Install and navigate NVIDIA Isaac SDK/Sim.
- Generate synthetic data and run accelerated perception (Isaac ROS VSLAM).
- Build manipulation/navigation stacks; tune Nav2 for bipedal gaits.
- Practice sim-to-real transfer considerations.

## Prerequisites
- Ubuntu 22.04, NVIDIA driver + RTX 4070 Ti (12 GB) or better.
- Docker + NVIDIA Container Toolkit.
- ROS 2 Humble workspace.

## Core topics
- **Isaac Sim:** scenes, physics materials, articulation inspector, domain randomization.
- **Isaac ROS:** Visual SLAM, image pipeline, perception graphs on GPU.
- **Reinforcement learning:** curriculum design, reward shaping for balance and walking.
- **Nav2 for bipeds:** costmaps, constraints, recovery behaviors; integrate footstep planners.
- **Sim-to-real:** sensor alignment, latency budgets, calibration, safety envelopes.

## Example snippets
```bash title="Pull Isaac ROS VSLAM"
docker pull nvcr.io/nvidia/isaac/ros:vslam-2.0.0
```

```bash title="Run sim with headless rendering"
./isaac-sim.sh --allow-root --headless --/app/window/dpi=100
```

```bash title="Launch VSLAM (simplified)"
ros2 launch isaac_ros_visual_slam isaac_ros_visual_slam.launch.py \
    stereo_namespace:=/stereo \
    left_camera_frame:=left_cam \
    right_camera_frame:=right_cam
```

## Checklist
- [ ] GPU drivers + container toolkit verified.
- [ ] Isaac Sim scene runs with humanoid URDF/USD; physics stable.
- [ ] VSLAM/Perception nodes validated on sample bag or sim stream.
- [ ] Nav2 configured with biped-specific constraints.
- [ ] RL or control loop tested in sim; notes on transfer risks captured.

## References
- Isaac ROS: https://developer.nvidia.com/isaac-ros
- Isaac Sim: https://docs.omniverse.nvidia.com/isaacsim/latest/index.html
- Nav2: https://navigation.ros.org/
