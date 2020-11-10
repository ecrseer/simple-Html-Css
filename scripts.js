let isWhite = false;

function changeTheme(){
    
    isWhite ? document.querySelector("body").style.backgroundColor='#010101' :
    document.querySelector("body").style.backgroundColor='#fff';

    isWhite= !isWhite;

}