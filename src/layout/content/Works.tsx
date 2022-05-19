import {useSearchParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {RECOMOFDAY} from "../../mocks/WorksData";
import Card from "../../components/card";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGripVertical, faList} from '@fortawesome/free-solid-svg-icons'
import {useWindowSize} from "../../hooks/WindowsSize";
import {getAllWorks} from "../../Services/Works";

function Works() {
    const isMobile: boolean = useWindowSize();
    const [searchParams, setSearchParams] = useSearchParams();
    const [worksData, setWorksData] = useState<Works[]>([]);
    const [works, setWorks] = useState((searchParams.get("works") ?? "").toLowerCase());
    const [industries, setIndustries] = useState((searchParams.get("industries") ?? "").toLowerCase());
    const [viewType, setViewType] = useState<"Grid" | "Column">("Grid");
    const searchParamsHandler = (param: "works" | "industries", value: string) => {
        const filter = {
            works,
            industries
        };
        filter[param] = value;
        setSearchParams(filter);
    }

    useEffect(() => {
        getAllWorks().then(result => {
            if (result)
                setWorksData(result)
        });
    }, []);
    return (
        <section className="row">
            <h2 hidden>Works</h2>
            {!isMobile &&
            <div className="view-type">
                <button onClick={() => setViewType("Grid")} className={viewType === "Grid" ? "active" : ""}>
                    <FontAwesomeIcon icon={faGripVertical}/>Grid
                </button>
                <button onClick={() => setViewType("Column")} className={viewType === "Column" ? "active" : ""}>
                    <FontAwesomeIcon icon={faList}/>List
                </button>
            </div>}
            <div className="filters">
                <div className="dropdown">
                    <span>Show me</span>
                    <select value={works} onChange={e => {
                        searchParamsHandler("works", e.target.value);
                        setWorks(e.target.value);
                    }}>
                        <option value="">all work</option>
                        <option value="commerce">commerce</option>
                    </select>
                    <span className="select-highlight"/>
                    <span className="select-bar"/>
                </div>
                <div className="dropdown">
                    <span>in</span>
                    <select value={industries} onChange={e => {
                        searchParamsHandler("industries", e.target.value);
                        setIndustries(e.target.value);
                    }}>
                        <option value="">all industries</option>
                        <option value="health">health</option>
                    </select>
                    <span className="select-highlight"/>
                    <span className="select-bar"/>
                </div>

            </div>
            <div className={`row${isMobile ? " mobile" : ""}`}>
                {worksData.map((work, index) => (
                    <React.Fragment key={index}>
                        {(work.industry === industries || industries === "") && (work.category === works || works === "") &&
                        <Card viewType={viewType} info={work} key={work.id}/>}
                        {(work.id === 16 && <div key="recom" className="recom">
                            <p className="compliment">{RECOMOFDAY.compliment}</p>
                            <b className="author">{RECOMOFDAY.author.toUpperCase()}</b>
                        </div>)}
                    </React.Fragment>))}
            </div>
        </section>)
}

export default Works;
