function contarcarac()
{
    var maxLength = 1000;
    var strLength = document.getElementById("consultaform").value.length;
    var charRemain = (maxLength - strLength);
    
    if(charRemain < 0){
        document.getElementById("caracteresRestantes").innerHTML = '<span style="color: red;">Usted ha excedido el limite de '+maxLength+' caracteres</span>';
    }else{
        document.getElementById("caracteresRestantes").innerHTML = charRemain+' caracteres restantes';
    }
}

function valida_envia()
{
	//Definimos los caracteres permitidos en una dirección de correo electrónico
	var regexp = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;

	//Validamos un campo o área de texto, por ejemplo el campo nombre
	if (document.form.nombre.value.length==0)
	{
		alert("Tiene que escribir su nombre")
		document.form.nombre.focus()
		return 0;
	}


	//Validamos un campo de texto como numérico, por ejemplo el campo teléfono de 9 dígitos
	valor = document.form.telefono.value;
	if( !(/^\d{8}$/.test(valor)) ) 
	{
		alert("Tiene que escribir un telefono de 8 digitos");
		document.form.telefono.focus();
		return 0;
	}

	//Validamos un campo de texto como email
	if ((regexp.test(document.form.email.value) == 0) || (document.form.email.value.length = 0))
	{
		alert("Introduzca una direccion de email valida");
		document.form.email.focus();
		return 0;
	} 
	else 
	{
		var c_email=true;
	}

	//Validamos un campo o área de texto, por ejemplo el campo nombre
	if (document.form.consultaform.value.length==0)
	{
		alert("Tiene que escribir una consulta")
		document.form.consultaform.focus()
		return 0;
	}

	//Si todos los campos han validado correctamente, se envía el formulario
	document.form.submit();
}
