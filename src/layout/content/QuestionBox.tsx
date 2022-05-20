import React, {FormEvent} from "react";

/**
 * it is a component for ticketing, it contains several inputs
 * @param onSubmit it is the submitting function
 * @param props it gets the rest of the properties received from parent(we only use {@link isMobile})
 * @component
 */
function QuestionBox({onSubmit,...props}:{isMobile:boolean;onSubmit:(e:FormEvent<HTMLFormElement>)=>void}) {

    return (
        <section className="question-box">
            <h2 className="title">QUESTION?{!props.isMobile &&(<br/>)} WE ARE HERE TO HELP!</h2>
            <form onSubmit={onSubmit}>
                <label className="has-float-label">
                    <input placeholder="" type="text" pattern="[a-z A-Z!@#$%^&*0-9]{1,}"/>
                    <span className="label">Name</span>
                    <div className="error">Do not use special characters !</div>
                </label>
                <label className="has-float-label">
                    <input placeholder="" type="email" required/>
                    <span className="label">Email</span>
                    <div className="helper"/>
                    <div className="error">Please enter a valid email !</div>
                </label>
                <label className="has-float-label">
                    <textarea placeholder="" rows={3} cols={23}/>
                    <span className="label">MESSAGE</span>
                    <div className="error">Do not use special characters !</div>
                </label>
                <button type="submit">SEND</button>
            </form>
        </section>
    )
}

export default QuestionBox;