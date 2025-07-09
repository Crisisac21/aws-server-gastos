const mongoose = require('mongoose');

const {Schema}=mongoose;
const GastosSchema=new Schema({
tipo:{type:String, required:true},
monto:{type:Number, required:true},
descripcion:{type:String, required:true}
})
const Gastos=mongoose.model('Gastos',GastosSchema);
module.exports=Gastos;

