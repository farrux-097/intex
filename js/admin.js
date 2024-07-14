let elUsername = document.querySelector(".username ")
const userData = JSON.parse(window.localStorage.getItem("userData"))
elUsername.textContent = userData.username
