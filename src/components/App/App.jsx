import "./App.css";
import "../Header/Header";
import { Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import Main from "../Main/Main";
import Error from "../Error/Error";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";
import Header from "../Header/Header";
import Movies from "../Movies/Movies";
import SavedMovies from "../Movies/SavedMovies/SavedMovies";
import Footer from "../Footer/Footer";

function App() {
  let loggedIn = true;
  let { pathname } = useLocation();
  const renderHedeader = (location) =>
    Boolean(["/", "/movies", "/saved-movies", "/profile"].includes(location));
  const [isErrorPage, setIsErrorPage] = useState(false);

  const renderFooter = (location) =>
    Boolean(["/signin", "/signup", "/profile"].includes(location));

  return (
    <>
      {renderHedeader(pathname) ? <Header loggedIn={loggedIn} /> : ""}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<Error setIsErrorPage={setIsErrorPage} />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
      </Routes>
      {!isErrorPage && renderFooter(pathname) ? "" : <Footer />}
    </>
  );
}

export default App;
