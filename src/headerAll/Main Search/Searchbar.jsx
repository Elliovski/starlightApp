import "./Searchbar.css"
import search from "../../ImagesAll/svg/search.svg"
import React , {useState , useEffect} from "react"
import { globalChangePage, globalStoreMovieData } from "../../App";


function SearchBar(){

    const [moviesOfSection, setMoviesOfSection] = useState([
        "Avengers+Endgame", "Barbie", "Oppenheimer", "Iron+Man", 
        "Inception", "The+Dark+Knight", "Interstellar", "Titanic", 
        "Jurassic+Park", "The+Matrix"
    ]);
    let [searchQuery , setSearchQuery] =useState("")
    let [searchedMovies , setSearchedMovie] = useState([])
    const [movieData, setMovieData] = useState([]); 

    const handleSearchInput = (e) => {
        setSearchQuery(e.target.value)

    }
    useEffect(() => {
    if( searchQuery !== ""){
        const filtered = movieData.filter(movie =>
            movie?.Title?.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setSearchedMovie(filtered);
    }
    else {
        setSearchedMovie([])
    }
}, [searchQuery, movieData]);


    useEffect(() => {
        
        const fetchMovies = async () => {
            try {
                const requests = moviesOfSection.map((nameOfMovie) =>
                    fetch(`http://localhost:5000/api/movie?title=${encodeURIComponent(nameOfMovie)}`)
                .then((response) => response.json())
            );
            
            const results = await Promise.all(requests);
            setMovieData(results);
        } catch (error) {
            console.error("Error fetching movies:", error);
        }
    };
    
    fetchMovies();


}, [moviesOfSection]);
    let [widthOfSearc , setWidthOfSearch] = useState(false)




 
    return <section className='flex flex-col  items-center justify-center  min-h-[100px]' >
        <div className={`bg-white items-center relative transition-all duration-500  flex flex-col focus-within:w-[60%] min-w-[400px]  h-auto rounded-l-full rounded-r-full  ${widthOfSearc ? "w-full" : 'w-20'}`}>
            <div className="upperSearch-div flex  w-full  rounded-l-full rounded-r-full">
                <input type="text" placeholder="Search for movies" onChange={handleSearchInput} className={`searchbar w-full  pl-5  flex  focus:outline-0 placeholder:leading-none text-2xl rounded-l-full rounded-r-full`} />
                <button className="searchbar-button  w-25 h-full flex items-center justify-center  rounded-r-full " >
                <img src={search} alt="" className="w-10 h-10"/>
                </button>
            </div>

        </div>
            <ul className="searchSuggestionsUl  bg-white border-red-500" style={{width : "60%", minWidth : "500px" }}>
                    {searchQuery !== 0 && searchedMovies.map((suggestion, index) => (
                <li
                key={index}
                className={`border-red-500 border-t-2 pl-5 cursor-pointer opacity-0 animate-fadeIn hover:bg-red-500 hover:text-white`}
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
                onClick={() => {
                    globalChangePage("BuyingPage");
                    globalStoreMovieData(suggestion);
                }}
                >
                {suggestion.Title}
                </li>
            ))}
            </ul>

    </section>
}

export default SearchBar