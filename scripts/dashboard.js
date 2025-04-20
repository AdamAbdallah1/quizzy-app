document.addEventListener("DOMContentLoaded", () => {
    const users = JSON.parse(localStorage.getItem("quizzyUsers")) || [];
    const userContainer = document.querySelector(".user-container");

    users.forEach(user => {
        const userElement = document.createElement("p");
        userElement.textContent = `Username: ${user.regUsername}, Score: ${user.score || 0}`;
        userElement.classList.add("user-item");
        userContainer.appendChild(userElement);
    });
});

const clearUsers = document.getElementById("clear-users");
clearUsers.addEventListener("click", () => {
    const users = JSON.parse(localStorage.getItem("quizzyUsers")) || [];

    const filteredUsers = users.filter(user => user.regUsername === "admin");

    localStorage.setItem("quizzyUsers", JSON.stringify(filteredUsers));
    window.location.reload();
})