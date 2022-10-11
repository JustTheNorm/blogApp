const express = require(`express`);
const userModel = require(`../models/UserSchema`);

const router = express.Router();

//GET all blogs
router.get(`/`, async (req, res) => {
    try{
        const users = await userModel.find({})
        res.send(users)
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
router.post(`/`, async (req, res) => {
  try {
    const newUser = await userModel.create(req.body);
    res.send(newUser);
  } catch (e) {
    console.log(e);
    res.status(403).send(`Cannot create`);
  }

  // console.log(req.body)
  // userModel.create(req.body)
  // .then(data =>{
  //     console.log(data)
  //     res.send(data)
  // })
  // .catch(error =>{
  //     console.log(error)
  //     res.status(403).send(`Cannot create`)
  // })
});

//PuT: Update By ID
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
