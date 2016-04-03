var xhr = require('xhr')
var example = require('./views/example.hbs')


document.getElementById("wizardBtn").addEventListener("click", function(){

    // 25544
    xhr.get('https://api.wheretheiss.at/v1/satellites', function(err, data) {
      if (err) {
        throw err
      }
      // For Testing
      console.log("Raw: ", data.body)
      var convertJSON = JSON.parse(data.body)
      console.log("JSON'd: ", convertJSON)
      var content = example( convertJSON )
      document.getElementById("wizardBox").innerHTML = content
    })
})
