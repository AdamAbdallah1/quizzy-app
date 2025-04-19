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

    const quizList = document.getElementById("quiz-list");
    const quizzes = JSON.parse(localStorage.getItem("quizzyQuizzes")) || [];

    
});
