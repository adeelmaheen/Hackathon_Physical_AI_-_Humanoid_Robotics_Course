---
title: Robot Simulation (Weeks 6-7)
sidebar_label: Simulation (Gazebo & Unity)
---

# Robot Simulation (Gazebo & Unity)

## Learning objectives
- Set up Gazebo for humanoid simulation with URDF/SDF.
- Tune physics (gravity, friction, collisions) and simulate sensors (LiDAR, RGB, IMU).
- Export to Unity for high-fidelity rendering and HRI experiments.
- Use simulation as a digital twin for RAG-linked documentation.

## Prerequisites
- ROS 2 workspace ready from Module 1.
- GPU recommended for smoother rendering.
- Basic understanding of coordinate frames and transforms.

## Gazebo essentials
- World files: lighting, ground plane, physics profile.
- Sensors: LiDAR frequency/resolution, camera intrinsics, IMU noise models.
- Controllers: joint state broadcaster, effort/position controllers.
- Visualization: RViz + Gazebo for parallel inspection.

```bash title="Launch a humanoid in Gazebo"
ros2 launch humanoid_control view_robot.launch.py use_sim_time:=true
```

## Unity pipeline
- Use URDF importer or USD export from Isaac Sim when higher fidelity is needed.
- Add colliders and materials; validate scale and pivot points.
- Script simple HRI interactions (gaze, gestures) to rehearse demos.

## Interactive elements
- Add a 3D model viewer (GLB/GLTF) in the Docusaurus page for quick inspection.
- Link recorded simulation clips demonstrating balance and sensor outputs.

## Checklist
- [ ] URDF/SDF loads without errors; frames verified in RViz.
- [ ] Sensors publish at expected rates; noise models configured.
- [ ] Physics tuned to avoid jitter; controllers stable.
- [ ] Unity scene imports the same robot with correct scale.
- [ ] 3+ runnable examples: Gazebo launch, sensor playback, Unity export steps.

## References
- Gazebo Sim: https://gazebosim.org/docs
- URDF/SDF: https://gazebosim.org/docs/latest/urdf
- Unity Robotics Hub: https://github.com/Unity-Technologies/Unity-Robotics-Hub
