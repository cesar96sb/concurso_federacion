// Organizamos las preguntas por categorías (Debes tener 10 de cada)
const bancoDatos = {
    jugadores: [
        { imagen: "jugadores/miguel_cubo.webp", preguntaEspecifica: "¿Cuál es el nombre de este jugador?",opciones: ["Miguel Cubo", "Gabi", "Saúl Ñíguez", "Mario Suárez"], correcta: 0 },
        { imagen: "jugadores/Dani_carvajal.webp", preguntaEspecifica: "¿Cuál es el nombre de este jugador?", opciones: ["Álvaro Arbeloa", "Nacho Fernández", "Juanfran Torres", "Dani Carvajal"], correcta: 3 },
        { imagen: "jugadores/Raúl_González_Blanco.webp", preguntaEspecifica: "¿Cuál es el nombre de este jugador?", opciones: ["Fernando Morientes", "Emilio Butragueño", "Raúl González", "David Villa"], correcta: 2 },
        { imagen: "jugadores/Álvaro_Morata.webp", preguntaEspecifica: "¿Cuál es el nombre de este jugador?", opciones: ["Álvaro Morata", "Fernando Torres", "Borja Mayoral", "Joselu Mato"], correcta: 0 },
        { imagen: "jugadores/Iker_Casillas.webp", preguntaEspecifica: "¿Cuál es el nombre de este jugador?", opciones: ["Santiago Cañizares", "David de Gea", "Diego López", "Iker Casillas"], correcta: 3 },
        { imagen: "jugadores/manolo_sanchis.webp", preguntaEspecifica: "¿Cuál es el nombre de este jugador?", opciones: ["Manolo Sanchís", "Miguel Porlán", "Fernando Hierro", "Manolo Hierro"], correcta: 0 },
        { imagen: "jugadores/rodri_hernandez.webp", preguntaEspecifica: "¿Cuál es el nombre de este jugador?", opciones: ["Marcos Llorente", "Sergio Busquets", "Rodri Hernández", "Saúl Ñíguez"], correcta: 2 },
        { imagen: "jugadores/dani_parejo.webp", preguntaEspecifica: "¿Cuál es el nombre de este jugador?", opciones: ["Esteban Granero", "Guti", "Mario Suárez", "Dani Parejo"], correcta: 3 },
        { imagen: "jugadores/Mario_Hermoso.webp", preguntaEspecifica: "¿Cuál es el nombre de este jugador?", opciones: ["Nacho Fernández", "Lucas Hernández", "Mario Hermoso", "Álvaro Arbeloa"], correcta: 2 },
        { imagen: "jugadores/fernando_torres.webp", preguntaEspecifica: "¿Cuál es el nombre de este jugador?", opciones: ["Álvaro Morata", "Fernando Torres", "Raúl González", "David Villa"], correcta: 1 },

    ],
    estadios: [
        { imagen: "estadios/Estadio_Santiago_Bernabéu.webp", preguntaEspecifica: "¿Cuál es el nombre de este estadio?", opciones: ["Riyadh Air Metropolitano", "Estadio Santiago Bernabéu", "Ciudad Deportiva RM", "Estadio de la Castellana"], correcta: 1 },
        { imagen: "estadios/Estadio_rayo_vallecano.webp", preguntaEspecifica: "¿Cuál es el nombre de este estadio?", opciones: ["Estadio de Butarque", "Estadio de Santo Domingo", "Coliseum", "Estadio Rayo Vallecano"], correcta: 3 },
        { imagen: "estadios/Estadio_Riyadh_Air_Metropolitano.webp", preguntaEspecifica: "¿Cuál es el nombre de este estadio?",opciones: ["Riyadh Air Metropolitano", "Estadio Santiago Bernabéu", "Estadio Ernesto Cotorruelo", "Estadio Fernando Torres"], correcta: 0 },
        { imagen: "estadios/Estadio_coliseum.webp", preguntaEspecifica: "¿Cuál es el nombre de este estadio?",opciones: ["Riyadh Air Metropolitano", "Estadio coliseum", "Ernesto Cotorruelo", "Estadio Rayo Vallecano"], correcta: 1 },
        { imagen: "estadios/Estadio_Ontime_Butarque.webp", preguntaEspecifica: "¿Cuál es el nombre de este estadio?", opciones: ["Estadio Ontime Butarque", "Estadio coliseum", "Ernesto Cotorruelo", "Municipal de El Soto"], correcta: 0 },
        { imagen: "estadios/Estadio_Santo_Domingo.webp", preguntaEspecifica: "¿Cuál es el nombre de este estadio?", opciones: ["La Canaleja", "Polideportivo Prado Santo Domingo", "Estadio Fernando Torres", "Estadio Santo Domingo"], correcta: 3 },
        { imagen: "estadios/Estadio_Fernando_Torres.webp", preguntaEspecifica: "¿Cuál es el nombre de este estadio?", opciones: ["Ciudad Deportiva Getafe", "Nuevo Matapiñonera", "Estadio Fernando Torres", "Campo de La Aldehuela"], correcta: 2 },
        { imagen: "estadios/Estadio_vicente_calderon.webp", preguntaEspecifica: "¿Cuál es el nombre de este estadio?", opciones: ["Antiguo Estadio Chamartín", "Campo de O'Donnell", "Riyadh Air Metropolitano", "Estadio Vicente Calderón"], correcta: 3 },
        { imagen: "estadios/ciudad_deportiva_valdebebas.webp", preguntaEspecifica: "¿Cuál es el nombre de este estadio?", opciones: ["Estadio Alfredo Di Stéfano", "Cerro del Espino", "Ciudad Deportiva Valdebebas", "Instalación Deportiva Butarque"], correcta: 2 },
        { imagen: "estadios/Estadio_Ernesto_Cotorruelo.webp", preguntaEspecifica: "¿Cuál es el nombre de este estadio?", opciones: ["Valdebernardo", "I.D. Butarque", "Ernesto Cotorruelo", "Polideportivo Aluche"], correcta: 2 },

    ],
    escudos: [
        { imagen: "escudos/escudo_real_madrid.webp", preguntaEspecifica: "¿A qué equipo pertenece este escudo?",opciones: ["Real Aranjuez", "RSD Alcalá", "RCD Carabanchel", "Real Madrid"], correcta: 3 },
        { imagen: "escudos/Escudo_atletico_de_madrid.webp", preguntaEspecifica: "¿A qué equipo pertenece este escudo?", opciones: ["Atlético de Madrid", "Rayo Majadahonda", "RSD Alcalá", "CD Vicálvaro"], correcta: 0 },
        { imagen: "escudos/Escudo_Rayo_Vallecano.webp", preguntaEspecifica: "¿A qué equipo pertenece este escudo?", opciones: ["Rayo Majadahonda", "RSD Alcalá", "Rayo Vallecano", "AD Fundación"], correcta: 2 },
        { imagen: "escudos/escudo_leganes.webp", preguntaEspecifica: "¿A qué equipo pertenece este escudo?", opciones: ["Getafe CF", "CD Leganés", "AD Alcorcón", "CD Puerta Bonita"], correcta: 1 },
        { imagen: "escudos/escudo-alcorcon.webp", preguntaEspecifica: "¿A qué equipo pertenece este escudo?", opciones: ["CD Leganés", "Getafe CF", "CF Trival Valderas", "AD Alcorcón"], correcta: 3 },
        { imagen: "escudos/escudo_carabanchel.webp", preguntaEspecifica: "¿A qué equipo pertenece este escudo?", opciones: ["RCD Carabanchel", "CD Puerta Bonita", "SR Villaverde Boetticher", "CD Moscardó"], correcta: 0 },
        { imagen: "escudos/Escudo_getafe_fc.webp", preguntaEspecifica: "¿A qué equipo pertenece este escudo?", opciones: ["Real Aranjuez","Getafe B", "CD El Álamo", "Getafe FC"], correcta: 3 },
        { imagen: "escudos/escudo_las_rozas.webp", preguntaEspecifica: "¿A qué equipo pertenece este escudo?", opciones: ["AD Unión Adarve", "Las Rozas CF", "CF Rayo Majadahonda", "CUC Villalba"], correcta: 1 },
        { imagen: "escudos/escudo_alcala.webp", preguntaEspecifica: "¿A qué equipo pertenece este escudo?", opciones: ["Real Aranjuez", "RSD Alcalá", "AD Torrejón CF", "RCD Carabanchel"], correcta: 1 },
        { imagen: "escudos/escudo_puerta_bonita.webp", preguntaEspecifica: "¿A qué equipo pertenece este escudo?", opciones: ["CD Puerta Bonita", "RCD Carabanchel", "CD Colonia Moscardó", "CDC Moscardó"], correcta: 0 },

    ]


};

