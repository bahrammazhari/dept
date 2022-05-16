import React, {FormEvent} from "react";

function QuestionBox({onSubmit,...props}:{isMobile:boolean;onSubmit:(e:FormEvent<HTMLFormElement>)=>void}) {

    return (
        <div className="question-box">
            <span>QUESTION?{!props.isMobile &&(<br/>)} WE ARE HERE TO HELP!</span>
            <form onSubmit={onSubmit}>
                <label className="has-float-label">
                    <input placeholder="" type="text" pattern="[a-zA-Z!@#$%^&*0-9]"/>
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
                    <textarea placeholder="" rows={4} cols={24}/>
                    <span className="label">MESSAGE</span>
                    <div className="error">Do not use special characters !</div>
                </label>
                <button type="submit">SEND</button>
            </form>
        </div>
    )
}

export default QuestionBox;