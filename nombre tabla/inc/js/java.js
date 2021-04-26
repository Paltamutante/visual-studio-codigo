
function agregar(){
    var nom = document.getElementById('nombre').value;
    var ap = document.getElementById('apellido').value;
    var ru = document.getElementById('rut').value

    var table =document.getElementsByTagName('table')[0];
    var newRow = table.insertRow(0);

    var cel1 = newRow.insertCell(0);
    var cel2 = newRow.insertCell(1);
    var cel3 = newRow.insertCell(2);


    cel1.innerHTML=nombre.value;
    cel2.innerHTML=apellido.value;
    cel3.innerHTML=rut.value;

    nombre.value=""
    apellido.value=""
    rut.value=""
}
