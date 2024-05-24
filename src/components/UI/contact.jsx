import { useState } from "react";

function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});
    const [popup, setPopup] = useState({ show: false, messages: [] });

    const validateEmail = (email) => {
        const testRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return testRegex.test(email);
    };

    const handleValueChange = (event) => {
        const { name, value } = event.target;
        let tempErrors = {...errors};

        if (value.trim() === '') {
            tempErrors[name] = `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
        } else {
            delete tempErrors[name];
            if (name === 'email' && !validateEmail(value)) {
                    tempErrors[name] = 'Email is invalid';
            }
        }

        setErrors(tempErrors)

        if (name === 'name') {
            setName(value)
        } else if (name === 'email') {
            setEmail(value)
        } else { {/* name === 'message' */}
            setMessage(value);
        }
    };

    const handleSumbit = (event) => {
        event.preventDefault();
        const errorMessages = Object.values(errors);
        if (errorMessages.length > 0 || !name || !email || !message) {
            setPopup({ show: true, messages: errorMessages.length > 0 ? errorMessages : ['Please fill in all fields.'] });
        } else {
            // console.log('Form data:', { name, email, message });
        }
    };

    const closePopup = () => {
        setPopup({ show: false, messages: [] });
    };

    return (
        <>
        <div id="contact" className="contact">
            <div className="contact-header">
                <h1>Like what you see?</h1>
                <span>beep me.</span>
            </div>
            {popup.show && (
                <div className="popup">
                    <div className="popup-content">
                        <span className="close" onClick={closePopup}>&times;</span>
                        <ul>
                            {popup.messages.map((message, index) => (
                                <li key={index}>{message}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
            <form className="contact-form" onSubmit={handleSumbit}>
                    <input 
                        type="text" 
                        name="name"
                        placeholder="Name" 
                        id="contact-form-name" 
                        value={errors[name] ? errors[name] : name}
                        onChange={handleValueChange}
                    />
                    <input 
                        type="text" 
                        name="email"
                        placeholder="Email" 
                        id="contact-form-email" 
                        value={email}
                        onChange={handleValueChange}
                    />
                    <div>
                        <label htmlFor="contact-form-message">Leave me a message&nbsp;&rarr;</label>
                        <textarea 
                            type="text" 
                            name="message"
                            id="contact-form-message" 
                            value={message}
                            onChange={handleValueChange}
                        />
                    </div>
                    <div className="contact-btns">
                        <button className="form-submit-btn">Send&nbsp;<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M400 255.4V240 208c0-8.8-7.2-16-16-16H352 336 289.5c-50.9 0-93.9 33.5-108.3 79.6c-3.3-9.4-5.2-19.8-5.2-31.6c0-61.9 50.1-112 112-112h48 16 32c8.8 0 16-7.2 16-16V80 64.6L506 160 400 255.4zM336 240h16v48c0 17.7 14.3 32 32 32h3.7c7.9 0 15.5-2.9 21.4-8.2l139-125.1c7.6-6.8 11.9-16.5 11.9-26.7s-4.3-19.9-11.9-26.7L409.9 8.9C403.5 3.2 395.3 0 386.7 0C367.5 0 352 15.5 352 34.7V80H336 304 288c-88.4 0-160 71.6-160 160c0 60.4 34.6 99.1 63.9 120.9c5.9 4.4 11.5 8.1 16.7 11.2c4.4 2.7 8.5 4.9 11.9 6.6c3.4 1.7 6.2 3 8.2 3.9c2.2 1 4.6 1.4 7.1 1.4h2.5c9.8 0 17.8-8 17.8-17.8c0-7.8-5.3-14.7-11.6-19.5l0 0c-.4-.3-.7-.5-1.1-.8c-1.7-1.1-3.4-2.5-5-4.1c-.8-.8-1.7-1.6-2.5-2.6s-1.6-1.9-2.4-2.9c-1.8-2.5-3.5-5.3-5-8.5c-2.6-6-4.3-13.3-4.3-22.4c0-36.1 29.3-65.5 65.5-65.5H304h32zM72 32C32.2 32 0 64.2 0 104V440c0 39.8 32.2 72 72 72H408c39.8 0 72-32.2 72-72V376c0-13.3-10.7-24-24-24s-24 10.7-24 24v64c0 13.3-10.7 24-24 24H72c-13.3 0-24-10.7-24-24V104c0-13.3 10.7-24 24-24h64c13.3 0 24-10.7 24-24s-10.7-24-24-24H72z"/></svg></button>
                        <button id="resume" className="resume-download">Download my Resume</button>
                    </div>
            </form>
        </div>
        </>
    )
}

export default Contact;