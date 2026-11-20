# PulseGuard Hybrid AI

An incident triage and hybrid AI routing web application built for **#BuildHybridAI 2026**.  
It combines fast local/heuristic triage, cloud routing awareness (designed for **Firebase AI Logic** with project `pulseguard-hybrid-ai-a5d68`), live latency/routing telemetry, one-click incident presets, and resilient fallback handling.

## Live Demo
- **GitHub Pages:** `https://muhammadshehrozali12-droid.github.io/pulseguard-hybrid-ai/`

## Key Features & Extras
- **Hybrid Routing Modes:** Supports `Auto (Hybrid)`, `Local / Fast Triage`, and `Cloud (Firebase AI Logic)` selection.
- **Transparent Routing Telemetry:** Displays active route, routing reason, execution latency (`ms`), and estimated severity (`HIGH` / `MEDIUM`).
- **One-Click Incident Presets:** Built-in test scenarios for **CPU Spike**, **Auth Anomaly**, and **Support Ticket** triage.
- **Recent Run Telemetry Log:** Tracks recent runs with timestamps, selected routes, latency, and routing reasons.
- **Resilient Fallback:** Gracefully handles missing/placeholder cloud configuration or runtime errors without freezing the UI.

## How Hybrid Routing Works
1. **Explicit Selection:** Selecting `Local / Fast Triage` or `Cloud (Firebase AI Logic)` forces the chosen path.
2. **Auto Mode:** Routes longer prompts (`> 240` characters) or high-severity/security/outage indicators toward cloud triage, while handling shorter prompts rapidly via local/fast triage.

## Security & Configuration Note
- Placeholder `firebaseConfig` values are intentionally used in this public repository so sensitive keys/credentials are never exposed in public commits.
- When testing with real Firebase credentials locally or in a private environment, keep real keys out of public branches/commits.
- 
