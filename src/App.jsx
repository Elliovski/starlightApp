import { useEffect , useState } from "react"
import pageData from "./myJSON.json"
import MainPage from "./mainPageStaright/mainPage"
import BuyingPage from "./BuyingAll/BuyingPage"
import PayingPage from "./payingAll/payingAll"
import LoginPage from "./LoginAll/login"
//import movieTheatrDataFunction from "./MovieTheaters"

let globalChangePage ; // first decleare it so we can export it globally
let globalStoreMovieData ;//if inside useEffect , it will only exist inside useEffect
function App() {
  //let movieTheatrData = movieTheatrDataFunction()


  //movieTheatrData[0].avalibleMovieTheatersForEachMovie["Avengers+Endgame"]["Cine Magic: Film Heaven"]["indexesOfYourSeats"].push(3)
  


  
  let [pageData, setPageData] = useState(() => {
    return JSON.parse(localStorage.getItem("PageData")) || { pageJSOn: "MainPage", movie: null ,
     };
  });
  
  


      
  

  function StorePageData(page) {
  setPageData((prevData) => {
    const updatedData = { ...prevData, pageJSOn: page };
    localStorage.setItem("PageData", JSON.stringify(updatedData));
    return updatedData;
  });
}

function StoreMovieData(movie) {
  setPageData((prevData) => {
    const updatedData = { ...prevData, movie };
    localStorage.setItem("PageData", JSON.stringify(updatedData));
    return updatedData;
  });
}


    
      
  globalChangePage = StorePageData // so we can export 
  globalStoreMovieData = StoreMovieData


  //console.log(localStorage.getItem("PageData"))
  //console.log(page)
  const pages = {
    MainPage: MainPage, //this is component . You cant use string as component
    BuyingPage: BuyingPage,
    PayingPage : PayingPage,
    LoginPage : LoginPage
  }; // we use this to see which compenent the PageComponent becomes



  let PageComponent = pages[pageData.pageJSOn] || MainPage; // Default to MainPage if invalid
  


  

  return <PageComponent />; //  Is used in main.jsx
  
}
export {globalChangePage , globalStoreMovieData} 
export default App
