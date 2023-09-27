import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import dateFormat from "dateformat";
import deleteScoreBtnHanlder from "./deleteScoreBtnHanlder";

function Ratings({ currentUser, setCurrentUser, isLoggedIn }) {
  const navigate = useNavigate();
  const [avg, setAvg]=useState('')

  useEffect(() => {
    // Controlla se l'utente non è loggato e quindi naviga alla pagina di login
    if (!isLoggedIn) {
      navigate("/Login");
    }
  }, [isLoggedIn, navigate]);

  useEffect(() => {
    if (isLoggedIn == true) {
      let sum = 0;
      console.log(currentUser)
      currentUser.scoresHG.forEach((el) => {
        sum += el.score;
      });
      console.log(sum)
      let avg = Math.round(sum/currentUser.scoresHG.length);
      console.log(avg)
      setAvg(avg)
    }
  },[isLoggedIn])

  if (isLoggedIn == true) {
    return (
      <div className="w-full h-[90vh] bg-pink-400 flex flex-col flex-grow items-center justify-center gap-2">
        <div className="border border-purple-700 rounded-lg text-2xl bg-black text-yellow-400 px-2">
          Hangman Ratings
        </div>
        <div className="w-1/3 h-4/6 overflow-y-auto flex flex-col items-center justify-start bg-purple-400 border border-black rounded-lg gap-2 p-2">
          <div>Average Score: {avg}</div>
          <div className="gap-2 flex flex-col">
            Top Scores:
            {currentUser.scoresHG.map((el, i) => {
              return (
                <section className="flex items-start justify-center" key={i}>
                  <div className="bg-white border border-black rounded-md flex flex-col italic p-2 overflow-auto">
                    <div>
                      {dateFormat(el.time, "dddd, mmmm dS, yyyy, h:MM:ss TT")}
                    </div>
                    <div>Score: {el.score}</div>
                  </div>
                  <button
                    onClick={() => {
                      deleteScoreBtnHanlder({ currentUser, el, i });
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
                </section>
              );
            })}
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default Ratings;
