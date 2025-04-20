document.addEventListener("DOMContentLoaded", () => {
    const curCategory = localStorage.getItem("selectedQuizCategory");
    //console.log(curCategory);
})




const homeBtn = document.getElementById("home-button");
if (homeBtn) {
    homeBtn.addEventListener("click", () => {
        window.location.href = "../pages/home.html";
    });
}
