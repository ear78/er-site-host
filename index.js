var express = require('express')
var port = process.env.PORT || 5050
var app = express()

app
.use(express.static(__dirname + '/public'))
.listen(port, function() { console.log('listening on', port) })
