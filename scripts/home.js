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

    const htmlQuiz = JSON.parse(localStorage.getItem("quizzyQuizHTML"));
    const jsQuiz = JSON.parse(localStorage.getItem("quizzyQuizJS"));
    const sqlQuiz = JSON.parse(localStorage.getItem("quizzyQuizSQL"));
    const phpQuiz = JSON.parse(localStorage.getItem("quizzyQuizPHP"));
});
