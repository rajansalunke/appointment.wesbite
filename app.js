const activePage = window.location.pathname;
console.log(activePage);
const navLinks = document.querySelectorAll("nav a").forEach((link) => {
  if (link.href.includes(`${activePage}`)) {
    link.classList.add("active");
  }
});
const loginform = document.getElementById("login-form");
loginform.addEventListener("submit", function (event1) {
  event1.preventDefault();
  const username = event1.target.elements.username.value;
  const password = event1.target.elements.password.value;
  if (username === "admin" && password === "admin") {
    window.location.href = "admin.html";
  } else {
    alert("Incorrect username or password.");
  }
});
const form = document.getElementById("form1");
const result = document.getElementById("result");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = event.target.elements.name.value;
  result.innerHTML = `<p>Your name is: ${name}</p>`;
});
document.getElementById("reg-button").addEventListener("click", function () {
  window.open("student_register.html", "_blank");
});
