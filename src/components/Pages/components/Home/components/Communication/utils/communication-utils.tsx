import {AiOutlineMail} from "react-icons/ai";
import {BiHelpCircle} from "react-icons/bi";
import {ItemsCommunication} from "../types/communication.types";

export const communicationItems = [
    {
        icon: <AiOutlineMail/>,
        title: "Send an inquiry and our managers will offer you the best deals.",
        text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
        btnText: "Get a quote",
        theme: "green"
    },
    {
        icon: <BiHelpCircle/>,
        title: "Do you still have questions? Contact us for answers.",
        text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
        btnText: "Contact Us",
        theme: "white"
    }
] as ItemsCommunication[]