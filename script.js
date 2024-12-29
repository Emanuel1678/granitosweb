document.addEventListener('DOMContentLoaded', function() {
  // 1. Obtener referencias al botón y al video:
  const boton = document.getElementById('boton');
  const miVideo = document.getElementById('miVideo');
  let videoReady = false;
  miVideo.addEventListener('loadeddata', () => {
      videoReady = true;
    });
  // 2. Agregar un "event listener" al botón:
  boton.addEventListener('click', function() {
  
      if(videoReady){
          if (miVideo.paused) {
           miVideo.style.display = 'block';
            miVideo.play();
           boton.textContent = "Si lo pausas eres gei"; //Cambiar el texto del boton
        } else {
            miVideo.style.display = 'none';
           miVideo.pause();
           boton.textContent = "Reproducir >:3"; //Cambiar el texto del boton
          }
      }
    
});
    const audio = document.getElementById('audio');

    document.addEventListener('click', () => {
         audio.play();
       }, { once: true });
});
let ultimoNombreClickeado = null;
function mostrarTexto(nombre) {
  const nombres = document.querySelectorAll('.nombres p');
  let textoElement = document.getElementById('texto-'+nombre);
  let gifElement = document.getElementById('gif-' + nombre);
  // Restablece los colores de todos los nombres
  nombres.forEach((p) => {
      p.style.color = 'white';
    });
 
  // Verifica si el elemento clickeado es el mismo
  if (ultimoNombreClickeado === nombre) {
        textoElement.classList.remove('textoVisible');
         if(gifElement){
              gifElement.src =""; //elimina el source del elemento
          }
        ultimoNombreClickeado = null;
      return;
    }
  // Cambia el color del nombre seleccionado
  const seleccionado = document.getElementById(nombre);
  seleccionado.style.color = 'yellow';
  // Cambia el texto según el nombre seleccionado
  let contenido = '';
  let gifUrl = '';
  switch (nombre) {
    case 'erik':
      contenido = 'es una persona creativa y amigable, a veces es bien gei y no lo sabe disimular.';
      gifUrl = 'assets/kiss.gif';
      break;
    case 'guille':
      contenido = 'de vez en cuando aparece y se junta, de vez en cuando no aparece y sale con alguna morra.';
       gifUrl = 'assets/esquivo.gif';
      break;
    case 'ulises':
      contenido = 'No, Gracias.';
       gifUrl = 'assets/gracias.gif';
      break;
    case 'beto':
      contenido = 'Le gusta jugar como kakashi a naruto a quien se le descuide un momento.';
       gifUrl = 'assets/kaka.gif';
      break;
    case 'diego':
      contenido = 'sabias que diego di le quitas la d y la o, te queda ieg pero sabias que si volteas esto al reves dice  "gei" :).';
       gifUrl = 'assets/llorando.gif';
      break;
    case 'cesar':
      contenido = 'Es una gran persona con buena escritura y aficion por neimar de vrasil.';
      gifUrl = 'assets/neymar.gif';
      break;
    default:
      contenido = '';
      gifUrl = '';
  }

  // Actualiza el texto y lo muestra
  textoElement.innerHTML = contenido;
  if(gifElement){
      gifElement.src = gifUrl;
  }
  textoElement.classList.add('textoVisible');
  ultimoNombreClickeado = nombre;
}
