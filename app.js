//Desafio do Amigo Secreto da One com Alura por Maria Eduarda Campos
//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

//Lista que armazena o valores dados pelo usuário
let listaDeAmigos = [];

//Função que limpa o campo de entrada
function limparCampo(){
    nome = document.querySelector('input'); //Seleciona a entrada
    nome.value = " "; //Substitui por uma String vazia
}

//Função que adiciona amigos a lista criada anteriormente
function adicionarAmigos(){
    //Seleciona a entrada dentro da variável 'nome'
    let nome = document.querySelector('input').value; 
    //Verifica se a entrada está vazia
    if(nome==""||nome==" "){
        alert("Por favor, insira um nome."); //Cria um alerta
    }else{
        listaDeAmigos.push(nome); //Adiciona o valor de entrada na lista 
        
    }
    limparCampo(); //Limpa o campo
    atualizarAmigos(); //Atualiza a indicação de nomes já adicionados
}

//Função que atualiza a lista de amigos mostrada na tela
function atualizarAmigos(){
    //Seleciona o <ul> 'listaAmigos' dentro da variável 'listaAmigos'
    let listaAmigos = document.getElementById('listaAmigos'); 
    listaAmigos.innerHTML = ""; //Limpa a lista antes de adicionar novos elementos
    
    //Pecorre a lista de amigos dada pelo usuário
    for (let i = 0; i < listaDeAmigos.length; i++) {
        let novoLi = document.createElement("li"); //Cria um novo elemento <li> na <ul>
        novoLi.textContent = listaDeAmigos[i]; //Adiciona o elemento como texto do <li>
        listaAmigos.appendChild(novoLi); //Adiciona o elemento da lista dada como o elemento <li>
    }
}

//Função que sorteia um amigo aleatório
function sortearAmigos(){
    if(listaDeAmigos.length>0){ //Verifica se a lista não está vazia
        //Gera um número inteiro aleatório entre 0 e o tamanho da lista de amigos menos 1
        //Esse número será o indice da lista
        let numero = Math.floor(Math.random() * ((listaDeAmigos.length-1) - 0 + 1)); 
        //Adiciona em 'nomeSorteado' o amigo referente ao indice gerado aleatoriamente
        let nomeSorteado = listaDeAmigos[numero];
        //Seleciona o <ul> 'resultado' na variável 'nome'
        let nome = document.getElementById('resultado');
        //Torna o nome sorteado o 'resultado' do sorteio
        nome.innerHTML = nomeSorteado; 
    }else{
        alert("Por favor, insira os nomes para sortear."); //Cria um Alerta 
    }
}