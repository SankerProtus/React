function Form() {
    return (
        <>
            <form>
                <div className="form-control">
                    <label htmlFor="title">Movie Title:</label>
                    <input type="text" name="title" id="title" placeholder="Enter movie title"/>
                </div>
                <div className="form-control">
                    <label htmlFor="year">Release Year:</label>
                    <input type="text" name="year" id="year" placeholder="Enter release year"/>
                </div>
                <div className="form-control">
                    <label htmlFor="category">Category:</label>
                    <input type="text" name="category" id="category" list="categories" placeholder="Select or type category"/>
                    <datalist id="categories">
                        <option value="Action"/>
                        <option value="Drama"/>
                        <option value="Comedy"/>
                        <option value="Thriller"/>
                        <option value="Romance"/>
                        <option value="Sci-Fi"/>
                        <option value="Horror"/>
                        <option value="Adventure"/>
                    </datalist>
                </div>
                <div className="form-control">
                    <label htmlFor="sort">Sort By:</label>
                    <input type="text" name="sort" id="sort" list="sortOptions" placeholder="Select sort option"/>
                    <datalist id="sortOptions">
                        <option value="Year"/>
                        <option value="Rating"/>
                        <option value="Title"/>
                        <option value="Popularity"/>
                    </datalist>
                </div>
                <button type="submit" name="search" id="search">Search Movies</button>
            </form>
        </>
    )
}

export default Form;