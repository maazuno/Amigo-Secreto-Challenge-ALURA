let amigos = [];

function adicionarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nomeAmigo = inputAmigo.value.trim();

    if (!nomeAmigo) {
        alert("Por favor, insira um nome.");
    } else if (amigos.includes(nomeAmigo)) {
        alert(`O nome ${nomeAmigo} já está na lista.`)
    } else {
        amigos.push(nomeAmigo);
        inputAmigo.value = "";
    }

}


