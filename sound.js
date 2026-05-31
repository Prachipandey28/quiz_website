// sound.js - QuizBrain Programmatic Audio Synthesizer (Web Audio API)

let audioCtx = null;

function getAudioContext() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

function playCorrectSound() {
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;
    
    // plays a rising double-tone arpeggio (C5 -> G5)
    const playNote = (freq, startTime, duration) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, startTime);
      
      gain.gain.setValueAtTime(0.12, startTime);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.start(startTime);
      osc.stop(startTime + duration);
    };
    
    playNote(523.25, now, 0.12);      // C5
    playNote(783.99, now + 0.06, 0.22); // G5
  } catch (e) {
    console.warn("Audio play blocked/failed:", e);
  }
}

function playWrongSound() {
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;
    
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.type = 'triangle';
    // slides down to form a clean fail buzzer sound (220Hz down to 120Hz)
    osc.frequency.setValueAtTime(220, now);
    osc.frequency.linearRampToValueAtTime(120, now + 0.28);
    
    gain.gain.setValueAtTime(0.18, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    osc.start(now);
    osc.stop(now + 0.28);
  } catch (e) {
    console.warn("Audio play blocked/failed:", e);
  }
}

function playUnlockSound() {
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;
    
    const playNote = (freq, startTime, duration) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, startTime);
      
      gain.gain.setValueAtTime(0.12, startTime);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.start(startTime);
      osc.stop(startTime + duration);
    };
    
    // major arpeggiated triumph chord (C5, E5, G5, C6)
    playNote(523.25, now, 0.12);       // C5
    playNote(659.25, now + 0.06, 0.12);  // E5
    playNote(783.99, now + 0.12, 0.12);  // G5
    playNote(1046.50, now + 0.18, 0.35); // C6
  } catch (e) {
    console.warn("Audio play blocked/failed:", e);
  }
}

function playTickSound() {
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;
    
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(1200, now);
    
    gain.gain.setValueAtTime(0.06, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    osc.start(now);
    osc.stop(now + 0.04);
  } catch (e) {
    console.warn("Tick sound blocked/failed:", e);
  }
}
