const mongoose=require('mongoose');
const URI='mongodb://atlas-sql-686e8759fd73876e5a48c0ae-k8mgcc.a.query.mongodb.net/sample_mflix?ssl=true&authSource=admin';
mongoose.connect(URI)
.then(db=> console.log('BD conectada'))
.catch(err => console.error(err));
module.exports=mongoose;