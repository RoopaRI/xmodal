import React, {useState} from "react";
import Modal from "./Modal";
import "./App.css";
export default function App() {
    const [open, setOpen] = useState(false);
 
    const handleClose = () => {
        setOpen(false);
    };
 
    const handleOpen = () => {
        setOpen(true);
    };
 
    return (
        <div className="App">
            <h1>User Details Modal</h1>
            <button type="button" onClick={handleOpen}>Open Form</button>
            <Modal isOpen={open} onClose={handleClose} />
        </div>
    );
}