
function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {

      document.getElementById("lagerStatus").innerHTML = this.responseText;
      };

    xhttp.open("GET", "text.json", true);
    xhttp.send();
  }