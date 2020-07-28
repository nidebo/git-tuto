const button = document.getElementById("button");

button.addEventListener("click", () => {
    const user = document.getElementById("user").value;
    const password = document.getElementById("password").value;
    console.log("User: "+user);
    console.log("Password: "+password);
})

const buttonchecked = document.getElementById("superUser");

buttonchecked.addEventListener("click", () => {
    console.log("Tienes permisos de super USUARIO")
})