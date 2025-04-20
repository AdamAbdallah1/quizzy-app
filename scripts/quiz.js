document.addEventListener("DOMContentLoaded", () => {
    const curCategory = localStorage.getItem("selectedQuizCategory");

    if(curCategory) {
        const quizTitle = document.getElementById("quiz-section-title");
        quizTitle.textContent = `${curCategory}`;
    }

})

const homeBtn = document.getElementById("home-button");
homeBtn.addEventListener("click", () => {
    window.location.href ="../pages/home.html";
})