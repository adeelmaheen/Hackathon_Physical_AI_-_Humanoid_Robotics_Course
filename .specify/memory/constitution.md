<!-- Sync Impact Report:
Version change: 1.0 -> 1.0
Modified principles: None
Added sections: None
Removed sections: None
Templates requiring updates: None
Follow-up TODOs: None
-->

# Constitution File for Physical AI & Humanoid Robotics Textbook
# Hackathon Project: Spec-Driven AI Development
# Project: hackathon_Physical_AI_Humanoid_Robotics

version: "1.0"
project_name: "Physical AI & Humanoid Robotics Textbook"
project_type: "AI-Native Technical Textbook with RAG Chatbot"
framework: "Docusaurus v3"
deployment: "GitHub Pages"

# ============================================================================
# PROJECT IDENTITY & CONTEXT
# ============================================================================

project_identity:
  purpose: |
    Create a comprehensive AI-native textbook for teaching Physical AI & 
    Humanoid Robotics course using Spec-Kit Plus and Claude Code. The book 
    must include an embedded RAG chatbot for interactive learning.
  
  target_audience:
    - Students learning Physical AI and Humanoid Robotics
    - Professionals transitioning to robotics and embodied AI
    - Researchers exploring human-robot interaction
  
  key_objectives:
    - Deliver 100 base points for core functionality
    - Achieve up to 200 total points with bonus features
    - Create reusable intelligence via Claude Code Subagents
    - Implement user authentication and personalization
    - Enable content translation to Urdu

# ============================================================================
# TECHNICAL ARCHITECTURE
# ============================================================================

technical_stack:
  frontend:
    framework: "Docusaurus 3.x"
    styling: "Custom CSS with Docusaurus theming"
    deployment: "GitHub Pages / Vercel"
    
  backend:
    api_framework: "FastAPI"
    database: "Neon Serverless Postgres"
    vector_database: "Qdrant Cloud Free Tier"
    
  ai_components:
    rag_chatbot: "OpenAI Agents/ChatKit SDKs"
    authentication: "Better-Auth (https://www.better-auth.com/)"
    content_generation: "Claude Code with Spec-Kit Plus"
    
  development_tools:
    spec_tool: "Spec-Kit Plus (https://github.com/panaversity/spec-kit-plus/)"
    cli_tool: "Claude Code (https://www.claude.com/product/claude-code)"
    version_control: "Git with auto-commit/push via MCP server"

# ============================================================================
# PROJECT INITIALIZATION STEPS
# ============================================================================

initialization:
  step_1_specifyplus_init:
    command: "specifyplus init hackathon_Physical_AI_Humanoid_Robotics"
    description: "Initialize Spec-Kit Plus project structure"
    mcp_servers:
      - name: "Context7"
        purpose: "Maintain project context and memory"
      - name: "GitHub MCP"
        purpose: "Auto-commit and push changes to repository"
    
  step_2_docusaurus_setup:
    commands:
      - "npx create-docusaurus@latest physical-ai-textbook classic --typescript"
      - "cd physical-ai-textbook"
      - "npm install"
    configuration:
      - "Update docusaurus.config.ts with project metadata"
      - "Configure GitHub Pages deployment settings"
      - "Set up custom theme and styling"
    reference_links:
      - "https://docusaurus.io/docs/installation"
      - "https://docusaurus.io/docs/deployment#deploying-to-github-pages"
  
  step_3_project_structure:
    description: "Organize book content following course structure"
    directories:
      - "docs/01-introduction-physical-ai/"
      - "docs/02-ros2-fundamentals/"
      - "docs/03-robot-simulation/"
      - "docs/04-nvidia-isaac/"
      - "docs/05-humanoid-development/"
      - "docs/06-conversational-robotics/"
      - "src/components/RAGChatbot/"
      - "src/components/Auth/"
      - "src/api/"

# ============================================================================
# CONTENT STRUCTURE (BASED ON COURSE SYLLABUS)
# ============================================================================

