// badges.js - QuizBrain Gamification & Badge Engine

const BADGES = [
  {
    id: 'first_steps',
    name: 'First Steps',
    emoji: '🏁',
    desc: 'Completed first solo quiz run',
    color: 'badge-bronze'
  },
  {
    id: 'ai_genius',
    name: 'AI Genius',
    emoji: '🤖',
    desc: 'Average score >= 4.0 on AI Quiz (min 2 runs)',
    color: 'badge-purple'
  },
  {
    id: 'python_master',
    name: 'Python Master',
    emoji: '🐍',
    desc: 'Average score >= 4.0 on Python (min 2 runs)',
    color: 'badge-teal'
  },
  {
    id: 'web_guru',
    name: 'Web Guru',
    emoji: '💻',
    desc: 'Average score >= 4.0 on Web Coding, HTML5, or CSS3 (min 2 runs)',
    color: 'badge-gold'
  },
  {
    id: 'win_streak',
    name: 'Perfect 5',
    emoji: '🔥',
    desc: 'Achieved a perfect 5/5 score in any solo run',
    color: 'badge-coral'
  },
  {
    id: 'fast_thinker',
    name: 'Fast Thinker',
    emoji: '⚡',
    desc: 'Quiz average time per question < 5s and score >= 4',
    color: 'badge-amber'
  }
];

function calculateEarnedBadges(username) {
  if (!username) return [];
  
  const localLeaderboard = JSON.parse(localStorage.getItem('quizbrain_leaderboard')) || [];
  const userAttempts = localLeaderboard.filter(item => item.username.trim().toLowerCase() === username.trim().toLowerCase());
  
  if (userAttempts.length === 0) return [];
  
  const earned = [];
  
  // 1. First Steps
  earned.push('first_steps');
  
  // Topic stats helper
  const stats = {}; // { topicId: { totalRuns: 0, totalScore: 0 } }
  userAttempts.forEach(a => {
    const tid = a.topicId;
    if (!stats[tid]) {
      stats[tid] = { totalRuns: 0, totalScore: 0 };
    }
    stats[tid].totalRuns++;
    stats[tid].totalScore += a.score;
  });
  
  // 2. AI Genius
  if (stats['ai'] && stats['ai'].totalRuns >= 2) {
    const avg = stats['ai'].totalScore / stats['ai'].totalRuns;
    if (avg >= 4.0) earned.push('ai_genius');
  }
  
  // 3. Python Master
  if (stats['python'] && stats['python'].totalRuns >= 2) {
    const avg = stats['python'].totalScore / stats['python'].totalRuns;
    if (avg >= 4.0) earned.push('python_master');
  }
  
  // 4. Web Guru
  const webTopics = ['coding', 'html', 'css'];
  let webRuns = 0;
  let webScore = 0;
  webTopics.forEach(t => {
    if (stats[t]) {
      webRuns += stats[t].totalRuns;
      webScore += stats[t].totalScore;
    }
  });
  if (webRuns >= 2 && (webScore / webRuns) >= 4.0) {
    earned.push('web_guru');
  }
  
  // 5. Perfect 5
  const hasPerfect = userAttempts.some(a => a.score === 5);
  if (hasPerfect) {
    earned.push('win_streak');
  }
  
  // 6. Fast Thinker
  const hasFast = userAttempts.some(a => {
    const avgQTime = a.totalTime / 5;
    return avgQTime < 5 && a.score >= 4;
  });
  if (hasFast) {
    earned.push('fast_thinker');
  }
  
  // Filter metadata matching earned IDs
  return BADGES.filter(b => earned.includes(b.id));
}

function generateBadgePillHTML(badge, size = 'md') {
  const sizeClass = size === 'sm' ? 'badge-pill-sm' : 'badge-pill-md';
  return `
    <span class="badge-pill ${badge.color} ${sizeClass}" title="${badge.desc}">
      <span class="badge-emoji">${badge.emoji}</span>
      <span class="badge-name">${badge.name}</span>
    </span>
  `;
}

function renderPlayerBadges(username, containerId, rowId = null) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  const earned = calculateEarnedBadges(username);
  
  if (earned.length === 0) {
    container.innerHTML = '';
    if (rowId) {
      const row = document.getElementById(rowId);
      if (row) row.style.display = 'none';
    }
    return;
  }
  
  if (rowId) {
    const row = document.getElementById(rowId);
    if (row) row.style.display = 'block';
  }
  
  container.innerHTML = earned.map(b => generateBadgePillHTML(b)).join('');
}
