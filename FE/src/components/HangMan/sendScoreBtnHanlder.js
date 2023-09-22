import axios from "axios";

//hard coded datas to test the functionality of the code. feature yet to be implemented
export async function sendScoreBtnHanlder({youWon, gameOver}) {
  const postUrl = "http://localhost:4000/api/Users/newScore";
  const userData = {
    userName: "dio",
    time: new Date(),
    score: 5,
  };

  try {
    if (youWon == true || gameOver == true) {
      // Perform a POST request to create a new item using Axios
      const response = await axios.patch(postUrl, userData, {
        withCredentials: true,
      });
  
      console.log("patch response", response.data);
    }
  } catch (error) {
    // Handle errors (e.g., display an error message)
    console.error("Error accessing to the user profile", error);
  }
}
