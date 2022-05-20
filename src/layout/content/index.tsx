import Clients from "./Clients";
import QuestionBox from "./QuestionBox";
import Works from "./Works";
import {useWindowSize} from "../../hooks/WindowsSize";
import React from "react";

/**
 * It Shows the landing page of the app
 * @param props - it gets the clients device type from parent by {@link isMobile}
 * @component
 */
const Landing = (props: { isMobile: boolean; }) => (
    <>
        <div className="landing-first">
            <h1 className="heading">WORK</h1>
            {!props.isMobile && <button className="landing-button">VIEW CASE</button>}
        </div>
        {props.isMobile && <button className="landing-button">VIEW CASE</button>}
    </>
)

/**
 * It renders the main part of the app containing
 * {@link Landing},
 * {@link Works},
 * {@link Clients},
 * {@link QuestionBox}
 * @component
 */
function Body() {
    /**
     * @property {boolean} isMobile Defines whether clients device is a mobile or not see {@link useWindowSize}
     */
    const isMobile: boolean = useWindowSize();

    /**
     * it suppose to prepare and submit the form data (not working)
     * @param e the form submitting event
     */
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
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