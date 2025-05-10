let opened = false;

function openEnvelope() {
  const topFlap = document.querySelector(".top-flap");
  const topFlap1 = document.querySelector(".top-flap1");
  const letter = document.querySelector(".letter");
  const card = document.querySelector(".card");
  const text = document.querySelector(".text");
  const text1 = document.querySelector(".text1");
  const sello= document.querySelector(".sello");

  if (!opened) {
    // ABRIR
    card.classList.add("flipped");

    setTimeout(() => {
      topFlap1.style.display = "none";
    }, 100);

    text.style.display = "none";
    text1.style.display = "none";
    sello.style.display = "none";
    setTimeout(() => {
      topFlap.style.display = "block";
    }, 100);

    void topFlap.offsetWidth;

    topFlap.style.transform = "rotateX(-180deg)";
    letter.style.transform = "translateY(15%) rotateY(180deg)";
  } else {
    // CERRAR
    card.classList.remove("flipped");

    topFlap.style.transform = "rotateX(0deg)";
    letter.style.transform = "translateY(100%) rotateY(0deg)";

    setTimeout(() => {
      topFlap.style.display = "none";
      topFlap1.style.display = "block";
      text.style.display = "block";
      text1.style.display = "block";
      sello.style.display = "block";
    },300); // da tiempo a la animación para cerrarse
  }

  opened = !opened; // alterna el estado
}
