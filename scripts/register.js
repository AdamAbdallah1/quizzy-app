document.addEventListener("DOMContentLoaded", () => {
    const regBtn = document.getElementById("register-button");
    const errorMessage = document.getElementById("error-message");

    regBtn.addEventListener("click", handleRegister);
});

function handleRegister() {
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMessage = document.getElementById("error-message");

    clearError();

    if (!validateFields(username, email, password)) {
        showError("All fields are required.");
        return;
    }

    if (!validateLength(username, 5)) {
        showError("Username can't be less than 5 Characters!");
        return;
    }

    if (!validateLength(password, 5)) {
        showError("Password can't be less than 5 Characters!");
        return;
    }

    const storedUsers = getStoredUsers();
    
    if (isUsernameTaken(storedUsers, username)) {
        showError("Username already registered!");
        return;
    }

    if (isEmailTaken(storedUsers, email)) {
        showError("Email already registered!");
        return;
    }

    const newUser = {
        regUsername: username,
        regEmail: email,
        regPassword: password
    };

    storedUsers.push(newUser);
    saveUsers(storedUsers);

    showSuccess("User registered successfully!");

    setTimeout(() => {
        window.location.href = "pages/login.html";
    }, 1000);
}

// Helper functions:

function clearError() {
    const errorMessage = document.getElementById("error-message");
    errorMessage.textContent = "";
    errorMessage.style.color = "#6b0000";
}

function showError(message) {
    const errorMessage = document.getElementById("error-message");
    errorMessage.textContent = message;
}

function showSuccess(message) {
    const errorMessage = document.getElementById("error-message");
    errorMessage.style.color = "green";
    errorMessage.textContent = message;
}

function validateFields(username, email, password) {
    return username && email && password;
}

function validateLength(value, minLength) {
    return value.length >= minLength;
}

function getStoredUsers() {
    return JSON.parse(localStorage.getItem("quizzyUsers")) || [];
}

function saveUsers(users) {
    localStorage.setItem("quizzyUsers", JSON.stringify(users));
    console.log("Updated Stored Users in LocalStorage:", users);
}

function isUsernameTaken(users, username) {
    return users.some(user => user.regUsername === username);
}

function isEmailTaken(users, email) {
    return users.some(user => user.regEmail === email);
}
