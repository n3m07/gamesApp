import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home({ isLoggedIn }) {
  
  //this hook redirects the user to the login form in case the user ain't logged
  const navigate = useNavigate();

  useEffect(() => {
    // Controlla se l'utente non è loggato e quindi naviga alla pagina di login
    if (isLoggedIn == false) {
      navigate("/Login");
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className="w-full h-[90vh] bg-pink-400 border border-black p-4 flex flex-col justify-start items-center">
      <div className="h-1/3">
        <div className="bg-black text-yellow-400 border-yellow-400 border rounded-md text-3xl p-2 font-bold italic mt-4">
          GameS
        </div>
      </div>
      <div className="h-2/3 text-2xl italic font-bold underline flex flex-col gap-2 bg-white border border-black rounded-xl w-2/3 justify-center items-center">
        <ul>
          <li><Link to="/HangMan">-HangMan-</Link></li>
          <li>-Snake <span className="text-sm"> (...to be implemented)</span></li>
          <li>-Tetris <span className="text-sm"> (...to be implemented)</span></li>
          <li>-tic-tac-toe <span className="text-sm"> (...to be implemented)</span></li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
