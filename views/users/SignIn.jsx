const React = require('react')
const Navbar = require('../components/Navbar')


class Signin extends React.Component{
    render(){
        return(
            <div>
                <Navbar/>
                <h1>SignIn</h1>

                <form action="/user/signin" method="post">
                    <fieldset>
                        <legend>Sign In</legend>
                        <label htmlFor="username">Username</label>
                        <br/>
                        <input type="text" name="username" required/>
                        <br/>
                        <label htmlFor="password">Password</label>
                        <br/>
                        <input type="text" name="password" required />
                        <br/>
                        {/* <label htmlFor="email">Email</label>
                        <br/>
                        <input type="text" name="email" required />
                        <br/> */}
                        <input type="submit" value="Sign In"/>
                </fieldset>
                </form>
            </div>
        )
    }
}


module.exports = Signin