//Desafio do Amigo Secreto da One com Alura por Maria Eduarda Campos
//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaDeAmigos = [];

function limparCampo(){
    nome = document.querySelector('input');
    nome.value = " ";
}

function adicionarAmigos(){
    let nome = document.querySelector('input').value;
    if(nome==""||nome==" "){
        alert("Por favor, insira um nome.");
    }else{
        listaDeAmigos.push(nome);  
        
    }
    limparCampo();
    atualizarAmigos();
}

function atualizarAmigos(){
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ""; 
    for (let i = 0; i < listaDeAmigos.length; i++) {
        let novoLi = document.createElement("li");
        novoLi.textContent = listaDeAmigos[i];
        listaAmigos.appendChild(novoLi);
    }
}

function sortearAmigos(){
    if(listaDeAmigos.length>0){
        let numero = Math.floor(Math.random() * (listaDeAmigos.length - 0 + 1)) + 0;
        let nomeSorteado = listaDeAmigos[numero];
        let nome = document.getElementById('resultado');
        nome.innerHTML = nomeSorteado; 
    }else{
        alert("Por favor, insira um nome.")
    }
}