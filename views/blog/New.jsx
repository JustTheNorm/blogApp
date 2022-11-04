const React = require('react')
const NavBar = require('../components/Navbar')   


class New extends React.Component {
    render(){
        const { loggedInUser} = this.props
        return(
            <div>
                <head>
                <link rel="stylesheet" href="/CSS/app.css"/>    
                </head>
                <NavBar loggedInUser={loggedInUser}/> 
                <h1>Create New Blog</h1>
                <form action='/blog' method='POST' style={{display: `flex`, justifyContent: `center`, alignItems: `center`, flexDirection: `column`}}>
                     title: <input type='text' name='title'/> 
                     <br />    
                     banner img: <input type="text" name="image"/>
                     <br/>
                     {/* author: <input type='text' name='author'/>
                     <br />         */}
                     body: <textarea name="body" rows="15" cols="50"/>
                     <br />
                     <input type='submit' value='Create new post!'/>
                     
                </form>
            </div>
        )
    }
}

const styles = {
    container: {
        justifyContent: "center"
    }
}

module.exports = New
