const express = require(`express`);
const blogModel = require(`../models/BlogSchema`);

const router = express.Router();

//GET all blogs
router.get(`/`, async (req, res) => {
    try{
        // const blogs = await BlogModel.find({})
        res.render(`blog/Blogs`, {blogModel:blogModel})
    }
    catch(e){
        console.log(e);
        res.status(403).send(`Cannot create`);
    }
});

//GET: blog by ID
router.get(`/:id`, async (req, res) => {
    try{
        const blogs = await blogModel.findById(req.params.id)
        res.send(blogs)
    }
    catch(e){
        console.log(e);
        res.status(403).send(`Cannot create`);
    }
});

//POST: Create new Blog
router.post(`/`, async (req, res) => {
  try {
    const newBlog = await blogModel.create(req.body);
    // res.send(newBlog);
    res.render('blog/blogs')
  } catch (e) {
    console.log(e);
    res.status(403).send(`Cannot create`);
  }

  // console.log(req.body)
  // BlogModel.create(req.body)
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
        const updatedBlog = await BlogModel.findByIdAndUpdate(req.params.id, req.body, {'returnDocument' : "after"})
        res.send(updatedBlog)
    }catch (e) {
        console.log(e);
        res.status(403).send(`Cannot create`);
      }
})

//DELETE: Remove by ID
router.delete(`/:id`, async (req,res)=>{
    try{
        const deletedBlog = await BlogModel.findByIdAndRemove(req.params.id)
        console.log(deletedBlog)
        res.send(`Blog Deleted`)
    }catch (e) {
        console.log(e);
        res.status(403).send(`Cannot create`);
      }
})
module.exports = router;
