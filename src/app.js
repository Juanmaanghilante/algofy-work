
const express = require('express');
const app = express();
const Router = require('./routes/indexRoutes')
const path = require('path');

app.set('views',path.join(__dirname,'../views'));
app.set('view engine','ejs')


app.use(express.static('public'));
app.use(require('./routes/indexRoutes'))
app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000")
});

