const React = require('react');
const NavBar = require('../components/Navbar')  

class Show extends React.Component {
    render() {
        const { BlogModel } = this.props
        return (
            <div>
                <head>
                <link rel="stylesheet" href="/CSS/app.css"/>    
                </head>
                <NavBar/> 
                <h1>Blogs Show Page</h1>
                <div  style={styles.container}>
                    <h2>{BlogModel.title}</h2>
                    <h3>{BlogModel.body}</h3> 
                    <h3>Written by: {BlogModel.author}</h3>
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