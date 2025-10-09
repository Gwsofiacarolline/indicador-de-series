    const series = [
      {
        titulo: "Mindhunter",
        vibe: "Perfis criminais, entrevistas tensas e mentes complicadas.",
        desc: "Dois agentes do FBI decidem estudar psicologia de serial killers para resolver casos. Calma, professor(a): é pesquisa qualitativa de campo!"
      },
      {
        titulo: "Dark",
        vibe: "Viagem no tempo, segredos e cérebro derretendo suavemente.",
        desc: "Uma cidadezinha alemã, desaparecimentos misteriosos e uma trama que vai dobrar sua percepção de tempo — e a sua planilha de estudos."
      },
      {
        titulo: "You",
        vibe: "Obsessão, narrador nada confiável e decisões duvidosas.",
        desc: "A mente do Joe prova que amor e limites precisam de terapia. Ótimo estudo de personagem. Nada a replicar na vida real, combinado."
      },
      {
        titulo: "Black Mirror",
        vibe: "Tecnologia, paranoia e experimentos sociais com plot twist.",
        desc: "Cada episódio é um soco mental sobre como a tech mexe com a cabeça. Dá até pra citar em TCC (com moderação e referências)."
      },
      {
        titulo: "The Sinner (O Pecador)",
        vibe: "Crimes com camadas psicológicas e passado mal-resolvido.",
        desc: "Um detetive cava fundo na psique por trás de crimes aparentemente sem sentido. Ideal pra quem ama 'porquês' e gatilhos mentais."
      },
      {
        titulo: "Behind Her Eyes (Por Trás de Seus Olhos)",
        vibe: "Tensão, sonhos e aquele final que você comenta por dias.",
        desc: "Triângulo que vira hexágono emocional na sua cabeça. Suspense psicológico com toque… digamos… esotérico."
      },
      {
        titulo: "The Haunting of Hill House",
        vibe: "Traumas de família, memórias e fantasmas (nem sempre externos).",
        desc: "Horror com coração e psicologia: medo, luto e reconciliação. Você vai pular e refletir — às vezes ao mesmo tempo."
      },
      {
        titulo: "desobedientes",
        vibe: "Séries dramáticas, Canadenses, Séries de mistério, Suspense para TV",
        desc: "Dois desconhecidos topam um ensaio farmacêutico que promete resolver tudo. Resultado: surreal, bonito e cabeça frita."
      },
      {
        titulo: "Pssica",
        vibe: "Séries dramáticas, Brasileiros, Séries baseadas em livros",
        desc: "Um policial de uma cidadezinha suspeita que a escola para adolescentes problemáticos (e sua fundadora carismática) pode esconder mais do que aparenta."
      },
      {
        titulo: "Cassandra",
        vibe: "Séries dramáticas, Alemães, Suspense para TV",
        desc: "Uma família se muda para uma casa inteligente antiga e descobre que ela é controlada por uma assistente virtual que faz de tudo para mantê-los lá."
      },
       
    ];

    const resultado = document.getElementById("resultado");
    const btnIndicar = document.getElementById("btnIndicar");
    const btnProfessor = document.getElementById("btnProfessor");
    const btnCopiar = document.getElementById("btnCopiar");
    const professorBox = document.getElementById("professorBox");

    function indicarSerie() {
      const i = Math.floor(Math.random() * series.length);
      const s = series[i];
      resultado.innerHTML = `
        <h2 class="serie-titulo">${s.titulo}</h2>
        <p class="serie-vibe">Vibe: ${s.vibe}</p>
        <p class="serie-desc">${s.desc}
          <br><br><em>Dica:</em> pesquise também críticas e análises pra entender os temas psicológicos.
        </p>
      `;
    }

    function alternarProfessor() {
      const visivel = professorBox.style.display === "block";
      professorBox.style.display = visivel ? "none" : "block";
    }

    function copiarJustificativa() {
      const texto = "Professor(a), desenvolvi este site para praticar HTML, CSS e JavaScript. " +
        "Usei séries psicológicas como tema para aplicar arrays, eventos de clique e manipulação de DOM. " +
        "A seleção é aleatória para incentivar a exploração crítica e a comparação de narrativas. :)";
      navigator.clipboard.writeText(texto)
        .then(() => alert("Justificativa copiada! (Agora parece até sério 👀)"))
        .catch(() => alert("Ops! Não consegui copiar automaticamente. Copie manualmente: \n\n" + texto));
    }

    btnIndicar.addEventListener("click", indicarSerie);
    btnProfessor.addEventListener("click", alternarProfessor);
    btnCopiar.addEventListener("click", copiarJustificativa);