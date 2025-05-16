import { useEffect, useState } from "react";

function GetMovieApiJSX({nameOfWantedMovie}) {
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
  }, []);
    

}

export default GetMovieApiJSX
