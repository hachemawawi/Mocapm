/**
 * CAPM Mock Exam Simulator - Main Application Controller
 * Handles 147 PMBOK 7th / ECO questions, multi-select, diagrams, scenarios,
 * timer, practice/exam modes, scoring, domain analytics, and EVM references.
 */

(function () {
  'use strict';

  // State
  let allQuestions = [];
  let filteredQuestions = [];
  let currentIndex = 0;
  let userAnswers = {}; // { [questionId]: [optionIndex, ...] }
  let flaggedQuestions = new Set();
  let currentFilter = 'all'; // 'all' | 'agile' | 'predictive' | 'fundamentals' | 'ba' | 'diagrams' | 'flagged' | 'incorrect'
  let isExamSubmitted = false;
  let isExamStarted = false;
  let isTimerRunning = false;

  // Timer: 3 hours = 180 minutes = 10,800 seconds
  const TOTAL_TIME_SECONDS = 180 * 60;
  let timeRemaining = TOTAL_TIME_SECONDS;
  let timerInterval = null;

  // DOM Elements
  const statCurrentNum = document.getElementById('statCurrentNum');
  const statTotalNum = document.getElementById('statTotalNum');
  const statAnsweredNum = document.getElementById('statAnsweredNum');
  const statFlaggedNum = document.getElementById('statFlaggedNum');
  const filterFlaggedCount = document.getElementById('filterFlaggedCount');
  const timerDisplay = document.getElementById('timerDisplay');
  const timerBox = document.getElementById('timerBox');

  const domainFiltersGroup = document.getElementById('domainFiltersGroup');

  // Question Card Elements
  const qBadgeNum = document.getElementById('qBadgeNum');
  const qBadgeDomain = document.getElementById('qBadgeDomain');
  const qBadgeMulti = document.getElementById('qBadgeMulti');
  const btnToggleFlag = document.getElementById('btnToggleFlag');
  const flagBtnText = document.getElementById('flagBtnText');
  const scenarioContainer = document.getElementById('scenarioContainer');
  const scenarioLines = document.getElementById('scenarioLines');
  const diagramContainer = document.getElementById('diagramContainer');
  const diagramImg = document.getElementById('diagramImg');
  const diagramWrapper = document.getElementById('diagramWrapper');
  const qTitle = document.getElementById('qTitle');
  const optionsList = document.getElementById('optionsList');
  const explanationCard = document.getElementById('explanationCard');
  const explanationText = document.getElementById('explanationText');

  // Buttons
  const btnStartExam = document.getElementById('btnStartExam');
  const startExamBtnText = document.getElementById('startExamBtnText');
  const startExamIcon = document.getElementById('startExamIcon');

  const btnPrevQ = document.getElementById('btnPrevQ');
  const btnNextQ = document.getElementById('btnNextQ');
  const btnClearAnswer = document.getElementById('btnClearAnswer');
  const btnFinishExam = document.getElementById('btnFinishExam');
  const btnResetExam = document.getElementById('btnResetExam');
  const btnOpenFormulas = document.getElementById('btnOpenFormulas');

  // Palette & Progress
  const paletteGrid = document.getElementById('paletteGrid');
  const navProgressPct = document.getElementById('navProgressPct');
  const paletteProgressBar = document.getElementById('paletteProgressBar');

  // Modals
  const modalFormulas = document.getElementById('modalFormulas');
  const btnCloseFormulas = document.getElementById('btnCloseFormulas');
  const modalLightbox = document.getElementById('modalLightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const btnCloseLightbox = document.getElementById('btnCloseLightbox');
  const modalSubmitConfirm = document.getElementById('modalSubmitConfirm');
  const btnCloseSubmitConfirm = document.getElementById('btnCloseSubmitConfirm');
  const btnCancelSubmit = document.getElementById('btnCancelSubmit');
  const btnConfirmSubmit = document.getElementById('btnConfirmSubmit');
  const confirmAnswered = document.getElementById('confirmAnswered');
  const confirmUnanswered = document.getElementById('confirmUnanswered');
  const confirmFlagged = document.getElementById('confirmFlagged');

  const modalResults = document.getElementById('modalResults');
  const btnCloseResults = document.getElementById('btnCloseResults');
  const resultScorePct = document.getElementById('resultScorePct');
  const resultScoreCircle = document.getElementById('resultScoreCircle');
  const resultPassStatus = document.getElementById('resultPassStatus');
  const resultSummaryText = document.getElementById('resultSummaryText');
  const domainScoresGrid = document.getElementById('domainScoresGrid');
  const btnRetakeExam = document.getElementById('btnRetakeExam');
  const btnPrintReport = document.getElementById('btnPrintReport');
  const btnReviewIncorrect = document.getElementById('btnReviewIncorrect');

  // Local Storage Key
  const STORAGE_KEY = 'capm_mock_exam_v3';

  // Initialize
  function init() {
    if (typeof QUESTIONS_DATA !== 'undefined' && Array.isArray(QUESTIONS_DATA)) {
      allQuestions = QUESTIONS_DATA;
    } else {
      console.error('QUESTIONS_DATA not found. Check questions.js loading.');
      return;
    }

    loadState();
    applyFilter(currentFilter);
    setupEventListeners();
    updateTimerDisplay();
    updateExamStartUI();
    renderQuestion();
    renderPalette();
    updateStats();
  }

  // Timer Management
  function startTimer() {
    if (isExamSubmitted) return;
    isExamStarted = true;
    isTimerRunning = true;

    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(() => {
      if (!isExamSubmitted) {
        if (timeRemaining > 0) {
          timeRemaining--;
          updateTimerDisplay();
        } else {
          clearInterval(timerInterval);
          isTimerRunning = false;
          alert('Time has expired for your CAPM Exam! Submitting automatically.');
          submitExam();
        }
      }
    }, 1000);

    updateTimerDisplay();
    updateExamStartUI();
    saveState();
  }

  function pauseTimer() {
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = null;
    isTimerRunning = false;
    updateExamStartUI();
    saveState();
  }

  function toggleExamTimer() {
    if (isExamSubmitted) return;
    if (!isExamStarted || !isTimerRunning) {
      startTimer();
    } else {
      pauseTimer();
    }
  }

  function updateExamStartUI() {
    if (!isExamStarted) {
      if (startExamBtnText) startExamBtnText.textContent = 'Start Exam';
      if (btnStartExam) {
        btnStartExam.className = 'btn btn-start';
        btnStartExam.setAttribute('title', 'Start the timed exam');
      }
      if (startExamIcon) {
        startExamIcon.innerHTML = '<polygon points="5 3 19 12 5 21 5 3"></polygon>';
      }
      if (timerBox) timerBox.className = 'timer-box paused';
    } else if (isTimerRunning) {
      if (startExamBtnText) startExamBtnText.textContent = 'Pause Exam';
      if (btnStartExam) {
        btnStartExam.className = 'btn btn-start running';
        btnStartExam.setAttribute('title', 'Pause the exam timer');
      }
      if (startExamIcon) {
        startExamIcon.innerHTML = '<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>';
      }
      if (timerBox) timerBox.className = 'timer-box running';
    } else {
      // Paused
      if (startExamBtnText) startExamBtnText.textContent = 'Resume Exam';
      if (btnStartExam) {
        btnStartExam.className = 'btn btn-start paused';
        btnStartExam.setAttribute('title', 'Resume the exam timer');
      }
      if (startExamIcon) {
        startExamIcon.innerHTML = '<polygon points="5 3 19 12 5 21 5 3"></polygon>';
      }
      if (timerBox) timerBox.className = 'timer-box paused';
    }
  }

  function updateTimerDisplay() {
    const hours = Math.floor(timeRemaining / 3600);
    const minutes = Math.floor((timeRemaining % 3600) / 60);
    const seconds = timeRemaining % 60;
    const pad = (n) => String(n).padStart(2, '0');
    timerDisplay.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;

    if (timeRemaining < 600 && !isExamSubmitted) {
      timerBox.classList.add('warning');
    } else {
      timerBox.classList.remove('warning');
    }
  }

  // Filter System
  function applyFilter(filterName) {
    currentFilter = filterName;

    switch (filterName) {
      case 'agile':
        filteredQuestions = allQuestions.filter(q => q.domain && q.domain.includes('Agile'));
        break;
      case 'predictive':
        filteredQuestions = allQuestions.filter(q => q.domain && q.domain.includes('Predictive'));
        break;
      case 'fundamentals':
        filteredQuestions = allQuestions.filter(q => q.domain && q.domain.includes('Fundamentals'));
        break;
      case 'ba':
        filteredQuestions = allQuestions.filter(q => q.domain && (q.domain.includes('Business Analysis') || q.domain.includes('BA')));
        break;
      case 'diagrams':
        filteredQuestions = allQuestions.filter(q => Boolean(q.diagram));
        break;
      case 'flagged':
        filteredQuestions = allQuestions.filter(q => flaggedQuestions.has(q.id));
        break;
      case 'incorrect':
        filteredQuestions = allQuestions.filter(q => isQuestionAnswered(q.id) && !isAnswerCorrect(q));
        break;
      case 'all':
      default:
        filteredQuestions = [...allQuestions];
        break;
    }

    if (filteredQuestions.length === 0) {
      if (filterName === 'flagged') {
        alert('You have no flagged questions currently.');
      } else if (filterName === 'incorrect') {
        alert('No incorrect questions to review!');
      }
      currentFilter = 'all';
      filteredQuestions = [...allQuestions];
    }

    currentIndex = 0;
    updateFilterChipsUI();
    renderQuestion();
    renderPalette();
  }

  function updateFilterChipsUI() {
    const chips = domainFiltersGroup.querySelectorAll('.filter-chip');
    chips.forEach(chip => {
      if (chip.getAttribute('data-filter') === currentFilter) {
        chip.classList.add('active');
      } else {
        chip.classList.remove('active');
      }
    });
  }

  // Helpers
  function getCurrentQuestion() {
    return filteredQuestions[currentIndex] || allQuestions[0];
  }

  function isQuestionAnswered(qId) {
    return userAnswers[qId] && userAnswers[qId].length > 0;
  }

  function isAnswerCorrect(question) {
    const user = userAnswers[question.id] || [];
    const correct = question.answer || [];
    if (user.length !== correct.length) return false;
    const sortedUser = [...user].sort();
    const sortedCorrect = [...correct].sort();
    return sortedUser.every((val, idx) => val === sortedCorrect[idx]);
  }

  // Rendering Current Question
  function renderQuestion() {
    const q = getCurrentQuestion();
    if (!q) return;

    // Meta Badge Info
    qBadgeNum.textContent = `Question ${q.id} of ${allQuestions.length}`;
    qBadgeDomain.textContent = q.domain || 'Project Management';

    // Domain pill class
    qBadgeDomain.className = 'badge-domain';
    if (q.domain && q.domain.includes('Agile')) {
      qBadgeDomain.classList.add('domain-agile');
    } else if (q.domain && q.domain.includes('Predictive')) {
      qBadgeDomain.classList.add('domain-predictive');
    } else if (q.domain && q.domain.includes('Fundamentals')) {
      qBadgeDomain.classList.add('domain-fundamentals');
    } else {
      qBadgeDomain.classList.add('domain-business');
    }

    // Multi-Select Indicator
    if (q.type === 'multiple') {
      qBadgeMulti.style.display = 'inline-flex';
    } else {
      qBadgeMulti.style.display = 'none';
    }

    // Flag State
    if (flaggedQuestions.has(q.id)) {
      btnToggleFlag.classList.add('active');
      flagBtnText.textContent = 'Flagged';
    } else {
      btnToggleFlag.classList.remove('active');
      flagBtnText.textContent = 'Flag Question';
    }

    // Scenario Box (Dialogue lines)
    if (q.scenario && typeof q.scenario === 'string' && q.scenario.trim().length > 0) {
      scenarioContainer.style.display = 'block';
      scenarioLines.innerHTML = '';
      const lines = q.scenario.split('\n');
      lines.forEach(line => {
        if (!line.trim()) return;
        const bubble = document.createElement('div');
        bubble.className = 'dialogue-bubble';

        // Check if formatted as "Speaker: Dialogue"
        const colonIdx = line.indexOf(':');
        if (colonIdx > 0 && colonIdx < 30) {
          const speaker = line.slice(0, colonIdx).trim();
          const speech = line.slice(colonIdx + 1).trim();
          bubble.innerHTML = `<span class="dialogue-speaker">${escapeHtml(speaker)}:</span><span class="dialogue-text">${escapeHtml(speech)}</span>`;
        } else {
          bubble.innerHTML = `<span class="dialogue-text">${escapeHtml(line.trim())}</span>`;
        }
        scenarioLines.appendChild(bubble);
      });
    } else {
      scenarioContainer.style.display = 'none';
      scenarioLines.innerHTML = '';
    }

    // Diagram Box
    if (q.diagram) {
      diagramContainer.style.display = 'flex';
      diagramImg.src = q.diagram;
      diagramImg.alt = `Diagram for question ${q.id}`;
    } else {
      diagramContainer.style.display = 'none';
      diagramImg.src = '';
    }

    // Question Title
    qTitle.textContent = q.question;

    // Render Options
    renderOptions(q);

    // Explanation Visibility (only revealed when exam has been submitted or in review mode)
    if (isExamSubmitted) {
      explanationCard.classList.add('show');
      explanationText.textContent = q.explanation || 'Refer to PMBOK Guide 7th Edition & Agile Practice Guide.';
    } else {
      explanationCard.classList.remove('show');
    }

    // Navigation buttons state
    btnPrevQ.disabled = currentIndex === 0;
    btnNextQ.disabled = currentIndex === filteredQuestions.length - 1;

    // Update active highlight in Palette
    updatePaletteActiveState();
    updateStats();
    saveState();
  }

  // Option Cards Rendering
  function renderOptions(q) {
    optionsList.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
    const currentSelections = userAnswers[q.id] || [];
    const isRevealed = isExamSubmitted;

    q.options.forEach((optText, index) => {
      const card = document.createElement('div');
      card.className = 'option-card';
      card.setAttribute('role', q.type === 'multiple' ? 'checkbox' : 'radio');
      card.setAttribute('data-index', index);

      const isSelected = currentSelections.includes(index);
      if (isSelected) {
        card.classList.add('selected');
        card.setAttribute('aria-checked', 'true');
      } else {
        card.setAttribute('aria-checked', 'false');
      }

      // If revealed, apply correct / incorrect styling
      if (isRevealed) {
        card.classList.add('locked');
        const isCorrectChoice = q.answer.includes(index);
        if (isCorrectChoice) {
          card.classList.add('correct');
        } else if (isSelected && !isCorrectChoice) {
          card.classList.add('incorrect');
        }
      }

      card.innerHTML = `
        <div class="option-indicator">${letters[index]}</div>
        <div class="option-text">${escapeHtml(optText)}</div>
      `;

      card.addEventListener('click', () => {
        if (isRevealed && isExamSubmitted) return; // Locked after final exam submit
        handleOptionSelect(q, index);
      });

      optionsList.appendChild(card);
    });
  }

  // Handle Option Selection
  function handleOptionSelect(q, index) {
    let selections = userAnswers[q.id] ? [...userAnswers[q.id]] : [];

    if (q.type === 'multiple') {
      // Toggle
      if (selections.includes(index)) {
        selections = selections.filter(i => i !== index);
      } else {
        if (selections.length >= 2) {
          // Replace first selection if already 2 selected
          selections.shift();
        }
        selections.push(index);
      }
    } else {
      // Single Choice
      selections = [index];
    }

    userAnswers[q.id] = selections;

    // If exam has not officially started yet, start the timer now
    if (!isExamStarted) {
      startTimer();
    }

    renderQuestion();
    renderPalette();
    updateStats();
    saveState();
  }

  // Clear Answer
  function clearCurrentAnswer() {
    const q = getCurrentQuestion();
    if (!q) return;
    delete userAnswers[q.id];
    renderQuestion();
    renderPalette();
    updateStats();
    saveState();
  }

  // Render Navigator Palette (Matrix of 150 questions)
  function renderPalette() {
    paletteGrid.innerHTML = '';

    allQuestions.forEach((q, idx) => {
      const btn = document.createElement('button');
      btn.className = 'palette-btn';
      btn.textContent = q.id;
      btn.setAttribute('title', `Question ${q.id} (${q.domain || ''})`);

      const currentQ = getCurrentQuestion();
      if (currentQ && currentQ.id === q.id) {
        btn.classList.add('current');
      }

      if (flaggedQuestions.has(q.id)) {
        btn.classList.add('flagged');
      }

      if (isQuestionAnswered(q.id)) {
        btn.classList.add('answered');

        // If submitted exam, indicate correctness
        if (isExamSubmitted) {
          if (isAnswerCorrect(q)) {
            btn.classList.add('correct');
          } else {
            btn.classList.add('incorrect');
          }
        }
      }

      btn.addEventListener('click', () => {
        jumpToQuestionId(q.id);
      });

      paletteGrid.appendChild(btn);
    });

    updateProgress();
  }

  function updatePaletteActiveState() {
    const currentQ = getCurrentQuestion();
    if (!currentQ) return;
    const buttons = paletteGrid.querySelectorAll('.palette-btn');
    buttons.forEach((btn, idx) => {
      const qId = allQuestions[idx].id;
      if (qId === currentQ.id) {
        btn.classList.add('current');
      } else {
        btn.classList.remove('current');
      }
    });
  }

  function updateProgress() {
    const answeredCount = Object.keys(userAnswers).length;
    const total = allQuestions.length;
    const pct = Math.round((answeredCount / total) * 100);
    navProgressPct.textContent = `${pct}%`;
    paletteProgressBar.style.width = `${pct}%`;
  }

  function updateStats() {
    const currentQ = getCurrentQuestion();
    const answeredCount = Object.keys(userAnswers).length;
    const flaggedCount = flaggedQuestions.size;

    if (currentQ) {
      statCurrentNum.textContent = currentQ.id;
    }
    statTotalNum.textContent = allQuestions.length;
    statAnsweredNum.textContent = answeredCount;
    statFlaggedNum.textContent = flaggedCount;
    filterFlaggedCount.textContent = flaggedCount;
  }

  // Jump to Question by ID
  function jumpToQuestionId(qId) {
    const foundIdx = filteredQuestions.findIndex(q => q.id === qId);
    if (foundIdx !== -1) {
      currentIndex = foundIdx;
    } else {
      // Question not in current filter, reset filter to 'all'
      applyFilter('all');
      const idx = filteredQuestions.findIndex(q => q.id === qId);
      if (idx !== -1) currentIndex = idx;
    }
    renderQuestion();
  }

  // Submit Exam & Scoring
  function openSubmitConfirmation() {
    const answeredCount = Object.keys(userAnswers).length;
    const total = allQuestions.length;
    confirmAnswered.textContent = answeredCount;
    confirmUnanswered.textContent = total - answeredCount;
    confirmFlagged.textContent = flaggedQuestions.size;
    modalSubmitConfirm.classList.add('active');
  }

  function submitExam() {
    isExamSubmitted = true;
    modalSubmitConfirm.classList.remove('active');

    // Calculate score
    let correctCount = 0;
    const domainStats = {};

    allQuestions.forEach(q => {
      const d = q.domain || 'Fundamentals';
      if (!domainStats[d]) {
        domainStats[d] = { total: 0, correct: 0 };
      }
      domainStats[d].total++;

      if (isAnswerCorrect(q)) {
        correctCount++;
        domainStats[d].correct++;
      }
    });

    const percentage = Math.round((correctCount / allQuestions.length) * 100);
    const passed = percentage >= 70;

    // Render Results
    resultScorePct.textContent = `${percentage}%`;
    resultPassStatus.textContent = passed ? 'PASS - TARGET / ABOVE TARGET' : 'NEEDS IMPROVEMENT (FAIL)';
    resultPassStatus.className = `pass-status-pill ${passed ? 'pass' : 'fail'}`;
    resultScoreCircle.className = `score-circle ${passed ? 'pass' : 'fail'}`;
    resultSummaryText.textContent = `You scored ${correctCount} out of ${allQuestions.length} questions correctly. PMI's benchmark passing threshold is approximately 70%.`;

    // Render domain bars
    domainScoresGrid.innerHTML = '';
    const domainColors = {
      'Agile Frameworks/Methodologies': '#34d399',
      'Predictive Methodologies': '#818cf8',
      'Project Management Fundamentals': '#38bdf8',
      'Business Analysis Frameworks': '#fbbf24'
    };

    for (const [domainName, stats] of Object.entries(domainStats)) {
      const dPct = Math.round((stats.correct / stats.total) * 100);
      let rating = 'Needs Improvement';
      if (dPct >= 80) rating = 'Above Target';
      else if (dPct >= 70) rating = 'Target';
      else if (dPct >= 60) rating = 'Below Target';

      const row = document.createElement('div');
      row.className = 'domain-score-row';
      const color = domainColors[domainName] || '#6366f1';

      row.innerHTML = `
        <div class="domain-score-header">
          <span>${escapeHtml(domainName)}</span>
          <span style="font-family: 'JetBrains Mono', monospace; color: ${color};">
            ${stats.correct}/${stats.total} (${dPct}%) &bull; ${rating}
          </span>
        </div>
        <div class="domain-score-bar-bg">
          <div class="domain-score-bar-fill" style="width: ${dPct}%; background: ${color};"></div>
        </div>
      `;
      domainScoresGrid.appendChild(row);
    }

    modalResults.classList.add('active');
    renderPalette();
    renderQuestion();
    saveState();
  }

  // Reset Exam
  function resetExam() {
    if (confirm('Are you sure you want to reset your exam progress, answers, flags, and timer?')) {
      pauseTimer();
      userAnswers = {};
      flaggedQuestions.clear();
      isExamSubmitted = false;
      isExamStarted = false;
      isTimerRunning = false;
      timeRemaining = TOTAL_TIME_SECONDS;
      currentIndex = 0;
      applyFilter('all');
      localStorage.removeItem(STORAGE_KEY);
      updateTimerDisplay();
      updateExamStartUI();
      renderQuestion();
      renderPalette();
      updateStats();
    }
  }

  // Local Storage Save/Load
  function saveState() {
    try {
      const state = {
        userAnswers,
        flaggedQuestions: Array.from(flaggedQuestions),
        timeRemaining,
        isExamSubmitted,
        isExamStarted,
        isTimerRunning,
        currentIndex
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.warn('Unable to save to localStorage:', e);
    }
  }

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const state = JSON.parse(raw);
      if (state.userAnswers) userAnswers = state.userAnswers;
      if (state.flaggedQuestions) flaggedQuestions = new Set(state.flaggedQuestions);
      if (state.timeRemaining) timeRemaining = state.timeRemaining;
      if (typeof state.isExamSubmitted === 'boolean') isExamSubmitted = state.isExamSubmitted;
      if (typeof state.isExamStarted === 'boolean') isExamStarted = state.isExamStarted;
      if (typeof state.isTimerRunning === 'boolean') isTimerRunning = state.isTimerRunning;
      if (typeof state.currentIndex === 'number') {
        currentIndex = Math.min(Math.max(0, state.currentIndex), allQuestions.length - 1);
      }

      // Resume timer only if it was actively running when saved and exam wasn't finished
      if (isExamStarted && isTimerRunning && !isExamSubmitted) {
        startTimer();
      }
    } catch (e) {
      console.warn('Unable to load from localStorage:', e);
    }
  }

  // Event Listeners Setup
  function setupEventListeners() {
    // Single Button: Start / Pause / Resume Exam Timer
    if (btnStartExam) {
      btnStartExam.addEventListener('click', toggleExamTimer);
    }

    // Domain filters
    domainFiltersGroup.addEventListener('click', (e) => {
      const chip = e.target.closest('.filter-chip');
      if (chip) {
        const filter = chip.getAttribute('data-filter');
        applyFilter(filter);
      }
    });

    // Navigation buttons
    btnPrevQ.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        renderQuestion();
      }
    });

    btnNextQ.addEventListener('click', () => {
      if (currentIndex < filteredQuestions.length - 1) {
        currentIndex++;
        renderQuestion();
      }
    });

    btnClearAnswer.addEventListener('click', clearCurrentAnswer);

    // Flag toggle
    btnToggleFlag.addEventListener('click', () => {
      const q = getCurrentQuestion();
      if (!q) return;
      if (flaggedQuestions.has(q.id)) {
        flaggedQuestions.delete(q.id);
      } else {
        flaggedQuestions.add(q.id);
      }
      renderQuestion();
      renderPalette();
      updateStats();
      saveState();
    });

    // Submit and Reset
    btnFinishExam.addEventListener('click', openSubmitConfirmation);
    btnResetExam.addEventListener('click', resetExam);

    // Lightbox for Diagrams
    diagramWrapper.addEventListener('click', () => {
      const q = getCurrentQuestion();
      if (q && q.diagram) {
        lightboxImg.src = q.diagram;
        modalLightbox.classList.add('active');
      }
    });
    btnCloseLightbox.addEventListener('click', () => {
      modalLightbox.classList.remove('active');
    });

    // Formula Modal
    btnOpenFormulas.addEventListener('click', () => {
      modalFormulas.classList.add('active');
    });
    btnCloseFormulas.addEventListener('click', () => {
      modalFormulas.classList.remove('active');
    });

    // Submit confirmation buttons
    btnCloseSubmitConfirm.addEventListener('click', () => {
      modalSubmitConfirm.classList.remove('active');
    });
    btnCancelSubmit.addEventListener('click', () => {
      modalSubmitConfirm.classList.remove('active');
    });
    btnConfirmSubmit.addEventListener('click', submitExam);

    // Results modal buttons
    btnCloseResults.addEventListener('click', () => {
      modalResults.classList.remove('active');
    });
    btnRetakeExam.addEventListener('click', () => {
      modalResults.classList.remove('active');
      resetExam();
    });
    btnPrintReport.addEventListener('click', () => {
      window.print();
    });
    btnReviewIncorrect.addEventListener('click', () => {
      modalResults.classList.remove('active');
      applyFilter('incorrect');
    });

    // Close modals on overlay backdrop click
    [modalFormulas, modalLightbox, modalSubmitConfirm, modalResults].forEach(modal => {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.remove('active');
        }
      });
    });

    // Keyboard Shortcuts
    document.addEventListener('keydown', (e) => {
      // Ignore if inside an input or modal is open
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      if (e.key === 'Escape') {
        [modalFormulas, modalLightbox, modalSubmitConfirm, modalResults].forEach(m => m.classList.remove('active'));
        return;
      }

      if (modalFormulas.classList.contains('active') || modalResults.classList.contains('active') || modalSubmitConfirm.classList.contains('active')) {
        return;
      }

      const q = getCurrentQuestion();
      if (!q) return;

      // 1-4 or A-D for Option selection
      const keyUpper = e.key.toUpperCase();
      const optionIndex = ['A', 'B', 'C', 'D', 'E'].indexOf(keyUpper);
      if (optionIndex !== -1 && optionIndex < q.options.length) {
        handleOptionSelect(q, optionIndex);
        return;
      }

      const numIndex = ['1', '2', '3', '4', '5'].indexOf(e.key);
      if (numIndex !== -1 && numIndex < q.options.length) {
        handleOptionSelect(q, numIndex);
        return;
      }

      // Next / Prev
      if (e.key === 'ArrowRight' || keyUpper === 'N') {
        if (currentIndex < filteredQuestions.length - 1) {
          currentIndex++;
          renderQuestion();
        }
      } else if (e.key === 'ArrowLeft' || keyUpper === 'P') {
        if (currentIndex > 0) {
          currentIndex--;
          renderQuestion();
        }
      } else if (keyUpper === 'F') {
        // Flag toggle
        if (flaggedQuestions.has(q.id)) {
          flaggedQuestions.delete(q.id);
        } else {
          flaggedQuestions.add(q.id);
        }
        renderQuestion();
        renderPalette();
        updateStats();
        saveState();
      }
    });
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Start app on DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
