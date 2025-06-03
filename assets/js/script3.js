let personas = []
function validar(){
    let eTelefono = document.getElementById("telefono")
    let vTelefono = eTelefono.value
    let eErrorTelefono = document.getElementById("errorTelefono")
    console.log(eTelefono)
    console.log(vTelefono)

    let eContrasenia = document.getElementById("contrasenia")
    let vContrasenia = eContrasenia.value
    let eErrorContrasenia = document.getElementById("errorContrasenia")
    console.log(eContrasenia)
    console.log(vContrasenia) 
    
    let esValido = true;

    if(vTelefono.length == 8){
        console.log("Si cumple")
        eErrorTelefono.innerText = ""
        eTelefono.style.backgroundColor = ""
        eTelefono.style.color = "black"
    }else{
        console.log("No cumple")
        alert("Debes ingresar 8 digitos")
        eErrorTelefono.innerHTML = "<strong>Debes ingresar 8 digitos</strong>"
        eTelefono.style.backgroundColor = ""
        eTelefono.style.color = "black"
        return;
    }


    if(vContrasenia.length > 5){
        console.log("Si cumple")
        eErrorContrasenia.innerText = ""
        eContrasenia.style.backgroundColor = ""
        eContrasenia.style.color = "black"
    }else{
        console.log("No cumple")
        alert("Debes ingresar mas de 5 caracteres")
        eErrorContrasenia.innerHTML = "<strong>Debes ingresar más de 5 caracteres</strong>"
        eContrasenia.style.backgroundColor = ""
        eContrasenia.style.color = "black"
        return;
        }

    if (!esValido) return;
    
    let p = {
        telefono : vTelefono,
        contrasenia : vContrasenia
    }
    personas.push(p)
    eTelefono.value = ""
    eContrasenia.value = ""
    console.log(personas)
    cargarDatos()}

    document.getElementById("formActualizar").style.display = "none";

function cargarDatos(){
    let eCuerpoTabla = document.getElementById("cuerpoTabla")
    let personasMap = personas.map((p,index)=>{
        return "<tr><td>"+p.telefono+"</td>"+"<td>"+p.contrasenia+"</td>"+
        "<td><button onclick='eliminar("+index+")'>Eliminar</button><button onclick='actualizarForm("+index+")'>Actualizar</button></td></tr>"
    })
    console.log("Mapa de referencia")
    console.log(personasMap)
    let personasStr = personasMap.join("")
    console.log("Entrada")
    console.log(personasStr)
    eCuerpoTabla.innerHTML = personasStr

}
function eliminar(indice){
    let persona = personas[indice];
    let confirmacion = confirm(`¿Estás seguro de eliminar ${persona.telefono} ${persona.contrasenia}?`);

    if (confirmacion){
        personas = personas.filter((_, index) => index !== indice);
        cargarDatos();
    }
}
function actualizarForm(indice){
    let eTelefono = document.getElementById("telefono1")
    let eContrasenia = document.getElementById("contrasenia1")
    let persona = personas[indice]

    console.log("Cambio")
    console.log(persona)

    eTelefono.value = persona.telefono
    eContrasenia.value = persona.contrasenia

    let eBtnActualizar = document.getElementById("btn")
    eBtnActualizar.value = indice

    document.getElementById("formActualizar").style.display = "block"
}


function actualizar(){
    let eTelefono = document.getElementById("telefono1")
    let vTelefono = eTelefono.value.trim()

    let eContrasenia = document.getElementById("contrasenia1")
    let vContrasenia = eContrasenia.value.trim()

    let eBtnActualizar = document.getElementById("btn")
    let indice = eBtnActualizar.value;

    let personaActual = personas[indice]
    let nuevoTelefono = personaActual.telefono;
    let nuevoContrasenia = personaActual.contrasenia;

    let mensajeConfirmacion = [];


    if(vTelefono && vTelefono.length == 8 && vTelefono !== personaActual.telefono) {
       mensajeConfirmacion.push(`Telefono: "${personaActual.telefono}" → "${vTelefono}`);
       nuevoTelefono = vTelefono;
    } else if (vTelefono && vTelefono.length == 8) {
        alert("El teléfono debe tener 8 digitos");
        return;
    }

    if(vContrasenia && vContrasenia.length > 5 && vContrasenia !== personaActual.contrasenia) {
       mensajeConfirmacion.push(`Contrasenia: "${personaActual.contrasenia}" → "${vContrasenia}"`);
       nuevoContrasenia = vContrasenia;
    } else if (vContrasenia && vContrasenia.length > 5) {
        alert("La contraseña debe tener al menos 5 dígitos");
        return;
    }

    if(mensajeConfirmacion.length === 0){
        alert("No hay cambios para actualizar")
        return;
    }

    let confirmar = confirm(`¿Estás seguro de aplicar los siguientes cambios?\n\n${mensajeConfirmacion.join("\n")}`);
    if (!confirmar) return;

    personas[indice] = {
        telefono : nuevoTelefono,
        contrasenia : nuevoContrasenia
    };

    cargarDatos();
    eTelefono.value = "";
    eContrasenia.value = "";
    document.getElementById("formActualizar").style.display = "none";


}

 


//telefono debe tener exactamente 8 digitos, no es obligatoria
//contrasenia debe tener mas de 5 caracteres, es obligatoria