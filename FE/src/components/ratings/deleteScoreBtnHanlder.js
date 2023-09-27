import axios from "axios";

export default async function deleteScoreBtnHanlder({ currentUser, el, i }) {
  const deleteUrl = `http://localhost:4000/api/Users/deleteScore`;
  const data = {
    userName: currentUser.userName,
    scoreId: el._id,
    index: i,
  };
  console.log(data);

  //the axios delete method does not accepts data by default therefore it has to be inserted as an object
  try {
    const response = await axios.delete(deleteUrl, { data: data });

    console.log("deleted element", response.data);
  } catch (error) {
    // Handle errors (e.g., display an error message)
    console.error("Error deleting the score", error);
  }
}
