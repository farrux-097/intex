let elForm = document.querySelector(".login-form")
let elModalCheck = document.querySelector(".modal-check")


elForm.addEventListener("submit" , (e) => {
    e.preventDefault()
    let obj = {
        username:e.target.username.value,
        password:e.target.password.value
    }
    if(obj.username =="farrux" && obj.password == "123"){
        elModalCheck.classList.add("!right-10")
        window.localStorage.setItem("userdata" , JSON.stringify(obj))
        setTimeout(() => {
                location.pathname = "admin.html"
                e.target.reset()
        },2000)
    }
    else{
        alert("What is wrong (login or password)")
        e.target.reset()
    }
})