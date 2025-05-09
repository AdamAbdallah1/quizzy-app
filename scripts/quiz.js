document.addEventListener("DOMContentLoaded", () => {
    const quizzes = JSON.parse(localStorage.getItem("quizzyQuizzes"));
    const selectedCategory = localStorage.getItem("selectedQuizCategory");
    const quizSection = document.getElementById("quiz-section");
    const quizTitle = document.getElementById("quiz-section-title");

    if (!quizzes || !selectedCategory) return;
    const currentQuiz = quizzes.find(q => q.category === selectedCategory);
    if (!currentQuiz) return;

    quizTitle.textContent = currentQuiz.category;

    const currentUserData = localStorage.getItem("currentUser");
    let currentUser = currentUserData ? JSON.parse(currentUserData) : null;

    if (currentUser && currentUser.completedQuizzes && currentUser.completedQuizzes.includes(selectedCategory)) {
        alert("You have already completed this quiz.");
        window.location.href = "../pages/home.html";
        return; 
    }

    let userScore = 0;
    let questionsAnswered = 0;

    currentQuiz.questions.forEach((q, index) => {
        const questionBlock = document.createElement("div");
        questionBlock.classList.add("question-block");

        const questionEl = document.createElement("h3");
        questionEl.textContent = `${index + 1}. ${q.question}`;
        questionBlock.appendChild(questionEl);

        const optionsContainer = document.createElement("div");
        optionsContainer.classList.add("quiz-options");

        q.options.forEach(option => {
            const escapedOption = option.replace(/</g, "&lt;").replace(/>/g, "&gt;");
            const label = document.createElement("label");
            label.innerHTML = `
                <input type="radio" name="question-${index}" value="${option}">
                ${escapedOption}
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

                if (correct) {
                    const correctText = document.createElement("p");
                    correctText.classList.add("correctText");
                    correctText.textContent = "Correct Answer!";
                    questionBlock.appendChild(correctText);

                    userScore += q.points;

                    const currentUserData = localStorage.getItem("currentUser");
                    if (currentUserData) {
                        currentUser = JSON.parse(currentUserData);
                        currentUser.score = (currentUser.score || 0) + q.points;
                        localStorage.setItem("currentUser", JSON.stringify(currentUser));

                        const allUsers = JSON.parse(localStorage.getItem("quizzyUsers")) || [];
                        const updatedUsers = allUsers.map(user => {
                            if (user.regUsername === currentUser.regUsername) {
                                return { ...user, score: currentUser.score };
                            }
                            return user;
                        });
                        localStorage.setItem("quizzyUsers", JSON.stringify(updatedUsers));
                    }
                } else {
                    const wrongText = document.createElement("p");
                    wrongText.classList.add("correctText");
                    wrongText.textContent = "Incorrect Answer!";
                    questionBlock.appendChild(wrongText);
                }

                doneBtn.disabled = true;

                questionsAnswered++;

                if (questionsAnswered === currentQuiz.questions.length) {
                    if (!currentUser.completedQuizzes) {
                        currentUser.completedQuizzes = [];
                    }
                    currentUser.completedQuizzes.push(selectedCategory);
                    localStorage.setItem('currentUser', JSON.stringify(currentUser));
                
                    const finalScoreBlock = document.createElement("div");
                    finalScoreBlock.classList.add("final-score");
                
                    finalScoreBlock.innerHTML = `
                        <h2>Quiz Completed!</h2>
                        <p>Your final score: <strong>${userScore}</strong> points!</p>
                        <button class="go-home" id="go-home-button">Return to Home</button>
                    `;
                
                    quizSection.appendChild(finalScoreBlock);
                
                    const goHomeBtn = document.getElementById("go-home-button");
                    goHomeBtn.addEventListener("click", () => {
                        window.location.href = "../pages/home.html";
                    });
                }
                

            } else {
                alert("Please select an answer.");
            }
        });

        questionBlock.appendChild(doneBtn);
        quizSection.appendChild(questionBlock);
    });

    const homeBtn = document.getElementById("home-button");
    homeBtn.addEventListener("click", () => {
        window.location.href = "../pages/home.html";
    })
});

