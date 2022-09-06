import React from 'react';
import ItemList from '../ItemList/ItemList';

function SellerColumn({ sellers, setClientsToShow }) {

  return (
    <div className="seller">
        <h5>Vendedor</h5>
        {
            sellers.map((seller, i) => {
                return (
                    <ItemList 
                        key={seller + i} 
                        sellers={sellers} 
                        clients={seller.clients} 
                        setClientsToShow={setClientsToShow}>
                            {seller.name}
                    </ItemList>
                )
            }
        )}
    </div>
  )
}

export default SellerColumn;