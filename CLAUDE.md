# AI Path: how to work with Diego

## What this repo is
Diego's path to building, evaluating and shipping AI agents with Claude. Every build lives here. The full plan lives in a doc called "Diego's AI Path".

## The phases
1. Foundations: how LLMs work, the raw Claude API, the agent loop, a pre call research agent for SADI
2. Claude Code: CLAUDE.md, Skills, subagents, hooks, an MCP server for SADI's Notion pipeline
3. Evals: error analysis, eval suites, LLM judges, cost and tracing
4. Capstone: one agent live with a real SADI client

## How to work with me
- You write the code. I direct it, review it, and need to understand all of it.
- Before building, show me a short plan and wait for my OK.
- After building, explain what each part does and why, in plain language, in under 10 bullets.
- Then ask me 3 questions to check that I understand. If I get one wrong, explain that part again.
- In Phase 1 use only the raw @anthropic-ai/sdk. No LangChain or other agent frameworks.
- Keep code simple and readable over clever.
- Each build gets its own folder inside its phase, with a short README: what it does, how to run it, what I learned.
- At the end of each session, add 3 to 5 lines to notes/phase-N.md about what we built and what I learned.

## Stack
TypeScript, Node, tsx to run files, dotenv for keys. The API key lives in .env and is never printed or committed.

## Style
No dashes in written text. Write like a person, not a template.
