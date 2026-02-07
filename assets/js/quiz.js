// Quiz functionality
(function() {
  window.checkAnswer = function(questionId, selectedOption) {
    const options = document.querySelectorAll(`.question[data-question="${questionId}"] .option`);
    const correctAnswer = document.querySelector(`.question[data-question="${questionId}"]`).dataset.correct;

    options.forEach(option => {
      option.classList.remove('selected');
      if (option.dataset.option === correctAnswer) {
        option.classList.add('correct');
      } else if (option.dataset.option === selectedOption) {
        option.classList.add('incorrect');
      }
    });
  };

  window.calculateScore = function() {
    const questions = document.querySelectorAll('.question');
    let correct = 0;
    let answered = 0;

    questions.forEach(question => {
      const selected = question.querySelector('.option.selected') || question.querySelector('.option.correct') || question.querySelector('.option.incorrect');
      if (selected) {
        answered++;
        const questionId = question.dataset.question;
        const correctAnswer = question.dataset.correct;
        if (selected.dataset.option === correctAnswer) {
          correct++;
        }
      }
    });

    const scoreDisplay = document.getElementById('quiz-score');
    const answeredDisplay = document.getElementById('quiz-answered');

    if (scoreDisplay) {
      scoreDisplay.textContent = `${correct}/${questions.length} (${Math.round((correct / questions.length) * 100)}%)`;
    }
    if (answeredDisplay) {
      answeredDisplay.textContent = `Answered: ${answered}/${questions.length}`;
    }
  };

  window.resetQuiz = function() {
    const options = document.querySelectorAll('.option');
    options.forEach(option => {
      option.classList.remove('selected', 'correct', 'incorrect');
    });

    const scoreDisplay = document.getElementById('quiz-score');
    const answeredDisplay = document.getElementById('quiz-answered');

    if (scoreDisplay) {
      scoreDisplay.textContent = '0/0 (0%)';
    }
    if (answeredDisplay) {
      answeredDisplay.textContent = 'Answered: 0/0';
    }
  };

  // Option click handler
  document.querySelectorAll('.option').forEach(option => {
    option.addEventListener('click', function() {
      const question = this.closest('.question');
      const questionId = question.dataset.question;
      const optionValue = this.dataset.option;

      // Remove other selections for this question
      question.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('selected', 'correct', 'incorrect');
      });

      // Mark as selected
      this.classList.add('selected');
    });
  });
})();
