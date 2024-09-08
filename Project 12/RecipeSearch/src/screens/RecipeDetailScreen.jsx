import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, NavLink } from "react-router-dom";
import { Loader } from '../components';

const RecipeDetailScreen = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    const getInfo = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
            setData(response.data.meals || []);
        } catch (error) {
            console.error("There was an error fetching the data:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getInfo();
    }, [id]);

    // Set the document title to the name of the recipe
    useEffect(() => {
        if (data.length > 0) {
            document.title = data[0].strMeal;
        }
    }, [data]);

    if (loading) {
        return <div className="flex justify-center items-center h-screen bg-yellow-100"><Loader /></div>;
    }

    return (
        <div className="container mx-auto p-6 h-screen bg-yellow-50">

            {data.length > 0 ? (
                data.map((recipe) => (

                    <div key={recipe.idMeal} className="card lg:card-side bg-yellow-100 shadow-xl mb-8">
                        <figure className="lg:w-1/3">
                            <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-full h-auto rounded-lg" />
                        </figure>
                        <div className="card-body lg:w-2/3">
                            <h2 className="card-title text-2xl font-bold text-yellow-800">{recipe.strMeal}</h2>
                            <p><span className="font-semibold">Category:</span> {recipe.strCategory}</p>
                            <p><span className="font-semibold">Cuisine:</span> {recipe.strArea}</p>
                            <p className="font-semibold mt-4">Ingredients:</p>
                            <ul className="list-disc list-inside pl-5">
                                {Object.keys(recipe).filter(key => key.startsWith('strIngredient') && recipe[key]).map((ingredientKey, index) => (
                                    <li key={index}>{recipe[ingredientKey]} {recipe[`strMeasure${ingredientKey.slice(13)}`]}</li>
                                ))}
                            </ul>
                            <p className="font-semibold mt-4">Instructions:</p>
                            <p className="text-justify">{recipe.strInstructions}</p>
                        </div>
                    </div>
                ))
            ) : (
                <p className="text-center text-lg">No recipe found.</p>
            )}
        </div>
    );
};

export default RecipeDetailScreen;
