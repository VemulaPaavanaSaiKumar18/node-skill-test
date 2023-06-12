import { Navigate, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./components/ContextStore/AuthContext";
import Home from "./components/Pages/Home/Home";
import Login from "./components/Pages/Login/Login.jsx";
import "./App.css";

function App() {
  const { currentUser } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/" />;
  };
  return (
    <div className="App">
      <Routes>
        <Route
          path="/chat"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route exact path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
