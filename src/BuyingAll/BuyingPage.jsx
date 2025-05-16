import HeaderJSX from "../headerAll/header"
import FooterJSX from "../FooterAll/Footer"
import { globalChangePage } from "../App"
import MovieAndPageData from "../myJSON.json"
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css"; // Import Leaflet styles
import StarLightTicketRedLogo from "../ImagesAll/Manual - Copy.png"
//import movieTheatrDataFunction from "../MovieTheaters";



let storedData = localStorage.getItem("PageData")


let MovieData = storedData ? JSON.parse(storedData).movie : null;
console.log('JSON.parse(localStorage.getItem("PageData"))')
console.log(JSON.parse(localStorage.getItem("PageData")))
console.log("MovieData")
console.log(MovieData)



let globalChangeYourTicketId;
let globalChangeDetailedMovieData;






function ChoosingTheatrInMapButtonFunction(){
  
  
const [chosenCinema, setChosenCinema] = useState(() => {
  let storedCinema = localStorage.getItem("chosenCinemachosenCinemaJSON");
  return storedCinema ? JSON.parse(storedCinema) : "AMC Westmoreland 15";}
);  
  const [hiddenClass , setHidden] = useState(true)
  function changeChosenCinema(NewCinema){
    setChosenCinema(NewCinema)
    window.location.reload()
  }
  
  function changeVisibility(){
    setHidden((prev) => !prev)
  }
  
  useEffect(() => {
    setChosenCinema(chosenCinema)
    localStorage.setItem("chosenCinemachosenCinemaJSON", JSON.stringify(chosenCinema));
  } ,[chosenCinema])

  
  
  return <>
        <div className="ChoosingTheatrInMap-button-div mb-10 ml-5 w-fit flex flex-col items-center cursor-pointer" onClick={() => {changeVisibility()}}>
          <button className="ChoosingTheatrInMap-button w-auto  pr-4 pl-4 pt-2 pb-2 rounded-3xl  bg-red-600 text-white cursor-pointer">{chosenCinema}</button>
          <ul  className={`ChoosingTheatrInMap-ul ${hiddenClass == true ? "hidden" : "visible"} bg-white`}>
            <li className="p-1 border-solid border-black border-2 hover:bg-red-500 hover:text-white transition-colors duration-300" onClick={() => {changeChosenCinema("AMC Westmoreland 15")}}>AMC Westmoreland 15</li>
            <li className="p-1 border-solid border-black border-2 hover:bg-red-500 hover:text-white transition-colors duration-300" onClick={() => {changeChosenCinema("AMC Village 7")}}>AMC Village 7</li>
            <li className="p-1 border-solid border-black border-2 hover:bg-red-500 hover:text-white transition-colors duration-300" onClick={() => {changeChosenCinema("AMC Porter Ranch 9")}}>Third Movie Theater</li>
            <li className="p-1 border-solid border-black border-2 hover:bg-red-500 hover:text-white transition-colors duration-300" onClick={() => {changeChosenCinema("AMC River Park Square 20")}}>AMC River Park Square 20</li>
            <li className="p-1 border-solid border-black border-2 hover:bg-red-500 hover:text-white transition-colors duration-300" onClick={() => {changeChosenCinema("AMC Kent Station 14")}}>AMC Kent Station 14</li>
            <li className="p-1 border-solid border-black border-2 hover:bg-red-500 hover:text-white transition-colors duration-300" onClick={() => {changeChosenCinema("AMC Southcenter 16")}}>AMC Southcenter 16</li>
            <li className="p-1 border-solid border-black border-2 hover:bg-red-500 hover:text-white transition-colors duration-300" onClick={() => {changeChosenCinema("AMC Vancouver Mall 23")}}>AMC Vancouver Mall 23</li>
            <li className="p-1 border-solid border-black border-2 hover:bg-red-500 hover:text-white transition-colors duration-300" onClick={() => {changeChosenCinema("AMC CLASSIC Mill Plain 8")}}>AMC CLASSIC Mill Plain 8</li>
            <li className="p-1 border-solid border-black border-2 hover:bg-red-500 hover:text-white transition-colors duration-300" onClick={() => {changeChosenCinema("AMC Newport Centre 11")}}>AMC Newport Centre 11</li>
          </ul>
        </div>
    </>
}



