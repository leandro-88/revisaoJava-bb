/* ==========================================================================
   1. CONFIGURAÇÃO DE ÁUDIOS (Caminhos atualizados para a pasta audio/)
   ========================================================================== */
const audios = {
    musica1: new Audio('audio/Thread_da_Posse.mp3'),
    musica2: new Audio('audio/Polimorfismo_da_Aprovacao.mp3'),
    musica3: new Audio('audio/Java (SE 11 e EE 8) 1.mp3'),
    musica4: new Audio('audio/Java (SE 11 e EE 8) 2.mp3'),
    musica5: new Audio('audio/Provas Concurso TI 2.mp3'),
    musica6: new Audio('audio/Dois_Iguais_Nao_E_Amor.mp3')
};

let musicaAtualIdx = 1;
const totalMusicas = 6;
const nomesMusicas = [
    "1. Thread da Posse",
    "2. Polimorfismo da Aprovação",
    "3. Lambda Anônimas",
    "4. Herança de Sucesso",
    "5. Dicas Ti Cesgranrio",
    "6. Dois Iguais Não é Amor"
];

/* ==========================================================================
   2. MOTOR DO PLAYER DE ÁUDIO E PLAYLIST
   ========================================================================== */
function playAudio(id) {
    Object.values(audios).forEach(a => { a.pause(); a.currentTime = 0; });
    if(audios[id]) audios[id].play();
}

function pararMusicaAtual() {
    Object.values(audios).forEach(a => { a.pause(); a.currentTime = 0; });
    const btn = document.getElementById('btnPlayFixo');
    if (btn) { btn.innerHTML = "▶"; btn.style.background = "#673ab7"; btn.style.color = "#fff"; }
}

function forcarPlay() {
    let audio = audios['musica' + musicaAtualIdx];
    let btn = document.getElementById('btnPlayFixo');
    if (!audio) return;
    Object.values(audios).forEach(a => { a.pause(); a.currentTime = 0; });
    audio.play();
    if (btn) {
        btn.innerHTML = "||"; 
        btn.style.background = "#00bcd4"; 
        btn.style.color = "#000";
    }
    atualizarDisplayPlayer();
}

function togglePlayPause() {
    let audio = audios['musica' + musicaAtualIdx];
    let btn = document.getElementById('btnPlayFixo');
    if (audio.paused) {
        forcarPlay();
    } else {
        audio.pause();
        if (btn) { btn.innerHTML = "▶"; btn.style.background = "#673ab7"; btn.style.color = "#fff"; }
    }
}

function tocarPlaylistSync(idx) {
    musicaAtualIdx = idx;
    forcarPlay();
}

function atualizarDisplayPlayer() {
    const nome = nomesMusicas[musicaAtualIdx - 1] || '—';
    const pNome = document.getElementById('playerNomeMusica');
    const pTrack = document.getElementById('playerTrackName');
    if (pNome) pNome.textContent = nome;
    if (pTrack) pTrack.textContent = nome;
}

function nextMusic() {
    musicaAtualIdx = (musicaAtualIdx % totalMusicas) + 1;
    forcarPlay();
}

function prevMusic() {
    musicaAtualIdx = (musicaAtualIdx === 1) ? totalMusicas : musicaAtualIdx - 1;
    forcarPlay();
}

/* ==========================================================================
   3. INTERFACE (Letras, Playlist e Slides)
   ========================================================================== */
function toggleLetra() {
    var caixa = document.getElementById("caixaLetra");
    var lista = document.getElementById("listaPlaylist");
    var icone = document.getElementById("iconPlaylist");
    if (caixa.style.display === "none") {
        caixa.style.display = "block";
        lista.style.display = "none";
        icone.style.transform = "rotate(0deg)";
    } else {
        caixa.style.display = "none";
    }
}

function togglePlaylist() {
    var lista = document.getElementById("listaPlaylist");
    var caixa = document.getElementById("caixaLetra");
    var icone = document.getElementById("iconPlaylist");
    if (lista.style.display === "none") {
        lista.style.display = "block";
        caixa.style.display = "none";
        icone.style.transform = "rotate(180deg)";
    } else {
        lista.style.display = "none";
        icone.style.transform = "rotate(0deg)";
    }
}

function exibirMusica(numero) {
    for (let i = 1; i <= 5; i++) {
        const letra = document.getElementById("letraConteudo" + i);
        const btn = document.getElementById("btnLetra" + i);
        if (letra) letra.style.display = (i === numero) ? "block" : "none";
        if (btn) {
            btn.style.background = (i === numero) ? "var(--ciano, #00bcd4)" : "#333";
            btn.style.color = (i === numero) ? "#000" : "#fff";
        }
    }
    document.getElementById("caixaLetra").scrollTop = 0;
}

