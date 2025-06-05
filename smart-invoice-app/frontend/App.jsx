import { useState } from 'react';
import axios from 'axios';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  const login = async () => {
    const res = await axios.post(import.meta.env.VITE_API_URL + '/api/login', {
      email, password
    });
    setToken(res.data.token);
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>SmartInvoice Login</h1>
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" /><br />
      <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" /><br />
      <button onClick={login}>Login</button>
      {token && <p>Token: {token}</p>}
    </div>
  );
}

export default App;