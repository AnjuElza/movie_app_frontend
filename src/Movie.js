import { Counter } from "./Counter";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info';
import DeleteIcon from '@mui/icons-material/Delete';
import { API } from './global'

// export function Movie({ movie, id, deleteButton, editButton }){
//   const [like, setLike]= useState(0);
//   const [dislike, setDislike]= useState(0);
//   const [show, setShow]= useState(false);
//   //Giving color to rating
//   const styles={
//     color:movie.rating>=8.5 ? "green" : "red",
//   };
//   const likePercent=(like/(like+dislike)*100);
//   const incrementLike=()=>setLike(like+1);
//   const incrementDisLike=()=>setDislike(dislike+1);
//   const navigate= useNavigate();
//   return(
//     <><div className="movie-container">
//       <img src={movie.poster} alt="poster" className='movie-poster' />
//       <h2 className='movie-name'>{movie.name}</h2>
//       {/* <IconButton onClick={()=>setShow(!show)} color="primary" aria-label="delete"> */}
//       <IconButton onClick={()=>navigate(`/movies/${id}`)} color="primary" aria-label="delete">
//         <InfoIcon />
//       </IconButton>
//       <><p className='movie-rating' style={styles}>{movie.rating}</p>
//       <button onClick={incrementLike}>👍{like}</button>
//       <button onClick={incrementDisLike}>👎{dislike}</button></>
//        {/* <IconButton color="primary" aria-label="delete">
//         <Badge badgeContent={like} color="primary" onClick={incrementLike}>
//           👍
//         </Badge>
//       </IconButton>
//       <IconButton color="primary" aria-label="delete">
//         <Badge badgeContent={dislike} color="red" onClick={incrementDisLike}>
//           👎
//         </Badge>
//       </IconButton>l  */}
     
//       <div className='counter-container'>
//         <progress className='counter-progress' max="100"
//                   value={Number.isNaN(likePercent) ? 0 : likePercent}>
//         </progress>
//       </div>
      
//       {/* <button onClick={()=> setShow(!show) }>Toggle Summary</button>  */}
//      {show? <div className='movie-summary-container'><p className='movie-summary'>{movie.summary}</p> </div> : null}
    
//      </div>
//    </>
//   )
// }
export function Movie({ movie, deleteButton, editButton }) {
 
  const [show, setShow] = useState(true);

  const styles = {
    color: movie.rating >= 8 ? "green" : "red",
    fontWeight: "bold",
  };
  const navigate = useNavigate();

  return (
    <div className="movie-container">
      <img className="movie-poster" src={movie.poster} alt={movie.name} />
      <div className="movie-spec">
        <h2 className="movie-name">{movie.name}
          <IconButton
            onClick={() => setShow(!show)}
            aria-label="Toggle description"
            color="primary">
            {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}

          </IconButton>


          <IconButton className="toggle-style"
            onClick={() => navigate(`/movie/${movie._id}` )}
            aria-label="Info"
            color="primary">
            <InfoIcon />
          </IconButton>

        </h2>
        <p style={styles} className="movie-rating">
          ⭐ {movie.rating}</p>
      </div>


      {/* <p style= {summaryStyle} className="movie-summary">{movie.summary}</p> */}
      {show ? <p className="movie-summary">{movie.summary}</p> : null}
      <Counter /> {deleteButton} {editButton}
      {/* <IconButton 
      onClick={() => {
        fetch(`${API}/movies/${id}`, {
          method: "DELETE",
        }) 
      }}
      >
           <DeleteIcon />
      </IconButton> */}
    </div>
  );
}
