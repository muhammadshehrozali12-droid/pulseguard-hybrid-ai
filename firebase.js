// firebase.js - PulseGuard Hybrid AI
// Real Firebase AI Logic + App Check (Debug Token for Hackathon)

import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";
import { getAI, getGenerativeModel } from "firebase/ai-logic";
// Placeholder config - Safe for Public Repo
// Real keys are only used locally, never pushed to 【entity-GitHub¦canonical_name=GitHub】
const firebaseConfig = {
  apiKey: "YOUR_API_KEY_HERE",
  authDomain: "pulseguard-hybrid-ai-a5d68.firebaseapp.com",
  projectId: "pulseguard-hybrid-ai-a5d68",
  storageBucket: "pulseguard-hybrid-ai-a5d68.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID_HERE",
  appId: "YOUR_APP_ID_HERE"
};

// Check if real config is present or placeholder
export function isFirebaseConfigured() {
  return !firebaseConfig.apiKey.includes("YOUR_");
}

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
// App Check - Debug Token for Hackathon (Safe)
// In browser console: self.FIREBASE_APPCHECK_DEBUG_TOKEN = "YOUR_DEBUG_TOKEN"
try {
  initializeAppCheck(app, {
    provider: new ReCaptchaV3Provider("YOUR_RECAPTCHA_SITE_KEY"),
    isTokenAutoRefreshEnabled: true
  });
} catch (e) {
  console.log("App Check in debug mode, using fallback");
}

// Firebase AI Logic - Cloud Model
const ai = getAI(app);
const model = getGenerativeModel(ai, { model: "gemini-2.5-flash" });

// Cloud Triage Function - Called when Route = CLOUD
export async function runCloudTriage(prompt) {
  if (!isFirebaseConfigured()) {
    return { error: "placeholder_config", fallback: true };
  }
  try {
    await signInAnonymously(auth);
    const result = await model.generateContent(
      `You are PulseGuard, a hybrid AI triage assistant. Analyze this incident and return Severity (LOW/MEDIUM/HIGH/CRITICAL) + 3 action steps: ${prompt}`
    );
    return { text: result.response.text(), route: "cloud" };
  } catch (err) {
    console.error(err);
    return { error: "cloud_failed", fallback: true };
  }
}
