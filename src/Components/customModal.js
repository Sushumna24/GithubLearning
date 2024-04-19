import React, { useState } from 'react';
import './CustomModal.css';

function CustomModal() {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <button onClick={handleOpen}>Open Modal</button>
            {isOpen && (
                <div className="modal-overlay">
                    <div className="modal">
                        <div className="modal-header">
                            <h2>Modal Title</h2>
                            <button className="close-button" onClick={handleClose}>X</button>
                        </div>
                        <div className="modal-body">
                            <p>Modal content goes here.</p>
                        </div>
                        <div className="modal-footer">
                            <button className="close-button" onClick={handleClose}>Close</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CustomModal;
