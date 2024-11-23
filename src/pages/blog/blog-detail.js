import React, { useState, useEffect } from 'react'
import TemplateOne from '../../components/blog/template-one'
import { getBlogById } from '../../services/blog'
import { useParams } from 'react-router-dom'
import Navbar from '../../components/base/navbar'

const BlogDetail = () => {

    const { id } = useParams()

    const [blog, setBlog] = useState(null)

    useEffect(() => {
        window.scrollTo(0, 0)
        getBlogDetail()
    }, [])


    const getBlogDetail = async () => {
        try {
            const response = await getBlogById(id)
            setBlog(response.data.blog)
        } catch (error) {
            console.error("Error fetching blog:", error)
        }
    }


    return (
        <div>
            <div className="p-8 max-w-7xl mx-auto ">
                <TemplateOne config={blog} />
            </div>
        </div>
    )
}

export default BlogDetail