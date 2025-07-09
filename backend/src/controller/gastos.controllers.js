const gastosControllers = {};
const Gastos = require('../models/gastos');

// método añadir gastos
gastosControllers.addGastos = async (req, res) => {
    console.log(req.body);
    res.send("Nuevo gasto registrado");
};

// método GET desde base de datos
gastosControllers.getGastos = async (req, res) => {
    const gastos = await Gastos.find();
    res.json(gastos);
};

// método POST para guardar en base de datos
gastosControllers.addGasto = async (req, res) => {
    const gasto = new Gastos({
        id: req.body.id,
        tipo: req.body.tipo,
        monto: req.body.monto,
        descripcion: req.body.descripcion
    });
    console.log(gasto);
    await gasto.save();
    res.json('status: Gasto guardado');
};

// método GET con datos simulados
gastosControllers.getGastos = async (req, res) => {
    res.json([
        // ... tus datos simulados aquí ...
    ]);
};

module.exports = gastosControllers;
