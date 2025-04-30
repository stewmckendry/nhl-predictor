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

---

## 🔧 Mapped Heuristics (NNGroup)
- **#1 Visibility of system status:** No visual confirmation of what data was submitted or how it was used.
- **#2 Match between system and real world:** Uses backend-oriented field names not understandable by end users.
- **#4 Consistency and standards:** Poor styling and layout breaks expectations.
- **#6 Recognition rather than recall:** No bracket/team context forces user memory.
- **#8 Aesthetic and minimalist design:** Raw JSON output violates this principle.

---

## 🔄 Recommended Fixes

### Form:
- Add a title and short instruction paragraph.
- Dynamically replace `Team A` and `Team B` with actual team names.
- Use labels like `Washington Capitals Wins` instead of internal IDs.
- Add structured layout with adequate spacing and responsive design.

### Output:
- Replace raw JSON with an HTML-based formatted bracket.
- Use styled headers, bold team names, and round-level grouping.
- Consider collapsible or step-wise views for deeper brackets.

---

## 📄 Files Updated

### 1. `project/app/SimulatePage.jsx`
- Added title, instructions
- Refactored input labels to show real team names
- Styled form layout using Tailwind

### 2. `project/app/BracketDisplay.jsx` (new)
- Component to render the response in human-friendly format
- Displays round headers and winners in styled table format

### 3. `project/styles/globals.css`
- Minor style tweaks to improve layout padding and font hierarchy

---

## 📅 File Path for Bug
`project/docs/bugs/frontend_usability_bug.md`