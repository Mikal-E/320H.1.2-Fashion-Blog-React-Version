/* Article() component with props for the articles elements. */

function Article({ title, date, dateLabel, imgSrc, imgAlt, text, relatedTitles}) {

    return (

        <article>

            <h2 className="article-title">{title}</h2>

            <time dateTime={date}>{dateLabel}</time>

            <img src={imgSrc} alt={imgAlt} />

            <p>{text}</p>

            <button>Read Article</button>

            <aside>

                <h3>Related Articles</h3>

                <ul>

                    {relatedTitles.map((actualTitle, index) => (

                        <li key={index}><a href="#">{actualTitle}</a></li>

                       )

                    )}

                </ul>
                
            </aside>

        </article>

    )

}

export default Article