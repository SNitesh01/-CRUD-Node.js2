import faker from "faker";
import Products from "../Models/Products.js";

 


    function genrateProducts (limit){
       let products = [];
       for(let i=0; i<limit; i++){
           let product={};
           product.name= faker.commerce.productName();
           product.price =faker.commerce.price();
           product.description = faker.commerce.productDescription();
           product.inStock = faker.datatype.boolean();
           product.department = faker.commerce.department();
           products.push(product);
       }
     return products;
    console.log(products)
   }

async function fakeproducts (limit){
   try {
       let product = genrateProducts(limit);
       let result = await Products.insertMany(product);
   } catch (error) {
       console.log(error.message)
   }

}

export { fakeproducts }

