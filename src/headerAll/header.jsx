import StarLightTicketRedLogo from "../ImagesAll/Manual - Copy.png"
import StarLightTicketBlackLogo from "../ImagesAll/Screenshot 2025-03-14 150411 - Copy.png"
import ticketSvg from "../ImagesAll/785683.png"
import searcSvg from "../ImagesAll/Search_Icon.svg.png"
import about from "../ImagesAll/4181324-200.png"

import "./header.css"
import SearchBar from "./Main Search/Searchbar"
import { globalChangePage } from "../App"
import { useState , useEffect } from "react"




function HeaderJSX(){


  let [CurrentUserData ,ChangeCurrentUserData] = useState(JSON.parse(localStorage.getItem("CurrentUserDataJSOn")) || [])
  let [visibilityOfBurger , changeVisibilityOfBurger] = useState(false)
  function burgerclickFunction(){
    if (visibilityOfBurger){
      changeVisibilityOfBurger(false)
    }
    else{changeVisibilityOfBurger(true)}
  }
  function handleScreensizeWidth(){
    let [screenSize , setScreenSize] = useState(window.innerWidth)
    let [functionValue , setfunctionValue] = useState(false)
    useEffect(() => {
        const handleScreenResize = () => {setScreenSize(window.innerWidth)}
        window.addEventListener('resize' , handleScreenResize)
        return () => window.removeEventListener('resize' , handleScreenResize)
    },[])

    useEffect(() => {
        
        if (screenSize < 1200){setfunctionValue(true)}
        else {setfunctionValue(false)}
    },[screenSize])

    return(functionValue)
}
const [isHovered, setIsHovered] = useState(false);
const [isHovered1, setIsHovered1] = useState(false);

    return <header className=" w-full screen h-20  fixed top-0 z-20" style={{backgroundColor : "red"}} >
                <div className={`hiddenHeadeAll-div w-screen h-screen bg-black/70 ${visibilityOfBurger ? 'visible' : "hidden"}`} onClick={() => {burgerclickFunction()}}>
            <div className="hiddenHeader bg-[red] h-full w-100" onClick={(event) => {event.stopPropagation()}}>
              <ul className="pt-20 ">
                <li onClick={() => {globalChangePage("MainPage")}} onMouseEnter={() => {setIsHovered(true)}} onMouseLeave={() => {setIsHovered(false)}} className="border-[1px] border-l-0 border-r-0 border-white  h-14 w-full  flex items-center justify-evenly  text-2xl hover:bg-black hover:text-red-600 transition-all duration-200">
                  {isHovered ? <img src={StarLightTicketBlackLogo} alt="" className="h-11/12 "/> : <img src={StarLightTicketRedLogo} alt="" className="h-11/12 "/>}
                  STARLIGHT TICKET</li>
                
                <li onClick={() => {globalChangePage("PayingPage")}}   className="border-[1px] border-l-0 border-r-0 border-white  h-14 w-full  flex items-center justify-evenly  text-2xl text-white hover:bg-black hover:text-white transition-all duration-200 "><img className="h-11/12 " src={ticketSvg} alt="" /><p className="min-w-55"> YOUR TICKETS</p></li>
                <li onClick={() => {globalChangePage("MainPage")}}  className="border-[1px] border-l-0 border-r-0 border-white  h-14 w-full  flex items-center justify-evenly  text-2xl text-white hover:bg-black hover:text-white transition-all duration-200"><img className="h-11/12 " src={about} alt="" /><p className="min-w-55">ABOUT US</p></li>
                <li onClick={() => {globalChangePage("MainPage")}}  className="border-[1px] border-l-0 border-r-0 border-white  h-14 w-full  flex items-center justify-evenly  text-2xl text-white hover:bg-black hover:text-white transition-all duration-200"><img className="h-11/12 " src={searcSvg} alt="" /><p className="min-w-55">SEARCH MOVIES</p></li>
              </ul>

            </div>

          </div>
      {handleScreensizeWidth() ? <div className="burgerAll-div">
        
                <div className="burgerContainer-div  h-20 flex justify-center items-center top-0 z-20 ">

                  <div className="burger-background  flex items-center justify-center" onClick={() => {burgerclickFunction()}}>
            <button className="burgerMenu__icon items-center">
              <span></span>
              <span></span>
              <span></span>
            </button>
            </div> 
          </div>

        </div>
    :
  <ul className="flex items-center justify-around">
            <div className="rightHeader-div flex">
                <li>
                    <button onMouseLeave={() => {setIsHovered1(false)}} onMouseEnter={() => {setIsHovered1(true)}} className="w-18 h-20 ml-10 cursor-pointer hover:bg-black p-1"onClick={() => {globalChangePage("MainPage")}}>
                      {isHovered1 ? <img src={StarLightTicketBlackLogo} alt="" className="h-11/12 "/> : <img src={StarLightTicketRedLogo} alt="" className="h-11/12 "/>}
                    </button>
                </li>
                
                <li>
                    <button className="w-100 h-20  cursor-pointer text-3xl text-black hover:text-white duration-500"onClick={() => {globalChangePage("MainPage")}}>STARLIGHT TICKET</button>
                </li>
            </div>
            <div className="rightHeader-div flex w-[800px] justify-around ">
                
                <button className="btn" onClick={() => {globalChangePage("PayingPage")}}>YOUR TICKETS </button>
                <button className="btn" onClick={() => {globalChangePage("MainPage")}}>ABOUT US </button>
                <button className="btn" onClick={() => {globalChangePage("MainPage")}}>SEARCH MOVIES</button>
                {CurrentUserData ?"" : (<button className="signUp-button">
    Sign up
    <div className="arrow-wrapper">
        <div className="arrow"></div>

    </div>
                </button>)}
          
                
                <div onClick={() => {globalChangePage("LoginPage")}}
  aria-label="User Login Button"
  tabIndex="0"
  role="button"
  className="user-profile left-0"
>
  <div className="user-profile-inner">
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <g data-name="Layer 2" id="Layer_2">
        <path
          d="m15.626 11.769a6 6 0 1 0 -7.252 0 9.008 9.008 0 0 0 -5.374 8.231 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 9.008 9.008 0 0 0 -5.374-8.231zm-7.626-4.769a4 4 0 1 1 4 4 4 4 0 0 1 -4-4zm10 14h-12a1 1 0 0 1 -1-1 7 7 0 0 1 14 0 1 1 0 0 1 -1 1z"
        ></path>
      </g>
    </svg>
    <p>{CurrentUserData ? "" : "Log in"}</p>
  </div>
                </div>
            </div>

        </ul>
    }
        
    </header>
}

export default HeaderJSX