function mostrar()
{

    var edad;
    edad = document.getElementById("edad").value;
    edad=parseInt(edad);

    if(edad >= 13 && edad <= 17)
    {
        alert("Usted es adolescente");

    }
    else if(edad < 13)
        {
          alert("Usted es un niño");

        }
    else 
        {
            alert("Usted es un adulto")
        }


    
}//FIN DE LA FUNCIÓN