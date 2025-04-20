document.addEventListener("DOMContentLoaded", () => {
    const curCategory = localStorage.getItem("selectedQuizCategory");
    //console.log("Selected Category:", curCategory);
    const quizzes = JSON.parse(localStorage.getItem("quizzyQuizzes"));

    const quizTitle = document.getElementById("quiz-section-title");
    const quizSection = document.getElementById("quiz-section");

    
    
});

const homeBtn = document.getElementById("home-button");
if (homeBtn) {
    homeBtn.addEventListener("click", () => {
        window.location.href = "../pages/home.html";
    });
}
