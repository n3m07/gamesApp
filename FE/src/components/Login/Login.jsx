import { useState, useEffect } from "react";
import SubscribeForm from "./SubscribeForm";
import { LoginForm } from "./LoginForm";

function Login({cookies, setCookie, isLoggedIn, setIsLoggedIn, currentUser, setCurrentUser}) {
  //this state variable rendes the component accoding to the Login/subscribe btns on the bottom of the page
  let [submitFormat, setSubmitFormat] = useState("login");
  let [nickName, setNickName] = useState("");
  let [pw, setPw] = useState("");

  useEffect(() => {
    console.log(submitFormat);
  },[submitFormat]);

  return (
    <div className="w-full h-[90vh] bg-pink-400 flex p-4 justify-center items-center">
      <LoginForm
        submitFormat={submitFormat}
        setSubmitFormat={setSubmitFormat}
        nickName={nickName}
        setNickName={setNickName}
        pw={pw}
        setPw={setPw}
        setIsLoggedIn={setIsLoggedIn}
        isLoggedIn={isLoggedIn}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
      />
      <SubscribeForm
        submitFormat={submitFormat}
        setSubmitFormat={setSubmitFormat}
        nickName={nickName}
        setNickName={setNickName}
        pw={pw}
        setPw={setPw}
      />
    </div>
  );
}

export default Login;