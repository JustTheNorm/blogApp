const React = require('react')


class Navbar extends React.Component {
    render() {
        return(
            <nav style={styles.container}>
                <a href='/'>Home</a>
                <a href='/blog'>Blogs</a>
                <a href='/blog/new'>Create New Blog</a>
                <a href='/user/signin'>Login</a>
                <a href='/user/signout'>Sign Out</a>
                
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