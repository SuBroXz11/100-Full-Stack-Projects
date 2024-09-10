import React, { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import axios from 'axios';

const BlogDetailScreen = () => {
    const { id } = useParams(); // Get the blog id from the URL
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(false);

    // Function to fetch blog data
    const getBlog = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`https://newsapi.org/v2/everything?domains=wsj.com&apiKey=${import.meta.env.VITE_API_KEY}`);
            const data = response.data.articles || [];
            // Find the specific blog by id
            setBlog(data[id]);
            console.log(blog);

        } catch (error) {
            console.error("Error fetching the blog data:", error);
        } finally {
            setLoading(false);
        }
    };

    // Fetch the blog data on component mount
    useEffect(() => {
        getBlog();
    }, [id]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!blog) {
        return <p>Blog not found</p>;
    }

    return (
        <div className="container mx-auto p-4">
            {/* Back to Home Button */}
            <div className="flex justify-end">
                <NavLink to="/" className="btn btn-outline btn-primary">
                    Back to Home
                </NavLink>
            </div>

            {/* Blog Content */}
            <div className="mt-4 card w-full bg-base-100 shadow-xl">
                <figure>
                    <img src={blog.urlToImage || 'https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Gemini_SS.width-1300.jpg'} alt={blog.title} className="w-full h-96 object-cover" />
                </figure>
                <div className="card-body">
                    <h1 className="card-title text-4xl font-bold">{blog.title}</h1>
                    <p className="text-gray-500">By: {blog.author}</p>
                    <p className="text-gray-500">Published at: {new Date(blog.publishedAt).toLocaleDateString()}</p>
                    <p className="mt-4">{blog.content}</p>
                </div>
            </div>
        </div>
    );
};

export default BlogDetailScreen;
