This is a readme file for the project. It provides an overview of the API routes and their functionalities, including examples and future enhancements. The document is structured to give a clear understanding of the API's capabilities and how they can be utilized in various scenarios.
[]: # 
[]: # **Artifacts:**  
[]: # - `POST /tasks/artifacts` with action: `"upload"` or `"download"`  
[]: # - `POST /tasks/artifacts/manage` with action: `"delete"` or `"update_metadata"`  
[]: # 
[]: # **GitHub Integration:**  
[]: # - `POST /github/manage` with action: `"create_issue"`, `"create_pr"`, `"merge_pr"`, `"close_issue"`  
[]: # - `POST /github/commit` with action: `"commit"` or `"revert"`  
[]: # 
[]: # ---
[]: # 
[]: # ### 🛠️ API Routes Overview
[]: # 
[]: # | **Route**                     | **Description**                                                                 |
[]: # |-------------------------------|---------------------------------------------------------------------------------|
[]: # | `POST /tasks/lifecycle`       | Manage task lifecycle (start, complete, etc.)                                  |
[]: # | `POST /tasks/manage_metadata` | Update task metadata or clone tasks                                            |
[]: # | `POST /memory/manage`         | Manage memory (add, index, diff, validate)                                     |
[]: # | `POST /memory/query`         | Query memory (search, list entries, stats)                                     |
[]: # | `POST /tasks/artifacts`       | Upload/download artifacts                                                       |
[]: # | `POST /github/manage`        | Manage GitHub issues and pull requests                                         |
[]: #
[]: # | `POST /github/commit`        | Commit or revert changes to GitHub                                             |
[]: # 
[]: # ---
[]: # 
[]: # ### 🛡️ Security Considerations
[]: # 
[]: # - **No GPT user-specific auth**: Require `repo_name` and `repo_owner`, validate fork in backend
[]: # - **Risk of shared repo overwrites**: Force writes to forked repo or sandbox branches
[]: # - **Risky tool exposure**: Expose only safe, read/write-limited tools
[]: # - **New user onboarding**: Provide clear guide via GPT system message and markdown link
[]: # 
[]: # ---
[]: # 
[]: # ### 📘 Welcome Guide for GPT
[]: # 
[]: # ```markdown
[]: # ## 👋 Welcome to ProductPod Sandbox GPT
[]: # 
[]: # You’re about to explore an AI-native delivery system backed by Git + reasoning.
[]: # 
[]: # ### 🔧 Setup Steps
[]: # 1. Fork the base repo: [ai-delivery-framework]