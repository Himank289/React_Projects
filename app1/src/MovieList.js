
import Movie from './Movie';

const MovieList = (props) => 
{   return (
    <div>
     {props.movies.map(movie => 
       <Movie 
          key = {movie.title}
          title={movie.title} 
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
         />
     )}
    </div>
      
    );
}


export default MovieList;