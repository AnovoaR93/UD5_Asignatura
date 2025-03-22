const questions = [
    // Cada objeto representa una pregunta del quiz con sus opciones y la respuesta correcta
    {
      question: "¿Cómo se llama el mundo en el que se desarrolla Final Fantasy X?",
      options: ["Gaia", "Ivalice", "Spira", "Midgar"],
      answer: 2 // Spira es la respuesta correcta
    },
    {
      question: "¿Quién es la invocadora principal del grupo?",
      options: ["Rikku", "Lulu", "Yuna", "Paine"],
      answer: 2 // Yuna es la invocadora
    },
    {
      question: "¿Cuál es el nombre del monstruo gigante que amenaza Spira?",
      options: ["Bahamut", "Sin", "Ifrit", "Anima"],
      answer: 1 // Sin es el enemigo principal
    },
    {
      question: "¿Cómo se llama la ciudad natal de Tidus?",
      options: ["Bevelle", "Besaid", "Zanarkand", "Kilika"],
      answer: 2 // Tidus proviene de Zanarkand
    },
    {
      question: "¿Qué arma usa Wakka en combate?",
      options: ["Espada", "Lanza", "Pelota", "Daga"],
      answer: 2 // Wakka usa una pelota de blitzball
    }
  ];
  
  let currentQuestion = 0; // Índice de la pregunta actual
  let score = 0; // Puntuación del jugador
  
  const quizContainer = document.getElementById("quiz-container"); // Contenedor donde se mostrará el quiz
  
  // Muestra la pregunta actual y las opciones
  function showQuestion() {
    const q = questions[currentQuestion];
    quizContainer.innerHTML = `
      <div class="mb-4 text-lg text-yellow-300">Pregunta ${currentQuestion + 1} de ${questions.length}</div>
      <h3 class="text-2xl font-semibold mb-6">${q.question}</h3>
      <div class="space-y-4">
        ${q.options.map((option, index) => `
          <button onclick="selectAnswer(${index})" class="w-full text-left px-6 py-3 bg-gray-700 rounded-lg hover:bg-blue-600 transition">
            ${option}
          </button>
        `).join('')}
      </div>
    `;
  }
  
  // Valida si la respuesta seleccionada es correcta y avanza a la siguiente pregunta o muestra el resultado final
  function selectAnswer(selected) {
    if (selected === questions[currentQuestion].answer) {
      score++; // Aumenta la puntuación si es correcta
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
      showQuestion(); // Muestra la siguiente pregunta
    } else {
      showResult(); // Muestra el resultado final
    }
  }
  
  // Muestra la puntuación final del jugador
  function showResult() {
    quizContainer.innerHTML = `
      <div class="text-center">
        <h3 class="text-3xl font-bold text-green-400 mb-4">¡Has terminado tu peregrinaje!</h3>
        <p class="text-xl">Puntos obtenidos: <span class="font-bold">${score}</span> de ${questions.length}</p>
        <p class="italic mt-2 text-sm text-gray-400">¿Eres digno de enfrentarte a Sin?</p>
        <button onclick="restartQuiz()" class="mt-6 px-6 py-3 bg-yellow-300 text-gray-900 font-semibold rounded hover:bg-yellow-400 transition">
          Volver a intentarlo
        </button>
      </div>
    `;
  }
  
  // Reinicia el quiz desde el principio
  function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    showQuestion();
  }
  
  // Inicializa el quiz al cargar la página
  showQuestion();