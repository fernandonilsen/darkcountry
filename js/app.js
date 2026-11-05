document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("audio-player");
    const playBtn = document.getElementById("btn-play");
    const prevBtn = document.getElementById("btn-prev");
    const nextBtn = document.getElementById("btn-next");
    const seekBar = document.getElementById("seek-bar");
    const volumeBar = document.getElementById("volume-bar");
    const playlistList = document.getElementById("playlist-list");

    const sidebar = document.getElementById("tab-playlist");
    const openSidebarBtn = document.getElementById("open-sidebar");
    const closeSidebarBtn = document.getElementById("close-sidebar");

    let currentSongIndex = 0;
    let isPlaying = false;

    function renderPlaylist() {
        playlistList.innerHTML = "";
        songs.forEach((song, index) => {
            const li = document.createElement("li");
            if (index === currentSongIndex) li.classList.add("active");
            
            li.innerHTML = `
                <div class="song-main-info">
                    <span class="song-title">${song.title}</span>
                    <span class="song-artist">${song.artist}</span>
                </div>
                ${song.description ? `<span class="song-inline-desc">${song.description}</span>` : ''}
            `;
            
            li.addEventListener("click", () => {
                loadSong(index, true);
                closeMobileSidebar();
            });
            playlistList.appendChild(li);
        });
    }

    function loadSong(index, shouldPlay = false) {
        currentSongIndex = index;
        const song = songs[currentSongIndex];

        // Atualiza elementos da interface visual corretos
        document.getElementById("track-title").textContent = song.title;
        document.getElementById("track-artist").textContent = song.artist;
        document.getElementById("track-cover").src = song.cover;
        
        // Atualiza o resumo da música no card superior
        const summaryElement = document.getElementById("track-summary");
        if (summaryElement) {
            summaryElement.textContent = song.description || "Sem resumo disponível para esta faixa.";
        }
        
        document.getElementById("lyrics-original").textContent = song.lyricsOriginal;
        document.getElementById("lyrics-translation").textContent = song.lyricsTranslation;
        
        audio.src = song.audioSrc;
        renderPlaylist();

        if (shouldPlay) {
            playAudio();
        }
    }

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

    if (openSidebarBtn) openSidebarBtn.addEventListener("click", () => sidebar.classList.add("open"));
    if (closeSidebarBtn) closeSidebarBtn.addEventListener("click", () => sidebar.classList.remove("open"));

    function closeMobileSidebar() {
        if (window.innerWidth <= 768) {
            sidebar.classList.remove("open");
        }
    }

    loadSong(0);
});