book_structure:
  introduction:
    title: "Introduction to Physical AI"
    chapters:
      - "Week 1-2: Foundations of Physical AI"
      - "Embodied Intelligence Principles"
      - "Humanoid Robotics Landscape"
      - "Sensor Systems Overview"
    learning_outcomes:
      - "Understand Physical AI principles"
      - "Grasp embodied intelligence concepts"
      - "Survey humanoid robotics technologies"
  
  module_1_ros2:
    title: "The Robotic Nervous System (ROS 2)"
    weeks: "3-5"
    chapters:
      - "ROS 2 Architecture and Core Concepts"
      - "Nodes, Topics, Services, and Actions"
      - "Building ROS 2 Packages with Python"
      - "Launch Files and Parameter Management"
      - "Bridging Python Agents to ROS Controllers"
      - "Understanding URDF for Humanoids"
    code_examples:
      - language: "Python"
        type: "ROS 2 Node Examples"
      - language: "YAML"
        type: "Launch File Configurations"
  
  module_2_simulation:
    title: "The Digital Twin (Gazebo & Unity)"
    weeks: "6-7"
    chapters:
      - "Gazebo Simulation Environment Setup"
      - "URDF and SDF Robot Description Formats"
      - "Physics Simulation (Gravity, Collisions)"
      - "Sensor Simulation (LiDAR, Cameras, IMUs)"
      - "Unity for High-Fidelity Rendering"
      - "Human-Robot Interaction in Virtual Environments"
    interactive_elements:
      - "3D Model Viewers"
      - "Simulation Demonstrations"
  
  module_3_nvidia_isaac:
    title: "The AI-Robot Brain (NVIDIA Isaac™)"
    weeks: "8-10"
    chapters:
      - "NVIDIA Isaac SDK and Isaac Sim"
      - "Photorealistic Simulation & Synthetic Data"
      - "Isaac ROS: Hardware-Accelerated VSLAM"
      - "AI-Powered Perception and Manipulation"
      - "Reinforcement Learning for Robot Control"
      - "Nav2: Path Planning for Bipedal Movement"
      - "Sim-to-Real Transfer Techniques"
    hardware_requirements:
      - "NVIDIA RTX 4070 Ti (12GB VRAM) minimum"
      - "Ubuntu 22.04 LTS"
      - "64GB RAM (minimum 32GB)"
  
  module_4_vla:
    title: "Vision-Language-Action (VLA)"
    weeks: "11-13"
    chapters:
      - "Humanoid Robot Kinematics and Dynamics"
      - "Bipedal Locomotion and Balance Control"
      - "Manipulation and Grasping"
      - "Voice-to-Action with OpenAI Whisper"
      - "Cognitive Planning with LLMs"
      - "Integrating GPT Models for Conversational AI"
      - "Multi-Modal Interaction Design"
      - "Capstone Project: Autonomous Humanoid"
    capstone_requirements:
      - "Voice command reception"
      - "Path planning and navigation"
      - "Object identification using computer vision"
      - "Object manipulation"

# ============================================================================
# RAG CHATBOT SPECIFICATION
# ============================================================================

rag_chatbot:
  functionality:
    base_features:
      - "Answer questions about book content"
      - "Support text selection-based queries"
      - "Context-aware responses"
      - "Source citation from book chapters"
    
  technical_implementation:
    embedding_model: "OpenAI text-embedding-3-large"
    llm_model: "GPT-4 Turbo or GPT-4o"
    vector_store: "Qdrant Cloud Free Tier"
    backend_api: "FastAPI"
    database: "Neon Serverless Postgres"
    
  api_endpoints:
    - endpoint: "/api/chat"
      method: "POST"
      description: "Send user query and receive AI response"
      
    - endpoint: "/api/embed-content"
      method: "POST"
      description: "Embed book content into vector database"
      
    - endpoint: "/api/search-context"
      method: "POST"
      description: "Search for relevant context from selected text"
  
  frontend_integration:
    component_location: "src/components/RAGChatbot/"
    features:
      - "Floating chat widget"
      - "Text selection popup trigger"
      - "Chat history persistence"
      - "Source highlighting in book content"

# ============================================================================
# AUTHENTICATION & PERSONALIZATION (BONUS: 50 POINTS)
# ============================================================================

