import { useEffect, useState } from "react";

function GetMovieApiJSX({nameOfWantedMovie}) {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    
    const url =`http://localhost:5000/api/movie?title=${encodeURIComponent(nameOfWantedMovie)}`;

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
