const express = require('express')
const app = express()
const path = require('path')

//Variables
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');


//Routes
app.use(require('./routes'));

//Static File
app.use(express.static(path.join(__dirname, 'public')));



//Listen port
app.listen(app.get('port'), () => {
    console.log('Servidor Conectado en el puerto', app.get('port'))
})