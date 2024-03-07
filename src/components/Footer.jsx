import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="bg-black text-white mt-10 p-20 flex justify-between text-xl">
      <div className="ft-links-1 flex gap-5">
        <a href="https://www.instagram.com/paris2024 " target="_blank">
          <FaInstagram />
        </a>
        <a href="https://www.facebook.com/Paris2024" target="_blank">
          <FaFacebookF />
        </a>
        <a
          href="https://www.tiktok.com/@paris2024officiel?is_copy_url=1&is_from_webapp=v1"
          target="_blank"
        >
          <FaTiktok />
        </a>
        <a
          href="https://www.youtube.com/channel/UCg4W1uf-i5X1nVaeWJsKuyA/videos"
          target="_blank"
        >
          <FaYoutube />
        </a>
        <a href="https://x.com/Paris2024" target="_blank">
          <FaSquareXTwitter />
        </a>
      </div>
      <div className="ft-links-2 flex gap-5">
        <a
          href="https://www.paris2024.org/fr/mentions-legales/"
          target="_blank"
        >
          Mentions légales
        </a>
        <a
          href="https://www.paris2024.org/fr/accessibilite-site/"
          target="_blank"
        >
          Accessibilité Site
        </a>
        <a
          href="https://www.paris2024.org/fr/politique-confidentialite/"
          target="_blank"
        >
          Politique de confidentialité
        </a>
        <a href="https://www.paris2024.org/fr/cybersecurite/" target="_blank">
          Cybersécurité
        </a>
      </div>
    </div>
  );
};

export default Footer;
