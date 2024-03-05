import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaCreativeCommonsShare } from "react-icons/fa6";

const Home = () => {
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
      <div className="mt-5 billetterie-box border-2 border-red-400 bg-red-100 p-20">
        <div className="test bg-white bg-opacity-10">
          <h2 className="text-[130px] font-bold text-indigo-600 ">
            LES RENDEZ-VOUS SURPRISES !
          </h2>
          <button className="text-xl flex items-center gap-2">
            <FaCreativeCommonsShare />
            Partager
          </button>
          <p className="text-3xl">
            Nouveaux billets disponibles dès maintenant !
          </p>
          <button>Je fonce!</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
