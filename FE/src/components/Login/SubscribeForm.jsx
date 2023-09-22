import { subscribeBtnHandler } from "./subscribeBtnHandler";


function SubscribeForm({submitFormat, setSubmitFormat, nickName, setNickName, pw, setPw}){

    return (
        
<>
            {submitFormat == "subscribe" && (
                <div className="w-[40%] h-2/3 bg-white border border-black rounded flex-col flex justify-between items-start p-4">
                  <div className="w-full h-5/6 flex flex-col items-center gap-6">
                    <div >Subscribe</div>
                    <label >
                      <input
                        type="text"
                        className="border border-black rounded px-1"
                        placeholder="Choose a nickName"
                        value={nickName}
                        onChange={(e) => {
                          setNickName(e.target.value);
                        }}
                      />
                    </label>
                    <input
                      type="password"
                      value={pw}
                      className="border border-black rounded px-1"
                      placeholder="Choose a Password"
                      onChange={(e) => {
                        setPw(e.target.value);
                      }}
                    />
                    <button
                      className="px-1 border border-black rounded"
                      onClick={() =>
                        subscribeBtnHandler({nickName, pw})
                      }
                    >
                      Create New User
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
    
</>
    )
}

export default SubscribeForm