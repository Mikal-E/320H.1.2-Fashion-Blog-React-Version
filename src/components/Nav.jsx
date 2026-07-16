/* Added props to function Nav() to reuse it for the footer. */

function Nav({ links, className }) {

  return (

    <nav className="nav-background" aria-label="Main Navigation" role="navigation">

        <ul>

            {links.map((link) => (

                <li key={link.label}><a href={link.href}>{link.label}</a></li>

            )

            )}

        </ul>

    </nav>

/*    <nav className="nav-background" aria-label="Main Navigation" role="navigation">

        <ul>

            <li><a href="#">Women's</a></li>
            <li><a href="#">Men's</a></li>
            <li><a href="#">On The Street</a></li>
            <li><a href="#">The Catwalk</a></li>
            <li><a href="#">AdWatch</a></li>
            <li><a href="#">About</a></li>

        </ul>

    </nav>
*/

  )

}

export default Nav