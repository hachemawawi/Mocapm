# PMI CAPM® Exam Simulator — Full Technical & User Documentation

## 1. System Overview
The **PMI CAPM® Exam Simulator** is an interactive, client-side web application designed to emulate the official PMI Certified Associate in Project Management examination environment.

- **Question Bank**: 150 authentic questions compiled across official PMI CAPM ECO domains.
- **Duration**: Standard 3-hour (180-minute) countdown timer.
- **Passing Threshold**: ~70% (105 / 150 correct).
- **Architecture**: Zero-dependency Vanilla HTML5, CSS3, and ES6+ JavaScript.

---

## 2. Examination Content Outline (ECO) Mapping

The 150 questions in [`questions.js`](file:///c:/Users/MSI/Documents/CAPM%20Mock%20Exam/questions.js) are distributed across the four official CAPM ECO domains:

| Domain | Weighting / Questions | Core Topics Covered |
|---|---|---|
| **Predictive, Plan-Based Methodologies** | 44 Questions (29.3%) | Scope Baseline, WBS, Schedule Network Diagrams, Critical Path Method (CPM), Float/Slack calculations, Earned Value Management (EVM), Procurement Planning, Change Control |
| **Agile Frameworks/Methodologies** | 43 Questions (28.7%) | Scrum framework, Roles (Product Owner, Scrum Master, Developers), Ceremonies (Sprint Planning, Daily Scrum, Sprint Review, Retrospective), Kanban WIP limits, Burndown Charts, Story Points & Team Velocity, Stacey Complexity Matrix |
| **Project Management Fundamentals** | 40 Questions (26.7%) | PMBOK 7th 12 Principles, Project Charter, Stakeholder Engagement Matrix, Project vs Program vs Portfolio, Leadership styles, Lessons Learned, PMI Code of Ethics and Professional Conduct |
| **Business Analysis Frameworks** | 23 Questions (15.3%) | Requirements Elicitation, Requirements Traceability Matrix (RTM), Product Roadmaps, Stakeholder RACI, BCG Product Portfolio Matrix (Stars, Cash Cows, Question Marks, Dogs), Kano Model |

---

## 3. Application Flow & Functional Modules

### A. Timer & Single-Button Session Controller
- **Initial State**: Parked at `03:00:00`.
- **Button**: `#btnStartExam` in the top navigation bar.
- **States**:
  - `▶ Start Exam` (Green glow): Starts the 180-minute countdown interval.
  - `⏸ Pause Exam` (Subtle dark): Pauses the countdown interval.
  - `▶ Resume Exam` (Amber glow): Resumes the countdown interval.
- **Auto-Start**: Selecting an answer before clicking Start automatically activates the timer so candidates don't spend untracked time.
- **Auto-Submit**: When time reaches `00:00:00`, the exam submits and calculates the score automatically.

### B. Question Card & Dynamic Content
- **Meta Bar**: Displays Question Number (`# / 150`), Domain Tag (color-coded by domain), "Choose 2 answers" badge for multi-select, and Flag button (`#btnToggleFlag`).
- **Scenario Dialogues**: Automatically parses conversational strings and displays them as clean speech bubbles between Project Managers, Sponsors, and Stakeholders (Questions 27–29, 37–38, 139–140).
- **Diagram Container**: Renders high-resolution cropped diagram PNGs for 35 questions. Includes a click-to-zoom Lightbox modal (`#modalLightbox`).
- **Options List**: Styled cards with keyboard letters (`A`, `B`, `C`, `D`), responsive hover effects, and selection indicators.

### C. Question Navigator Palette
- **Grid Matrix**: 150 circular/rounded buttons showing live question status:
  - White border / hollow: Unattempted
  - Solid Indigo: Answered
  - Amber pin icon: Flagged for review
  - Glowing highlight: Active question
  - Green (Post-submit): Correct answer
  - Red (Post-submit): Incorrect answer
- **Progress Tracking**: Real-time progress bar and completion percentage.

### D. Formula Reference Modal
Accessible via the **EVM Formulas** button in the header (`#modalFormulas`):
- Cost Variance: $CV = EV - AC$
- Schedule Variance: $SV = EV - PV$
- Cost Performance Index: $CPI = EV / AC$
- Schedule Performance Index: $SPI = EV / PV$
- Estimate at Completion: $EAC = BAC / CPI$
- Estimate to Complete: $ETC = EAC - AC$
- Variance at Completion: $VAC = BAC - EAC$
- To-Complete Performance Index: $TCPI = (BAC - EV) / (BAC - AC)$
- PERT Beta Estimate: $(O + 4M + P) / 6$
- Float / Slack: $LS - ES$ or $LF - EF$
- Communication Channels: $N(N - 1) / 2$

### E. Evaluation & Scoring Engine
Function [`submitExam()`](file:///c:/Users/MSI/Documents/CAPM%20Mock%20Exam/app.js) evaluates:
1. Overall percentage: $\frac{\text{Correct}}{\text{Total}} \times 100$
2. Pass / Fail determination ($\ge 70\%$)
3. Domain proficiency ratings:
   - $\ge 80\%$: Above Target
   - $70\% - 79\%$: Target
   - $60\% - 69\%$: Below Target
   - $< 60\%$: Needs Improvement
4. Activates "Review Incorrect Answers" filter for rapid post-exam remediation.

---

## 4. Local Storage & Session Persistence
All test state is saved automatically to `localStorage` under the key `capm_mock_exam_v3`:
- `userAnswers`: Object mapping `{ questionId: [selectedIndices] }`
- `flaggedQuestions`: Array of flagged question IDs
- `timeRemaining`: Current timer seconds remaining
- `isExamStarted`: Boolean
- `isTimerRunning`: Boolean
- `isExamSubmitted`: Boolean
- `currentIndex`: Active question position

Clicking **Reset** prompts for confirmation, clears `localStorage`, resets the timer to `03:00:00`, and clears all user selections.

---

## 5. File Structure Reference

```
c:\Users\MSI\Documents\CAPM Mock Exam\
├── index.html          # HTML5 User Interface & Modals
├── styles.css          # CSS3 Theme, Glassmorphism & Animations
├── app.js              # Application Logic & Event Controllers
├── questions.js        # Question Bank (150 Items)
├── README.md           # Project Readme
├── DOCUMENTATION.md    # Detailed Technical Documentation
└── assets/             # Extracted High-Resolution Visual Diagrams
    ├── diagram_q9.png               # Question 9 Critical Path Network Diagram
    ├── diagram_roadmap.png          # Questions 11-14 Product Roadmap Matrix
    ├── diagram_roles_circle.png     # Questions 15-18 PM / BA / Program / Portfolio Roles
    ├── diagram_quadrant_agile.png   # Questions 43-46 Stacey Complexity Matrix
    ├── diagram_evm_table.png        # Questions 70-74 Earned Value Metrics Table
    ├── diagram_milestone_chart.png  # Questions 82-84 Schedule Milestone Chart
    ├── diagram_burndown.png         # Questions 89-91 Agile Sprint Burndown Chart
    ├── diagram_q109.png             # Questions 109-111 Activity Schedule Network & Float
    ├── diagram_ethics.png           # Questions 114-117 Code of Ethics Quadrant
    └── diagram_bcg_matrix.png       # Questions 144-147 BCG Product Portfolio Matrix
```
