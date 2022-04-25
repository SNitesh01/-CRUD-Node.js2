import express from "express";
import dotenv from "dotenv"
import Products from "./Models/Products.js";

//import Routes...
import productRoutes from './Routes/productsRoutes.js'
import userRoutes from "./Routes/userRoutes.js"
import connectDb from './Dbconnect/DBconnection.js'
import { fakeproducts } from "./seeders/productsSeeder.js";

const app = express();

//.envconfi imports...
 dotenv.config();

//database imports..
 connectDb();


 //fake data seeting
//fakeproducts(100);


app.use(express.json());




//post api...
app.use('/products', productRoutes);
app.use('/users', userRoutes )


//get api...
app.get('/products', function (req, res) {
    Products.find().then((prod) =>{
        res.json(prod).status(201)
        
    })
})


app.get('/products/:id', function (req, res) {
    Products.findById({_id:req.params.id}).then((result) =>{
        res.json(result).status(201)
        
    })
})

//delete api..
app.delete('/products/:id', function(req, res){
    Products.deleteOne({_id:req.params.id}).then((result) =>{
        res.status(200).json(result)
    }).catch((err) =>{
        console.log(err)
    })

})

//put(update) api..
app.put('/products/:id', function(req, res){
    Products.updateOne(
        {_id:req.params.id},
        { $set: {
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            images: req.body.images,
            instock: req.body.instock,
            brand: req.body.instock


        }}
        ).then((result) =>{
        res.status(200).json(result)
    }).catch((err) =>{
        console.log(err)
    })

})
   
app.listen(process.env.PORT, () =>{
 console.log("started")
})
