import { Link } from "react-router-dom";

function NavBar() {

 

  /* nav menu that allows you to select each element of the router */
  return (
    <nav className="w-full h-[10vh] bg-slate-300 flex justify-between items-center gap-4 p-2 border border-black">
      <div className="flex justify-end items-center gap-4 ">
        <div><Link to="/" > Home</Link></div>
        <div><Link to="/Login" > Log In</Link></div>
      </div>
      <div className="flex justify-end items-center gap-4 ">
        <div>
          <Link to="/Ratings">Ratings</Link>
        </div>
        <div className="btns">
          <Link to="/MoreInfo">More Info</Link>
        </div>
        <div className="btns">
          <Link to="/Contacts">Contacts</Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
