import React, { useState } from 'react';

type ContactProps = {
    email: string;
};

export default function Contact(props: ContactProps) {
    // form fields
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [submittedData, setSubmittedData] = useState<{ name: string; message: string } | [] > ([]);

    // email alert
    const showAlert = () => {
        alert(`Contact me via email: ${props.email}`);
    };

    // form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // validation
        if (!name || !message) {
            alert("Please fill in both fields.");
            return;
        }

        // Display data
        const formData = { name, message };
        setSubmittedData(formData);

        // Reset forms
        setName("");
        setMessage("");
    };

    return (
        <div>
            <h2>Contact:</h2>
            <button onClick={showAlert}>Show Email</button>
            <h3>Send me a message</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Name:
                        <input 
                            type="text" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            placeholder="Your Name" 
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Message:
                        <textarea 
                            value={message} 
                            onChange={(e) => setMessage(e.target.value)} 
                            placeholder="Message" 
                        />
                    </label>
                </div>
                <button type="submit">Send</button>
            </form>

            {submittedData && (
                <div>
                    <h3>Incoming messages:</h3>
                    <pre>{JSON.stringify(submittedData, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}


  