// BOTON CAMBIO DE TEMA

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){
        themeToggle.textContent = "🌙";
    } else {
        themeToggle.textContent = "☀";
    }

});

// API DE FRASES POSITIVAS

async function cargarFrase() {
  try {
    const response = await fetch("https://www.positive-api.online/phrase/esp");

    if (!response.ok) {
      throw new Error("Error al obtener la frase");
    }

    const data = await response.json();

    document.getElementById("quote").textContent = data.text;

  } catch (error) {
    console.error(error);
  }
}
cargarFrase();


// DELEGACION DE EVENTOS PROYECTOS

const container =document.querySelector(".projects-grid");
    container.addEventListener("click", (e)=>{
        console.log(e.target);

    if(e.target.classList.contains("project-btn")){
        const card = e.target.closest(".project-card")
        titleCard = card.querySelector("h3").textContent;

        alert("Haz hecho click en el proyecto: " + titleCard);
    }

});