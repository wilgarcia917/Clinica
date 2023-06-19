//cargar los datos de la cookie
//cargar los medicos y pacientes que ya esten guardados, como estan en formato JSON se pasan a objetos para poder trabajarlos en js
const pacientesCookie = JSON.parse(getCookie('pacientes'));
const medicosCookie = JSON.parse(getCookie('medicos') || "[]");
//buscar la tabla pacientes en HTML para agregar las nuevas pacientes
const tablaMascotas = document.getElementById("tabla-pacientes");
const cuerpoTabla = tablaMascotas.querySelector("tbody");

for (let i = 0; i < pacientesCookie.length; i++) {
    const paciente = pacientesCookie[i];
    //insertar fila para agregar pacientes
    const fila = cuerpoTabla.insertRow();
    //insertar celdas para agregar cada uno de los datos de las pacientes
    const celdaNombreMascota = fila.insertCell();
    const celdaNombreDueño = fila.insertCell();
    const celdaCedulaDueño = fila.insertCell();
    const celdaEdadMascota = fila.insertCell();
    const celdaTelefonoDueño = fila.insertCell();
    const celdaEspecialidad = fila.insertCell();
    //agregar la informaciona cada una de las celdas de la tabla
    celdaNombreMascota.textContent = paciente.nombreMascota;
    celdaNombreDueño.textContent = paciente.nombreDueño;
    celdaCedulaDueño .textContent = paciente.cedulaDueño;
    celdaEdadMascota.textContent = paciente.edadMascota;
    celdaTelefonoDueño.textContent = paciente.telefonoDueño;
    celdaEspecialidad.textContent = paciente.especialidad;
    //colocar el medico que va a tratar la paciente
    //mediante find encontramos el medico que tenga la especialidad
    //devuelde el medico que tenga esa especialidad
    const medicoEspecialidad = medicosCookie.find(medico => medico.especialidad === paciente.especialidad);
    //crear la celda
    const celdaMedicoPaciente = fila.insertCell();
    //si hay medicos colocar el nombre del medico, de lo contrario colocar por asignar
    celdaMedicoPaciente.textContent = medicoEspecialidad ? medicoEspecialidad.nombreMedico : "Por asignar";
}




// Función para obtener los datos de la cookie
function getCookie(nombre) {
    //separa todas las cookies que se tengan
    const cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].split("=");
        //busca la cookie que necesitemos en este caso la cookie llamada paciente
        if (cookie[0] === nombre) {
            //si encuentra la cookie devuelve la informacion desencriptada (en formato JSON)
            return decodeURIComponent(cookie[1]);
        }
    }
    //si no encuentra ninguna cookie devuelve vacio
    return "";
}
    }
    //si no encuentra ninguna cookie devuelve vacio
    return "";
}
