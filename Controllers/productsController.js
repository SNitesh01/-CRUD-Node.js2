import Product from "../Models/Products.js";


 async function CreatProduct (req, res) { 
    try {
        let result = await Product.create(req.body);
        res.status(201).send("product created")
    } catch (error) {
        res.status(400).send("something went wrong")
    }
 }
 
 
 export {CreatProduct};

 