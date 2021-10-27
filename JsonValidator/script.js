
function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {

      let response = this.responseText;
      let lager = JSON.parse(response);

      document.getElementById("lagerStatus").innerHTML = 
      "Her er de titler og antal der er på lager: " 
      + lager.GameLibrary[0].name + ": " + lager.GameLibrary[0].stks + " "+ "Stk" + " "
      + lager.GameLibrary[1].name + ": " + lager.GameLibrary[1].stks + " "+ "Stk" + " "
      + lager.GameLibrary[2].name + ": " + lager.GameLibrary[2].stks + " "+ "Stk" + " "
      + lager.GameLibrary[3].name + ": " + lager.GameLibrary[3].stks + " "+ "Stk" + " ";

      };

    xhttp.open("GET", "text.json", true);
    xhttp.send();
  }