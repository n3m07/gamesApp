import axios from "axios";
import { useState } from "react";

export async function loginBtnHandler({
  nickName,
  pw,
  setIsLoggedIn,
  isLoggedIn,
  currentUser,
  setCurrentUser,
}) {
  console.log(`the nickname is ${nickName} and the pw is ${pw}`);
  const postUrl = "http://localhost:4000/api/Users/login";
  const userData = {
    userName: nickName.toLowerCase(),
    pw: pw.toLowerCase(),
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

    console.log("login:", response.data);
    setIsLoggedIn(true);
    setCurrentUser(response.data.user);
  } catch (error) {
    // Handle errors (e.g., display an error message)
    console.error("Error accessing to the user profile", error);
  }
}
