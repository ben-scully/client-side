var xhr = require('xhr')
var example = require('./views/example.hbs')

xhr.get('https://api.wheretheiss.at/v1/satellites', function(err, data) {
  if (err) {
    throw err
  }
  // For Testing
  console.log(data.body)
  var content = data.body
})


document.getElementById("wizard").addEventListener("click", function(){

    xhr.get('https://api.wheretheiss.at/v1/satellites', function(err, data) {
      if (err) {
        throw err
      }
      // For Testing
      console.log(data.body)

      var content = data.body
      document.getElementById("wizardBox").innerHTML = content
    })
})
