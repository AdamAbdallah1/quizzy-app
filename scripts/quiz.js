document.addEventListener("DOMContentLoaded", () => {
    const quizzes = JSON.parse(localStorage.getItem("quizzyQuizzes"));
    const quizSection = document.getElementById("quiz-section");
    const quizTitle = document.getElementById("quiz-section-title");

    if (quizzes) {
        quizzes.forEach((quiz) => {
            // Display the category title
            const categoryTitle = document.createElement("h2");
            categoryTitle.textContent = quiz.category;
            quizSection.appendChild(categoryTitle);

            // Display description of the quiz
            const description = document.createElement("p");
            description.textContent = quiz.description;
            quizSection.appendChild(description);

            // Create and display the questions for this category
            quiz.questions.forEach((q, index) => {
                const questionBlock = document.createElement("div");
                questionBlock.classList.add("question-block");

                // Display question
                const questionEl = document.createElement("h3");
                questionEl.textContent = `${index + 1}. ${q.question}`;
                questionBlock.appendChild(questionEl);

                // Display options
                const optionsContainer = document.createElement("div");
                optionsContainer.classList.add("options");

                q.options.forEach((option) => {
                    const optionLabel = document.createElement("label");
                    optionLabel.innerHTML = `
                        <input type="radio" name="question-${index}" value="${option}">
                        ${option}
                    `;
                    optionsContainer.appendChild(optionLabel);
                });

                questionBlock.appendChild(optionsContainer);

                // Display points
                const pointsEl = document.createElement("p");
                pointsEl.textContent = `${q.points} points`;
                questionBlock.appendChild(pointsEl);

                // Done button for checking answers
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
    }
});

const homeBtn = document.getElementById("home-button");
if (homeBtn) {
    homeBtn.addEventListener("click", () => {
        window.location.href = "../pages/home.html";
    });
}
