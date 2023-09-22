import axios from "axios";

export async function subscribeBtnHandler({nickName, pw}) {
  console.log(`the nickname is ${nickName} and the pw is ${pw}`);
  const postUrl = "http://localhost:4000/api/Users/";
  const userData = {
    userName: nickName,
    pw: pw,
  };
  if (!nickName || !pw) {
    console.error("Nickname and password are required");
    return;
  }

  try {
    // Perform a POST request to create a new item using Axios
    const response = await axios.post(postUrl, userData, {
      withCredentials: true,
    });

    // Handle the created item data (e.g., update the UI)
    console.log("Created item:", response.data);
  } catch (error) {
    // Handle errors (e.g., display an error message)
    console.error("Error creating item:", error);
  }
}
