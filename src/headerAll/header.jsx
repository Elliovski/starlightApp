import StarLightTicketRedLogo from "../ImagesAll/Manual - Copy.png"
import "./header.css"
import SearchBar from "./Main Search/Searchbar"
import { globalChangePage } from "../App"
import { useState } from "react"




function HeaderJSX(){


  let [CurrentUserData ,ChangeCurrentUserData] = useState(JSON.parse(localStorage.getItem("CurrentUserDataJSOn")) || [])


    return <header className="aaaa w-full screen h-20 bg-[var(--color-signature)] fixed top-0 z-20">
        <ul className="flex items-center ">
            <div className="rightHeader-div flex">
                <li>
                    <button className="w-18 h-20 ml-10 cursor-pointer"onClick={() => {globalChangePage("MainPage")}}><img src={StarLightTicketRedLogo}></img></button>
                </li>
                
                <li>
                    <button className="w-100 h-20  cursor-pointer text-3xl text-black hover:text-white duration-500"onClick={() => {globalChangePage("MainPage")}}>STARLIGHT TICKET</button>
                </li>
            </div>
            <div className="leftHeader-div flex gap-10">
                
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
    </header>
}

export default HeaderJSX