let $ = document;
// Select Elements From DOM
let colors = $.querySelectorAll(".color-box");
let Input = $.querySelector("#input-field");
let AddNote = $.querySelector("#btn-save");
let Delet = $.querySelector("#btn-delete");
let Contaner = $.querySelector("#listed");
let Notes = $.querySelector(".card-text");

// func for add New Note to contaner
function AddNoteFunc() {
  let NewDiv = $.createElement("div");
  let NewP = $.createElement("p");
  NewDiv.classList.add("card", "shadow-sm", "rounded");
  NewP.classList.add("card-text", "p-3");
  NewP.innerHTML = Input.value;
  NewDiv.append(NewP);
  NewDiv.style.backgroundColor = Input.style.backgroundColor;
  Contaner.appendChild(NewDiv);
  Input.value = "";
  // set event onclick on each new div when click delet ...
  NewDiv.addEventListener("click", function () {
    NewDiv.remove();
  });
}

// clear button just remove color and text in input box
Delet.addEventListener("click", function () {
  Input.value = "";
  Input.style.backgroundColor = "#fff";
});

// set event click in evry color for change background color input ...
colors.forEach(function (element) {
  element.addEventListener("click", function (event) {
    Input.style.backgroundColor = event.target.style.backgroundColor;
  });
});

// button plus for adding new note if input is not empty
AddNote.addEventListener("click", function () {
  if (Input.value) {
    AddNoteFunc();
  }
});

// for each keypress check if it is enter app work to add input value to Notes
Input.addEventListener("keydown", function (event) {
  let inpval = Input.value;
  // we can change color with type #<color-order> and press enter to change color
  if (
    inpval.charAt(0) == "#" &&
    !isNaN(inpval.charAt(1)) &&
    event.key == "Enter" &&
    Number(inpval.charAt(1)) > 0 &&
    Number(inpval.charAt(1)) < 10
  ) {
    Input.style.backgroundColor =
      colors[Number(inpval.charAt(1)) - 1].style.backgroundColor;
    Input.value = "";
  } else if (event.key == "Enter" && Input.value) {
    AddNoteFunc();
  }
});
