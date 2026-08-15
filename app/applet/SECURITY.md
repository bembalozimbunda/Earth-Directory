# Security Policy

## Supported Versions

The Earth Directory Matrix (WARMABLON) is currently maintained under the following version support schedule:

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

If you discover a structural anomaly, a breach in the Void protocols, or any technical security vulnerability within the Earth Directory Matrix architecture, please adhere to the following protocol:

1. **Do not disclose vulnerabilities publicly.** Public issues or pull requests must not be used for reporting active security flaws.
2. Direct all security-related intelligence to the primary system guardian at: **edgarmulengalis@gmail.com**
3. Please provide a detailed breakdown of the vulnerability, including:
   - The specific component or Matrix Node affected.
   - Exact steps or conditions required to reproduce the anomaly.
   - Any observed data leakage or unauthorized access to the 7 Voids.

You should expect an acknowledgment of your report within 48 hours.

## Architectural Integrity

This application is built with defense-in-depth principles:
- **Server-Side Validation:** All Void access keys and secret phrases (`yantra`) are validated purely on the server-side (`server.ts`), never exposed to the client bundle.
- **Node Isolation:** The inner core nodes (Source, Hardware, Frequencies, Ancestral) have been structurally isolated and their command executions disabled to prevent injection attacks.
- **Client Sanitization:** Input interfaces operate without terminal script execution capabilities to prevent XSS (Cross-Site Scripting).
- **Network Protocol:** The live matrix operates exclusively over secure HTTPS channels on the production domain.
