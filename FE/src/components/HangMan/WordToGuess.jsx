import { hangManWordsArr } from "./hangManWordsArr";
import { useState, useEffect, useRef } from "react";
import axios from "axios";

//THIS COMPONENT HANDLES ALL FUNCTIONS RELATED WITH FETCHING A JSON OF WORDS TO GUESS FROM THE DB, RANDOMLY CHOOSING ONE AND DISPLAYING IT CORRECTLY

export function WordToGuess({ guessWord, guessedLetter, youWon, setYouWon, gameOver, setGameOver }) {
  //array that corresponds to the letters forming the word to be guessed
  /* const wordToGuess = hangManWordsArr[0].split(""); */
  let [wordToGuess, setWordToGuess] = useState("");
/*   let [gameOver, setGameOver] = useState(false);
  let [youWon, setYouWon] = useState(false); */

  //this useeffect hook fetches a random word from the BE rest api
  useEffect(() => {
    const fetchData = async () => {
      try {
        const getUrl = "http://localhost:4000/api/Users/random-word";
        const fetchWordToGuess = await axios.get(getUrl);
        // Now you can work with the fetched data, for example, log it:
        console.log("Random Word:", fetchWordToGuess.data.response);
        setWordToGuess(fetchWordToGuess.data.response);
      } catch (error) {
        // Handle any errors that occurred during the fetch here
        console.error("Error fetching data:", error);
      }
    };

    // Call the async function
    fetchData();
  }, []);

  const [displayWordToGuess, setDisplayWordToGuess] = useState(
    Array(wordToGuess.length).fill("?")
  );

  const [attemptsLeft, setAttemptsLeft] = useState(5);

  //every time the state variable wordToGuess updates (which happens only on the first rendering), this hook takes the variable 'word to guess and splits it into an array substituting each letter with question marks'
  useEffect(() => {
    setDisplayWordToGuess(Array(wordToGuess.length).fill("?"));
  }, [wordToGuess]);

  //each time that the guessedWord changes, this hook checks if the word to guess contains last letter picked and updates the variable displayWordToGuess
  useEffect(() => {
    let flag = false;

    if (gameOver == true) {
      return;
    }

    for (let i = 0; i < wordToGuess.length; i++) {
      if (wordToGuess[i] == guessedLetter) {
        const removedArr = displayWordToGuess.splice(i, 1, guessedLetter);
        setDisplayWordToGuess([...displayWordToGuess]);

        flag = true;
      }
    }
   /*  console.log(`the display word to guess is ${displayWordToGuess}`)
  console.log(`the word to guess is ${wordToGuess.split('')}`)
    if (wordToGuess.split('') == displayWordToGuess) {
      setYouWon(true)
    } */
   

    //if the word does not contain the latest guessed letter, this fn subtracts '1' from the # of attempts left
    console.log(displayWordToGuess);
    if (flag == false && attemptsLeft >= 0) {
      setAttemptsLeft(attemptsLeft - 1);
      if (attemptsLeft == 0) {
        setGameOver(true);
      }
      console.log(attemptsLeft);
    }
  }, [guessedLetter]);


  //this hook ends the game in case the displayed word and the word to guess correspond.
  useEffect(() => {
    console.log(`the display word to guess is ${displayWordToGuess.join('')}`)
    console.log(`the word to guess is ${wordToGuess}`)
    if (displayWordToGuess.join('')== wordToGuess && attemptsLeft > 0 && displayWordToGuess!='') {
      setYouWon(true);
      console.log('youWon');
      console.log(Array(displayWordToGuess).includes('?'))
    }
  },[displayWordToGuess, wordToGuess, youWon, attemptsLeft])

  return (
    <>
      {/* this component renders only if the game did not end */}
      {gameOver == false && youWon!=true && (
        <div className="flex justify-center items-end gap-2">
          {displayWordToGuess.map((letter, i) => {
            return (
              <div
                key={i}
                className="bg-white text-black w-8 h-8 flex justify-center items-center border-b-2 border-black rounded-md"
              >
                {letter}
              </div>
            );
          })}
        </div>
      )}
      {gameOver == true && (
        <div>congrtulation: lost the game hecking looser.</div>
      )}
      {youWon == true && (<div>you won: press on the send score btn and submit your score</div>)}
    </>
  );
}
