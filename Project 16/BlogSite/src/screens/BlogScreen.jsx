import { useState, useEffect } from 'react';
import axios from 'axios';
import { Footer, Hero, Navbar } from "../components"

const BlogScreen = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false); // State to track loading
    const getBlogs = async () => {
        setLoading(true); // Start loader
        try {
            const response = await axios.get(`https://newsapi.org/v2/everything?domains=wsj.com&apiKey=${import.meta.env.VITE_API_KEY}`);
            setData(response.data.articles || []); // Set data or empty array if no meals found
            console.log(data);

        } catch (error) {
            console.error("There was an error fetching the data:", error);
        } finally {
            setLoading(false); // Stop loader
        }
    };
    useEffect(() => {
        getBlogs();
    }, [])
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <div className="flex-grow">
                    <Hero />
                </div>
                <Footer />
            </div>

        </>
    )
}

export default BlogScreen
