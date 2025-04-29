# 📚 Technical Spec: Playoff Simulation Core

## 🔍 Overview
This spec defines the technical design for the **Playoff Simulation Core** feature. It enables users to input live NHL playoff series results and generates a full simulated playoff bracket outcome.

---

## 🔀 Inputs
- `series_results`: JSON object with team matchups and their win counts.
- `playoff_bracket`: Static bracket config file (`playoff_bracket.yaml`) defining matchups and rules.

## 📊 Outputs
- `simulated_bracket`: JSON object representing the full playoff path to champion.

## 🔹 Key API / Functions
- `/api/simulate` (POST): Accepts series results and returns simulated bracket.
- `simulate_playoffs(series_results, bracket_definition)`: Core simulation engine.
- `predict_series_winner(team_a, team_b)`: Randomly predicts a series winner if needed.

## 🛋️ Sequence Flow
```
User Input → API POST /simulate → Call simulate_playoffs → Return bracket JSON → Frontend renders bracket
```

## 🌐 Tech Stack
- Frontend: Next.js
- Backend: Node.js API (Railway Cloud)
- Simulator Engine: Python
- Bracket Definition: Static YAML file

## 🔧 Edge Cases / Validation
- Handle incomplete series inputs.
- Ensure bracket consistency.
- Sanitize inputs.

---

*(Saved to `project/docs/specs/spec_playoff_simulation.md`)*