const horaElement = document.getElementById("hora");
const palabraTextoElement = document.getElementById("palabraTexto");
const significadoTextoElement = document.getElementById("significadoTexto");

const palabrasHebreas = [
    { palabra: "יאוהדהונוהי", significado: "arrepentimiento" },
    { palabra: "יאיהדלוניהי", significado: "Proteccion de Muerte" },
    { palabra: "יאסהדיונטהי", significado: "Hacer Milagros" },
    { palabra: "יאעהדלונםהי", significado: "Quita Mal Pensamiento" },
    { palabra: "יאמהדהונשהי", significado: "Curacion" },
    { palabra: "יאלהדלונההי", significado: "Amplia Nuestro Recipiente" },
    { palabra: "יאאהדכונאהי", significado: "Pone Orden en la Vida" },
    { palabra: "יאכהדהונתהי", significado: "Anula Malos Decretos" },
    { palabra: "יאההדזוניהי", significado: "Influenciar Angeles" },
    { palabra: "יאאהדלונדהי", significado: "Contra Mal de Ojo" },
    { palabra: "יאלהדאונוהי", significado: "Sacar Su Ego" },
    { palabra: "יאההדהונעהי", significado: "Inducir Amor" },
    { palabra: "יאיהדזונלהי", significado: "Traer Hijo Varon" },
    { palabra: "יאמהדבונההי", significado: "Resuelve Conflictos Violentos" },
    { palabra: "יאההדרוניהי", significado: "Veo Mundo Causal" },
    { palabra: "יאההדקונםהי", significado: "Dominio Astral" },
    { palabra: "יאלהדאונוהי", significado: "Sacar el Ego" },
    { palabra: "יאכהדלוניהי", significado: "Basija para Bendicion" },
    { palabra: "יאלהדוונוהי", significado: "Te Redime" },
    { palabra: "יאפהדהונלהי", significado: "Fuerza Espiritual" },
    { palabra: "יאנהדלונךהי", significado: "Fuerza para Finalizar" },
    { palabra: "יאיהדיוניהי", significado: "Fuente de toda Bendicion" },
    { palabra: "יאמהדלונההי", significado: "Bendicion del Saserdote" },
    { palabra: "יאחהדהונוהי", significado: "Cura los Celos" },
    { palabra: "יאנהדתונההי", significado: "Conecta con la Verdad" },
    { palabra: "יאההדאונאהי", significado: "Orden en la Vida" },
    { palabra: "יאיהדרונתהי", significado: "Socio de la Luz" },
    { palabra: "יאשהדאונההי", significado: "Encontrar Alma Gemela" },
    { palabra: "יארהדיוניהי", significado: "Despoja del Odio" },
    { palabra: "יאאהדוונםהי", significado: "Reconecta con Conflicto" },
    { palabra: "יאלהדכונבהי", significado: "Tener Plenitud" },
    { palabra: "יאוהדשונרהי", significado: "Meshiaj Redencion" },
    { palabra: "יאיהדחונוהי", significado: "Eliminar mi Lado oscuro" },
    { palabra: "יאלהדהונחהי", significado: "Aprender Romper Ego" },
    { palabra: "יאכהדוונקהי", significado: "Sublimar Sexo" },
    { palabra: "יאמהדנונדהי", significado: "Conquistar el Miedo" },
    { palabra: "יאאהדנוניהי", significado: "Vicion largo plazo" },
    { palabra: "יאחהדעונםהי", significado: "Cualidad Compartir" },
    { palabra: "יארהדהונעהי", significado: "Transmutar - a +" },
    { palabra: "יאיהדיונזהי", significado: "Vida en Orden" },
    { palabra: "יאההדהונההי", significado: "Bendicion Sanar Situaciones" },
    { palabra: "יאמהדיונכהי", significado: "Revelar Secretos" },
    { palabra: "יאוהדוונלהי", significado: "Ayudar Otros a Conectar" },
    { palabra: "יאיהדלונההי", significado: "Suavizar Juicios" },
    { palabra: "יאסהדאונלהי", significado: "Conseguir Dinero" },
    { palabra: "יאעהדרוניהי", significado: "Adquiero Confianza" },
    { palabra: "יאעהדשונלהי", significado: "Elimino Bloqueos de Vida" },
    { palabra: "יאמהדיונההי", significado: "Conciencia Unificada" },
    { palabra: "יאוהדהונוהי", significado: "Aprendo Gratitud" },
    { palabra: "יאדהדנוניהי", significado: "Adquiero Profecia" },
    { palabra: "יאההדחונשהי", significado: "Perdon Culpas Pasadas" },
    { palabra: "יאעהדמונםהי", significado: "Fuerza para Conectar" },
    { palabra: "יאנהדנןנאהי", significado: "Fuerza Defenza Espiritual" },
    { palabra: "יאנהדיונתהי", significado: "Elimino Muerte de Proyectos" },
    { palabra: "יאמהדבונההי", significado: "Fuerza Lograr Objetivos" },
    { palabra: "יאפהדווניהי", significado: "Anula Idolatria" },
    { palabra: "יאנהדמונםהי", significado: "Me libero de Limitaciones" },
    { palabra: "יאיהדיונלהי", significado: "Dios Lucha por mi" },
    { palabra: "יאההדרונחהי", significado: "Cordon umbnilical con Dios" },
    { palabra: "יאמהדצונרהי", significado: "Liberacion de Limitaciones" },
    { palabra: "יאוהדמונבהי", significado: "Fuerza Sanacion" },
    { palabra: "יאיהדהונההי", significado: "Conecta Maestro Interior" },
    { palabra: "יאעהדנונוהי", significado: "Conectar Virtudes Moshe" },
    { palabra: "יאמהדחוניהי", significado: "Energia Para ayudar" },
    { palabra: "יאדהדמונבהי", significado: "Conciencia Ayudar" },
    { palabra: "יאמהדנונקהי", significado: "Resolver conflicto via espiritual" },
    { palabra: "יאאהדיונעהי", significado: "Poder Sobre el Tiempo" },
    { palabra: "יאחהדבונוהי", significado: "Correcion Emision Seminal" },
    { palabra: "יארהדאונההי", significado: "Bendicion para Casarse" },
    { palabra: "יאיהדבונמהי", significado: "Exito en Negocios" },
    { palabra: "יאההדיוניהי", significado: "Don de la Profecia" },
    { palabra: "יאמהדוונםהי", significado: "Elimina Defectos Fisicos" },
];

