const SignIn = () => {
    return (
        <div  className="SignIn">
            <div className="login">
                <div className="login-box">
                    <p className="subtitle">Sign in to google account</p>
                    <form>
                        <div className="form">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email"placeholder="Enter your email" /> 
                        </div>
                        <div className="form">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" placeholder="Enter your password" required/>
                            <button type="submit" className="btn">Sign in</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default SignIn;