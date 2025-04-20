document.addEventListener("DOMContentLoaded", () => {
    const curCategory = localStorage.getItem("selectedQuizCategory");
    //console.log("Selected Category:", curCategory);

    if(curCategory) {
        const quizTitle = document.getElementById("quiz-section-title");
        if (quizTitle) quizTitle.textContent = curCategory;
    }

    const quizzes = JSON.parse(localStorage.getItem("quizzyQuizzes"));
    //console.log("All Quizzes:", quizzes);

    if (quizzes && curCategory && quizzes[curCategory]) {
        const questions = quizzes[curCategory];
        const firstQuestion = questions[0];

        const questionElement = document.getElementById("quiz-question");
        if (questionElement) questionElement.textContent = firstQuestion.question;
    }
});

const homeBtn = document.getElementById("home-button");
if (homeBtn) {
    homeBtn.addEventListener("click", () => {
        window.location.href = "../pages/home.html";
    });
}
