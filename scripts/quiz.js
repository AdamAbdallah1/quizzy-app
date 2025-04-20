document.addEventListener("DOMContentLoaded", () => {
    const quizzes = JSON.parse(localStorage.getItem("quizzyQuizzes")) || [];
    const selectedCategory = localStorage.getItem("selectedQuizCategory");

    const quizSection = document.getElementById("quiz-section");
    const quizTitle = document.getElementById("quiz-section-title");

    if (!selectedCategory || quizzes.length === 0) {
        quizTitle.textContent = "No quiz data found!";
        return;
    }

    const currentQuiz = quizzes.find(quiz => quiz.category === selectedCategory);

    if (!currentQuiz) {
        quizTitle.textContent = "Selected category not found!";
        return;
    }

    quizTitle.textContent = currentQuiz.category;

    currentQuiz.questions.forEach((q, index) => {
        const questionBlock = document.createElement("div");
        questionBlock.classList.add("question-block");

        const questionEl = document.createElement("h3");
        questionEl.textContent = `${index + 1}. ${q.question}`;
        questionBlock.appendChild(questionEl);

        const optionsContainer = document.createElement("div");
        optionsContainer.classList.add("quiz-options");

        q.options.forEach(option => {
            const label = document.createElement("label");
            label.innerHTML = `
                <input type="radio" name="question-${index}" value="${option}">
                ${option}
            `;
            optionsContainer.appendChild(label);
        });

        questionBlock.appendChild(optionsContainer);

        const pointsEl = document.createElement("p");
        pointsEl.textContent = `${q.points} points`;
        questionBlock.appendChild(pointsEl);

        const doneBtn = document.createElement("button");
        doneBtn.textContent = "Done";
        doneBtn.addEventListener("click", () => {
            const selected = questionBlock.querySelector(`input[name="question-${index}"]:checked`);
            if (selected) {
                const userAnswer = selected.value;
                const correct = userAnswer === q.answer;
                alert(correct ? "Correct!" : "Wrong!");
                doneBtn.disabled = true;
            } else {
                alert("Please select an answer.");
            }
        });

        questionBlock.appendChild(doneBtn);
        quizSection.appendChild(questionBlock);
    });
});

// Home button redirect
const homeBtn = document.getElementById("home-button");
if (homeBtn) {
    homeBtn.addEventListener("click", () => {
        window.location.href = "../pages/home.html";
    });
}
