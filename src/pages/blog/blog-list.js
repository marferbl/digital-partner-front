import React, { useState, useEffect } from 'react';
import BlogList from '../../components/blog/blog-list';
import { getBlogs } from '../../services/blog' // Adjust the path based on your project structure
import Navbar from '../../components/base/navbar';

const BlogListPage = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        getBlogsList();
    }, []);

    const getBlogsList = async () => {
        try {
            const response = await getBlogs();
            setBlogs(response.data.blogs);
        } catch (error) {
            console.error("Error fetching blogs:", error);
        }
    };

    return (
        <div>

            <div className="p-4 max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">Blog de Digitalando</h2>
                <BlogList blogs={blogs} />
            </div>
        </div>
    );
};

export default BlogListPage;
