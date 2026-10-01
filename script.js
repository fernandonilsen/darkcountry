const audio = document.getElementById('audio');
const playBtn = document.getElementById('play-btn');
const progress = document.getElementById('progress');
const timeDisplay = document.getElementById('time');

// Controlar Play/Pause
playBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playBtn.textContent = '⏸ Pause';
    } else {
        audio.pause();
        playBtn.textContent = '▶ Play';
    }
});

// Atualizar barra de progresso conforme a música toca
audio.addEventListener('timeupdate', () => {
    const current = audio.currentTime;
    const duration = audio.duration;
    
    if (duration) {
        progress.value = (current / duration) * 100;
        
        // Formatar o tempo (minutos:segundos)
        let minutes = Math.floor(current / 60);
        let seconds = Math.floor(current % 60);
        if (seconds < 10) seconds = '0' + seconds;
        timeDisplay.textContent = `${minutes}:${seconds}`;
    }
});

// Permitir avançar a música clicando na barra
progress.addEventListener('input', () => {
    const duration = audio.duration;
    audio.currentTime = (progress.value / 100) * duration;
});