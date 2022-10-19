const React = require('react')

class Navbar extends React.Component {
    render() {
        const {loggedInUser} = this.props
        // console.log(loggedInUser)
        return(
            <nav style={styles.container}>
                { loggedInUser && <h6>{loggedInUser}</h6>}
                <a href='/'>Home</a>
                <a href='/blog'>Blogs</a>
                <a href='/blog/new'>Create New Blog</a>
                <a href='/user/signup'>Signin/up</a>
                { loggedInUser && <a href='/user/signout'>Signout</a>}
            </nav>
        )
    }
}
const styles = {
    container : {
        display:"flex",
        justifyContent: 'space-between',
        background: 'rgb(129, 91, 91)'
    }
}


module.exports = Navbar