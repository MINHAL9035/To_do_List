import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import TodoWrapper from "./components/TodoWrapper";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <TodoWrapper />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
