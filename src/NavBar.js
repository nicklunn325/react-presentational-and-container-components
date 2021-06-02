const NavBar = ({onClick}) => {
    return(
        <div className="navBar">
            <button onClick={onClick} id="home">Home</button>
            <button onClick={onClick} id="moovies">Moovies</button>
        </div>
    )
}

export default NavBar;