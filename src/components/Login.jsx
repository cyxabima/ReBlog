import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login as authLogin } from "../store/authSlice"
import { Button, Input, Logo } from "../components"
import { useDispatch } from 'react-redux'
import authService from '../appwrite/AuthService'
import { useForm } from 'react-hook-form'

// there are errors as ref is not utilized here 

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState(null);

    const login = async (data) => {
        setError("")
        console.log(data)
        try {

            const session = await authService.login(data);
            if (session) {
                const userData = await authService.getCurrentUser();
                console.log(userData);
                if (userData) dispatch(authLogin(userData)) // chance of error here
                navigate("/")
            }
        } catch (error) {
            setError(error)
        }
    }
    return (
        <div
            className='flex items-center justify-center w-full'
        >
            <div className={`mx-auto w-full max-w-lg bg-rose-50 rounded-xl p-10 border border-black/10`}>
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
                </p>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}


                <form onSubmit={handleSubmit(login)}
                    className='mt-8'>

                    <div className='space-y-5'>
                        <Input
                            label="Email: "
                            type="email"
                            placeholder="your Email Address"
                            {
                            ...register("email", {
                                required: true,
                                validate: {
                                    matchPattern: (value) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value) ||
                                        "Email Address must be valid"
                                }
                            })
                            } />


                        <Input
                            label="Password: "
                            type="password"
                            placeholder="Enter your password"
                            {...register("password", {
                                required: true
                            })}
                        />


                        <Button type='submit' className='bg-rose-500'>
                            Sign in
                        </Button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Login
