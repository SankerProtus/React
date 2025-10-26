import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar({ searchValue, setSearchValue }) {
    return (
        <div className="search">
            <SearchIcon />

            <input
                type="text"
                name="search"
                id="search"
                placeholder="Search for movies..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
            />
        </div>
    )
}