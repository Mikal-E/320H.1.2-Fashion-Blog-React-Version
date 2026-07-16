import Nav from "./Nav";

const footerLinks = [

    { label: "Home", href: "#" },
    { label: "Women's", href: "#" },
    { label: "Men's", href: "#" },
    { label: "On The Street", href: "#" },
    { label: "The Catwalk", href: "#" },
    { label: "AdWatch", href: "#" },
    { label: "About", href: "#" },
    { label: "Tips", href: "#" },

]

function Footer() {

    return (

        <footer>

            <Nav links={footerLinks} />
            <div className="copyright">$copy; 2026 - Great Company Name</div>

        </footer>

    )

}

export default Footer