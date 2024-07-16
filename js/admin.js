let elUsrname = document.querySelector(".user-name")

let userData = JSON.parse(window.localStorage.getItem("userdata"))

elUsrname.textContent = userData.username