function obtenerHora() {
    const ahora = new Date();
    return ahora;
}

function calcularIndicePalabra(hora) {
    const hora24 = hora.getHours();
    const minutos = hora.getMinutes();
    const segundos = hora.getSeconds();
    const segundosTotales = segundos + minutos * 60 + hora24 * 3600;

    // Definimos el tiempo total para un ciclo completo (24 horas)
    const segundosPorCiclo = 24 * 60 * 60;
    // Definimos el número total de palabras
    const numPalabras = palabrasHebreas.length;
    // Definimos el tiempo para cambiar de palabra (20 minutos)
    const segundosPorPalabra = 20 * 60;

    // Calculamos el tiempo dentro del ciclo actual
    const tiempoEnCiclo = segundosTotales % segundosPorCiclo;

    // Ajustamos el tiempo para que el ciclo se reinicie solo a las 5:46 am
    const tiempoAjustado = tiempoEnCiclo - (5 * 60 * 60 + 46 * 60);

    // Calculamos el índice de la palabra actual dentro del ciclo ajustado
    let indicePalabra = Math.floor(tiempoAjustado / segundosPorPalabra);

    // Si el índice de palabra calculado es mayor o igual al número de palabras, volvemos al índice 0
    if (indicePalabra >= numPalabras) {
        indicePalabra = 0;
    }

    return indicePalabra;
}

function actualizarReloj() {
    const horaActual = obtenerHora();
    const hora24 = horaActual.getHours();
    const minutos = horaActual.getMinutes();
    const segundos = horaActual.getSeconds();
    const horaFormateada = `${hora24 < 10 ? '0' : ''}${hora24}:${minutos < 10 ? '0' : ''}${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;

    horaElement.textContent = horaFormateada;

    const indicePalabra = calcularIndicePalabra(horaActual);
    const palabra = palabrasHebreas[indicePalabra];
    palabraTextoElement.textContent = palabra.palabra;
    significadoTextoElement.textContent = palabra.significado;
}

setInterval(actualizarReloj, 1000);

actualizarReloj();

actualizarReloj();
