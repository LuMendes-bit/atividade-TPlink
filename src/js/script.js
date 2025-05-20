var botaoEntrar = document.getElementById("button-submit")
function login(){
    var campoUsuario = document.getElementById("usuario").value
    var campoSenha = document.getElementById("senha").value
    var campoCodigo = document.getElementById("codigo").value
    if( campoUsuario == "admin" && campoSenha == "1234" && campoCodigo == "tplink2025" ) {
        window.location.replace("painel.html")
    } else{
        alert("Credenciais inválidas. Tente novamente.")
    }
}
botaoEntrar.addEventListener("click",login)