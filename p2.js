function creapagina(){
    var oggetti = JSON.parse(localStorage.getItem("oggetti"));
    for (var i = 0; i < oggetti.length; i++){
        console.log(oggetti[i]);
        var tabella = document.getElementById("tabella");
        var riga = document.createElement("tr");
        var ele_nome = document.createElement("th");
        ele_nome.innerHTML=oggetti[i].name;
        var ele_cognome = document.createElement("th");
        ele_cognome.innerHTML=oggetti[i].surname;
        var ele_classe = document.createElement("th");
        ele_classe.innerHTML=oggetti[i].class;
        riga.appendChild(ele_nome);
        riga.appendChild(ele_cognome);
        riga.appendChild(ele_classe);
        tabella.appendChild(riga);
    }
}