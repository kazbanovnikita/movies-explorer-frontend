import "./App.css";
import "../Header/Header";
import {
  Routes,
  Route,
  useLocation,
  useNavigate,
  Navigate,
} from "react-router-dom";
import { useState, useEffect } from "react";
import Main from "../Main/Main";
import Error from "../Error/Error";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";
import Header from "../Header/Header";
import Movies from "../Movies/Movies";
import SavedMovies from "../Movies/SavedMovies/SavedMovies";
import Footer from "../Footer/Footer";
import * as Auth from "../../utils/Auth";
import { api } from "../../utils/MainApi";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import CurrentUserContex from "../../contexts/CurrentUserContex";
import Preloader from "../Preloader/Preloader";

function App() {
  //let loggedIn = true;
  let { pathname } = useLocation();
  const renderHedeader = (location) =>
    Boolean(["/", "/movies", "/saved-movies", "/profile"].includes(location));
  const [isErrorPage, setIsErrorPage] = useState(false);

  const renderFooter = (location) =>
    Boolean(["/signin", "/signup", "/profile"].includes(location));

  const navigate = useNavigate();

  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [registrationUserInfo, setRegistrationUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const [savedMovies, setSavedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (loggedIn) {
      setIsLoading(true);
      api
        .getUserInfo()
        .then((user) => {
          setCurrentUser(user);
        })
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false));
      getSavedMovies();
    }
  }, [loggedIn]);

  useEffect(() => {
    if (loggedIn) {
      api
        .getUserInfo()
        .then((user) => {
          setCurrentUser(user);
        })
        .catch((err) => console.log(err));
    }
  }, [navigate]);

  useEffect(() => {
    handleTokenCheck();
    navigate(pathname);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleRegistatration(data) {
    return Auth.register(data)
      .then(() => {
        setRegistrationSuccess(true);
        navigate("/movies", { replace: true });
        setRegistrationUserInfo({ name: "", email: "", password: "" });
        handleLogin(data);
      })
      .catch((err) => {
        setRegistrationSuccess(false);
        console.log(`Ошибка: ${err}`);
      });
  }

  function handleTokenCheck() {
    const token = localStorage.getItem("jwt");
    if (token) {
      Auth.checkToken(token)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
          }
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`);
        });
    }
  }

  function handleLogin(data) {
    setIsLoading(true);
    return Auth.login(data)
      .then((data) => {
        localStorage.setItem("jwt", data.token);
        setLoggedIn(true);
        handleTokenCheck();
        navigate("/movies", { replace: true });
      })
      .catch((err) => {
        setRegistrationSuccess(false);
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => setIsLoading(false));
  }

  function handleSignOut() {
    localStorage.removeItem("jwt");
    setLoggedIn(false);
    setRegistrationSuccess(false);
    setRegistrationUserInfo({ email: "", password: "" });
    localStorage.clear();
  }

  function handleUpdateUser(values) {
    api.updateUserInfo({ name: values.name, email: values.email });
  }

  function handleLikeMovie(movie) {
    const isLiked = savedMovies.some((film) => film.movieId === movie.movieId);

    if (!isLiked) {
      api
        .addSavedMovies(movie)
        .then((newMovie) => {
          setSavedMovies([...savedMovies, newMovie]);
        })
        .catch((err) => console.log(err));
    } else {
      const id = savedMovies.find((item) => item.movieId === movie.movieId)._id;
      api
        .deleteMovies(id)
        .then(() => {
          setSavedMovies((movies) => movies.filter((item) => item._id !== id));
        })
        .catch((err) => console.log(err));
    }
  }

  function getSavedMovies() {
    api
      .getSavedMovies()
      .then((movies) => {
        localStorage.setItem("saved", JSON.stringify(movies));
        setSavedMovies(movies);
      })
      .catch((err) => console.log(err));
  }

  function handleMovieDelete(movie) {
    api.deleteMovies(movie._id).then(() => {
      setSavedMovies((movies) =>
        movies.filter((film) => film._id !== movie._id)
      );
    });
  }

  return isLoading ? (
    <Preloader />
  ) : (
    <CurrentUserContex.Provider value={currentUser}>
      <>
        {renderHedeader(pathname) ? (
          <Header loggedIn={registrationSuccess || loggedIn} />
        ) : (
          ""
        )}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="*" element={<Error setIsErrorPage={setIsErrorPage} />} />
          <Route
            path="/signin"
            element={
              loggedIn ? (
                <Navigate to="/movies" replace />
              ) : (
                <Login onLogin={handleLogin}/>
              )
            }
          />
          <Route
            path="/signup"
            element={
              loggedIn ? (
                <Navigate to="/" replace />
              ) : (
                <Register
                  onRegister={handleRegistatration}
                  values={registrationUserInfo}
                  setValues={setRegistrationUserInfo}
                />
              )
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute
                element={Profile}
                loggedIn={loggedIn}
                onSignOut={handleSignOut}
                onUpdateUser={handleUpdateUser}
              />
            }
          />
          <Route
            path="/movies"
            element={
              <ProtectedRoute
                element={Movies}
                loggedIn={loggedIn}
                onLike={handleLikeMovie}
                savedMovies={savedMovies}
              />
            }
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute
                element={SavedMovies}
                loggedIn={loggedIn}
                movies={savedMovies}
                onDelete={handleMovieDelete}
                signout={loggedIn || registrationUserInfo}
              />
            }
          />
        </Routes>
        {!isErrorPage && renderFooter(pathname) ? "" : <Footer />}
      </>
    </CurrentUserContex.Provider>
  );
}

export default App;
