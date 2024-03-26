import React, { useState } from "react";

const HotelBookingForm = () => {
  // State for form fields
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [dateArrivee, setDateArrivee] = useState("");
  const [dateDepart, setDateDepart] = useState("");
  const [nbAdultes, setNbAdultes] = useState(1);
  const [nbEnfants, setNbEnfants] = useState(0);
  const [ville, setVille] = useState("");
  const [hotelPrefere, setHotelPrefere] = useState("");
  const [prixParNuit, setPrixParNuit] = useState(0);

  // Variables for hotel prices
  const parisHotelPrices = {
    "Hôtel Lutetia": 300,
    "Hôtel Ritz Paris": 500,
    "Hôtel Plaza Athénée": 400,
    "Hôtel Le Bristol": 450,
  };

  const marseilleHotelPrices = {
    "InterContinental Marseille - Hotel Dieu": 250,
    "Sofitel Marseille Vieux-Port": 280,
    "Radisson Blu Hotel, Marseille Vieux Port": 220,
    "NH Collection Marseille": 200,
  };
  const lyonHotelPrices = {
    Hotel_InterContinental_Lyon: 270,
    Hotel_Sofitel_Lyon: 320,
    Hotel_Cour_des_Loges_Lyon: 300,
    Hotel_Marriott_Lyon: 280,
  };

  const caenHotelPrices = {
    Hotel_Caen: 250,
    Hotel_B: 200,
    Hotel_C: 180,
    Hotel_D: 220,
  };

  const niceHotelPrices = {
    Hotel_Negresco_Nice: 350,
    Hotel_Hyatt_Regency_Nice: 400,
    Hotel_Mercure_Nice: 320,
    Hotel_Hotel_Boscolo_Nice: 380,
  };

  const toulouseHotelPrices = {
    Hotel_Pullman_Toulouse_Centre: 220,
    Hotel_Grand_Balcons_Toulouse: 200,
    Hotel_Crowne_Plaza_Toulouse: 240,
    Hotel_Mercure_Toulouse_Compans_Caffarelli: 210,
  };

  const bordeauxHotelPrices = {
    Hotel_InterContinental_Bordeaux: 300,
    Hotel_Burdeos_Bordeaux: 250,
    Hotel_Mercure_Bordeaux: 220,
    Hotel_Ibis_Bordeaux: 180,
  };

  const nantesHotelPrices = {
    Hotel_Radisson_Blu_Nantes: 230,
    Hotel_Sofitel_Nantes: 260,
    Hotel_Mercure_Nantes: 240,
    Hotel_Oceania_Nantes: 210,
  };

  const strasbourgHotelPrices = {
    Hotel_Sofitel_Strasbourg: 280,
    Hotel_Hilton_Strasbourg: 260,
    Hotel_Mercure_Strasbourg: 240,
    Hotel_Ibis_Strasbourg: 180,
  };

  const montpellierHotelPrices = {
    Hotel_Courtyard_Marriott_Montpellier: 220,
    Hotel_Novotel_Montpellier: 200,
    Hotel_Crowne_Plaza_Montpellier: 250,
    Hotel_Mercure_Montpellier: 230,
  };
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission
    console.log("Form submitted!");
  };

  // Function to calculate total price
  const calculateTotalPrice = () => {
    const pricePerAdult = prixParNuit;
    const pricePerChild = prixParNuit * 0.5; // Assuming children pay half price

    const totalPrice = nbAdultes * pricePerAdult + nbEnfants * pricePerChild;

    return totalPrice;
  };

  // Function to handle hotel selection
  const handleHotelSelection = (e) => {
    const selectedHotel = e.target.value;
    // Set the price per night based on the selected hotel
    switch (ville) {
      case "Paris":
        setPrixParNuit(parisHotelPrices[selectedHotel]);
        break;
      case "Marseille":
        setPrixParNuit(marseilleHotelPrices[selectedHotel]);
        break;
      case "Lyon":
        setPrixParNuit(lyonHotelPrices[selectedHotel]);
        break;
      case "Caen":
        setPrixParNuit(caenHotelPrices[selectedHotel]);
        break;
      case "Nice":
        setPrixParNuit(niceHotelPrices[selectedHotel]);
        break;
      case "Toulouse":
        setPrixParNuit(toulouseHotelPrices[selectedHotel]);
        break;
      case "Bordeaux":
        setPrixParNuit(bordeauxHotelPrices[selectedHotel]);
        break;
      case "Nantes":
        setPrixParNuit(nantesHotelPrices[selectedHotel]);
        break;
      case "Strasbourg":
        setPrixParNuit(strasbourgHotelPrices[selectedHotel]);
        break;
      case "Montpellier":
        setPrixParNuit(montpellierHotelPrices[selectedHotel]);
        break;
      // Add cases for other cities as needed
      default:
        setPrixParNuit(0); // Set default price if no city selected
    }
    setHotelPrefere(selectedHotel);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">
        Réservez votre hôtel
      </h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Prénom"
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
            className="input"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Nom"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            className="input"
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
            required
          />
          <input
            type="tel"
            placeholder="Téléphone"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
            className="input"
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <input
            type="date"
            placeholder="Date d'Arrivée"
            value={dateArrivee}
            onChange={(e) => setDateArrivee(e.target.value)}
            className="input"
            required
          />
          <input
            type="date"
            placeholder="Date de Départ"
            value={dateDepart}
            onChange={(e) => setDateDepart(e.target.value)}
            className="input"
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <input
            type="number"
            placeholder="Nombre d'Adultes"
            value={nbAdultes}
            onChange={(e) => setNbAdultes(parseInt(e.target.value))}
            className="input"
            min="1"
            required
          />
          <input
            type="number"
            placeholder="Nombre d'Enfants"
            value={nbEnfants}
            onChange={(e) => setNbEnfants(parseInt(e.target.value))}
            className="input"
            min="0"
            required
          />
        </div>
        <div className="mb-4">
          <select
            value={ville}
            onChange={(e) => setVille(e.target.value)}
            className="input"
            required
          >
            <option value="">Sélectionner une ville</option>
            <option value="Paris">Paris</option>
            <option value="Marseille">Marseille</option>
            <option value="Strasbourg">Strasbourg</option>
            <option value="Lyon">Lyon</option>
            <option value="Caen">Caen</option>
            <option value="Nice">Nice</option>
            <option value="Bordeaux">Bordeaux</option>
            <option value="Nantes">Nantes</option>
            <option value="Montpellier">Montpellier</option>

            {/* Add options for other cities */}
          </select>
        </div>
        <div className="mb-4">
          <select
            id="hotelPrefere"
            value={hotelPrefere}
            onChange={handleHotelSelection}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="">Sélectionnez un hôtel préféré</option>
            {ville === "Paris" &&
              Object.keys(parisHotelPrices).map((hotel) => (
                <option key={hotel} value={hotel}>
                  {hotel} - Prix: {parisHotelPrices[hotel]}€/nuit
                </option>
              ))}
            {ville === "Marseille" &&
              Object.keys(marseilleHotelPrices).map((hotel) => (
                <option key={hotel} value={hotel}>
                  {hotel} - Prix: {marseilleHotelPrices[hotel]}€/nuit
                </option>
              ))}
            {ville === "Lyon" &&
              Object.keys(lyonHotelPrices).map((hotel) => (
                <option key={hotel} value={hotel}>
                  {hotel} - Prix: {lyonHotelPrices[hotel]}€/nuit
                </option>
              ))}
            {ville === "Caen" &&
              Object.keys(caenHotelPrices).map((hotel) => (
                <option key={hotel} value={hotel}>
                  {hotel} - Prix: {caenHotelPrices[hotel]}€/nuit
                </option>
              ))}
            {ville === "Nice" &&
              Object.keys(niceHotelPrices).map((hotel) => (
                <option key={hotel} value={hotel}>
                  {hotel} - Prix: {niceHotelPrices[hotel]}€/nuit
                </option>
              ))}
            {ville === "Toulouse" &&
              Object.keys(toulouseHotelPrices).map((hotel) => (
                <option key={hotel} value={hotel}>
                  {hotel} - Prix: {toulouseHotelPrices[hotel]}€/nuit
                </option>
              ))}
            {ville === "Bordeaux" &&
              Object.keys(bordeauxHotelPrices).map((hotel) => (
                <option key={hotel} value={hotel}>
                  {hotel} - Prix: {bordeauxHotelPrices[hotel]}€/nuit
                </option>
              ))}
            {ville === "Nantes" &&
              Object.keys(nantesHotelPrices).map((hotel) => (
                <option key={hotel} value={hotel}>
                  {hotel} - Prix: {nantesHotelPrices[hotel]}€/nuit
                </option>
              ))}
            {ville === "Strasbourg" &&
              Object.keys(strasbourgHotelPrices).map((hotel) => (
                <option key={hotel} value={hotel}>
                  {hotel} - Prix: {strasbourgHotelPrices[hotel]}€/nuit
                </option>
              ))}
            {ville === "Montpellier" &&
              Object.keys(montpellierHotelPrices).map((hotel) => (
                <option key={hotel} value={hotel}>
                  {hotel} - Prix: {montpellierHotelPrices[hotel]}€/nuit
                </option>
              ))}
          </select>
        </div>
        <div className="mb-4">
          <p className="text-xl font-semibold">
            Prix total pour {nbAdultes} adulte(s) et {nbEnfants} enfant(s):{" "}
            {calculateTotalPrice()}€
          </p>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px
            -4 rounded focus:outline-none focus:shadow-outline"
          >
            Réserver
          </button>
        </div>
      </form>
    </div>
  );
};

export default HotelBookingForm;
