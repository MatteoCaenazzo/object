var oggetti = [];
var n = 0;
url = "pag2.html";

function add(){
    var nome = document.getElementById("nome").value;
    var cognome = document.getElementById("cognome").value;
    var classe = document.getElementById("classe").value;
    oggetti[n] = {name:nome, surname:cognome, class:classe};
    n++;
}

function change(){
    localStorage.setItem("oggetti", JSON.stringify(oggetti));
    location.href = url;
}