authentication:
  library: "Better-Auth"
  documentation: "https://www.better-auth.com/"
  
  implementation:
    signup_flow:
      fields:
        - "Email"
        - "Password"
        - "Name"
        - "Software background (dropdown/checkboxes)"
        - "Hardware background (dropdown/checkboxes)"
      
    signin_flow:
      methods:
        - "Email/Password"
        - "Optional: OAuth providers"
    
    user_profile_storage:
      database: "Neon Serverless Postgres"
      schema:
        - "user_id: UUID"
        - "email: String"
        - "name: String"
        - "software_background: JSON"
        - "hardware_background: JSON"
        - "created_at: Timestamp"

personalization:
  content_customization:
    trigger: "Button at start of each chapter"
    functionality: |
      Based on user's software/hardware background, adjust:
      - Technical depth of explanations
      - Code example complexity
      - Hardware recommendations
      - Prerequisites visibility
    
    implementation:
      - "Store user preferences in database"
      - "API endpoint: /api/personalize-content"
      - "Frontend: Dynamic content rendering based on user profile"

# ============================================================================
# CONTENT TRANSLATION (BONUS: 50 POINTS)
# ============================================================================

translation:
  target_language: "Urdu"
  trigger: "Button at start of each chapter"
  
  implementation:
    approach: "On-demand translation"
    api: "OpenAI GPT-4 or Google Translate API"
    caching: "Store translations in database to avoid re-translation"
    
    api_endpoint:
      route: "/api/translate-chapter"
      method: "POST"
      parameters:
        - "chapter_id: string"
        - "target_language: string (default: 'urdu')"
      response: "Translated markdown content"
    
    frontend_features:
      - "Language toggle button"
      - "Persist language preference per user"
      - "Maintain technical terms in English with Urdu explanations"

# ============================================================================
# CLAUDE CODE SUBAGENTS & SKILLS (BONUS: 50 POINTS)
# ============================================================================

reusable_intelligence:
  subagents:
    content_writer_agent:
      purpose: "Generate chapter content following consistent structure"
      skills:
        - "Technical writing for robotics concepts"
        - "Code example generation"
        - "Diagram descriptions"
      
    code_example_agent:
      purpose: "Create and validate code snippets"
      skills:
        - "ROS 2 Python code generation"
        - "URDF/SDF file creation"
        - "Isaac Sim script examples"
      
    diagram_agent:
      purpose: "Create architectural and system diagrams"
      skills:
        - "Mermaid diagram generation"
        - "System architecture visualization"
        - "Flow chart creation"
    
    rag_indexing_agent:
      purpose: "Process and embed content for RAG"
      skills:
        - "Content chunking strategy"
        - "Metadata extraction"
        - "Vector embedding optimization"
  
  agent_skills:
    - name: "chapter_structure_validator"
      description: "Ensures all chapters follow consistent format"
      
    - name: "code_syntax_checker"
      description: "Validates code examples for correctness"
      
    - name: "link_checker"
      description: "Verifies all external links are valid"
      
    - name: "hardware_spec_formatter"
      description: "Formats hardware specifications consistently"

# ============================================================================
# GIT AUTOMATION (MCP SERVER)
# ============================================================================

git_automation:
  mcp_server: "GitHub MCP Server"
  
  commit_strategy:
    frequency: "After each significant task completion"
    message_format: "[AUTO] {task_description} - {timestamp}"
    
  tasks_triggering_commits:
    - "Chapter creation/update"
    - "Component development"
    - "API endpoint implementation"
    - "Configuration updates"
    - "Documentation additions"
  
  branch_strategy:
    main_branch: "main"
    development_branch: "dev"
    feature_branches: "feature/{feature-name}"
  
  github_pages_deployment:
    branch: "gh-pages"
    automation: "GitHub Actions workflow"
    workflow_file: ".github/workflows/deploy.yml"

# ============================================================================
# DEVELOPMENT WORKFLOW
# ============================================================================

