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

# 🌟 What Makes QuizBrain Different?

QuizBrain is not just another quiz website.

It is a **full interactive learning & battle platform** featuring:

✅ Real-time multiplayer battles
✅ Gamified achievement system with badges
✅ Daily challenge engine
✅ Dynamic analytics dashboard
✅ Procedural audio synthesis (Web Audio API)
✅ Adaptive theme engine (Auto OS theme matching)
✅ Firebase-ready cloud leaderboard
✅ Peer-to-peer networking (PeerJS)
✅ Responsive modern UI with animations
✅ 🎡 Wheel of Fortune (Fortune Spin) Mode

---

# 🎡 Wheel of Fortune (Fortune Spin) Mode

Let fate decide your trivia destiny! Take a break from manual category selection and step into the **Fortune Spin Special Mode**.

### 🌟 Mode Highlights:
* 🎡 **Dynamic Canvas Renderer**: Smooth trigonometric easing physics built entirely on an interactive HTML5 `<canvas>`.
* 🎨 **Vibrant Segment Styling**: Theme-integrated, high-contrast slices representing distinct random categories (Science, AI, Movies, Sports, Indian Food, Bollywood).
* 🎵 **Procedural Audio Sync**: Audio clicks (Web Audio API synthesized ticks) play dynamically as the wheel slices move past the selector pin.
* 🎉 **Confetti Blast**: A canvas-confetti celebration triggers on successful category selection!
* 🧠 **Real-Time Category Splicing**: Shuffles and pulls fresh, unused questions from the selected topic database in real-time.

---

# 🎮 Real-Time Multiplayer Arena

Battle your friends live using:

* 🌐 PeerJS networking
* 🔗 Room code matchmaking
* ⚔️ Real-time quiz synchronization
* 🏆 Competitive scoring
* 📊 Live progress tracking

```text
Player 1 ⚔️ Player 2
```

---

# 🏆 Gamification Engine

QuizBrain includes a complete achievement progression system.

## 🎖️ Unlockable Badges

| Badge            | Achievement             | Description |
| ---------------- | ----------------------- | ----------- |
| 🏁 First Steps   | Complete first quiz     | Completed first solo quiz run |
| 🤖 AI Genius     | Master AI quizzes       | Average score >= 4.0 on AI Quiz (min 2 runs) |
| 🐍 Python Master | High Python scores      | Average score >= 4.0 on Python (min 2 runs) |
| 💻 Web Guru      | Excel in coding quizzes | Average score >= 4.0 on Web Coding, HTML5, or CSS3 (min 2 runs) |
| 🔥 Perfect 5     | Score 5/5               | Achieved a perfect 5/5 score in any solo run |
| ⚡ Fast Thinker   | Ultra-fast answers      | Quiz average time per question < 5s and score >= 4 |
| 🎡 Wheel Master  | Spin Wheel Master       | Completed a Spin Wheel Quiz run with a score of 4 or 5 |

---

# 📊 Analytics Dashboard

Track your performance using beautiful visual dashboards powered by **Chart.js**.

### Analytics Include:

* Accuracy tracking
* Topic mastery graphs
* Performance trends
* Weak area analysis
* Quiz history insights

---

# 🔥 Daily Challenge System

Every day unlocks:

* 🎯 New seeded challenge
* 🧠 Unique question set
* 🏆 Daily rankings
* ⚡ One-attempt competitive mode

---

# 🎵 Procedural Audio Engine

QuizBrain generates sounds dynamically using the **Web Audio API**.

Instead of static audio files, sounds are synthesized in real-time using:

* Oscillators
* Gain nodes
* Frequency ramps

### Includes:

* ✅ Correct answer melody (rising C5 -> G5 arpeggio)
* ❌ Wrong answer buzzer (slides down 220Hz -> 120Hz triangle wave)
* 🏆 Achievement unlock sound (major arpeggiated triumph chord)
* ⏱️ Tick/Click sound (programmatic clock tick and spin wheel sector tick)

---

# 🌙 Adaptive Theme System

Modern light/dark architecture with:

* Automatic OS theme detection
* Manual theme switching
* Persistent theme saving
* Flash prevention on load
* Animated floating theme toggle

