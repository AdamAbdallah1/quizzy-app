document.addEventListener("DOMContentLoaded", () => {
    const curCategory = localStorage.getItem("selectedQuizCategory");
    //console.log("Selected Category:", curCategory);
    const quizzes = JSON.parse(localStorage.getItem("quizzyQuizzes"));

    const quizTitle = document.getElementById("quiz-section-title");
    const quizSection = document.getElementById("quiz-section");

    if (curCategory && quizzes && quizzes[curCategory]) {
        quizTitle.textContent = curCategory;
        const questions = quizzes[curCategory];

        questions.forEach((q, index) => {
            const questionBlock = document.createElement("div");
            questionBlock.classList.add("question-block");

            const questionEl = document.createElement("h3");
            questionEl.textContent = `${index + 1}. ${q.question}`;
            questionBlock.appendChild(questionEl);

            
        })
    }
    
});

const homeBtn = document.getElementById("home-button");
if (homeBtn) {
    homeBtn.addEventListener("click", () => {
        window.location.href = "../pages/home.html";
    });
}