let preguntasFiltradas = [];
let preguntaActual = 0;
let puntuacion = 0;
let cronometro;
let datosUsuario = {};

// Al registrarse, guardamos datos y pasamos al menú de categorías
document.getElementById('registro-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Guardamos los datos globalmente para que seleccionarCategoria los tenga
    datosUsuario = {
        nombre: document.getElementById('nombre').value,
        email: document.getElementById('email').value,
        telefono: document.getElementById('telefono').value
    };

    // Cambiamos de pantalla
    document.getElementById('pantalla-inicio').classList.add('hidden');
    document.getElementById('pantalla-menu').classList.remove('hidden');
});

// Selección de categoría

// Selección de categoría
function seleccionarCategoria(categoria) {
    // Añadimos la categoría a los datos que ya tenemos
    datosUsuario.categoria = categoria;

    // CAMBIO AQUÍ: En vez de cargarlas fijas, las pasamos por la batidora aleatoria
    preguntasFiltradas = prepararPreguntasAleatorias(categoria); 
    
    // Reiniciamos contadores
    preguntaActual = 0;
    puntuacion = 0;

    // Cambiamos a la pantalla de juego
    document.getElementById('pantalla-menu').classList.add('hidden');
    document.getElementById('pantalla-juego').classList.remove('hidden');
    
    // Empezamos
    cargarPregunta();
}