---

# 🧠 Quiz Categories

## 🌐 General

* 🤖 AI Quiz
* 🎬 Movie Quiz
* 💻 Web Coding
* ⚡ Anime Quiz
* 🧪 Science Quiz
* ⚽ Sports Quiz
* 🍕 Indian Food
* 🎵 Bollywood Music
* 🎡 Spin Wheel Quiz (Fortune Special Mode)

## 💻 Programming

* 🐍 Python
* 📊 Machine Learning
* 🧬 Deep Learning
* 🕸️ Neural Networks
* 🏗️ OOP Concepts
* ⚙️ C++ Quiz
* 🔀 Git
* 🐙 GitHub
* 🌐 HTML5
* 🎨 CSS3
* ☕ Java
* 🐧 Linux

---

# ⚡ Difficulty Modes

| Difficulty | Timer |
| ---------- | ----- |
| 🟢 Easy    | 30s   |
| 🟡 Medium  | 20s   |
| 🔴 Hard    | 10s   |

---

# 🏗️ Architecture Highlights

## Frontend Systems

* Dynamic DOM Rendering
* State Management
* LocalStorage Persistence
* Theme Architecture
* Multiplayer Synchronization
* HTML5 Canvas Physics Engine

## Browser APIs

* Web Audio API
* LocalStorage API
* MatchMedia API
* HTML5 Canvas API

## Networking & Cloud

* PeerJS (WebRTC)
* Firebase Firestore

---

# 🛠️ Tech Stack

## Frontend

* HTML5
* CSS3
* Vanilla JavaScript

## Libraries & APIs

* Firebase SDK
* PeerJS (Real-time P2P)
* Chart.js (Visual Analytics)
* Canvas Confetti
* Web Audio API

---

# 📂 Project Structure

```bash
quiz_website/
│
├── index.html
├── quiz.html
├── leaderboard.html
├── style.css
├── badges.js
├── sound.js
├── theme.js
└── README.md
```

---

# 📸 Screenshots

## 🏠 Home Lobby

<img width="1175" height="763" alt="Screenshot 2026-05-28 at 3 46 02 PM" src="https://github.com/user-attachments/assets/4fc39e5e-0255-4d2e-bd02-bcddc1baff84" />

---

## ⚔️ Multiplayer Battle Arena

<img width="805" height="782" alt="Screenshot 2026-05-28 at 3 48 00 PM" src="https://github.com/user-attachments/assets/1796beac-e217-4c02-a885-85315e587cba" />

---

## 📊 Analytics Dashboard

<img width="950" height="808" alt="Screenshot 2026-05-28 at 3 50 47 PM" src="https://github.com/user-attachments/assets/5b18ceba-75aa-47e5-aa1f-5638985161a1" />

---

## 🏆 Leaderboard

<img width="723" height="501" alt="Screenshot 2026-05-28 at 3 51 19 PM" src="https://github.com/user-attachments/assets/592ace64-7153-4ca6-9fd2-8767c7f79ff4" />

---

# 🚀 Getting Started

## Clone Repository

```bash
git clone https://github.com/Prachipandey28/quiz_website.git
```

---

## Open Folder

```bash
cd quiz_website
```

---

## Run Application

Open:

```bash
index.html
```

in your browser.

---

# 🔮 Future Roadmap

* 🤖 AI-generated questions
* 🧠 Adaptive AI difficulty
* 🔐 Authentication system
* ☁️ Full cloud sync
* 🎙️ Voice assistant gameplay
* 📱 Mobile app version
* 🌍 Global matchmaking
* 🧩 AI-powered recommendations

---

# 👩‍💻 Developer

## Prachi Pandey

🎓 B.Tech — Artificial Intelligence & Data Science

🔗 GitHub:
https://github.com/Prachipandey28

---

# ⭐ Show Your Support

If you enjoyed this project:

⭐ Star the repository
🍴 Fork the project
📢 Share it with others

---

<div align="center">

## 🚀 “Learning becomes legendary when competition meets intelligence.”

</div>

---

# 📜 License

This project is licensed under the MIT License.
