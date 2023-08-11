import { useEffect, useState } from "react";
import { API } from "./global"
import { useParams } from "react-router-dom";
import { EditMovieForm } from './EditMovieForm';


export function EditMovie() {
  
  const { _id } = useParams(); // extract id from URL
  // const movie = movieList[id];
console.log(`edit movie id: ${_id}`)
  const [movie, setMovie] = useState(null);

   
  useEffect(() => {
    fetch(`${API}/movies/${_id}`, {
      method: "GET",
    }) 
  .then(res => res.json())
  .then((mv) => setMovie(mv))
  }, [])



  return  movie ? <EditMovieForm movie={movie}/> : "Loading...";


}
