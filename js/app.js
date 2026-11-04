document.addEventListener("DOMContentLoaded", () => {
    // Referências aos elementos do DOM
    const audio = document.getElementById("audio-player");
    const playBtn = document.getElementById("btn-play");
    const prevBtn = document.getElementById("btn-prev");
    const nextBtn = document.getElementById("btn-next");
    const seekBar = document.getElementById("seek-bar");
    const volumeBar = document.getElementById("volume-bar");
    const playlistList = document.getElementById("playlist-list");

    // Elementos das abas Mobile
    const navTabs = document.querySelectorAll('.nav-tab');
    const tabPlaylist = document.getElementById('tab-playlist');
    const tabLyrics = document.getElementById('tab-lyrics');

    let currentSongIndex = 0;
    let isPlaying = false;

    // 1. Renderizar a Lista de Músicas (Playlist)
    function renderPlaylist() {
        playlistList.innerHTML = "";
        songs.forEach((song, index) => {
            const li = document.createElement("li");
            li.textContent = `${song.title} - ${song.artist}`;
            if (index === currentSongIndex) li.classList.add("active");
            
            li.addEventListener("click", () => {
                loadSong(index, true);
                switchToLyricsTabOnMobile(); // Muda para a aba de letra no celular
            });
            playlistList.appendChild(li);
        });
    }

    // 2. Carregar a Música Selecionada
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

    // 3. Controles de Reprodução
    function playAudio() {
        isPlaying = true;
        audio.play();
        playBtn.innerHTML = `<i data-lucide="pause"></i>`;
        if (window.lucide) lucide.createIcons();
    }

    function pauseAudio() {
        isPlaying = false;
        audio.pause();
        playBtn.innerHTML = `<i data-lucide="play"></i>`;
        if (window.lucide) lucide.createIcons();
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

    // 4. Progresso do Áudio e Volume
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

    if (volumeBar) {
        volumeBar.addEventListener("input", () => {
            audio.volume = volumeBar.value / 100;
        });
    }

    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
    }

    // 5. Troca de Abas no Celular (Músicas / Letra)
    navTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetId = tab.getAttribute('data-target');

            navTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            if (targetId === 'tab-playlist') {
                tabPlaylist.classList.add('active-tab');
                tabLyrics.classList.remove('active-tab');
            } else {
                tabLyrics.classList.add('active-tab');
                tabPlaylist.classList.remove('active-tab');
            }
        });
    });

    function switchToLyricsTabOnMobile() {
        if (window.innerWidth <= 768) {
            navTabs.forEach(t => t.classList.remove('active'));
            const lyricsTabBtn = document.querySelector('[data-target="tab-lyrics"]');
            if (lyricsTabBtn) lyricsTabBtn.classList.add('active');

            tabPlaylist.classList.remove('active-tab');
            tabLyrics.classList.add('active-tab');
        }
    }

    // Inicializa a primeira música
    loadSong(0);
});