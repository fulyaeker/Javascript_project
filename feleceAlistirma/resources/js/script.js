function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "navbardrop") {
      x.className += " responsive";
    } else {
      x.className = "navbardrop";
    }
  }