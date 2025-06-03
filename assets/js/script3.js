let personas = []
    function = validar()
        let eTelefono = document.getElementById("telefono")
        let vTelefono = eTelefono.value
        let eErrorTelefono = document.getElementById("errorTelefono")
        console.log(eTelefono)

        let eContrasenia = document.getElementById("Contraseña")
        let vContrasenia = eContrasenia.value
        let eErrorContrasenia = document.getElementById("errorContraseña")
        console.log(eContrasenia)

        if(eTelefono.length => 8){
            alert("Debes ingresar al menos 8 digitos")
            eErrorTelefono.innerText = ""
            eErrorTelefono.innerHTML = ""
    
        else(eTelefono)
}




//telefono debe tener exactamente 8 digitos, no es obligatoria
//contrasenia debe tener mas de 5 caracteres, es obligatoria