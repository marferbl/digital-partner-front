import React from 'react'
import { Link } from 'react-router-dom'

const BlogList = ({ blogs }) => {
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogs.map((blog, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-md rounded-lg overflow-hidden"
                    >
                        {blog.imageLinks[0] && (
                            <img
                                src={blog.imageLinks[0]}
                                alt="Blog Cover"
                                className="w-full h-48 object-cover"
                            />
                        )}
                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                            <p className="text-gray-700 mb-4">{blog.subtitle}</p>
                            <Link to={`/blog/${blog._id}`} className="bg-blue-500 text-white px-4 py-2 rounded">Leer más</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BlogList