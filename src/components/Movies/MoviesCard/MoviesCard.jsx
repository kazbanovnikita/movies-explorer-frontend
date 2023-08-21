import "./MoviesCard.css";
import { useState } from "react";
import img from "../../../images/example-img-for-card.png";

function MoviesCard({ saved }) {
  const [isLiked, setIsLiked] = useState(false);

  function handleCardLike() {
    setIsLiked(!isLiked);
  }

  const movieSaveButtonClassName = `movies-card__save-button ${
    isLiked ? "movies-card__save-button_liked" : " "
  }`;

  return (
    <li className="movies-card">
      <div className="movies-card__container">
        <div className="movies-card__info-wrapper">
          <h2 className="movies-card__title">33 слова о дизайне</h2>
          <p className="movies-card__duration">1ч 47м</p>
        </div>
        <button
          className={
            saved ? "movies-card__save-button_delete" : movieSaveButtonClassName
          }
          type="button"
          onClick={handleCardLike}
        />
      </div>
      <img className="movies-card__img" src={img} alt="description"></img>
    </li>
  );
}

export default MoviesCard;
