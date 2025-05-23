import HeaderJSX from "../headerAll/header"
import FooterJSX from "../FooterAll/Footer";
import "../payingAll/payingAll.css"
import { globalChangePage , globalStoreMovieData } from "../App";
import { useState , useEffect} from "react";
import { MapContainer, TileLayer, Marker, Popup , useMap} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css"; // Import Leaflet styles
import LoginPage from "../LoginAll/login";

function PayingPage(){
  localStorage.removeItem('boughtDetailedMovieTicketsData')
  
  
  
  
    console.log('JSON.parse(localStorage.getItem("detailedMovieTicketsDataJSON"))')
    console.log(JSON.parse(localStorage.getItem("detailedMovieTicketsDataJSON")))
    let storedData = localStorage.getItem("PageData")
    let MovieData = storedData ? JSON.parse(storedData).movie : null;
    
    
    const [movieTheatrData, setMovieTheatrData] = useState(() => {
      const storedData =  localStorage.getItem("MovieTheatrData");
    return  JSON.parse(localStorage.getItem("MovieTheatrData")) })

  
  let [indexesOfYourSeats , changeIndexsesOfYourSeat ]  = useState((movieTheatrData["avalibleMovieTheatersForEachMovie"][MovieData["Title"]][String(JSON.parse(localStorage.getItem("chosenCinemachosenCinemaJSON"))) || "AMC Westmoreland 15"]["indexesOfYourSeats"])) || []
  let [indexesOfTakenSeats , changeIndexesOfTakenSeat ] = useState((movieTheatrData["avalibleMovieTheatersForEachMovie"][MovieData["Title"]][String(JSON.parse(localStorage.getItem("chosenCinemachosenCinemaJSON"))) || "AMC Westmoreland 15"]["indexesOfTakenSeats"])) || []
  let [detailedMovieTicketsData ,ChangedetailedMovieTicketsData] = useState(JSON.parse(localStorage.getItem("detailedMovieTicketsDataJSON")) || [])
  let [boughtDetailedMovieTicketsData ,ChangeBoughtetailedMovieTicketsData] = useState(JSON.parse(localStorage.getItem("boughtDetailedMovieTicketsData")) || [])
  let [AllUserData ,ChangeAllUserData] = useState(JSON.parse(localStorage.getItem("AllUserDataJSOn")) || [])
  let [CurrentUserData ,ChangeCurrentUserData] = useState(JSON.parse(localStorage.getItem("CurrentUserDataJSOn")) || [])

  useEffect(() => {
    if (CurrentUserData) {
      localStorage.setItem("CurrentUserDataJSOn", JSON.stringify(CurrentUserData));
    }
    console.log('CurrentUserData')
    console.log(CurrentUserData)
  }, [CurrentUserData]);

  useEffect(() => {
    if (AllUserData) {
      localStorage.setItem("AllUserDataJSOn", JSON.stringify(AllUserData));
    }
    console.log('AllUserData')
    console.log(AllUserData)
  }, [AllUserData]); // Runs when movieTheatrData changes

  useEffect(() => {
    if (movieTheatrData) {
      localStorage.setItem("MovieTheatrData", JSON.stringify(movieTheatrData));
    }
  }, [movieTheatrData]); // Runs when movieTheatrData changes

    useEffect(() => {
        localStorage.setItem("detailedMovieTicketsDataJSON", JSON.stringify(detailedMovieTicketsData));
        
      }, [detailedMovieTicketsData]);

    useEffect(() => {
    localStorage.setItem("boughtDetailedMovieTicketsData", JSON.stringify(boughtDetailedMovieTicketsData));
  }, [boughtDetailedMovieTicketsData]);

    console.log("boughtDetailedMovieTicketsData")
    console.log(boughtDetailedMovieTicketsData)
    function removeFromJson(seatIdToRemove) {
      
      

      
    ChangedetailedMovieTicketsData(detailedMovieTicketsData.filter(detailedMovieData => detailedMovieData.seatId !== seatIdToRemove))
    changeIndexsesOfYourSeat(indexesOfYourSeats.filter(seatId => seatId !== seatIdToRemove))

    const chosenCinema = String(JSON.parse(localStorage.getItem("chosenCinemachosenCinemaJSON"))) || "Cine Magic: Film Heaven";

    const updatedMovieTheatrData = { ...movieTheatrData }; // shallow copy
    updatedMovieTheatrData.avalibleMovieTheatersForEachMovie[MovieData.Title][chosenCinema].indexesOfYourSeats =
    updatedMovieTheatrData.avalibleMovieTheatersForEachMovie[MovieData.Title][chosenCinema].indexesOfYourSeats.filter(seatId => seatId !== seatIdToRemove);

  setMovieTheatrData(updatedMovieTheatrData);
            
    }
    function buyAllTickets(){
      const updatedUserData = { ...CurrentUserData , boughtTickets:[...(CurrentUserData.boughtTickets || []),...detailedMovieTicketsData] };
      if (!Array.isArray(updatedUserData.boughtTickets)) {
        updatedUserData.boughtTickets = [];
      }

      

      let newAllUserData = AllUserData.map(UserData => updatedUserData.id == UserData.id ? updatedUserData : UserData)
      ChangeCurrentUserData(updatedUserData)
      ChangeAllUserData(newAllUserData)

      //ChangeBoughtetailedMovieTicketsData((prev) => [...prev, ...detailedMovieTicketsData])
      ChangedetailedMovieTicketsData([])
      changeIndexsesOfYourSeat([])
      const newlyBoughtSeatIds = detailedMovieTicketsData.map(ticket => ticket.seatId);


    const updatedTakenSeats = [...indexesOfTakenSeats, ...newlyBoughtSeatIds];

    
    
    changeIndexesOfTakenSeat(updatedTakenSeats);
    
    const chosenCinema = String(JSON.parse(localStorage.getItem("chosenCinemachosenCinemaJSON"))) || "Cine Magic: Film Heaven";
    const updatedMovieTheatrData = { ...movieTheatrData }; // shallow copy
    updatedMovieTheatrData.avalibleMovieTheatersForEachMovie[MovieData.Title][chosenCinema].indexesOfYourSeats = []
    updatedMovieTheatrData.avalibleMovieTheatersForEachMovie[MovieData.Title][chosenCinema].indexesOfTakenSeats = updatedTakenSeats
    
    
    
    setMovieTheatrData(updatedMovieTheatrData);

    console.log('updatedTakenSeats')
    console.log(updatedTakenSeats)
    console.log('indexesOfTakenSeats')
    console.log(indexesOfTakenSeats)
      }
    
      let [visibilityOfDetailedInfoPage ,setvisibilityOfDetailedInfoPage ] = useState(false)
      let [iButtonInfo, setIbuttonInfo] = useState([])
      function iButtonClick (detailedMovieData){
        
        console.log('detailedMovieData')
        console.log(detailedMovieData)
        
        console.log("detailedMovieData.coordinates")
        console.log(detailedMovieData.coordinates)
        setIbuttonInfo(detailedMovieData)
        setvisibilityOfDetailedInfoPage(true)
      }
    

    let [stateOfSwitch , changeStateOfSwitch ] = useState("Cart")
    function pressCartButton(){
      if (CurrentUserData){
        if(stateOfSwitch === "Cart")
          changeStateOfSwitch("Owned")
        else {
          changeStateOfSwitch("Cart")
        }
      }
      else {globalChangePage("LoginPage")}

    }
    

    function RecenterMap({coordinates}){
      const map = useMap()
      useEffect(() => {
        if(coordinates){
          map.setView(coordinates,map.getZoom())
        }
      },[coordinates]
    
      )
      return null;
    }

    let handleChildEventClick= (event) =>{
      event.stopPropagation()
      
    }
    return (
    
    <div className="PayingPage-div bg-black pt-30">
    <HeaderJSX />
    <div className="switchOfPage-div flex items-center justify-center  ">
      <div className={`buttonContainer-div mb-5  rounded-full   cursor-pointer transition-all duration-500 ${stateOfSwitch === "Cart" ? "pl-7 bg-white" : "bg-red-600 pr-10 "}`}>
        <button  onClick={() => {pressCartButton()}} 
        className={`SwitchOfPage  rounded-full text-1xl p-2  ${stateOfSwitch === "Cart" ? "bg-red-600 text-white" : "bg-white text-black"}`}>{stateOfSwitch}</button>
      </div>
    </div>

    <div className="ticketAll-div grid gap-7">
    {(stateOfSwitch === "Cart" ? detailedMovieTicketsData : CurrentUserData.boughtTickets).map((detailedMovieData, index) => (
      <div className="ticketContainer cursor-default flex" key={index}>
        <div className="ticket ml-10" key={index}>
        <div className="ticket-left">
          <img src={detailedMovieData.Poster} alt="" />
        </div>
        <div className="ticket-right">
          <h2 className="text-1xl">{detailedMovieData.Title}</h2>
          <div className="ticket-details">
            <div className="detail flex items-center flex-col"><strong>HALL</strong>B</div>
            <div className="detail flex items-center flex-col"><strong>COLUMN</strong>{detailedMovieData.column}</div>
            <div className="detail flex items-center flex-col"><strong>SEAT</strong>{detailedMovieData.seatId}</div>
          </div>
          <p><strong>{detailedMovieData.movieALLdata.Released}</strong> &nbsp;&nbsp;&nbsp; {detailedMovieData.movieALLdata.Runtime}</p>
          <p className="flex  flex-col"><strong>{detailedMovieData.cinema}</strong>{detailedMovieData.street}</p>
        </div>
        <div className="ticket-perforation"></div>
        <div className="ticket-tab">{detailedMovieData.cinema}</div>
      </div>
      <div className="buttonsForTicket-div flex flex-col justify-center pl-2">
      {stateOfSwitch === "Cart" ? (
      <>
        <button onClick={() => {globalChangePage("BuyingPage") , globalStoreMovieData(detailedMovieData.movieALLdata)}} className="getMore-button bg-green-700 hover:bg-green-600 transition duration-300 w-fit cursor-pointer pl-5 pr-5 pt-2 pb-2 rounded-full text-1xl text-white ">Get More</button>
        <button onClick={() => {removeFromJson(detailedMovieData.seatId)}} className="romove-button getMore-button bg-red-700 hover:bg-red-600 transition duration-300 cursor-pointer pl-5 pr-5 pt-2 pb-2 rounded-4xl text-1xl text-white">Remove ticket</button>
      </>
      )
      : <button className="i-button bg-gray-100 text-3xl rounded-full flex justify-center items-center pl-5 pr-5 pt-1 pb-1 transition-colors duration-300 hover:bg-white " style={{fontFamily : "Arial"}} 
      

       onClick={() => {iButtonClick(detailedMovieData)}}
       data-title={`${detailedMovieData.Title}`}  data-cinema={`${detailedMovieData.cinema}`} data-seat-id={`${detailedMovieData.seatId}`} data-poster={`${detailedMovieData.Poster}`}>i</button>}



    <div className="moreInfoDiv bg-black/10  fixed  top-0 left-0 p-20 w-screen h-screen flex flex-col sm:flex-row  sm:justify-center sm:items-center" style={{ visibility: visibilityOfDetailedInfoPage ? "visible" : "hidden" }} 
    onClick={() => setvisibilityOfDetailedInfoPage(false)}>
    <div className="moreInfoDivContainer relative bg-red-600 w-300 h-150 p-10 " onClick={(e) => {handleChildEventClick(e)}}>
      <div className="upperInfoDiv flex   gap-10">
        <img src={`${iButtonInfo.Poster}`} alt="" className="w-2/12 auto" />
        <div className="movieInfo ">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-5xl text-white">{iButtonInfo.Title}</p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white">
              {iButtonInfo?.movieALLdata?.Runtime || "Loading..."}
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white">
              {iButtonInfo?.movieALLdata?.Released || "Loading..."}
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white">
              {iButtonInfo?.movieALLdata?.Rated || "Loading..."}
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white">{iButtonInfo.cinema}</p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white">Column {iButtonInfo.column}</p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white">Seat : {iButtonInfo.seatId}</p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white">{iButtonInfo.street}</p>
            <div className="ticket-perforationIButton" ></div>
        </div>
          </div>
        {Array.isArray(iButtonInfo?.coordinates) &&
 iButtonInfo.coordinates.length === 2 &&
 typeof iButtonInfo.coordinates[0] === "number" &&
 typeof iButtonInfo.coordinates[1] === "number" ? (
  <MapContainer
    center={iButtonInfo.coordinates}
    zoom={18}
    scrollWheelZoom={true}
    className="hidden sm:block w-11/12 h-64"
  >
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    />
    <Marker position={iButtonInfo.coordinates}>
      <Popup>Example Location</Popup>
    </Marker>
    <RecenterMap coordinates={iButtonInfo.coordinates} />
  </MapContainer>
) : (
  <div className="text-white text-2xl">No map available</div>
)}
      
  
      
      </div>
    </div>
        
      </div>
    </div>
      ))}
    </div>
    

      <section className={`add-card page flex  justify-center ${stateOfSwitch === "Cart" ? "visible" : "hidden"}`} >
        <form className="form ">
          <label htmlFor="name" className="label">
            <span className="title">Card holder full name</span>
            <input
              className="input-field"
              type="text"
              name="input-name"
              title="Input title"
              placeholder="Enter your full name"
            />
          </label>
          <label htmlFor="serialCardNumber" className="label">
            <span className="title">Card Number</span>
            <input
              id="serialCardNumber"
              className="input-field"
              type="number"
              name="input-name"
              title="Input title"
              placeholder="0000 0000 0000 0000"
            />
          </label>
          <div className="split">
            <label htmlFor="ExDate" className="label">
              <span className="title">Expiry Date</span>
              <input
                id="ExDate"
                className="input-field"
                type="text"
                name="input-name"
                title="Expiry Date"
                placeholder="01/23"
              />
            </label>
            <label htmlFor="cvv" className="label">
              <span className="title"> CVV</span>
              <input
                id="cvv"
                className="input-field"
                type="number"
                name="cvv"
                title="CVV"
                placeholder="CVV"
              />
            </label>
          </div>
          <input className="checkout-btn" type="button" value="Purchase" onClick={() => {CurrentUserData ? buyAllTickets() : globalChangePage("LoginPage")}}/>
        </form>
      </section>

    <FooterJSX />
    </div>)

}
export default PayingPage