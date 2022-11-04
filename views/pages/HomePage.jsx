const React = require('react') 
const NavBar = require('../components/Navbar')   
class HomePage extends React.Component {     
    render(){     
        const { BlogModel, loggedInUser} = this.props   
         

        return(
        <div>                         
            <head>             
                <link rel="stylesheet" href="/CSS/app.css"/>             
                </head>              
                <NavBar loggedInUser={loggedInUser}/>          
                <h1>N.P Blogs</h1>              
                {/* <img src='../../public/bg.png' width="300px" height="300px"/>           */}
                {/* Recently submitted <br/> */}
                {/* {BlogModel[0].title} */}

                </div>
                )     
           } 
    } 

module.exports = HomePage