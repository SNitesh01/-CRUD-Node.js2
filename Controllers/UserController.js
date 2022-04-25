import Users from "../Models/Users.js";

//post
async function creatUser (req, res){
    try {
    let userdata = await Users.create(req.body)
    res.status(200).send(userdata)
     //console.log(userdata)
    } catch (error) {
        console.log(error.message)
    }

 }

 //get
 async function getUser(req, res){
     try {
         let user =await Users.find();  // .select('name')
         res.json(user).status(201)
     } catch (error) {
         res.send(error.message)
         
     }
 }

 //get by id
 async function getUserbyid(req, res){
    try {
        let user =await Users.findById({_id:req.params.id});
        res.json(user).status(201)
    } catch (error) {
        res.send(error.message)
        
    }
}

// delete
async function deleteuser(req, res){
    try {
        let user = await Users.deleteOne({_id:req.params.id});
        res.json(user).status(201)
    } catch (error) {
        res.send(error.message)
        
    }
}

//
async function updateUser (req, res){
    try {
      let  _id=req.params.id

        let user = await Users.findByIdAndUpdate(_id, req.body)
            
            // { $set: {
            //     name: req.body.name,
            //     email: req.body.email,
            //     password: req.body.password

            // }}
 
        res.json(user).status(201)
    } catch (error) {
        res.send(error.message).status(404)
    }
}




 

 export {creatUser, getUser, getUserbyid, deleteuser, updateUser}