development_phases:
  phase_1_foundation:
    step1: 
    tasks:
      - "Initialize Docusaurus project"
      - "Set up basic structure and navigation"
      - "Configure GitHub Pages deployment"
      - "Create initial chapter templates"
    deliverable: "Skeleton book deployed to GitHub Pages"
  
  phase_2_content_creation:
    step2:
    tasks:
      - "Write all chapters using Claude Code"
      - "Generate code examples for each module"
      - "Create diagrams and visualizations"
      - "Add interactive elements"
    deliverable: "Complete book content"
  
  phase_3_rag_implementation:
    step3:
    tasks:
      - "Set up FastAPI backend"
      - "Configure Qdrant vector database"
      - "Implement embedding pipeline"
      - "Build chatbot frontend component"
      - "Test RAG functionality"
    deliverable: "Working RAG chatbot integrated in book"
  
  phase_4_bonus_features:
    step4:
    tasks:
      - "Implement Better-Auth authentication"
      - "Build user profile system"
      - "Add content personalization"
      - "Implement Urdu translation"
      - "Create and deploy subagents"
    deliverable: "All bonus features functional"
  
  phase_5_polish:
    step5:
    tasks:
      - "Testing and bug fixes"
      - "Performance optimization"
      - "Create demo video (under 90 seconds)"
      - "Prepare presentation materials"
    deliverable: "Production-ready submission"

# ============================================================================
# QUALITY STANDARDS
# ============================================================================

quality_requirements:
  content:
    - "Each chapter must have clear learning objectives"
    - "Include practical code examples (minimum 3 per chapter)"
    - "Provide visual aids (diagrams, screenshots, videos)"
    - "Maintain consistent technical depth"
    - "Cross-reference related chapters"
  
  code:
    - "All code must be tested and functional"
    - "Include comments explaining key concepts"
    - "Follow ROS 2 and Python best practices"
    - "Provide setup/installation instructions"
  
  ui_ux:
    - "Responsive design (mobile, tablet, desktop)"
    - "Fast page load times (< 3 seconds)"
    - "Accessible navigation"
    - "Clear visual hierarchy"
    - "Intuitive chatbot interface"
  
  documentation:
    - "README with setup instructions"
    - "API documentation for backend"
    - "Component documentation for frontend"
    - "Deployment guide"

# ============================================================================
# SUBMISSION REQUIREMENTS
# ============================================================================

submission:
  deadline: "Sunday, Nov 30, 2025 at 06:00 PM"
  form_url: "https://forms.gle/CQsSEGM3GeCrL43c8"
  
  required_items:
    - item: "Public GitHub Repository Link"
      requirements:
        - "Well-organized file structure"
        - "Clear README.md"
        - "All source code included"
    
    - item: "Published Book Link"
      platforms:
        - "GitHub Pages (preferred)"
        - "Vercel"
      requirements:
        - "Fully functional and accessible"
        - "All features working"
    
    - item: "Demo Video"
      duration: "Under 90 seconds"
      content:
        - "Brief introduction (5-10 seconds)"
        - "Navigate through book structure (15-20 seconds)"
        - "Demonstrate RAG chatbot (20-25 seconds)"
        - "Show bonus features if implemented (20-30 seconds)"
        - "Conclusion (5-10 seconds)"
      tools:
        - "NotebookLM for AI-generated demo"
        - "Screen recording software"
      hosting:
        - "YouTube"
        - "Google Drive (public link)"
        - "Vimeo"
    
    - item: "WhatsApp Number"
      purpose: "Contact for live presentation invitation"

  presentation:
    date: "Sunday, Nov 30, 2025"
    time: "Starting at 6:00 PM"
    platform: "Zoom"
    meeting_details:
      url: "https://us06web.zoom.us/j/84976847088?pwd=Z7t7NaeXwVmmR5fysCv7NiMbfbhIda.1"
      meeting_id: "849 7684 7088"
      passcode: "305850"
    format: "By invitation only (top submissions)"

# ============================================================================
# SCORING RUBRIC
# ============================================================================

