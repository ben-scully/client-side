var xhr = require('xhr')
var example = require('./views/example.hbs')


document.getElementById("wizardBtn").addEventListener("click", function(){

    // 25544
    xhr.get('https://api.wheretheiss.at/v1/satellites', function(err, data) {
      if (err) {
        throw err
      }
      // For Testing
      // console.log(data.body)

      var content = example( data.body )
      document.getElementById("wizardBox").innerHTML = content
    })
})
