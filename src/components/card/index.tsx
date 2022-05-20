declare const Modernizr: any;

/**
 * it is reusable component which shows the Works info
 * @param {"Grid"|"Column"} viewType - indicates the view mode
 * @param {Works} info - contains the work data to be shown
 * @component
 */
function Card({viewType = "Grid", info}: { viewType: "Grid" | "Column"; info: Works }) {
    return (
        <>
            <div className={`work-card ${viewType === "Grid" ? "Grid" : "Column"}`}>
                <article>
                    <figure>
                        {info.image &&
                        <img src={Modernizr.webp ? info.webp : info.image} alt={info.alt ?? info.name} loading="lazy"
                             width={585} height={500}/>}
                    </figure>
                    <div className="card-body">
                        <h2 className="title">{info.name.toUpperCase()}</h2>
                        <p className="body">{info.title}</p>
                        <button>VIEW CASE</button>
                    </div>
                </article>
            </div>
            {viewType === "Column" && <hr/>}
        </>
    )
}

export default Card;