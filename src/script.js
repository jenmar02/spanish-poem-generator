function generatePoem(event) {
  event.preventDefault();
  alert("Generating poem");

  new Typewriter(".poem-container", {
    strings: `No te amo como si fueras rosa de sal, topacio
          <br />
          o flecha de claveles que propagan el fuego:
          <br />
          te amo como se aman ciertas cosas oscuras,
          <br />
          secretamente, entre la sombra y el alma.
          <br /><br />
          Te amo como la planta que no florece y lleva
          <br />
          dentro de sí, escondida, la luz de aquellas flores,
          <br />
          y gracias a tu amor vive oscuro en mi cuerpo
          <br />
          el apretado aroma que ascendió de la tierra.
          <br /><br />
          Te amo sin saber cómo, ni cuándo, ni de dónde
          <br />
          te amo directamente sin problemas ni orgullo:
          <br />
          así te amo porque no sé amar de otra manera,
          <br /><br />
          sino así de este modo en que no soy ni eres,
          <br />
          tan cerca que tu mano sobre mi pecho es mía,
          <br />
          tan cerca que se cierran tus ojos con mi sueño.
          <br />`,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}
let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
