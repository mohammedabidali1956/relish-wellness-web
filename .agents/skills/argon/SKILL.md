---
name: argon
description: Execute task using the gemini-4-argon model over the Gemini API instead of native selector when /argon is triggered.
---

# /argon Task Execution

When `/argon` is invoked:
1. Extract the task/prompt provided after `/argon`.
2. Execute the prompt against the `gemini-4-argon` model via the Gemini API using the `GEMINI_API_KEY`.
3. Provide the output or follow the returned instructions to carry out file changes, analysis, or coding tasks.
