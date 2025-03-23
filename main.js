// Preguntas del quiz basadas en Final Fantasy X
const questions = [
    {
      question: "¿Cómo se llama el mundo en el que se desarrolla Final Fantasy X?",
      options: ["Gaia", "Ivalice", "Spira", "Midgar"],
      answer: 2
    },
    {
      question: "¿Quién es la invocadora principal del grupo?",
      options: ["Rikku", "Lulu", "Yuna", "Paine"],
      answer: 2
    },
    {
      question: "¿Cuál es el nombre del monstruo gigante que amenaza Spira?",
      options: ["Bahamut", "Sin", "Ifrit", "Anima"],
      answer: 1
    },
    {
      question: "¿Cómo se llama la ciudad natal de Tidus?",
      options: ["Bevelle", "Besaid", "Zanarkand", "Kilika"],
      answer: 2
    },
    {
      question: "¿Qué arma usa Wakka en combate?",
      options: ["Espada", "Lanza", "Pelota", "Daga"],
      answer: 2
    }
  ];
  
  let currentQuestion = 0; // Índice actual de la pregunta
  let score = 0; // Puntaje acumulado del jugador
  
  window.addEventListener('DOMContentLoaded', () => {
    const quizContainer = document.getElementById("quiz-container");
  
    // Mostrar una pregunta en pantalla
    function showQuestion() {
      const q = questions[currentQuestion];
  
      quizContainer.innerHTML = `
        <div class="mb-4 text-lg text-yellow-300">Pregunta ${currentQuestion + 1} de ${questions.length}</div>
        <h3 class="text-2xl font-semibold mb-6">${q.question}</h3>
        <div class="space-y-4">
          ${q.options.map((option, index) => `
            <button onclick="selectAnswer(${index})" class="w-full text-left px-6 py-3 bg-gray-700 rounded-lg hover:bg-yellow-500 transition">
              ${option}
            </button>
          `).join('')}
        </div>
      `;
    }
  
    // Manejar selección de respuesta
    window.selectAnswer = function(selected) {
      if (selected === questions[currentQuestion].answer) {
        score++; // Aumentar puntuación si es correcta
      }
      currentQuestion++; // Pasar a la siguiente pregunta
      if (currentQuestion < questions.length) {
        showQuestion();
      } else {
        showResult();
      }
    }
  
    // Mostrar resultado final
    function showResult() {
      quizContainer.innerHTML = `
        <div class="text-center">
          <h3 class="text-3xl font-bold text-green-400 mb-4">¡Has completado tu aventura!</h3>
          <p class="text-xl">Obtuviste <span class="font-bold">${score}</span> de ${questions.length} puntos.</p>
          <p class="text-lg mt-2 text-yellow-300">${getFanLevel(score)}</p>
          <button onclick="restartQuiz()" class="mt-6 px-6 py-3 bg-yellow-300 text-gray-900 font-semibold rounded hover:bg-yellow-400 transition">
            🔄 Volver a intentarlo
          </button>
        </div>
      `;
    }
  
    // Determinar el nivel de fan según el puntaje
    function getFanLevel(score) {
      if (score <= 2) return "🌱 Principiante de Spira";
      if (score <= 4) return "🛡️ Guardián en entrenamiento";
      return "🔥 Alto invocador de Yevon";
    }
  
    // Reiniciar el quiz
    window.restartQuiz = function() {
      currentQuestion = 0;
      score = 0;
      showQuestion();
    }
  
    // Mostrar la primera pregunta al iniciar
    showQuestion();
  });