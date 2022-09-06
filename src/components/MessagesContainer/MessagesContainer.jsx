import React, { useState } from 'react';
import ClientsColumn from '../ClientsColumn/ClientsColumn';
import SellerColumn from '../SellerColumn/SellerColumn';
import MessagesColumn from '../MessagesColumn/MessagesColumn.jsx';
import './MessagesContainer.scss';

function MessagesContainer() {

  const sellers = [
    {
        name: 'Leandro',
        clients: [
          {
            name: 'a',
            messages: ['sndbasjjdnas', 'adsjnjadsn', 'asdnasnj']
          }, 
          {
            name: 'b',
            messages: ['sajdjasbdsamb', 'asdbjasbdasj', 'asjdbsadsnbd', 'ajsbdasbdmsbd']
          }, 
          {
            name: 'c',
            messages: ['asaas', 'asdasdas']
          }, 
          {
            name: 'j',
            messages: ['asdasda']
          }]
    }, 
    {
        name: 'Matias',
        clients: [
          {
            name: 'd',
            messages: ['sa', 'assss', 'aa']
          }, 
          {
            name: 'e',
            messages: ['s', 'aaaaaaa']
          } , 
          {
            name: 'f',
            messages: ['asasas']
          }, 
          {
            name: 'k',
            messages: ['cddc', 'asasdd']
          }, 
          {
            name: 'l',
            messages: ['qqasa']
          }]
    }
  ];

  const [clientsToShow, setClientsToShow] = useState([]);
  const [messagesToShow, setMessagesToShow] = useState([]);

  return (
    <div className="msg-container">
        <SellerColumn 
          sellers={sellers} 
          setClientsToShow={setClientsToShow} 
        />
        <ClientsColumn 
          clientsToShow={clientsToShow}
          setMessagesToShow={setMessagesToShow}
        />
        <MessagesColumn 
          messagesToShow={messagesToShow}
        />
    </div>
  )
}

export default MessagesContainer;