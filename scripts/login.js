document.addEventListener("DOMContentLoaded", () => {
    const logBtn = document.getElementById("login-button");
    const forgetB = document.getElementById("forgetB");

    if (logBtn) logBtn.addEventListener("click", handleLogin);
    if (forgetB) forgetB.addEventListener("click", redirectToReset);
});

const adminUser = {
    adminEmail: "admin@quizzy.com",
    adminPassword: "Admin123"
};

function handleLogin() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    clearMessage();

    if (!validateFields(email, password)) {
        showError("All fields are required. Please fill them all.");
        return;
    }

    if (isAdmin(email, password)) {
        loginAdmin();
        return;
    }

    const storedUsers = getStoredUsers();
    const matchedUser = storedUsers.find(user =>
        user.regEmail === email && user.regPassword === password
    );

    if (matchedUser) {
        loginUser(matchedUser);
    } else {
        showError("Invalid email or password!");
    }
}

function redirectToReset() {
    window.location.href = "../pages/passwordReset.html";
}

function clearMessage() {
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

function validateFields(email, password) {
    return email && password;
}

function isAdmin(email, password) {
    return email === adminUser.adminEmail && password === adminUser.adminPassword;
}

function loginAdmin() {
    showSuccess("Welcome Admin!");
    localStorage.setItem("adminUser", JSON.stringify(adminUser));
    setTimeout(() => {
        window.location.href = "../pages/dashboard.html";
    }, 1000);
}

function getStoredUsers() {
    return JSON.parse(localStorage.getItem("quizzyUsers")) || [];
}

function loginUser(user) {
    showSuccess(`Welcome Back ${user.regUsername}`);
    localStorage.setItem("currentUser", JSON.stringify(user));
    setTimeout(() => {
        window.location.href = "../pages/home.html";
    }, 1000);
}
