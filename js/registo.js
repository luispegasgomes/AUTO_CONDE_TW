let mail = document.getElementById(mail)
let cmail = document.getElementById(cmail)
let pw = document.getElementById('pw')
let cpw = document.getElementById('cpw')
function registo(){
    if (pw != cpw){
        window.alert('As passwords inseridas não coincidem :(') 
    }else if (mail != cmail){
        window.alert('O mail inserido não coincide :(')
    }else{
        window.alert('Registo de utilizador efetuado com sucesso!')       
    }       
}