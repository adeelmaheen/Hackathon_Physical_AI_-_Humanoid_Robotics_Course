---
title: ROS 2 Fundamentals (Weeks 3-5)
sidebar_label: ROS 2 Fundamentals
---

# ROS 2 Fundamentals

## Learning objectives
- Understand ROS 2 architecture: nodes, topics, services, actions, parameters.
- Build and launch Python-based packages with `colcon`.
- Define humanoid robot structure with URDF and integrate sensors.
- Bridge Python agents/LLMs to ROS controllers safely.

## Prerequisites
- Python 3.10+ and `pip`.
- Ubuntu 22.04 (recommended) or WSL2.
- ROS 2 Humble installed; `colcon` available.

## Core topics
- **Nodes & Graph:** lifecycle, remapping, QoS profiles, namespaces.
- **Topics/Services/Actions:** when to choose each; contracts and latency considerations.
- **Parameters & Launch:** parameter files, overlays, and reusable launch descriptions.
- **URDF for humanoids:** links, joints, inertia, collision vs visual meshes; xacro patterns.
- **Agent bridge:** exposing ROS actions to a Python agent layer with rate limits and guards.

## Worked example (runnable sketch)
```bash
# Create a workspace
mkdir -p ~/humanoid_ws/src && cd ~/humanoid_ws
ros2 pkg create humanoid_control --build-type ament_python
```

```python title="humanoid_control/minimal_node.py"
import rclpy
from rclpy.node import Node

class JointStatePrinter(Node):
    def __init__(self):
        super().__init__("joint_state_printer")
        self.create_subscription(
            msg_type="sensor_msgs/msg/JointState",
            topic="/joint_states",
            callback=self.on_joint_state,
            qos_profile=10,
        )

    def on_joint_state(self, msg):
        # Keep minimal logging to stay real-time friendly
        self.get_logger().info(f"positions: {list(msg.position)[:4]}")

def main():
    rclpy.init()
    node = JointStatePrinter()
    rclpy.spin(node)
    node.destroy_node()
    rclpy.shutdown()

if __name__ == "__main__":
    main()
```

```python title="humanoid_control/bridge_agent.py"
# Illustrative: guard agent-issued velocity commands
import time
import rclpy
from rclpy.node import Node
from geometry_msgs.msg import Twist

class GuardedCmd(Node):
    def __init__(self):
        super().__init__("guarded_cmd")
        self.pub = self.create_publisher(Twist, "/cmd_vel", 10)
        self.max_linear = 0.2
        self.max_angular = 0.3

    def send_safe(self, lin, ang):
        safe_lin = max(min(lin, self.max_linear), -self.max_linear)
        safe_ang = max(min(ang, self.max_angular), -self.max_angular)
        msg = Twist()
        msg.linear.x = safe_lin
        msg.angular.z = safe_ang
        self.pub.publish(msg)

def main():
    rclpy.init()
    node = GuardedCmd()
    for _ in range(5):
        node.send_safe(0.5, 0.6)  # intentionally beyond limits; will be clamped
        time.sleep(0.5)
    node.destroy_node()
    rclpy.shutdown()

if __name__ == "__main__":
    main()
```

## Launch & URDF
```python title="humanoid_control/launch/view_robot.launch.py"
from launch import LaunchDescription
from launch_ros.actions import Node

def generate_launch_description():
    return LaunchDescription(
        [
            Node(
                package="robot_state_publisher",
                executable="robot_state_publisher",
                name="rsp",
                parameters=[{"robot_description": open("urdf/humanoid.urdf").read()}],
            ),
            Node(
                package="joint_state_publisher_gui",
                executable="joint_state_publisher_gui",
                name="jsp_gui",
            ),
        ]
    )
```

## Checklist
- [ ] Node graph is namespaced and QoS-tuned.
- [ ] Launch files accept parameters; no hard-coded paths.
- [ ] URDF validated (`check_urdf`) and visuals separated from collisions.
- [ ] Agent bridge clamps outputs and enforces rate limits.
- [ ] Three runnable examples included (node, agent bridge, launch/URDF).

## References
- ROS 2 Humble: https://docs.ros.org/en/humble/
- URDF: https://docs.ros.org/en/humble/Tutorials/Intermediate/URDF/URDF-Main.html
- Launch: https://docs.ros.org/en/humble/Tutorials/Intermediate/Launch/Creating-Launch-Files.html
