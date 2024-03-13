import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import Cart from "./Cart";
import Navbar from "./Navbar";

const Billetterie = () => {
  const [tickets, setTickets] = useState([]);
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [ville, setVille] = useState("");
  const [evenement, setEvenement] = useState("");
  const [arena, setArena] = useState("");
  const [depuisDate, setDepuisDate] = useState("");
  const [jusquauDate, setJusquauDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTicket = {
      prenom: prenom,
      nom: nom,
      ville: ville,
      evenement: evenement,
      arena: arena,
      depuisDate: depuisDate,
      jusquauDate: jusquauDate,
    };

    setTickets([...tickets, newTicket]);

    setPrenom("");
    setNom("");
    setVille("");
    setEvenement("");
    setArena("");
    setDepuisDate("");
    setJusquauDate("");
  };

  return (
    <div className="landing-ticket bg-[url(src/img/bg2.jpg)] bg-cover pb-10 ">
      <Navbar />
      <div className="billet-contents flex p-8   justify-between">
        {/* TICKET FORM */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-white rounded-lg shadow-md p-8 h-[500px]  "
        >
          <h2 className="text-2xl font-bold text-center">
            Achetez votre billet
          </h2>
          <div className="mb-4 flex mt-8">
            <div className="w-1/2 mr-2">
              <label
                htmlFor="prenom"
                className="block text-gray-700 text-sm font-semibold mb-2"
              >
                Prénom:
              </label>
              <input
                type="text"
                id="prenom"
                value={prenom}
                onChange={(e) => setPrenom(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="w-1/2 ml-2">
              <label
                htmlFor="nom"
                className="block text-gray-700 text-sm font-semibold mb-2"
              >
                Nom:
              </label>
              <input
                type="text"
                id="nom"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
          </div>
          <div className="mb-4 flex">
            <div className="w-1/2 mr-2">
              <label
                htmlFor="ville"
                className="block text-gray-700 text-sm font-semibold mb-2"
              >
                Ville:
              </label>
              <select
                id="ville"
                value={ville}
                onChange={(e) => setVille(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              >
                <option value="">Sélectionner une ville</option>
                <option value="Paris">Paris</option>
                <option value="Marseille">Marseille</option>
                <option value="Lyon">Lyon</option>
                <option value="Toulouse">Toulouse</option>
                <option value="Nice">Nice</option>
                <option value="Bordeaux">Bordeaux</option>
                <option value="Nantes">Nantes</option>
                <option value="Strasbourg">Strasbourg</option>
                <option value="Montpellier">Montpellier</option>
              </select>
            </div>
            <div className="w-1/2 ml-2">
              <label
                htmlFor="evenement"
                className="block text-gray-700 text-sm font-semibold mb-2"
              >
                Événement:
              </label>
              <select
                id="evenement"
                value={evenement}
                onChange={(e) => setEvenement(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              >
                <option value="">Sélectionner un événement</option>
                <option value="Athlétisme">Athlétisme</option>
                <option value="Natation">Natation</option>
                <option value="Basketball">Basketball</option>
                <option value="Football">Football</option>
                <option value="Tennis">Tennis</option>
                <option value="Gymnastique">Gymnastique</option>
                <option value="Cyclisme">Cyclisme</option>
                <option value="Escalade">Escalade</option>
                <option value="Haltérophilie">Haltérophilie</option>
                <option value="Judo">Judo</option>
              </select>
            </div>
          </div>
          <div className="mb-4 flex">
            <div className="w-1/2 mr-2">
              <label
                htmlFor="depuisDate"
                className="block text-gray-700 text-sm font-semibold mb-2"
              >
                Depuis le:
              </label>
              <input
                type="date"
                id="depuisDate"
                value={depuisDate}
                onChange={(e) => setDepuisDate(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="w-1/2 ml-2">
              <label
                htmlFor="jusquauDate"
                className="block text-gray-700 text-sm font-semibold mb-2"
              >
                Jusqu'au:
              </label>
              <input
                type="date"
                id="jusquauDate"
                value={jusquauDate}
                onChange={(e) => setJusquauDate(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
          </div>
          <div className="mb-4 flex">
            <div className="w-1/2 mr-2">
              <label
                htmlFor="arena"
                className="block text-gray-700 text-sm font-semibold mb-2"
              >
                Arène:
              </label>
              <select
                id="arena"
                value={arena}
                onChange={(e) => setArena(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              >
                <option value="">Sélectionner une arène</option>
                <option value="Arena Bercy">Arena Bercy</option>
                <option value="Paris Nord">Paris Nord</option>
                <option value="Stade de France">Stade de France</option>
                <option value="Marseille Arena">Marseille Arena</option>
                <option value="Lyon Stadium">Lyon Stadium</option>
                <option value="Toulouse Arena">Toulouse Arena</option>
                <option value="Nice Stadium">Nice Stadium</option>
              </select>
            </div>
            <div className="w-1/2 ml-2 flex justify-end items-end">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Acheter un billet
              </button>
            </div>
          </div>
        </form>
        {/* CART DISPLAY */}
        <div className="cart-div">
          <Cart tickets={tickets} setTickets={setTickets} />
        </div>
      </div>
    </div>
  );
};

export default Billetterie;
