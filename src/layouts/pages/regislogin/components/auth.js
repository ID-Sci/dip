import React, { useState } from "react";
import { useUserContext } from "layouts/pages/regislogin/context/userContext";
import Signin from "layouts/pages/regislogin/components/signin";
import Signup from "layouts/pages/regislogin/components/signup";

const Auth = () => {
  const [index, setIndex] = useState(false);
  const toggleIndex = () => {
    setIndex((prevState) => !prevState);
  };

  const { signInWithGoogle, signInWithGithub } = useUserContext();

  return (
    <div className="container">
      {!index ? <Signin /> : <Signup />}
      <button onClick={signInWithGoogle}> Continue with Google </button>
      <button onClick={signInWithGithub}> Continue with GitHub </button>
      <p onClick={toggleIndex}>
        {!index ? "New user? Click here " : "Already have an acount?"}
      </p>
    </div>
  );
};

export default Auth;
