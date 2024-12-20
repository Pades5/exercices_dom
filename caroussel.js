function change() {
  let changement = document.getElementById("saison");
  if (changement.title == "ete") {
    changement.src = "automne.jpg";
    changement.title = "automne";
  } else if (changement.title == "automne") {
    changement.src = "hiver.jpg";
    changement.title = "hiver";
  } else if (changement.title == "hiver") {
    changement.src = "printemps.jpg";
    changement.title = "printemps";
  } else if (changement.title == "printemps") {
    changement.src = "ete.jpg";
    changement.title = "ete";
  }
}