function cargarPregunta() {
    if (preguntaActual >= 10) {
        mostrarResultados();
        return;
    }

    resetPregunta();
    const q = preguntasFiltradas[preguntaActual];
    
    document.getElementById('imagen-pregunta').src = q.imagen;
    document.getElementById('texto-pregunta').innerText = q.preguntaEspecifica;
    document.getElementById('progreso').innerText = `${preguntaActual + 1} / 10`;

    q.opciones.forEach((opcion, index) => {
        const btn = document.createElement('button');
        btn.innerText = opcion;
        btn.classList.add('opcion-btn');
        // Aquí pasamos 'index === q.correcta' y además el propio botón 'btn'
        btn.onclick = () => validarRespuesta(index === q.correcta, btn);
        document.getElementById('opciones').appendChild(btn);
    });

    iniciarTiempo();
}

function validarRespuesta(esCorrecta, botonSeleccionado) {
    clearInterval(cronometro); // Paramos el tiempo

    // 1. Bloquear todos los botones para que no sigan pulsando
    const todosLosBotones = document.querySelectorAll('.opcion-btn');
    todosLosBotones.forEach(btn => btn.style.pointerEvents = 'none');

    // 2. Pintar el botón según el resultado
    if (esCorrecta) {
        puntuacion++;
        botonSeleccionado.classList.add('correcta');
    } else {
        botonSeleccionado.classList.add('incorrecta');
        
        // Opcional: Mostrar cuál era la correcta aunque hayas fallado
        const indiceCorrecto = preguntasFiltradas[preguntaActual].correcta;
        todosLosBotones[indiceCorrecto].classList.add('correcta');
    }

    // 3. Esperar 1 segundo para que el usuario vea el color y pasar
    setTimeout(() => {
        preguntaActual++;
        cargarPregunta();
    }, 1000); 
}

