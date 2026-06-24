# Métrica Survey Web App

## Overview
This repository contains the **Métrica** survey application.

- **Backend**: Node.js + Express + TypeScript, uses **MongoDB** for persistence.
- **Frontend**: Vite + React + TypeScript, styled with a blue‑centric palette and Inter font.
- **Docker**: `docker-compose.yml` orchestrates backend, frontend and a MongoDB container.

## Quick start (local Docker)
```bash
# From the project root
docker compose up --build
```
The frontend will be available at **http://localhost:5173**, the backend at **http://localhost:4000**, and MongoDB on port **27017**.

## Scripts
- `npm run dev` – start Vite dev server (frontend only)
- `npm run build` – build production assets
- `npm start` – run backend (after `npm install` in `backend`)

## Project structure
```
.
├─ backend/          # Express API
├─ frontend/         # React UI
├─ docker/           # Dockerfiles & compose
└─ README.md
```

Feel free to customize the stack or add features (e.g., WebSockets, CI).
