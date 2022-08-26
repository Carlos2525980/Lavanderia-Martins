
function Enviar() {

    var nome = document.getElementById("nome")
    var sobrenome = document.getElementById("sobrenome")
    var endereco = document.getElementById("endereco")
    var complemento = document.getElementById("complemento")
    var bairro = document.getElementById("bairro")

    var n = String(nome.value)
    var s = String(sobrenome.value)
    var e = String(endereco.value)
    var c = String(complemento.value)
    var b = String(bairro.value)

    if (n == "" || s == "" || e == "" || c == "" || b == "") {

        alert("Campos obrigatótios não preenchidos!")

    } else {

        alert("Enviado!!!")
    }
}