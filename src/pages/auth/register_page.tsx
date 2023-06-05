import {useNavigate} from "react-router-dom";
import React, {useContext, useState} from "react";
import {UserContext} from "../../providers/user_provider";
import {register} from "../../repositories/auth_repository";
import showErrorPopup from "../../utils/show_error_popup";
import {routesNames} from "../../routing/app_routes";
import TextButton from "../../components/buttons/text_button/text_button";

export default function RegisterPage() {
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

    const handleRegister = async () => {
        try {
            await register({username: username, password: password});
            setAuth(true);
        } catch (error) {
            let errorMessage = 'Error occured during registration';

            showErrorPopup(errorMessage);
        }
    }
    const handleSubmit1 = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleRegister();
    };

    const navigateToLogin = () => {
        navigate(routesNames.login);
    };

    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100vh'}}>
            <form className="login-form" onSubmit={handleSubmit1} style={{display: 'flex'}}>
                <div style={{fontSize: '32px', paddingBottom: '12px'}}>
                    Register
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
                <TextButton onClick={ () => navigateToLogin()}>
                    Have an account? Tap to login
                </TextButton>
            </form>
        </div>


    );
}