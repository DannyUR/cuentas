import { useState } from 'react';
import './login.css';

export default function Login() {
    const [email, setEmail]= useState("danny@gmail.com")
    const [password, setPassword]= useState("123456")     

    const submit = async(e) => {
        e.preventDefault();
        try{
            const res = await fetch("http://localhost:8000/api/login",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body:JSON.stringify({
                    email:email, 
                    password:password
                })
            })
            const data = await res.json();
            console.log("RESPUESTA",data);
        }catch(err){
            console.log(err);
        }
    }
    
    return (
        <>
            {/* 
                Mueve estos enlaces a public/index.html dentro del <head>:

                <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet">
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css">
            */}

            <div className="container">
                <div className="d-flex justify-content-center h-100">
                    <div className="card">
                        <div className="card-header">
                            <h3>Sign In</h3>
                            <div className="d-flex justify-content-end social_icon">
                                <span><i className="fab fa-facebook-square"></i></span>
                                <span><i className="fab fa-google-plus-square"></i></span>
                                <span><i className="fab fa-twitter-square"></i></span>
                            </div>
                        </div>

                        <div className="card-body">
                            <form onSubmit={submit}>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="fas fa-user"></i>
                                        </span>
                                    </div>
                                    <input className="form-control" 
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        id="inputEmail" type='email' placeholder="name@example.com" />
                                </div>

                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="fas fa-key"></i>
                                        </span>
                                    </div>
                                    <input className="form-control" 
                                    value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        id="inputPassword" type='password' placeholder="password" />
                                </div>

                                <div className="row align-items-center remember">
                                    <input type="checkbox" /> Remember Me
                                </div>

                                <div className="form-group">
                                    <button type="submit" value="Login" className="btn float-right login_btn" >Login</button>
                                </div>
                            </form>
                        </div>

                        <div className="card-footer">
                            <div className="d-flex justify-content-center links">
                                Don't have an account? <a href="#">Sign Up</a>
                            </div>
                            <div className="d-flex justify-content-center">
                                <a href="#">Forgot your password?</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
