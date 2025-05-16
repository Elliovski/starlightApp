import HeaderJSX from "../headerAll/header"
import HeroJSX from "./Hero/Hero"
import FooterJSX from "../FooterAll/Footer"
import SearchBar from "./Main Search/Searchbar"
import OneRecomendedSectionJSX from "./RecomendedSections/oneRecomdedSection"

//import GetMovieApiJSX from "../GetMovieApi"


function MainPage(){
    
    document.title = "Main Page"
    return <div className= "mainPage  h-auto bg-black ">
    <HeaderJSX />
    <HeroJSX nameOfWantedMovie = "Avengers: Endgame"  />
    <SearchBar widthOfSection = "100%" heightOfSection = "100px" /> 
    
    <OneRecomendedSectionJSX NameOfSection = "Action" />
    <OneRecomendedSectionJSX NameOfSection = "Adventure" />
    <OneRecomendedSectionJSX NameOfSection = "Sci-Fi" />
    <OneRecomendedSectionJSX NameOfSection = "Romance" />
    <FooterJSX />
    </div>
    
}


export default MainPage