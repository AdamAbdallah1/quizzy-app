document.addEventListener("DOMContentLoaded", () => {
    const logBtn = document.getElementById("login-button");
    const errorMessage = document.getElementById("error-message");

    logBtn.addEventListener("click", () => {
        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        errorMessage.textContent = "";
        errorMessage.style.color = "#6b0000";

        if (!username || !password) {
            errorMessage.textContent = "All fields are required. Please fill them all.";
            return;
        }

        const storedUser = localStorage.getItem("quizzyUser");

        if (storedUser) {
            const regUser = JSON.parse(storedUser);

            if (
                username === regUser.regUsername &&
                password === regUser.regPassword
            ) {
                errorMessage.style.color = "green";
                errorMessage.textContent = "Welcome back!";
            } else {
                errorMessage.textContent = "Invalid username or password.";
            }
        } else {
            errorMessage.textContent = "No registered user found.";
        }
    });
});
