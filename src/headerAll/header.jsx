import StarLightTicketRedLogo from "../ImagesAll/Manual - Copy.png"
import { globalChangePage } from "../App"

function HeaderJSX(){
    return <header className="aaaa w-full screen h-20 bg-[var(--color-signature)] fixed top-0 z-20">
        <ul className="flex items-center ">
            <div className="rightHeader-div flex">
                <li>
                    <button className="w-18 h-20 ml-10 cursor-pointer"onClick={() => {globalChangePage("MainPage")}}><img src={StarLightTicketRedLogo}></img></button>
                </li>
                
                <li>
                    <button className="w-100 h-20  cursor-pointer text-4xl text-black"onClick={() => {globalChangePage("MainPage")}}>STARLIGHT TICKET</button>
                </li>
            </div>
            <div className="leftHeader-div flex gap-10">
                <li className="text-black text-4xl border-b-2 h-full cursor-pointer" onClick={() => {globalChangePage("MainPage")}}>HOME</li>
                <li className="text-black text-4xl border-b-2 h-full cursor-pointer" onClick={() => {globalChangePage("PayingPage")}}>TICKETS</li>
                <li className="text-black text-4xl border-b-2 h-full cursor-pointer" onClick={() => {globalChangePage("MainPage")}}>ABOUT US</li>
                <li className="text-red-500 bg-black p-2 text-4xl  h-full cursor-pointer" onClick={() => {globalChangePage("MainPage")}}>LOG IN</li>
            </div>

        </ul>
    </header>
}

export default HeaderJSX