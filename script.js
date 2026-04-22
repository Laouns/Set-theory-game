const propiedades = [
  "carnívoro",
  "herbívoro",
  "omnívoro",
  "doméstico",
  "salvaje",
  "acuático",
  "volador",
];

const animalesBase = [
  {
    nombre: "Tigre",
    dieta: "carnívoro",
    origen: "salvaje",
    movimiento: "terrestre",
    tipo: "peligroso",
    imagen: "img/tigre.jpg",
  },
  {
    nombre: "León",
    dieta: "carnívoro",
    origen: "salvaje",
    movimiento: "terrestre",
    tipo: "peligroso",
    imagen: "img/leon.jpg",
  },
  {
    nombre: "Lobo",
    dieta: "carnívoro",
    origen: "salvaje",
    movimiento: "terrestre",
    tipo: "peligroso",
    imagen: "img/lobo.jpg",
  },
  {
    nombre: "Cocodrilo",
    dieta: "carnívoro",
    origen: "salvaje",
    movimiento: "acuático",
    tipo: "peligroso",
    imagen: "img/cocodrilo.jpg",
  },
  {
    nombre: "Águila",
    dieta: "carnívoro",
    origen: "salvaje",
    movimiento: "volador",
    tipo: "peligroso",
    imagen: "img/aguila.jpg",
  },
  {
    nombre: "Serpiente",
    dieta: "carnívoro",
    origen: "salvaje",
    movimiento: "terrestre",
    tipo: "peligroso",
    imagen: "img/serpiente.jpg",
  },
  {
    nombre: "Tiburón",
    dieta: "carnívoro",
    origen: "salvaje",
    movimiento: "acuático",
    tipo: "peligroso",
    imagen: "img/tiburon.jpg",
  },
  {
    nombre: "Vaca",
    dieta: "herbívoro",
    origen: "doméstico",
    movimiento: "terrestre",
    tipo: "útil",
    imagen: "img/vaca.jpg",
  },
  {
    nombre: "Caballo",
    dieta: "herbívoro",
    origen: "doméstico",
    movimiento: "terrestre",
    tipo: "útil",
    imagen: "img/caballo.jpg",
  },
  {
    nombre: "Oveja",
    dieta: "herbívoro",
    origen: "doméstico",
    movimiento: "terrestre",
    tipo: "útil",
    imagen: "img/oveja.jpg",
  },
  {
    nombre: "Gallina",
    dieta: "omnívoro",
    origen: "doméstico",
    movimiento: "terrestre",
    tipo: "útil",
    imagen: "img/gallina.png",
  },
  {
    nombre: "Cerdo",
    dieta: "omnívoro",
    origen: "doméstico",
    movimiento: "terrestre",
    tipo: "útil",
    imagen: "img/cerdo.jpg",
  },
  {
    nombre: "Pato",
    dieta: "omnívoro",
    origen: "doméstico",
    movimiento: "volador",
    tipo: "útil",
    imagen: "img/pato.png",
  },
  {
    nombre: "Perro",
    dieta: "omnívoro",
    origen: "doméstico",
    movimiento: "terrestre",
    tipo: "útil",
    imagen: "img/perro.png",
  },
  {
    nombre: "Gato",
    dieta: "carnívoro",
    origen: "doméstico",
    movimiento: "terrestre",
    tipo: "neutro",
    imagen: "img/gato.png",
  },
  {
    nombre: "Mono",
    dieta: "omnívoro",
    origen: "salvaje",
    movimiento: "terrestre",
    tipo: "neutro",
    imagen: "img/mono.png",
  },
  {
    nombre: "Elefante",
    dieta: "herbívoro",
    origen: "salvaje",
    movimiento: "terrestre",
    tipo: "neutro",
    imagen: "img/elefante.png",
  },
  {
    nombre: "Jirafa",
    dieta: "herbívoro",
    origen: "salvaje",
    movimiento: "terrestre",
    tipo: "neutro",
    imagen: "img/jirafa.png",
  },
  {
    nombre: "Delfín",
    dieta: "carnívoro",
    origen: "salvaje",
    movimiento: "acuático",
    tipo: "neutro",
    imagen: "img/delfin.png",
  },
  {
    nombre: "Loro",
    dieta: "omnívoro",
    origen: "salvaje",
    movimiento: "volador",
    tipo: "neutro",
    imagen: "img/loro.png",
  },
  {
    nombre: "Pingüino",
    dieta: "carnívoro",
    origen: "salvaje",
    movimiento: "acuático",
    tipo: "neutro",
    imagen: "img/pinguino.png",
  },
];

