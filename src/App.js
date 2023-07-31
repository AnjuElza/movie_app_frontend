// import React from 'react';
// import {useState} from 'react';
// import { Routes, Route, Link } from 'react-router-dom';
// import './App.css';
// import { AddMovie } from './AddMovie';
// import { INITIAL_MOVIE_LIST } from './INITIAL_MOVIE_LIST';
// import { IconButton } from '@mui/material';
// import Badge from '@mui/material/Badge';
// import AppBar from '@mui/material/AppBar';
// import { useNavigate } from 'react-router-dom';
// import Toolbar from '@mui/material/Toolbar';
// import Button from '@mui/material/Button';
// import InfoIcon from '@mui/icons-material/Info';
// import { useParams } from 'react-router-dom';



// function App() {
 
//   const[moviesList,setMovieList] = useState(INITIAL_MOVIE_LIST);
//   const[search,setSearch]=useState("");
//   const navigate= useNavigate();

//   return (
//     <div className="App">
//         <AppBar position="static">
//         <Toolbar>
          
//             <Button color="inherit" onClick={()=>navigate('/')}>Home</Button>
//             <Button color="inherit" onClick={()=>navigate('/movies')}>Movie</Button>
//             <Button color="inherit" onClick={()=>navigate('/movies/add')}>Add Movies</Button>
//           </Toolbar>
//         </AppBar>
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/movies' 
//                element={
//                 <MovieList movies={moviesList.filter((mv)=>mv.name.toLowerCase().includes(search.toLowerCase())
//                   )}
//                   />
//                 }
//         />
//         <Route path='/movies/add'
//                element={
//                 <AddMovie setMovieList={setMovieList} moviesList={moviesList}/>
//                }
//         />
//         <Route path= '/movies/:id' element={<MovieDetails moviesList={moviesList} />} />
//         <Route path='*' element={<NotFound />}/>
//       </Routes>
//        <AddMovie 
//         setMovieList={setMovieList} 
//         moviesList={moviesList}
//       />
//       <input value={search}
//             onChange={event=>setSearch(event.target.value)}
//       />
//       {search}
//       <MovieList movies={moviesList.filter((mv)=>
//       mv.name.toLowerCase().includes(search.toLowerCase())
//       )}
//       />
//      <MovieList movies={moviesList} />
//     </div>
//   );
//   }

// function Home(){
//   return(
//     <div>
//       <h1>Welcome to movie app</h1>
//     </div>
//   )
// }

// function NotFound(){
//   //const styles={
//   //  width:"100%",
//   //  objectFit:"contain",
//   //  maxHeight:"400px",
//   //  }
//   return(
//     <div>
//       <h1>404 Page Not Found</h1>
//     </div>
//   );
// }
// function Movie({movie}){
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
// function MovieList({movies}){
//   return(
//   <div className='movie-list'>
  
//     {movies.map((mv)=>( 
    
//       <Movie movie={mv} />
      
//     ))}
//   </div>
//   );
// }

// function MovieDetails({moviesList}){
//   const {id}=useParams();
//   const movie=moviesList[id];
//   return(
//     <div>Movie details</div>
//   )
// }

// export default App;

import "./App.css";
// import { AddColor } from "./AddColor";
import { Navigate, Routes, Route } from "react-router-dom";
import { MovieDetails } from "./MovieDetails";
import { Home } from "./Home";
import { MovieList } from "./MovieList";
// import { UserList } from "./UserList";
import { useEffect, useState } from "react";
import { NotFoundPage } from "./NotFoundPage";
import { AddMovie } from "./AddMovie";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Paper from '@mui/material/Paper';
import { EditMovie } from "./EditMovie";
import { BasicForm } from "./BasicForm";


export const INTIAL_MOVIE_LIST = [
  {
    id: "100",
    name: "RRR",
    poster:
      "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
    rating: 8.8,
    summary:
      "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
    trailer: "https://www.youtube.com/embed/bwzLiQZDw2I",  
  },
  {
    id: "101",
    name: "Iron man 2",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
    rating: 7,
    summary:
      "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy."
  },
  {
    id: "102",
    name: "No Country for Old Men",
    poster:
      "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
    rating: 8.1,
    summary:
      "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money."
  },
  {
    id: "103",
    name: "Jai Bhim",
    poster:
      "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
    summary:
      "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
    rating: 8.8
  },
  {
    id: "104",
    name: "The Avengers",
    rating: 6,
    summary:
      "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
    poster:
      "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg"
  },
  {
    id: "105",
    name: "Interstellar",
    poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
    rating: 8.6,
    summary:
      "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans."
  },
  {
    id: "106",
    name: "Baahubali",
    poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
    rating: 8,
    summary:
      "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy."
  },
  {
    id: "107",
    name: "Ratatouille",
    poster:
      "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
    rating: 8,
    summary:
      "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him."
  }
];

//1. Creating - createContext
//2. Publisher -provider - context.Provider
//3. Subscriber - useContext - useContext(context)


export default function App() {
  
  // const [movieList, setMovieList] = useState(INTIAL_MOVIE_LIST );
  const [mode, setMode] = useState("light");
  
  // useEffect(() => {
  //   fetch("https://631079a336e6a2a04eef3d76.mockapi.io/movies") 
  // .then(res => res.json())
  // .then((mvs) => console.log(mvs))
  // },[])

 

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const navigate = useNavigate();


  //JSX start
  return (
    <ThemeProvider theme={theme}>
            <Paper style={{ borderRadius: 0, minHeight: "100vh" }} elevation={0} >
      
    <div className="App">      
      
      <AppBar position="static">
      <Toolbar>
      <Button 
      color="inherit"
      onClick={() => navigate("/")}
      >HOME</Button>
      <Button 
      color="inherit"
      onClick={() => navigate("/movie")}
      >MOVIES</Button>
      <Button 
      color="inherit"
      onClick={() => navigate("/movie/add")}
      >ADD MOVIES</Button>
      <Button 
      color="inherit"
      onClick={() => navigate("/color-game")}
      >COLOR GAME</Button>
      <Button 
      color="inherit"
      startIcon={mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      onClick={() => setMode(mode == "light" ? "dark" : "light") }
      >
        {mode == "light" ? "dark" : "light"} MODE
      </Button>
     </Toolbar>
    </AppBar>
    
   
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<MovieList />} />
        <Route path="/film" element={<Navigate replace to="/movie" />} />
        <Route path="/movie/:_id" element={<MovieDetails />} />
        <Route path="/movie/add" element={<AddMovie />} />
        <Route path="/movie/edit/:_id" element={<EditMovie />} />
        <Route path="basic-form" element={<BasicForm />} />
        {/* <Route path="/color-game" element={<AddColor />} />
        <Route path="/users" element={<UserList />} /> */}
        <Route path="/404" element={<NotFoundPage />}/>
        <Route path="*" element={<Navigate replace to="/404" />}/>
      </Routes>


    </div>
    </Paper>
   </ThemeProvider> 
  );
  //JSX ends
}
