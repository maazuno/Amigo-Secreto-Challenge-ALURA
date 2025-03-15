let amigos = [];

document.getElementById("amigo").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        adicionarAmigo();
    }
});

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

    atualizarLista();
}

function atualizarLista() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li)
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Não há amigos a serem sorteados.");
        return;
    }

    const amigoArray = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[amigoArray];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Amigo sorteado: ${amigoSorteado}`;
}

function resetSorteio() {
    const resultado = document.getElementById('resultado');
    const listaAmigos = document.getElementById('listaAmigos')

    resultado.innerHTML = "";
    listaAmigos.innerHTML = "";

    amigos = [];
    atualizarLista();
}

