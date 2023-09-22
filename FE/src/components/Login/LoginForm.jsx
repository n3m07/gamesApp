import { loginBtnHandler } from "./loginBtnHandler";

export function LoginForm({
  submitFormat,
  setSubmitFormat,
  nickName,
  setNickName,
  pw,
  setPw,
  setIsLoggedIn,
  isLoggedIn,
  currentUser,
  setCurrentUser,
}) {
  const userAuth = loginBtnHandler.userAuth;
  console.log(userAuth);
  return (
    <>
      {submitFormat == "login" && isLoggedIn == false && (
        <div className="w-[40%] h-2/3 bg-white border border-black rounded flex-col flex justify-between items-start p-4">
          <div className="w-full h-5/6 flex flex-col items-center gap-6">
            <div>LogIn</div>
            <label>
              <input
                type="text"
                value={nickName}
                className="border border-black rounded px-1"
                placeholder="enter nick name"
                onChange={(e) => {
                  setNickName(e.target.value);
                }}
              />
            </label>
            <input
              type="password"
              value={pw}
              className="border border-black rounded px-1"
              placeholder="Password"
              onChange={(e) => {
                setPw(e.target.value);
              }}
            />
            <button
              className="px-1 border border-black rounded"
              onClick={() =>
                loginBtnHandler({ nickName, pw, setIsLoggedIn, isLoggedIn, currentUser, setCurrentUser })
              }
            >
              Enter
            </button>
          </div>
          <div className="flex gap-4 justify-evenly w-full h-1/6">
            <button
              onClick={() => {
                setSubmitFormat("login");
              }}
            >
              Log In
            </button>
            <button
              onClick={() => {
                setSubmitFormat("subscribe");
              }}
            >
              Subscribe
            </button>
          </div>
        </div>
      )}
      {isLoggedIn == true && (
        <div className="w-[40%] h-1/3 bg-green-400 border border-black rounded flex-col flex justify-between items-center p-4 text-2xl font-bold text-green-700 ">
          <div className="">
            Welcome: <span className="underline text-blue-700">{currentUser.userName}</span>{" "}
            you are now logged in
          </div>
          <button
            onClick={() => {
              setIsLoggedIn(false)
              setCurrentUser('')
            }}
            className="text-lg text-black underline"
          >
            Log Out
          </button>
        </div>
      )}
    </>
  );
}
