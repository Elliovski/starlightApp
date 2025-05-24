// App.js or your component file

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'; // ✅ Correct for v10+
import 'swiper/css';
import 'swiper/css/navigation';
import App from "../../App";
import { useState, useEffect ,useRef, use  } from "react";
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

function handleScreensizeWidth(value){
    let [screenSize , setScreenSize] = useState(window.innerWidth)
    let [functionValue , setfunctionValue] = useState(4)
    useEffect(() => {
        const handleScreenResize = () => {setScreenSize(window.innerWidth)}
        window.addEventListener('resize' , handleScreenResize)
        return () => window.removeEventListener('resize' , handleScreenResize)
    },[])

    useEffect(() => {
        if (screenSize < 640){setfunctionValue(1)}
        else if (screenSize < 1024){setfunctionValue(2)}
        else {setfunctionValue(4)}
    },[screenSize])

    return(functionValue)
}

const swiperRef = useRef(null);
const [showNavigation, setShowNavigation] = useState(true);
let slidesPerView = handleScreensizeWidth()

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
                    <SwiperSlide key={index} className="OneRecomendeMovie-li OneRecomendeMovie-li-js animate-fadeIn" 
                    style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'backwards' }} 
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
                    </SwiperSlide>
                ))}
            
            </Swiper>
        </section>
    );
}

export default OneRecomendedSectionJSX;
