// App.js or your component file

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'; // ✅ Correct for v10+
import 'swiper/css';
import 'swiper/css/navigation';
import App from "../../App";
import { useState, useEffect ,useRef  } from "react";
import "./oneRecomendedSection.css";
import BuyingPage from "../../BuyingAll/BuyingPage";
import { globalChangePage, globalStoreMovieData } from "../../App";


function OneRecomendedSectionJSX({ NameOfSection }) {
    const [moviesOfSection, setMoviesOfSection] = useState([
        "Avengers+Endgame", "Barbie", "Oppenheimer", "Iron+Man", 
        "Inception", "The+Dark+Knight", "Interstellar", "Titanic", 
        "Jurassic+Park", "The+Matrix"
    ]);
    const [movieData, setMovieData] = useState([]); 
    const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);
    
    useEffect(() => {
        
        const fetchMovies = async () => {
            try {
                const requests = moviesOfSection.map((nameOfMovie) =>
                    fetch(`http://localhost:5000/api/movie?title=${encodeURIComponent(nameOfMovie)}`)
                .then((response) => response.json())
            );
            
            const results = await Promise.all(requests);
            
            
            let filteredResults = results.filter(movie => movie.Genre.split(", ").includes(NameOfSection))
            let shuffledFilteredResults = shuffleArray(filteredResults)
            setMovieData(shuffledFilteredResults);
        } catch (error) {
            console.error("Error fetching movies:", error);
        }
    };
    
    fetchMovies();
    


}, [moviesOfSection, NameOfSection]);

const swiperRef = useRef(null);
const [showNavigation, setShowNavigation] = useState(true);
let slidesPerView = 4

    return (
        <section className="OneRecomendedSectionCss">
            <h1 className="text-white" id={`${NameOfSection}`} style={{ fontSize: "30px" }}>{NameOfSection}</h1>
            <Swiper
            className='' style={{width : "100%" , height : "auto"}}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView = {slidesPerView}
                navigation={showNavigation}
            >
                

                {movieData.map((movie, index) => (
                    <SwiperSlide key={index} className="OneRecomendeMovie-li OneRecomendeMovie-li-js" 
                    onClick={() => { globalChangePage("BuyingPage"); globalStoreMovieData(movie); }}>
                        <div className="OneRecomendeMovie-container-div">
                            <p className="OneRecomendeMoviePlot">{movie.Plot}</p>
                            <div className="h-80">
                                <img src={movie.Poster} alt={movie.Title} className="movie-poster w-full h-full " />
                            </div>
                            <div className="detailsOfRecomendedMovie">
                                <h1>{movie.Title}</h1>
                                <div className="score-and-type-div">
                                    <p className="text-amber-300">MBA({movie.Metascore}⭐)</p>
                                    <p className="text-white">{movie.Genre}</p>
                                    <p className="text-amber-300 mt-5">Buy here 👇</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            
            </Swiper>
        </section>
    );
}

export default OneRecomendedSectionJSX;
