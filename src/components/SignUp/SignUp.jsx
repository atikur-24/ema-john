import React, { useContext, useState } from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const SignUp = () => {
    const [error, setError] = useState('')
    const [showPassword, setShowPassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState(false);
    const { createUser } = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        setError('');

        if(password !== confirm) {
            setError('Your password did not match')
            return
        }
        else if(password.length < 6) {
            setError('Password must be 6 characters or longer')
            return
        }
        
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
            })
            .catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage);
                setError(errorMessage)
            })

        console.log(email, password, confirm);
    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className="from-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required />
                </div>
                <div className="from-control">
                    <label htmlFor="password">Password</label>
                    <input type={showPassword ? "text" : "password"} name="password" required />
                <p className='show-password' onClick={ ()=> setShowPassword(!showPassword) }>
                {
                    showPassword ? <small>Hide password</small> : <small> Show password</small>
                }
                </p>
                </div>
                <div className="from-control">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type={confirmPassword ? "text" : "password"} name="confirm" required />
                <p className='show-password' onClick={ ()=> setConfirmPassword(!confirmPassword) }>
                {
                    confirmPassword ? <small>Hide password</small> : <small> Show password</small>
                }
                </p>
                </div>
                <input className='btn-submit' type="submit" value="Sign Up" />
            </form>
            <p className='route-text'> <small>Already have an account? <Link to='/login' className='change-route-text'>Login</Link></small> </p>
            <p className='error-text'> <small>{error}</small> </p>
        </div>
    );
};

export default SignUp;