import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/base/navbar'

const PublicRoute = () => {
    return (
        <div>
            <Navbar />
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default PublicRoute