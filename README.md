# Earth Directory & The 7 Voids

A full-stack, metaphysical geographic intelligence interface simulating planetary directory structures, voids, and ancestral mappings.

## Architecture

This project is built using:
- **Frontend:** React 18, Vite, Tailwind CSS, Framer Motion (for node animations).
- **Backend:** Express.js server providing secure validation.
- **Security Mechanism:** Client-side secrets have been eliminated. All void authorization codes and the master override keys (yantra) are securely validated on the backend via `/api/verify-void` and `/api/verify-secret`.

## Setup & Running

### Requirements
- Node.js >= 18

### Environment Variables
Create a `.env` file in the root based on `.env.example`. Currently, if you integrate Gemini AI, you must provide:
```env
GEMINI_API_KEY=your_api_key_here
```

### Installation
```bash
npm install
```

### Development
Start the application in development mode:
```bash
npm run dev
```
This boots the `tsx server.ts` process which serves both the API and the Vite React app simultaneously.

### Production Build
Compile the frontend and backend:
```bash
npm run build
npm start
```

## Security Notes
- **Do not commit secrets:** Ensure no API keys or Firebase config files are committed to this repository.
- **Backend Verification:** Never trust the client with entry codes. Raw keys must remain in `server/data/void_keys.ts`.
