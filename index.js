var xhr = require('xhr')

document.getElementById("wizardBtn").addEventListener("click", function () {

  console.log("Button Pressed --- ")

  var xhttp = new XMLHttpRequest()

  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
     document.getElementById("wizardBox").innerHTML = xhttp.responseText
    }
  }
  
  xhttp.open("GET", 'https://api.wheretheiss.at/v1/satellites', true)
  xhttp.send()
})
