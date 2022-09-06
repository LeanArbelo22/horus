import React from 'react';

function ItemClient({ children, messages = [], setMessagesToShow }) {
  return (
    <div className="item-list" onClick={() => setMessagesToShow(messages)} >
        <p className="item-name">{children}</p>
    </div>
  )
}

export default ItemClient;