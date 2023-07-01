const formusuario=[
//     {
//     nombre:"",
//     apellido:"",
//     mail:"",
//     contraseña:"",
//     provincia:"",

// }
]

//seccion donde se capturan elementos
const formularioUsuarios = document.querySelector(".formularioUsuarios")
const contenedorUsuarios = document.getElementById("contenedorUsuarios")
//funcion renderizar usuarios
function renderizarUsuarios(){
    for(usuario of formusuario){
        contenedorUsuarios.innerHTML +=`
        <div id="targetausuarios">
        <h1>USUARIOS REGISTRADOS</h1>
        <h2>nombre: ${usuario.nombre}</h2>
        <h2>Apellido: ${usuario.apellido}</h2>
        <h2>Mail: ${usuario.mail}</h2>
        <h2>Provincia: ${usuario.provincia}</h2>
        </div>`
    }
    
}
//funcion para validar el formulario
function validacionesf(formusuario){
    //se inicializa un contador de fallos
    var contador =0;
    // Event.preventDefault();
    //se crea una variable que contiene el dato correspondiente
    var vnombre = document.getElementById("Fnombre").value;
    //se comprueba si el campo esta vacio, en caso de estarlo se envia una alerta y se suma 1 a la variable contador
    if (vnombre.length == 0){
        alert('por favor ingrese un usuario');
        return;
    }else{
        contador=contador+1;
    }
    var Fapellido = document.getElementById("Fapellido").value;
    if (Fapellido.length == 0){
        alert('por favor ingrese un apellido');
        return;
    }else{
        contador=contador+1;
    }
    var Fdni = document.getElementById("Fdni").value;
    if (Fdni<8){
        alert('ingrese un D.N.I valido')
        return;
    }else{
        contador=contador+1;
    }
    var Fnumero = document.getElementById("Fcelular").value;
    if (Fnumero<6){
        alert('numero invalido');
        return;
    }else{
        contador=contador+1;
        return;
    }
    //se comprueba si el contador esta en cero, en caso de que no se envia por consola la cantidad de errores que hubo.
    if(contador >0){
        console.log(formularioUsuarios.validacionesf.contador);
        
    }
    // this.submit();
    
}


formularioUsuarios.addEventListener("submit",(Event)=>{// para que no se recarge la pagina
    Event.preventDefault()
    // console.log(formularioUsuarios.provincia.value)
    console.log(formularioUsuarios.Fnombre.value)
    console.log(formularioUsuarios.Fapellido.value)
    console.log(formularioUsuarios.Fmail.value)
    console.log(formularioUsuarios.Fdni.value)
    console.log(formularioUsuarios.Fcelular.value)
    console.log(formularioUsuarios.Fprovincia.value)
 formusuario.push({
            nombre:formularioUsuarios.Fnombre.value,
            apellido:formularioUsuarios.Fapellido.value,
            mail:formularioUsuarios.Fmail.value,
            DNI:formularioUsuarios.Fdni.value,
            NUMERODETELEFONO:formularioUsuarios.Fcelular.value,
            provincia:formularioUsuarios.Fprovincia.value,
        })
        renderizarUsuarios()
        validacionesf()
    }
)
