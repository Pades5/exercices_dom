function ajoute() {
  let resultat = document.getElementById("article").value;
  if (resultat == "") {
    alert("merci de remplir le champ");
  } else {
    let newLi = document.createElement("li");
    newLi.textContent = resultat;
    document.getElementById("ajout").appendChild(newLi);
    document.getElementById("article").value = "";
  }
}
