import { sendScoreBtnHanlder } from "./sendScoreBtnHanlder";
//THIS COMPONENTS HANDLES EVERYTHING RELATED TO THE BUILT-IN KEYBOARD OF THE HANGMAN GAME

export function KeyboardHM({setGuessWord, guessWord, setGuessedLetter, guessedLetter, youWon, gameOver, currentUser, attemptsLeft }) {
  const lettersStg = "qwertyuiopasdfghjklzxcvbnmàèìòù";
  const letterArr = [...lettersStg.split("")];

  function clickHandler(letter) {
    setGuessWord(guessWord + letter)
    setGuessedLetter(letter)
    console.log(guessedLetter)
  }

 //div with inside a map that generates a button for each letter of the array 'letterArr'
  return (
    <div className="w-full max-h-[60vh] flex justify-center flex-wrap items-start p-4 bg-purple-400 border border-purple-700 rounded-lg overflow-y-auto">
      {letterArr.map((letter, i) => {
        return (
          <button
            className="border border-white text-yellow-400 bg-black rounded-md w-8 h-8 flex justify-center items-center"
            onClick={()=>clickHandler(letter)}
            key={i}
          >
            {letter}
          </button>
        );
      })}
      <button className="border border-white text-green-400 bg-black rounded-md w-[8rem] h-8 flex justify-center items-center" onClick={()=>{sendScoreBtnHanlder({youWon, gameOver, currentUser, attemptsLeft})}}>
        send score
      </button>
    </div>
  );
}
