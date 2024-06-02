import React, { useState } from "react";
import "./App.css";

export default function App() {
    const [open, setOpen] = useState(false);
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [dob, setDOB] = useState("");

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleContentClick = (event) => {
        event.stopPropagation();
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!email.match(emailRegex)) {
            alert("Invalid email");
            return;
        }

        if (phoneNo.length !== 10) {
            window.alert("Invalid phone number");
            return;
        }

        const currentDate = new Date();
        const selectedDate = new Date(dob);
        if (selectedDate > currentDate) {
            alert("Invalid date of birth");
            return;
        }

        // If all validations pass, close the modal
        handleClose();
    };

    return (
        <div className="App">
            <h1>User Details Modal</h1>
            <button type="button" onClick={handleOpen}>Open Form</button>
            {open && (
                <div onClick={handleClose} className="modal">
                    <div className="modal-content" onClick={handleContentClick}>
                        <h1>Fill Details</h1>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="username">Username:</label>
                            <input
                                id="username"
                                type="text"
                                name="text"
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                                required
                            />
                            <label htmlFor="email">Email Address:</label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <label htmlFor="phone">Phone No:</label>
                            <input
                                id="phone"
                                type="tel"
                                name="number"
                                value={phoneNo}
                                onChange={(e) => setPhoneNo(e.target.value)}
                                required
                            />
                            <label htmlFor="dob">Date of Birth:</label>
                            <input
                                id="dob"
                                type="date"
                                name="date"
                                value={dob}
                                onChange={(e) => setDOB(e.target.value)}
                                required
                            />
                            <button type="submit" className="submit-button">Submit</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
