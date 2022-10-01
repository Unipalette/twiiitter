import { useState } from "react";
import AppRouter from "components/Router";
import { authService } from "../fBase";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);

  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
      <footer>&copy; {new Date().getFullYear()} twiiiter</footer>
    </>
  );
}

export default App;
