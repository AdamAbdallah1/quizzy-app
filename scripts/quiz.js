document.addEventListener("DOMContentLoaded", () => {
    const curCategory = localStorage.getItem("selectedQuizCategory");

    if(curCategory) {
        const quizTitle = document.getElementById("quiz-section-title");
        quizTitle.textContent = `${curCategory}`;
    }

})