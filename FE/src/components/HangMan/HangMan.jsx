import { useState, useEffect } from "react";
import { KeyboardHM } from "./KeyboardHM";
import { WordToGuess } from "./WordToGuess";
import HG1 from "../../images/HG1.svg"
import HG2 from "../../images/HG2.svg"
import HG3 from "../../images/HG3.svg"
import HG4 from "../../images/HG4.svg"
import HG5 from "../../images/HG5.svg"
import HG6 from "../../images/HG6.svg"
import HGVictory from "../../images/HGVictory.svg"

function HangMan({currentUser}) {
  let [guessWord, setGuessWord] = useState("");
  let [guessedLetter, setGuessedLetter] = useState('')
  let [gameOver, setGameOver] = useState(false);
  let [youWon, setYouWon] = useState(false);
  let [attemptsLeft, setAttemptsLeft] = useState(7);
  let [picToDisplay, setPicToDisplay] = useState(`HG${attemptsLeft}`)
/*   console.log(picToDisplay) */

   // Use useEffect to update picToDisplay when attemptsLeft changes
   useEffect(() => {
    setPicToDisplay(`HG${attemptsLeft}`);
  }, [attemptsLeft]);


  return (
    <div className="w-full h-[90vh] bg-pink-400 justify-start items-center p-[1rem] flex flex-col ">
      <h1 className="w-[85%] h-[5vh] flex justify-center items-start bg-purple-400 rounded-md border border-purple-700 text-black">
        HangMan: {attemptsLeft}
      </h1>
      <div className="flex w-full h-[85vh] gap-8">
        <div className="w-1/2 h-[85vh] flex justify-center items-center">
          {/* Use dynamic import based on picToDisplay */}
          {picToDisplay === "HG0" && youWon==false && <img src={HG1} alt="Hangman" className="w-full h-5/6 flex justify-start items-center" />}
          {picToDisplay === "HG1" && youWon == false && <img src={HG1} alt="Hangman" className="w-full h-5/6 flex justify-start items-center" />}
        {picToDisplay === "HG2" && youWon==false && <img src={HG2} alt="Hangman" className="w-full h-5/6 flex justify-start items-center" />}
        {picToDisplay === "HG3" && youWon==false && <img src={HG3} alt="Hangman" className="w-full h-5/6 flex justify-start items-center" />}
        {picToDisplay === "HG4" && youWon==false && <img src={HG4} alt="Hangman" className="w-full h-5/6 flex justify-start items-center" />}
        {picToDisplay === "HG5" && youWon==false && <img src={HG5} alt="Hangman" className="w-full h-5/6 flex justify-start items-center" />}
          {picToDisplay === "HG6" && youWon == false && <img src={HG6} alt="Hangman" className="w-full h-5/6 flex justify-start items-center" />}
          {picToDisplay === "HG7" && youWon==false && <img src={HG6} alt="Hangman" className="w-full h-5/6 flex justify-start items-center" />}
          {youWon==true && <img src={HGVictory} alt="Hangman" className="w-full h-5/6 flex justify-start items-center" />}
        </div>
          <div className="w-1/2 h-[85vh] flex flex-col justify-evenly item">
          <WordToGuess guessWord={guessWord} guessedLetter={guessedLetter} youWon={youWon} setYouWon={setYouWon} gameOver={gameOver} setGameOver={setGameOver} attemptsLeft={attemptsLeft} setAttemptsLeft={setAttemptsLeft} />
          {/*the keyboard component regulates the built-in keyboard of the game HangMan*/}
          <KeyboardHM setGuessWord={setGuessWord} guessWord={guessWord} setGuessedLetter={setGuessedLetter} guessedLetter={guessedLetter} youWon={youWon} gameOver={gameOver} currentUser={currentUser} attemptsLeft={attemptsLeft} />
          </div>
      </div>
    </div>
  );
}

export default HangMan;

/* {displayGuessWord.map((letter, i) => {
          return (
            <div
              key={i}
              className="border-b-4 border-black text-black bg-white rounded-md w-8 h-8 flex justify-center items-center"
            >
              {letter}
            </div>
          );
        })} */
