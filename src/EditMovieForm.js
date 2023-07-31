import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "./global";

export function EditMovieForm({ movie }) {


  const [name, setName] = useState(movie.name);
  const [poster, setPoster] = useState(movie.poster);
  const [rating, setRating] = useState(movie.rating);
  const [summary, setSummary] = useState(movie.summary);
  const [trailer, setTrailer] = useState(movie.trailer);

  const navigate = useNavigate();


  return (

    <div className="add-movie-form">

      <TextField value={name} onChange={(e) => setName(e.target.value)} label="Name" variant="standard" />
      <TextField value={poster} onChange={(e) => setPoster(e.target.value)} label="Poster" variant="standard" />
      <TextField value={rating} onChange={(e) => setRating(e.target.value)} label="Rating" variant="standard" />
      <TextField value={summary} onChange={(e) => setSummary(e.target.value)} label="Summary" variant="standard" />
      <TextField value={trailer} onChange={(e) => setTrailer(e.target.value)} label="Trailer" variant="standard" />

      <Button variant="contained"
        //cope the MovieList and add newMovie to it
        onClick={() => {
          const updatedMovie = {
            name: name,
            poster: poster,
            rating: rating,
            summary: summary,
            trailer: trailer,
          };

          // setMovieList([...movieList, newMovie]);
          // 1. method - POST
          // 2. body - data - JSON
          // 3. Headers  -JSON 
          fetch(`${API}/movies/${movie._id}`, {
            method: "PUT",
            body: JSON.stringify(updatedMovie),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then(res => res.json())
            .then(() => navigate("/movie"));
          //Currently post and navigate it immediately
          //When post is complete -> navigate /movies 
        }}
      >SAVE</Button>


    </div>

  );
    }
