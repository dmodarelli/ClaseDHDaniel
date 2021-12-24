let express = require('express');
let app = express();
app.listen(3030, () => console.log('SERVIDOR CORRIENDO'));
app.get('/', function (req, res) {
    res.send('Bienvenidos al Sitio')
    
})