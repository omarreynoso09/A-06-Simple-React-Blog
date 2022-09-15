import { useState } from "react";

const Login = ({ setUser }) => {
  const [url, setUrl] = useState();
  const [username, setUsername] = useState();

  return (
    <div>
      <h1>Sign In</h1>
      <div className="input">
        <h3>User Name:</h3>
        <input onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div className="input">
        <h3>Photo URL:</h3>
        <input type="url" onChange={(e) => setUrl(e.target.value)} />
      </div>
      <button onClick={() => setUser({ username, url })}>Sign in</button>
    </div>
  );
};

export default Login;
