import './index.css'
import { useState } from 'react';

function ContactMe () {
    const [title, setTitle] = useState("")

    function changeTitle(e) {
        setTitle(e.target.value)
    }

    function onBlurTitle() {
        if(title == "") {
            document.querySelector(".titleErr").style.display = "block";
        } else {
            document.querySelector(".titleErr").style.display = "none";
        }
    }

    return (
        <form className="contactMe">
            <input 
                className="title" 
                type="text" 
                placeholder='Enter Subject Line here!' 
                value={title}
                onChange={changeTitle}
                onBlur={onBlurTitle}
            />
            <p className="titleErr">Title cannot be empty!</p>


            <input className="email" type="email" placeholder='Enter your Email Address here!'/>
            <textarea className="textBody" placeholder='Write your message here!'>

            </textarea>
            <button className="sendBtn">
                Send
            </button>
        </form>
    )
}

export default ContactMe;