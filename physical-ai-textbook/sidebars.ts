import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Introduction',
      items: ['introduction-physical-ai/overview'],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Module 1 — ROS 2 Fundamentals',
      items: ['ros2-fundamentals/ros2-foundations'],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Module 2 — Simulation (Gazebo & Unity)',
      items: ['robot-simulation/simulation-overview'],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Module 3 — NVIDIA Isaac',
      items: ['nvidia-isaac/isaac-stack'],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Module 4 — Vision-Language-Action',
      items: ['vision-language-action/vla-overview'],
      collapsed: false,
    },
  ],
};

export default sidebars;
