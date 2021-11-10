import HomeScreen from "./HomeScreen";
import LoginScreen from "./LoginScreen";
// import { Counter } from "./features/counter/Counter";
import "./App.css";
import "./Banner.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const user = null;

  return (
    <div className="App">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route exact path="/" element={<HomeScreen />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
