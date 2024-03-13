import React from "react";
import { FaTicketAlt } from "react-icons/fa";

const Cart = ({ tickets }) => {
  const getSportIcon = (evenement) => {
    switch (evenement) {
      case "Athlétisme":
        return (
          <img
            className="object-cover size-[200px]"
            src="src\evenements\atle.jpg"
            alt=""
          />
        );
      case "Natation":
        return (
          <img
            className="object-cover size-[200px]"
            src="src\evenements\nata.jpg"
            alt=""
          />
        );
      case "Basketball":
        return (
          <img
            className="object-cover size-[200px]"
            src="src\evenements\bask.jpg"
            alt=""
          />
        );
      case "Football":
        return (
          <img
            className="object-cover size-[200px]"
            src="src\evenements\foot.jpg"
            alt=""
          />
        );
      case "Tennis":
        return (
          <img
            className="size-[200px] object-cover"
            src="src\evenements\tenn.jpg"
            alt=""
          />
        );
      case "Gymnastique":
        return (
          <img
            className="object-cover size-[200px]"
            src="src\evenements\gym.jpg"
            alt=""
          />
        );
      case "Cyclisme":
        return (
          <img
            className="object-cover size-[200px]"
            src="src\evenements\cyc.jpg"
            alt=""
          />
        );
      case "Escalade":
        return (
          <img
            className="object-cover size-[200px]"
            src="src\evenements\rock.jpeg"
            alt=""
          />
        );
      case "Haltérophilie":
        return (
          <img
            className="object-cover size-[200px]"
            src="src\evenements\pwr.jpg"
            alt=""
          />
        );
      case "Judo":
        return (
          <img
            className="object-cover size-[200px]"
            src="src\evenements\judo.jpg"
            alt=""
          />
        );
      default:
        return <FaTicketAlt className="text-yellow-500 text-4xl" />;
    }
  };

  if (tickets.length === 0) {
    return null;
  }

  return (
    <div className="cart-container mx-auto w-[900px] bg-slate-200 overflow-auto max-h-[500px] rounded-lg">
      <div className="amount-and-buy-box p-3 items-center flex justify-between border-2 ">
        <h2 className="text-3xl  font-semibold text-gray-800 flex justify-between items-center">
          Vos billets: {tickets.length}
        </h2>
        <button className="bg-slate-200 border-[1px] border-black hover:bg-green-400  text-xl  py-1 px-4  h-fit rounded-xl font-bold">
          Acheter!
        </button>
      </div>
      <div className="p-2">
        {tickets.map((ticket, index) => (
          <div
            key={index}
            className="flex items-center justify-between border-2 bg-white p-4 mb-4 rounded-lg shadow-md"
            style={{ minWidth: "400px" }}
          >
            <FaTicketAlt className="text-yellow-500 text-4xl" />
            <div className="ticket-info-box border-2  grid grid-cols-3 gap-3">
              <p className="text-xl font-semibold text-gray-800">
                {ticket.prenom} {ticket.nom}
              </p>
              <p className="text-lg text-gray-600">Ville: {ticket.ville}</p>
              <p className="text-lg text-gray-600">
                Depuis le: {ticket.depuisDate}
              </p>
              <p className="text-lg text-gray-600">Arène: {ticket.arena}</p>
              <p className="text-lg text-gray-600">
                Événement: {ticket.evenement}
              </p>
              <p className="text-lg text-gray-600">
                Jusqu'au: {ticket.jusquauDate}
              </p>
            </div>
            <div className="rounded-2xl border-2  overflow-hidden ">
              {getSportIcon(ticket.evenement)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
