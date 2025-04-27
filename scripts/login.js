document.addEventListener("DOMContentLoaded", () => {
    const logBtn = document.getElementById("login-button");
    const errorMessage = document.getElementById("error-message");

    const adminUser = {
        adminEmail: "admin@quizzy.com",
        adminPassword: "Admin123"
    };

    forgetB = document.getElementById("forgetB");
    forgetB.addEventListener("click", () => {
        window.location.href = "../pages/passwordReset.html";
    });

    logBtn.addEventListener("click", () => {
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        errorMessage.textContent = "";
        errorMessage.style.color = "#6b0000";

        if (!email || !password) {
            errorMessage.textContent = "All fields are required. Please fill them all.";
            return;
        }

        const storedUsers = JSON.parse(localStorage.getItem("quizzyUsers")) || [];
        console.log("Stored Users for Login:", storedUsers);

        if (
            email === adminUser.adminEmail &&
            password === adminUser.adminPassword
        ) {
            errorMessage.style.color = "green";
            errorMessage.textContent = "Welcome Admin!";
            localStorage.setItem("adminUser", JSON.stringify(adminUser));
            window.location.href = "../pages/dashboard.html";
            return;
        }

        const matchedUser = storedUsers.find(user =>
            user.regEmail === email && user.regPassword === password
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
