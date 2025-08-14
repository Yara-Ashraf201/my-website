document.addEventListener("DOMContentLoaded", () => {
  const quizForm = document.getElementById("quizForm");
  const submitBtn = document.getElementById("submitQuiz");
  const quizResult = document.getElementById("quizResult");

  const year = localStorage.getItem("eduMindYear") || "first";
  const questions = quizData[year] || [];

  // Render quiz questions
  questions.forEach((q, i) => {
    const div = document.createElement("div");
    div.classList.add("quiz-question");

    const questionTitle = document.createElement("h3");
    questionTitle.textContent = `${i + 1}. ${q.question}`;
    div.appendChild(questionTitle);

    const optionsDiv = document.createElement("div");
    optionsDiv.classList.add("quiz-options");

    q.options.forEach((opt, idx) => {
      const label = document.createElement("label");

      const input = document.createElement("input");
      input.type = "radio";
      input.name = `question${i}`;
      input.value = opt.style;

      label.appendChild(input);
      label.appendChild(document.createTextNode(opt.text));
      optionsDiv.appendChild(label);
    });

    div.appendChild(optionsDiv);
    quizForm.appendChild(div);
  });

  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    // Count selected answers by style
    const counts = { visual: 0, auditory: 0, kinesthetic: 0, reading: 0 };

    for (let i = 0; i < questions.length; i++) {
      const selected = document.querySelector(`input[name="question${i}"]:checked`);
      if (selected) {
        counts[selected.value]++;
      }
    }

    // Find style with max count
    let maxCount = 0;
    let favoriteStyle = null;

    for (const style in counts) {
      if (counts[style] > maxCount) {
        maxCount = counts[style];
        favoriteStyle = style;
      }
    }

    if (favoriteStyle) {
      quizResult.textContent = `Your dominant learning style is: ${favoriteStyle.charAt(0).toUpperCase() + favoriteStyle.slice(1)}.`;
      localStorage.setItem("eduMindStyle", favoriteStyle);
    } else {
      quizResult.textContent = "Please answer all questions.";
    }
  });
});
// quiz.js