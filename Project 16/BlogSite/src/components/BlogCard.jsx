import React from 'react';
import { NavLink } from 'react-router-dom';

const BlogCard = ({ blogs }) => {
    return (
        <div className="container mx-auto p-4 py-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {blogs.map((blog, index) => (
                    <div key={index} className="card w-full bg-base-100 shadow-xl">
                        <figure>
                            <img src={blog.urlToImage || 'https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Gemini_SS.width-1300.jpg'} alt={blog.title} className="w-full h-48 object-cover" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{blog.title}</h2>
                            <p>{blog.description}</p>
                            <p className="text-sm text-gray-500">By: {blog.author}</p>
                            <p className="text-sm text-gray-500">Published at: {new Date(blog.publishedAt).toLocaleDateString()}</p>
                            <div className="card-actions justify-end">
                                <NavLink to={`/blog/${index}`} className="btn btn-primary text-white">
                                    Read More
                                </NavLink>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogCard;
