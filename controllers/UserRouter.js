const express = require(`express`);
const userModel = require(`../models/UserSchema`);
const bcrypt = require(`bcryptjs`)

const router = express.Router();

//GET all blogs
router.get(`/`, async (req, res) => {
    try{
        const users = await userModel.find({})
        res.render(`users/Users`)
    }
    catch(e){
        console.log(e);
        res.status(403).send(`Cannot create`);
    }
});


router.get(`/signup`, (req,res)=>{
    res.render(`users/Signup`)
})

router.get(`/signin`, (req,res)=>{
    res.render(`users/Signin` )
})

router.post(`/signin`, async (req,res) =>{
    try{

        //search for user
        const user = await userModel.findOne({username: req.body.username})
        if(!user) return res.send(`Please check your email and password!`)

        const decodedPW = await bcrypt.compare(req.body.password, user.password)

        if(!decodedPW) return res.send(`Please check your email and password!`)
        req.session.username = user.username
        req.session.loggedIn = true
        
        
        res.redirect(`/blog`)

    }
    catch(e){

    }
})

// * Signout User & destroy session
router.get('/signout', (req, res) => {
    try {
        req.session.destroy()
        res.redirect('/')
        
    } catch (error) {
        console.log(error)
    }
})

//POST: Create new user
router.post("/signup", async (req, res) => {
    try {
        // check if user exist
        const userAlreadyExist = await userModel.find({ email: req.body.email });
        
        
      // if there is a object inside of the array
      if (userAlreadyExist[0]) {
        return res.send("User Already exist!");
        
      }
      //SALT securing the HASH
      const SALT = await bcrypt.genSalt(10) 
      // re=assigning password then hashing
      req.body.password = await bcrypt.hash(req.body.password, SALT) 
  
      // Create a new user
      const user = await userModel.create(req.body);
      res.redirect(`/user/signin`)
    // res.redirect(`/user/signin`)
    } catch (error) {
      console.log(error);
      res.status(403).send("Cannot POST");
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
