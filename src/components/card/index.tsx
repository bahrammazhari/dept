declare const Modernizr:any;
function Card({viewType = "Grid", info}: { viewType: "Grid" | "Column"; info: Works }) {
    return (
        <>
            <div className={`work-card ${viewType === "Grid" ? "Grid" : "Column"}`}>
                {info.image && <img src={Modernizr.webp?info.webp:info.image} alt={info.alt??info.name} loading="lazy"/>}
                <div className="card-body">
                    <span className="name">{info.name.toUpperCase()}</span>
                    <span className="title">{info.title}</span>
                    <button>VIEW CASE</button>
                </div>
            </div>

            { viewType === "Column" && <hr/>}
        </>
    )
}

export default Card;