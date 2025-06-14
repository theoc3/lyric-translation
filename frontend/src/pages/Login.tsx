import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState("");

  const handleLogin = () => {
    // TODO: Implement login logic
    console.log("Logging in:", email);
  };

  return (
    <div>
      <h2>Login</h2>
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;