scoring:
  base_points: 100
    breakdown:
      - "Docusaurus book creation and deployment: 25 points"
      - "Complete course content (all modules): 30 points"
      - "RAG chatbot functionality: 30 points"
      - "Code quality and documentation: 10 points"
      - "User experience and design: 5 points"
  
  bonus_points_1: 50
    criteria: "Reusable intelligence via Claude Code Subagents and Skills"
    requirements:
      - "Minimum 3 functional subagents"
      - "Minimum 4 reusable skills"
      - "Clear documentation of agent functionality"
      - "Demonstrated efficiency improvements"
  
  bonus_points_2: 50
    criteria: "Better-Auth implementation with user profiling"
    requirements:
      - "Functional signup/signin"
      - "Background questionnaire"
      - "Secure user data storage"
      - "Profile-based features"
  
  bonus_points_3: 50
    criteria: "Content personalization based on user background"
    requirements:
      - "Personalization button on each chapter"
      - "Dynamic content adjustment"
      - "Visible difference in content presentation"
      - "Preference persistence"
  
  bonus_points_4: 50
    criteria: "Urdu translation functionality"
    requirements:
      - "Translation button on each chapter"
      - "Accurate technical translation"
      - "Translation caching"
      - "Smooth user experience"
  
  maximum_total: 300 points

# ============================================================================
# KEY REFERENCES & RESOURCES
# ============================================================================

references:
  project_tools:
    - name: "Spec-Kit Plus"
      url: "https://github.com/panaversity/spec-kit-plus/"
      purpose: "Specification-driven development framework"
    
    - name: "Claude Code"
      url: "https://www.claude.com/product/claude-code"
      purpose: "AI-powered coding assistant"
    
    - name: "Docusaurus"
      url: "https://docusaurus.io/docs"
      purpose: "Static site generator for documentation"
    
    - name: "Better-Auth"
      url: "https://www.better-auth.com/"
      purpose: "Authentication library"
  
  inspiration:
    - name: "Panaversity AI Native Book"
      url: "https://ai-native.panaversity.org"
      purpose: "Example of target book format"
  
  technical_documentation:
    ros2: "https://docs.ros.org/en/humble/"
    gazebo: "https://gazebosim.org/docs"
    nvidia_isaac: "https://developer.nvidia.com/isaac-ros"
    fastapi: "https://fastapi.tiangolo.com/"
    openai: "https://platform.openai.com/docs"
    qdrant: "https://qdrant.tech/documentation/"
    neon: "https://neon.tech/docs"

# ============================================================================
# RISK MITIGATION
# ============================================================================

risk_management:
  technical_risks:
    - risk: "Docusaurus deployment failure"
      mitigation: "Test deployment early; have Vercel as backup"
    
    - risk: "RAG chatbot performance issues"
      mitigation: "Implement caching; optimize embedding strategy"
    
    - risk: "Authentication security vulnerabilities"
      mitigation: "Follow Better-Auth best practices; security audit"
    
    - risk: "Translation quality issues"
      mitigation: "Manual review of critical sections; user feedback loop"
  
  timeline_risks:
    - risk: "Content creation taking too long"
      mitigation: "Use Claude Code effectively; prioritize core content"
    
    - risk: "Feature creep delaying submission"
      mitigation: "Focus on base 100 points first; bonus features only if time permits"

# ============================================================================
# SUCCESS CRITERIA
# ============================================================================

success_metrics:
  minimum_viable_product:
    - "Complete Docusaurus book deployed online"
    - "All 6 modules with content"
    - "Working RAG chatbot answering questions"
    - "Demo video under 90 seconds"
    - "Score: 100/100 base points"
  
  competitive_submission:
    - "All MVP features plus 2+ bonus features"
    - "Polished UI/UX"
    - "Comprehensive documentation"
    - "Score: 150-200+ points"
  
  winning_submission:
    - "All features (MVP + all bonuses)"
    - "Exceptional code quality"
    - "Innovative use of subagents"
    - "Outstanding presentation"
    - "Score: 250-300 points"

# ============================================================================
# CONSTITUTION METADATA
# ============================================================================

constitution_metadata:
  version: "1.0"
  created_by: "AI Development Team"
  creation_date: "2025-11-01"
  last_updated: "2025-12-06"
  project_deadline: "2025-11-30 18:00 PKT"
  maintained_by: "Spec-Kit Plus + Claude Code"
  
notes: |
  This constitution serves as the single source of truth for the hackathon project.
  All development decisions should align with these specifications.
  Update this file as the project evolves and new requirements emerge.
  
  Remember: The goal is not just to win the hackathon, but to create a valuable
  educational resource that will help students learn Physical AI and Humanoid Robotics.
  
  