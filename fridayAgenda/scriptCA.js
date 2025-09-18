// ===============================
// Selektorer – grunder
// ===============================
document.getElementById("run-selectors").addEventListener("click", () => {
  // 1) ID (en specifik nod)
  const byId = document.getElementById("p-by-id");
  console.log("getElementById:", byId);

  // 2) Klass (HTMLCollection – live)
  const byClass = document.getElementsByClassName("by-class");
  console.log(
    "getElementsByClassName (HTMLCollection, live):",
    byClass,
    "length:",
    byClass.length
  );

  // 3) Tag (HTMLCollection – live)
  const byTag = document.getElementsByTagName("p");
  console.log("getElementsByTagName('p'):", byTag.length);

  // 4) querySelector (första matchen, CSS-selektor)
  const firstQuery = document.querySelector(".query");
  console.log("querySelector('.query'):", firstQuery);

  // 5) querySelectorAll (NodeList – oftast statisk)
  const allQuery = document.querySelectorAll(".query");
  console.log("querySelectorAll('.query') (NodeList):", allQuery.length);
});

// Selektorer:
// “Vi tittar på fem sätt att hitta element: getElementById, getElementsByClassName, getElementsByTagName, querySelector, querySelectorAll. De två mitten ger HTMLCollection (live), de två sista jobbar med CSS-selektorer och querySelectorAll ger NodeList.”

// ===============================
// Ändra text & klasser
// ===============================
const message = document.getElementById("message");
document.getElementById("change-text").addEventListener("click", () => {
  // textContent sätter ren text (ingen HTML-parsning)
  message.textContent = "Texten har ändrats med textContent 🎉";
});

document.getElementById("toggle-highlight").addEventListener("click", () => {
  // classList.add/remove/toggle/contains
  message.classList.toggle("highlight");
});

// Ändra text:
// “textContent sätter ren text – säkert och enkelt. (Vi undviker innerHTML här för att slippa blanda in XSS och HTML-parsning första gången.)”

// Events:
// “Med addEventListener('click', ...) kör vi kod när knappen klickas.”

// classList:
// “element.classList.toggle('highlight') växlar en klass av/på — perfekt för små tillstånd.”

// ===============================
// Input + hälsning
// ===============================
const nameInput = document.getElementById("name-input");
const greeting = document.getElementById("greeting");

document.getElementById("say-hello").addEventListener("click", () => {
  const name = nameInput.value.trim();
  greeting.textContent = name ? `Hej, ${name}!` : "Skriv ditt namn först.";
});

// ===============================
// Skapa / Append / Remove
// ===============================
const list = document.getElementById("items");
const newItemText = document.getElementById("new-item-text");

document.getElementById("add-item").addEventListener("click", () => {
  const text = newItemText.value.trim();
  if (!text) return;

  // createElement + textContent
  const li = document.createElement("li");
  li.textContent = text;

  // append sist i listan
  list.appendChild(li);

  newItemText.value = "";
  newItemText.focus();
});

document.getElementById("remove-last").addEventListener("click", () => {
  const last = list.lastElementChild;
  if (last) {
    // removeChild (tillgänglig och begriplig för nybörjare)
    list.removeChild(last);
  }
});

// Skapa/Lägga till/Ta bort:
// “createElement → textContent → appendChild för att stoppa in i DOM:en.
// removeChild tar bort en nod från sin förälder.”
