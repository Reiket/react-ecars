import React from "react";
import { BiLogoFacebook } from "react-icons/bi";
import {AiFillInstagram, AiFillLinkedin, AiFillYoutube, AiOutlineTwitter} from "react-icons/ai";
import {RiMailFill, RiWhatsappFill} from "react-icons/ri";
export type ContactsArrayType = {
    url: string
    icon?: React.JSX.Element
    text: string
}
export const contactLinks = [
    {url: "tel:+971 55 811 9024", icon: <RiWhatsappFill />, text: "+971 55 811 9024"},
    {url: "request@example.com", icon: <RiMailFill />, text: "request@example.com"},
] as ContactsArrayType[]


export const contacts = [
    {url: "https://www.facebook.com/", icon: <BiLogoFacebook/>, text: "Facebook"},
    {url: "https://twitter.com/", icon: <AiOutlineTwitter />, text: "Twitter"},
    {url: "https://www.youtube.com/", icon: <AiFillYoutube />, text: "Youtube"},
    {url: "https://www.instagram.com/", icon: <AiFillInstagram />, text: "Instagram"},
    {url: "https://ua.linkedin.com/", icon: <AiFillLinkedin/>, text: "Linkedin"},
    {url: "tel:+971 55 811 9024", icon: <RiWhatsappFill />, text: "+971 55 811 9024"},
    {url: "request@example.com", icon: <RiMailFill />, text: "request@example.com"},
] as ContactsArrayType[]

export const socialLinks = [
    {url: "https://www.facebook.com/", icon: <BiLogoFacebook/>, text: "Facebook"},
    {url: "https://twitter.com/", icon: <AiOutlineTwitter />, text: "Twitter"},
    {url: "https://www.youtube.com/", icon: <AiFillYoutube />, text: "Youtube"},
    {url: "https://www.instagram.com/", icon: <AiFillInstagram />, text: "Instagram"},
    {url: "https://ua.linkedin.com/", icon: <AiFillLinkedin/>, text: "Linkedin"},
] as ContactsArrayType[]