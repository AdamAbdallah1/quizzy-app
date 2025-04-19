document.addEventListener("DOMContentLoaded", () => {
    const regBtn = document.getElementById("register-button");
    const errorMessage = document.getElementById("error-message");

    regBtn.addEventListener("click", () => {
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        errorMessage.textContent = "";
        errorMessage.style.color = "#6b0000";

        if (!username || !email || !password) {
            errorMessage.textContent = "All fields are required. Please fill them all.";
            return;
        }

        const regUser = {
            regUsername: username,
            regEmail: email,
            regPassword: password
        };

        localStorage.setItem("quizzyUser", JSON.stringify(regUser));

        errorMessage.style.color = "#014301";
        errorMessage.textContent = "User registered successfully!";
    });
});
