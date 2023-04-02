let mongoose=require('mongoose')

mongoose.connect('mongodb://localhost:27017/test2')
.then(()=>console.log('connected'))
.catch(()=>console.log('connection error'))

let schema1=new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    age:{type:Number},
    city:{type:String},
    profession:{type:String}
})

let Model1=mongoose.model('model1',schema1);

module.exports={schema1,Model1}