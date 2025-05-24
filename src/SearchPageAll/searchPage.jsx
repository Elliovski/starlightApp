import HeaderJSX from "../headerAll/header"
import FooterJSX from "../FooterAll/Footer"
import { useState , useEffect } from "react"
import "./Searchbar.css"
import search from "../ImagesAll/svg/search.svg"
import { globalChangePage , globalStoreMovieData } from "../App"




function SearchPage (){

    
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
    
    
    
    
     
        return <section className='flex flex-col  items-center justify-center h-auto  min-h-[1000px] bg-black pt-30' >
            <div className={`bg-white items-center relative transition-all duration-500  flex flex-col focus-within:w-[60%] min-w-[400px]  h-auto rounded-l-full rounded-r-full  ${widthOfSearc ? "w-full" : 'w-20'}`}>
                <div className="upperSearch-div flex  w-full  rounded-l-full rounded-r-full">
                    <input type="text" placeholder="Search for movies" onChange={handleSearchInput} className={`searchbar w-full  pl-5  flex  focus:outline-0 placeholder:leading-none text-2xl rounded-l-full rounded-r-full`} />
                    <button className="searchbar-button  w-25 h-full flex items-center justify-center  rounded-r-full " >
                    <img src={search} alt="" className="w-10 h-10"/>
                    </button>
                </div>
    
            </div>
                <ul className="searchSuggestionsUl pt-10   border-red-500 grid gap-5 grid-cols-4  bg-black  h-auto min-h-[700px] " style={{width : "60%", minWidth : "500px" }}>
                        {searchQuery !== 0 && searchedMovies.map((movie, index) => (
                <li key={index} className=" OneRecomendeMovie-li-js animate-fadeIn" style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'backwards' }} 
                    onClick={() => {
                        globalStoreMovieData(movie);
                        globalChangePage("BuyingPage");  
                         }}>
                        <div className="OneRecomendeMovie-container-div card flex-col">
                            <div className="h-full w-full">
                                <img src={movie.Poster} alt={movie.Title} className="movie-poster w-full h-full " />
                            </div>
                            <div className='card__content'>
                                <div className="detailsOfRecomendedMovie">
                                    <h1>{movie.Title}</h1>
                                    <div className="score-and-type-div">
                                        
                                        <p className="text-amber-300">MBA({movie.Metascore}⭐)</p>
                                        <p className="text-white">{movie.Genre}</p>
                                        <p className="text-amber-300 mt-5">Buy here 👇</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
                </ul>
    <FooterJSX />
        </section>
    }

return(
<section className="bg-black h-200 ">
    <HeaderJSX />
    <SearchBar widthOfSection={"100%"} heightOfSection={"100%"} />
    
</section>
)
}

export default SearchPage