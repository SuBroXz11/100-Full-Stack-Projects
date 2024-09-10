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
            setBlog(data[id]); // Find the specific blog by id
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
                    <img src={blog.urlToImage || 'https://via.placeholder.com/150'} alt={blog.title} className="w-full h-96 object-cover" />
                </figure>
                <div className="card-body">
                    <h1 className="card-title text-4xl font-bold">{blog.title}</h1>
                    <p className="text-gray-500 mb-2">By: <span className="font-semibold">{blog.author || 'Unknown'}</span></p>
                    <p className="text-gray-500 mb-2">Published on: {new Date(blog.publishedAt).toLocaleDateString()}</p>
                    <p className="text-gray-500 mb-2">Source: <a href={blog.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">{blog.source.name}</a></p>

                    {/* Description */}
                    <p className="mt-4 text-lg">{blog.description || 'No description available'}</p>

                    {/* Content */}
                    <p className="mt-6">{blog.content || 'No content available'}</p>
                </div>
            </div>
        </div>
    );
};

export default BlogDetailScreen;