function iniciarTiempo() {
    let t = 15;
    document.getElementById('timer').innerText = `Tiempo: ${t}s`;
    cronometro = setInterval(() => {
        t--;
        document.getElementById('timer').innerText = `Tiempo: ${t}s`;
        if (t <= 0) {
            clearInterval(cronometro);
            preguntaActual++;
            cargarPregunta();
        }
    }, 1000);
}

function resetPregunta() {
    document.getElementById('opciones').innerHTML = '';
    clearInterval(cronometro);
}

function mostrarResultados() {
    const pantallaFinal = document.getElementById('pantalla-resultados');
    const mensaje = document.getElementById('mensaje-final');
    const puntosTexto = document.getElementById('puntos-finales'); // Para el círculo de puntos
    
    puntosTexto.innerText = puntuacion;
    let contenidoFinal = "";

    if (puntuacion === 10) {
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 }
        });

        contenidoFinal = `
            <div style="color: #2e7d32; font-weight: bold;">
                <h1 style="font-size: 50px;">🏆</h1>
                <h2>¡PERFECTO! 10/10</h2>
                <p>Eres un experto total en el fútbol madrileño.</p>
            </div>
        `;
    } else {
        contenidoFinal = `¡Buen intento! Has logrado ${puntuacion} de 10 respuestas correctas.`;
    }

    mensaje.innerHTML = contenidoFinal;
    
    // Mostramos la pantalla de resultados
    document.getElementById('pantalla-juego').classList.add('hidden');
    pantallaFinal.classList.remove('hidden');
    
    // Aquí llamarás a la función de enviar el correo
    enviarDatosAlTutor(); 
}

function enviarDatosAlTutor() {
    // Estos nombres (nombre, email, puntos...) deben ser IGUALES 
    // a los que pusiste entre llaves {{ }} en la plantilla.
    const parametros = {
        nombre: datosUsuario.nombre,
        email: datosUsuario.email,
        telefono: datosUsuario.telefono,
        categoria: datosUsuario.categoria,
        puntos: puntuacion // Esta es la variable global de tu juego
    };

    const serviceID = "service_xf1pk7p";   // Cámbialo por el tuyo
    const templateID = "template_64cvd25"; // Cámbialo por el tuyo

    emailjs.send(serviceID, templateID, parametros)
        .then(() => {
            console.log("¡Correo enviado correctamente al tutor!");
        })
        .catch((err) => {
            console.error("Fallo al enviar el correo:", err);
        });
}

// =========================================================================
// FUNCIONES PARA HACER EL JUEGO ALEATORIO (Añadir al final del archivo)
// =========================================================================

// Esta función mezcla cualquier lista que le pasemos (Algoritmo Fisher-Yates)
function mezclarArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Esta función clona la categoría, la mezcla, y recalcula la respuesta correcta
function prepararPreguntasAleatorias(categoria) {
    // 1. Hacemos una copia limpia de las 10 preguntas para no romper el bancoDatos original
    let listaPreguntas = JSON.parse(JSON.stringify(bancoDatos[categoria]));

    // 2. Mezclamos el orden en el que van a salir las 10 preguntas
    listaPreguntas = mezclarArray(listaPreguntas);

    // 3. Mezclamos las 4 opciones de cada pregunta sin romper el juego
    listaPreguntas.forEach(pregunta => {
        // Guardamos el texto de la respuesta que era correcta originalmente
        const textoCorrecto = pregunta.opciones[pregunta.correcta];

        // Mezclamos el array de sus 4 opciones de forma aleatoria
        pregunta.opciones = mezclarArray(pregunta.opciones);

        // Buscamos en qué posición (0, 1, 2 o 3) ha quedado el texto correcto y actualizamos el índice
        pregunta.correcta = pregunta.opciones.indexOf(textoCorrecto);
    });

    return listaPreguntas;
}