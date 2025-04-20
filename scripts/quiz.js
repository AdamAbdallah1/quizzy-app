document.addEventListener("DOMContentLoaded", () => {
    const curCategory = localStorage.getItem("selectedQuizCategory");
    //console.log(curCategory);
    const quizzes = JSON.parse(localStorage.getItem("quizzyQuizzes"));
    //console.log(quizzes);
})




const homeBtn = document.getElementById("home-button");
if (homeBtn) {
    homeBtn.addEventListener("click", () => {
        window.location.href = "../pages/home.html";
    });
}