let vidas = 5;
let puntaje = 0;
let turno = 0;

let universo = [];
let corralA = [];
let corralB = [];
let corralC = [];
let libres = [];

let propiedadA = "";
let propiedadB = "";
let propiedadC = "";

let animalActual = null;

function mezclarArray(array) {
  const copia = [...array];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

function mostrarPantalla(idPantalla) {
  document.querySelectorAll(".pantalla").forEach((pantalla) => {
    pantalla.classList.remove("activa");
  });
  document.getElementById(idPantalla).classList.add("activa");
}

function iniciarJuego() {
  vidas = 5;
  puntaje = 0;
  turno = 0;

  corralA = [];
  corralB = [];
  corralC = [];
  libres = [];

  elegirPropiedadesAleatorias();
  seleccionarAnimalesPartida();
  actualizarEstado();
  mostrarAnimalActual();
  mostrarPantalla("pantalla-juego");
}

function elegirPropiedadesAleatorias() {
  const props = mezclarArray(propiedades);
  propiedadA = props[0];
  propiedadB = props[1];
  propiedadC = props[2];
}

function seleccionarAnimalesPartida() {
  universo = mezclarArray(animalesBase).slice(0, 12);
}

function actualizarEstado() {
  document.getElementById("vidas").textContent = vidas;
  document.getElementById("puntaje").textContent = puntaje;
  document.getElementById("progreso").textContent =
    `Encuentro ${turno + 1} de ${universo.length}`;

  document.getElementById("corral-a-label").textContent = propiedadA;
  document.getElementById("corral-b-label").textContent = propiedadB;
  document.getElementById("corral-c-label").textContent = propiedadC;
}

function mostrarAnimalActual() {
  animalActual = universo[turno];

  document.getElementById("animal-nombre").textContent = animalActual.nombre;
  document.getElementById("animal-dieta").textContent =
    `Dieta: ${animalActual.dieta}`;
  document.getElementById("animal-origen").textContent =
    `Origen: ${animalActual.origen}`;
  document.getElementById("animal-movimiento").textContent =
    `Movimiento: ${animalActual.movimiento}`;
  document.getElementById("animal-tipo").textContent =
    `Tipo: ${animalActual.tipo}`;

  const imagen = document.getElementById("animal-imagen");
  imagen.src = animalActual.imagen;
  imagen.alt = animalActual.nombre;
  imagen.onerror = () => {
    imagen.src = "img/fondo.jpg";
  };

  document.getElementById("mensaje").textContent = "Elige una acción.";
}

function validarEnCorral(propiedad) {
  return (
    animalActual.dieta === propiedad ||
    animalActual.origen === propiedad ||
    animalActual.movimiento === propiedad
  );
}

function calcularPuntos(tipo, correcto) {
  if (correcto) {
    if (tipo === "útil") return 2;
    if (tipo === "neutro") return 1;
    if (tipo === "peligroso") return 3;
  } else {
    if (tipo === "peligroso") return -2;
    return -1;
  }
  return 0;
}

function clasificarAnimal(destino) {
  if (destino === "libre") {
    libres.push(animalActual);
    document.getElementById("mensaje").textContent =
      "El animal fue dejado en libertad.";
    return avanzarTurno();
  }

  let propiedad = "";
  let corral = null;

  if (destino === "A") {
    propiedad = propiedadA;
    corral = corralA;
  } else if (destino === "B") {
    propiedad = propiedadB;
    corral = corralB;
  } else if (destino === "C") {
    propiedad = propiedadC;
    corral = corralC;
  }

  const correcto = validarEnCorral(propiedad);

  if (correcto) {
    corral.push(animalActual);
    puntaje += calcularPuntos(animalActual.tipo, true);
    document.getElementById("mensaje").textContent = "Clasificación correcta.";
  } else {
    vidas--;
    puntaje += calcularPuntos(animalActual.tipo, false);
    libres.push(animalActual);
    document.getElementById("mensaje").textContent =
      "Error: el animal no pertenece a este corral. Te ataca y escapa.";
  }

  actualizarEstado();
  avanzarTurno();
}

function terminarPartida() {
  vidas = 0;
  actualizarEstado();
  mostrarResumenFinal(true);
}

function avanzarTurno() {
  if (vidas <= 0) {
    return mostrarResumenFinal(true);
  }

  if (turno >= universo.length - 1) {
    return mostrarResumenFinal(false);
  }

  turno++;
  actualizarEstado();
  mostrarAnimalActual();
}

function obtenerClasificacionFinal() {
  if (puntaje <= 8) return "Refugio caótico";
  if (puntaje <= 20) return "Refugio eficiente";
  return "Superviviente experto";
}

function nombresLista(lista) {
  if (lista.length === 0) return "Ninguno";
  return lista.map((a) => a.nombre).join(", ");
}

function crearResumenCard(titulo, contenido, claseExtra = "") {
  return `
    <div class="resumen-card ${claseExtra}">
      <h3>${titulo}</h3>
      <p>${contenido}</p>
    </div>
  `;
}

function mostrarResumenFinal(gameOver) {
  mostrarPantalla("pantalla-final");

  const tituloGameOver = document.getElementById("game-over-titulo");

  if (gameOver) {
    tituloGameOver.classList.remove("oculto");
  } else {
    tituloGameOver.classList.add("oculto");
  }

  document.getElementById("clasificacion-final").textContent =
    obtenerClasificacionFinal();

  document.getElementById("puntaje-final").textContent = puntaje;

  const totalCapturados = corralA.length + corralB.length + corralC.length;

  document.getElementById("resumen-matematico").innerHTML = `
    <div class="resumen-grid">
      ${crearResumenCard("Universo U", nombresLista(universo), "full")}
      ${crearResumenCard(`Corral A (${propiedadA})`, nombresLista(corralA))}
      ${crearResumenCard(`Corral B (${propiedadB})`, nombresLista(corralB))}
      ${crearResumenCard(`Corral C (${propiedadC})`, nombresLista(corralC))}
      ${crearResumenCard("Libres L", nombresLista(libres))}
      
      <div class="resumen-card full">
        <h3>Cardinalidades</h3>
        <div class="cardinalidades-grid">
          <div class="cardinalidad-item">
            <span class="cardinalidad-label">|U|</span>
            <span class="cardinalidad-value">${universo.length}</span>
          </div>
          <div class="cardinalidad-item">
            <span class="cardinalidad-label">|A|</span>
            <span class="cardinalidad-value">${corralA.length}</span>
          </div>
          <div class="cardinalidad-item">
            <span class="cardinalidad-label">|B|</span>
            <span class="cardinalidad-value">${corralB.length}</span>
          </div>
          <div class="cardinalidad-item">
            <span class="cardinalidad-label">|C|</span>
            <span class="cardinalidad-value">${corralC.length}</span>
          </div>
          <div class="cardinalidad-item">
            <span class="cardinalidad-label">|L|</span>
            <span class="cardinalidad-value">${libres.length}</span>
          </div>
          <div class="cardinalidad-item">
            <span class="cardinalidad-label">|A ∪ B ∪ C|</span>
            <span class="cardinalidad-value">${totalCapturados}</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

document.getElementById("btn-iniciar").addEventListener("click", iniciarJuego);
document
  .getElementById("btn-instrucciones")
  .addEventListener("click", () => mostrarPantalla("pantalla-instrucciones"));
document
  .getElementById("btn-volver")
  .addEventListener("click", () => mostrarPantalla("pantalla-inicio"));
document
  .getElementById("btn-reiniciar")
  .addEventListener("click", iniciarJuego);
document
  .getElementById("btn-inicio-final")
  .addEventListener("click", () => mostrarPantalla("pantalla-inicio"));
document
  .getElementById("btn-corral-a")
  .addEventListener("click", () => clasificarAnimal("A"));
document
  .getElementById("btn-corral-b")
  .addEventListener("click", () => clasificarAnimal("B"));
document
  .getElementById("btn-corral-c")
  .addEventListener("click", () => clasificarAnimal("C"));
document
  .getElementById("btn-libre")
  .addEventListener("click", () => clasificarAnimal("libre"));
document
  .getElementById("btn-terminar")
  .addEventListener("click", terminarPartida);

mostrarPantalla("pantalla-inicio");
