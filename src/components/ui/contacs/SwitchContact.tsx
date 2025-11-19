"use client";

import { useState } from "react";
import { motion } from "framer-motion";
// import { FaTelegram } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { ImWhatsapp } from "react-icons/im";
import scss from "./SwitchContact.module.scss";

const SwitchContact = () => {
  const [open, setOpen] = useState<boolean>(false);

  const LogoAnimate = (
    x: number,
    y: number,
    scale: number,
    rotate: number,
    opacity: number
  ) => ({
    opacity,
    x,
    y,
    scale,
    rotate,
  });

  return (
    <>
      <motion.div
        onClick={() => setOpen(!open)}
        whileTap={{ scale: 0.8 }}
        className={`${scss.content} sm:${scss.containerSmall}`}
      >
        <div className={`${scss.ping} ${open ? "" : "animate-ping"}`}></div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className={`${scss.icon} sm:${scss.iconSmall}`}
        >
          <path d="M3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V6C3 14.284 9.716 21 18 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V15.721C21.0001 15.511 20.934 15.3064 20.8112 15.136C20.6885 14.9657 20.5152 14.8383 20.316 14.772L15.823 13.274C15.5947 13.1981 15.3466 13.2071 15.1244 13.2993C14.9021 13.3915 14.7205 13.5607 14.613 13.776L13.483 16.033C11.0345 14.9267 9.07332 12.9655 7.967 10.517L10.224 9.387C10.4393 9.27945 10.6085 9.0979 10.7007 8.87564C10.7929 8.65339 10.8019 8.40534 10.726 8.177L9.228 3.684C9.16171 3.48496 9.03449 3.3118 8.86436 3.18905C8.69422 3.0663 8.48979 3.00016 8.28 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579Z" />
        </svg>
      </motion.div>
      {[{
        href: "https://api.whatsapp.com/send?phone=996551366001",
        icon: <ImWhatsapp color="white" />,
        scss: scss.linkWhatsapp
      }, {
        href: "https://www.instagram.com/begali_tolomushov/" ,
        icon: <GrInstagram color="white" />,
        scss: scss.linkInstagram
      },

    ].map(({ href, icon, scss: posStyle }, index) => (
        <motion.a
          key={index}
          target="blank"
          href={href}
          whileHover={{ scale: 1.2 }}
          initial={{ opacity: 0 }}
          animate={open ? LogoAnimate(-100, 0, 1, 0, 1) : LogoAnimate(-15, 0, 0.1, 360, 0)}
          transition={{ delay: !open ? 0 : 0.2 + index * 0.05 }}
          className={`${scss.link} ${posStyle}`}
        >
          {icon}
        </motion.a>
      ))}
    </>
  );
};

export default SwitchContact;
