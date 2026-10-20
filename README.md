# PMI CAPM® Exam Simulator (150 Questions)

A modern, dynamic, and responsive web-based exam simulation platform designed for candidates preparing for the **PMI Certified Associate in Project Management (CAPM)®** certification.

Aligned with the **PMI CAPM® Examination Content Outline (ECO)**, the **PMBOK® Guide – 7th Edition**, **Process Groups: A Practice Guide**, and the **Agile Practice Guide**.

---

## 🚀 Key Features

### 1. Realistic 3-Hour Exam Simulation
- **Single-Button Session Control**: Start the timed exam with a single click (`▶ Start Exam`).
- **Flexible Pause & Resume**: Pause the 3-hour timer (`⏸ Pause Exam`) for breaks and resume (`▶ Resume Exam`) at any time without losing state.
- **Auto-Submit on Expiration**: Automatically finalizes and scores the exam when the 180-minute countdown expires.

### 2. Comprehensive 150-Question Bank
- **Domain Coverage**:
  - **Predictive, Plan-Based Methodologies**: 44 questions (WBS, Critical Path, EVM, Procurement, Schedule Networks)
  - **Agile Frameworks/Methodologies**: 43 questions (Scrum, Kanban, XP, Burndown Charts, Story Points, Stacey Matrix)
  - **Project Management Fundamentals**: 40 questions (PMBOK 7th principles, roles, project charter, stakeholder engagement)
  - **Business Analysis Frameworks**: 23 questions (Requirements traceability, BCG Product Portfolio Matrix, stakeholder elicitation)
- **Question Types**:
  - **Single Choice**: Standard 4-option questions.
  - **Multiple Choice**: "Choose 2" questions with custom checkbox counters.
  - **Diagram Questions (35)**: Integrated diagrams with interactive click-to-zoom lightboxes.
  - **Scenario Dialogue Questions**: Styled conversational dialogues between project stakeholders, sponsors, and PMs.

### 3. Interactive Question Navigator
- **150-Button Palette Matrix**: Visual status indicators for every question:
  - 🟣 **Current**: Active question.
  - 🔵 **Answered**: Question attempted.
  - 🟡 **Flagged**: Marked for later review.
  - ⚪ **Unattempted**: Remaining questions.
  - 🟢 **Correct** / 🔴 **Incorrect**: Revealed upon exam submission and in review mode.
- **Quick Jump**: Instantly navigate to any question with one click.
- **Live Progress Bar**: Real-time completion percentage.

### 4. Domain Filtering
Filter questions on the fly:
- All Domains (150)
- Predictive (44)
- Agile Frameworks (43)
- Fundamentals (40)
- Business Analysis (23)
- Diagrams (35)
- Flagged for Review

### 5. Built-In EVM Formula Cheat Sheet
Access official PMI Earned Value Management formulas instantly via the top navigation bar:
- Cost Variance ($CV = EV - AC$) & Schedule Variance ($SV = EV - PV$)
- Performance Indices ($CPI = \frac{EV}{AC}$, $SPI = \frac{EV}{PV}$)
- Forecasting ($EAC = \frac{BAC}{CPI}$, $ETC = EAC - AC$, $VAC = BAC - EAC$)
- To-Complete Performance Index ($TCPI = \frac{BAC - EV}{BAC - AC}$)
- PERT Beta Weighted Average ($\frac{O + 4M + P}{6}$) & Standard Deviation ($\frac{P - O}{6}$)
- Float / Slack ($LS - ES$ or $LF - EF$)
- Communication Channels ($\frac{N \times (N - 1)}{2}$)

### 6. Scoring & Performance Analytics
Upon clicking **Submit Exam**:
- **Pass / Fail Determination**: Benchmarked against PMI's ~70% passing threshold.
- **Domain Proficiency Breakdown**: Categorizes performance across all 4 ECO domains into:
  - **Above Target** ($\ge 80\%$)
  - **Target** ($70\% - 79\%$)
  - **Below Target** ($60\% - 69\%$)
  - **Needs Improvement** ($< 60\%$)
- **Review Mode**: Switch to "Review Incorrect Answers" to inspect mistakes with in-depth PMBOK explanations.
- **Print / Save Report**: Generates a printer-friendly summary report.

### 7. Keyboard Shortcuts
Navigate the exam swiftly without touching the mouse:
- `A` - `D` or `1` - `4`: Select option
- `→` or `N`: Next question
- `←` or `P`: Previous question
- `F`: Flag / Unflag question for review
- `Esc`: Close any open modal / lightbox

---

## 📂 Project Architecture

```
CAPM Mock Exam/
├── index.html          # Semantic HTML5 app structure, modals, toolbar, and layout
├── styles.css          # Modern dark-theme design system (glassmorphism, CSS variables)
├── app.js              # State manager, timer controller, scoring algorithm, and event handling
├── questions.js        # Question bank (150 structured questions with answers & explanations)
├── README.md           # Documentation file
└── assets/             # Extracted diagram image assets
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

---

## 🛠️ Technology Stack

- **Core Structure**: Semantic HTML5.
- **Styling**: Vanilla CSS3 using custom properties, Flexbox, Grid, glassmorphism (`backdrop-filter: blur()`), and smooth transitions.
- **Typography**: Google Fonts (*Plus Jakarta Sans* and *JetBrains Mono*).
- **Application Logic**: Vanilla JavaScript (ES6+ modular closures, no framework overhead).
- **Persistence**: HTML5 `localStorage` (automatically remembers your progress, flags, and answers).
- **Zero External Dependencies**: Works offline and requires no node modules or build steps.

---

## 🏃 Getting Started

### Option 1: Direct File Launch
Double-click `index.html` in Windows Explorer to open it directly in any web browser (Chrome, Edge, Firefox, Brave).

### Option 2: Local HTTP Server (Recommended)
Open a terminal in the project directory and run:

```bash
# Using Python
python -m http.server 8085

# Or using Node.js http-server / serve
npx serve .
```

Then visit:
```
http://localhost:8085/index.html
```

---

## 📖 PMBOK® & Agile Reference Alignment

Every question's explanation in [questions.js](file:///c:/Users/MSI/Documents/CAPM%20Mock%20Exam/questions.js) is grounded in official PMI standards:

1. **PMI CAPM® Examination Content Outline (ECO)**: Domain structure and task definitions.
2. **PMBOK® Guide – 7th Edition**: Systems view, stewardship, team collaboration, tailoring, and performance domains.
3. **Process Groups: A Practice Guide (PMI, 2022)**: Traditional lifecycle processes (Initiating, Planning, Executing, Monitoring/Controlling, Closing).
4. **Agile Practice Guide (PMI / Agile Alliance)**: Scrum roles, ceremonies, backlogs, velocity, relative sizing, and Kanban.
5. **The PMI Guide to Business Analysis**: Solution evaluation, elicitation techniques, traceability, and strategic portfolio tools.
