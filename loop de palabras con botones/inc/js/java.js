
function mostrar(){

    const log = document.getElementById("log");

    document.addEventListener("keypress", logKey);

    function logKey(e){
        log.textContent += ` ${e.key}`;
        
        if(e.key=="a"){
            let frasesran;
            frasesran = ["preso politico","crisis nuclear cubana","guerra del salitre","guerra astro hungara"
            ,"generacion de cristal","germinacion del poroto","saumerio de dientes","hocico del holocausto"
            ,"beca indigena","contingencia nacional"];
            var aleatorio = Math.round(Math.random()*10);
            console.log(frasesran[aleatorio]); 
        }
    }
}
