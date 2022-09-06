import React from 'react';
import ItemClient from '../ItemClient/ItemClient';

function ClientsColumn({ clientsToShow, setMessagesToShow }) {
  return (
    <div className="client">
        <h5>Clientes</h5>
        {
            clientsToShow.map((client, index) => {
                return (
                    <ItemClient 
                        key={client + index}
                        setMessagesToShow={setMessagesToShow}
                        messages={client.messages}
                    >
                            {client.name}
                    </ItemClient>
                )
            })
        }
    </div>
  )
}

export default ClientsColumn;