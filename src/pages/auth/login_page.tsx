import React, {useContext, useState} from "react";
import {UserContext} from "../../providers/user_provider";
import './login_page.css';
import {login} from '../../repositories/auth_repository';
import showErrorPopup from "../../utils/show_error_popup";
import TextButton from "../../components/buttons/text_button/text_button";
import {useNavigate} from "react-router-dom";
import {routesNames} from "../../routing/app_routes";

export default function LoginPage() {
    const navigate = useNavigate();
    const {isAuth, setAuth} = useContext(UserContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleLogin = async () => {
        try {
            await login({username: username, password: password});
            setAuth(true);
        } catch (error) {
            let errorMessage = 'Wrong login or password';

            showErrorPopup(errorMessage);
        }
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleLogin();
    };

    const navigateToRegister = () => {
        navigate(routesNames.register);
    };

    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100vh'}}>
            <form className="login-form" onSubmit={handleSubmit} style={{display: 'flex'}}>
               <div style={{fontSize: '32px', paddingBottom: '12px'}}>
                   Login
               </div>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" value={username} onChange={handleUsernameChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" value={password} onChange={handlePasswordChange}/>
                </div>
                <button type="submit">Login</button>
                <TextButton onClick={ () => navigateToRegister()}>
                    Dont have an account? Tap to register
                </TextButton>
            </form>
        </div>


    );
}