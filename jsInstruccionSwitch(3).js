function mostrar()
{
    var mesDelAño = document.getElementById("mes").value;

switch(mesDelAño) {
    case "Febrero":
       alert("Este mes no tiene más de 29 dias");
    break;

    default:
        alert("Este mes tiene 30 o más dias")
    break


}

/*var mesDelAño = document.getElementById('mes').value;
    if(mesDelAño == "Febrero")
    {
        alert("Este mes no tiene más de 29 días")
    }
    else
    {
        alert("Este mes tiene 30 o más días")
    }
	
*/


//FIN DE LA FUNCIÓN
}