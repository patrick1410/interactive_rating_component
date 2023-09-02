// Functions
function changeScreen() {
  const submit = document.querySelector("#submit");
  submit.addEventListener("click", () => {
    if (document.querySelector(".thank-card").classList.contains("hide")) {
      document.querySelector(".thank-card").classList.remove("hide"); // Verwijderd de class of hide en maakt de thank-card zichtbaar
    }
    document.querySelector(".rating-card").style.display = "none"; // Zorgt voor het verwijdenen van de rating-card
  });
}

changeScreen();

function changeColor() {
  const boxes = document.querySelectorAll(".box"); // Selecteert alle boxen binnen .box-container

  boxes.forEach(function (box) {
    box.addEventListener("click", function () {
      // Voeg de klasse "clicked" toe aan de geklikte box en verwijder deze van andere boxen
      boxes.forEach(function (otherBox) {
        if (otherBox !== box) {
          otherBox.classList.remove("clicked");
        }
      });

      box.classList.add("clicked"); // Voeg de klasse "clicked" toe aan de geklikte box
      getRate(box); // Functie getRate word opgeroepen
    });
  });
}

changeColor();

function getRate(spanElement) {
  const value = spanElement.innerText;
  const outputDiv = document.querySelector("#rate");
  outputDiv.innerText = value;
}
