## 🛠️ System & Utility Tools QA: Branching Regression Results

### ✅ Overview
Validated core system utilities on sandbox branch `sandbox-ancient-eagle`

---

### 📂 Tool: `/system/metrics`
1. Mode: `summary` → ✅ Returned task totals and qualitative reasoning scores
2. Mode: `export` → ❌ Failed with internal server error (branch param included)

---

### 📂 Tool: `/system/changelog`
3. Mode: `validate` → ✅ Detected missing entry for cloned task, flagged successfully

---

### 📂 Tool: `/memory/query`
4. Mode: `list` → ❌ ResponseTooLargeError
5. Mode: `list` (tag: docs) → ✅ Returned filtered results

---

### 📂 Tool: `/tasks/query`
6. Mode: `graph` → ✅ Returned structured dependency and handoff edges

---

### 📝 Notes
- Some endpoints break when querying large payloads (memory index)
- Export functionality on metrics may still be unpatched — worth retrying after next release

📁 **Branch:** `sandbox-ancient-eagle`  
📅 **Date:** 2025-05-02

_This validates core utilities on an isolated branch with expected and edge-case behaviors._