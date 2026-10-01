// Dados das músicas (incluindo tempos em segundos para sincronizar as linhas)
const playlistData = [
    {
    title: "Say It Again",
    artist: "Dark Country",
    src: "Say It Again.mp4",
    cover: "dark horizon.png", // Nome da imagem da capa na sua pasta
    lyrics: [
        { time: 26, original: "Snow falls hard on Christmas night", translation: "A neve cai forte na noite de Natal" },
        { time: 29, original: "Moon consume through frozen sky", translation: "A lua devora o céu congelado" },
        { time: 33, original: "Black horse running wild and fast", translation: "Cavalo preto correndo selvagem e rápido" },
        { time: 36, original: "In those devils close behind", translation: "Com aqueles demônios logo atrás" },
        { time: 45, original: "Through the forest through the frost", translation: "Pela floresta, através da geada" },
        { time: 48, original: "Through the swamp and through the rain", translation: "Pelo pântano e através da chuva" },
        { time: 51, original: "But my horse keeps pushing on", translation: "Mas meu cavalo continua insistindo" },
        { time: 54, original: "Like he knows the holy way", translation: "Como se ele soubesse o caminho sagrado" },
        { time: 57, original: "Hear them screaming in the dark", translation: "Ouça-os gritar na escuridão" },
        { time: 60, original: "Feel them breathing down my neck", translation: "Sinto-os respirando no meu pescoço." },
        { time: 64, original: "FUCK OFF", translation: "VÁ SE FODER" },
        { time: 67, original: "You ain't taking me tonight", translation: "Você não vai me levar esta noite" },
        { time: 70, original: "FUCK OFF", translation: "VÁ SE FODER" },
        { time: 72, original: "Ride this horse through holy light", translation: "Cavalgue este cavalo através da luz sagrada" },
        { time: 76, original: "FUCK OFF", translation: "VÁ SE FODER" },
        { time: 79, original: "Hear my gun and hear it roar", translation: "Ouça minha arma e ouça-a rugir" },
        { time: 82, original: "FUCK OFF", translation: "VÁ SE FODER" },
        { time: 85, original: "I'm riding home forevermore", translation: "Estou voltando para casa para sempre." },
        { time: 94, original: "Cross river cold and black", translation: "Atravesse o rio frio e escuro" },
        { time: 98, original: "Hear those demons in the trees", translation: "Ouça aqueles demônios nas árvores" },
        { time: 100, original: "Though the eye and let it sing", translation: "Através do olho o deixe cantar" },
        { time: 103, original: "Hear them crying in the breeze", translation: "Ouça-os chorando na brisa." },
        { time: 106, original: "Through the marsh and through the mud", translation: "Através do pântano e da lama" },
        { time: 109, original: "Through the shadows through the snow", translation: "Através das sombras, através da neve" },
        { time: 112, original: "But my horse just keeps on flying", translation: "Mas meu cavalo continua voando" },
        { time: 115, original: "Like a ghost I'll never slow", translation: "Como um fantasma, eu nunca vou diminuir o ritmo." },
        { time: 118, original: "Hear them howling in the dark", translation: "Ouça-os uivando na escuridão." },
        { time: 121, original: "But I see my porch light glow", translation: "Mas vejo a luz da minha varanda brilhar" },
        { time: 125, original: "FUCK OFF", translation: "VÁ SE FODER" },
        { time: 128, original: "You ain't taking me tonight", translation: "Você não vai me levar esta noite" },
        { time: 131, original: "FUCK OFF", translation: "VÁ SE FODER" },
        { time: 133, original: "Ride this horse through holy light", translation: "Cavalgue este cavalo através da luz sagrada" },
        { time: 137, original: "FUCK OFF", translation: "VÁ SE FODER" },
        { time: 140, original: "Hear my gun and hear it roar", translation: "Ouça minha arma e ouça-a rugir" },
        { time: 143, original: "FUCK OFF", translation: "VÁ SE FODER" },
        { time: 146, original: "I'm riding home forevermore", translation: "Estou voltando para casa para sempre." },
        { time: 168, original: "Stands waiting by the door", translation: "Fica de pé, esperando junto à porta." },
        { time: 171, original: "Fire burning warming sand", translation: "Fogo queimando, aquecendo a areia" },
        { time: 174, original: "Feed my horse and close the gate", translation: "Alimente meu cavalo e feche o portão" },
        { time: 177, original: "Draw the holy circle", translation: "Desenhe o círculo sagrado" },
        { time: 195, original: "Fuck all", translation: "VÁ SE FODER" },
        { time: 197, original: "Devil stay outside tonight", translation: "Diabo, fique lá fora está noite" },
        { time: 201, original: "FUCK OFF", translation: "VÁ SE FODER" },
        { time: 203, original: "This here house is holy ground", translation: "Esta casa é um lugar sagrado." },
        { time: 207, original: "FUCK OFF", translation: "VÁ SE FODER" },
        { time: 210, original: "Hear my horse he brought me home", translation: "Ouça meu cavalo, ele me trouxe para casa" },
        { time: 213, original: "FUCK OFF", translation: "VÁ SE FODER" },
        { time: 216, original: "Now the dark can't drag me down", translation: "Agora a escuridão não pode me derrubar." }
    ]
},
{
        title: "Graveyard Shift",
        artist: "Dark Country",
        src: "Graveyard Shift.mp3", // Nome exato do arquivo de áudio na sua pasta
        cover: "graveyard.png", // Nome da imagem da capa desta música (opcional)
        lyrics: [
            { time: 7, original: "Midnight strikes, the city goes dead", translation: "A meia-noite soa, a cidade morre" },
            { time: 8, original: "We don't sleep, we earn our bread", translation: "Nós não dormimos, ganhamos o nosso pão" },
            { time: 10, original: "Punch the card", translation: "Perfure o cartão" },
            { time: 15, original: "Let the engine roar", translation: "Deixe o motor rugir" },
            { time: 26, original: "The halogen light has a sickening glow", translation: "A lâmpada halógena tem um brilho nauseante." },
            { time: 32, original: "On the graveyard shift where the minutes go slow", translation: "No turno da madrugada, onde os minutos passam devagar" },
            { time: 38, original: "The midnight air is heavy and cold", translation: "O ar da meia-noite está pesado e frio." },
            { time: 44, original: "I am the profit with the youth we sold", translation: "Eu sou o lucro com os jovens que vendemos." },
            { time: 50, original: "Everyone sleeping in a warm soft bed", translation: "Todos dormindo em uma cama macia e quentinha." },
            { time: 54, original: "While I'm keeping the fires of the engine fed", translation: "Enquanto eu mantenho alimentando o fogo do motor" },
            { time: 59, original: "Oh, I am the ghost in the middle of the night", translation: "Oh, eu sou o fantasma no meio da noite." },
            { time: 64, original: "Working in the shadow so you have the light", translation: "Trabalhando na sombra para que você tenha a luz." },
            { time: 10, original: "You count your dollars while I count the hours", translation: "Você conta seus dólares enquanto eu conto as horas." },
            { time: 10, original: "Under the smoke of the factory towers", translation: "Sob a fumaça das torres da fábrica" },
            { time: 10, original: "Yeah, the world is asleep, but the machine never dies", translation: "Sim, o mundo está adormecido, mas a máquina nunca morre." },
            { time: 10, original: "And the graveyard shift is where my future lies", translation: "E é no turno da noite que reside o meu futuro." },

            
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

    // Atualizar a capa do álbum (se tiver a propriedade cover)
    const albumArt = document.getElementById('album-art');
    if (track.cover) {
        albumArt.src = track.cover;
    } else {
        albumArt.src = 'dark horizon.png'; // Ou uma imagem padrão
    }

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
                // Ativa e rola a linha original
                line.classList.add('active');
                line.scrollIntoView({ behavior: 'smooth', block: 'center' });

                // Ativa e rola a linha da tradução juntas!
                transLines[i].classList.add('active');
                transLines[i].scrollIntoView({ behavior: 'smooth', block: 'center' });
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