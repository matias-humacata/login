import { useAuth0 } from "@auth0/auth0-react";
import moto from "./moto.gif";
import './App.css';
import LoginButton from './login';
import LogoutButton from './logout';
import Profile from './profile';
function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="App">
      <header className="App-header">
        <img src={moto} className="App-logo" alt="logo" />
        {isAuthenticated ? (
          <>
            <Profile />
            <LogoutButton />
          </>
        ) : (
          <LoginButton />
        )}
      </header>
    </div>
  );
}


export default App;
