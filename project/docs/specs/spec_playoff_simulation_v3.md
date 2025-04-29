# 📚 Technical Spec: Playoff Simulation Core (v3)

## 🔍 Overview
This spec defines the updated technical design for the **Playoff Simulation Core**, incorporating a FastAPI Python server to run the simulation engine and allow seamless integration with the Next.js frontend.

---

## 🔀 Inputs
- `series_results`: JSON object with team matchups and win counts.

## 📊 Outputs
- `simulated_bracket`: JSON object representing the full playoff bracket outcome.

## 🔹 Key Components
- **Frontend UI (Next.js)**: `SimulatePage.jsx`
  - Allows user to input team scores.
  - Submits form data via POST request.
- **Serverless API (Next.js)**: `api/simulate.js`
  - Acts as a proxy server.
  - Forwards user input to the FastAPI backend.
- **Backend API (FastAPI)**: `simulate_playoffs()` endpoint
  - Receives input.
  - Runs simulation engine.
  - Returns full playoff simulation bracket.
- **Engine Core (Python)**: `simulate_playoffs(series_results, bracket_definition)`
  - Main logic computing winners across all playoff rounds.

## 🛋️ Sequence Flow
```
User Input → Frontend Form Submission (Next.js Form)
→ POST to /api/simulate (Serverless Node.js Proxy)
→ Forward HTTP POST to /simulate (FastAPI Python Server)
→ Python simulate_playoffs()
→ Return JSON result to Frontend
→ Render JSON Playoff Bracket
```

## 🌐 Tech Stack
- Frontend: Next.js (Node.js)
- Middleware: Next.js Serverless API Proxy
- Backend: FastAPI (Python 3.10)
- Deployment: Railway Cloud (separate services if needed)

---

## 🧬 Backend Design

### FastAPI Service
- Endpoint: `POST /simulate`
- Request Body: `{ "series_results": { ... } }`
- Response Body: `{ "simulated_bracket": { ... } }`

Example FastAPI Code:
```python
from fastapi import FastAPI, Request
from simulator.simulation_engine import simulate_playoffs
import yaml

app = FastAPI()

with open("project/bracket/playoff_bracket.yaml", "r") as f:
    bracket_definition = yaml.safe_load(f)

@app.post("/simulate")
async def simulate(request: Request):
    body = await request.json()
    series_results = body.get("series_results", {})
    simulated_bracket = simulate_playoffs(series_results, bracket_definition)
    return {"simulated_bracket": simulated_bracket}
```

### Next.js API Proxy
- `/api/simulate.js` will forward requests to the FastAPI server.
- Use `fetch('http://localhost:8000/simulate', { method: 'POST', ... })`

---

## 📊 New Testing Plan
- Unit test FastAPI server standalone
- Unit test simulate_playoffs separately (already done)
- Integration test from frontend submission to final JSON rendering

---

## 🌿 Deployment Notes
- Deploy FastAPI server to Railway separately.
- Deploy Next.js app separately.
- Configure environment variables (e.g., API_BASE_URL) if needed.
- Ensure CORS is handled appropriately between services.

---

*(This file should be saved to `project/docs/specs/spec_playoff_simulation_v3.md`)*