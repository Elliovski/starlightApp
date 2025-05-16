import { useEffect, useState } from "react";
import Aven from "../../ImagesAll/Aven.jpg"; // Adjust the path as needed



function HeroJSX({nameOfWantedMovie},){
    const [movie, setMovie] = useState(null);

  useEffect(() => {
    const myApiKey = "b627d25f";
    const url = `http://www.omdbapi.com/?t=${nameOfWantedMovie}&apikey=${myApiKey}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Debugging
        setMovie(data);
      })
      .catch((error) => console.error("Error fetching movie:", error));
  }, [nameOfWantedMovie]);



    return <section className="Hero-Section   h-120 mt-20 bg-gray-500">
        <img src={Aven} alt="" className="w-12/12 h-120 overflow-hidden brightness-50" />
        <h1 className="text-white text-5xl absolute top-6/12 w-full text-center" >Watch your favorite movies !</h1>
        
    </section>
}

export default HeroJSX