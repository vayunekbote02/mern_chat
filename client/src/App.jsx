import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Login from "./pages/login/Login.jsx";
import SignUp from "./pages/signup/SignUp.jsx";
import { Toaster } from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext.jsx";
import SetTheme from "./components/SetTheme.jsx";

function App() {
  const { authUser } = useContext(AuthContext);
  return (
    <div className="flex">
      <div className="flex justify-end flex-shrink h-screen">
        <SetTheme />
      </div>
      <div className="flex items-center justify-center flex-grow h-screen p-3 bg-base-100">
        <Routes>
          <Route
            index
            element={authUser ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={authUser ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/signup"
            element={authUser ? <Navigate to="/" /> : <SignUp />}
          />
        </Routes>
        <Toaster />
      </div>
    </div>
  );
}

export default App;
