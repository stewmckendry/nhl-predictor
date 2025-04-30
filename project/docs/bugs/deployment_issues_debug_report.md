# 🛠 Deployment Bug Report: FastAPI + Next.js Integration

## 📝 Summary
This bug report documents the issues encountered during the deployment of the NHL Playoff Predictor on Railway, particularly with integrating a Next.js frontend and a FastAPI backend. All fixes were applied manually by the Human Lead due to volume and sequencing considerations.

---

## ❌ Issues Encountered and Fixes

### 1. Railway Failed to Detect FastAPI Python App
- **Issue:** `uvicorn` not found on deploy.
- **Fix:** Moved FastAPI source and `requirements.txt` into `project/backend/`.
- **Lesson:** Keep Python apps in a clearly scoped folder with `requirements.txt` at the root.

### 2. `ModuleNotFoundError: No module named 'simulator'`
- **Issue:** Python path issues after moving FastAPI to `backend/`.
- **Fix:** Moved `simulator/` and `bracket/` folders inside `backend/`, updated imports.

### 3. `ModuleNotFoundError: No module named 'yaml'`
- **Issue:** Missing dependency.
- **Fix:** Added `PyYAML` to `requirements.txt`.

### 4. `FileNotFoundError: playoff_bracket.yaml`
- **Issue:** Incorrect file path in FastAPI server.
- **Fix:** Updated to `bracket/playoff_bracket.yaml` after moving YAML into `backend/bracket/`.

### 5. Frontend 502 Error on Launch
- **Issue:** `next start` was binding to port 8080, not Railway's expected port.
- **Fix:** Hardcoded port 3000 via `start` script in `package.json`.

### 6. API Route 404: `/api/simulate`
- **Issue:** Proxy file was in `project/api/`, not recognized by Next.js.
- **Fix:** Moved file to `project/pages/api/simulate.js`.

### 7. Invalid URL in Fetch
- **Issue:** `FASTAPI_BASE_URL` was missing `https://` prefix.
- **Fix:** Updated env var to full URL including protocol.

---

## 📆 Recommendations

### Technical:
- Use separate subdirectories for frontend (`project/`) and backend (`project/backend/`).
- Always include full `https://` scheme in API base URLs.
- Use `.env` variables conservatively — never override `PORT` in Railway.
- Place Next.js API routes only in `pages/api/`.

### Process:
- Consider validating structure locally with Railway CLI before cloud deploy.
- Use a pre-deploy checklist for port, env vars, and directory layout.
- Capture deployment logs early and often.

### Tooling:
- Auto-detect FastAPI or Next.js root folders to reduce misconfiguration.
- Offer a dry-run mode or deploy simulation in dev environments.

---

## 📁 File Path
`project/docs/bugs/deployment_issues_debug_report.md`