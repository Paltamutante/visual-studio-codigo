
setInterval(function(){
    tiempo = new Date();

    hora =tiempo.getHours();
    min  =tiempo.getMinutes();
    seg = tiempo.getSeconds();

    Pampm = document.getElementById("ampm");

    if(seg<10){
        seg="0" + seg;
    }
    if(min<10){
        min="0" + min;
    }
    if(hora<10){
        hora="0" + hora;
    }

    
    if(hora>=12){
        ampm=" pm"
    }else{
        ampm=" am"
    }

    
    diasem = tiempo.getDay();
    dia = tiempo.getDate();
    mes = tiempo.getMonth();
    anho = tiempo.getFullYear();

    Pdiasem=document.getElementById("diasem");
    Pdia=document.getElementById("dia");
    Pmes=document.getElementById("mes");
    Panho=document.getElementById("anho");

    var semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
    Pdiasem.textContent = semana[diasem];
    Pdia.textContent =dia;

    var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 
    'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
    Pmes.textContent = meses[mes]
    Panho.textContent = anho;

    let html=document.getElementById("casilla");
    html.innerHTML= hora +":"+ min +":"+ seg + ampm; 
    
     
}, 0);


