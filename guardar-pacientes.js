//obtenemos el formulario
const formularioPaciente = document.getElementById('registro-pacientes-form');
//Cuando el formulario se envie va hacer lo que esta entre corchetes (5-21)
formularioPaciente.addEventListener('submit', (event) => {
    event.preventDefault();//quietara por defecto el envio del formulario
    const datosPacientes = {  //definiendo un objeto
        //atributo = informacion del campo
        nombrePaciente: document.getElementById('nombre').value, 
        apellidoPaciente: document.getElementById('apellido').value,
        cedulaPaciente: document.getElementById('cedula').value,
        edadPaciente: document.getElementById('edad').value,
        telefonoPaciente: document.getElementById('telefono').value,
        especialidad: document.getElementById('especialidad').value,
    };
    guardarEnCookie(datosPacientes)
    const confirmacion = confirm('¿Desea ver los datos o seguir añadiendo pacientes?');
    if (confirmacion) {
        window.location.href = 'pacientes.html';
    } else {
        console.log('Continuando en el formulario');
        formularioPaciente.reset()
    }
});
// Función para guardar una paciente en la cookie
function guardarEnCookie(paciente) {
    // Obtener los datos de la cookie actual de pacientes
    let datosPacient = getCookie("pacientes");
    // Si la cookie está vacía, inicializarla como un arreglo vacío
    if (datosPacient === "") {
        datosPacient = "[]";
    }
    // Convertir la cookie en un arreglo de objetos
    const pacientes = JSON.parse(datosPacient);
    // Agregar la nueva paciente al arreglo
    pacientes.push(paciente);
    // Convertir el arreglo de pacientes de nuevo a un JSON
    const nuevoJSON = JSON.stringify(pacientes);
    // Guardar el JSON en la cookie
    setCookie("pacientes", nuevoJSON);
}

// Función para obtener los datos de la cookie
function getCookie(nombre) {
    //separa las cookies y las guarda en un arreglo
    const cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].split("=");
        if (cookie[0] === nombre) {
            // devolver la infromacion de la cookie que se llama igual
            return decodeURIComponent(cookie[1]);
        }
    }
    //devolver vacio si no encuentra cookie
    return "";
}

// Función para guardar datos en la cookie
function setCookie(nombre, valor) {
    document.cookie = `${nombre}=${encodeURIComponent(valor)}`;
}
function setCookie(nombre, valor) {
    document.cookie = `${nombre}=${encodeURIComponent(valor)}`;
}
