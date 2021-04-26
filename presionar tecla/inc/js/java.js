function mostrar(){

    //esto no me acuerdo que hace pero se ve lindo xd
    const log = document.getElementById("log");

    document.addEventListener("keypress", logKey);

    function logKey(e){
        log.textContent += ` ${e.key}`;
        

        //lo de abajo cambia el color presionando la tecla "a"
        if(e.key=="a"){
            let element = document.querySelector("h1")
            element.style.color="blue";
        }
    }
}
