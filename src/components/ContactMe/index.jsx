import './index.css'
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser'

function ContactMe() {
    const form = useRef();
    const [messageSent, setMessageSent] = useState(false);
    const [errorMessage, setErrorMessage] = useState('')

    const sendEmail = (e) => {
        e.preventDefault();

        const formData = new FormData(form.current);
        let valid = true;

        formData.forEach((value) => {
            if (!value) {
                valid = false;
            }
        });

        if (!valid) {
            setErrorMessage('Please fill out all fields.');
            setTimeout(() => setErrorMessage(''), 3000);
            return;
        }

        emailjs.sendForm('service_b0tnekp', 'template_nvxt71k', form.current, 'CijtCz2tBVZHnD2PE')
            .then((result) => {
                console.log(result.text);
                console.log('Message Sent!');
                setMessageSent(true);
                form.current.reset();
                setTimeout(() => setMessageSent(false), 3000);
            },
            (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='contact-container'>
            <h1>Contact Me</h1>
            <p>Want to reach out to me? fill out this form to direct message me via email!</p>
            {errorMessage && <p className='error-message'>{errorMessage}</p>}
            <form ref={form} onSubmit={sendEmail} className='contact-form'>
                <label className='form-label'>Name</label>
                <input type="text" name="user_name" className='form-input' />
                <label className='form-label'>Email</label>
                <input type="email" name="user_email" className='form-input' />
                <label className='form-label'>Message</label>
                <textarea name="message" className='form-textarea' />
                <input type="submit" value="Send" className='form-submit' />
            </form>
            {messageSent && <p className='message-sent'>Message Sent!</p>}
        </div>
    );
}

export default ContactMe;