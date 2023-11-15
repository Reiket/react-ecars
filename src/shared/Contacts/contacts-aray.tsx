import React from "react";
import { BiLogoFacebook } from "react-icons/bi";
import {AiFillInstagram, AiFillYoutube, AiOutlineTwitter} from "react-icons/ai";
import {RiMailFill, RiWhatsappFill} from "react-icons/ri";
import {ContactsArrayType} from "./contacts-array.types";
export const contacts = [
    {url: "https://www.facebook.com/", icon: <BiLogoFacebook />},
    {url: "https://twitter.com/", icon: <AiOutlineTwitter />},
    {url: "https://www.youtube.com/", icon: <AiFillYoutube />},
    {url: "https://www.instagram.com/", icon: <AiFillInstagram />},
    {url: "tel:+971 55 811 9024", icon: <RiWhatsappFill />, text: "+971 55 811 9024"},
    {url: "request@example.com", icon: <RiMailFill />, text: "request@example.com"},
] as Array<ContactsArrayType>