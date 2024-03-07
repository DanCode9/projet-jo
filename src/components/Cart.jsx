import React from "react";
import { FaTicketAlt } from "react-icons/fa";

const Cart = ({ tickets }) => {
  const getSportIcon = (evenement) => {
    switch (evenement) {
      case "Athlétisme":
        return (
          <img className="size-[200px]" src="src\evenements\atle.jpg" alt="" />
        );
      case "Natation":
        return (
          <img className="size-[200px]" src="src\evenements\nata.jpg" alt="" />
        );
      case "Basketball":
        return (
          <img className="size-[200px]" src="src\evenements\bask.jpg" alt="" />
        );
      case "Football":
        return (
          <img className="size-[200px]" src="src\evenements\foot.jpg" alt="" />
        );
      case "Tennis":
        return (
          <img className="size-[200px]" src="src\evenements\tenn.jpg" alt="" />
        );
      case "Gymnastique":
        return (
          <img className="size-[200px]" src="src\evenements\gym.jpg" alt="" />
        );
      case "Cyclisme":
        return (
          <img className="size-[200px]" src="src\evenements\cyc.jpg" alt="" />
        );
      case "Escalade":
        return (
          <img className="size-[200px]" src="src\evenements\rock.jpeg" alt="" />
        );
      case "Haltérophilie":
        return (
          <img className="size-[200px]" src="src\evenements\pwr.jpg" alt="" />
        );
      case "Judo":
        return (
          <img className="size-[200px]" src="src\evenements\judo.jpg" alt="" />
        );
      default:
        return <FaTicketAlt className="text-blue-500 text-4xl mr-4" />;
    }
  };
  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-3xl font-semibold mb-4 text-gray-800">
        Tickets in Cart:
      </h2>
      {tickets.map((ticket, index) => (
        <div
          key={index}
          className="flex items-center border-2 border-black bg-white p-4 mb-4 rounded-lg shadow-md"
          style={{ minWidth: "400px" }} // Adjust minimum width here
        >
          <FaTicketAlt className="text-blue-500 text-4xl mr-4" />
          <div>
            <p className="text-xl font-semibold text-gray-800">
              {ticket.prenom} {ticket.nom}
            </p>
            <p className="text-lg text-gray-600">Ville: {ticket.ville}</p>
            <p className="text-lg text-gray-600">
              Événement: {ticket.evenement}
            </p>
            <p className="text-lg text-gray-600">Arène: {ticket.arena}</p>
            <p className="text-lg text-gray-600">
              Depuis le: {ticket.depuisDate}
            </p>
            <p className="text-lg text-gray-600">
              Jusqu'au: {ticket.jusquauDate}
            </p>
          </div>
          {getSportIcon(ticket.evenement)}
        </div>
      ))}
    </div>
  );
};

export default Cart;
