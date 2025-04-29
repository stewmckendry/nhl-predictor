# 📚 Technical Spec: Playoff Simulation Core (v2)

## 🔍 Overview
This spec defines the updated technical design for the **Playoff Simulation Core**, now capable of simulating **all rounds** of the NHL playoffs from the first round through the Stanley Cup Final.

---

## 🔀 Inputs
- `series_results`: JSON object with team matchups and win counts.
- `playoff_bracket`: Static YAML file defining matchups and round flow using `teams` or `source` keys.

## 📊 Outputs
- `simulated_bracket`: JSON object capturing round-by-round winners up to the Stanley Cup.

## 🔹 Key API / Functions
- `/api/simulate` (POST)
- `simulate_playoffs(series_results, bracket_definition)` (multi-round engine)
- `predict_series_winner(team_a, team_b, wins_a, wins_b)`

## 🛋️ Sequence Flow
```
User Input → API POST /simulate → Call simulate_playoffs → Return full bracket → Render on frontend
```

## 🌐 Tech Stack
- Frontend: Next.js
- Backend: Node.js on Railway
- Engine: Python
- Config: Static YAML

---

## 🧬 Updated Simulator Logic

### `simulate_playoffs()` (Multi-Round)
1. Initialize empty `results` dict.
2. Loop through each round in YAML (`round_1` to `round_4`):
   - For each series:
     - If `teams` is present (e.g., round_1): use them directly.
     - If `source` is present (later rounds): resolve previous winners using:
       ```python
       team_a = results[prior_round][source_a]['winner']
       team_b = results[prior_round][source_b]['winner']
       ```
     - Run `predict_series_winner()`
     - Store result in `results[round][series_id]`
3. Return `results`.

### Example YAML for Round 2
```yaml
round_2:
  Eastern_SF_1:
    source: ["Eastern_1", "Eastern_4"]
```
Example Python to resolve:
```python
team_a = results["round_1"]["Eastern_1"]["winner"]
team_b = results["round_1"]["Eastern_4"]["winner"]
```

### `predict_series_winner()`
Same logic as before: use scores if provided, fallback to random.

---

## 📊 New Testing Plan
- Validate final structure includes keys for all 4 rounds.
- Add unit test cases where source resolution logic is used.
- Assert Stanley Cup champion is always returned.

---

## 🌿 Enhancements Log
- [x] Support multi-round simulation
- [ ] Bias outcomes by seed
- [ ] Ingest live NHL data

---

*(This file should be saved to `project/docs/specs/spec_playoff_simulation_v2.md`)*