function reproducirIngresar(){
    var sonido = new Audio("clic.mp3");
    sonido.play();
}
      
function siguiente(){
    location.href="destino.html"
}

function sonidoSiguiente(){
    reproducirIngresar();
    siguiente();


}

