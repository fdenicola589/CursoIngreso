function mostrar()
{
	var numeroAleatorio;

	numeroAleatorio = Math.floor(Math.random()* (11 - 1)) + 1;
	
	if(numeroAleatorio >= 9)
		{
			alert("EXCELENTE: " + numeroAleatorio);

        }
	else if(numeroAleatorio >= 4)
			{
				alert("APROBÓ: " + numeroAleatorio);
			}

	else

				alert("Vamos, la proxima se puede: " + numeroAleatorio);
	
	
}//FIN DE LA FUNCIÓN