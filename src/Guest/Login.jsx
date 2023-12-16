import React, { useEffect, useState } from 'react';
import LMS1 from '../assets/LMS1.jpg';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        // Validate and handle login logic
        if (!email) {
            setEmailError('Email is required.');
        } else {
            setEmailError('');
        }

        if (!password) {
            setPasswordError('Password is required.');
        } else {
            setPasswordError('');
        }

        if (email && password) {
            try {
              const response = await axios.post('https://calm-cyan-sawfish-hose.cyclic.app/userapi/login', {
                email,
                password,
              });
               
              console.log(response.data);
            } catch (error) {
              console.error('Error during login:', error);
            }
          }
    };
    // useEffect(() => {axios.get('http://localhost:4000/userapi/allusers').then(response => console.log(response.data))}, [])
    //     useEffect(() => {axios.post('http://localhost:4000/userapi/login', {response: {email, password}}).then(response => console.log(response.data))}, [])
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 z-10">
            <div className="max-w-400 mx-auto p-10 bg-white shadow-md rounded-xl">
                <div className="max-w-md w-full space-y-8">
                    <div className="flex justify-center">
                        <img
                            className="h-16 w-auto"
                            src={LMS1}
                            alt="LMS Portal"
                        />
                    </div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Log in to your account</h2>

                    <form className="mt-8 space-y-6" onSubmit={handleLogin}>
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${emailError
                                            ? 'border-red-500'
                                            : 'border-gray-300'
                                        } placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm`}
                                    placeholder="Email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    onFocus={() => setEmailError('')}
                                />
                                {emailError && (
                                    <p className="mt-2 text-sm text-red-500">
                                        {emailError}
                                    </p>
                                )}
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${passwordError
                                            ? 'border-red-500'
                                            : 'border-gray-300'
                                        } placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm`}
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    onFocus={() => setPasswordError('')}
                                />
                                {passwordError && (
                                    <p className="mt-2 text-sm text-red-500">
                                        {passwordError}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                    Remember me
                                </label> 
                            </div>

                            <div className="text-sm">
                                <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                                    Forgot your password?
                                </a>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                
                                className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-full text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mt-6"
                            >
                                Log in
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
