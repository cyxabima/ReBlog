import React from 'react'
import { useDispatch } from 'react-redux'
import authService from "../../appwrite/AuthService"
import { logout } from "../../store/authSlice"


function LogoutBtn() {
    const dispatch = useDispatch()
    const LogoutHandler = () => {
        authService.logout()
            .then(() => dispatch(logout()))
    }

    return (
        <button className='inline-block px-6 py-2 duration-200
        bg-rose-400 rounded-full hover:cursor-pointer hover:bg-rose-500' onClick={LogoutHandler}>
            Logout
        </button>
    )
}

export default LogoutBtn