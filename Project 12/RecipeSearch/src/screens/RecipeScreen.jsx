import { useState, useEffect } from 'react';
import axios from 'axios';
import { RecipeCard } from '../components';

const RecipeScreen = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('cake'); // Default search term is 'cake'
    const [loading, setLoading] = useState(false); // State to track loading

    // Fetch the default recipe when the page loads
    useEffect(() => {
        handleSearch(); // Fetch cake recipe on initial load
    }, []);

    const handleSearch = async () => {
        if (search.trim() === '') return;
        setLoading(true); // Start loader
        try {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
            setData(response.data.meals || []); // Set data or empty array if no meals found
        } catch (error) {
            console.error("There was an error fetching the data:", error);
        } finally {
            setLoading(false); // Stop loader
        }
    };

    const handleInput = (e) => {
        setSearch(e.target.value); // Update search term as user types
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSearch(); // Trigger search on "Enter" key press
        }
    };

    return (
        <>
            <div className="flex justify-center p-4">
                <input
                    type="text"
                    placeholder="Search for a recipe.. eg: Cake"
                    className="input input-bordered w-full max-w-xs"
                    onChange={handleInput}
                    onKeyDown={handleKeyDown} // Trigger search on "Enter"
                />
                <button
                    className={`btn btn-warning ml-2 hover:text-white ${loading ? 'btn-loading' : ''}`}
                    onClick={handleSearch}
                    disabled={loading} // Disable button while loading
                >
                    {loading ? 'Loading' : 'Search'}
                </button>
            </div>

            {/* Loader Message */}
            {loading && <p className="text-center mt-4">Loading recipes...</p>}

            {/* Recipe Cards */}
            {!loading && data && data.length > 0 ? (
                <RecipeCard detail={data} />
            ) : !loading && (
                <p className="text-center mt-4">No recipes found. Try searching for something else.</p>
            )}
        </>
    );
};

export default RecipeScreen;