function CreatingSeatsFunction(){

  //localStorage.removeItem('MovieTheatrData')

  const [movieTheatrData, setMovieTheatrData] = useState(() => {
    const storedData =  localStorage.getItem("MovieTheatrData");
    
    return  storedData ? JSON.parse(localStorage.getItem("MovieTheatrData")) :   {
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
        "AMC Westmoreland 15",
        "AMC Village 7",
        "AMC Porter Ranch 9",
        "AMC River Park Square 20",
        "AMC Kent Station 14",
        "AMC Southcenter 16",
        "AMC Vancouver Mall 23",
        "AMC CLASSIC Mill Plain 8",
        "AMC Newport Centre 11",
      ],
      avalibleMovieTheatersForEachMovie: {
        "Avengers: Endgame": {
          "AMC Westmoreland 15": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
            rating : 4.4,
            street : "5280 Old Rte 30, Greensburg,",
            cordinates : [40.29805491939953, -79.50519254299022]
          },
          "AMC Village 7": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
            rating : 4.4,
            street : "66 Third Ave (11th St.), New York",
            cordinates : [40.731729621730636, -73.98873886034572]
          },
          "AMC Porter Ranch 9": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
            rating : 4.6,
            street : "20059 Rinaldi Street, Porter Ranch",
            cordinates : [34.27727788608572, -118.57195446074306]
          },
          "AMC River Park Square 20": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
            rating : 4.5,
            street : "808 West Main Avenue, Suite 334, Spokane",
            cordinates : [47.6596987169704, -117.42358821937692]
          },
          "AMC Kent Station 14": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
            rating : 4.4,
            street : "426 Ramsay Way, Kent",
            cordinates : [47.384877333793284, -122.23410828871347]
          },
          "AMC Southcenter 16": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
            rating : 4.3,
            street : "3600 Southcenter Mall, Tukwila",
            cordinates : [47.458413543863976, -122.258628919392]
          },
          "AMC Vancouver Mall 23": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
            rating : 3.9,
            street : "8700 Northeast Vancouver Mall Drive, Vancouver",
            cordinates : [45.658963363058774, -122.58263559068862],
          },
          "AMC CLASSIC Mill Plain 8": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
            rating : 4.0,
            street : "11700 Se 7th St, Vancouver ",
            cordinates : [45.61666423186148, -122.55054437534965],
          },
          "AMC Newport Centre 11": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
            rating : 4.3,
            street : "30-300 Mall Drive West, Jersey City ",
            cordinates : [40.726909777442295, -74.03785986219455],
          },
          "First Movie Theater": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
          },
          "Second Movie Theater": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
          },
          "Third Movie Theater": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
          },
        },
        "Barbie": {
          "AMC Westmoreland 15": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
            rating : 4.4,
            street : "5280 Old Rte 30, Greensburg,",
            cordinates : [40.29805491939953, -79.50519254299022]
          },
          "AMC Village 7": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
            rating : 4.4,
            street : "66 Third Ave (11th St.), New York",
            cordinates : [40.731729621730636, -73.98873886034572]
          },
          "AMC Porter Ranch 9": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
            rating : 4.6,
            street : "20059 Rinaldi Street, Porter Ranch",
            cordinates : [34.27727788608572, -118.57195446074306]
          },
          "AMC River Park Square 20": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
            rating : 4.5,
            street : "808 West Main Avenue, Suite 334, Spokane",
            cordinates : [47.6596987169704, -117.42358821937692]
          },
          "AMC Kent Station 14": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
            rating : 4.4,
            street : "426 Ramsay Way, Kent",
            cordinates : [47.384877333793284, -122.23410828871347]
          },
          "AMC Southcenter 16": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
            rating : 4.3,
            street : "3600 Southcenter Mall, Tukwila",
            cordinates : [47.458413543863976, -122.258628919392]
          },
          "AMC Vancouver Mall 23": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
            rating : 3.9,
            street : "8700 Northeast Vancouver Mall Drive, Vancouver",
            cordinates : [45.658963363058774, -122.58263559068862],
          },
          "AMC CLASSIC Mill Plain 8": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
            rating : 4.0,
            street : "11700 Se 7th St, Vancouver ",
            cordinates : [45.61666423186148, -122.55054437534965],
          },
          "AMC Newport Centre 11": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
            rating : 4.3,
            street : "30-300 Mall Drive West, Jersey City ",
            cordinates : [40.726909777442295, -74.03785986219455],
          },
          "First Movie Theater": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
          },
          "Second Movie Theater": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
          },
          "Third Movie Theater": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
          },
        },
        "Oppenheimer": {
          "AMC Westmoreland 15": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
            rating : 4.4,
            street : "5280 Old Rte 30, Greensburg,",
            cordinates : [40.29805491939953, -79.50519254299022]
          },
          "AMC Village 7": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
            rating : 4.4,
            street : "66 Third Ave (11th St.), New York",
            cordinates : [40.731729621730636, -73.98873886034572]
          },
          "AMC Porter Ranch 9": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
            rating : 4.6,
            street : "20059 Rinaldi Street, Porter Ranch",
            cordinates : [34.27727788608572, -118.57195446074306]
          },
          "AMC River Park Square 20": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
            rating : 4.5,
            street : "808 West Main Avenue, Suite 334, Spokane",
            cordinates : [47.6596987169704, -117.42358821937692]
          },
          "AMC Kent Station 14": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
            rating : 4.4,
            street : "426 Ramsay Way, Kent",
            cordinates : [47.384877333793284, -122.23410828871347]
          },
          "AMC Southcenter 16": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
            rating : 4.3,
            street : "3600 Southcenter Mall, Tukwila",
            cordinates : [47.458413543863976, -122.258628919392]
          },
          "AMC Vancouver Mall 23": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
            rating : 3.9,
            street : "8700 Northeast Vancouver Mall Drive, Vancouver",
            cordinates : [45.658963363058774, -122.58263559068862],
          },
          "AMC CLASSIC Mill Plain 8": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
            rating : 4.0,
            street : "11700 Se 7th St, Vancouver ",
            cordinates : [45.61666423186148, -122.55054437534965],
          },
          "AMC Newport Centre 11": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
            rating : 4.3,
            street : "30-300 Mall Drive West, Jersey City ",
            cordinates : [40.726909777442295, -74.03785986219455],
          },
          "First Movie Theater": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
          },
          "Second Movie Theater": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
          },
          "Third Movie Theater": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
          },
        },
        "Iron Man": {
          "AMC Westmoreland 15": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
            rating : 4.4,
            street : "5280 Old Rte 30, Greensburg,",
            cordinates : [40.29805491939953, -79.50519254299022]
          },
          "AMC Village 7": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
            rating : 4.4,
            street : "66 Third Ave (11th St.), New York",
            cordinates : [40.731729621730636, -73.98873886034572]
          },
          "AMC Porter Ranch 9": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
            rating : 4.6,
            street : "20059 Rinaldi Street, Porter Ranch",
            cordinates : [34.27727788608572, -118.57195446074306]
          },
          "AMC River Park Square 20": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
            rating : 4.5,
            street : "808 West Main Avenue, Suite 334, Spokane",
            cordinates : [47.6596987169704, -117.42358821937692]
          },
          "AMC Kent Station 14": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
            rating : 4.4,
            street : "426 Ramsay Way, Kent",
            cordinates : [47.384877333793284, -122.23410828871347]
          },
          "AMC Southcenter 16": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
            rating : 4.3,
            street : "3600 Southcenter Mall, Tukwila",
            cordinates : [47.458413543863976, -122.258628919392]
          },
          "AMC Vancouver Mall 23": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
            rating : 3.9,
            street : "8700 Northeast Vancouver Mall Drive, Vancouver",
            cordinates : [45.658963363058774, -122.58263559068862],
          },
          "AMC CLASSIC Mill Plain 8": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
            rating : 4.0,
            street : "11700 Se 7th St, Vancouver ",
            cordinates : [45.61666423186148, -122.55054437534965],
          },
          "AMC Newport Centre 11": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
            rating : 4.3,
            street : "30-300 Mall Drive West, Jersey City ",
            cordinates : [40.726909777442295, -74.03785986219455],
          },
          "First Movie Theater": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
          },
          "Second Movie Theater": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
          },
          "Third Movie Theater": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
          },
        },
        "Inception": {
          "AMC Westmoreland 15": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
            rating : 4.4,
            street : "5280 Old Rte 30, Greensburg,",
            cordinates : [40.29805491939953, -79.50519254299022]
          },
          "AMC Village 7": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
            rating : 4.4,
            street : "66 Third Ave (11th St.), New York",
            cordinates : [40.731729621730636, -73.98873886034572]
          },
          "AMC Porter Ranch 9": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
            rating : 4.6,
            street : "20059 Rinaldi Street, Porter Ranch",
            cordinates : [34.27727788608572, -118.57195446074306]
          },
          "AMC River Park Square 20": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
            rating : 4.5,
            street : "808 West Main Avenue, Suite 334, Spokane",
            cordinates : [47.6596987169704, -117.42358821937692]
          },
          "AMC Kent Station 14": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
            rating : 4.4,
            street : "426 Ramsay Way, Kent",
            cordinates : [47.384877333793284, -122.23410828871347]
          },
          "AMC Southcenter 16": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
            rating : 4.3,
            street : "3600 Southcenter Mall, Tukwila",
            cordinates : [47.458413543863976, -122.258628919392]
          },
          "AMC Vancouver Mall 23": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
            rating : 3.9,
            street : "8700 Northeast Vancouver Mall Drive, Vancouver",
            cordinates : [45.658963363058774, -122.58263559068862],
          },
          "AMC CLASSIC Mill Plain 8": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
            rating : 4.0,
            street : "11700 Se 7th St, Vancouver ",
            cordinates : [45.61666423186148, -122.55054437534965],
          },
          "AMC Newport Centre 11": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
            rating : 4.3,
            street : "30-300 Mall Drive West, Jersey City ",
            cordinates : [40.726909777442295, -74.03785986219455],
          },
          "First Movie Theater": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
          },
          "Second Movie Theater": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
          },
          "Third Movie Theater": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
          },
        },
        "The Dark Knight": {
          "AMC Westmoreland 15": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
            rating : 4.4,
            street : "5280 Old Rte 30, Greensburg,",
            cordinates : [40.29805491939953, -79.50519254299022]
          },
          "AMC Village 7": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
            rating : 4.4,
            street : "66 Third Ave (11th St.), New York",
            cordinates : [40.731729621730636, -73.98873886034572]
          },
          "AMC Porter Ranch 9": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
            rating : 4.6,
            street : "20059 Rinaldi Street, Porter Ranch",
            cordinates : [34.27727788608572, -118.57195446074306]
          },
          "AMC River Park Square 20": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
            rating : 4.5,
            street : "808 West Main Avenue, Suite 334, Spokane",
            cordinates : [47.6596987169704, -117.42358821937692]
          },
          "AMC Kent Station 14": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
            rating : 4.4,
            street : "426 Ramsay Way, Kent",
            cordinates : [47.384877333793284, -122.23410828871347]
          },
          "AMC Southcenter 16": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
            rating : 4.3,
            street : "3600 Southcenter Mall, Tukwila",
            cordinates : [47.458413543863976, -122.258628919392]
          },
          "AMC Vancouver Mall 23": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
            rating : 3.9,
            street : "8700 Northeast Vancouver Mall Drive, Vancouver",
            cordinates : [45.658963363058774, -122.58263559068862],
          },
          "AMC CLASSIC Mill Plain 8": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
            rating : 4.0,
            street : "11700 Se 7th St, Vancouver ",
            cordinates : [45.61666423186148, -122.55054437534965],
          },
          "AMC Newport Centre 11": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
            rating : 4.3,
            street : "30-300 Mall Drive West, Jersey City ",
            cordinates : [40.726909777442295, -74.03785986219455],
          },
          "First Movie Theater": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
          },
          "Second Movie Theater": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
          },
          "Third Movie Theater": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
          },
        },
        "Interstellar": {
          "AMC Westmoreland 15": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
            rating : 4.4,
            street : "5280 Old Rte 30, Greensburg,",
            cordinates : [40.29805491939953, -79.50519254299022]
          },
          "AMC Village 7": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
            rating : 4.4,
            street : "66 Third Ave (11th St.), New York",
            cordinates : [40.731729621730636, -73.98873886034572]
          },
          "AMC Porter Ranch 9": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
            rating : 4.6,
            street : "20059 Rinaldi Street, Porter Ranch",
            cordinates : [34.27727788608572, -118.57195446074306]
          },
          "AMC River Park Square 20": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
            rating : 4.5,
            street : "808 West Main Avenue, Suite 334, Spokane",
            cordinates : [47.6596987169704, -117.42358821937692]
          },
          "AMC Kent Station 14": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
            rating : 4.4,
            street : "426 Ramsay Way, Kent",
            cordinates : [47.384877333793284, -122.23410828871347]
          },
          "AMC Southcenter 16": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
            rating : 4.3,
            street : "3600 Southcenter Mall, Tukwila",
            cordinates : [47.458413543863976, -122.258628919392]
          },
          "AMC Vancouver Mall 23": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
            rating : 3.9,
            street : "8700 Northeast Vancouver Mall Drive, Vancouver",
            cordinates : [45.658963363058774, -122.58263559068862],
          },
          "AMC CLASSIC Mill Plain 8": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
            rating : 4.0,
            street : "11700 Se 7th St, Vancouver ",
            cordinates : [45.61666423186148, -122.55054437534965],
          },
          "AMC Newport Centre 11": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
            rating : 4.3,
            street : "30-300 Mall Drive West, Jersey City ",
            cordinates : [40.726909777442295, -74.03785986219455],
          },
          "First Movie Theater": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
          },
          "Second Movie Theater": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
          },
          "Third Movie Theater": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
          },
        },
        "Titanic": {
          "AMC Westmoreland 15": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
            rating : 4.4,
            street : "5280 Old Rte 30, Greensburg,",
            cordinates : [40.29805491939953, -79.50519254299022]
          },
          "AMC Village 7": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
            rating : 4.4,
            street : "66 Third Ave (11th St.), New York",
            cordinates : [40.731729621730636, -73.98873886034572]
          },
          "AMC Porter Ranch 9": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
            rating : 4.6,
            street : "20059 Rinaldi Street, Porter Ranch",
            cordinates : [34.27727788608572, -118.57195446074306]
          },
          "AMC River Park Square 20": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
            rating : 4.5,
            street : "808 West Main Avenue, Suite 334, Spokane",
            cordinates : [47.6596987169704, -117.42358821937692]
          },
          "AMC Kent Station 14": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
            rating : 4.4,
            street : "426 Ramsay Way, Kent",
            cordinates : [47.384877333793284, -122.23410828871347]
          },
          "AMC Southcenter 16": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
            rating : 4.3,
            street : "3600 Southcenter Mall, Tukwila",
            cordinates : [47.458413543863976, -122.258628919392]
          },
          "AMC Vancouver Mall 23": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
            rating : 3.9,
            street : "8700 Northeast Vancouver Mall Drive, Vancouver",
            cordinates : [45.658963363058774, -122.58263559068862],
          },
          "AMC CLASSIC Mill Plain 8": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
            rating : 4.0,
            street : "11700 Se 7th St, Vancouver ",
            cordinates : [45.61666423186148, -122.55054437534965],
          },
          "AMC Newport Centre 11": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
            rating : 4.3,
            street : "30-300 Mall Drive West, Jersey City ",
            cordinates : [40.726909777442295, -74.03785986219455],
          },
          "First Movie Theater": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
          },
          "Second Movie Theater": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
          },
          "Third Movie Theater": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
          },
        },
        "Jurassic Park": {
          "AMC Westmoreland 15": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
            rating : 4.4,
            street : "5280 Old Rte 30, Greensburg,",
            cordinates : [40.29805491939953, -79.50519254299022]
          },
          "AMC Village 7": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
            rating : 4.4,
            street : "66 Third Ave (11th St.), New York",
            cordinates : [40.731729621730636, -73.98873886034572]
          },
          "AMC Porter Ranch 9": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
            rating : 4.6,
            street : "20059 Rinaldi Street, Porter Ranch",
            cordinates : [34.27727788608572, -118.57195446074306]
          },
          "AMC River Park Square 20": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
            rating : 4.5,
            street : "808 West Main Avenue, Suite 334, Spokane",
            cordinates : [47.6596987169704, -117.42358821937692]
          },
          "AMC Kent Station 14": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
            rating : 4.4,
            street : "426 Ramsay Way, Kent",
            cordinates : [47.384877333793284, -122.23410828871347]
          },
          "AMC Southcenter 16": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
            rating : 4.3,
            street : "3600 Southcenter Mall, Tukwila",
            cordinates : [47.458413543863976, -122.258628919392]
          },
          "AMC Vancouver Mall 23": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
            rating : 3.9,
            street : "8700 Northeast Vancouver Mall Drive, Vancouver",
            cordinates : [45.658963363058774, -122.58263559068862],
          },
          "AMC CLASSIC Mill Plain 8": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
            rating : 4.0,
            street : "11700 Se 7th St, Vancouver ",
            cordinates : [45.61666423186148, -122.55054437534965],
          },
          "AMC Newport Centre 11": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
            rating : 4.3,
            street : "30-300 Mall Drive West, Jersey City ",
            cordinates : [40.726909777442295, -74.03785986219455],
          },
          "First Movie Theater": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
          },
          "Second Movie Theater": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
          },
          "Third Movie Theater": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
          },
        },
        "The Matrix": {
          "AMC Westmoreland 15": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
            rating : 4.4,
            street : "5280 Old Rte 30, Greensburg,",
            cordinates : [40.29805491939953, -79.50519254299022]
          },
          "AMC Village 7": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
            rating : 4.4,
            street : "66 Third Ave (11th St.), New York",
            cordinates : [40.731729621730636, -73.98873886034572]
          },
          "AMC Porter Ranch 9": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
            rating : 4.6,
            street : "20059 Rinaldi Street, Porter Ranch",
            cordinates : [34.27727788608572, -118.57195446074306]
          },
          "AMC River Park Square 20": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
            rating : 4.5,
            street : "808 West Main Avenue, Suite 334, Spokane",
            cordinates : [47.6596987169704, -117.42358821937692]
          },
          "AMC Kent Station 14": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
            rating : 4.4,
            street : "426 Ramsay Way, Kent",
            cordinates : [47.384877333793284, -122.23410828871347]
          },
          "AMC Southcenter 16": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
            rating : 4.3,
            street : "3600 Southcenter Mall, Tukwila",
            cordinates : [47.458413543863976, -122.258628919392]
          },
          "AMC Vancouver Mall 23": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
            rating : 3.9,
            street : "8700 Northeast Vancouver Mall Drive, Vancouver",
            cordinates : [45.658963363058774, -122.58263559068862],
          },
          "AMC CLASSIC Mill Plain 8": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
            rating : 4.0,
            street : "11700 Se 7th St, Vancouver ",
            cordinates : [45.61666423186148, -122.55054437534965],
          },
          "AMC Newport Centre 11": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
            rating : 4.3,
            street : "30-300 Mall Drive West, Jersey City ",
            cordinates : [40.726909777442295, -74.03785986219455],
          },
          "First Movie Theater": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
          },
          "Second Movie Theater": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
          },
          "Third Movie Theater": {
            AllSeats: [[5, 5, 5], [5, 5, 5, 5, 5, 5], [5, 5, 5]],
            indexesOfTakenSeats: [1, 6, 11, 26],
            indexesOfYourSeats: [],
          },
        },
      },
    };
  });

  useEffect(() => {
    if (movieTheatrData) {
      localStorage.setItem("MovieTheatrData", JSON.stringify(movieTheatrData));
      
    }
  }, [movieTheatrData]); // Runs when movieTheatrData changes

  
  
  let AllSeats = movieTheatrData["avalibleMovieTheatersForEachMovie"][MovieData["Title"]][String(JSON.parse(localStorage.getItem("chosenCinemachosenCinemaJSON"))) || "AMC Westmoreland 15"]["AllSeats"]
  let [indexesOfTakenSeats , changeIndexesOfTakenSeat ] = useState(movieTheatrData["avalibleMovieTheatersForEachMovie"][MovieData["Title"]][String(JSON.parse(localStorage.getItem("chosenCinemachosenCinemaJSON"))) || "AMC Westmoreland 15"]["indexesOfTakenSeats"])
  let [indexesOfYourSeats , changeIndexsesOfYourSeat ]  = useState((movieTheatrData["avalibleMovieTheatersForEachMovie"][MovieData["Title"]][String(JSON.parse(localStorage.getItem("chosenCinemachosenCinemaJSON"))) || "AMC Westmoreland 15"]["indexesOfYourSeats"])) || []

  useEffect(() => {
    localStorage.setItem("MovieTheatrData", JSON.stringify(movieTheatrData));
    console.log('indexesOfYourSeats')
    console.log(indexesOfYourSeats)
    console.log("indexesOfTakenSeats")
    console.log(indexesOfTakenSeats)
    
  }, [movieTheatrData]);

  let [detailedMovieTicketsData ,ChangedetailedMovieTicketsData] = useState(JSON.parse(localStorage.getItem("detailedMovieTicketsDataJSON")) || [])
  let indexCounter = 0

  
  globalChangeDetailedMovieData = ChangedetailedMovieTicketsData

  useEffect(() => {
    localStorage.setItem("detailedMovieTicketsDataJSON", JSON.stringify(detailedMovieTicketsData));
  }, [detailedMovieTicketsData ]);
  
  
  
  function choosingSeatFunction(e){
    const seatId = parseInt(e.target.id); // id is a string, convert to number
    let newDetailedMovieTicketsOBject = {
      Poster :  MovieData.Poster ,
      Title : MovieData.Title,
      seatId : seatId,
      cinema :  String(JSON.parse(localStorage.getItem("chosenCinemachosenCinemaJSON"))) || "AMC Westmoreland 15" ,
      coordinates : JSON.parse(localStorage.getItem("MovieTheatrData")).avalibleMovieTheatersForEachMovie[MovieData["Title"]][String(JSON.parse(localStorage.getItem("chosenCinemachosenCinemaJSON"))) || "AMC Westmoreland 15"].cordinates ||[40.2975813454084, -79.50509166222278] ,
      street : JSON.parse(localStorage.getItem("MovieTheatrData")).avalibleMovieTheatersForEachMovie[MovieData["Title"]][String(JSON.parse(localStorage.getItem("chosenCinemachosenCinemaJSON"))) || "AMC Westmoreland 15"].street ||'5280 Old Rte 30, Greensburg' ,
      rating : JSON.parse(localStorage.getItem("MovieTheatrData")).avalibleMovieTheatersForEachMovie[MovieData["Title"]][String(JSON.parse(localStorage.getItem("chosenCinemachosenCinemaJSON"))) || "AMC Westmoreland 15"].rating ||4.4 ,
      movieALLdata : MovieData
    }
    
    
    if (!indexesOfTakenSeats.includes(seatId) && !indexesOfYourSeats.includes(seatId) ) {
      indexesOfYourSeats.push(seatId)
      ChangedetailedMovieTicketsData((prev) => [...prev, newDetailedMovieTicketsOBject]); 
      localStorage.setItem("MovieTheatrData", JSON.stringify(movieTheatrData)); 
    }
    
    else if(Object.values(indexesOfYourSeats).includes(seatId)){
      const index = indexesOfYourSeats.indexOf(seatId);
      if (index !== -1) {
        indexesOfYourSeats.splice(index, 1);
      }
      localStorage.setItem("MovieTheatrData", JSON.stringify(movieTheatrData)); 
      ChangedetailedMovieTicketsData((prev) => prev.filter(seat => seat.seatId !== seatId));      
    }
    else {console.log("Seat is taken")}    
  }
  let globalIndex = 0

  return <>
  <section className="Seats-section mt-20  grid gap-25 justify-center " style={{gridAutoFlow : "column"}}>
    {AllSeats.map((section , index) => (
      <ul className="oneDividentOfsection grid grid-flow-col gap-1 w-fit" key={index}>
        {section.map((column , columnIndex) => {
                const range = Array.from({ length: column }, (_, i) => {
                  globalIndex += 1;
                  return globalIndex;
                });
          return <ul key={columnIndex} className="grid ">
            {range.map((seat, seatIndex) => {
            indexCounter++; // Move inside JSX
            return (
              <li  id={indexCounter} onClick={(e) => {choosingSeatFunction(e)}} key={indexCounter} 
              className={`w-20 h-20 bg-red-600 m-2  text-5xl grid place-items-center
                ${indexesOfYourSeats.includes(indexCounter) ? "bg-yellow-500 text-black" : "bg-red-600"}
                ${indexesOfTakenSeats.includes(indexCounter) ? "bg-white cursor-default" : "bg-red-600 cursor-pointer "}`}>
                {indexCounter}
              </li>
            );
          })}
          </ul>
        })}
      </ul>
    ))}
  </section>
    <div className="totalsAndPayment-div ">
      <p className="text-white ml-10 text-3xl">Your seats : {indexesOfYourSeats.join(', ') || "Have not chosen yet"}</p>
      <p className="text-white ml-10 text-3xl">Total price:  {indexesOfYourSeats.length*10}</p>
      <button onClick={() => {globalChangePage("PayingPage")}} className="mt-5 ml-10 text-4xl  pl-3 pr-3 rounded-full bg-red-600 text-white cursor-pointer">Pay</button>
    </div>
    <div className="YourTicketsLogoButton " onClick={() => {globalChangePage("PayingPage")}}>
      <button className="w-30 h-30 rounded-full bg-red-600 fixed cursor-pointer bottom-30 right-20 "><img className="w-fit rounded-full  border-black" src={StarLightTicketRedLogo} alt="" /></button>
      <button className="w-16 h-16 rounded-full bg-white fixed cursor-pointer bottom-52 right-16 text-red-600 text-3xl font-bold">{JSON.parse(localStorage.getItem("detailedMovieTicketsDataJSON")).length}</button>
    </div>
  </>
}



