const React = require("react");
const NavBar = require('../components/Navbar')   

class Blogs extends React.Component {
  render() {
    const {BlogModel, loggedInUser} = this.props
    const date = new Date(BlogModel.createdAt)
    return (
      <div>
        <head>
          <link rel="stylesheet" href="/CSS/app.css"/>    
        </head>
        <NavBar loggedInUser={loggedInUser}/> 
        <h1>Blogs</h1>
        
        <div style={{display: `flex`, justifyContent: `center`, flexDirection: `column`, } }>
            {BlogModel.map((blog, idx)=>(
              <div>
                <h2><a href={`/blog/${blog._id}`}>{blog.title}</a></h2> 
                <body>{blog.body}</body>
                <h3>Written by: {blog.author}</h3>
                <br/>
                {}
                {blog.author === loggedInUser ? (
                <div>
                  
                  <a href={`/blog/${blog._id}/edit`}>Edit</a>
                  <form action={`/blog/${blog._id}?_method=DELETE`} method='POST'>
                  <input type='submit' value='Delete' />
                </form>
                </div>
              ) : null}
              
                
              </div>
            ))}
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
      // justifyContent: "center"
  }
}

module.exports = Blogs


