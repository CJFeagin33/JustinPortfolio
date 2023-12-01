import './index.css'
import { useState } from 'react';

function ContactMe() {
    const [title, setTitle] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [titleError, setTitleError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [messageError, setMessageError] = useState(false);

    function handleTitleChange(e) {
        setTitle(e.target.value);
        setTitleError(false); // Reset error state on input change
    }

    function handleEmailChange(e) {
        setEmail(e.target.value);
        setEmailError(false); // Reset error state on input change
    }

    function handleMessageChange(e) {
        setMessage(e.target.value);
        setMessageError(false); // Reset error state on input change
    }

    function handleSubmit(e) {
        e.preventDefault(); // Prevent the default form submission behavior

        // Validation checks
        if (!title.trim()) {
            setTitleError(true);
        }
        if (!email.trim()) {
            setEmailError(true);
        }
        if (!message.trim()) {
            setMessageError(true);
        }

        // Handle form submission logic (e.g., send an email, store the message, etc.)
        // You can add your logic here once the form is valid
    }

    return (
        <form className="contactMe" onSubmit={handleSubmit}>
            <h1>Contact Me:</h1>
            <input
                className="title"
                type="text"
                placeholder='Enter Subject Line here!'
                value={title}
                onChange={handleTitleChange}
            />
            {titleError && <p className="titleErr">Title cannot be empty!</p>}

            <input
                className="email"
                type="email"
                placeholder='Enter your Email Address here!'
                value={email}
                onChange={handleEmailChange}
            />
            {emailError && <p className="emailErr">Please enter a valid email!</p>}

            <textarea
                className="textBody"
                placeholder='Write your message here!'
                value={message}
                onChange={handleMessageChange}
            ></textarea>
            {messageError && <p className="messageErr">Message cannot be empty!</p>}

            <button type="submit" className="sendBtn">Send</button>
        </form>
    )
}

export default ContactMe;