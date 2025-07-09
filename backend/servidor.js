const express = require('express');
const app = express();
const morgan = require('morgan');

//const{mongoose}=require('./database');

const port = 3000;
app.use(express.text());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(morgan('dev'));


app.use(require('./src/routes/server.routes'));
// Middleware para registrar las rutas recibidas
function logger(req,res,next){
 console.log('Ruta Recibida '+ req.protocol+'://'+req.get('host')+ req.originalUrl);
 next();
}
app.use(logger);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


