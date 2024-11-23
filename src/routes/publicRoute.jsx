import React from 'react'
import { Outlet } from 'react-router-dom'
import FooterLanding from '../components/base/landing/footer'
import Navbar from '../components/base/navbar'

const PublicRoute = () => {
    return (
        <div>
            <Navbar />
            <div>
                <Outlet />
            </div>
            <FooterLanding />
        </div>
    )
}

export default PublicRoute