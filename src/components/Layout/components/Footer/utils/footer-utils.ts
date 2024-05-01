import {FooterLinks} from "../types/footer.types";
import {scroller} from "react-scroll";
import {ROUTES} from "../../../../../app/router/router";

export const companyLinks = [
    { url: ROUTES.about, text: "About Us" },
    { url: ROUTES.blog, text: "Blog" },
    { url: ROUTES.faq, text: "FAQ" },
] as FooterLinks[]
export const carsLinks = [
    {text: "Special offers", scroll: "offers" },
    { url: "/", text: "New cars" },
    { url: "/", text: "Used cars" },
    {text: "Brands", scroll: "brands" },
] as FooterLinks[]
export const footerCopyLinks = [
    {
        url: ROUTES.privacy,
        text: "Privacy Policy"
    },
    {
        url: ROUTES.terms,
        text: "Terms & Conditions"
    }
] as FooterLinks[]

export const scrollToBlock = (item: string) => {
    scroller.scrollTo(item, {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
    });
};

export const footerItemLogoText = "Nullam non nisi est sit amet. Arcu vitae elementum curabitur vitae nunc. Ut tellus elementum sagittis vitae et leo duis."

