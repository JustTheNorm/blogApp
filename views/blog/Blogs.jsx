const React = require("react");
const NavBar = require('../components/Navbar')   

class Blogs extends React.Component {
  render() {
    const {BlogModel} = this.props
    console.log(BlogModel)
    return (
      <div>
        <head>
          <link rel="stylesheet" href="/CSS/app.css"/>    
        </head>
        <NavBar/> 
        <h1>Blogs</h1>
        <div>
            {BlogModel.map((blog, idx)=>(
              <div>
                <h2><a href={`/blog/${blog._id}`}>{blog.title}</a></h2> 
                <body>{blog.body}</body>
                <h3>Written by: {blog.author}</h3>
                <br/>
                <form action={`/blog/${blog._id}?_method=DELETE`} method='POST'>
                  <input type='submit' value='Delete' />
                </form>
                <a href={`/blog/${blog._id}/edit`}><button>Edit</button></a>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
      justifyContent: "center"
  }
}

module.exports = Blogs

