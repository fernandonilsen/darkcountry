document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("audio-player");
    const playBtn = document.getElementById("btn-play");
    const prevBtn = document.getElementById("btn-prev");
    const nextBtn = document.getElementById("btn-next");
    const seekBar = document.getElementById("seek-bar");
    const volumeBar = document.getElementById("volume-bar");
    const playlistList = document.getElementById("playlist-list");

    let currentSongIndex = 0;
    let isPlaying = false;

    // Renderizar a Playlist
    function renderPlaylist() {
        playlistList.innerHTML = "";
        songs.forEach((song, index) => {
            const li = document.createElement("li");
            li.textContent = `${song.title} - ${song.artist}`;
            if (index === currentSongIndex) li.classList.add("active");
            li.addEventListener("click", () => loadSong(index, true));
            playlistList.appendChild(li);
        });
    }

    // Carregar Música
    function loadSong(index, shouldPlay = false) {
        currentSongIndex = index;
        const song = songs[currentSongIndex];

        document.getElementById("track-title").textContent = song.title;
        document.getElementById("track-artist").textContent = song.artist;
        document.getElementById("track-cover").src = song.cover;
        document.getElementById("lyrics-original").textContent = song.lyricsOriginal;
        document.getElementById("lyrics-translation").textContent = song.lyricsTranslation;
        
        audio.src = song.audioSrc;
        renderPlaylist();

        if (shouldPlay) {
            playAudio();
        }
    }

    // Controles de Áudio
    function playAudio() {
        isPlaying = true;
        audio.play();
        playBtn.innerHTML = `<i data-lucide="pause"></i>`;
        lucide.createIcons();
    }

    function pauseAudio() {
        isPlaying = false;
        audio.pause();
        playBtn.innerHTML = `<i data-lucide="play"></i>`;
        lucide.createIcons();
    }

    playBtn.addEventListener("click", () => {
        if (isPlaying) pauseAudio();
        else playAudio();
    });

    prevBtn.addEventListener("click", () => {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        loadSong(currentSongIndex, true);
    });

    nextBtn.addEventListener("click", () => {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        loadSong(currentSongIndex, true);
    });

    // Atualização da Barra de Progresso
    audio.addEventListener("timeupdate", () => {
        if (audio.duration) {
            const progress = (audio.currentTime / audio.duration) * 100;
            seekBar.value = progress;
            document.getElementById("current-time").textContent = formatTime(audio.currentTime);
            document.getElementById("duration").textContent = formatTime(audio.duration);
        }
    });

    seekBar.addEventListener("input", () => {
        audio.currentTime = (seekBar.value / 100) * audio.duration;
    });

    volumeBar.addEventListener("input", () => {
        audio.volume = volumeBar.value / 100;
    });

    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
    }

    // Inicialização
    loadSong(0);
});