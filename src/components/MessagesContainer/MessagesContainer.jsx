import React from 'react';
import './MessagesContainer.scss';

function MessagesContainer() {
  return (
    <div className="msg-container">
        <div className="seller">
            <h5>Vendedor</h5>
        </div>
        <div className="client">
            <h5>Clientes</h5>
        </div>
        <div className="messages">
            <h5>Mensajes</h5>
        </div>
    </div>
  )
}

export default MessagesContainer;