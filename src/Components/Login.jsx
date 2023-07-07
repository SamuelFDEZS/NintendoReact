import { useState } from 'react';
import {useLocation} from 'react-router-dom';

import '../Login.css';
import { FaArrowLeft } from "react-icons/fa"
import { FaArrowRight } from 'react-icons/fa';
const Login = ({loginUser, error}) => {
    const initial_state = {
        email: "",
        password: ""
    }
    const location = useLocation()
    const {state} = location

    const [formData, setFormData] = useState(initial_state)

    const handleChange = event => {
        const input = document.querySelectorAll(".name")
        Array.from(input).map((element) => element.classList.toggle("has-value", event.target.value))
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        console.log(formData)
    }

    const submitHandler = (event) => {
        event.preventDefault();
        console.log("Se han enviado los datos")
        loginUser(formData, state ? state.prevRoute : null)
        

    }

    const nextHandler = (event) => {
        const aside = document.querySelector(".login-email");
        aside.classList.remove("visible")
    }

    const backHandler = event => {
        const aside = document.querySelector(".login-email");
        aside.classList.add("visible")
    }
    return (
        <form onSubmit={submitHandler}>
            <aside className="login login-password">
                <button type ="button" onClick={backHandler} className="back"><FaArrowLeft /></button>
                <h2 className="password-title">Login</h2>
                <p className="welcome-message">Welcome back Joe!</p>

                <div className="input-box">
                    <input type="password" name="password" className="name" autoComplete="off" onInput={handleChange} value={formData.password} />
                    <label htmlFor='password' className="div-label">Password</label>
                </div>

                <div className='error'>{error}</div>
                <button type ="submit" className="button login-button">Login</button>

            </aside>

            <aside className="login login-email visible">
                <h2 className="password-title">Login</h2>
                <p className="welcome-message">Welcome back Joe!</p>

                <div className="input-box">
                    <input type="email" name="email" className="name" autoComplete="off" onInput={handleChange} value={formData.email} />
                    <label htmlFor='email' className="div-label">Email</label>
                </div>
                <button type = "button" onClick={nextHandler} className="button next-button">Next <FaArrowRight /></button>

            </aside>
            <div className="background"></div>
        </form>
    )

}

export default Login;