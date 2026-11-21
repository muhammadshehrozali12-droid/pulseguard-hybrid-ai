# PulseGuard Hybrid AI — #BuildHybridAI 2026

> **Hybrid triage assistant with routing telemetry.**
> Small / sensitive work runs **LOCAL** (fast + private).
> Large / complex work runs **CLOUD** via **Firebase AI Logic**.

## 🔴 Live Demo

**【entity-GitHub Pages¦canonical_name=GitHub】:** https://muhammadshehrozali12-droid.github.io/pulseguard-hybrid-ai/

> Free & unrestricted access until judging ends (16 Dec 2026).
> No login required. Anonymous Auth is used in background.

## 🎯 Real-World Problem

On-call engineers, SREs and support teams get 100s of alerts daily. Every alert going to cloud is slow, expensive, and leaks sensitive data.

**PulseGuard solves this with Hybrid Inference:**
- Quick triage → On-device / Local (fast, private, offline-safe)
- Deep analysis → Cloud via Firebase AI Logic (powerful, Gemini)
- Sensitive data → Never leaves device when Privacy Mode is ON

## ✨ Core Features

### 1. Routing Modes (Hybrid Inference)
| Mode | Behaviour |
| :--- | :--- |
| **Auto (Hybrid)** | `<= 40 words / 240 chars` → LOCAL, else → CLOUD |
| **Local / Fast Triage** | Always LOCAL — Gemini Nano 4 style on-device triage |
| **Cloud (Firebase AI Logic)** | Always CLOUD — `getAI()` + `getGenerativeModel(gemini-2.5-flash)` |

### 2. Three Super Cloud Features
1.  **Structured AI Triage:** `SEVERITY + CONFIDENCE + EVIDENCE + ESCALATE + ACTIONS + ROOT CAUSE`
2.  **Auto-Escalation:** Cloud decides `ESCALATE: YES / NO` with reason
3.  **Proof + Transparency:** Every run shows `Route + Model + Latency + App Check + Firestore Log`

### 3. Core Triage & Diagnostic Output
- Status, Active Route, Latency, Routing Reason
- Severity Estimate, Confidence Score, Evidence
- Telemetry Log of all recent runs

### 4. Privacy Mode
- `Privacy: ON` → Forces LOCAL, even for long prompts
- Sensitive auth / security data stays on-device

### 5. Resilient Fallback
- If Firebase is not configured (public demo) → Safe Local Fallback
- If Cloud fails → Safe Local Fallback
- **App never crashes.**

## 🏗️ Hybrid Architecture
