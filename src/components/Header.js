import "./Header.css"

function Header({numberOfMovies}){
    

    return(
        <header className="Header">
            <h1>Popcorn Time!</h1>
            
            <p> We currently have {numberOfMovies} movies in our catalog </p>
        </header>
    )
}

export default Header;