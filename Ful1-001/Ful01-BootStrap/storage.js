// INSERIR
localStorage.setItem("PriNome","Julia");

// RECUPERAR
let nome = localStorage.getItem ("PriNome");
console.log(nome);

// RECUPERAR VALOR INEX
let ulNome = localStorage.getItem("sobrenome");
console.log(ulNome);

// 
if(!ulNome) {
    alert("AULA DO SATANAIS");
}

// REMOVENDO ITENS EXISTENTES
localStorage.removeItem("PriNome");

// VERIFICA TPO DE ARMAZENAMENTOS
localStorage.setItem("a","1"); //DUAS STRINGS
localStorage.setItem("b",2); // UMA STRING E UM NUMEROS
console.log(typeof localStorage.getItem("a"));
console.log(typeof localStorage.getItem ("b"));