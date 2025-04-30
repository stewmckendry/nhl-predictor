# 🛠 UX Bug Report: Frontend Usability Issues

## ❌ Issues Observed

### 1. 🔎 Lack of Guidance
- No introductory instructions or context provided.
- Users don't know what to enter or why.

### 2. 🎨 Poor Labeling
- Form fields labeled like `Eastern_1 Team A Wins` and `Team B Wins`, with no team names or context.
- Highly ambiguous for a general user unfamiliar with the bracket structure.

### 3. 🌚 Visual Design Gaps
- Form appears unstyled in the top-left corner.
- Font styling is minimal or missing.
- No layout padding or alignment to guide the eye.

### 4. 🔟 Feedback Format
- Output is raw JSON, which is difficult to interpret visually.
- No headings, highlights, or structured display.

### 5. ❌ Unwired Input Form
- The win input form currently has no effect on the simulation logic.
- Creates misleading UX — users think input matters, but it doesn’t.

---

## 🔧 Mapped Heuristics (NNGroup)
- **#1 Visibility of system status**
- **#2 Match between system and real world**
- **#4 Consistency and standards**
- **#6 Recognition rather than recall**
- **#8 Aesthetic and minimalist design**

---

## 🔄 Recommended Fixes

### Already Implemented
- Title and instructions
- Friendly team labels
- Responsive layout and form styling
- Bracket result display with celebration logic
- Validation for 0–4 wins

### 🎯 MVP Enhancements
1. **Hide or disable form in MVP** to prevent confusion ✅
2. **Banner stating scores are ignored** in current version ✅
3. **Update styles to match ChatGPT-like UI** ✅
4. **Wire input to simulation (future)**

---

## 📄 Files Updated

### 1. `project/app/SimulatePage.jsx`
- Hide form
- Add banner indicating scores are not used
- Style updates to match ChatGPT

### 2. `project/styles/globals.css`
- Enhanced UI styles: font stack, headings, sections, dividers

---

## 📅 File Path for Bug
`project/docs/bugs/frontend_usability_bug.md`