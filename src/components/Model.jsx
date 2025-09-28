import React from 'react';
import './Model.css';

function Modal({ isVisible, onClose, children }) {
  if (!isVisible) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={onClose}>×</button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
