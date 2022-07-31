$ (document).ready(function(){

    let slideAtual = 1;
    let listaSlides = ["banner_principal", "banner_corredor", "banner_mago"]

    setInterval(mudarSlides, 3000)


        function mudarSlides(){

            console.log("Slide Atual", slideAtual)

            //Remove o Slide anterior
            if(slideAtual > 0){
                $("#carrossel").removeClass(listaSlides[slideAtual - 1])
                
            } else if (slideAtual == 0){
                $("#carrossel").removeClass(listaSlides[(listaSlides.length) - 1])
            }
            //Adiciona o Slide Atual 
            $("#carrossel").addClass(listaSlides[slideAtual]);
            
            // Indica o Slide atual.
            slideAtual++
            // aqui está percorrendo a lista com o lenght e resetando quando encontra o zero    
            if(slideAtual > (listaSlides.length - 1)) {
                slideAtual = 0;
            }
        }

        $("#barras").click(function(){

            $("#menu_01").toggleClass("menu_01-ativo");


          

            // if($("#menu_01").hasClass("menu_01-ativo")) {
            //     $("#menu_01").removeClass("menu_01-ativo")
            // } else {
            //     $("#menu_01").addClass("menu_01-ativo")
            // }
        })
})






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
    
    alert(email + " \nCadastrado com Sucesso♥ ")
}