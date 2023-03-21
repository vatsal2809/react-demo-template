import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import { checkHealth } from './services/health';

function App() {
  const [url, setUrl] = useState(false)

  useEffect(async() => {
    const { response } = await checkHealth();
    if(response?.data?.status){
      setUrl(process.env.REACT_APP_BACKEND_URL)
    }
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {url && <p>Backend connected to url : {url}</p>}
      </header>
    </div>
  );
}

export default App;
