---
name: Artifact startup health logs
description: How to distinguish normal artifact publish startup noise from a real API outage.
---

Transient `healthcheck /api returned status 500` entries can appear while the artifact sidecar is polling before the API port begins listening. A nearby `signal: terminated` line can be the prior instance shutting down during replacement rather than an application crash.

**Why:** A successful publish showed several red `/api` 500 entries before port detection, followed by a successful request to the configured health route and a healthy live site. Adding another API route would not prevent failures emitted before the process can accept requests.

**How to apply:** Check the artifact's configured startup-health path, look for a later 200 response and continued process lifetime, then verify the production root and health URL directly. Only change code when the configured health route itself fails after the server is listening.