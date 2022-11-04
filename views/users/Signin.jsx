const React = require('react')
const Navbar = require('../components/Navbar')


class Signin extends React.Component{
    render(){
        return(
            <div>
                <head>
                <link rel="stylesheet" href="/CSS/app.css"/>    
                </head>
                <Navbar/>
                <h1>SignIn</h1>

                <form action="/user/signin" method="post">
                    <fieldset>
                        <legend>Sign In</legend>
                        <label htmlFor="username" >Username</label>
                        <br/>
                        <input type="text" name="username" required value="123"/>
                        <br/>
                        <label htmlFor="password">Password</label>
                        <br/>
                        <input type="password" name="password" required value="123"/>
                        <br/>
                        {/* <label htmlFor="email">Email</label>
                        <br/>
                        <input type="text" name="email" required />
                        <br/> */}
                        <input type="submit" value="Sign In"/>
                </fieldset>
                </form>
                <div>
                    <p>
                        Don't have an Account? <a href="/user/signup">Sign Up</a>{" "}  
                    </p>
                </div>
            </div>
        )
    }
}


module.exports = Signin