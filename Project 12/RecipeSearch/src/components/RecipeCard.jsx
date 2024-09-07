const RecipeCard = ({ detail }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 py-4">
            {detail && detail.map((recipe) => (
                <div key={recipe.idMeal} className="card w-full max-w-xs bg-base-100 shadow-xl mx-auto">
                    <figure className="overflow-hidden">
                        <img
                            src={recipe.strMealThumb}
                            alt={recipe.strMeal}
                            className="h-48 w-full object-cover rounded-t-lg transition-transform duration-300 ease-in-out transform hover:scale-110"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{recipe.strMeal}</h2>
                        <p>{recipe.strArea ? `Cuisine: ${recipe.strArea}` : 'Cuisine Info Unavailable'}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-warning w-32 rounded-full transition-transform duration-300 hover:scale-105 hover:bg-yellow-600 hover:text-white">
                                Recipe
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default RecipeCard;
