let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
let email = document.getElementById("email");
let erro = document.querySelector(".erro");


function validandoEmail(e) {

    if (email.value.match(regex) != null) {
        email.style.border = "1px solid hsl(223, 100%, 88%)";
        erro.style.display = "none";
    } else {
        email.style.border = "1px solid hsl(0, 98%, 59%)";
        erro.style.display = "block";
        setTimeout(function() {
            email.style.transition = ".5s";
            email.style.border = "1px solid hsl(223, 100%, 88%)";
            erro.style.display = "none";
        }, 5000)

    }

}