
function mostrarMenu() {
    let menu_01 = document.getElementById ("menu_01")

    if (getComputedStyle(menu_01).display == 'none') {
        menu_01.style.display = 'flex';
    }    
     else {
        menu_01.style.display = 'none';
    }

}

function cadastrarNewsletter(){
    let email = document.getElementById("email").value;
    
    alert(email + " \nCadastrado com Sucesso ")
}