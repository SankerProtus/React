import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import LandingPage from "./pages/Home/LandingPage.jsx";
import Register from "./pages/Home/Register.jsx";
import Login from "./pages/Home/Login.jsx";
import CrewHomePage from "./pages/Crew/CrewHomePage.jsx";
import DestinationHomePage from "./pages/Destination/DestinationHomePage.jsx";
import Home from "./pages/Home/index.jsx";
import TechnologyHomePage from "./pages/Technology/TechnologyHomePage.jsx";
import "./App.css";

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/landing" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/destination" element={<DestinationHomePage />} />
          <Route path="/crew" element={<CrewHomePage />} />
          <Route path="/technology" element={<TechnologyHomePage />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
