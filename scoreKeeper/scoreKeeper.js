const ajout = document.getElementById("playersOne");
const ajoute = document.getElementById("playersTwo");
const result = document.getElementById("limite");

function affichageObjectif() {
  let obj = "playing to " + result.value;
  document.getElementById("objectif").textContent = obj;
  ajoute.textContent = 0;
  ajout.textContent = 0;
  ajoute.className = "";
  ajout.className = "";
}
function ajoutResultat1() {
  if (
    result.value != 0 &&
    ajout.textContent < result.value &&
    result.value != ajoute.textContent
  ) {
    const add = Number(ajout.textContent) + 1;
    ajout.textContent = add;
  }
  if (ajout.textContent == result.value) ajout.className = "vert";
}
function ajoutResultat2() {
  if (
    result.value != 0 &&
    ajoute.textContent < result.value &&
    result.value != ajout.textContent
  ) {
    const add = Number(ajoute.textContent) + 1;
    ajoute.textContent = add;
    if (ajoute.textContent == result.value) ajoute.className = "vert";
  }
}
function reset() {
  result.value = 0;
  affichageObjectif(0);
  ajout.textContent = 0;
  ajoute.textContent = 0;
}
