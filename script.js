// TODO Selektorer
// id (en specifik nod)
const byId = document.getElementById("p-by-id");
// console.log("byid: ", byId);

// class
const byClass = document.getElementsByClassName("by-class");
// console.log("byClass: ", byClass, byClass.length);

// tag
const byTag = document.getElementsByTagName("p");
// console.log("byTag: ", byTag);

// querySelektor
const firstQuery = document.querySelector(".query");
// console.log("firstQuery: ", firstQuery);

// querySelektorAll
const allQuery = document.querySelectorAll(".query");
// console.log("allQuery: ", allQuery);

// TODO Ändra text och klasser
const message = document.getElementById("message");
console.log("message: ", message);

document.getElementById("change-text").addEventListener("click", () => {
  message.textContent = "Texten gar ändrats med textContent";
  //   byId.remove();
});

document.getElementById("toggle-highlight").addEventListener("click", () => {
  message.classList.toggle("highlight");
  //   message.classList.add("highlight");
  //   message.classList.remove("highlight");
  //   message.style.background = "red";
});

// TODO Inputs och hälsning
const nameInput = document.querySelector("#name-input");
const greeting = document.querySelector("#greeting");

document.getElementById("say-hello").addEventListener("click", () => {
  let name = nameInput.value;

  if (!name) {
    greeting.textContent = `Hej, skriv in ditt namn i input fältet}`;
  } else {
    greeting.textContent = `Hej, ${name}`;
  }
});

// TODO Skapa / Append / Remove

const list = document.getElementById("items");
const newItemText = document.getElementById("new-item-text");

document.getElementById("add-item").addEventListener("click", () => {
  const text = newItemText.value.trim();

  if (!text) {
    return;
  }

  const li = document.createElement("li");
  li.textContent = text;

  list.appendChild(li);

  newItemText.value = "";
});

document.getElementById("remove-last").addEventListener("click", () => {
  lastLi = list.lastElementChild;

  if (lastLi) {
    list.removeChild(lastLi);
  }
});
