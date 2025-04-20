document.addEventListener("DOMContentLoaded", () => {
    const logBtn = document.getElementById("login-button");
    const errorMessage = document.getElementById("error-message");

    const adminUser = {
        adminEmail: "admin@quizzy.com",
        adminPassword: "Admin123"
    };

    forgetB = document.getElementById("forgetB");
    forgetB.addEventListener("click", () => {
        window.location.href = "../pages/passwordReset.html"
    })

    logBtn.addEventListener("click", () => {
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        errorMessage.textContent = "";
        errorMessage.style.color = "#6b0000";

        if (!email || !email) {
            errorMessage.textContent = "All fields are required. Please fill them all.";
            return;
        }

        let logUser = {
            logEmail: email,
            logPassword: password
        };

        const storedUsers = JSON.parse(localStorage.getItem("quizzyUsers")) || [];

        if (
            logUser.logEmail === adminUser.adminEmail &&
            logUser.logPassword === adminUser.adminPassword
        ) {
            errorMessage.style.color = "green";
            errorMessage.textContent = "Welcome Admin!";
            localStorage.setItem("adminUser", JSON.stringify(adminUser));
            window.location.href = "../pages/dashboard.html";
            return;
        }

        const matchedUser = storedUsers.find(user =>
            user.regEmail === logUser.logEmail &&
            user.regPassword === logUser.logPassword
        );

        if (matchedUser) {
            errorMessage.style.color = "green";
            errorMessage.textContent = `Welcome Back ${matchedUser.regUsername}`;
            localStorage.setItem("currentUser", JSON.stringify(matchedUser));
            window.location.href = "../pages/home.html";
        } else {
            errorMessage.textContent = "Invalid email or password!";
        }
    });
});
