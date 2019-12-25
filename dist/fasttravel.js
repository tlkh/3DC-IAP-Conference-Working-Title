function showhideFastTravel() {
    var x = document.getElementById("box2");
    var y = document.getElementById("btn");
    if (x.style.display === "none") {
      x.style.display = "block";
      y.innerText = "HIDE"
    } else {
      x.style.display = "none";
      y.innerText = "SHOW"
      
    }
  }