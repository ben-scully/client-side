var url = 'https://api.wheretheiss.at/v1/satellites'

document.getElementById("wizardBtn").addEventListener("click", function () {

  console.log("Button Pressed --- ")

  $("#wizardBox").load(url, function (response, status ,xhr) {
    console.log('load callback???')
  })
})
