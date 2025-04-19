document.addEventListener("DOMContentLoaded", () => {
    const currentUserData = localStorage.getItem("currentUser");

    if (currentUserData) {
        const currentUser = JSON.parse(currentUserData);
        
        const headerName = document.getElementById("header-user-name");
        const welcomeName = document.getElementById("welcome-user-name");

        if (headerName) headerName.textContent = currentUser.logEmail;
        if (welcomeName) welcomeName.textContent = currentUser.logUsername;

        console.log(currentUser);
    }
});
