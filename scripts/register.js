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
            errorMessage.textContent = "All fields are required.";
            return;
        }

        const newUser = {
            regUsername: username,
            regEmail: email,
            regPassword: password
        };

        const storedUsers = JSON.parse(localStorage.getItem("quizzyUsers")) || [];

        const userExists = storedUsers.some(user => user.regEmail === email);
        if (userExists) {
            errorMessage.textContent = "Email already registered!";
            return;
        }

        storedUsers.push(newUser);

        localStorage.setItem("quizzyUsers", JSON.stringify(storedUsers));

        console.log("Updated Stored Users in LocalStorage:", JSON.parse(localStorage.getItem("quizzyUsers")));

        errorMessage.style.color = "green";
        errorMessage.textContent = "User registered successfully!";
        window.location.href = "pages/login.html";
    });
});
