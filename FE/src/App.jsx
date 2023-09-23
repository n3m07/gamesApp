import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import MoreInfo from "./components/moreInfo/MoreInfo";
import Contacts from "./components/Contacts";
import NotFound from "./components/NotFound";
import Login from "./components/Login/Login";
import HangMan from "./components/HangMan/HangMan";
import { useCookies } from "react-cookie";
import { useState, useEffect } from "react";
import Ratings from "./components/ratings/Ratings";

function App() {
  const [cookies, setCookie] = useCookies("");
  let [isLoggedIn, setIsLoggedIn] = useState(false);
  let [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    if (currentUser.isAdmin == true) {
      console.log("carciofi");
    } else {
      console.log("patate");
    }
  }, [currentUser]);

  return (
    <>
      <Router className="w-screen h-screen bg-pink-300">
        {/* header is the nav menu which is common to each page of the router */}
        <NavBar />
        <Routes>
          <Route
            path="/Login"
            element={
              <Login
                cookies={cookies}
                setCookies={setCookie}
                setIsLoggedIn={setIsLoggedIn}
                isLoggedIn={isLoggedIn}
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            }
          />
          <Route path="/" element={<Home isLoggedIn={isLoggedIn}/>} />
          <Route path="/MoreInfo" element={<MoreInfo />} />
          <Route path="/Contacts" element={<Contacts />} />
          <Route path="/HangMan" element={<HangMan currentUser={currentUser} />} />
          <Route path="*" element={<NotFound />}></Route>
          <Route
            path="/Ratings"
            element={
              <Ratings
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
                isLoggedIn={isLoggedIn}
              />
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
