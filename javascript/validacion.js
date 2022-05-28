var errorNombre = document.getElementById('errorName');
var errorEmail = document.getElementById('errorMail');
var errorMensaje = document.getElementById('errorMsg');
var errorEnviar = document.getElementById('errorSend');

function validateName(){
    var name = document.getElementById('names').value;
    
    if(name.length == 0){
        errorNombre.innerHTML = 'Complete su nombre';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        errorNombre.innerHTML = 'Complete su nombre';
        return false;
    }
    errorNombre.innerHTML = '<i class="fa-solid fa-user-check"></i>';
    return true;
}

function validateMail(){
    var mail = document.getElementById('mail').value;

    if(mail.lenght == 0){
        errorEmail.innerHTML = 'Complete su E-mail';
        return false;
    }
    if(!mail.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        errorEmail.innerHTML = 'Coloque un E-mail válido';
        return false;
    }
    errorEmail.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;

}
function validateMessage(){
    var mensaje = document.getElementById ('mensaje').value;
    var requerido = 10;
    var left = requerido  - mensaje.length;

    if(left>0){
        errorMensaje.innerHTML = 'se requieren '+ left + ' caracteres más';
        return false;
    }
    errorMensaje.innerHTML =  '<i class="fa-solid fa-square-check"></i>'
    return true;
}

function validateForm(){
    if(!validateName()|| !validateMail()|| !validateMessage()){
        errorEnviar.style.display = 'block';
        errorEnviar.innerHTML = 'Complete todos los campos';
        setTimeout(function(){errorEnviar.style.display = 'none';}, 3000);
        return false;
    }
    errorEnviar.innerHTML='';
    return true;
}
