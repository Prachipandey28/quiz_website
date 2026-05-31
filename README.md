# 🧠 QuizBrain — The Ultimate Gamified Multiplayer Quiz Platform

<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Sora&weight=700&size=28&pause=1000&color=6C63FF&center=true&vCenter=true&width=900&lines=Real-Time+Multiplayer+Quiz+Platform;Gamified+Learning+Experience;Analytics+%2B+Achievements+%2B+Daily+Challenges;Built+with+Vanilla+JavaScript" />

<br/>

![HTML5](https://img.shields.io/badge/HTML5-Advanced-orange?style=for-the-badge&logo=html5)
![CSS3](https://img.shields.io/badge/CSS3-Modern-blue?style=for-the-badge&logo=css3)
![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-yellow?style=for-the-badge&logo=javascript)
![Firebase](https://img.shields.io/badge/Firebase-Cloud%20Ready-ffca28?style=for-the-badge&logo=firebase)
![PeerJS](https://img.shields.io/badge/PeerJS-Realtime-purple?style=for-the-badge)
![Chart.js](https://img.shields.io/badge/Chart.js-Analytics-red?style=for-the-badge)

### 🚀 Multiplayer • Analytics • Gamification • Real-Time • Audio Engine • Theme System • Fortune Spin

</div>

---

## 🌟 The QuizBrain Experience

QuizBrain is a modern, high-fidelity **interactive learning and battle platform** that replaces traditional dry quizzes with an immersive, gamified web experience. 

It is designed for trivia enthusiasts and developers alike, blending real-time peer-to-peer networking, modular game modes, procedural audio generation, and data-driven insights.

---

## 🕹️ Immersive Game Modes

### 1. ⚔️ Real-Time Multiplayer Arena
High-stakes competitive matchmaking operating entirely in the browser:
* **True Peer-to-Peer**: Powered by **PeerJS (WebRTC)** to connect players directly without needing a central game server.
* **Synchronized State**: Instant room synchronization, live answer-locking overlays, dynamic competitive scoring, and shared round timers.
* **Zero Config Setup**: Host a room instantly to obtain an invite link or enter a 4-digit room code to join.

### 2. 🎡 Wheel of Fortune (Fortune Spin)
Let probability guide your intellect in this specialty gamified mode:
* **Canvas Easing Engine**: Built using HTML5 `<canvas>` with custom angular momentum decay (**cubic ease-out**) for a realistic wheel deceleration.
* **Synchronized Audio Ticks**: Triggers crisp frequency clicks in real-time precisely as segment boundaries pass the pointer needle.
* **Celebration Effects**: Explodes confetti cascades across the viewport upon selection to elevate player engagement.

### 3. 🔥 Daily Seeded Challenge
A competitive puzzle designed to keep users returning every 24 hours:
* **Deterministic Generation**: Uses a time-based hashing algorithm to seed a unique category, difficulty, and question set for all users globally.
* **One-Shot Competitive Integrity**: Enforces a single-attempt rule per calendar day, logging scores securely to local and cloud stores.
* **Results Sharing**: Features a clipboard copy engine that reformats stats into an emoji-rich summary scorecard to share on social feeds.

---

## 🎖️ Gamification & Achievement Architecture

QuizBrain tracks performance in real-time, rewarding excellence with system-level **badges** and high-fidelity analytics.

### 🏆 Unlockable Badges
A modular badge-calculation engine handles complex evaluation criteria across historic attempts:

| Badge | Achievement | Technical Unlock Criteria |
| :--- | :--- | :--- |
| **🏁 First Steps** | Beginner's Mark | Complete 1 solo quiz run. |
| **🤖 AI Genius** | Neural Virtuoso | Maintain an average score of $\ge 4.0$ on the AI Quiz (minimum 2 runs). |
| **🐍 Python Master** | Syntax Expert | Maintain an average score of $\ge 4.0$ on Python (minimum 2 runs). |
| **💻 Web Guru** | Frontend Generalist | Average score of $\ge 4.0$ across Web Coding, HTML5, or CSS3 (minimum 2 runs). |
| **🔥 Perfect 5** | Flawless Execution | Achieve a perfect 5/5 score in any solo game. |
| **⚡ Fast Thinker** | Precision Under Pressure | Average response time of $< 5$ seconds per question with a score of $\ge 4$. |
| **🎡 Wheel Master** | Conqueror of Chance | Complete a Spin Wheel Quiz run with a final score of 4 or 5. |

---

## 🧠 Quiz Categories

QuizBrain supports 2 main knowledge quadrants, structured into modular data maps:

### 🌐 General Trivia
* **🤖 Artificial Intelligence**: LLMs, Turing tests, neural network concepts, and historical breakthroughs.
* **🎬 Movie Trivia**: Cinematic classics, iconic quotes, and director trivia.
* **⚡ Anime & Pop Culture**: Global animations, iconic series, and fan favorites.
* **🧪 Advanced Science**: Chemistry, physics, space, and biological theories.
* **⚽ Global Sports**: Iconic athletes, tournament history, and record achievements.
* **🍕 Indian Food**: Regional delicacies, traditional culinary arts, and spices.
* **🎵 Bollywood Music**: Legendary soundtracks, composers, and lyricists.
* **🎡 Spin Wheel Special**: Categories chosen at random before every question.

### 💻 Programming & Tech
* **🐍 Python Programming**: Syntactic sugar, decorators, generators, and data types.
* **📊 Machine Learning**: Classic algorithms, hyperparameter tuning, and regression metrics.
* **🧬 Deep Learning**: Transformers, CNNs, backpropagation, and training architectures.
* **🕸️ Neural Networks**: Activations, weights, bias configurations, and optimization math.
* **🏗️ OOP Principles**: Polymorphism, inheritance, encapsulation, and abstractions.
* **⚙️ C++ Core**: Pointers, memory allocation, templates, and standard libraries.
* **🔀 Version Control (Git & GitHub)**: Branching, merging, rebase workflows, and remote operations.
* **🌐 Web Technologies (HTML5 & CSS3)**: Semantic tags, layouts, flexbox, grids, and variable themes.
* **☕ Core Java**: Multi-threading, JVM structures, garbage collection, and exceptions.
* **🐧 Linux Systems**: Commands, file structures, shell scripting, and permissions.

---

## 🎨 Advanced CSS & Theme System
* **Light / Dark Hybrid Theme Engine**: Implements CSS Custom Properties with zero style flashes on load, leveraging persistent `localStorage` and `matchMedia` system preferences.
* **Glassmorphism Layouts**: Uses fine backing blurs (`backdrop-filter`), rich glowing borders, dynamic gradients, and smooth transition states.

---

## 🎵 Real-Time Sound Synthesis (Web Audio API)
To maintain lightning-fast page loading and keep the asset bundle small, QuizBrain features a **procedural sound synthesizer** instead of loading heavy static audio files (`.mp3` or `.wav`).

Using raw mathematical waves, it generates crisp synth patterns on the fly:
* **Correct Answer arpeggio**: A rising double-tone arpeggio (C5 $\rightarrow$ G5 sine wave oscillator).
* **Incorrect Answer buzzer**: A sliding frequency sweep (triangle wave descending from 220Hz $\rightarrow$ 120Hz).
* **Achievement Unlock triumph**: A complex major-arpeggiated triad chord (C5 $\rightarrow$ E5 $\rightarrow$ G5 $\rightarrow$ C6).
* **Spin Wheel Tick**: Tiny high-frequency pulses (1200Hz sine waves decaying in 40ms) to simulate mechanical cog clicks.

---

## 🏗️ Architecture & Blueprints

```text
       [ Player 1 Browser ]               [ Player 2 Browser ]
               │                                   │
               │  ◄────── PeerJS WebRTC P2P ─────► │
               ▼                                   ▼
        [ State Sync ]                       [ State Sync ]
     (Score, Answer, Time)                (Score, Answer, Time)
               │                                   │
               ├──────────────────┐ ┌──────────────┤
               ▼                  ▼ ▼              ▼
        [ Web Audio API ]    [ LocalStorage ]  [ Chart.js Analytics ]
     (Procedural Synthesis)   (Progress Log)     (Performance Curves)
```

### File Hierarchy
```bash
quiz_website/
│
├── index.html        # Entry lobby, profile creation, and landing hub
├── quiz.html         # Main gameplay arena (Standard, Daily, Multiplayer, Spin)
├── leaderboard.html  # Dynamic score ranking dashboard & history stats
├── style.css         # Component stylesheet (themes, glassmorphism, animations)
├── badges.js         # Gamification and rules evaluation engine
├── sound.js          # Procedural Web Audio API sound synthesizer
├── theme.js          # Adaptive system theme listener and switcher
└── README.md         # Professional project documentation
```

---

## 🚀 Getting Started

### 1. Installation
Clone the repository to copy the static web files:
```bash
git clone https://github.com/Prachipandey28/quiz_website.git
cd quiz_website
```

### 2. Execution
Since the game is built purely with **Vanilla Web Technologies**, there are no compile or build steps required. Simply open `index.html` in any modern web browser:

* **Double-click** `index.html` in your directory.
* **Or run a local static server** (highly recommended for Firebase and PeerJS features):
  ```bash
  # Python 3
  python -m http.server 8000
  
  # Node.js
  npx serve .
  ```

---

## 🔮 Future Roadmap
* [ ] **AI-Powered Trivia Generator**: Dynamically synthesize questions on any topic using real-time generative models.
* [ ] **Voice-Activated Gameplay**: Hands-free gameplay using browser voice recognition.
* [ ] **Cloud Account Sync**: Full database persistence to sync badges across devices.
* [ ] **Global Matchmaking Lobby**: Matchmaking servers for automated multiplayer queuing.

---

## 👩‍💻 Developer

### Prachi Pandey
🎓 **B.Tech — Artificial Intelligence & Data Science**

* 🔗 **GitHub Profile**: [Prachipandey28](https://github.com/Prachipandey28)
* 💡 Specialty: Deep Learning, Intelligent Web Interfaces, and Interactive Gamification.

---

## 📜 License
This project is open-source and licensed under the **MIT License**.
