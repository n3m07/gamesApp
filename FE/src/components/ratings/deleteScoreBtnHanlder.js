import axios from "axios";

export default async function deleteScoreBtnHanlder({ currentUser, el, i }) {
  
  const deleteUrl = `http://localhost:4000/api/Users/deleteScore`;
  const data = {
    userName: currentUser.userName,
    scoreId: el._id,
    index: i,
  };
  console.log(data);

  try {
    // Perform a POST request to create a new item using Axios
    const response = await axios.delete(deleteUrl, data);

    console.log("deleted element", response.data);
  } catch (error) {
    // Handle errors (e.g., display an error message)
    console.error("Error deleting the score", error);
  }
}
