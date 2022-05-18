import Clients from "./Clients";
import QuestionBox from "./QuestionBox";
import Works from "./Works";
import {useWindowSize} from "../../hooks/WindowsSize";
import React from "react";

const Landing=(props:{isMobile:boolean;})=>(
    <>
        <div className="landing-first">
            <h1 className="heading">WORK</h1>
            {!props.isMobile && <button className="landing-button">VIEW CASE</button>}
        </div>
        {props.isMobile && <button className="landing-button">VIEW CASE</button>}
    </>
)
function Body() {
    const isMobile: boolean = useWindowSize();
    function handleSubmit(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault();
    }
    return (
        <>
            <Landing isMobile={isMobile}/>
            <main className="row">
            <Works/>
            <Clients isMobile={isMobile}/>
            <QuestionBox onSubmit={handleSubmit} isMobile={isMobile}/>
            </main>
        </>)
}

export default Body;