import React, { useState } from 'react';
import LMS1 from '../assets/LMS1.jpg';
import axios from 'axios';

const SignUp = () => {
    const [username, setUserName] = useState('');
    const [usernameError, setUserNameError] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [gender, setGender] = useState('');
    const [genderError, setGenderError] = useState('');
    const [error, setError] = useState('');

    const handleSignUp = async () => {

        // Validate and handle signup logic
        if (!username) {
            setUserNameError('Username is required.');
        } else {
            setUserNameError('');
        }

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
        if (!gender) {
            setGenderError('Select your gender.')
        } else {
            setGenderError('');

            // Perform signup logic
            if (username && email && password && gender) {
                try {
                    const result = await axios.post('https://calm-cyan-sawfish-hose.cyclic.app/userapi/signup', {
                        username,
                        email,
                        password,
                        gender,
                    });
                    console.log(result.data)
                } catch (error) {
                    console.error('Error', error)

                }
            } else {
                setError('Please fill in all required fields.');
            }
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-400 mx-auto p-10 bg-white shadow-md rounded-xl">
                <div className="max-w-md w-full space-y-8">

                    {/* Logo */}
                    <div className="flex justify-center">
                        <img
                            className="h-16 w-auto"
                            src={LMS1}
                            alt="LMS Portal"
                        />
                    </div>

                    <h2 className="text-3xl font-extrabold text-gray-900 text-center mt-4">Create a new account</h2>
                    <form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>

                        {/* Username */}
                        <div>
                            <label htmlFor="name" className="sr-only">
                                Username
                            </label>
                            <input
                                id="username"
                                name="username"
                                type="text"
                                autoComplete="username"
                                required
                                className={`appearance-none rounded-full relative block w-full px-3 py-2 border ${usernameError ? 'border-red-500' : 'border-gray-300'
                                    } placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm`}
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUserName(e.target.value)}
                                onFocus={() => setUserNameError('')}
                            />
                            {usernameError && (
                                <p className="mt-2 text-sm text-red-500">
                                    {usernameError}
                                </p>
                            )}
                        </div>

                        {/* Gendor Dropdown menu */}
                            
                            <div>
                            <label htmlFor="gender" className="sr-only">
                                Gender
                            </label>
                            <select
                                id="gender"
                                name="Gender"
                                type="text"
                                autoComplete="gender"
                                required
                                className={`appearance-none rounded-full relative block w-full px-3 py-2 border ${genderError
                                    ? 'border-red-500'
                                    : 'border-gray-300'
                                    } placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm`}
                                placeholder="Gender"
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                                onFocus={() => setGenderError('')}
                             >
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                                </select>
                            {genderError && (
                                <p className="mt-2 text-sm text-red-500">
                                    {genderError}
                                </p>
                            )}
                            </div>

                        {/* Email */}
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
                                className={`appearance-none rounded-full relative block w-full px-3 py-2 border ${emailError
                                    ? 'border-red-500'
                                    : 'border-gray-300'
                                    } placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm`}
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

                        {/* Password */}
                        <div>
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="new-password"
                                required
                                className={`appearance-none rounded-full relative block w-full px-3 py-2 border ${passwordError
                                    ? 'border-red-500'
                                    : 'border-gray-300'
                                    } placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm`}
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

                        {/* Error handling. */}
                        {error && (
                            <p className="mt-2 text-sm text-red-500" id="error-message">
                                {error}
                            </p>
                        )}

                        {/* Buttons */}
                        <div>
                            <button
                                type="button"
                                onClick={handleSignUp}
                                className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-full text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mt-6"
                            >
                                Sign up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
