import { useState } from "react";
import SignUp from "./Signup";
import Login from "./Login";

export default function Auth() {
  const [clicked, setClicked] = useState(false);

  const handleClick = (e) => {
    setClicked(!clicked);
  };
  return (
    <header className="min-h-screen flex flex-col justify-center items-center w-100%">
      <div className="">
        <h1 className="text-customPurple">Chatvia</h1>
      </div>
      <div className="flex gap-4">
        <button onClick={handleClick}>Sign In</button>
        <button onClick={handleClick}>Sign Up</button>
      </div>
      {clicked ? (
        <SignUp />
      ) : (
       <Login />
      )}
    </header>
  );
}
