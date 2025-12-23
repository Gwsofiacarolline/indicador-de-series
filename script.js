    const series = [
      {
        titulo: "Mindhunter",
        vibe: "Perfis criminais, entrevistas tensas e mentes complicadas.",
        desc: "Dois agentes do FBI expandem as fronteiras da ciência criminal nos anos 70 com um perigoso mergulho no universo da psicologia do assassinato."
      },
      {
        titulo: "Dark",
        vibe: "Viagem no tempo, segredos e cérebro derretendo suavemente.",
        desc: "Os mistérios sombrios de uma pequena cidade alemã são expostos quando duas crianças desaparecem. Enquanto as famílias procuram os dois desaparecidos, eles descobrem uma trama de indivíduos conectados com a história conturbada da cidade."
      },
      {
        titulo: "You",
        vibe: "Obsessão, narrador nada confiável e decisões duvidosas.",
        desc: "Obsessivo e mortalmente charmoso, Joe vai ao extremo para entrar na vida de quem o fascina. Por trás de seus modos gentis, há uma fúria assassina e um passado perturbador."
      },
      {
        titulo: "Black Mirror",
        vibe: "Tecnologia, paranoia e experimentos sociais com plot twist.",
        desc: "Contos de ficção científica que refletem o lado negro das telas e da tecnologia, mostrando que nem toda novidade traz só benefícios."
      },
      {
        titulo: "The Sinner (O Pecador)",
        vibe: "Crimes com camadas psicológicas e passado mal-resolvido.",
        desc: "É uma série de antologia criminal que o foco não é descobrir quem cometeu o crime, mas sim por que ele foi cometido. A trama acompanha o detetive Harry Ambrose, que investiga crimes perturbadores e busca desvendar os traumas e mistérios por trás das ações dos pecadores em cada temporada. "
      },
      {
        titulo: "Behind Her Eyes (Por Trás de Seus Olhos)",
        vibe: "Tensão, sonhos e aquele final que você comenta por dias.",
        desc: "Louise, uma mãe solteira que se envolve em um caso com seu novo chefe, David, um psiquiatra casado, e, sem querer, se torna amiga da esposa dele, Adele, mergulhando numa teia de segredos, manipulações e elementos sobrenaturais, culminando em uma reviravolta chocante que redefine tudo o que ela pensava saber sobre o casal e sobre si mesma, explorando temas como projeção astral e identidades trocadas. "
      },
      {
        titulo: "The Haunting of Hill House",
        vibe: "Traumas de família, memórias e fantasmas (nem sempre externos).",
        desc: "Entre o passado e o presente, uma família abalada confronta memórias assustadoras de seu antigo lar e dos eventos aterrorizantes que os expulsaram de lá."
      },
      {
        titulo: "Desobedientes",
        vibe: "Séries dramáticas, Canadenses, Séries de mistérios, Suspense para TV",
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

// ===== FUNÇÃO INDICAR SÉRIE =====
function indicarSerie() {

  const numeroAleatorio = Math.floor(Math.random() * series.length);

  
  const serieEscolhida = series[numeroAleatorio];

  resultado.innerHTML =
    "<h2 class='serie-titulo'>" + serieEscolhida.titulo + "</h2>" +
    "<p class='serie-vibe'>Vibe: " + serieEscolhida.vibe + "</p>" +
    "<p class='serie-desc'>" +
      serieEscolhida.desc +
      "<br><br><em>Dica:</em> pesquise também críticas e análises para entender os temas psicológicos." +
    "</p>";
}

// ===== FUNÇÃO MODO PROFESSOR =====
function alternarProfessor() {
  if (professorBox.style.display === "block") {
    professorBox.style.display = "none";
  } else {
    professorBox.style.display = "block";
  }
}



// ===== EVENTOS DE CLIQUE =====
btnIndicar.addEventListener("click", indicarSerie);
btnProfessor.addEventListener("click", alternarProfessor);


