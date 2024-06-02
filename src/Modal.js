import React, { useState } from "react";
import "./Modal.css";

const Modal = ({ isOpen, onClose }) => {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [dob, setDOB] = useState("");

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
        onClose();
    };

    return (
        <div onClick={onClose} className="modal">
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
    );
};

export default Modal;