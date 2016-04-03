var xhr = require('xhr')
// var example = require('./views/example.hbs')
var example = require('./views/jadeExample.jade')


document.getElementById("wizardBtn").addEventListener("click", function(){

    // 25544
    xhr.get('https://api.wheretheiss.at/v1/satellites/25544', function(err, data) {
      if (err) {
        throw err
      }
      // For Testing
      console.log("Raw: ", data.body)

      var rawToObj = JSON.parse(data.body)
      console.log("Raw To Obj: ", rawToObj)

      var partObj = rawToObj[0]
      console.log("Part Obj: ", partObj)

      console.log("Gets Name?: ", partObj.name)

      var content = example( partObj )
      document.getElementById("wizardBox").innerHTML = content
    })
})
