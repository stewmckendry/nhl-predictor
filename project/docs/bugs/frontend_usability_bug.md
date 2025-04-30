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

### Already Implemented
- Title and instructions on top of the form
- Friendly team-based labels
- Better layout and spacing via Tailwind
- Styled results view with round-based headings

### 🎯 Prioritized MVP Enhancements
1. **Hide form after results are submitted** – Prevent clutter and make results the focus.
2. **Loading indicator during simulation** – Show feedback during backend call.
3. **Confetti/trophy animation for champion** – Quick, visual delight moment for end users.
4. **Empty state message** – Explain what's expected if nothing has been submitted yet.
5. **Win limit validation** – Ensure inputs are constrained to max of 4 wins.

---

## 📄 Files Updated

### 1. `project/app/SimulatePage.jsx`
- Includes all 8 series from Round 1
- Input validation added for 0–4 wins
- Instructions, layout enhancements, post-submit flow added

### 2. `project/app/BracketDisplay.jsx`
- Renders results by round, not as raw JSON
- Notifies parent when champion is detected

### 3. `project/styles/globals.css`
- Spinner and animation styling for celebration + loading

---

## 📅 File Path for Bug
`project/docs/bugs/frontend_usability_bug.md`
