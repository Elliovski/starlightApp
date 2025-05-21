import "./login.css"
import { useState , useEffect } from "react";
import HeaderJSX from "../headerAll/header";
import FooterJSX from "../FooterAll/Footer";

function LoginPage() {
    //localStorage.removeItem('AllUserDataJSOn')
    //localStorage.removeItem("CurrentUserDataJSOn")


    let [CurrentUserData ,ChangeCurrentUserData] = useState(JSON.parse(localStorage.getItem("CurrentUserDataJSOn")) || [])
    let [AllUserData ,ChangeAllUserData] = useState(() => {
    const data = JSON.parse(localStorage.getItem("AllUserDataJSOn"));
    return Array.isArray(data) ? data : [];
});

    let [userName ,setUserName] = useState('')
    let [userEmail ,setUserEmail] = useState('')
    let [UserPassword ,setUserPassword] = useState('')
    
    console.log('AllUserData')
    console.log(AllUserData)
    console.log("CurrentUserData")
    console.log(CurrentUserData)


    useEffect(() => {
        if (AllUserData) {
          localStorage.setItem("AllUserDataJSOn", JSON.stringify(AllUserData));
        }
        console.log('AllUserData')
        console.log(AllUserData)
      }, [AllUserData]); // Runs when movieTheatrData changes
    useEffect(() => {
        if (CurrentUserData) {
          localStorage.setItem("CurrentUserDataJSOn", JSON.stringify(CurrentUserData));
        }
        console.log('CurrentUserData')
        console.log(CurrentUserData)
      }, [CurrentUserData]); // Runs when movieTheatrData changes


function signInButtonFunction(e) {
    e.preventDefault();

    if (!userName || !userEmail || !UserPassword) {
        alert("Please fill out all fields.");
        return;
    }

    const existingUser = AllUserData.find(
        user => user.newUserEmail === userEmail
    );

    if (existingUser) {
        alert("User already exists. Please log in instead.");
        return;
    }

    const newUser = {
        newUserName: userName,
        newUserEmail: userEmail,
        newUserPassword: UserPassword,
        id: Date.now(),
        boughtTickets: []
    };

    ChangeCurrentUserData(newUser);
    ChangeAllUserData(prev => [...prev, newUser]);
}

      function logInButtonFunction(e){
        e.preventDefault()
        
        
        let foundUserEmail = userEmail
        let foundUserPassword = UserPassword
          let foundUser = AllUserData.find(wantedUser => foundUserEmail == wantedUser.newUserEmail && foundUserPassword == wantedUser.newUserPassword  )
        if (foundUser){
            ChangeCurrentUserData(foundUser)
        }
        else {alert(foundUser)}
          
          
      }
    return (
        <div className="LoginPag-All  bg-black">
            <HeaderJSX />
        <section className="logIn-section min-h-[600px] h-auto flex items-center justify-center">
            <div className="wrapper">
                <div className="card-switch">
                    <label className="switch">
                        <input type="checkbox" className="toggle" />
                        <span className="slider"></span>
                        <span className="card-side"></span>
                        <div className="flip-card__inner">
                            <div className="flip-card__front">
                                <div className="title">Log in</div>
                                <form className="flip-card__form" action="">
                                    <input className="flip-card__input" name="email" placeholder="Email" type="email" onChange={(e) => setUserEmail(e.target.value)} />
                                    <input className="flip-card__input" name="password" placeholder="Password" type="password" onChange={(e) => setUserPassword(e.target.value)} />
                                    <button className="flip-card__btn" onClick={(e) => logInButtonFunction(e)  } >Log in !</button>
                                </form>
                            </div>
                            <div className="flip-card__back">
                                <div className="title">Sign up</div>
                                <form className="flip-card__form" action="">
                                    <input className="flip-card__input" id="input-name-id" placeholder="Name" type="text" onChange={(e) => setUserName(e.target.value)} />
                                    <input className="flip-card__input" id="input-email-id" name="email" placeholder="Email" type="email" onChange={(e) => setUserEmail(e.target.value)} />
                                    <input className="flip-card__input" id="input-password-id" name="password" placeholder="Password" type="password" onChange={(e) => setUserPassword(e.target.value)} />
                                    <button className="flip-card__btn" onClick={(e) => {signInButtonFunction(e)}}>Sign in !</button>
                                </form>
                            </div>
                        </div>
                    </label>
                </div>
            </div>
        </section>
            <FooterJSX />
        </div>
    );
}

export default LoginPage