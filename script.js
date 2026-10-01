// Dados das músicas (incluindo tempos em segundos para sincronizar as linhas)
const playlistData = [
    {
        title: "Say It Again",
        artist: "Dark Horizon",
        src: "Say It Again.mp4", // Substitua pelo caminho do seu arquivo de áudio
        lyrics: [
            { time: 26, original: "Snow falls hard on Christmas night", translation: "A neve cai com força na noite de Natal" },
            { time: 29, original: "Moon descends through frozen sky", translation: "A lua desce através do céu congelado" },
            { time: 33, original: "Black horse running wild and fast", translation: "Cavalo preto a correr livre e depressa" },
            { time: 36, original: "In those devils close behind", translation: "E esses demónios logo atrás" }
        ]
    },
    {
        title: "Segunda Canção",
        artist: "Artista Dois",
        src: "musica2.mp3", // Substitua pelo caminho do seu arquivo de áudio
        lyrics: [
            { time: 0, original: "Início da segunda música...", translation: "Inicio de la segunda canción..." },
            { time: 6, original: "Segunda linha com tradução sincronizada.", translation: "Segunda línea con traducción sincronizada." },
            { time: 12, original: "Último verso desta canção.", translation: "Último verso de esta canción." }
        ]
    }
];

let currentTrackIndex = 0;

const audio = document.getElementById('audio');
const playBtn = document.getElementById('play-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const progress = document.getElementById('progress');
const volumeBar = document.getElementById('volume');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const songTitleEl = document.getElementById('song-title');
const artistNameEl = document.getElementById('artist-name');
const playlistEl = document.getElementById('playlist');
const originalLyricsEl = document.getElementById('original-lyrics');
const translatedLyricsEl = document.getElementById('translated-lyrics');

// Inicializar Playlist na tela
function loadPlaylist() {
    playlistEl.innerHTML = '';
    playlistData.forEach((track, index) => {
        const li = document.createElement('li');
        li.textContent = `${track.title} - ${track.artist}`;
        if (index === currentTrackIndex) li.classList.add('active');
        li.addEventListener('click', () => {
            changeTrack(index);
            playAudio();
        });
        playlistEl.appendChild(li);
    });
}

// Carregar Música Selecionada
function loadTrack(index) {
    const track = playlistData[index];
    songTitleEl.textContent = track.title;
    artistNameEl.textContent = track.artist;
    audio.src = track.src;
    
    // Renderizar letras na tela
    originalLyricsEl.innerHTML = '';
    translatedLyricsEl.innerHTML = '';

    track.lyrics.forEach((line, i) => {
        const pOrig = document.createElement('p');
        pOrig.className = 'lyric-line';
        pOrig.textContent = line.original;
        pOrig.dataset.time = line.time;
        originalLyricsEl.appendChild(pOrig);

        const pTrans = document.createElement('p');
        pTrans.className = 'lyric-line';
        pTrans.textContent = line.translation;
        pTrans.dataset.time = line.time;
        translatedLyricsEl.appendChild(pTrans);
    });

    loadPlaylist();
}

function changeTrack(index) {
    currentTrackIndex = index;
    loadTrack(currentTrackIndex);
}

function playAudio() {
    audio.play();
    playBtn.textContent = '⏸ Pause';
}

function pauseAudio() {
    audio.pause();
    playBtn.textContent = '▶ Play';
}

// Eventos de Play/Pause
playBtn.addEventListener('click', () => {
    if (audio.paused) {
        playAudio();
    } else {
        pauseAudio();
    }
});

prevBtn.addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex - 1 + playlistData.length) % playlistData.length;
    loadTrack(currentTrackIndex);
    playAudio();
});

nextBtn.addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex + 1) % playlistData.length;
    loadTrack(currentTrackIndex);
    playAudio();
});

// Atualizar barra de progresso e sincronizar letras
audio.addEventListener('timeupdate', () => {
    if (audio.duration) {
        const progressPercent = (audio.currentTime / audio.duration) * 100;
        progress.value = progressPercent;

        currentTimeEl.textContent = formatTime(audio.currentTime);
        durationEl.textContent = formatTime(audio.duration);

        syncLyrics(audio.currentTime);
    }
});

// Sincronizar linhas de acordo com o tempo atual do áudio
function syncLyrics(currentTime) {
    const track = playlistData[currentTrackIndex];
    const lines = originalLyricsEl.querySelectorAll('.lyric-line');
    const transLines = translatedLyricsEl.querySelectorAll('.lyric-line');

    let activeIndex = 0;
    for (let i = 0; i < track.lyrics.length; i++) {
        if (currentTime >= track.lyrics[i].time) {
            activeIndex = i;
        }
    }

    lines.forEach((line, i) => {
        if (i === activeIndex) {
            if (!line.classList.contains('active')) {
                line.classList.add('active');
                transLines[i].classList.add('active');
                line.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        } else {
            line.classList.remove('active');
            transLines[i].classList.remove('active');
        }
    });
}

// Avançar música pela barra de progresso
progress.addEventListener('input', () => {
    const time = (progress.value / 100) * audio.duration;
    audio.currentTime = time;
});

// Controle de volume
volumeBar.addEventListener('input', () => {
    audio.volume = volumeBar.value;
});

// Formatar segundos para MM:SS
function formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
}

// Inicializar ao carregar a página
loadTrack(currentTrackIndex);