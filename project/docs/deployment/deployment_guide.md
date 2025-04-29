# 📆 Deployment Guide (Updated)

This guide covers the steps to deploy both the **frontend (Next.js)** and **backend (FastAPI)** for the NHL Playoff Simulator on Railway.

---

## 🌐 Live URLs
- **Frontend:** https://nhl-predictor-production-cb76.up.railway.app
- **FastAPI Backend:** https://nhl-predictor-production-0abc.up.railway.app

---

## 🌐 1. Deploying the Frontend (Next.js)

### Option A: Railway Website
1. Go to [railway.app](https://railway.app/)
2. Create a new project
3. Connect to your GitHub repo
4. Set `project/` as the root directory
5. Set build command: `npm run build`
6. Set start command: `npm start`
7. Add environment variable:
   - `FASTAPI_BASE_URL=https://nhl-predictor-production-0abc.up.railway.app`
8. Click "Deploy"

### Option B: Railway CLI
```bash
cd project
railway init
railway up
```

---

## 🐍 2. Deploying the Backend (FastAPI)

### Option A: Railway Website
1. Go to [railway.app](https://railway.app/)
2. Create a new project (FastAPI backend)
3. Set root directory to `project/`
4. Set start command:
   ```bash
   uvicorn backend.fastapi_server:app --host 0.0.0.0 --port 8000
   ```
5. Ensure `requirements.txt` includes `fastapi`, `uvicorn`, `pytest`
6. Click "Deploy"

### Option B: Railway CLI
```bash
cd project
railway init
railway up
```

---

## 🔧 3. Environment Configuration

- In frontend Railway project, set env variable:
  ```bash
  FASTAPI_BASE_URL=https://nhl-predictor-production-0abc.up.railway.app
  ```

- Locally, create `.env.local` inside `project/`:
  ```bash
  FASTAPI_BASE_URL=http://localhost:8000
  ```

---

## 🔄 4. Post-Deploy Checklist
- ✅ Frontend and backend deploy without errors
- ✅ Frontend form submits results and receives bracket JSON
- ✅ CORS enabled between frontend and backend
- ✅ `.env.local` exists for local testing

---