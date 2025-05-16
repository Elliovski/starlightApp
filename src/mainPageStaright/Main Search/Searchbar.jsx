import "./Searchbar.css"
import search from "../../ImagesAll/svg/search.svg"
import React , {useState , useEffect} from "react"
import { globalChangePage, globalStoreMovieData } from "../../App";


function SearchBar({widthOfSection ,heightOfSection}){

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
        const myApiKey = 'b627d25f'
        const fetchMovies = async () => {
            try {
                const requests = moviesOfSection.map((nameOfMovie) =>
                    fetch(`https://www.omdbapi.com/?t=${encodeURIComponent(nameOfMovie)}&apikey=${myApiKey}`)
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
    let  borderRadius = heightOfSection
 
    return <section className=' flex items-center justify-center mb-20' style={{width : widthOfSection, height : heightOfSection}}>
        <div className="bg-white flex items-center relative" style={{width : "90%", height : "50%" , borderRadius : borderRadius}}>
            <input type="text" placeholder="Search for movies" onChange={handleSearchInput} className="searchbar w-full h-full pl-10   flex  focus:outline-0 placeholder:leading-none text-2xl" style={{borderRadius  : borderRadius ,}}/>
            <ul className="searchSuggestionsUl absolute top-10 left-0 pl-5 pr-5 mt-2 bg-white border-red-500" style={{width : `${widthOfSection}`}}>
                {searchQuery !== 0 && searchedMovies.map((suggestion , index) => (
                    <li key={index} className="border-red-500" onClick={() => { globalChangePage("BuyingPage"); globalStoreMovieData(suggestion); }}>
                        {suggestion.Title}
                    </li>
                ))}
            </ul>
            <button className="searchbar-button  w-25 h-full flex items-center justify-center " style={{borderTopRightRadius : borderRadius , borderBottomRightRadius : borderRadius}}>
            <img src={search} alt="" className="w-10 h-10"/>
            </button>

        </div>
    </section>
}

export default SearchBar