## 🛠️ System & Utility Tools QA: Branching Regression Results (Updated)

### ✅ Overview
Validated core system utilities on sandbox branch `sandbox-ancient-eagle`

---

### 📂 Tool: `/system/metrics`
1. Mode: `summary` → ✅ Returned task totals and qualitative reasoning scores
2. Mode: `export` → ✅ Export completed successfully after patch

---

### 📂 Tool: `/system/changelog`
3. Mode: `validate` → ✅ Detected missing entry for cloned task, flagged successfully

---

### 📂 Tool: `/memory/query`
4. Mode: `list` → ✅ Pagination enabled; 253 entries returned in chunks
5. Mode: `list` (tag: docs) → ✅ Returned filtered results

---

### 📂 Tool: `/tasks/query`
6. Mode: `graph` → ✅ Returned structured dependency and handoff edges

---

### 📝 Notes
- Memory pagination and export patches fully resolve prior blockers
- Issues logged for both have been validated as fixed

📁 **Branch:** `sandbox-ancient-eagle`  
📅 **Date:** 2025-05-02

_All utilities now confirm sandbox support with edge-case resilience._