---
description: Rule to route /argon tasks to gemini-4-argon model via the Gemini API
trigger: always_on
---

# Argon Model Execution Routing

When the user specifies or runs the `/argon` command:
- Do NOT rely on the default native UI model selector.
- Route and execute the requested task using the `gemini-4-argon` model over the Gemini API.
- Use the API environment variable `GEMINI_API_KEY` (configured in the MCP environment configuration) for authenticating calls to the Gemini API (`https://generativelanguage.googleapis.com/v1beta/models/gemini-4-argon:generateContent`).
