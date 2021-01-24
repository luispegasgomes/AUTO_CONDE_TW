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