import React, { useContext } from "react";
import  BlogsContext from "./context";

const Edit = () => {
  // Now all the data stored in the context can
  // be accessed with the auth variable
  const edit = useContext(BlogsContext);
  console.log(edit.status);
  return (
    <div>
      {edit.status ? <p>Yes you are authenticated...</p> : <p>Nopes... you are not</p>}
      <button onClick={auth.login}>Click To Login</button>
    </div>
  );
};
export default Auth;