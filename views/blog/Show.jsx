const React = require('react');
const NavBar = require('../components/Navbar')  

class Show extends React.Component {
    render() {
        const { BlogModel , loggedInUser} = this.props
        console.log(loggedInUser)
        const date = new Date(BlogModel.createdAt)
        console.log(BlogModel.createdAt)
        return (
            <div>
                <head>
                <link rel="stylesheet" href="/CSS/app.css"/>    
                </head>
                <NavBar loggedInUser={loggedInUser}/>  
                <h1 >{BlogModel.title}</h1>
                <img className='img' src={BlogModel.image}/>
                <div className='blogs' style={styles.container}>
                    <h2 className='blog-title'>{BlogModel.title}</h2>
                    <p className='blog-body'>{BlogModel.body}</p> 
                    <br/><br/><br/>
                    <h4 className='blog-subtitle'>Written by: {BlogModel.author}</h4>
                    <h6 className='blog-subtitle'>Blog Created: {date.toDateString()}</h6>
                    <a href={`/blog/`}><h4>Back</h4></a>

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

module.exports = Show