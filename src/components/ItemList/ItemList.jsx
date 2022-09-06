import React from 'react';
import './ItemList.scss';

function ItemList({ children, clients = [], setClientsToShow }) {
    
  return (
    <div className="item-list" onClick={() => setClientsToShow(clients)} >
        <p className="item-name">{children}</p>
    </div>
  )
}

export default ItemList;