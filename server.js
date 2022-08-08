const express = require('testo');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/testo'));
app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+
'/dist/myapp/index.html'));});
app.listen(process.env.PORT || 8080);
