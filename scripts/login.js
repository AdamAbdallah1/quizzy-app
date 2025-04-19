document.addEventListener("DOMContentLoaded", () => {
    const logBtn = document.getElementById("login-button");
    const errorMessage = document.getElementById("error-message");

    const adminUser = {
        adminEmail: "Admin@quizzy.com",
        adminPassword: "Admin123"
    };

    logBtn.addEventListener("click", () => {
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        errorMessage.textContent = "";
        errorMessage.style.color = "#6b0000";

        if (!email || !email) {
            errorMessage.textContent = "All fields are required. Please fill them all.";
            return;
        }

        const logUser = {
            logEmail: email,
            logPassword: password
        };

        const regUserData = localStorage.getItem("quizzyUser");

        if (regUserData) {
            const regUser = JSON.parse(regUserData);

            if (
                logUser.logEmail === adminUser.adminEmail &&
                logUser.logPassword === adminUser.adminPassword
            ) {
                errorMessage.style.color = "green";
                errorMessage.textContent = "Welcome Admin!";
            } else if (
                logUser.logEmail === regUser.regEmail &&
                logUser.logPassword === regUser.regPassword
            ) {
                errorMessage.style.color = "green";
                errorMessage.textContent = `Welcome Back ${regUser.regUsername}`;
            } else {
                errorMessage.textContent = "Invalid email or password!";
            }
        } else {
            errorMessage.textContent = "No registered user found";
        }
    });
});
