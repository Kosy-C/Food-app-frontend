import React from 'react'

import { useLocation, Navigate } from "react-router-dom";

export const ProtectAdminRoute = ({children}) => {
    const location = useLocation()
    const isAuthenticated = localStorage.getItem('signature')
    const userRole = localStorage.getItem('role')

    if(!isAuthenticated ||userRole ==="user" ||  userRole ==="vendor"){
        return (
            <Navigate to="/login" state={{from:location} }/>
        )
    }
    return children
}

export const ProtectVendorRoute = ({children}) => {
    const location = useLocation()
    const isAuthenticated = localStorage.getItem('signature')
    const userRole = localStorage.getItem('role')

      
    if(!isAuthenticated || userRole ==="admin" ||  userRole ==="superadmin" || userRole ==="user"){
        return (
            <Navigate to="/login" state={{from:location} }/>
        )
    }
    return children
}


//useLocation is needed bcos it takes note of the page you are. It automatically gives you the path you are, It'll tell you the url you're on, on that page. 