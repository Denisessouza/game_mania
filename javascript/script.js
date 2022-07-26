function MostrarMenu(){
    let menu_01 = document.getElementById ("menu")
    if (getComputedStyle(menu).display =='none'){ 
                menu_01.style.display='flex';
        
    }    else {
        menu_01.style.display="none";
    }  
    
}