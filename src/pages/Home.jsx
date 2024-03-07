import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaCreativeCommonsShare } from "react-icons/fa6";
import Footer from "../components/Footer";
import OlympicGamesForm from "../components/TicketForm";
import Cart from "../components/Cart";

const Home = () => {
  const [tickets, setTickets] = useState([]);

  const calculateTimeLeft = () => {
    const difference = +new Date("2024-07-26T00:00:00Z") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const formatTime = (value) => {
    return value < 10 ? `0${value}` : value;
  };

  return (
    <div className="homepage bg-slate-200  ">
      {/* FIRST PART OF THE LANDING PAGE WITH THE TIMER  */}
      <div className="landing-box bg-white pb-[3rem] shadow-md rounded-br-[70px] ">
        <div className="landing-items bg-[url(src/img/bg-jo-jpg.png)]  bg-cover  shadow-lg pb-5 ">
          <Navbar />
          <div className="countdown-box mt-20  items-center rounded-full flex gap-5  px-10  mx-auto w-fit bg-slate-100 shadow-xl ">
            <img
              src="src\img\omegalogo.png"
              className="border-1 border-black w-[80px] "
              alt=""
            />
            <p className="text-center">
              JUSQU'AUX JEUX OLYMPIQUES <br /> DE PARIS 2024
            </p>
            <div className="jours  text-center">
              <p>{formatTime(timeLeft.days)}</p>
              <p>JOURS</p>
            </div>
            <div className="heures text-center">
              <p>{formatTime(timeLeft.hours)}</p>
              <p>HEURES</p>
            </div>
            <div className="minutes text-center ">
              <p>{formatTime(timeLeft.minutes)}</p>
              <p>MINUTES</p>
            </div>
            <div className="seconds  text-center">
              <p>{formatTime(timeLeft.seconds)}</p>
              <p>SECONDES</p>
            </div>
          </div>
          <div className="home-content  px-20 ">
            <h1 className="text-[130px]  font-bold text-white w-[70%] ">
              LES MÉDAILLES DES JEUX
            </h1>
            <button className="bg-white mb-20 flex gap-5 font-medium items-center shadow-xl py-2 px-5 rounded-full">
              <p>Decouverz les medailles!</p>
              <FaLongArrowAltRight />
            </button>
          </div>
        </div>
        {/* NEWS BOX PART */}
        <div className="news-box mx-10 mt-10 ">
          <h2 className="text-3xl font-bold mb-7">Actualité de Paris 2024</h2>
          <div className="news-items  grid grid-rows-2 grid-flow-col gap-4">
            <div className="item1 p-5 gap-5 water-polo flex border-l-2 border-black">
              <img
                className="h-20 rounded-lg"
                src="src\img\news-polo.jpg"
                alt=""
              />
              <div className="news-text">
                <h2 className="font-bold">En route vers Paris 2024 !</h2>
                <p>
                  Le tableau des tournois de Water-polo des Jeux Olympiques
                  dévoilé !
                </p>
              </div>
            </div>
            <div className="item2 p-5 gap-5 surf flex border-l-2 border-black">
              <img
                className="h-20 rounded-lg"
                src="src\img\news-surf.jpg"
                alt=""
              />
              <div className="news-text">
                <h2 className="font-bold">Compétitions de surf à Teahupo’o</h2>
                <p>
                  Réaction à la proposition de la Fédération Internationale de
                  Surf
                </p>
              </div>
            </div>
            <div className="item3 p-5 gap-5 30minactivite flex border-l-2 border-black">
              <img
                className="h-20 rounded-lg"
                src="src\img\news-30min.jpg"
                alt=""
              />
              <div className="news-text">
                <h2 className="font-bold">
                  30 minutes d’activité physique quotidienne à l’école
                </h2>
                <p>
                  91% des enseignants constatent une réduction de la sédentarité
                  des enfants
                </p>
              </div>
            </div>
            <div className="item4 p-5 gap-5 fraude flex border-l-2 border-black">
              <img
                className="h-20 rounded-lg"
                src="src\img\news-fraude.jpg"
                alt=""
              />
              <div className="news-text">
                <h2 className="font-bold">
                  Fraudes auprès des professionnels de la restauration
                </h2>
                <p>
                  Paris 2024 et son prestataire officiel d’hospitalité, la
                  société..
                </p>
              </div>
            </div>
            <div className="item5 p-5 gap-5 conseil flex border-l-2 border-black">
              <img
                className="h-20 rounded-lg"
                src="src\img\news-conseil.png"
                alt=""
              />
              <div className="news-text">
                <h2 className="font-bold">
                  Conseil d’administration de Paris 2024
                </h2>
                <p>
                  Des décisions importantes ont été prises pour garantir la
                  bonne gouvernance du projet avec..
                </p>
              </div>
            </div>
            <div className="item6 p-5 gap-5 surf2 flex border-l-2 border-black">
              <img
                className="h-20 rounded-lg"
                src="src\img\news-surf.jpg"
                alt=""
              />
              <div className="news-text">
                <h2 className="font-bold">
                  Confirmation du site de Teahupo’o pour l’organisation des
                  épreuves de surf
                </h2>
                <p>
                  A la suite des inquiétudes exprimées au sujet de
                  l’installation d’une nouvelle...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* BILLETTERIE PART */}
      <div className="mt-5 billetterie-box border-2  shadow-md rounded-br-[70px] pb-20 bg-white">
        <div className="test bg-white bg-opacity-10 bg-[url(src/img/bg.jpg)] bg-cover px-20 pb-20">
          <h2 className="text-[130px] font-bold text-amber-300 ">
            LES RENDEZ-VOUS SURPRISES !
          </h2>
          <button className="text-xl flex items-center gap-2">
            <FaCreativeCommonsShare />
            Partager
          </button>
          <p className="text-3xl mt-10 ">
            Nouveaux billets disponibles dès maintenant !
          </p>
          <button className="flex items-center justify-between gap-3 mt-5 bg-black rounded-full text-white py-2 px-7">
            <p>Site de la billetterie</p> <FaLongArrowAltRight />
          </button>
        </div>
        <div className="bil-info-container mt-20 px-20">
          <h2 className="text-2xl font-bold mb-10">Plus d'informations</h2>
          <div className="bil-info-box flex gap-2">
            <div className="itemS1 p-5 gap-5 water-polo flex border-l-2 border-black">
              <img className="h-20 rounded-lg" src="src\img\lou.jpg" alt="" />
              <div className="news-text">
                <h2 className="font-bold">
                  Achetez vos billets pour le Hockey
                </h2>
                <p>
                  Retrouvez tous les billets disponibles pour le Hockey sur le
                  site de la billetterie
                </p>
              </div>
            </div>
            <div className="item1 p-5 gap-5 water-polo flex border-l-2 border-black">
              <img className="h-20 rounded-lg" src="src\img\pp.jpg" alt="" />
              <div className="news-text">
                <h2 className="font-bold">Venir voir les Jeux</h2>
                <p>Préparez au mieux votre venue pour les Jeux.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* INFO IMPORTANTE */}
      <div className="info-import mt-10 border-2 border-black bg-white p-10 text-center flex flex-col gap-5">
        <h2 className="text-3xl font-bold">INFORMATION IMPORTANTE</h2>
        <p className="text-lg">
          PARIS 2024 et son prestataire officiel d'hospitalité, la société On
          Location, ont récemment été informés que plusieurs personnes et/ou
          sociétés se font passer pour des représentants autorisés de PARIS 2024
          et/ou d'On Location pour encaisser frauduleusement des paiements en
          contrepartie de prestations labellisées Paris 2024 (par exemple, la
          location de stands de vente sur les sites olympiques) auprès de
          restaurants et d'entreprises de restauration en France. PARIS 2024 et
          On Location vous recommandent la plus grande vigilance.
        </p>
        <p className="text-lg">
          Si vous auez le moindre doute, nous vous invitons à contacter l'équipe
          de PARIS 2024 via integrityandenforcement@paris2024.org et On Location
          via alertfraud@onlocationexp.com
        </p>
        <p className="text-lg">
          PARIS 2024 et On Location ont déposé des plaintes pénales auprès des
          autorités compétentes et des enquêtes sont actuellement en cours.
        </p>
      </div>
      {/* PARTENAIRES */}
      <div className="partenaires-container  mt-10 ">
        <div className="partenaires-mondiau border-2 text-center p-10 bg-white shadow-md rounded-br-[70px]">
          <h2 className="text-2xl font-bold">Partenaires Mondiaux</h2>
          <div className="grid grid-cols-5 justify-center ">
            <img
              className="logo item-logo"
              alt="Airbnb"
              loading="lazy"
              src="https://medias.paris2024.org/uploads/2020/05/Rang1-PartMond-1-Airbnb-RVB.svg"
            />
            <img
              className="logo item-logo"
              alt="Alibaba"
              loading="lazy"
              src="https://medias.paris2024.org/uploads/2021/11/Rang1-PartMond-2-Alibaba-RVB.svg"
            />
            <img
              className="logo item-logo"
              alt="Allianz"
              loading="lazy"
              src="https://medias.paris2024.org/uploads/2020/05/Rang1-PartMond-3-Allianz-RVB-1.svg"
            />
            <img
              className="logo item-logo"
              alt="Atos"
              loading="lazy"
              src="https://medias.paris2024.org/uploads/2020/05/Rang1-PartMond-4-Atos-RVB-2.svg"
            />
            <img
              className="logo item-logo"
              alt="Bridgestone"
              loading="lazy"
              src="https://medias.paris2024.org/uploads/2020/05/Rang1-PartMond-5-Bridgestone-RVB.svg"
            />
            <img
              className="logo item-logo"
              alt="Coca-Cola / Mengniu"
              loading="lazy"
              src="https://medias.paris2024.org/uploads/2020/12/Rang1-PartMond-6-CocaCola_Mengniu-RVB.svg"
            />
            <img
              className="logo item-logo"
              alt="Deloitte"
              loading="lazy"
              src="https://medias.paris2024.org/uploads/2022/07/Rang1-PartMond-7-Deloitte-RVB.svg"
            />
            <img
              className="logo item-logo"
              alt="Intel"
              loading="lazy"
              src="https://medias.paris2024.org/uploads/2020/10/Logo-Intel-RVB.svg"
            />
            <img
              className="logo item-logo"
              alt="Omega"
              loading="lazy"
              src="https://medias.paris2024.org/uploads/2020/05/Rang1-PartMond-8-Omega-RVB.svg"
            />
            <img
              className="logo item-logo"
              alt="Panasonic"
              loading="lazy"
              src="https://medias.paris2024.org/uploads/2020/05/Rang1-PartMond-9-Panasonic-RVB.svg"
            />
            <img
              className="logo item-logo"
              alt="P&amp;G"
              loading="lazy"
              src="https://medias.paris2024.org/uploads/2021/09/Rang1-PartMond-10-PG-RVB.svg"
            />
            <img
              className="logo item-logo"
              alt="Samsung"
              loading="lazy"
              src="https://medias.paris2024.org/uploads/2020/05/Rang1-PartMond-11-Samsung-RVB.svg"
            />
            <img
              className="logo item-logo"
              alt="Toyota"
              loading="lazy"
              src="https://medias.paris2024.org/uploads/2020/05/Rang1-PartMond-12-Toyota-RVB.svg"
            />
            <img
              className="logo item-logo"
              alt="Visa"
              loading="lazy"
              src="https://medias.paris2024.org/uploads/2020/12/Rang1-PartMond-13-Visa-RVB-1.svg"
            />
          </div>
        </div>
      </div>
      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default Home;
