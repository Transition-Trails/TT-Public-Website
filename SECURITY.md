# Security Policy

## Supported versions

Only the current production deployment of the TT Public Website is actively maintained.

## Reporting a vulnerability

**Please do not report security vulnerabilities through GitHub Issues.**

If you discover a security issue — including XSS, data exposure, dependency vulnerabilities, or anything that could affect visitors or partners — report it privately:

**Email:** hello@transitiontrails.org  
**Subject line:** `[SECURITY] <short description>`

Please include:
- A clear description of the vulnerability
- Steps to reproduce or a proof of concept
- The potential impact
- Any suggested remediation

We will acknowledge your report within 48 hours and aim to resolve confirmed issues within 14 days. We'll keep you updated throughout the process.

We do not currently operate a bug bounty program, but we genuinely appreciate responsible disclosure and will publicly credit reporters (with permission) once the issue is resolved.

## Dependency security

Dependencies are monitored automatically via Dependabot (`.github/dependabot.yml`). PRs for dependency updates are reviewed weekly and merged promptly for security patches.

For critical vulnerabilities in dependencies, we will ship a fix outside the normal review cycle.
