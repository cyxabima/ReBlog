import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'



export default function Protected({
    children,
    authentication = true
}) {
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector((state) => state.status)
    const Navigate = useNavigate()
    useEffect(() => {

        if (authentication && authStatus != authentication) {
            Navigate("/login")
        }
        else if (!authentication && authStatus != authentication) { // for the scenario where we do not want authenticated user to go there for eg login form here. in this case authentication == false
            Navigate("/")
        }

        setLoader(false)

    }, [authentication, authStatus, Navigate])


    return (
        loader ? <h1>loading...</h1> : <>{children}</>
    )
}
