const SearchBar = () => {
    return (
        <div className="flex justify-center p-4">
            <input
                type="text"
                placeholder="Search for a recipe..."
                className="input input-bordered w-full max-w-xs"
            />
            <button className="btn btn-primary ml-2">Search</button>
        </div>
    )
}

export default SearchBar
