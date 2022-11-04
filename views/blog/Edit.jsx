const React = require('react')
const NavBar = require('../components/Navbar')   


class Edit extends React.Component{
    render(){
        const {BlogModel, loggedInUser} = this.props
        return(
            <div>
                <head>
                <link rel="stylesheet" href="/CSS/app.css"/>    
                </head>
                <NavBar loggedInUser={loggedInUser}/> 
                <h1>Edit</h1>
                <form action={`/blog/${BlogModel._id}?_method=PUT`} method='POST'>
                     title: <input type='text' name='title' defaultValue={BlogModel.title}/> 
                     <br />    
                     author: <input type='text' name='author' defaultValue={BlogModel.author}/>
                     <br />   
                     image: <input type="text" name='image' defaultValue={BlogModel.image}/>
                     <br/>
                     body: <textarea name="body" rows="4" cols="50" defaultValue={BlogModel.body}/>
                     <br />
                     <input type='submit' value='Edit Post'/>
                     
                </form>
            </div>
        )
    }
}


module.exports = Edit