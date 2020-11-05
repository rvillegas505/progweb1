function contarcarac() 
{
    var maxLength = 1000;
    var strLength = document.getElementById("consultaform").value.length;
    var charRemain = (maxLength - strLength);
    
    if(charRemain < 0) {
        document.getElementById("caracteresRestantes").innerHTML = '<span style="color: red;">Usted ha excedido el limite de '+maxLength+' caracteres</span>';
    }else{
        document.getElementById("caracteresRestantes").innerHTML = charRemain+' caracteres restantes';
    }
}


function valida_envia()
{
	//Definimos los caracteres permitidos en una dirección de correo electrónico
	var regexp = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;
	var regtel=/^[0-9]{4}[-]{0,1}[0-9]{4}$/;

	//Validamos un campo o área de texto, por ejemplo el campo nombre
	if (document.form.nombre.value.length==0)
	{
		alert("Tiene que escribir su nombre")
		document.form.nombre.focus()
		return 0;
	}


	//Validamos un campo de texto como numérico, por ejemplo el campo teléfono de 9 dígitos
	valor = document.form.telefono.value;
	if ((regtel.test(document.form.telefono.value) == 0) || (document.form.telefono.value.length = 0) ) 
	{
		alert("Tiene que escribir un telefono de 8 digitos");
		document.form.telefono.focus();
		return 0;
	}
	else 
	{
		var c_telefono=true;
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

	//Validamos un campo o área de texto, por ejemplo el campo consulta
	if (document.form.consultaform.value.length==0)
	{
		alert("Tiene que escribir una consulta")
		document.form.consultaform.focus()
		return 0;
	}

	//Si todos los campos han validado correctamente, se envía el formulario
	document.form.submit();
}

function mostrarPaises()
{
	if (form.sinoViaje[0].checked == true){
		document.getElementById('buscadorPais').style.display = 'block';	//si la opcion elegida es Si, muestra el listado de paises
		
	}
	else{
		document.getElementById('buscadorPais').style.display = 'none';		//si la opcion elegida es No, mantiene oculto el listado de paises 
	}

	if (form.sinoViaje[0].checked == true){
		document.getElementById('buscadorPaisT').style.display = 'block';	//si la opcion elegida es Si, muestra el listado de paises
		
	}
	else{
		document.getElementById('buscadorPaisT').style.display = 'none';		//si la opcion elegida es No, mantiene oculto el listado de paises 
	}
}

function mostrarDireccion()
{
	if (form.sinoRespirar[0].checked == true){
		document.getElementById('direccion').style.display = 'block';	//si la opcion elegida es Si, muestra el campo Direccion
	}
	else{
		document.getElementById('direccion').style.display = 'none';	//si la opcion elegida es No, mantiene oculto el campo Direccion
	}
}


function valida_enviacorona()
{
	var sintomas = 0;	//declaramos variable para almacenar los sintomas que sean marcados en el form

	//Definimos los caracteres permitidos en una dirección de correo electrónico
	var regexp = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;

	//Validamos un campo o área de texto, por ejemplo el campo nombre
	if (document.form.nombre.value.length==0)
	{
		alert("Tiene que escribir su nombre")
		document.form.nombre.focus()
		return 0;
	}

    
	//Validamos un campo dni
	valor = document.form.dni.value;
	if( !(/^\d{8}$/.test(valor)) ) 
	{
		alert("Debe escribir un DNI");
		document.form.dni.focus();
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


	//validar radio
	//var validarRadio=function()
	

	if (form.sinoFiebre[0].checked == true) {
		sintomas++;									//en la variable Sintomas almacenamos aquellos que fueron seleccionados
	}
	else if (form.sinoFiebre[1].checked == true) {
	}
	else{
		alert("Responde si has tenido fiebre");
		return false;
	}

	
	if (form.sinoCabeza[0].checked == true) {
		sintomas++;
	}
	else if (form.sinoCabeza[1].checked == true) {
	}
	else{
		alert("Responde si has tenido dolor de cabeza");
		return false;
	}
	
	
	if (form.sinoTos[0].checked == true) {
		sintomas++;
	}
	else if (form.sinoTos[1].checked == true) {
	}
	else{
		alert("Responde si has tenido tos");
		return false;
	}
	
	
	if (form.sinoGarganta[0].checked == true) {
		sintomas++;
	}
	else if (form.sinoGarganta[1].checked == true) {
	}
	else{
		alert("Responde si tienes dolor de garganta");
		return false;
	}
	
	
	if (form.sinoRespirar[0].checked == true) {
		sintomas++;
	}
	else if (form.sinoRespirar[1].checked == true) {
	}
	else{
		alert("Responde si tienes dificultad para respirar");
		return false;
	}
	
	//Si todos los campos han validado correctamente, al presionar "Enviar" salta un alert indicando los sintomas marcados y se envía el formulario
	
	alert("El formulario fue completado correctamente. " + sintomas + " síntomas de COVID-19 fueron registrados.");
	document.form.submit(); 
}


