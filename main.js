// Array de preguntas del quiz
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
  
  // Array de imágenes para los fondos de cada pregunta (en el mismo orden que las preguntas)
  const backgrounds = [
    "images/ffx-hero.jpg",
    "images/ffx-remaster.jpg",
    "images/grupo-ffx.jpg",
    "images/tidus-yuna.jpg",
    "images/tidus.jpg",
    "images/yuna-x25.jpg",
    "images/zanarkand-bg.jpg",
    "images/grupo-ffx.jpg",
    "images/tidus-yuna.jpg",
    "images/ffx-remaster.jpg"
  ];
  
  let currentQuestion = 0; // Índice de la pregunta actual
  let score = 0;            // Puntaje del usuario
  
  // Esperar que el documento esté completamente cargado
  window.addEventListener('DOMContentLoaded', () => {
    const quizContainer = document.getElementById("quiz-container");
  
    // Mostrar la pregunta actual en pantalla
    function showQuestion() {
      const q = questions[currentQuestion];
  
      // Establecer el fondo correspondiente a la pregunta
      document.body.style.backgroundImage = `url('${backgrounds[currentQuestion]}')`;
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundPosition = "center";
      document.body.style.backgroundRepeat = "no-repeat";
  
      // Mostrar pregunta y opciones con estilos adaptados
      quizContainer.innerHTML = `
        <div class="mb-4 text-lg text-yellow-300 bg-black bg-opacity-60 p-2 rounded">
          Pregunta ${currentQuestion + 1} de ${questions.length}
        </div>
        <h3 class="text-2xl font-semibold mb-6 bg-black bg-opacity-60 p-3 rounded">${q.question}</h3>
        <div class="space-y-4">
          ${q.options.map((option, index) => `
            <button onclick="selectAnswer(${index})" class="w-full text-left px-6 py-3 bg-gray-700 bg-opacity-80 rounded-lg hover:bg-blue-600 transition">
              ${option}
            </button>
          `).join('')}
        </div>
      `;
    }
  
    // Función llamada cuando el usuario selecciona una respuesta
    window.selectAnswer = function(selected) {
      if (selected === questions[currentQuestion].answer) {
        score++; // Aumentar puntaje si la respuesta es correcta
      }
      currentQuestion++; // Ir a la siguiente pregunta
      if (currentQuestion < questions.length) {
        showQuestion();
      } else {
        showResult();
      }
    }
  
    // Mostrar la pantalla de resultado al finalizar el quiz
    function showResult() {
      let fanLevel = "";
      if (score <= 3) fanLevel = "Principiante de Spira 🌀";
      else if (score <= 7) fanLevel = "Guardián en entrenamiento 🛡️";
      else fanLevel = "Alto invocador 🔥";
  
      quizContainer.innerHTML = `
        <div class="text-center bg-black bg-opacity-60 p-6 rounded">
          <h3 class="text-3xl font-bold text-green-400 mb-4">¡Has terminado tu peregrinaje!</h3>
          <p class="text-xl">Puntos obtenidos: <span class="font-bold">${score}</span> de ${questions.length}</p>
          <p class="text-lg mt-2 text-yellow-300">Nivel de fan: <strong>${fanLevel}</strong></p>
          <button onclick="restartQuiz()" class="mt-6 px-6 py-3 bg-yellow-300 text-gray-900 font-semibold rounded hover:bg-yellow-400 transition">
            Volver a intentarlo
          </button>
        </div>
      `;
    }
  
    // Reiniciar el quiz desde la primera pregunta
    window.restartQuiz = function() {
      currentQuestion = 0;
      score = 0;
      showQuestion();
    }
  
    // Iniciar el quiz al cargar la página
    showQuestion();
  });