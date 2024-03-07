import React from "react";

const Cart = ({ tickets }) => {
  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-lg font-semibold mb-4">Tickets in Cart:</h2>
      {tickets.map((ticket, index) => (
        <div key={index} className="bg-gray-100 p-4 mb-2">
          <p>
            <strong>
              {ticket.prenom} {ticket.nom}
            </strong>
          </p>
          <p>Ville: {ticket.ville}</p>
          <p>Événement: {ticket.evenement}</p>
          <p>Arène: {ticket.arena}</p>
          <p>Depuis le: {ticket.depuisDate}</p>
          <p>Jusqu'au: {ticket.jusquauDate}</p>
          <p>Nombre de Billets: {ticket.nombreBillet}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
