import React from 'react';
import ItemMessage from '../ItemMessage/ItemMessage';

function MessagesColumn({ messagesToShow }) {
  return (
    <div className="messages">
        <h5>Mensajes</h5>
        {
          messagesToShow.map((message, index) => {
            return (
              <ItemMessage key={message + index} message={message} />
            )
          })
        }
    </div>
  )
}

export default MessagesColumn;