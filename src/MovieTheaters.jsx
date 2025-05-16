//import { useEffect, useState } from "react";

//localStorage.removeItem("MovieTheatrData")
function movieTheatrDataFunction() {
  // Initialize state using useState and localStorage or default data
  const [movieTheatrData, setMovieTheatrData] = useState(() => {
    const storedData = localStorage.getItem("MovieTheatrData");
    return storedData ? JSON.parse(storedData) : {
      currentlyAvalibleMovies: [
        "Avengers+Endgame",
        "Barbie",
        "Oppenheimer",
        "Iron+Man",
        "Inception",
        "The+Dark+Knight",
        "Interstellar",
        "Titanic",
        "Jurassic+Park",
        "The+Matrix",
      ],
      currentlyAvalibleMovieTheaters: [
        "Cine Magic: Film Heaven",
        "First movie theater",
        "Second movie theater",
        "Third Movie theater",
      ],
      avalibleMovieTheatersForEachMovie: {
        "Avengers+Endgame": {
          "Cine Magic: Film Heaven": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [2, 3, 4, 5, 23],
          },
        },
      },
    };
  });

  // Update localStorage whenever movieTheatrData changes
  useEffect(() => {
    if (movieTheatrData) {
      localStorage.setItem("MovieTheatrData", JSON.stringify(movieTheatrData));
    }
  }, [movieTheatrData]); // Runs when movieTheatrData changes

  return movieTheatrData;
}

//export default movieTheatrDataFunction;
