const express = require('express');
const router=express.Router();

const gasto= require('../controller/gastos.controllers');
const usuario= require('../controller/usuarios.controllers');

router.get('/misitio/gastos',gasto.getGastos);
router.post('/misitio/gastos',gasto.addGastos);

router.get('/misitio/usuarios',usuario.getUsuarios);
router.post('/misitio/usuarios',usuario.addUsuarios);

// Ruta de /misitio
router.get('/misitio', (req, res) => {
  console.log("Ruta '/misitio' solicitada");
  res.send('Bienvenido al Backend del GASTO ');
});

// Ruta de /misitio/about
router.get('/misitio/about', (req, res) => {
  console.log("Ruta '/misitio/about' solicitada");
  res.send('Acerca del sitio');
});

router.get('/misitio/contacto',(req,res)=>{
    res.sendFile('./foto.avif',{
        root:__dirname
    });
})


router.use((req, res) => {
  res.status(404).send('No se encuentra la página');
});



module.exports = router;

