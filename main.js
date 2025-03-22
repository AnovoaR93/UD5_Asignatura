// Array de preguntas con opciones y respuestas
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
    },
    {
      question: "¿Qué función tiene Auron dentro del grupo?",
      options: ["Invocador", "Guardián", "Navegante", "Mercader"],
      answer: 1
    },
    {
      question: "¿Cómo se llama el padre de Yuna?",
      options: ["Braska", "Jecht", "Kinoc", "Isaaru"],
      answer: 0
    },
    {
      question: "¿Qué criatura mitológica puedes invocar en el juego?",
      options: ["Phoenix", "Bahamut", "Shiva", "Todas las anteriores"],
      answer: 3
    },
    {
      question: "¿Qué relación tiene Tidus con Jecht?",
      options: ["Hermanos", "Enemigos", "Padre e hijo", "Maestros"],
      answer: 2
    },
    {
      question: "¿Qué tipo de deporte aparece en Final Fantasy X?",
      options: ["Chocobo Racing", "Triple Triad", "Blitzball", "Sphere Break"],
      answer: 2
    }
  ];
  
  let currentQuestion = 0; // Índice actual de la pregunta
  let score = 0;           // Contador de puntuación
  
  // Espera a que el DOM esté listo antes de ejecutar el quiz
  window.addEventListener('DOMContentLoaded', () => {
    const quizContainer = document.getElementById("quiz-container");
  
    // Muestra una pregunta y sus opciones
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
  
    // Valida la respuesta seleccionada y avanza a la siguiente
    window.selectAnswer = function(selected) {
      if (selected === questions[currentQuestion].answer) {
        score++;
      }
      currentQuestion++;
      if (currentQuestion < questions.length) {
        showQuestion();
      } else {
        showResult();
      }
    }
  
    // Muestra el resultado final y el nivel de fan
    function showResult() {
      let fanLevel = "";
      if (score <= 3) fanLevel = "Principiante de Spira 🌀";
      else if (score <= 7) fanLevel = "Guardián en entrenamiento 🛡️";
      else fanLevel = "Alto invocador 🔥";
  
      quizContainer.innerHTML = `
        <div class="text-center">
          <h3 class="text-3xl font-bold text-green-400 mb-4">¡Has terminado tu peregrinaje!</h3>
          <p class="text-xl">Puntos obtenidos: <span class="font-bold">${score}</span> de ${questions.length}</p>
          <p class="text-lg mt-2 text-yellow-300">Nivel de fan: <strong>${fanLevel}</strong></p>
          <button onclick="restartQuiz()" class="mt-6 px-6 py-3 bg-yellow-300 text-gray-900 font-semibold rounded hover:bg-yellow-400 transition">
            Volver a intentarlo
          </button>
        </div>
      `;
    }
  
    // Reinicia el quiz desde el principio
    window.restartQuiz = function() {
      currentQuestion = 0;
      score = 0;
      showQuestion();
    }
  
    // Inicia el quiz
    showQuestion();
  });
  