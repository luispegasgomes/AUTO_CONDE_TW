function pagamento(){
    let radios = document.getElementsByName("rbtn");
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            let rbtn_mb = (radios[i].value);
            if (rbtn_mb == 'on'){
                window.location = "pagamento2.html";
                return true;
            }
        } else {
            alert('Escolha o método de pagamento!');
        }
    }
};
function dados_pagamento(){
    let entidade = 10487
    let referencia = 145896325
    let montante1 = document.getElementById('prc1')
    let montante = '69.98 €' 
    document.getElementById('entidade').innerHTML = entidade
    document.getElementById('referencia').innerHTML = referencia
    document.getElementById('montante').innerHTML = montante
}

let utilizadores = [
    {"login": "luisgomes", "senha": "gomes"},
    {"login": "fabiofernandes", "senha": "fernandes"},
    {"login": "joaosantos", "senha": "santos"},
];

function login() {
    let utilizador = document.getElementsByName('username')[0].value.toLowerCase();
    let senha = document.getElementsByName('pw')[0].value;

    for (let u in utilizadores) {
        let us = utilizadores[u];
        if (us.login === utilizador && us.senha === senha) {
            alert('Início de sessão efetuado com sucesso!')
            window.location = "autoconde.html";
            return true;        
        }
    }
    alert("Dados incorretos, tente novamente.");
    return false;
}