function BuyingPage(){

  let [mapSize , setMapSize] = useState(false)
  function MapComponent() {
    
    
    const position = JSON.parse(localStorage.getItem("MovieTheatrData"))?.avalibleMovieTheatersForEachMovie[MovieData["Title"]][String(JSON.parse(localStorage.getItem("chosenCinemachosenCinemaJSON"))) || "AMC Westmoreland 15"].cordinates ||[40.2975813454084, -79.50509166222278]; // Latitude and Longitude for the center of the map
    const zoomLevel = 18; // Zoom level

    return (
      <div className={`w-screen ${mapSize ? "h-screen" : "h-96" } mb-30`} onClick={() => (setMapSize(true))} > {/* Tailwind styling for the map container */}
      <button onClick={(event) => {setMapSize(false) , event.stopPropagation()}} className={`w-40 h-40 bg-white ${mapSize ? "visible" : 'hidden'}`} >X</button>
        <MapContainer center={position} zoom={zoomLevel} scrollWheelZoom={false} className="w-full h-full" >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>Example Location</Popup>
          </Marker>
        </MapContainer>
      </div>
    );
  }


    document.title = "Buying Page"
    return<>
    <div className="BuyingPageAll-div bg-black pt-30">
    <HeaderJSX />
    <section className="buyingPageMovieInfoAndPoster-section pl-10 pr-10 grid grid-cols-2">
        <div className="MoviePoster-div ">
            <img src={MovieData.Poster} alt=""  className="pl-10"/>
            <h1 className="text-white text-5xl pt-2 ">{MovieData.Title}</h1>
        </div>
        <div className="MovieInfo-div">
            <div className="AgeRestriction-div flex items-center pb-3 ">
                <div className="AgeRestriction-logo w-20 h-20 flex items-center justify-center rounded-full bg-white text-black">
                  <h1 className="text-center font-serif text-6xl">R</h1>
                </div>
                <h1 className="text-white text-3xl ml-2 flex items-center">{MovieData.Rated}</h1>
            </div>
            <div className="Languages-div flex items-center pb-3">
                <div className="AgeRestriction-logo w-20 h-20 flex items-center justify-center rounded-full bg-red-600 text-black">
                  <h1 className="text-center font-serif text-6xl">L</h1>
                </div>
                <h1 className="text-white text-3xl ml-2 flex items-center">{MovieData.Language}</h1>
            </div>
            <div className="Languages-div flex items-center pb-3">
                <div className="AgeRestriction-logo w-20 h-20 flex items-center justify-center rounded-full bg-green-600 text-black">
                  <b className="text-center font-serif text-6xl">$</b>
                </div>
                <h1 className="text-white text-4xl ml-2 flex items-center">10$</h1>
            </div>
            <ul className="additionalInfo-ul text-white text-3xl pl-5">
                <li>Genre:{MovieData.Genre}</li>
                <li>Runtime:{MovieData.Runtime}</li>
                <li>Released:{MovieData.Released}</li>
                <li className="mt-10 text-2xl opacity-80">{MovieData.Plot}</li>
            </ul>

        </div>
    </section>
    <section className="ChoosingTheatrInMapSection mt-30 pl-10 pr-10 ">
      <ChoosingTheatrInMapButtonFunction />
        <MapComponent />
    </section>
    <section className="SelectingASeat-section flex flex-col items-center mt-10">
      <h1 className="text-5xl text-white flex">Select a seat</h1>
      <div className="screen w-6/12 h-80 bg-white mt-10 border-8 border-white  shadow-[0_0_40px_10px_rgba(255,255,255,0.4)]  transition-all duration-300"></div>
    </section>

    <CreatingSeatsFunction />
    <FooterJSX />
    </div>
    </> 
}
export { globalChangeDetailedMovieData}
export default BuyingPage  ;