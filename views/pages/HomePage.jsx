const React = require('react') 
const NavBar = require('../components/Navbar')   
class HomePage extends React.Component {     
    render(){     
        const { loggedInUser} = this.props    
        return(
        <div>                         
            <head>             
                <link rel="stylesheet" href="/CSS/app.css"/>             
                </head>              
                <NavBar loggedInUser={loggedInUser}/>          
                <h1>Welcome to my Blog App</h1>              
                {/* <img src='../../public/bg.png' width="300px" height="300px"/>           */}
                </div>
                )     
           } 
    } 

module.exports = HomePage