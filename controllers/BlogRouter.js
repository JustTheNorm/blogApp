const express = require(`express`);
const BlogModel = require(`../models/BlogSchema`);

const router = express.Router();

router.use((req,res,next)=>{
    if(req.session.loggedIn){
        next()
    }
    else{
        res.redirect(`/user/signin`)
    }
})

//GET all blogs
router.get(`/`, async (req, res) => {
    try{
        const blogs = await BlogModel.find({})
        res.render(`blog/Blogs`, {BlogModel:blogs, loggedInUser: req.session.username})
    }
    catch(e){
        console.log(e);
        res.status(403).send(`Cannot create`);
    }
});
router.get('/new', (req, res) => {
    res.render('blog/New')
})


//GET: blog by ID
router.get(`/:id`, async (req, res) => {
    try{
     
        const blogs = await BlogModel.findById(req.params.id)
        res.render(`blog/Show`, {BlogModel:blogs})
    }
    catch(e){
        console.log(e);
        res.status(403).send(`Cannot create`);
    }
});

router.get(`/:id/edit`, async (req, res) => {
    try{
     
        const blogs = await BlogModel.findById(req.params.id)
        res.render(`blog/edit`, {BlogModel:blogs})
    }
    catch(e){
        console.log(e);
        res.status(403).send(`Cannot create`);
    }
})


//POST: Create new Blog
router.post('/', async (req, res) => {
    // ^ Try-Catch Method
    try {
        req.body.author = req.session.username
        await BlogModel.create(req.body)   
        res.redirect('/blog')
        // res.send('Blog successfully created!')
    } catch(error) {
        console.log(error)
        res.status(403).send('Cannot create')

    }

})

//PUT: Update By ID
router.put(`/:id`, async (req,res)=>{
    try{
        const updatedBlog = await BlogModel.findByIdAndUpdate(req.params.id, req.body, {'returnDocument' : "after"})
        res.redirect(`/blog`)
    }catch (e) {
        console.log(e);
        res.status(403).send(`Cannot PUT`);
      }
})

//DELETE: Remove by ID
router.delete(`/:id`, async (req,res)=>{
    try{
        const deletedBlog = await BlogModel.findByIdAndRemove(req.params.id)
        console.log(deletedBlog)
        
        res.redirect('/blog')
        
        
    }catch (e) {
        console.log(e);
        res.status(403).send(`Cannot create`);
      }
})

module.exports = router;
