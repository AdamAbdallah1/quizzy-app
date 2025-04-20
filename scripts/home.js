document.addEventListener("DOMContentLoaded", () => {
    const headerUserName = document.getElementById("header-user-name");
    const welcomeUserName = document.getElementById("welcome-user-name");

    const currentUserData = localStorage.getItem("currentUser");

    if (currentUserData) {
        const currentUser = JSON.parse(currentUserData);
        headerUserName.textContent = currentUser.regUsername || "User";
        welcomeUserName.textContent = currentUser.regUsername || "User";
    } else {
        headerUserName.textContent = "Guest";
        welcomeUserName.textContent = "Guest";
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const quizList = document.getElementById("quiz-list");
    const quizzes = JSON.parse(localStorage.getItem("quizzyQuizzes")) || [];

    quizList.innerHTML = ""; 

    quizzes.forEach((quiz) => {
        const card = document.createElement("div");
        card.classList.add("quiz-card");

        card.innerHTML = `
            <h3 class="quiz-title">${quiz.category}</h3>
            <p class="quiz-desc">${quiz.description}</p>
            <button class="quiz-button" data-category="${quiz.category}">Take Quiz</button>
        `;

        quizList.appendChild(card);
    });

    quizList.addEventListener("click", (e) => {
        if (e.target.classList.contains("quiz-button")) {
            const category = e.target.getAttribute("data-category");
            localStorage.setItem("selectedQuizCategory", category);
            window.location.href = "../pages/quiz.html";
        }
    });
});
