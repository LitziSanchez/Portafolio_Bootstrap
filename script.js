let app = document.getElementById('app');

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

// Usar el punto es para llamar a una propiedad o a una acción del objeto.
// Acciones se distinguen por los paréntesis ()
typewriter
  .pauseFor(2500)
  .typeString('Litzi Sánchez')
  .pauseFor(300)
  .deleteAll()
  .typeString('Desarrolladora Frontend')
  .pauseFor(1000)
  .start();



let frase = document.getElementById('frase');

let typewriterFrase = new Typewriter(frase, {
loop: true,
delay: 75,
});

  // Usar el punto es para llamar a una propiedad o a una acción del objeto.
  // Acciones se distinguen por los paréntesis ()
  typewriterFrase
    .pauseFor(2500)
    .typeString('De la idea al diseño y del diseño al código')
    .pauseFor(300)
    .deleteAll()
    .typeString('Soy @litzi.saen')
    .pauseFor(1000)
    .start();