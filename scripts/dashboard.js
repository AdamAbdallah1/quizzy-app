document.addEventListener("DOMContentLoaded", () => {
    const users = JSON.parse(localStorage.getItem("quizzyUsers")) || [];
    const userContainer = document.querySelector(".user-container");

    users.forEach(user => {
        const userCard = document.createElement("div");
        userCard.classList.add("user-item");

        userCard.innerHTML = `
            <p><strong>Username:</strong> ${user.regUsername} </p> 
            <p><strong>Score:</strong> ${user.score || 0}</p>
            <button class="delete-user">Delete</button>
        `;

        userContainer.appendChild(userCard);
    });

    userContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("delete-user")) {
            const userEmail = e.target.closest(".user-item").querySelector("p").textContent;

            const updatedUsers = users.filter(user => user.regUsername !== userEmail);
            localStorage.setItem("quizzyUsers", JSON.stringify(updatedUsers));

            e.target.closest(".user-item").remove();
        }
    });

    const clearUsers = document.getElementById("clear-users");
    if (clearUsers) {
        clearUsers.addEventListener("click", () => {
            const filteredUsers = users.filter(user => user.regUsername === "admin");
            localStorage.setItem("quizzyUsers", JSON.stringify(filteredUsers));
            window.location.reload();
        });
    }
});
