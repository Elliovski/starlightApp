import StarLightTicketRedLogo from "../ImagesAll/Manual - Copy.png"
import { globalChangePage } from "../App"

function HeaderJSX(){
    return <header className="aaaa w-full screen h-20 bg-[var(--color-signature)] fixed top-0 z-20">
        <button className="w-18 h-20 ml-10 cursor-pointer"onClick={() => {globalChangePage("MainPage")}}><img src={StarLightTicketRedLogo}></img></button>
    </header>
}

export default HeaderJSX