/* ==========================================================================
   4. NAVEGAÇÃO DE SLIDES
   ========================================================================== */
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function updateUI() {
    slides.forEach((slide, i) => {
        slide.classList.remove('active', 'out');
        if (i === currentSlide) slide.classList.add('active');
        else if (i < currentSlide) slide.classList.add('out');
    });
    document.getElementById('counter').textContent = (currentSlide + 1) + '/' + totalSlides;
    document.getElementById('topfill').style.width = ((currentSlide + 1) / totalSlides * 100) + '%';
    document.getElementById('prev').disabled = currentSlide === 0;
    document.getElementById('next').disabled = currentSlide === totalSlides - 1;
    updateDots();
}

function updateDots() {
    const dotsContainer = document.getElementById('dots');
    if (dotsContainer.children.length === 0) {
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('div');
            dot.className = 'dot';
            dot.onclick = () => { currentSlide = i; updateUI(); };
            dotsContainer.appendChild(dot);
        }
    }
    document.querySelectorAll('.dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlide);
    });
}

function next() { if (currentSlide < totalSlides - 1) { currentSlide++; updateUI(); } }
function prev() { if (currentSlide > 0) { currentSlide--; updateUI(); } }

function pularParaSlide() {
    const input = document.getElementById('inputPularSlide');
    let val = parseInt(input.value);
    if (isNaN(val)) return;
    currentSlide = Math.max(0, Math.min(val - 1, totalSlides - 1));
    updateUI();
    input.value = '';
    input.blur();
}

/* ==========================================================================
   5. LÓGICA DO QUIZ (Feedback instantâneo)
   ========================================================================== */
function ans(btn, quizId, selected) {
    const correct = {
        'q1': 'B', 'q2': 'B', 'q3': 'D', 'q4': 'A', 'q5': 'C',
        'q6': 'C', 'q7': 'C', 'q8': 'C', 'q9': 'B', 'q10': 'B',
        'q11': 'C', 'q12': 'B', 'q13': 'C', 'q14': 'B', 'q15': 'C'
    };
    const feedback = {
        'q1': 'Em Java, herdar é extends, mas Interface é OBRIGATORIAMENTE implements.',
        'q2': 'Sem operações terminais, o stream não executa nada (Lazy Evaluation).',
        'q3': '"var" exige um tipo explícito no lado direito; null é inválido.',
        'q4': 'new String() força a criação de um novo objeto no Heap; use .equals().',
        'q5': 'Na sobrescrita, o filho não pode ser mais restritivo que o pai.',
        'q6': 'Não é permitido colocar o tamanho do Array do lado esquerdo da declaração.',
        'q7': 'Ordem: Blocos Estáticos, Blocos de Instância e Construtor.',
        'q8': 'Variáveis em interfaces são implicitamente "public static FINAL".',
        'q9': 'O bloco "finally" tem precedência absoluta sobre o retorno do try.',
        'q10': 'Deve-se invocar manualmente super(valor) se o pai não tem construtor vazio.',
        'q11': 'Strings são imutáveis; métodos geram novas instâncias.',
        'q12': 'Mudar apenas o tipo de retorno não configura sobrecarga válida.',
        'q13': 'Switch com String null lança NullPointerException.',
        'q14': 'Set (HashSet) recusa duplicatas silenciosamente.',
        'q15': 'new Funcionario[3] cria referências (gavetas), não instâncias.'
    };

    document.querySelectorAll(`#${quizId}-opts .qopt`).forEach(b => b.disabled = true);
    const fb = document.getElementById(`${quizId}-fb`);
    if (selected === correct[quizId]) {
        btn.classList.add('correct');
        fb.textContent = '✅ Correto! ' + feedback[quizId];
    } else {
        btn.classList.add('wrong');
        fb.textContent = '❌ Incorreto. ' + feedback[quizId];
    }
}

function toggleMiniPlayer() {
    const conteudo = document.getElementById('playerConteudo');
    const btn = document.getElementById('btnMinPlayer');
    const player = document.getElementById('playerFixoGeral');
    const isHidden = conteudo.style.display === 'none';
    conteudo.style.display = isHidden ? 'flex' : 'none';
    btn.innerHTML = isHidden ? '▼' : '♪';
    player.style.maxWidth = isHidden ? '320px' : '42px';
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ') next();
    if (e.key === 'ArrowLeft') prev();
});

/* ==========================================================================
   6. INTERFACE MOBILE (Toggle Player)
   ========================================================================== */
function toggleMiniPlayer() {
    const conteudo = document.getElementById('playerConteudo');
    const btn = document.getElementById('btnMinPlayer');
    const player = document.getElementById('playerFixoGeral');
    
    if (conteudo.style.display === 'none') {
        conteudo.style.display = 'flex';
        btn.innerHTML = '▼';
        btn.title = 'Minimizar';
        player.style.maxWidth = '320px';
    } else {
        conteudo.style.display = 'none';
        btn.innerHTML = '♪';
        btn.title = 'Expandir player';
        player.style.maxWidth = '42px';
    }
}

// Inicialização
updateUI();
