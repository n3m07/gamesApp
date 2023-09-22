import { hangManWordsArr } from "./hangManWordsArr";
import { useState, useEffect } from "react";
import { KeyboardHM } from "./KeyboardHM";
import { WordToGuess } from "./WordToGuess";
import axios from 'axios'

function HangMan() {
  let [guessWord, setGuessWord] = useState("");
  let [guessedLetter, setGuessedLetter] = useState('')
  let [gameOver, setGameOver] = useState(false);
  let [youWon, setYouWon] = useState(false);


  return (
    <div className="w-full h-[85vh] bg-pink-400 justify-start items-center p-[1rem] flex flex-col ">
      <h1 className="w-[85%] h-[5vh] flex justify-center items-start bg-purple-400 rounded-md border border-purple-700 text-black">
        HangMan
      </h1>
      <div className="w-[85%] h-[60vh] flex justify-center items-end pb-4 ">
        <WordToGuess guessWord={guessWord} guessedLetter={guessedLetter} youWon={youWon} setYouWon={setYouWon} gameOver={gameOver} setGameOver={setGameOver} />
      </div>
      {/*the keyboard component regulates the built-in keyboard of the game HangMan*/}
      <KeyboardHM setGuessWord={setGuessWord} guessWord={guessWord} setGuessedLetter={setGuessedLetter} guessedLetter={guessedLetter} youWon={youWon} gameOver={gameOver} />
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
