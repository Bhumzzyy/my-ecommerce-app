import React from 'react'

const Login = ({openSignUp}) => {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <form>
                <div className="mb-4">
                    <label className="block text-gray-700">Email</label>
                    <input type="email" className="w-full px-3 py-2 border" placeholder='Enter Email' />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Password</label>
                    <input type="password" className="w-full px-3 py-2 border" placeholder='Enter Password' />
                </div>
                <div className="mb-4 flex items-center justify-between">
                    <label className="inline-flex items-center">
                        <input type="checkbox" className="form-checkbox" />
                        <span className="ml-2 text-gray-700 cursor-pointer">Remember me</span>
                    </label>
                    <a href="#" className="text-red-800 cursor-pointer">Forgot password?</a>
                </div>
                <div className="mb-4">
                    <button type="submit" className="w-full bg-red-600 text-white py-2 cursor-pointer">Login</button>
                </div>
            </form>
            <div className="text-center">
                <span className="text-gray-700">Don't have an account?</span>
                <button className="text-red-800 cursor-pointer"
                onClick={openSignUp}>&nbsp;Sign Up</button>
            </div>
        </div>
    )
}
export default Login