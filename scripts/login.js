function logar() {
    let email = document.getElementById('email')
    let senha = document.getElementById('senha')


    if (email.value == "primeiro@usuario.com" && senha.value == "usuario1") {
        localStorage.setItem('usuario_logado', 1)
        alert("Login realizado com sucesso!")
        location.href = "./hub.html"
    } else {
        alert("E-mail ou senha inválidos!")
    }
}