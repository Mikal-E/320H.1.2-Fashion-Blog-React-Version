import Nav from "./Nav"

const headerLinks = [

    { label: "Women's", href: "#" },
    { label: "Men's", href: "#" },
    { label: "On The Street", href: "#" },
    { label: "The Catwalk", href: "#" },
    { label: "AdWatch", href: "#" },
    { label: "About", href: "#" },

]

function Header() {

    return (

        <header>

            <h1>Sartre's List</h1>

            <h2>Better-Dressed People</h2>

            <Nav links={headerLinks} className="nav-background" />

        </header>


    )

}

export default Header