/* Added props to function Nav() to reuse it for the footer. */

function Nav({ links, className }) {

  return (

    <nav className={className} aria-label="Main Navigation" role="navigation">

        <ul>

            {links.map((link) => (

                <li key={link.label}><a href={link.href}>{link.label}</a></li>

            )

            )}

        </ul>

    </nav>

  )

}

export default Nav