

import Movie from "./Movie";

function Main({listOfMovies, deleteMovie}) {  

  

  return (
    <section className="Main">
            
            { 
                listOfMovies.length === 0
                    ? <p>Sorry, no movies to display yet</p>
                    :
                    <>                        
                        {listOfMovies.map( movie => {
                            return(
                                <Movie                                      
                                    details={movie} 
                                    callbackToDelete={deleteMovie} 
                                    genres={movie.genres}
                                />
                            )
                        })} 
                    </>     
            }
            

        </section>
  );
}

export default Main;
