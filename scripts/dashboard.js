document.addEventListener("DOMContentLoaded", () => {
    const users = JSON.parse(localStorage.getItem("quizzyUsers")) || [];
    const userContainer = document.querySelector(".user-container");

    users.forEach(user => {
        const userCard = document.createElement("div");
        userCard.classList.add("user-item");

        userCard.innerHTML = `
            <p><strong>Username:</strong> ${user.regUsername} || <strong>Score:</strong> ${user.score || 0}</p>
        `;

        userContainer.appendChild(userCard);
    });
});

const clearUsers = document.getElementById("clear-users");
if (clearUsers) {
    clearUsers.addEventListener("click", () => {
        const users = JSON.parse(localStorage.getItem("quizzyUsers")) || [];
        const filteredUsers = users.filter(user => user.regUsername === "admin");
        localStorage.setItem("quizzyUsers", JSON.stringify(filteredUsers));
        window.location.reload();
    });
}
