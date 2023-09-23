import { hangManWordsArr } from "./hangManWordsArr";
import { useState, useEffect, useRef } from "react";
import axios from "axios";

//THIS COMPONENT HANDLES ALL FUNCTIONS RELATED WITH FETCHING A JSON OF WORDS TO GUESS FROM THE DB, RANDOMLY CHOOSING ONE AND DISPLAYING IT CORRECTLY

export function WordToGuess({ guessedLetter, youWon, setYouWon, gameOver, setGameOver, attemptsLeft, setAttemptsLeft }) {
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
    if (flag == false && attemptsLeft > 1) {
      setAttemptsLeft(attemptsLeft - 1);
      if (attemptsLeft == 1) {
        setGameOver(true);
      }
      console.log(attemptsLeft);
    }
  }, [guessedLetter]);


  //this hook ends the game in case the displayed word and the word to guess correspond.
  useEffect(() => {
    console.log(`the display word to guess is ${displayWordToGuess.join('')}`)
    console.log(`the word to guess is ${wordToGuess}`)
    if (displayWordToGuess.join('')== wordToGuess && attemptsLeft > 1 && displayWordToGuess!='') {
      setYouWon(true);
      console.log('youWon');
      console.log(Array(displayWordToGuess).includes('?'))
    }
  },[displayWordToGuess])

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
        <div className="text-2xl italic font-bold text-red-600">You are such a disappointment...</div>
      )}
      {youWon == true && (<div className="text-2xl italic text-black"><span className="font-bold text-yellow-700">Congratulations:</span> press on the '<span className="text-green-700">send score</span>' btn to submit your score</div>)}
    </>
  );
}
