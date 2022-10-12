const express = require(`express`);
const userModel = require(`../models/UserSchema`);

const router = express.Router();

//GET all blogs
router.get(`/`, async (req, res) => {
    try{
        const users = await userModel.find({})
        res.render(`users/users`)
    }
    catch(e){
        console.log(e);
        res.status(403).send(`Cannot create`);
    }
});

//GET: user by ID
router.get(`/:id`, async (req, res) => {
    try{
        const users = await userModel.findById(req.params.id)
        res.send(users)
    }
    catch(e){
        console.log(e);
        res.status(403).send(`Cannot create`);
    }
});

//POST: Create new user
router.post("/", async (req, res) => {
    try {
      // check if user exist
      const userAlreadyExist = await UserModel.find({ email: req.body.email });
  
      // if there is a object inside of the array
      if (userAlreadyExist[0]) {
        return res.send("User Already exist!");
      }
  
      // Create a new user
      const user = await userModel.create(req.body);
      res.send(user);
    } catch (error) {
      console.log(error);
      res.status(403).send("Cannot POST");
    }
  });

//PUT: Update By ID
router.put(`/:id`, async (req,res)=>{
    try{
        const updatedUser = await userModel.findByIdAndUpdate(req.params.id, req.body, {'returnDocument' : "after"})
        res.send(updatedUser)
    }catch (e) {
        console.log(e);
        res.status(403).send(`Cannot create`);
      }
})

//DELETE: Remove by ID
router.delete(`/:id`, async (req,res)=>{
    try{
        const deletedUser = await userModel.findByIdAndRemove(req.params.id)
        console.log(deletedUser)
        res.send(`user Deleted`)
    }catch (e) {
        console.log(e);
        res.status(403).send(`Cannot create`);
      }
})
module.exports = router;
