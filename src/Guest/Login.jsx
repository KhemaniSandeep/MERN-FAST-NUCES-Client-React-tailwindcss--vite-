

import React, { useEffect, useState } from 'react';
import LMS1 from '../assets/LMS1.jpg';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [loading, setLoading] = useState(false)

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
            setLoading(true)
            try {
              const response = await axios.post('https://calm-cyan-sawfish-hose.cyclic.app/userapi/login', {
                email,
                password,
              });
               
              console.log(response.data);
            } catch (error) {
              console.error('Error during login:', error);
            }
            finally{
                setLoading(false)
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
                                onClick={handleLogin}
                                disabled={loading}
                                className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-full text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-blue-500 mt-6"
                            >
                                 {loading ? (
                                <>
                                <svg
                                    aria-hidden="true"
                                    role="status"
                                    className=" w-4 h-4 me-3 text-gray-200 animate-spin white:text-gray-600 rounded"
                                    viewBox="0 0 100 101"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                     d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                      fill="currentColor"
                                    />
                                    <path
                                     d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                        fill="#1C64F2"
                                    />
                                </svg>
                                
                                    {/* Loading... */}
                                 </>
                                    ):('Log in')}
                                
                                
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;



// import React, { useEffect, useState } from 'react';
// import LMS1 from '../assets/LMS1.jpg';
// import axios from 'axios';
// import { response } from 'express';

// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [emailError, setEmailError] = useState('');
//     const [passwordError, setPasswordError] = useState('');
//     // const [loading,setLoading]=useState(false)

//     const handleLogin = async (e) => {
//         e.preventDefault();
      

//         // Validate and handle login logic
//         if (!email) {
//             setEmailError('Email is required.');
//         } else {
//             setEmailError('');
//         }

//         if (!password) {
//             setPasswordError('Password is required.');
//         } else {
//             setPasswordError('');
//         }

//         if (email && password) {
//             try {
//               const response = await axios.post('https://calm-cyan-sawfish-hose.cyclic.app/userapi/login', {
//                 email,
//                 password,
//               });
               
              
//             //   if (!response.data.successful){
            
//             //     setLoading(true)
//             // } else {
//             //     setLoading(false)
//             // }
//             console.log(response.data);
//             } catch (error) {
//               console.error('Error during login:', error);
//             }
//             finally{
//                 setLoading(false)
//             }
//           }
//     };
//     // useEffect(() => {axios.get('http://localhost:4000/userapi/allusers').then(response => console.log(response.data))}, [])
//     //     useEffect(() => {axios.post('http://localhost:4000/userapi/login', {response: {email, password}}).then(response => console.log(response.data))}, [])
//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 z-10">
//             <div className="max-w-400 mx-auto p-10 bg-white shadow-md rounded-xl">
//                 <div className="max-w-md w-full space-y-8">
//                     <div className="flex justify-center">
//                         <img
//                             className="h-16 w-auto"
//                             src={LMS1}
//                             alt="LMS Portal"
//                         />
//                     </div>
//                     <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Log in to your account</h2>

//                     <form className="mt-8 space-y-6" onSubmit={handleLogin}>
//                         <input type="hidden" name="remember" defaultValue="true" />
//                         <div className="rounded-md shadow-sm -space-y-px">
//                             <div>
//                                 <label htmlFor="email-address" className="sr-only">
//                                     Email address
//                                 </label>
//                                 <input
//                                     id="email-address"
//                                     name="email"
//                                     type="email"
//                                     autoComplete="email"
//                                     required
//                                     className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${emailError
//                                             ? 'border-red-500'
//                                             : 'border-gray-300'
//                                         } placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm`}
//                                     placeholder="Email address"
//                                     value={email}
//                                     onChange={(e) => setEmail(e.target.value)}
//                                     onFocus={() => setEmailError('')}
//                                 />
//                                 {emailError && (
//                                     <p className="mt-2 text-sm text-red-500">
//                                         {emailError}
//                                     </p>
//                                 )}
//                             </div>
//                             <div>
//                                 <label htmlFor="password" className="sr-only">
//                                     Password
//                                 </label>
//                                 <input
//                                     id="password"
//                                     name="password"
//                                     type="password"
//                                     autoComplete="current-password"
//                                     required
//                                     className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${passwordError
//                                             ? 'border-red-500'
//                                             : 'border-gray-300'
//                                         } placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm`}
//                                     placeholder="Password"
//                                     value={password}
//                                     onChange={(e) => setPassword(e.target.value)}
//                                     onFocus={() => setPasswordError('')}
//                                 />
//                                 {passwordError && (
//                                     <p className="mt-2 text-sm text-red-500">
//                                         {passwordError}
//                                     </p>
//                                 )}
//                             </div>
//                         </div>

//                         <div className="flex items-center justify-between">
//                             <div className="flex items-center">
//                                 <input
//                                     id="remember-me"
//                                     name="remember-me"
//                                     type="checkbox"
//                                     className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
//                                 />
//                                 <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
//                                     Remember me
//                                 </label> 
//                             </div>

//                             <div className="text-sm">
//                                 <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
//                                     Forgot your password?
//                                 </a>
//                             </div>
//                         </div>

//                         <div>
//                             <button
//                                 type="submit"
//                                 // onSubmit={handleLogin}
//                                 className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-full text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mt-6"
//                                 // disabled={loading}
//                             >
//                             Log in
                                
//                                 {/* {loading && ( 
//                                 //     <button
//                                 //     disabled=""
//                                 //     type="button"
//                                 //     className="py-2.5 px-5 me-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center"
//                                 //   >
                                
//                                 <>
//                                     <svg
//                                       aria-hidden="true"
//                                       role="status"
//                                       className="inline w-4 h-4 me-3 text-gray-200 animate-spin dark:text-gray-600"
//                                       viewBox="0 0 100 101"
//                                       fill="none"
//                                       xmlns="http://www.w3.org/2000/svg"
//                                     >
//                                       <path
//                                         d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
//                                         fill="currentColor"
//                                       />
//                                       <path
//                                         d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
//                                         fill="#1C64F2"
//                                       />
//                                     </svg>
//                                     Loading...
//                                     </>
//                                 ) 
//                                 //   </button>
//                                 }
//                                 {!loading && 'Log in'} */}
                                  
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;
