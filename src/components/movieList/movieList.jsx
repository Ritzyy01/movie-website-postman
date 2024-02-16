import React, {useEffect, useState} from "react"
import "./movieList.css"
import { useParams } from "react-router-dom"
import Cards from "../card/card"

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const {type}=useParams();

  const fetchData = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyM2M0NDcwOWUxOTUzNTI5NTU5NDcwNjRlOWJiMGY1YSIsInN1YiI6IjY1Y2VmOWIwNjY0NjlhMDE3YzA5ZDRkZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.D1_RKh782uQaSh8R5kRmTBKFrEWotyTGCanHzm5ZG2w",
      },
    };

    const url = `https://api.themoviedb.org/3/movie`;

    fetch(`${url}/${type ? type : "popular"}`, options)
      .then((response) => response.json())
      .then((json) => setMovieList(json.results));
  };

  useEffect(() => {
    fetchData();
  }, []);


    return (
        <div className="movie__list">
            <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
            <div className="list__cards">
                {
                    movieList.map((movie) => (
                        <Cards movie={movie} key={movie.id} />
                    ))
                }
            </div>
        </div>
    )
}

export default MovieList