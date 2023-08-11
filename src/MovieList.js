import { useEffect, useState } from "react";
import { Movie } from "./Movie";
import { INTIAL_MOVIE_LIST } from "./App";
import { API } from "./global"
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom";

export function MovieList() {

   const [movieList, setMovieList] = useState([]);
   const[search,setSearch]=useState("");
   const getMovies = () => {
    fetch(`${API}/movies`, {
      method: "GET",
    })
    .then(res => {
      if (!res.ok) {
        throw new Error(`Error fetching movies: ${res.status} - ${res.statusText}`);
      }
      return res.json();
    })
    .then((mvs) => setMovieList(mvs))
    .catch(error => console.error(error)); // Log any fetch errors
  }

  useEffect(() => getMovies(), [])

  const navigate = useNavigate();

  return (
    
    <>
      <div className="movie-list">
        {movieList.map((mv) => (
          
          <Movie
            key={mv._id}
            movie={mv}
            deleteButton={<IconButton
              onClick={() => {
                fetch(`${API}/movies/${mv._id}`, {
                  method: "DELETE",
                }).then(() => getMovies());
              }}
              color="error"
            >
              <DeleteIcon />
            </IconButton>}
            editButton={<IconButton
              onClick={() => navigate(`/movie/edit/${mv._id}`)}
              color="success"
            >
              <EditIcon />
            </IconButton>}
          />
         
        ))}
        
      </div>
    </>
  );
            }