function message() {
    alert("Ninja was liked!")
}

function login(element) {
    // console.log("Login Button Works", element);
    if (element.innerText == "Login") {
        element.innerText = "Logout";
    } else {
        element.innerText = "Login"
    }
}

function hide(element) {
    element.remove();
}