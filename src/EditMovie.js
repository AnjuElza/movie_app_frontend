import { useEffect, useState } from "react";
import { API } from "./global"
import { useParams } from "react-router-dom";
import { EditMovieForm } from './EditMovieForm';


export function EditMovie() {
  
  const { id } = useParams(); // extract id from URL
  // const movie = movieList[id];

  const [movie, setMovie] = useState(null);

   
  useEffect(() => {
    fetch(`${API}/movies/${id}`, {
      method: "GET",
    }) 
  .then(res => res.json())
  .then((mv) => setMovie(mv))
  }, [])



  return  movie ? <EditMovieForm movie={movie}/> : "Loading...";


}
