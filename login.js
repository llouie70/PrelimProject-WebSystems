const loginForm = document.getElementById("login");
const loginButton = document.getElementById("submit");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "RegularUser" && password === "RegularUser123") {
        alert("You have successfully logged in as RegularUser.");
        location="welcomepage.html";
    } else if (username === "ShinyUser" && password === "ShinyUser123") {
        alert("You have successfully logged in as ShinyUser.");
        location="welcomepage_shiny.html";
    } else {
        alert("Invalid username and/or password.");
    }
})