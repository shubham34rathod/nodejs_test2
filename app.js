let express=require('express')
let {schema1,Model1}=require('./db/schema.js')

let app=express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.set('views','views')
app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.send('home page')
})

app.get('/enterData',(req,res)=>{
    res.render('form')
    // res.redirect('/')
})

app.post('/enterData',async (req,res)=>{
    console.log(req.body);
    let {name,email,age,city,profession}=req.body;
    let doc=await new Model1({
        name:name,
        email:email,
        age:age,
        city:city,
        profession:profession
    })
    await doc.save()
})

// async function fn()
// {
//     let data=await Model1.find();
// }
app.get('/data',async (req,res)=>{
    let data=await Model1.find();
    console.log(data);
    for(let x=0;x<data.length;x++)
    {
        res.send({
            name:data[x].name,
            email:data[x].email,
            age:data[x].age,
            city:data[x].city,
            profession:data[x].profession
        })
    }
    // res.render('data')
})
app.listen(8000,()=>{
    console.log("port is running at 8000");
})

// module.exports=fn