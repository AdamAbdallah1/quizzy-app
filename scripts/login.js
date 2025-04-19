document.addEventListener("DOMContentLoaded", () => {
    const logBtn = document.getElementById("login-button");
    const errorMessage = document.getElementById("error-message");

    const adminUser = {
        adminUsername: "Admin",
        adminPassword: "Admin123"
    };

    logBtn.addEventListener("click", () => {
        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        errorMessage.textContent = "";
        errorMessage.style.color = "#6b0000";

        if (!username || !password) {
            errorMessage.textContent = "All fields are required. Please fill them all.";
            return;
        }

        const logUser = {
            logUsername: username,
            logPassword: password
        };

        const regUserData = localStorage.getItem("quizzyUser");

        if (regUserData) {
            const regUser = JSON.parse(regUserData);

            if (
                logUser.logUsername === adminUser.adminUsername &&
                logUser.logPassword === adminUser.adminPassword
            ) {
                errorMessage.style.color = "green";
                errorMessage.textContent = "Welcome Admin!";
            } else if (
                logUser.logUsername === regUser.regUser &&
                logUser.logPassword === regUser.regPassword
            ) {
                errorMessage.style.color = "green";
                errorMessage.textContent = `Welcome Back ${username}`;
            } else {
                errorMessage.textContent = "Invalid username or password!";
            }
        } else {
            errorMessage.textContent = "No registered user found";
        }
    });
});
