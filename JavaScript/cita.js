document.addEventListener('DOMContentLoaded', () =>{
    const form = document.getElementById('formulario_cita');
    const citaList = document.getElementById('listadoCitas');
    const ingresarButton = document.querySelector('.btn.btn-primary');
    const registrarButton = document.querySelector('.btn.btn-success');
    const telefonoInput = document.getElementById('telefono');
    const telefonoError = document.getElementById('telefonoError');

    cargarCita();

    form.addEventListener('submit', (event) =>{
        event.preventDefault();
        const name = document.getElementById('name').value;
        const apellido = document.getElementById('apellido').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const telefono = document.getElementById('telefono').value;
        const email = document.getElementById('email').value;

        const agendaCita ={
            name,
            apellido,
            date,
            time,
            telefono,
            email
        };
        guardarCita(agendaCita);
        mostrarCita(agendaCita);
    
    } );

    telefonoInput.addEventListener('change', (event) =>{
        const telefono = event.target.value;
        if(!/^\d{9}$/.test(telefono)){
            telefonoError.textContent='El número de teléfono debe tener 9 digitos.';
            telefonoError.style.display='block';
        }else{
            telefonoError.textContent ='';
            telefonoError.style.display = 'none'
        }
    })

    ingresarButton.addEventListener('mouseover', () => {
        ingresarButton.style.backgroundColor = '#0056b3';
    });
    ingresarButton.addEventListener('mouseout', () => {
        ingresarButton.style.backgroundColor = '#007bff';
    });

    registrarButton.addEventListener('mouseover', () => {
        registrarButton.style.backgroundColor = '#218838';
    });
    registrarButton.addEventListener('mouseout', () => {
        registrarButton.style.backgroundColor = '#28a745';
    });

    function guardarCita(agendaCita){
        let citas = JSON.parse(localStorage.getItem('citas')) || [];
        citas.push(agendaCita);
        localStorage.setItem('citas', JSON.stringify(citas));
    }

    function cargarCita(){
        let citas = JSON.parse(localStorage.getItem('citas')) || [];
        citas.forEach(agendaCita => mostrarCita(agendaCita)) 
            
        }
    function mostrarCita(agendaCita){
        const li = document.createElement('li');
        li.textContent = `Nombre: ${agendaCita.name}, Apellido: ${agendaCita.apellido}, Fecha: ${agendaCita.date}, Hora: ${agendaCita.time}, Telefono: ${agendaCita.telefono}, Correo Electronico: ${agendaCita.email}`;
        citaList.appendChild(li);
    }
});