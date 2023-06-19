//cargar los datos de la cookie
const medicosCookie = JSON.parse(getCookie('medicos'));
const pacientesCookie = JSON.parse(getCookie('pacientes') || "[]");
const tablaMedicos = document.getElementById("tabla-medicos");
const cuerpoTabla = tablaMedicos.querySelector("tbody");
//length tamaño del arreglo
for (let i = 0; i < medicosCookie.length; i++) {
    const medico = medicosCookie[i];
    const fila = cuerpoTabla.insertRow();
    const nombreMedico = fila.insertCell();
    nombreMedico.textContent = medico.nombreMedico;
    const apellidoMedico = fila.insertCell();
    apellidoMedico.textContent = medico.apellidoMedico;
    const cedula = fila.insertCell();
    cedula.textContent = medico.cedula;
    const especialidad = fila.insertCell();
    especialidad.textContent = medico.especialidad;
    const consultorio = fila.insertCell();
    consultorio.textContent = medico.consultorio;
    const correoContacto = fila.insertCell();
    correoContacto.textContent = medico.correo;
  
    //colocar las pacientes que atiende el medico
    //mediante filter encontramos todas las pacientes que tienen esa especialidad
    let pacientesEncontradas = pacientesCookie.filter(paciente => medico.especialidad === paciente.especialidad);
    //se creo la celda
    const medicopaciente = fila.insertCell();
    if (pacientesEncontradas.length > 0) {
        medicopaciente.innerHTML = `<ul id="pacientes"></ul>`
        const pacientes = medicopaciente.querySelector("#pacientes")
        for (let j = 0; j < pacientesEncontradas.length; j++) {
            const pacienteEncontrada = pacientesEncontradas[j];
            pacientes.innerHTML += `<li>${pacienteEncontrada.nombrepaciente}</li>`;
        }
    } else {
        medicopaciente.textContent = "Sin pacientes";
    }
}


// Función para obtener los datos de la cookie
function getCookie(nombre) {
    const cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].split("=");
        if (cookie[0] === nombre) {
            return decodeURIComponent(cookie[1]);
        }
    }
    return "";
}
